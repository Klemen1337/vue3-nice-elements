<template>
  <div class="nice-toasts">
    <transition-group name="toast" key="div">
      <div
        class="nice-toast"
        v-for="toast in toasts"
        :key="toast.id"
        :class="['nice-toast-' + toast.type]"
      >
        {{ toast.message }}
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "NiceToast"
}
</script>

<script setup>
import { onMounted, ref, inject } from "vue"
const timeoutTime = 3000
const toasts = ref([])
const nice = inject("nice");

onMounted(() => {
  nice.onToast(({ message, type }) => {
    createToast(message, type);
  });
})

function createToast(message, type) {
  // Create new toast
  const toast = {
    id: Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(2, 10),
    message,
    type,
  };

  // Append toast
  toasts.value.unshift(toast);

  // Remove after some time
  setTimeout(() => {
    removeToast(toast);
  }, timeoutTime);
}

function removeToast(toast) {
  const toastIndex = toasts.value.findIndex((a) => {
    return a.id == toast.id;
  });

  if (toastIndex >= 0) {
    toasts.value.splice(toastIndex, 1);
  }
}

</script>

<style lang="scss" scoped>
.nice-toasts {
  z-index: 9999;
  position: fixed;
  bottom: 1rem;
  right: 50%;
  transform: translateX(50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  .nice-toast {
    background: var(--nice-primary-color);
    color: var(--nice-primary-color-lighter);
    padding: 5px 1rem;
    border-radius: 30px;
    // font-size: 0.8em;
    // font-weight: bold;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
    margin-top: 0.2rem;
    max-width: 500px;

    $types: "primary", "default", "success", "warning", "danger", "info", "dark";
    @each $type in $types {
      &.nice-toast-#{$type} {
        background: var(--nice-#{$type}-color-lighter);
        color: var(--nice-#{$type}-color);
      }
    }
  }
}

.toast-enter-active {
  animation: bounce-in 0.3s;
}

.toast-leave-active {
  animation: bounce-in 0.3s reverse;
}

@keyframes bounce-in {
  from {
    transform: translateY(100%);
    opacity: 1;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
