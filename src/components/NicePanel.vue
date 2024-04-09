<template>
  <div
    class="nice-side-view"
    @mousemove="mouseMove"
    @mouseup="dragging = false"
    :class="{ 'no-select': dragging }"
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
  </div>
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
    const inputs = panelElement.value.querySelectorAll("input");
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
    let width = document.body.clientWidth - e.clientX;
    if (width >= 300 && width <= document.body.clientWidth - 100) {
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

  .handle {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: transparent;
    cursor: col-resize;
    user-select: none;

    &:hover,
    &.active {
      background: var(--nice-primary-color);
    }
  }

  .side-view-body {
    position: fixed;
    top: 0;
    right: 0;
    width: var(--side-view-width);
    max-width: 90%;
    height: 100%;
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
  animation: side-view 0.3s;
}
.side-view-leave-active {
  animation: side-view 0.3s reverse;
}
@keyframes side-view {
  from {
    transform: translateX(100%);
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
