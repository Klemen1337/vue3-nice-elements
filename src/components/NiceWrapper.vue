<template>
  <div class="nice-wrapper" :class="{ 'no-margin': noMargin }">
    <!-- Header -->
    <div class="wrapper-header" v-if="$slots.header || title || subtitle">
      <div class="wrapper-header-title-subtitle" v-if="title || subtitle">
        <div class="wrapper-header-title" v-if="title">{{ title }}</div>
        <div class="wrapper-header-subtitle" v-if="subtitle">
          {{ subtitle }}
        </div>
      </div>
      <slot name="header"></slot>
      <div class="flex-grow"></div>

      <!-- Collapse -->
      <NiceButton
        v-if="collapsable"
        class="wrapper-header-chevron"
        icon="icon-chevron-down"
        naked
        @click="toggleOpen"
        :class="{ 'rotate-180': !isOpen }"
      />

      <div
        v-if="collapsable"
        class="wrapper-header-toggler"
        @click="toggleOpen"
      ></div>
    </div>

    <!-- Body -->
    <div class="wrapper-body" :class="{ 'no-top-padding': $slots.header || title || subtitle, 'no-padding': noBodyPadding }" v-if="isOpen">
      <slot></slot>
    </div>

    <!-- Footer -->
    <div class="wrapper-footer" v-if="$slots.footer && isOpen">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NiceWrapper"
}
</script>

<script setup>
import { ref } from 'vue';
import NiceButton from './NiceButton.vue';

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  subtitle: {
    type: String,
    required: false,
  },
  collapsable: {
    type: Boolean,
    required: false,
  },
  collapsed: {
    type: Boolean,
    default: false
  },
  noBodyPadding: {
    type: Boolean,
    default: false,
  },
  noMargin: {
    type: Boolean,
    required: false,
  },
})

const isOpen = ref(!props.collapsed)

function toggleOpen() {
  isOpen.value = !isOpen.value;
}
</script>

<style lang="scss" scoped>
.nice-wrapper {
  border-radius: var(--nice-border-radius-large);
  background: var(--nice-card-bg);
  display: block;
  margin-bottom: 2rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--nice-border-color);
  position: relative;

  .wrapper-header {
    padding: var(--nice-wrapper-padding);
    position: relative;
    display: flex;
    align-items: center;

    .wrapper-header-toggler {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      // background: var(--nice-danger-color);
      z-index: 1;
      cursor: pointer;
    }

    .wrapper-header-title-subtitle .wrapper-header-chevron {
      z-index: 2;
      position: relative;
    }

    .wrapper-header-title {
      font-weight: 600;
      font-size: 1.1em;
    }

    .wrapper-header-subtitle {
      font-style: italic;
      opacity: 0.5;
    }

    .wrapper-header-chevron {
      position: absolute;
      top: 50%;
      right: var(--nice-wrapper-padding);
      transform: translateY(-50%);

      &.rotate-180 {
        transform: translateY(-50%) rotate(180deg);
      }
    }
  }

  .wrapper-body {
    padding: var(--nice-wrapper-padding);

    &.no-padding {
      padding: 0;
    }

    &.no-top-padding {
      padding-top: 0;
    }
  }

  .wrapper-footer {
    padding: var(--nice-wrapper-padding);
    padding-top: 0;
  }
}
</style>
