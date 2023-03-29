<template>
  <div
    class="nice-component nice-input"
    :class="{ 'no-margin': noMargin, active: localValue }"
  >
    <NiceComponentHeader
      :title="title"
      :required="required"
      :caption="caption"
    />

    <div class="input-group">
      <div class="input-group-suffix" v-if="$slots.suffix">
        <slot name="suffix"></slot>
      </div>
      <input
        v-model="localValue"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :type="type"
        :required="required"
      />
      <div class="input-group-append input-group-icon" v-if="icon">
        <NiceIcon :icon="icon" />
        <NiceIcon icon="icon-x" class="clear-input" @click="clearInput" />
      </div>
      <div class="input-group-append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </div>
    <div class="nice-component-message" v-if="message">{{ message }}</div>
    <div class="nice-component-message nice-error" v-if="errorMessage">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import NiceIcon from "./NiceIcon.vue";
import SafeGet from "just-safe-get";
import NiceComponentHeader from "./NiceComponentHeader.vue";

export default {
  name: "NiceInput",

  components: {
    NiceIcon,
    NiceComponentHeader,
  },

  props: {
    modelValue: {
      type: [String, Number, null],
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    caption: {
      type: String,
      default: null,
    },
    message: {
      type: String,
      default: null,
    },
    autocomplete: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
    noMargin: {
      type: Boolean,
      default: false,
    },
    prop: String,
    error: [Object, null],
  },

  emits: ["change", "debounce", "update:modelValue"],

  data() {
    return {
      debounce: null,
    };
  },

  computed: {
    localValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
        this.$emit("change", value);
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
          this.$emit("debounce", value);
        }, 500);
      },
    },

    errorMessage() {
      const err = SafeGet(this.error, ["response", "data", this.prop]);
      return typeof err == "object" ? err.join("-") : err;
    },
  },

  methods: {
    clearInput() {
      this.localValue = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.nice-input {
  &.active {
    &:hover {
      .input-group-icon {
        .nice-icon {
          display: none;
        }

        .clear-input {
          display: block;
        }
      }
    }
  }
  .input-group {
    height: var(--nice-height);
    display: flex;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background: var(--card-bg);

    &:focus-within {
      outline-offset: 2px;
      outline: 2px solid var(--primary-color);

      input {
        outline: 0 none;
      }
    }

    .input-group-icon {
      align-items: center;
      padding: 0 0.5rem;
      .nice-icon {
        height: 18px;
        width: 18px;
      }

      .clear-input {
        display: none;
        cursor: pointer;
      }
    }

    .input-group-suffix,
    .input-group-append {
      display: flex;
    }

    .input-group-suffix + input {
      // border-left: 1px solid var(--border-color);
      .nice-button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }

    input + .input-group-append {
      // border-left: 1px solid var(--border-color);
      .nice-button {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    input {
      border: 0 none;
      padding: 8px 12px;
      color: currentColor;
      flex-grow: 1;
      height: 100%;
      // background: transparent;

      &::placeholder {
        color: var(--border-color);
      }
    }
  }
}
</style>
