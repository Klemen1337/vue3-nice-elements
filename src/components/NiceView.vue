<template>
  <div class="nice-view" :class="{ 'nice-view-no-header': !showHeader }">
    <div class="nice-view-header" v-if="showHeader">
      <NiceIcon :icon="icon" class="view-header-icon" v-if="icon && !loading" />
      <NiceLoading class="view-header-icon" v-if="loading" />
      <div class="view-title" v-if="$slots.title || title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="nice-view-body" :class="{ 'nice-view-body-flex': flexBody }">
      <slot></slot>
    </div>
    <div class="nice-view-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NiceView",

  props: {
    title: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    flexBody: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    showHeader() {
      return this.$slots.title || this.title || this.icon;
    },
  },
};
</script>

<style lang="scss" scoped>
.nice-view {
  height: 100%;
  display: flex;
  flex-direction: column;

  // Mobile
  @media (max-width: 576px) {
    --nice-view-padding: 1.5rem;
  }

  &.nice-view-no-header {
    .nice-view-body {
      padding-top: var(--nice-view-padding);
    }
  }

  .nice-view-header {
    padding: var(--nice-view-padding);
    padding-bottom: 1rem;
    position: relative;
    flex-shrink: 0;
    display: flex;
    align-items: center;

    .view-header-icon {
      height: 40px;
      width: 40px;
      margin-right: 1rem;

      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .view-title {
      font-size: 2em;
      font-weight: 600;
    }
  }

  .nice-view-body {
    padding: var(--nice-view-padding);
    padding-top: 1rem;
    flex-grow: 1;
    overflow: auto;

    &.nice-view-body-flex {
      display: flex;
      flex-direction: column;
    }
  }

  .nice-view-footer {
    padding: 1rem var(--nice-view-padding);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: var(--nice-background-color);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.03);
    flex-shrink: 0;
  }
}
</style>
