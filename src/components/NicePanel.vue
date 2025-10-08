<template>
  <component 
    :is="isForm ? 'form' : 'div'" 
    class="nice-side-view"
    @mousemove="mouseMove"
    @mouseup="dragging = false"
    :class="[position, { 'no-select': dragging }]"
    ref="panelElement"
  >
    <transition name="side-view">
      <div
        class="side-view-body"
        :style="{ '--side-view-width': sideViewWidth + 'px' }"
        :class="{ 'no-padding': noPadding }"
        v-if="isOpen"
      >
        <div
          class="handle"
          ref="handle"
          :class="{ active: dragging }"
          @mousedown="dragging = true"
        ></div>
        <slot></slot>
      </div>
    </transition>

    <transition name="side-overlay">
      <div class="overlay" v-if="isOpen" @click="close"></div>
    </transition>
  </component>
</template>

<script>
export default {
  name: "NicePanel",
}
</script>

<script setup>
import { onMounted, inject, onUnmounted, ref } from 'vue'

const nice = inject("nice")
const isOpen = ref(false)
const dragging = ref(false)
const sideViewWidth = ref(500)
const panelElement = ref(null)
const emits = defineEmits(["close"])
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  noPadding: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String,
    default: "right",
    validator(value) {
      return ["top", "left", "bottom", "right"].includes(value);
    },
  },
  isForm: {
    type: Boolean,
    default: false,
  },
})

onMounted(() => {
  // Emit keyboard listener
  document.addEventListener("keyup", handleKeyboard);

  // Listen to the broadcast
  nice.onPanel((data) => {
    if (props.name == data.name) isOpen.value = data.isOpen;
    if (data.isOpen) focusOnInput();
  });
})

onUnmounted(() => {
  // Remove keyboard listener
  document.removeEventListener("keyup", handleKeyboard);
})

function changeSideViewWidth(value) {
  sideViewWidth.value = value
}

function focusOnInput() {
  setTimeout(() => {
    const inputs = panelElement.value?.querySelectorAll("input");
    if (inputs && inputs[0] && inputs[0].focus) {
      inputs[0].focus();
    }
  });
}

function close() {
  emits("close");
  nice.panel(props.name, false);
}

function mouseMove(e) {
  if (dragging.value) {
    let width = 300;
    if (props.position == 'right') {
      width = document.body.clientWidth - e.clientX;
    } else if (props.position == 'left') {
      width = e.clientX;
    } else if (props.position == 'top') {
      width = e.clientY;
    } else if (props.position == 'bottom') {
      width = document.body.clientHeight - e.clientY;
    }
    if (width >= 300) {
      changeSideViewWidth(width);
    }
  }
}

function handleKeyboard(e) {
  if (e.key == "Escape") {
    close();
  }
}

defineExpose({ close })
</script>

<style lang="scss">
.nice-side-view {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2000;
  --side-view-width: 500px;

  &.right, &.left {
    .side-view-body {
      top: 0;
      max-width: 90%;
      height: 100%;
      width: var(--side-view-width);
    }
  }

  &.right {
    .side-view-body {
      right: 0;
    }
  }

  &.left {
    .side-view-body {
      left: 0;
    }

    .handle {
      left: unset;
      right: 0;
    }

    .side-view-enter-active, .side-view-leave-active {
      animation-name: side-view-left;
    }
  }

  &.top, &.bottom {
    .side-view-body {
      left: 0;
      max-height: 90%;
      width: 100%;
      height: var(--side-view-width);
    }

    .handle {
      top: unset;
      bottom: 0;
      width: 100%;
      height: 2px;
      cursor: row-resize;
    }
  }

  &.top {
    .side-view-body {
      top: 0;
    }

    .side-view-enter-active, .side-view-leave-active {
      animation-name: side-view-top;
    }
  }

  &.bottom {
    .side-view-body {
      bottom: 0;
    }

    .handle {
      top: 0;
      bottom: unset;
    }

    .side-view-enter-active, .side-view-leave-active {
      animation-name: side-view-bottom;
    }
  }

  .nice-view {
    z-index: 1;
  }

  .handle {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: transparent;
    cursor: col-resize;
    user-select: none;
    z-index: 2;

    &:hover,
    &.active {
      background: var(--nice-primary-color);
    }
  }

  .side-view-body {
    position: fixed;
    background: var(--nice-background-color);
    padding: 2rem;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
    z-index: 2;
    overflow: auto;

    &.no-padding {
      padding: 0;
    }

    .side-wrapper {
      display: flex;
      flex-direction: column;
      min-height: 100%;

      form {
        display: flex;
        flex-direction: column;
        min-height: 100%;

        .side-body {
          flex-grow: 1;
        }

        .side-actions {
          margin-top: 1rem;
          flex-shrink: 0;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }

  .overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  // Mobile
  @media (max-width: 576px) {
    .handle {
      display: none;
    }

    .side-view-body {
      padding: 1.5rem;
    }
  }
}

.side-view-enter-active {
  animation: side-view-right 0.3s;
}
.side-view-leave-active {
  animation: side-view-right 0.3s reverse;
}

@keyframes side-view-right {
  from {
    transform: translateX(100%);
    opacity: 1;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes side-view-left {
  from {
    transform: translateX(-100%);
    opacity: 1;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes side-view-top {
  from {
    transform: translateY(-100%);
    opacity: 1;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes side-view-bottom {
  from {
    transform: translateY(100%);
    opacity: 1;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.side-overlay-enter-active {
  animation: side-overlay 0.3s;
}
.side-overlay-leave-active {
  animation: side-overlay 0.3s reverse;
}

@keyframes side-overlay {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
