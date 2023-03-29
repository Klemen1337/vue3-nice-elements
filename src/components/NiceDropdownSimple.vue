<template>
  <div
    class="nice-component nice-dropdown-simple"
    :class="{ disabled: disabled, 'no-margin': noMargin }"
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
            {{ nullText }}
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
          No options
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
import NiceIcon from "./NiceIcon.vue";
import NiceComponentHeader from "./NiceComponentHeader.vue";

export default {
  name: "NiceDropdownSimple",

  components: {
    NiceIcon,
    NiceComponentHeader,
  },

  props: {
    modelValue: {
      type: [Object, String, Number, null],
      required: true,
    },
    values: Array,
    title: String,
    noMargin: Boolean,
    nullable: Boolean,
    disabled: Boolean,
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
    nullText: {
      type: String,
      default: "None",
    },
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
  },

  emits: ["change", "update:modelValue"],

  computed: {
    localValue: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
        this.$emit("change", val);
      },
    },
  },

  watch: {
    values() {
      this.handleDefault();
    },
  },

  mounted() {
    this.handleDefault();
  },

  methods: {
    handleChange(e) {
      let selected = this.values.find((item) => {
        return item[this.keyName] == e.target.value;
      });
      if (selected) {
        this.changeValue(selected);
      } else {
        this.changeValue(undefined);
      }
    },
    handleDefault() {
      // Select default value
      setTimeout(() => {
        if (!this.value && this.values.length > 0 && !this.nullable) {
          this.changeValue(this.values[0]);
        }
      });
    },
    changeValue(value) {
      if (value) {
        if (this.keyOnly) {
          this.localValue = value[this.keyName];
        } else {
          this.localValue = value;
        }
      } else {
        this.localValue = undefined;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nice-dropdown {
  .input-group {
    margin-bottom: 0;
    display: flex;

    .select-wrapper {
      flex-grow: 1;

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
