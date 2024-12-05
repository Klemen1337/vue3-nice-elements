<template>
  <div class="nice-no-data">
    <NiceIcon class="nice-no-data-icon" :icon="props.icon" />
    <div class="nice-no-data-message">{{ innerMessage  }}</div>
  </div>
</template>

<script>
export default {
  name: "NiceNoData",
};
</script>

<script setup>
import { inject, ref } from "vue";
const $t = inject('$t');

const props = defineProps({
  message: String,
  icon: {
    type: String,
    default: "icon-alert-circle"
  }
});

const innerMessage = ref(props.message || $t("Nice", "No data"))

</script>

<style lang="scss" scoped>
.nice-no-data {
  padding: 2rem;
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  .nice-no-data-icon {
    height: 30px;
  }

  .nice-no-data-message {

  }
}
</style>
