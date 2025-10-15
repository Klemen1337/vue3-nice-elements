<template>
  <div
    :title="nativeTitle"
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
                <div class="option" v-if="!loading && modelValue && !props.multiple">
                  <slot name="selected-option" :item="localValue">
                    <span>{{ formatFunction ? formatFunction(modelValue) : (localValue ? (localValue[valueName] || localValue) : modelValue) }}</span>
                  </slot>
                </div>
                <div class="options" v-if="props.multiple">
                  <div class="option" v-for="value in selectedInnerValues" :key="value">
                    <slot name="selected-option" :item="value" v-bind="value">
                      <span>{{ formatFunction ? formatFunction(value) : (value[props.valueName] || value) }}</span>
                    </slot>
                    <button type="button" class="btn btn-primary btn-sm" @click="removeValue(value)"><nice-icon icon="icon-x"></nice-icon></button>
                  </div>
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
                <div class="no-options" v-if="!loading && !modelValue || (props.multiple && !selectedInnerValues.length)">
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
                ref="searchElement"
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
                  selected: modelValue && ((!props.multiple && item[keyName] == localValue[keyName]) || item._selected),
                }"
                @click="handleChange(item)"
              >
                <NiceCheckbox v-if="multiple" :modelValue="item._selected" :noMargin="true" class="nice-dropdown-item-checkbox"></NiceCheckbox>
                <slot name="option" :item="item">
                  {{ formatFunction ? formatFunction(item) : item[valueName] }}
                </slot>
              </div>
              <div class="element no-options" v-if="!innerLoading && (!innerValues || innerValues.length == 0)">
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
export default {
  name: "NiceDropdown"
}
</script>

<script setup>
import { onMounted, ref, computed, inject, watch } from "vue";
import NicePopup from "./NicePopup.vue";
import NiceLoading from "./NiceLoading.vue";
import NiceButton from "./NiceButton.vue";
import NiceComponentHeader from "./NiceComponentHeader.vue";
import NiceCheckbox from "./NiceCheckbox.vue";

const props = defineProps({
  modelValue: {
    type: [Object, String, Number, null, Array],
    required: false,
  },
  values: {
    type: Array,
    required: false
  },
  title: String,
  noMargin: Boolean,
  nullable: Boolean,
  disabled: Boolean,
  loading: Boolean,
  keyOnly: Boolean,
  noSearch: Boolean,
  multiple: Boolean,
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
  nativeTitle: String,
})

const $t = inject("$t")
const emits = defineEmits(["change", "update:modelValue"])
let debounceTimeout = null
const debounce = 500
const focus = ref(false)
const search = ref(null)
const searchElement = ref(null)
const popup = ref(null)
const innerIndex = ref(null)
const innerLoading = ref(false)
const innerValues = ref(null)
const value = ref(null)

const localValue = computed(() => {
  if (props.keyOnly && !props.multiple) {
    if (!innerValues.value) return {};
    return innerValues.value.find((v) => v[props.keyName] == props.modelValue);
  }
  if (props.multiple) handleSelectedValue();
  return props.modelValue;
})

const canClear = computed(() => {
  if (props.disabled) return false
  return !!props.modelValue && !!props.nullable
})

const selectedInnerValues = computed(() => {
  return innerValues.value != null ? innerValues.value.filter(v => v._selected) : [];
})

const handleSelectedValue = function() {
  if (!innerValues.value) return;
  if (props.modelValue == null) return;
  if (!props.multiple) return;
  innerValues.value.forEach((i) => {
    i._selected = !!props.modelValue.find(v => v[props.keyName] == i[props.keyName])
  });
}

onMounted(async () => {
  await fetchSearch();
  handleDefault();
})

watch(() => props.values, async () => {
  await fetchSearch();
  handleDefault();
})

function onKeypress(e) {
  if (e.code == "Enter" || e.code == "Space") {
    e.preventDefault();
    popup.value?.toggle();
  }
}

function close() {
  popup.value?.close();
}

function clear() {
  handleChange(null);
  setTimeout(() => {
    close();
  });
}

function removeValue(value) {
  handleChange(value);
  setTimeout(() => {
    close();
  });
}

async function popupChanged(isOpen) {
  if (isOpen) {
    // Fetch default items
    if (!innerValues.value) {
      await fetchSearch();
    }

    // Find current selected index
    if (value.value != null) {
      innerIndex.value = innerValues.value.findIndex(
        (i) => i[props.keyName] == value.value[props.keyName]
      );
    } else {
      // handleDefault()
      innerIndex.value = -1;
    }
    // Focus on search input
    setTimeout(() => {
      searchElement.value?.focus();
    }, 100);
    // Emit keyboard listener
    document.addEventListener("keydown", handleKeyboard);
  } else {
    search.value = null;
    innerLoading.value = false;
    // Remove keyboard listener
    document.removeEventListener("keydown", handleKeyboard);
  }
}

function handleChange(item) {
  if (item) {
    const value = item[props.keyName];
    const selected = innerValues.value.find((item) => {
      return item[props.keyName] == value;
    });
    if (selected) {
      changeValue(selected);
    } else {
      changeValue(null);
    }
  } else {
    changeValue(null);
  }
  if (!props.multiple) close();
}

function handleDefault() {
  // Select default value
  if (
    innerValues.value &&
    innerValues.value.length > 0 &&
    !props.nullable &&
    !props.modelValue
  ) {
    changeValue(innerValues.value[0]);
  } else {
    handleSelectedValue();
  }
}

function changeValue(value) {
  if (value) {
    if (props.multiple) {
      value._selected = !value._selected
      if (props.keyOnly) {
        emits("update:modelValue", selectedInnerValues.value.filter.map(v => v[props.keyName]));
        emits("change", selectedInnerValues.value.map(v => v[props.keyName]));
      } else {
        emits("update:modelValue", selectedInnerValues.value);
        emits("change", selectedInnerValues.value);
      }
    } else {
      if (props.keyOnly) {
        emits("update:modelValue", value[props.keyName]);
        emits("change", value[props.keyName]);
      } else {
        emits("update:modelValue", value);
        emits("change", value);
      }
    }
  } else {
    emits("update:modelValue", null);
    emits("change", null);
  }
}

function handleSearch() {
  clearTimeout(debounceTimeout);
  return (debounceTimeout = setTimeout(async () => {
    await fetchSearch();
  }, debounce));
}

async function fetchSearch() {
  if (props.values) {
    innerValues.value = props.values
  }
  if (props.searchFunction) {
    innerLoading.value = true;
    const response = await props.searchFunction(search.value);
    innerIndex.value = 0;
    innerLoading.value = false;
    innerValues.value = response;
    return response;
  } else {
    return null;
  }
}

function handleKeyboard(e) {
  if (e.key == "ArrowDown") {
    if (innerIndex.value < innerValues.value.length - 1) {
      innerIndex.value += 1;
    }
    e.preventDefault();
  } else if (e.key == "ArrowUp") {
    if (innerIndex.value > 0) {
      innerIndex.value -= 1;
    }
    e.preventDefault();
  } else if (e.key == "Escape") {
    close();
    e.preventDefault();
  } else if (e.key == "Enter") {
    changeValue(innerValues.value[innerIndex.value]);
    close();
    e.preventDefault();
  }
}
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
      padding: 0.2rem 2.5rem 0.2rem 1rem;
      border-radius: var(--nice-border-radius);
      border: 1px solid var(--nice-border-color);
      min-height: var(--nice-height);
      cursor: pointer;
      display: flex;
      align-items: center;

      .option, .options {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.2rem;
      }

      .options {
        .option {
          background: var(--nice-primary-color);
          color: white;
          padding: 4px 12px;
          font-size: 0.8em;
          line-height: 1.33333;
          border-radius: var(--nice-border-radius);

          .btn {
            padding: 0;
            height: auto;
            border: 0 none;
            box-shadow: 0 0 0;
            margin-left: 0px;
            margin-right: -5px;
            svg {
              height: 12px;
              width: 12px;
            }
          }
        }
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

        .nice-dropdown-item-checkbox {
          margin-right: 0.5rem;

          .nice-checkbox-box {
            box-shadow: 0 0 0 !important;
          }
        }

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
