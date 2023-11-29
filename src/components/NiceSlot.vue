<template>
  <div class="nice-component nice-slot" :class="{ 'no-margin': props.noMargin }">
    <NiceComponentHeader :title="props.title" :caption="props.caption" />
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'NiceSlot',
  }
</script>

<script setup>
import { defineProps } from "vue";
import NiceComponentHeader from "./NiceComponentHeader.vue";

const props = defineProps({
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
});
</script>
