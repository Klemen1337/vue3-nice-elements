<template>
  <div
    class="nice-loading"
    :class="[props.size ? 'nice-loading-' + props.size : '', { 'full-div': props.fullDiv }]"
  >
    <!-- <NiceIcon icon="icon-loading" /> -->
    <div class="nice-loading-wrapper">
      <NiceIcon icon="icon-half-loading" />
      <NiceIcon icon="icon-half-loading" />
    </div>
    <div class="nice-loading-message" v-if="props.message">{{ props.message }}</div>
  </div>
</template>

<script>
export default {
  name: "NiceLoading"
};
</script>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  message: {
    type: String,
    default: null,
  },
  fullDiv: {
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
});
</script>

<style lang="scss" scoped>
.nice-loading {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .nice-loading-wrapper {
    position: relative;
    display: inline-block;
    height: 25px;
    width: 25px;
    max-height: 100%;
    max-width: 100%;
    z-index: 2;
  }

  .nice-loading-message {
    margin-top: 0.2rem;
    font-size: 0.8em;
  }

  svg {
    animation: 1s rotate linear infinite;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;

    &:first-child {
      animation-duration: 0.5s;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  &.nice-loading-mini {
    .nice-loading-wrapper  {
      height: 12px;
      width: 12px;
    }
  }

  &.nice-loading-small {
    .nice-loading-wrapper  {
      height: 18px;
      width: 18px;
    }
  }

  &.nice-loading-large {
    .nice-loading-wrapper  {
      height: 40px;
      width: 40px;
    }
  }

  &.full-div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);
    border-radius: var(--nice-border-radius);
    z-index: 10;
  }
}
</style>
