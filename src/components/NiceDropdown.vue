<template>
  <div
    class="nice-component nice-dropdown"
    :class="{
      disabled: disabled,
      'no-margin': noMargin,
      'can-clear': canClear,
      'has-value': modelValue,
    }"
  >
    <NiceComponentHeader
      :title="title"
      :required="required"
      :caption="caption"
    />

    <div class="nice-dropdown-wrapper">
      <NicePopup
        no-padding
        placement="bottom-start"
        ref="popup"
        class="nice-dropdown-popup-wrapper"
        @change="popupChanged"
        :disabled="disabled"
      >
        <template #trigger>
          <div class="input-group">
            <div class="select-wrapper">
              <div class="selected-value" :class="{ focus }">
                <input
                  :required="required"
                  :value="modelValue"
                  class="hidden-input"
                  @focus="focus = true"
                  @blur="focus = false"
                  @keypress="onKeypress"
                  :disabled="disabled"
                />
                <div class="option" v-if="!loading && modelValue">
                  <slot name="selected-option" :item="modelValue">
                    {{
                      formatFunction
                        ? formatFunction(modelValue)
                        : localValue[valueName]
                    }}
                  </slot>
                </div>
                <!-- <div
                  class="no-options"
                  v-if="
                    !nullable &&
                    !loading &&
                    !modelValue &&
                    (!innerValues || innerValues.length == 0) &&
                    !required
                  "
                >
                  {{ $t('Nice', "No options") }}
                </div> -->
                <!-- <div
                  class="no-options"
                  v-if="
                    !nullable &&
                    !loading &&
                    !modelValue &&
                    innerValues &&
                    innerValues.length > 0
                  "
                >
                  {{ $t('Nice', "Not Selected") }}
                </div> -->
                <div class="no-options" v-if="!loading && !modelValue">
                  {{ nullText || $t('Nice', 'None') }}
                </div>
                <div class="no-options" v-if="loading">{{ $t('Nice', 'Loading') }}</div>
                <NiceIcon class="arrow-down" icon="icon-chevron-down" />
                <NiceIcon
                  class="arrow-down clear"
                  icon="icon-x"
                  @click="clear"
                />
              </div>
            </div>
          </div>
        </template>

        <template #content>
          <div class="nice-dropdown-popup">
            <!-- v-click-outside="close" -->
            <div class="input-group" v-if="searchFunction && !noSearch">
              <input
                v-model="search"
                type="text"
                :placeholder="$t('Nice', 'Search...')"
                :name="$t('Nice', 'Search')"
                @input="handleSearch"
                ref="search"
                :disabled="disabled"
              />
              <NiceLoading class="loading" v-if="innerLoading" />
            </div>
            <div class="list">
              <div
                v-if="nullable"
                class="element"
                @click="handleChange(undefined)"
                :class="{
                  selected: modelValue == undefined,
                }"
              >
                {{ nullText || $t('Nice', 'None') }}
              </div>
              <div
                class="element"
                v-for="(item, index) in innerValues"
                :key="item[keyName]"
                :class="{
                  hover: innerIndex == index,
                  selected: modelValue && item[keyName] == localValue[keyName],
                }"
                @click="handleChange(item)"
              >
                <slot name="option" :item="item">
                  {{ formatFunction ? formatFunction(item) : item[valueName] }}
                </slot>
              </div>
              <div
                class="element no-options"
                v-if="
                  !innerLoading && (!innerValues || innerValues.length == 0)
                "
              >
                {{ $t('Nice', "No options") }}
              </div>
            </div>
          </div>
        </template>
      </NicePopup>

      <NiceButton
        v-if="addFunction"
        class="nice-dropdown-add"
        icon="icon-plus"
        :disabled="disabled"
        @click="addFunction"
      />
    </div>
  </div>
</template>

<script>
import NicePopup from "./NicePopup.vue";
import NiceLoading from "./NiceLoading.vue";
import NiceButton from "./NiceButton.vue";
import NiceComponentHeader from "./NiceComponentHeader.vue";

export default {
  name: "NiceDropdown",

  components: {
    NicePopup,
    NiceLoading,
    NiceButton,
    NiceComponentHeader,
  },

  props: {
    modelValue: {
      type: [Object, String, Number, null],
      required: true,
    },
    values: {
      type: Array,
      retured: false
    },
    title: String,
    noMargin: Boolean,
    nullable: Boolean,
    disabled: Boolean,
    loading: Boolean,
    keyOnly: Boolean,
    noSearch: Boolean,
    required: {
      type: Boolean,
      default: false,
    },
    searchFunction: {
      type: Function,
      default: null,
    },
    formatFunction: {
      type: Function,
      default: null,
    },
    addFunction: {
      type: Function,
      default: null,
    },
    nullText: String,
    caption: {
      type: String,
      default: null,
    },
    keyName: {
      type: String,
      default: "id",
    },
    valueName: {
      type: String,
      default: "value",
    },
  },

  emits: ["change", "update:modelValue"],

  data() {
    return {
      focus: false,
      search: null,
      innerIndex: null,
      debounceTimeout: null,
      debounce: 500,
      innerLoading: false,
      innerValues: null,
    };
  },

  computed: {
    localValue() {
      if (this.keyOnly) {
        if (!this.innerValues) return {};
        return this.innerValues.find((v) => v[this.keyName] == this.modelValue);
      }
      return this.modelValue;
    },

    canClear () {
      if (this.disabled) return false
      return !!this.modelValue && !!this.nullable
    }
  },

  async mounted() {
    await this.fetchSearch();
    this.handleDefault();
  },

  methods: {
    onKeypress(e) {
      if (e.code == "Enter" || e.code == "Space") {
        e.preventDefault();
        this.$refs.popup.toggle();
      }
    },

    close() {
      this.$refs.popup?.close();
    },

    clear() {
      this.handleChange(null);
      setTimeout(() => {
        this.close();
      });
    },

    async popupChanged(isOpen) {
      if (isOpen) {
        // Fetch default items
        if (!this.innerValues) {
          await this.fetchSearch();
        }

        // Find current selected index
        if (this.value != null) {
          this.innerIndex = this.innerValues.findIndex(
            (i) => i[this.keyName] == this.value[this.keyName]
          );
        } else {
          // this.handleDefault()
          this.innerIndex = -1;
        }
        // Focus on search input
        setTimeout(() => {
          if (this.$refs.search) this.$refs.search.focus();
        }, 100);
        // Emmit keyboard listener
        document.addEventListener("keydown", this.handleKeyboard);
      } else {
        this.search = null;
        this.innerLoading = false;
        // Remove keyboard listener
        document.removeEventListener("keydown", this.handleKeyboard);
      }
    },

    handleChange(item) {
      if (item) {
        let value = item[this.keyName];
        let selected = this.innerValues.find((item) => {
          return item[this.keyName] == value;
        });
        if (selected) {
          this.changeValue(selected);
        } else {
          this.changeValue(null);
        }
      } else {
        this.changeValue(null);
      }
      this.close();
    },

    handleDefault() {
      // Select default value
      if (
        this.innerValues &&
        this.innerValues.length > 0 &&
        !this.nullable &&
        !this.modelValue
      ) {
        this.changeValue(this.innerValues[0]);
      }
    },

    changeValue(value) {
      if (value) {
        if (this.keyOnly) {
          this.$emit("update:modelValue", value[this.keyName]);
          this.$emit("change", value[this.keyName]);
        } else {
          this.$emit("update:modelValue", value);
          this.$emit("change", value);
        }
      } else {
        this.$emit("update:modelValue", null);
        this.$emit("change", null);
      }
    },

    handleSearch() {
      clearTimeout(this.debounceTimeout);
      return (this.debounceTimeout = setTimeout(async () => {
        await this.fetchSearch();
      }, this.debounce));
    },

    async fetchSearch() {
      if (this.values) {
        this.innerValues = this.values
      }
      if (this.searchFunction) {
        this.innerLoading = true;
        let response = await this.searchFunction(this.search);
        this.innerIndex = 0;
        this.innerLoading = false;
        this.innerValues = response;
        return response;
      } else {
        return null;
      }
    },
    handleKeyboard(e) {
      if (e.key == "ArrowDown") {
        if (this.innerIndex < this.innerValues.length - 1) {
          this.innerIndex += 1;
        }
        e.preventDefault();
      } else if (e.key == "ArrowUp") {
        if (this.innerIndex > 0) {
          this.innerIndex -= 1;
        }
        e.preventDefault();
      } else if (e.key == "Escape") {
        this.close();
        e.preventDefault();
      } else if (e.key == "Enter") {
        this.changeValue(this.innerValues[this.innerIndex]);
        this.close();
        e.preventDefault();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nice-dropdown {
  &.can-clear {
    .input-group {
      &:hover {
        .arrow-down {
          display: none;
          &.clear {
            display: block;
          }
        }
      }
    }
  }
  .nice-dropdown-wrapper {
    display: flex;

    .nice-dropdown-popup-wrapper {
      flex-grow: 1;
    }

    .nice-dropdown-add {
      flex-shrink: 0;
      margin-left: 1rem;
    }
  }
  .input-group {
    position: relative;
    margin-bottom: 0;
    display: flex;
    flex-grow: 1;
    width: 100%;

    .select-wrapper {
      flex-grow: 1;

      &:focus-within {
        .selected-value {
          outline-offset: 2px;
          outline: 2px solid var(--nice-primary-color);
        }
      }
    }

    .btn {
      flex-shrink: 0;
      margin-left: 1rem;
    }

    .hidden-input {
      padding: 0;
      background: transparent;
      height: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
    }

    .arrow-down {
      position: absolute;
      top: 50%;
      right: 0.5rem;
      margin-top: -9px;
      width: 18px;
      height: 18px;

      &.clear {
        display: none;
        cursor: pointer;
      }
    }

    .no-options {
      // position: absolute;
      // top: 50%;
      // transform: translateY(-50%);
      // left: 1rem;
      opacity: 0.5;
    }

    .selected-value {
      position: relative;
      font-size: 1em;
      background: var(--nice-card-bg);
      padding: 4px 2.5rem 5px 12px;
      border-radius: var(--nice-border-radius);
      border: 1px solid var(--nice-border-color);
      min-height: var(--nice-height);
      cursor: pointer;
      display: flex;
      align-items: center;

      .option {
        display: flex;
        align-items: center;
      }

      &:focus,
      &.focus {
        background: var(--nice-bg-focus);
        // border-color: var(--nice-primary-color);
      }

      &:hover {
        background: var(--nice-bg-hover);
      }

      &:active {
        background: var(--nice-bg-active);
        box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.1);
      }
    }
  }

  .nice-dropdown-popup {
    background: var(--nice-card-bg);
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
    border-radius: var(--nice-border-radius);
    border: 1px solid var(--nice-border-color);
    overflow: hidden;
    min-width: 100px;
    .input-group {
      position: relative;
      border: 0 none;

      input {
        border: 0 none;
        border-bottom: 1px solid var(--nice-border-color);
        background: var(--nice-card-bg);
        border-radius: 0;
        font-size: 1em;

        &:focus {
          outline: 0 none;
        }
      }

      .nice-loading {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        padding: 0;
        height: 20px;
        width: 20px;
      }
    }

    // -------------------------- LIST --------------------------
// .list {
//   width: 250px;

//   .divider {
//     border-bottom: 1px solid var(--nice-border-color);
//   }

//   .element {
//     display: flex;
//     align-items: center;
//     padding: 0.8rem 1rem;
//     color: var(--nice-font-color);

//     .nice-icon {
//       height: 18px;
//       width: 18px;
//       margin-right: 0.5rem;
//     }

//     &:hover {
//       background: var(--nice-hover-color);
//     }

//     &:last-child {
//       border-bottom: 0 none;
//     }
//   }
// }
    .list {
      max-height: 300px;
      overflow: auto;
      .element {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 0.8rem 1rem;
        color: var(--nice-font-color);

        &.no-options {
          text-align: center;
          font-size: 0.8em;
          justify-content: center;
          opacity: 0.5;
          color: currentColor;
          cursor: default;
          &:hover {
            background: inherit;
          }
        }

        &:hover,
        &.hover {
          background: var(--nice-hover-color);
        }

        &.selected {
          background: var(--nice-primary-color);
          color: white;
        }
      }
    }
  }
}
</style>
