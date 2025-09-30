<template>
  <component 
    :is="isForm ? 'form' : 'div'" 
    class="nice-view"
    :class="{ 'nice-view-no-header': !showHeader, 'nice-view-flex-body': flexBody }"
  >
    <div class="nice-view-header" v-if="showHeader || props.icon">
      <NiceIcon :icon="icon" class="view-header-icon" v-if="icon && !loading" />
      <NiceLoading class="view-header-icon" v-if="loading" />
      <div class="view-title" v-if="showHeader">
        <div class="view-title-above-title" v-if="aboveTitle || slots.aboveTitle"><slot name="aboveTitle">{{ aboveTitle }}</slot></div>
        <div class="view-title-title" v-if="title || slots.title"><slot name="title">{{ title }}</slot></div>
        <div class="view-title-sub-title" v-if="subTitle || slots.subTitle"><slot name="subTitle">{{ subTitle }}</slot></div>
      </div>
    </div>
    <div class="nice-view-body" :class="{ 'nice-view-body-flex': flexBody }">
      <slot></slot>
    </div>
    <div class="nice-view-footer" v-if="slots.footer">
      <slot name="footer"></slot>
    </div>
  </component>
</template>

<script>
export default {
  name: "NiceView",
}
</script>

<script setup>
import { useSlots, computed } from 'vue';
const slots = useSlots();

const props = defineProps({
  title: {
    type: String,
    required: false,
  },  
  subTitle: {
    type: String,
    required: false,
  },
  aboveTitle: {
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
  isForm: {
    type: Boolean,
    default: false,
  },
})

const showHeader = computed(() => slots.title || props.title || slots.subTitle || props.subTitle || slots.aboveTitle || props.aboveTitle);
</script>

<style lang="scss" scoped>
.nice-view {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  // Mobile
  @media (max-width: 576px) {
    --nice-view-padding: 1rem;
  }

  &.nice-view-no-header {
    .nice-view-body {
      padding-top: var(--nice-view-padding);
    }
  }

  .nice-view-header {
    padding: var(--nice-view-padding);
    padding-bottom: 1rem;
    position: sticky;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    top: 0;
    z-index: 100;
    // background: rgba(245, 245, 249, 0.8);
    backdrop-filter: blur(5px);
    background: var(--nice-overlay);
    // border-bottom: 1px solid transparent;


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
      line-height: 1.2;

      .view-title-sub-title {
        font-size: 0.5em;
        font-weight: normal;
      }

      .view-title-above-title {
        font-size: 0.4em;
        font-style: italic;
        font-weight: normal;
      }
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
    // background: var(--nice-background-color);
    // box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.03);
    flex-shrink: 0;
    border-top: 1px solid var(--nice-border-color);

    z-index: 100;
    position: sticky;
    bottom: 0;
    background: var(--nice-overlay);
    backdrop-filter: blur(5px);
  }
}
</style>
