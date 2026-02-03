<template>
  <div
    class="nice-component nice-date"
    :class="{
      disabled: disabled,
      'no-margin': noMargin,
      'has-value': modelValue,
      'is-inline': isInline,
    }"
  >
    <NiceComponentHeader
      :title="title"
      :required="required"
      :caption="caption"
    />

    <div class="nice-dropdown" v-if="isInline">
      <div class="month-wrapper">
        <NiceButton
          class="left"
          @click="changeMonth(false)"
          icon="icon-chevron-left"
          naked
        />
        <div class="value">
          <div class="year">{{ selected.getFullYear() }}</div>
          <div class="month">{{ monthNames[selected.getMonth() + 1] }}</div>
        </div>
        <NiceButton
          class="right"
          @click="changeMonth(true)"
          icon="icon-chevron-right"
          naked
        />
      </div>

      <div class="calendar">
        <div class="header">
          <div>{{ dayNames[1] }}</div>
          <div>{{ dayNames[2] }}</div>
          <div>{{ dayNames[3] }}</div>
          <div>{{ dayNames[4] }}</div>
          <div>{{ dayNames[5] }}</div>
          <div>{{ dayNames[6] }}</div>
          <div>{{ dayNames[7] }}</div>
        </div>

        <div class="month">
          <div
            class="day"
            v-for="day in days"
            @click="dayChanged(day)"
            :class="{
              'previous-month': !day.currentMonth,
              'day-highlighted': day.highlighted,
              today: day.today,
              selected: day.selected,
            }"
            :title="day.text"
            :key="day.id"
          >
            {{ day.day }}
          </div>
        </div>
      </div>

      <div class="time" v-if="time">
        <div class="select-wrapper">
          <div class="arrow-down"></div>
          <select @change="hourChanged">
            <option
              v-for="hour in hours"
              :value="hour"
              :key="hour"
              :selected="hour == selected.getHours()"
            >
              {{ hour }}
            </option>
          </select>
        </div>
        <div>:</div>
        <div class="select-wrapper">
          <div class="arrow-down"></div>
          <select @change="minuteChanged">
            <option
              v-for="minute in minutes"
              :value="minute"
              :key="minute"
              :selected="minute == selected.getMinutes()"
            >
              {{ minute }}
            </option>
          </select>
        </div>
        <NiceIcon class="time-icon" icon="icon-clock" />
      </div>
    </div>

    <NicePopup
      no-padding
      placement="bottom-start"
      ref="popup"
      class="w-full"
      @change="popupChanged"
      v-if="!isInline"
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
          <NiceIcon class="icon clear" icon="icon-x" @click="clear" />
        </div>
      </template>

      <template #content>
        <div class="nice-dropdown">
          <div class="month-wrapper">
            <NiceButton
              class="left"
              @click="changeMonth(false)"
              icon="icon-chevron-left"
              naked
            />
            <div class="value">
              <div class="year">{{ selected.getFullYear() }}</div>
              <div class="month">{{ monthNames[selected.getMonth() + 1] }}</div>
            </div>
            <NiceButton
              class="right"
              @click="changeMonth(true)"
              icon="icon-chevron-right"
              naked
            />
          </div>

          <div class="calendar">
            <div class="header">
              <div>{{ dayNames[1] }}</div>
              <div>{{ dayNames[2] }}</div>
              <div>{{ dayNames[3] }}</div>
              <div>{{ dayNames[4] }}</div>
              <div>{{ dayNames[5] }}</div>
              <div>{{ dayNames[6] }}</div>
              <div>{{ dayNames[7] }}</div>
            </div>

            <div class="month">
              <div
                class="day"
                v-for="day in days"
                @click="dayChanged(day)"
                :class="{
                  'previous-month': !day.currentMonth,
                  'day-highlighted': day.highlighted,
                  today: day.today,
                  selected: day.selected,
                }"
                :title="day.text"
                :key="day.id"
              >
                {{ day.day }}
              </div>
            </div>
          </div>

          <div class="time" v-if="time">
            <div class="select-wrapper">
              <div class="arrow-down"></div>
              <select @change="hourChanged">
                <option
                  v-for="hour in hours"
                  :value="hour"
                  :key="hour"
                  :selected="hour == selected.getHours()"
                >
                  {{ hour }}
                </option>
              </select>
            </div>
            <div>:</div>
            <div class="select-wrapper">
              <div class="arrow-down"></div>
              <select @change="minuteChanged">
                <option
                  v-for="minute in minutes"
                  :value="minute"
                  :key="minute"
                  :selected="minute == selected.getMinutes()"
                >
                  {{ minute }}
                </option>
              </select>
            </div>
            <NiceIcon class="time-icon" icon="icon-clock" />
          </div>
        </div>
      </template>
    </NicePopup>
  </div>
</template>

<script>
export default {
  name: "NiceDate"
}
</script>

<script setup>
import { ref, watch, onMounted, inject } from "vue";
import NiceComponentHeader from "./NiceComponentHeader.vue";
import NicePopup from "./NicePopup.vue";
import { isWithinInterval } from "date-fns";

const props = defineProps({
  modelValue: {
    type: [String, Date, null],
    required: false
  },
  highlightTo: {
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
  isInline: Boolean,
  time: {
    default: true,
    type: Boolean,
  },
})

const $t = inject('$t');
const emits = defineEmits(["change", "update:modelValue"]);
const innerDate = ref(null)
const inputVal = ref("")
const selected = ref(new Date())
const days = ref([])
const popup = ref(null)
const hours = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24,
]
const minutes = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
  56, 57, 58, 59,
]
const dayNames = {
  1: $t("Nice", "Mon"),
  2: $t("Nice", "Tue"),
  3: $t("Nice", "Wed"),
  4: $t("Nice", "Thu"),
  5: $t("Nice", "Fri"),
  6: $t("Nice", "Sat"),
  7: $t("Nice", "Sun"),
}
const monthNames = {
  1: $t("Nice", "January"),
  2: $t("Nice", "February"),
  3: $t("Nice", "March"),
  4: $t("Nice", "April"),
  5: $t("Nice", "May"),
  6: $t("Nice", "June"),
  7: $t("Nice", "July"),
  8: $t("Nice", "August"),
  9: $t("Nice", "September"),
  10: $t("Nice", "October"),
  11: $t("Nice", "November"),
  12: $t("Nice", "December"),
}
const data = {
  month: null,
  year: null,
  day: null,
  hour: null,
  minute: null,
}


watch(() => props.modelValue, () => {
  if (props.modelValue && isDateValid(props.modelValue)) {
    innerDate.value = new Date(props.modelValue);
    selected.value = new Date(props.modelValue);
    _extractData();
  }
})

watch(() => props.highlightTo, () => {
  _buildMonth()
})

onMounted(() => {
  handleDefault();
})

function isDateValid(dateStr) {
  return !isNaN(new Date(dateStr));
}

function close() {
  if (popup.value) popup.value.close();
}

function clear() {
  inputVal.value = "";
  emits("update:modelValue", null);
  emits("change", null);
  setTimeout(() => {
    close();
  });
}

function popupChanged(isOpen) {
  if (isOpen) _buildMonth();
}

function handleChange() {
  _extractData();
  emits("update:modelValue", innerDate.value);
  emits("change", innerDate.value);
}

function inputChanged() {
  if (inputVal.value && inputVal.value != "") {
    let inputSplit = inputVal.value.split(" • ");
    let date = new Date();
    let dateSplit = inputSplit[0].split(".");
    date.setDate(dateSplit[0]);
    date.setMonth(dateSplit[1] - 1);
    date.setFullYear(dateSplit[2]);
    if (props.time) {
      let timeSplit = inputSplit[1].split(":");
      date.setHours(timeSplit[0]);
      date.setMinutes(timeSplit[1]);
      date.setSeconds(0, 0);
    } else {
      date.setHours(12);
      date.setMinutes(0);
      date.setSeconds(0, 0);
    }
    innerDate.value = date;
    handleChange();
  }
}

function hourChanged(e) {
  let hour = e.target.value;
  selected.value.setHours(hour);
  innerDate.value.setHours(hour);
  handleChange();
}

function minuteChanged(e) {
  let minutes = e.target.value;
  selected.value.setMinutes(minutes);
  innerDate.value.setMinutes(minutes);
  handleChange();
}

function dayChanged(day) {
  innerDate.value.setYear(day.year);
  innerDate.value.setMonth(day.month);
  innerDate.value.setDate(day.day);
  handleChange();
}

function handleDefault() {
  if (!props.modelValue) {
    innerDate.value = new Date();
    innerDate.value.setSeconds(0, 0);
    // inputVal = _formatDate(innerDate.value)
  }
  
  if (props.modelValue && isDateValid(props.modelValue)) {
    innerDate.value = new Date(props.modelValue);
    innerDate.value.setSeconds(0, 0);
    inputVal.value = _formatDate(innerDate.value);
  }
  // handleChange()

  if (props.isInline) _buildMonth()
}

// function changeYear(add) {
//   let year = selected.value.getFullYear();
//   if (add) {
//     year += 1;
//   } else {
//     year -= 1;
//   }
//   selected.value.setFullYear(year);
//   _buildMonth();
// }

function changeMonth(add) {
  let month = selected.value.getMonth();
  if (add) {
    month += 1;
  } else {
    month -= 1;
  }
  selected.value.setMonth(month);
  _buildMonth();
}

function _buildMonth() {
  days.value = [];
  
  // 1. Get the first day of the currently viewed month
  const firstDayOfMonth = new Date(
    selected.value.getFullYear(),
    selected.value.getMonth(),
    1
  );

  // 2. Calculate the offset (0 = Sunday, 1 = Monday, etc.)
  // If your calendar starts on Monday, we adjust the JS Sunday (0) to 7
  let startOffset = firstDayOfMonth.getDay(); 
  if (startOffset === 0) startOffset = 7; // Treat Sunday as 7
  startOffset -= 1; // Adjust so Monday = 0

  // 3. We always want to show a standard 6-week grid (42 days)
  // We start the loop from 1 minus the offset
  for (let d = 1 - startOffset; d <= 42 - startOffset; d++) {
    days.value.push(
      _buildDay(
        selected.value.getFullYear(),
        selected.value.getMonth(),
        d
      )
    );
  }
}

function _buildDay(year, month, day) {
  const today = new Date();
  const date = new Date(year, month, day);
  return {
    id: date.toString(),
    date: date,
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    dayInWeek: date.getDay(),
    currentMonth: date.getMonth() == selected.value.getMonth(),
    selected: _isSameDay(innerDate.value, date),
    today: _isSameDay(today, date),
    highlighted: _isHighlighted(date),
    text: _formatDate(date),
  };
}

function _isHighlighted(date) {
  if (props.highlightTo && isWithinInterval(date, { end: props.highlightTo, start: selected.value })) return true;
  return false
}

function _isSameDay(date1, date2) {
  return (
    date1.getDate() == date2.getDate() &&
    date1.getMonth() == date2.getMonth() &&
    date1.getFullYear() == date2.getFullYear()
  );
}

function _formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (props.time) {
    return `${day}.${month}.${year} • ${hour}:${minute}`;
  } else {
    return `${day}.${month}.${year}`;
  }
}

function _extractData() {
  if (!innerDate.value) innerDate.value = new Date();
  data.day = innerDate.value.getDate();
  data.month = innerDate.value.getMonth();
  data.year = innerDate.value.getFullYear();
  data.hour = innerDate.value.getHours();
  data.minute = innerDate.value.getMinutes();
  inputVal.value = _formatDate(innerDate.value);
  selected.value.year = data.year;
  selected.value.month = data.month;
  _buildMonth();
}
</script>

<style lang="scss" scoped>
.nice-date {
  position: relative;

  &.is-inline {
    .nice-dropdown {
      box-shadow: 0 0 0;
      border: 1px solid var(--nice-border-color);
    }
  }

  &.has-value {
    .input-group {
      &:hover {
        .icon {
          display: none;
          &.clear {
            display: block;
          }
        }
      }
    }
  }

  .input-group {
    position: relative;
    margin-bottom: 0;

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

  .nice-dropdown {
    width: 250px;
    background: var(--nice-card-bg);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
    border-radius: var(--nice-border-radius);
    border: var(--nice-border);

    .year-wrapper,
    .month-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      .left,
      .right {
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--nice-border-radius);

        svg {
          height: 15px;
        }

        &:hover {
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
        }
      }

      .value {
        flex-grow: 1;
        text-align: center;
        line-height: 1;

        .year {
          font-size: 0.5em;
        }
      }
    }

    .month-wrapper {
      .value {
        font-size: 1.2em;
      }
    }

    .calendar {
      margin-top: 1rem;

      .week,
      .header,
      .month {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
      }

      .day {
        cursor: pointer;
        text-align: center;
        border-radius: 5px;
        line-height: 25px;
        font-size: 0.9em;

        &:hover {
          background: var(--nice-primary-color-lighter);
          color: var(--nice-primary-color);
        }

        &.previous-month {
          color: var(--nice-font-color-lighter);
        }

        &.day-highlighted {
          background: var(--nice-primary-color-lighter);
        }

        &.selected {
          background: var(--nice-primary-color);
          color: white !important;
        }

        &.today {
          color: var(--nice-primary-color);
        }
      }

      .header {
        font-size: 0.6em;
        text-transform: uppercase;
        align-items: center;
        text-align: center;
      }
    }

    .time {
      margin-top: 0.5rem;
      padding-top: 0.5rem;
      display: flex;
      align-items: center;
      border-top: 1px solid var(--nice-border-color);

      .time-icon {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
        margin-right: 0.5rem;
      }

      .select-wrapper {
        flex-grow: 1;

        .arrow-down {
          display: none;
        }

        select {
          cursor: pointer;
          text-align: center;
          border: 0 none;
          height: auto;
          padding: 0.3rem;
        }
      }
    }
  }
}
</style>
