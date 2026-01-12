<template>
  <div
    class="nice-component nice-checkbox"
    :class="{ 
      'no-margin': props.noMargin, 
      'active': localValue, 
      'disabled': props.disabled, 
      'indeterminate': props.indeterminate
    }"
    @click="toggleValue"
  >
    <div class="nice-checkbox-box">
      <!-- <NiceIcon icon="icon-check" v-if="localValue" /> -->
      <svg viewBox="0 0 20 20" v-if="localValue">
        <path d="M0 11l2-2 5 5 11-11 2 2-13 13z"></path>
      </svg>
      <svg viewBox="0 0 24 24" v-if="indeterminate && !localValue">
        <path d="M5 13h14c0.552 0 1-0.448 1-1s-0.448-1-1-1h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
      </svg>
    </div>
    <div class="nice-checkbox-title" :for="'nice-checkbox' + key" v-if="props.title">
      <div>{{ props.title }}</div>
      <small v-if="props.description">{{ props.description }}</small>
    </div>
    <input type="checkbox" :id="'nice-checkbox' + key" :disabled="props.disabled" />
  </div>
</template>


<script>
export default {
  name: 'NiceCheckbox',
}
</script>


<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: [Boolean, null],
    default: false,
  },
  title: {
    type: String,
    default: null,
  }, 
  description: {
    type: String,
    default: null,
  },
  indeterminate: {
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
.nice-checkbox {
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;

  &.disabled {
    cursor: not-allowed;;
    input {
      cursor: not-allowed;
    }
  }

  input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  &.indeterminate,
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
