import mitt from "mitt";
import components from'./components'
import './styles/main.scss'

const plugin = {
  install (app, options) {
    for (const prop in components) {
      const component = components[prop]
      app.component(component.name, component)
    }

    const emitter = mitt();
    const service = {
      debug: options ? options.debug : false,
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

    app.config.globalProperties.$nice = service;
    app.provide('nice', service);
  }
}

export default plugin