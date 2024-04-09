<template>
  <div
    class="nice-avatar"
    :class="[
      props.size ? 'size-' + props.size : '',
      props.shape ? 'shape-' + props.shape : '',
      props.type ? 'type-' + props.type : '',
      props.status ? 'status-' + props.status : '',
      {
        plain: props.plain,
        gradient: props.gradient,
      },
    ]"
  >
    <div class="status" v-if="props.status"></div>
    <div class="gradient" v-html="gradientSvg" v-if="props.gradient"></div>
    <img class="image" :src="gavatarUrl" v-if="props.gavatar" />
    <img class="image" :src="props.image" v-if="props.image" />
    <div class="text" v-if="props.text">{{ safeString }}</div>
  </div>
</template>

<script>
export default {
  name: 'NiceAvatar',
}
</script>

<script setup>
import { computed } from "vue";
import avatar from "gradient-avatar";
import md5 from "md5";

const props = defineProps({
  text: {
    type: String,
    required: false,
  },
  size: {
    type: String,
    default: null,
    validator(value) {
      return ["mini", "small", "default", "medium", "large"].includes(value);
    },
  },
  type: {
    type: String,
    default: null,
    validator(value) {
      return [
        "primary",
        "default",
        "success",
        "warning",
        "danger",
        "info",
        "dark",
        "white"
      ].includes(value);
    },
  },
  status: {
    type: String,
    default: null,
    validator(value) {
      return [
        "primary",
        "default",
        "success",
        "warning",
        "danger",
        "info",
        "dark",
        "white"
      ].includes(value);
    },
  },
  shape: {
    type: String,
    default: null,
    validator(value) {
      return [
        "rounded", "square",
      ].includes(value);
    },
  },
  image: {
    type: String,
    required: false,
  },
  gradient: Boolean,
  plain: Boolean,
  hash: String,
  gavatar: String,
});

const gradientSvg = computed(() => {
  return avatar(md5(props.hash || props.text));
});

const safeString = computed(() => {
  const split = props.text.split(" ");
  if (split.length > 1) {
    return split[0][0] + split[1][0];
  } else {
    return props.text[0] + props.text[1];
  }
});

const gavatarUrl = computed(() => {
  return (
    "https://www.gravatar.com/avatar/" +
    md5(props.gavatar.trim().toLowerCase()) +
    "?s=50"
  );
})
</script>

<style lang="scss">
.nice-avatar {
  display: inline-block;
  width: var(--nice-height);
  height: var(--nice-height);
  background: var(--nice-primary-color);
  color: var(--nice-primary-color-lighter);
  font-size: 1em;
  line-height: 0;
  text-transform: uppercase;
  position: relative;
  --radius: 50%;
  border-radius: var(--radius);

  & + .nice-avatar {
    margin-left: 0.2rem;
  }

  .gradient,
  .image {
    border-radius: var(--radius);
    overflow: hidden;
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  .status {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--nice-primary-color);
    border: 2px solid white;
    z-index: 4;
  }

  // Size
  &.size-large {
    --nice-height: var(--nice-height-large);
    font-size: 1.2em;
  }

  &.size-medium {
    --nice-height: 45px;
    font-size: 1.1em;
  }

  &.size-small {
    --nice-height: var(--nice-height-small);
    font-size: 0.8em;
  }

  &.size-mini {
    --nice-height: 20px;
    font-size: 0.6em;
  }

  // Shape
  &.shape-rounded {
    --radius: var(--nice-border-radius);
  }

  &.shape-square {
    --radius: 0;
  }

  // Type
  $types: "primary", "default", "success", "warning", "danger", "info";
  @each $type in $types {
    &.type-#{$type} {
      color: var(--nice-#{$type}-color-lighter);
      background: var(--nice-#{$type}-color);
    }
  }

  &.type-dark {
    color: white;
    background: var(--nice-dark-color);
  }

  // Plain
  @each $type in $types {
    &.plain.type-#{$type} {
      color: var(--nice-#{$type}-color-darker);
      background: var(--nice-#{$type}-color-lighter);
    }
  }

  &.plain.type-dark {
    color: white;
    background: var(--nice-secondary-color);
  }

  &.type-white {
    color: var(--nice-font-color);
    background: white;
  }

  // Status
  @each $type in $types {
    &.status-#{$type} {
      .status {
        background: var(--nice-#{$type}-color);
      }
    }
  }
}
</style>
