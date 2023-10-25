<template>
  <div
    class="nice-component nice-textarea"
    :class="{ 'no-margin': noMargin, active: localValue, disabled }"
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
      <textarea
        v-model="localValue"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :type="type"
        :rows="rows"
        :disabled="disabled"
      ></textarea>
      <div class="input-group-append input-group-icon" v-if="icon">
        <NiceIcon :icon="icon" />
      </div>
      <div class="input-group-append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </div>
    <div class="nice-component-message" v-if="message">{{ message }}</div>
  </div>
</template>

<script>
import NiceIcon from "./NiceIcon.vue";

export default {
  name: "NiceTextarea",

  components: {
    NiceIcon,
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
    rows: {
      type: Number,
      default: 2,
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
    disabled: {
      type: Boolean,
      default: false,
    },
    noMargin: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["change", "update:modelValue"],

  computed: {
    localValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
        this.$emit("change", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.nice-textarea {
  .input-group {
    min-height: var(--nice-height);
    display: flex;
    border: 1px solid var(--nice-border-color);
    border-radius: var(--nice-border-radius);
    background: var(--nice-card-bg);
    overflow: hidden;

    .input-group-icon {
      align-items: center;
      padding: 0 0.5rem;
      .nice-icon {
        height: 18px;
        width: 18px;
      }
    }

    .input-group-suffix,
    .input-group-append {
      display: flex;
    }

    .input-group-suffix + input {
      // border-left: 1px solid var(--nice-border-color);
      .nice-button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }

    input + .input-group-append {
      // border-left: 1px solid var(--nice-border-color);
      .nice-button {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    textarea {
      border: 0 none;
      padding: 8px 12px;
      color: currentColor;
      flex-grow: 1;
      background: transparent;
    }
  }
}
</style>
