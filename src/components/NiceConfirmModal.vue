<template>
  <NiceModal :name="name" :title="$t('Nice', 'Delete')" :subtitle="$t('Nice', 'Are you sure you want to delete?')"
    @close="cancel">
    <div class="nice-actions">
      <!-- Cancel -->
      <NiceButton :text="$t('Nice', 'Cancel')" @click="cancel" type="default" plain icon="icon-x" />

      <!-- Confirm -->
      <NiceButton :text="$t('Nice', 'Confirm')" @click="confirm" icon="icon-check" />
    </div>
  </NiceModal>
</template>

<script>
export default {
  name: "NiceConfirmModal"
}
</script>

<script setup>
import { inject } from "vue";
import NiceButton from "./NiceButton.vue";
import NiceModal from "./NiceModal.vue";

const props = defineProps({
  name: {
    type: String,
    default: "confirm-prompt",
  },
})
const $t = inject('$t')
const nice = inject("nice")
const emits = defineEmits(["cancel", "confirm"])

function cancel() {
  nice.modal(props.name, false);
  emits("cancel");
}

function confirm() {
  emits("confirm");
}
</script>
