<template>
  <div
    class="nice-notification"
    :class="['nice-notification-' + notification.type]"
    @mouseover="stopTimeout"
    @mouseleave="startTimeout"
  >
    <NiceIcon
      class="notification-icon"
      :icon="notification.icon"
      v-if="notification.icon"
    />
    <div class="notification-info">
      <div class="notification-title" v-if="notification.title">
        {{ notification.title }}
      </div>
      <div class="notification.message" v-if="notification.message">
        {{ notification.message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NiceNotification",

  props: {
    notification: {
      type: Object,
      required: true,
    },
    timeoutTime: {
      type: Number,
      default: 3000,
    },
  },

  emits: ["remove"],

  data() {
    return {
      removeTimeout: null,
    };
  },

  mounted() {
    this.startTimeout();
  },

  methods: {
    startTimeout() {
      this.removeTimeout = setTimeout(() => {
        this.$emit("remove", this.notification);
      }, this.timeoutTime);
    },

    stopTimeout() {
      clearTimeout(this.removeTimeout);
    },
  },
};
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
      background: var(--#{$type}-color);
      color: white;
    }
  }
}
</style>
