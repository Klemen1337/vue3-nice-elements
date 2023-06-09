<template>
  <div
    class="nice-component nice-switch"
    :class="[
      'nice-switch-' + type,
      size ? 'nice-switch-' + size : '',
      { 'no-margin': noMargin, active: localValue },
    ]"
    @click="toggleValue"
  >
    <div class="nice-switch-box">
      <div class="nice-switch-handle"></div>
    </div>
    <div class="nice-switch-title" :for="'nice-switch' + key" v-if="title">
      {{ title }}
    </div>
    <input type="checkbox" :id="'nice-switch' + key" />
  </div>
</template>

<script>
export default {
  name: "NiceSwitch",

  props: {
    modelValue: {
      type: [Boolean, null],
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    noMargin: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return ["small", "large"].includes(value);
      },
    },
    type: {
      type: String,
      default: "primary",
      validator(value) {
        return [
          "primary",
          "default",
          "success",
          "warning",
          "danger",
          "info",
          "dark",
        ].includes(value);
      },
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
      this.localValue = !this.localValue;
    },
  },
};
</script>

<style lang="scss" scoped>
.nice-switch {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  --size: 16px;

  input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:focus-within {
    .nice-switch-box {
      outline-offset: 2px;
      outline: 2px solid var(--nice-primary-color);
    }
  }

  &.active {
    .nice-switch-box {
      background: var(--nice-primary-color);

      .nice-switch-handle {
        transform: translateX(100%);
      }
    }
  }

  .nice-switch-box {
    height: calc(var(--size) + 8px);
    width: calc(calc(2 * var(--size)) + 8px);
    border: 1px solid var(--nice-border-color);
    background: var(--nice-border-color);
    border-radius: 20px;
    position: relative;
    transition: all 0.3s;

    .nice-switch-handle {
      position: absolute;
      top: 0;
      left: 0;
      margin: 3px;
      width: var(--size);
      height: var(--size);
      border-radius: 50%;
      transform: translateX(0%);
      background: var(--nice-card-bg);
      transition: all 0.3s;
    }
  }

  .nice-switch-title {
    margin-left: 0.5rem;
    line-height: 1;
  }

  $types: "primary", "default", "success", "warning", "danger", "info", "dark";
  @each $type in $types {
    &.nice-switch-#{$type}.active .nice-switch-box {
      background: var(--nice-#{$type}-color);
    }
  }

  &.nice-switch-small {
    --size: 12px;
  }

  &.nice-switch-large {
    --size: 20px;
  }
}
</style>
