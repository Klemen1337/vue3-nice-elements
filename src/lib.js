import { inject } from "vue";
import mitt from "mitt";
import components from './components'
import niceTooltip from "./directives/nice-tooltip.js";
import './styles/main.scss'

const plugin = {
  install(app, options) {
    for (const prop in components) {
      const component = components[prop]
      app.component(component.name, component)
    }

    app.directive("niceTooltip", niceTooltip);


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
      modal: (name, isOpen, event) => {
        emitter.emit("modal", { name, isOpen, event });
      },
    };

    app.config.globalProperties.$nice = service;
    app.provide('nice', service);

    async function getQuery() {
      await options.router.isReady()
      const query = clone(options.router.currentRoute.value.query);
      delete query.id;
      return query;
    }

    // async function getLocationQuery () {
    //   await options.router.isReady()
    //   const query = {}
    //   const params = new URLSearchParams(window.location.search)
    //   params.forEach((k, p) => query[p] = k)
    //   delete query.id;
    //   return query
    // }

    function clone(o) {
      return Object.assign({}, o);
    }

    app.config.globalProperties.$query = getQuery;
    app.provide('getQuery', getQuery);
    app.config.globalProperties.$clone = clone;
    app.provide('clone', clone);

    app.config.globalProperties.$t = options.gettext.$pgettext;
    app.provide('$t', options.gettext.$pgettext);
  }
}

export function useNice() {
  return inject('nice');
}

export function getQuery() {
  return inject('getQuery');
}

export function useClone() {
  return inject('clone');
}

export function useT() {
  return inject('$t');
}

export default plugin