<template>
  <div class="nice-component-header" v-if="title || caption">
    <div class="nice-component-title" v-if="title">
      {{ title }}
      <span class="nice-component-required" v-if="required"> *</span>
    </div>
    <div class="nice-component-caption" v-if="caption">{{ caption }}</div>
  </div>
</template>

<script>
export default {
  name: "NiceComponentHeader",

  props: {
    title: String,
    caption: String,
    required: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.nice-component-header {
  display: flex;
  align-items: flex-end;
  margin-bottom: 3px;

  .nice-component-title {
    flex-grow: 1;
    font-size: 0.8em;

    .nice-component-required {
      color: var(--nice-danger-color);
    }
  }

  .nice-component-caption {
    flex-shrink: 0;
    opacity: 0.5;
    font-size: 0.8em;
  }
}
</style>
