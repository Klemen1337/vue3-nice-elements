<template>
  <button
    class="nice-button btn"
    :type="nativeType"
    :class="[
      addClass,
      'btn-' + type,
      size ? 'btn-' + size : '',
      {
        'btn-naked': naked,
        'btn-rounded': rounded,
        'btn-plain': plain,
        'btn-outline': outline,
        'btn-icon': !$slots.default && !text && (icon || appendIcon),
      },
    ]"
    :disabled="disabled || loading"
  >
    <NiceLoading v-if="loading" fullDiv />
    <NiceIcon v-if="icon" :icon="icon" />
    <span v-if="$slots.default"><slot /></span>
    <span v-if="text">{{ text }}</span>
    <NiceIcon v-if="appendIcon" :icon="appendIcon" />
  </button>
</template>

<script>
export default {
  name: "NiceButton",
  props: {
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
        return ["small", "large"].includes(value);
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
  },
};
</script>

<style lang="scss" scoped>
.nice-button {
  position: relative;
}
</style>
