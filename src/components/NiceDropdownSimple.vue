<template>
  <div
    class="nice-component nice-dropdown-simple"
    :class="{ disabled, 'no-margin': noMargin }"
  >
    <NiceComponentHeader
      :title="title"
      :required="required"
      :caption="caption"
    />
    <div class="input-group">
      <div class="select-wrapper" :class="{ 'no-value': localValue == null }">
        <select
          :required="required"
          :disabled="disabled"
          :modelValue="localValue"
          @change="handleChange"
        >
          <option v-if="nullable" :value="null" :selected="!localValue">
            {{ nullText || $t('Nice', 'None') }}
          </option>
          <option
            v-for="item in values"
            :value="item[keyName]"
            :key="item[keyName]"
          >
            {{ item[valueName] }}
          </option>
        </select>
        <div
          class="no-options"
          v-if="!nullable && !loading && (!values || values.length == 0)"
        >
          {{ $t('Nice', 'No options') }}
        </div>
        <NiceLoading class="no-options" v-if="loading" />
        <NiceIcon class="arrow-down" icon="icon-chevron-down" />
      </div>

      <button
        class="btn"
        type="button"
        v-if="addFunction"
        :disabled="disabled"
        @click="addFunction"
      >
        <NiceIcon icon="icon-plus" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NiceDropdownSimple"
}
</script>

<script setup>
import { computed, watch, onMounted, inject } from "vue";
import NiceComponentHeader from "./NiceComponentHeader.vue";

const props = defineProps({
  modelValue: {
    type: [Object, String, Number, null],
    required: true,
  },
  values: Array,
  title: String,
  noMargin: Boolean,
  nullable: Boolean,
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: Boolean,
  keyOnly: Boolean,
  required: {
    type: Boolean,
    default: false,
  },
  addFunction: {
    type: Function,
    default: null,
  },
  nullText: String,
  caption: {
    type: String,
    default: null,
  },
  keyName: {
    type: String,
    default: "id",
  },
  valueName: {
    type: String,
    default: "value",
  },
})

const $t = inject("$t")
const emits = defineEmits(["change", "update:modelValue"])
const localValue = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emits("update:modelValue", val);
    emits("change", val);
  },
})

watch(() => props.values, () => {
  handleDefault();
})

onMounted(() => {
  handleDefault();
})

function handleChange(e) {
  const selected = props.values.find((item) => {
    return item[props.keyName] == e.target.value;
  });
  if (selected) {
    changeValue(selected);
  } else {
    changeValue(undefined);
  }
}

function handleDefault() {
  // Select default value
  setTimeout(() => {
    if (!localValue.value && props.values.length > 0 && !props.nullable) {
      changeValue(props.values[0]);
    }
  });
}

function changeValue(value) {
  if (value) {
    if (props.keyOnly) {
      localValue.value = value[props.keyName];
    } else {
      localValue.value = value;
    }
  } else {
    localValue.value = undefined;
  }
}
</script>

<style lang="scss" scoped>
.nice-dropdown-simple {
  .input-group {
    margin-bottom: 0;
    display: flex;

    .select-wrapper {
      flex-grow: 1;
      position: relative;
      background: var(--nice-card-bg);

      .arrow-down {
        position: absolute;
        top: 50%;
        right: 0.5rem;
        margin-top: -9px;
        width: 18px;
        height: 18px;
      }

      select {
        position: relative;
        font-size: 1em;
        background: transparent;
        padding: 3px 2.5rem 4px 12px;
        min-height: 34px !important;
        border-radius: var(--nice-border-radius);
        border: 1px solid var(--nice-border-color);
        min-height: var(--nice-height);
        cursor: pointer;
        display: flex;
        align-items: center;
        z-index: 1;
      }

      &.no-value {
        select {
          // color: #ccc !important;
        }
      }
    }

    .btn {
      flex-shrink: 0;
      margin-left: 1rem;
    }
  }
}
</style>
