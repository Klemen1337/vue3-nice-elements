<template>
  <div class="nice-alert" :class="['nice-alert-' + type, { 'nice-alert-inline': inline, 'nice-alert-align-center': alignCenter }]">
    <NiceIcon v-if="icon" :icon="icon" />
    <div class="nice-alert-data">
      <div class="nice-alert-title" v-if="title">{{ title }}</div>
      <div class="nice-alert-message" v-if="message">{{ message }}</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NiceAlert"
}
</script>

<script setup>
import NiceIcon from './NiceIcon.vue'

defineProps({
  title: String,
  message: String,
  inline: Boolean,
  alignCenter: Boolean,
  icon: {
    type: String,
    required: false,
    default: null
  },
  type: {
    type: String,
    default: null,
    validator(value) {
      return [
        "primary",
        "default",
        "success",
        "warning",
        "danger",
        "info"
      ].includes(value);
    }
  }
})
</script>


<style lang="scss">
.nice-alert {
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  gap: 1rem;

  border: 1px solid var(--nice-border-color);
  border-radius: var(--nice-border-radius);
  background: var(--nice-hover-color);

  $types: "primary", "default", "success", "warning", "danger", "info";
  @each $type in $types {
    &.nice-alert-#{$type} {
      color: var(--nice-#{$type}-color-darker);
      background: var(--nice-#{$type}-color-lighter);
      border-color: var(--nice-#{$type}-color);
    }
  }

  &.nice-alert-inline {
    display: inline-flex;
  }  
  
  &.nice-alert-align-center {
    align-items: center;
  }

  .nice-icon {
    height: 30px;
    width: 30px;
    flex-shrink: 0;
  }

  .nice-alert-data {
    flex-grow: 1;

    .nice-alert-title {
      font-size: 1.1em;
      font-weight: bold;
    }

    .nice-alert-message {
      font-size: 0.9em;
    }
  }
}
</style>
