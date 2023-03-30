<template>
  <div
    class="nice-popup"
    :class="{ 'nice-popup-open': isOpen, 'nice-popup-focused': isFocused }"
  >
    <div
      class="nice-popup-trigger"
      ref="trigger"
      @click="toggle"
      @mouseover="handleFocus"
      @mouseleave="handleBlur"
    >
      <slot name="trigger"></slot>
    </div>
    <!-- <Transition> -->
    <div class="nice-popup-content-wrapper" ref="content" v-show="isOpen">
      <div
        data-popper-arrow
        class="nice-popup-arrow"
        ref="arrow"
        v-show="showArrow"
      ></div>
      <div class="nice-popup-content" :class="{ 'no-padding': noPadding }">
        <slot name="content"></slot>
      </div>
    </div>
    <!-- </Transition> -->
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

export default {
  name: "NicePopup",

  props: {
    noPadding: {
      type: Boolean,
      default: false,
    },
    showArrow: {
      type: Boolean,
      default: false,
    },
    openOnHover: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    offset: {
      type: Number,
      default: 10,
    },
    placement: {
      type: String,
      default: "bottom",
      validator(value) {
        return [
          "auto",
          "auto-start",
          "auto-end",
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "right",
          "right-start",
          "right-end",
          "left",
          "left-start",
          "left-end",
        ].includes(value);
      },
    },
  },

  emits: ["change"],

  data() {
    return {
      isOpen: false,
      isFocused: false,
      popper: null,
    };
  },

  mounted() {
    const modifiers = [
      {
        name: "preventOverflow",
        options: {
          rootBoundary: "body",
        },
      },
      {
        name: "offset",
        options: {
          offset: [0, this.offset],
        },
      },
    ];

    if (this.showArrow) {
      modifiers.push({
        name: "arrow",
        options: {
          element: this.$refs.arrow,
          padding: 5,
        },
      });
    }

    this.popper = createPopper(this.$refs.trigger, this.$refs.content, {
      strategy: "fixed",
      placement: this.placement,
      modifiers,
    });

    document.addEventListener("click", this.handleClick);
    document.addEventListener("touchend", this.handleClick);
  },

  beforeUnmount() {
    document.removeEventListener("click", this.handleClick);
    document.removeEventListener("touchend", this.handleClick);
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
      this.popper.update();
      this.$emit("change", this.isOpen);
    },

    close() {
      this.isOpen = false;
      this.$emit("change", this.isOpen);
    },

    handleFocus() {
      if (!this.openOnHover || this.disabled) return;
      this.isFocused = true;
      this.isOpen = true;
      this.popper.update();
    },

    handleBlur() {
      if (!this.openOnHover || this.disabled) return;
      this.isFocused = false;
      this.isOpen = false;
    },

    handleClick(e) {
      if (this.openOnHover || this.disabled) return;
      if (
        this.isOpen &&
        !e.composedPath().includes(this.$el) &&
        !e.composedPath().includes(this.$refs.trigger)
      ) {
        this.close();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nice-popup {
  display: inline-block;

  // .nice-popup-trigger {
  //   display: flex;
  // }

  .nice-popup-content-wrapper {
    z-index: 1000;
    .nice-popup-arrow {
      position: absolute;
      width: 8px;
      height: 8px;
      background: inherit;
      visibility: hidden;

      &:before {
        position: absolute;
        width: 8px;
        height: 8px;
        background: inherit;
        visibility: visible;
        content: "";
        transform: rotate(45deg);
        background: var(--card-bg);
      }
    }

    &[data-popper-placement^="top"] > .nice-popup-arrow {
      bottom: -4px;
    }

    &[data-popper-placement^="bottom"] > .nice-popup-arrow {
      top: -4px;
    }

    &[data-popper-placement^="left"] > .nice-popup-arrow {
      right: -4px;
    }

    &[data-popper-placement^="right"] > .nice-popup-arrow {
      left: -4px;
    }

    .nice-popup-content {
      padding: 1rem;
      border-radius: var(--border-radius);
      color: var(--font-color);
      background: var(--card-bg);
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      overflow: hidden;

      &.no-padding {
        padding: 0;
      }
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.2s ease-in-out;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    transform: scaleY(0);
  }

  .v-leave-from,
  .v-enter-to {
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>
