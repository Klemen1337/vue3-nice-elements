<template>
  <div
    class="nice-avatar"
    :class="[
      size ? 'size-' + size : '',
      shape ? 'shape-' + shape : '',
      type ? 'type-' + type : '',
      status ? 'status-' + status : '',
      {
        plain: plain,
        gradient: gradient,
      },
    ]"
  >
    <div class="status" v-if="status"></div>
    <div class="gradient" v-html="gradientSvg" v-if="gradient"></div>
    <img class="image" :src="gavatarUrl" v-if="gavatar" />
    <img class="image" :src="image" v-if="image" />
    <div class="text" v-if="text">{{ safeString }}</div>
  </div>
</template>

<script>
import avatar from "gradient-avatar";
import md5 from "md5";

export default {
  name: "NiceAvatar",

  props: {
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
        ].includes(value);
      },
    },
    shape: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      required: false,
    },
    gradient: Boolean,
    plain: Boolean,
    hash: String,
    gavatar: String,
  },

  computed: {
    gradientSvg() {
      return avatar(md5(this.hash || this.text));
    },

    safeString() {
      const split = this.text.split(" ");
      if (split.length > 1) {
        return split[0][0] + split[1][0];
      } else {
        return this.text[0] + this.text[1];
      }
    },

    gavatarUrl() {
      return (
        "https://www.gravatar.com/avatar/" +
        md5(this.gavatar.trim().toLowerCase()) +
        "?s=50"
      );
    },
  },
};
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
    --nice-height: 34px;
    font-size: 0.9em;
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
      color: var(--#{$type}-color-lighter);
      background: var(--#{$type}-color);
    }
  }

  &.type-dark {
    color: white;
    background: var(--nice-dark-color);
  }

  // Plain
  @each $type in $types {
    &.plain.type-#{$type} {
      color: var(--#{$type}-color-darker);
      background: var(--#{$type}-color-lighter);
    }
  }

  &.plain.type-dark {
    color: white;
    background: var(--nice-secondary-color);
  }

  // Status
  @each $type in $types {
    &.status-#{$type} {
      .status {
        background: var(--#{$type}-color);
      }
    }
  }
}
</style>
