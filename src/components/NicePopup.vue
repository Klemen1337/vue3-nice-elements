<template>
  <div
    class="nice-popup"
    ref="$el"
    :class="{ 'nice-popup-open': isOpen, 'nice-popup-focused': isFocused, disabled: props.disabled }"
  >
    <div
      class="nice-popup-trigger"
      ref="$trigger"
      @click="toggle"
      @mouseover="handleFocus"
      @mouseleave="handleBlur"
    >
      <slot name="trigger"></slot>
    </div>
    <!-- <Transition> -->
    <div class="nice-popup-content-wrapper" ref="$content" v-show="isOpen">
      <div
        data-popper-arrow
        class="nice-popup-arrow"
        ref="$arrow"
        v-show="props.showArrow"
      ></div>
      <div class="nice-popup-content" :class="{ 'no-padding': props.noPadding }">
        <slot name="content"></slot>
      </div>
    </div>
    <!-- </Transition> -->
  </div>
</template>


<script>
export default {
  name: 'NicePopup',
}
</script>


<script setup>
import { createPopper } from "@popperjs/core";
import { onMounted, onBeforeUnmount, ref } from "vue";

const props = defineProps({
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
})

const emit = defineEmits(["change"]);
const isOpen = ref(false);
const isFocused = ref(false);
let popper = null;
const $arrow = ref(null)
const $trigger = ref(null)
const $content = ref(null)
const $el = ref(null)

onMounted(() => {
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
        offset: [0, props.offset],
      },
    },
  ];

  if (props.showArrow) {
    modifiers.push({
      name: "arrow",
      options: {
        element: $arrow.value,
        padding: 5,
      },
    });
  }

  popper = createPopper($trigger.value, $content.value, {
    strategy: "fixed",
    placement: props.placement,
    modifiers,
  });

  document.addEventListener("click", handleClick);
  document.addEventListener("touchend", handleClick);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClick);
  document.removeEventListener("touchend", handleClick);
});

function toggle() {
  if (props.disabled) return;
  isOpen.value = !isOpen.value;
  popper.update();
  emit("change", isOpen);
}

function close() {
  isOpen.value = false;
  emit("change", isOpen);
}

function handleFocus() {
  if (!props.openOnHover || props.disabled) return;
  isFocused.value = true;
  isOpen.value = true;
  popper.update();
}

function handleBlur() {
  if (!props.openOnHover || props.disabled) return;
  isFocused.value = false;
  isOpen.value = false;
}

function handleClick(e) {
  if (props.openOnHover || props.disabled) return;
  if (
    isOpen.value &&
    !e.composedPath().includes($el.value) &&
    !e.composedPath().includes($trigger.value)
  ) {
    close();
  }
}

defineExpose({ close, toggle })
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
        background: var(--nice-card-bg);
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
      border-radius: var(--nice-border-radius);
      color: var(--nice-font-color);
      background: var(--nice-card-bg);
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
