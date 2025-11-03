<template>
  <div
    class="nice-component nice-upload"
    :class="{ 'no-margin': noMargin, active: localValue, disabled }"
  >
    <NiceComponentHeader
      :title="title"
      :required="required"
      :caption="caption"
    />
    <div 
      class="input-group" 
      :class="{ 'dragging': isDragging, 'on-target': isOnTarget }"       
      @dragenter="dragChanged"
      @dragleave="dragChanged"
      @dragover="dragChanged"
      @dragend="dragChanged"
      @drop="dragChanged"
    >
      <input
        ref="inputFile"
        :modelValue="file"
        :placeholder="placeholder"
        :required="required"
        :accept="accept"
        type="file"
        @change="fileChanged"
        :disabled="disabled"
      />

      <!-- No value -->
      <div class="nice-upload-overlay" v-if="!localValue">
        <NiceIcon icon="icon-upload" />
        <div class="nice-upload-overlay-message">{{ placeholder || $t('Nice', 'Upload file') }}</div>
      </div>

      <!-- File list -->
      <div class="nice-upload-overlay" v-if="localValue && localValueType == 'FileList'">
        <NiceIcon icon="icon-file" />
        <div class="nice-upload-overlay-message" v-for="file in localValue" :key="file.name">{{ file.name }}</div>
      </div>

      <!-- String -->
      <div class="nice-upload-overlay" v-if="localValue && localValueType == 'string'">
        <NiceIcon icon="icon-file" />
        <div class="nice-upload-overlay-message">{{ localValue }}</div>
      </div>

      <!-- Image -->
      <div class="nice-upload-overlay" v-if="localValue && localValueType == 'image'">
        <img class="nice-upload-overlay-image" :src="localValue" />
      </div>

      <!-- None -->
      <div class="nice-upload-overlay" v-if="localValue && localValueType == 'none'">
        <img class="nice-upload-overlay-image" :src="localValue" />
        <div class="nice-upload-overlay-message">{{ $t('Nice', 'File selected') }}</div>
      </div>

      <!-- Clear -->
      <button type="button" class="nice-upload-button btn btn-white btn-plain" @click="clear" :disabled="disabled" v-if="localValue">
        <NiceIcon icon="icon-x"></NiceIcon>
      </button>
      
      <!-- Loading -->
      <NiceLoading full-div v-if="loading" />
    </div>
  </div>
</template>

<script>
import SafeGet from "just-safe-get";
import NiceComponentHeader from "./NiceComponentHeader.vue";

export default {
  name: "NiceUpload",

  components: {
    NiceComponentHeader,
  },

  props: {
    modelValue: {
      type: [Array, Object, String, null],
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    accept: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },    
    caption: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
    noMargin: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },   
    loading: {
      type: Boolean,
      default: false,
    },
    error: [Object, String, null],
  },

  emits: ["change", "update:modelValue"],

  data() {
    return {
      file: null,
      isDragging: false,
      isOnTarget: false,
    }
  },

  computed: {
    localValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
        this.$emit("change", value);
      },
    },

    localValueType() {
      if (!this.localValue) return "None"
      try {
        if (this.localValue instanceof FileList) return "FileList"
        if (this.localValue instanceof File) return "File"
        if (typeof this.localValue == "string") {
          try {
            new URL(this.localValue);
            if (this.localValue.includes(".png") || this.localValue.includes(".jpg")) return "image"
            return "string"
          } catch (e) {
            console.log(e)
            return "string"
          }
        }
        return this.localValue ? typeof this.localValue : null
      } catch (e) {
        return "None"
      }
    },

    errorMessage() {
      if (typeof this.error == "string") return this.error;
      const err = SafeGet(this.error, ["response", "data", this.prop]);
      return typeof err == "object" ? err.join("-") : err;
    },
  },

  methods: {
    fileChanged(event) {
      this.isDragging = false;
      this.isOnTarget = false;
      this.localValue = event.target.files
      this.file = null
    },

    dragChanged(event) {
      this.isOnTarget = event.type == 'dragover'
    },

    clear () {
      this.localValue = null
      this.file = null
      if (this.$refs.inputFile) this.$refs.inputFile.value = null;
    }

    // documentDragChanged(event) {
    //   console.log("documentDragChanged", event, event.type)
    // }
  },

  // mounted() {
  //   document.body.addEventListener('dragleave', this.documentDragChanged);
  //   document.body.addEventListener('dragstart', this.documentDragChanged);
  //   document.body.addEventListener('dragend', this.documentDragChanged);
  //   document.body.addEventListener('drag', this.documentDragChanged);
  // },

  // unmounted() {
  //   window.removeEventListener('dragleave', this.documentDragChanged);
  //   window.removeEventListener('dragstart', this.documentDragChanged);
  //   window.removeEventListener('dragend', this.documentDragChanged);
  //   window.removeEventListener('drag', this.documentDragChanged);
  // },
};
</script>

<style lang="scss" scoped>
.nice-upload {
  &.disabled {
    .input-group {
      input {
        cursor: not-allowed;
      }
    }
  }

  .input-group {
    position: relative;
    min-height: 120px;
    border: 1px solid var(--nice-border-color);
    border-radius: var(--nice-border-radius);
    background: var(--nice-card-bg);

    &:focus-within {
      outline-offset: 2px;
      outline: 2px solid var(--nice-primary-color);
    }

    &:hover {
      background: var(--nice-hover-color);
    }

    &.on-target {
      outline: 2px solid var(--nice-primary-color);
      background: var(--nice-primary-color-lighter);
    }

    &.dragging {
      outline: 2px solid var(--nice-primary-color);
      background: var(--nice-primary-color-lighter);
    }

    input {
      border: 0 none;
      opacity: 0;
      padding: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      cursor: pointer;
    }

    .nice-upload-button  {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      padding: 5px;
      height: auto;
      background: transparent;
    }

    .nice-upload-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      
      .nice-icon {
        height: 22px;
        width: 22px;
        color: currentColor;
      }

      .nice-upload-overlay-image {
        max-width: 100%;
        max-height: 100%;
      }

      .nice-upload-overlay-message {
        margin-top: 0.3rem;
        font-size: 0.8em;
      }
    }
  }
}
</style>
