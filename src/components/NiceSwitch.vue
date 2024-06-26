<template>
  <div
    class="nice-component nice-switch"
    :class="[
      'nice-switch-' + props.type,
      props.size ? 'nice-switch-' + props.size : '',
      { 'no-margin': props.noMargin, active: localValue, disabled: props.disabled, 'nice-is-inline': props.isInline, 'nice-is-block': props.isBlock, 'nice-is-title-left': titleLeft },
    ]"
  >
    <NiceComponentHeader
      v-if="props.isInline"
      :title="title"
    />

    <div class="nice-switch-box-wrapper">
      <button class="nice-switch-box" @click="toggleValue" :disabled="props.disabled">
        <div class="nice-switch-handle"></div>
      </button>
    </div>

    <div class="nice-switch-title" :for="'nice-switch' + key" v-if="props.title">
      {{ props.title }}
    </div>

    <input type="checkbox" :id="'nice-switch' + key" :disabled="props.disabled" />
  </div>
</template>

<script>
export default {
  name: 'NiceSwitch'
}
</script>

<script setup>
import { computed } from "vue";

const props = defineProps({
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
  disabled: {
    type: Boolean,
    default: false,
  },
  isInline: {
    type: Boolean,
    default: false
  },
  isBlock: {
    type: Boolean,
    default: false
  },
  titleLeft: {
    type: Boolean,
    default: false
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
})

const emit = defineEmits(["change", "update:modelValue"]);
const key = Math.random().toString(36).slice(2, 7);
const localValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
    emit("change", value);
  },
});

function toggleValue() {
  if (props.disabled) return;
  localValue.value = !localValue.value;
}
</script>


<style lang="scss" scoped>
.nice-switch {
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

  &.nice-is-title-left {
    .nice-switch-title {
      order: 1;
      margin-left: 0;
      margin-right: 0.5rem;
    }

    .nice-switch-box-wrapper {
      order: 2;
    }
  }

  &.nice-is-inline {
    flex-direction: column;
    align-items: unset;

    .nice-switch-title {
      display: none;
    }
  }

  &.nice-is-block {
    .nice-switch-box-wrapper {
      display: flex;
      align-items: center;
      height: var(--nice-height);
    }
  }

  &:focus-within {
    .nice-switch-box {
      outline-offset: 2px;
      outline: 2px solid var(--nice-primary-color);
    }
  }

  &.active {
    .nice-switch-box {
      background-color: var(--nice-primary-color);

      .nice-switch-handle {
        transform: translateX(100%);
      }
    }
  }

  .nice-switch-box {
    height: calc(var(--size) + 8px);
    width: calc(calc(2 * var(--size)) + 8px);
    border: 1px solid var(--nice-border-color);
    background-color: var(--nice-border-color);
    border-radius: 20px;
    position: relative;
    transition: background-color all 0.3s;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }

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
