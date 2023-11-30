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
export default {
  name: 'NiceNotifications',
}
</script>

<script setup>
import NiceNotification from "./NiceNotification.vue";
import { ref, inject, onMounted } from "vue";
import { useGettext } from "vue3-gettext";
const { $gettext } = useGettext();

const nice = inject('nice')
const timeoutTime = 3000;
const notifications = ref([]);

function createNotification({ message, type, title, icon }) {
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
      notification.title = $gettext("Nice", "Error");
      notification.icon = "icon-alert-triangle";
    } else if (type == "success") {
      notification.title = $gettext("Nice", "Success");
      notification.icon = "icon-smile";
    } else if (type == "warning") {
      notification.title = $gettext("Nice", "Warning");
      notification.icon = "icon-alert-circle";
    }
  }
  // Append notification
  notifications.value.unshift(notification);
}

function removeNotification(notification) {
  let notificationIndex = notifications.value.findIndex((a) => a.id == notification.id);
  if (notificationIndex >= 0) {
    notifications.value.splice(notificationIndex, 1);
  }
}

onMounted(() => {
  nice.onNotification((message, type, title) => {
    createNotification(message, type, title);
  });
});
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
