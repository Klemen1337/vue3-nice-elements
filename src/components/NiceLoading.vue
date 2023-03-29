<template>
  <div
    class="nice-loading"
    :class="[size ? 'nice-loading-' + size : '', { 'full-div': fullDiv }]"
  >
    <NiceIcon icon="icon-loader" />
    <!-- <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "NiceLoading",

  props: {
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
        return ["small", "large"].includes(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.nice-loading {
  padding: 1rem;
  text-align: center;

  svg {
    animation: 2s rotate linear infinite;
    height: 25px;
    width: 25px;
    max-height: 100%;
    max-width: 100%;
    // fill: var(--primary-color);
    z-index: 2;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  &.nice-loading-small {
    svg {
      height: 20px;
      width: 20px;
    }
  }

  &.nice-loading-large {
    svg {
      height: var(--nice-height-large);
      width: var(--nice-height-large);
    }
  }

  &.full-div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.02);
    border-radius: var(--border-radius);
    z-index: 1;
  }
}
</style>
