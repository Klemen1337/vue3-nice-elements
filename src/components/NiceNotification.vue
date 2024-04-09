<template>
  <div
    class="nice-notification"
    :class="['nice-notification-' + props.notification.type]"
    @mouseover="stopTimeout"
    @mouseleave="startTimeout"
  >
    <NiceIcon
      class="notification-icon"
      :icon="props.notification.icon"
      v-if="props.notification.icon"
    />
    <div class="notification-info">
      <div class="notification-title" v-if="props.notification.title">
        {{ props.notification.title }}
      </div>
      <div class="notification.message" v-if="props.notification.message">
        {{ props.notification.message }}
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'NiceNotification'
}
</script>


<script setup>
import { onMounted } from "vue";

const props = defineProps({
  notification: {
    type: Object,
    required: true,
  },
  timeoutTime: {
    type: Number,
    default: 3000,
  },
})

const emit = defineEmits(["remove"]);
let removeTimeout = null;

function startTimeout() {
  removeTimeout = setTimeout(() => {
    emit("remove", props.notification);
  }, props.timeoutTime);
}

function stopTimeout() {
  clearTimeout(removeTimeout);
}

onMounted(() => {
  startTimeout();
})
</script>


<style lang="scss" scoped>
.nice-notification {
  background: var(--nice-card-bg);
  color: var(--nice-font-color);
  padding: 1rem;
  border-radius: var(--nice-border-radius);
  margin: 0.5rem 1rem;
  width: 300px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);

  display: flex;
  align-items: center;

  .notification-info {
    flex-grow: 1;
  }

  .notification-icon {
    height: 24px;
    width: 24px;
    margin-right: 1rem;
    flex-shrink: 0;
  }

  .notification-title {
    font-weight: 600;
    // font-size: 0.8em;
    margin-bottom: 0.3rem;
  }

  $types: "primary", "default", "success", "warning", "danger", "info", "dark";
  @each $type in $types {
    &.nice-notification-#{$type} {
      background: var(--nice-#{$type}-color);
      color: white;
    }
  }
}
</style>
