<template>
  <svg class="nice-icon" :style="{ height: size + 'px', width: size + 'px' }">
    <use :xlink:href="'#' + props.icon"></use>
  </svg>
</template>

<script>
export default {
  name: "NiceIcon",
};
</script>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: false,
  }
});
</script>

<style lang="scss" scoped>
.nice-icon {
  fill: currentColor;
  // height: 24px;
  // width: 24px;
}
</style>
