<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="nice-modal-overlay" @click="close" />
    </Transition>

    <Transition name="flyin">
      <div v-if="isOpen" class="nice-modal" :style="[{ width, height }, startingPosition]">
        <!-- Header -->
        <div
          v-if="$slots.title || title || $slots.subtitle || subtitle"
          class="nice-modal-header"
        >
          <div class="nice-modal-title">
            <slot v-if="$slots.title || title" name="title">
              {{ title }}
            </slot>
          </div>

          <div class="nice-modal-subtitle">
            <slot v-if="$slots.subtitle || subtitle" name="subtitle">
              {{ subtitle }}
            </slot>
          </div>

          <!-- Close -->
          <NiceButton
            class="nice-modal-close"
            icon="icon-x"
            naked
            @click="close"
          />
        </div>

        <!-- Body -->
        <div class="nice-modal-body" :class="{ 'no-header': !($slots.title || title || $slots.subtitle || subtitle), 'no-footer': !$slots.footer }">
          <slot />
        </div>

        <!-- Footer -->
        <div v-if="$slots.footer" class="nice-modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
export default {
  name: "NiceModal",

  props: {
    name: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "500px",
    },
    title: {
      type: String,
      required: false,
      default: undefined,
    },
    subtitle: {
      type: String,
      required: false,
      default: undefined,
    },
  },

  emits: ["close"],

  data() {
    return {
      debug: false,
      isOpen: false,
      startingPosition: { "--x": "50%", "--y": "50%" }
    };
  },

  beforeMount() {
    // Always open if debug is true
    this.debug = this.$nice.debug;
    if (this.debug) {
      this.isOpen = true;
    }
  },

  mounted() {
    this.$nice.onModal(this.onToggle);
  },

  methods: {
    close() {
      this.$emit("close");
      this.$nice.modal(this.name, false);
    },

    onToggle({ name, isOpen, event }) {
      if (this.name === name) {
        const newState = isOpen == null ? !this.isOpen : isOpen;
        if (newState) {
          if (event) this.startingPosition = { "--x": event.clientX + "px", "--y": event.clientY + "px" }
          else this.startingPosition = { "--x": "50%", "--y": "50%" }
          this.isOpen = true;
        } else {
          this.isOpen = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nice-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 2000;
}

.nice-modal {
  --nice-modal-padding: 2rem;
  display: flex;
  flex-direction: column;
  background: var(--nice-card-bg);
  border-radius: var(--nice-border-radius);
  max-width: 90%;
  max-height: 90%;
  z-index: 2001;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .nice-modal-header {
    flex-shrink: 0;
    padding: var(--nice-modal-padding);
    padding-bottom: 1rem;
    position: relative;

    .nice-modal-title {
      font-size: 1.1em;
      font-weight: 600;
    }
    .nice-modal-subtitle {
      font-style: italic;
    }

    .nice-modal-close {
      position: absolute;
      top: 1.2rem;
      right: 1rem;
    }
  }

  .nice-modal-body {
    overflow: auto;
    flex-grow: 1;
    padding: 1rem var(--nice-modal-padding);

    &.no-header {
      padding-top: var(--nice-modal-padding);
    }    
    &.no-footer {
      padding-bottom: var(--nice-modal-padding);
    }
  }

  .nice-modal-footer {
    flex-shrink: 0;
    padding: var(--nice-modal-padding);
    padding-top: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;

    .btn + .btn {
      margin-left: 0;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.flyin-enter-active,
.flyin-leave-active {
  transition: all 0.3s ease;
  transform-origin: center center;
}
.flyin-enter-from,
.flyin-leave-to {
  opacity: 0;
  top: var(--y);
  left: var(--x);
  /* transform: scale(0.9) translateY(-1rem) translateZ(0) rotateX(90deg); */
  transform: scale(0.8) translate(-50%, -50%) rotateX(45deg);
  // transform: scale(0.9) translate(var(--x), var(--y)) rotateX(45deg); 
}
</style>
