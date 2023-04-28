<template>
  <svg class="nice-icon">
    <use :xlink:href="'#' + icon"></use>
  </svg>
</template>

<script>
export default {
  name: "NiceIcon",
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.nice-icon {
  fill: currentColor;
  // height: 24px;
  // width: 24px;
}
</style>
