<template>
  <div class="nice-component nice-slot" :class="{ 'no-margin': noMargin }">
    <NiceComponentHeader :title="title" :caption="caption" />
    <slot></slot>
  </div>
</template>

<script>
import NiceComponentHeader from "./NiceComponentHeader.vue";
export default {
  name: "NiceSlot",

  components: { NiceComponentHeader },

  props: {
    title: {
      type: String,
      default: null,
    },
    caption: {
      type: String,
      default: null,
    },
    message: {
      type: String,
      default: null,
    },
    noMargin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
