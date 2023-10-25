<template>
  <div
    class="nice-component nice-checkbox"
    :class="{ 'no-margin': noMargin, active: localValue, disabled }"
    @click="toggleValue"
  >
    <div class="nice-checkbox-box">
      <!-- <NiceIcon icon="icon-check" v-if="localValue" /> -->
      <svg viewBox="0 0 20 20" v-if="localValue">
        <path d="M0 11l2-2 5 5 11-11 2 2-13 13z"></path>
      </svg>
    </div>
    <div class="nice-checkbox-title" :for="'nice-checkbox' + key" v-if="title">
      {{ title }}
    </div>
    <input type="checkbox" :id="'nice-checkbox' + key" :disabled="disabled" />
  </div>
</template>

<script>
export default {
  name: "NiceCheckbox",

  props: {
    modelValue: {
      type: [Boolean, null],
      default: false,
    },
    title: {
      type: String,
      default: null,
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

  data() {
    return {
      key: Math.random().toString(36).slice(2, 7),
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
      },
    },
  },

  methods: {
    toggleValue() {
      if (this.disabled) return;
      this.localValue = !this.localValue;
    },
  },
};
</script>

<style lang="scss" scoped>
.nice-checkbox {
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;

  input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }

  &.active,
  &:active {
    .nice-checkbox-box {
      background: var(--nice-primary-color);
      border-color: var(--nice-primary-color);
      box-shadow: 0 2px 3px var(--nice-primary-color-shadow);
    }
  }

  &:focus-within {
    .nice-checkbox-box {
      outline-offset: 2px;
      outline: 2px solid var(--nice-primary-color);
    }
  }

  &:hover {
    .nice-checkbox-box {
      box-shadow: 0 0 4px var(--nice-primary-color-shadow);
    }
  }

  .nice-checkbox-box {
    height: 16px;
    width: 16px;
    border: 1px solid var(--nice-border-color);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--nice-input-bg);
    color: white;

    svg {
      height: 10px;
      width: 10px;
      fill: currentColor;
    }

    &:hover {
      border-color: var(--nice-primary-color);
    }
  }

  .nice-checkbox-title {
    margin-left: 0.5rem;
    line-height: 1;
  }
}
</style>
