<template>
  <div
    class="nice-component nice-date-range"
    :class="{
      disabled: disabled,
      'no-margin': noMargin
    }"
  >
    <NiceComponentHeader
      :title="title"
      :required="required"
      :caption="caption"
    />

    <NicePopup
      no-padding
      placement="bottom-start"
      ref="popup"
      class="w-full"
      @change="popupChanged"
    >
      <template #trigger>
        <div class="input-group">
          <input
            v-model="inputVal"
            :placeholder="placeholder || $t('Nice', 'None')"
            :disabled="disabled"
            :required="required"
            @blur="inputChanged"
          />
          <NiceIcon class="icon" icon="icon-calendar" />
          <!-- <NiceIcon class="icon clear" icon="icon-x" @click="clear" /> -->
        </div>
      </template>

      <template #content>
        <div class="nice-date-range-dropdown">
          <div class="nice-date-range-buttons">
            <NiceButton plain v-for="item in predefinedDates" :key="item.id" @click="selectPredefinedDate(item)">{{ item.name }}</NiceButton>
          </div>
          <NiceDate :time="time" :highlightTo="innerTo" @change="dateChanged" v-model="innerFrom" isInline noMargin />
          <NiceDate :time="time" :highlightTo="innerFrom" @change="dateChanged" v-model="innerTo" isInline noMargin />
        </div>
      </template>
    </NicePopup>
  </div>
</template>

<script>
export default {
  name: "NiceDateRange"
}
</script>

<script setup>
import { ref, onMounted, inject } from "vue";
import NiceComponentHeader from "./NiceComponentHeader.vue";
import NicePopup from "./NicePopup.vue";
import { startOfWeek, startOfDay, endOfDay, startOfYesterday, endOfYesterday, endOfWeek, startOfMonth, endOfMonth, format, isBefore } from "date-fns";

const props = defineProps({
  from: {
    type: [String, Date, null],
    required: false
  },
  to: {
    type: [String, Date, null],
    required: false
  },
  title: String,
  caption: String,
  noMargin: Boolean,
  required: Boolean,
  disabled: Boolean,
  loading: Boolean,
  placeholder: String,
  time: {
    default: true,
    type: Boolean,
  },
})

const $t = inject('$t');
const emits = defineEmits(["change", "update:from", "update:to"]);
const popup = ref(null)
const inputVal = ref("")
const inputFormat = ref("d.M.yyyy")

const predefinedDates = [
  {
    name: $t("Nice", "Today"),
    from: startOfDay(new Date()),
    to: endOfDay(new Date())
  },
  {
    name: $t("Nice", "Yesterday"),
    from: startOfYesterday(new Date()),
    to: endOfYesterday(new Date())
  },
  {
    name: $t("Nice", "This week"),
    from: startOfWeek(new Date()),
    to: endOfWeek(new Date())
  },
  {
    name: $t("Nice", "This month"),
    from: startOfMonth(new Date()),
    to: endOfMonth(new Date())
  }
]

const innerFrom = ref(null)
const innerTo = ref(null)

onMounted(() => {
  if (props.time) inputFormat.value = "d.M.yyyy HH:mm"
  if (props.from) innerFrom.value = props.from;
  if (props.to) innerTo.value = props.to;

  if (!innerFrom.value) selectPredefinedDate(predefinedDates[0]);
})

function popupChanged() {

}

function dateChanged () {
  if (isBefore(innerTo.value, innerFrom.value)) {
    const temp = innerFrom.value;
    innerFrom.value = innerTo.value
    innerTo.value = temp
  }

  handleChange()
}

function selectPredefinedDate(item) {
  innerFrom.value = item.from
  innerTo.value = item.to
  handleChange()
}

function handleChange() {
  emits("update:to", innerTo.value);
  emits("update:from", innerFrom.value);
  emits("change", { from: innerFrom.value, to: innerTo.value });
  updateInputValue();
}

function updateInputValue () {
  inputVal.value = format(innerFrom.value, inputFormat.value) + ' - ' + format(innerTo.value, inputFormat.value)
}
</script>

<style lang="scss" scoped>
.nice-date-range {
  position: relative;

  .input-group {
    position: relative;
    margin-bottom: 0;

    input {
      padding: 0.2rem 3rem 0.2rem 1rem;
    }

    .icon {
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);
      height: 18px;
      width: 18px;
      fill: var(--nice-font-color);

      &.clear {
        cursor: pointer;
        display: none;
      }
    }

    &.is-open {
      z-index: 100000;
    }
  }

  .nice-date-range-dropdown {
    display: flex;
    gap: 1rem;
    padding: 1rem;

    .nice-date {
      .nice-dropdown {
        box-shadow: 0 0 0 !important;
      }
    }

    .nice-date-range-buttons {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;

      .btn {
        margin-left: 0;
      }
    }
  }
}
</style>
