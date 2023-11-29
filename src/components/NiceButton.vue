<template>
  <button
    class="nice-button btn"
    :type="props.nativeType"
    :class="[
      props.addClass,
      'btn-' + props.type,
      props.size ? 'btn-' + props.size : '',
      {
        'btn-naked': props.naked,
        'btn-rounded': props.rounded,
        'btn-plain': props.plain,
        'btn-outline': props.outline,
        'btn-icon': !$slots.default && !props.text && (props.icon || props.appendIcon),
      },
    ]"
    :disabled="props.disabled || props.loading"
  >
    <NiceLoading v-if="props.loading" fullDiv />
    <NiceIcon v-if="props.icon" :icon="props.icon" />
    <span v-if="$slots.default"><slot /></span>
    <span v-if="props.text">{{ props.text }}</span>
    <NiceIcon v-if="props.appendIcon" :icon="props.appendIcon" />
  </button>
</template>

<script>
  export default {
    name: 'NiceButton',
  }
</script>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  addClass: {
    type: String,
    default: null,
  },
  text: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: null,
  },
  appendIcon: {
    type: String,
    default: null,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  naked: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: null,
    validator(value) {
      return ["mini", "small", "large"].includes(value);
    },
  },
  nativeType: {
    type: String,
    default: "button",
    validator(value) {
      return [
        "button", // The button is a clickable button
        "submit", // The button is a submit button (submits form-data)
        "reset", // The button is a reset button (resets the form-data to its initial values)
      ].includes(value);
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
        "naked",
        "white",
      ].includes(value);
    },
  },
});
</script>

<style lang="scss" scoped>
.nice-button {
  position: relative;
}
</style>
