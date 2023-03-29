<template>
  <div class="nice-notifications">
    <transition-group name="notification" tag="div">
      <NiceNotification
        v-for="notification in notifications"
        :key="notification.id"
        :notification="notification"
        :timeoutTime="timeoutTime"
        @remove="removeNotification(notification)"
      />
    </transition-group>
  </div>
</template>

<script>
import NiceNotification from "./NiceNotification.vue";

export default {
  name: "NiceNotifications",

  components: {
    NiceNotification,
  },

  data() {
    return {
      timeoutTime: 3000,
      notifications: [],
    };
  },

  mounted() {
    this.$nice.onNotification((message, type, title) => {
      this.createNotification(message, type, title);
    });
  },

  methods: {
    createNotification({ message, type, title, icon }) {
      // Create object with random id
      var notification = {
        id: Math.random()
          .toString(36)
          .replace(/[^a-z]+/g, "")
          .substr(2, 10),
        type,
        title,
        message,
        icon,
      };
      // Set default title
      if (!title) {
        if (type == "danger") {
          notification.title = this.$gettext("Error");
          notification.icon = "icon-alert-triangle";
        } else if (type == "success") {
          notification.title = this.$gettext("Success");
          notification.icon = "icon-smile";
        } else if (type == "warning") {
          notification.title = this.$gettext("Warning");
          notification.icon = "icon-alert-circle";
        }
      }
      // Append notification
      this.notifications.unshift(notification);
    },
    removeNotification(notification) {
      let notificationIndex = this.notifications.findIndex((a) => {
        return a.id == notification.id;
      });
      if (notificationIndex >= 0) {
        this.notifications.splice(notificationIndex, 1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nice-notifications {
  z-index: 99999;
  position: fixed;
  top: 0;
  right: 0;
  max-height: 100%;
  flex-wrap: wrap;
  display: flex;
  overflow: scroll;
  overflow-x: hidden;
}

.notification-enter-active {
  animation: bounce-in 0.3s;
}

.notification-leave-active {
  animation: bounce-in 0.3s reverse;
}

@keyframes bounce-in {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
