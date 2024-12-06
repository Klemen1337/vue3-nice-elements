<template>
  <div
    class="nice-component nice-input"
    :class="{ 'no-margin': noMargin, active: localValue, disabled }"
  >
    <NiceComponentHeader
      :title="title"
      :required="required"
      :caption="caption"
    />

    <div class="input-group">
      <div class="input-group-suffix" :class="{ 'input-group-suffix-text': props.suffixText }" v-if="slots.suffix || props.suffixText">
        <slot name="suffix">{{ props.suffixText }}</slot>
      </div>
      <input
        @blur="toggleBlurred(true)"
        @focus="toggleBlurred(false)"
        v-model="localValue"
        :class="{ 'text-right': textRight }"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :type="type"
        :required="required"
        :disabled="disabled"
      />
      <div class="input-group-append input-group-icon" v-if="icon">
        <NiceIcon :icon="icon" />
        <NiceIcon icon="icon-x" class="clear-input" @click="clearInput" />
      </div>
      <div class="input-group-append" :class="{ 'input-group-append-text': props.appendText }" v-if="slots.append || props.appendText">
        <slot name="append">{{ props.appendText }}</slot>
      </div>
    </div>
    <div class="nice-component-message" v-if="message">{{ message }}</div>
    <div class="nice-component-message nice-error" v-if="errorMessage">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: "NiceInput"
}
</script>

<script setup>
import { computed, ref, defineProps, useSlots } from "vue";
import SafeGet from "just-safe-get";
import NiceComponentHeader from "./NiceComponentHeader.vue";
const slots = useSlots();

const props = defineProps({
  modelValue: {
    type: [String, Number, null],
    required: true,
  },
  title: {
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
  message: {
    type: String,
    default: null,
  },
  autocomplete: {
    type: String,
    default: null,
  },
  suffixText: {
    type: String,
    default: null,
  },
  appendText: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: null,
  },
  icon: {
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
  textRight: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  formatter: Function,
  prop: String,
  error: [Object, String, null],
})

let debounce = null
const emits = defineEmits(["change", "debounce", "update:modelValue"])

const localValue = computed({
  get() {
    // return props.modelValue;
    if (!isBlurred.value) return props.modelValue
    if (!props.formatter) return props.modelValue
    return props.formatter(props.modelValue);
  },
  set(value) {
    emits("update:modelValue", value);
    emits("change", value);
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      emits("debounce", value);
    }, 500);
  },
})

const isBlurred = ref(true);
function toggleBlurred (value) {
  isBlurred.value = value;
}

const errorMessage = computed(() => {
  if (typeof props.error == "string") return props.error;
  const err = SafeGet(props.error, ["response", "data", props.prop]);
  return typeof err == "object" ? err.join("-") : err;
})

function clearInput() {
  localValue.value = "";
}
</script>

<style lang="scss" scoped>
.nice-input {
  &.active {
    &:hover {
      .input-group-icon {
        .nice-icon {
          display: none;
        }

        .clear-input {
          display: block;
        }
      }
    }
  }
  .input-group {
    height: var(--nice-height);
    display: flex;
    border: 1px solid var(--nice-border-color);
    border-radius: var(--nice-border-radius);
    background: var(--nice-card-bg);

    &:focus-within {
      outline-offset: 2px;
      outline: 2px solid var(--nice-primary-color);

      input {
        outline: 0 none;
      }
    }

    .input-group-icon {
      align-items: center;
      padding: 0 0.5rem;
      .nice-icon {
        height: 18px;
        width: 18px;
      }

      .clear-input {
        display: none;
        cursor: pointer;
      }
    }

    .input-group-suffix,
    .input-group-append {
      display: flex;
    }

    .input-group-suffix-text, .input-group-append-text {
      padding: 8px;
      align-items: center;
      justify-content: center;  
    }

    .input-group-suffix-text {
      border-right: 1px solid var(--nice-border-color);
    }

    .input-group-append-text {
      border-left: 1px solid var(--nice-border-color);
    }

    .input-group-suffix + input {
      // border-left: 1px solid var(--nice-border-color);
      .nice-button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }

    input + .input-group-append {
      // border-left: 1px solid var(--nice-border-color);
      .nice-button {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    input {
      border: 0 none;
      padding: 8px 12px;
      color: currentColor;
      flex-grow: 1;
      height: 100%;
      // background: transparent;

      &::placeholder {
        opacity: 0.5;
      }
    }
  }
}
</style>
