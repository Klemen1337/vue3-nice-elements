import mitt from "mitt";

import NiceIcon from "./NiceIcon.vue";
import NiceLoading from "./NiceLoading.vue";
import NiceWrapper from "./NiceWrapper.vue";
import NiceView from "./NiceView.vue";
import NiceButton from "./NiceButton.vue";

export default {
  install: (app) => {
    app.component("NiceView", NiceView);
    app.component("NiceWrapper", NiceWrapper);
    app.component("NiceLoading", NiceLoading);
    app.component("NiceIcon", NiceIcon);
    app.component("NiceButton", NiceButton);

    const emitter = mitt();

    app.config.globalProperties.$nice = {
      debug: false,
      emitter,

      // Notification
      onNotification: (cb) => emitter.on("notification", cb),
      notification: (message, type, title, icon) => {
        emitter.emit("notification", { message, type, title, icon });
      },

      // Toast
      onToast: (cb) => emitter.on("toast", cb),
      toast: (message, type) => {
        emitter.emit("toast", { message, type });
      },

      // Panel
      onPanel: (cb) => emitter.on("panel", cb),
      panel: (name, isOpen) => {
        emitter.emit("panel", { name, isOpen });
      },

      // Modal
      onModal: (cb) => emitter.on("modal", cb),
      modal: (name, isOpen) => {
        emitter.emit("modal", { name, isOpen });
      },
    };
  },
};
