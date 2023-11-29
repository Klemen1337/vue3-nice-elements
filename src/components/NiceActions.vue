<template>
  <div class="nice-actions">
    <!-- Delete -->
    <NiceButton
      v-if="props.showDelete"
      plain
      type="danger"
      @click="askToDelete"
      :text="$t('Nice', 'Delete')"
      :form="props.form"
      :disabled="props.loading"
      icon="icon-trash-2"
    />
    <slot name="left"></slot>

    <div class="f-grow"></div>
    <slot></slot>

    <!-- Cancel -->
    <NiceButton
      plain
      type="default"
      @click="cancel"
      :text="$t('Nice', 'Cancel')"
      :form="props.form"
      :disabled="props.loading"
      icon="icon-x"
    />

    <!-- Submit -->
    <NiceButton
      native-type="submit"
      @click="submit"
      :text="props.submitText ? props.submitText : $t('Nice', 'Submit')"
      :form="props.form"
      :disabled="props.loading"
      icon="icon-save"
    />
  </div>

  <!-- Delete prompt -->
  <NiceConfirmModal
    name="delete-prompt"
    @confirm="confirmDelete"
    :title="$t('Nice', 'Delete')"
    :subtitle="props.deleteText ? props.deleteText : $t('Nice', 'Are you sure you want to delete?')"
  />
</template>

<script>
export default {
  name: "NiceActions"
}
</script>

<script setup>
import { defineProps, inject } from "vue";
import NiceConfirmModal from "./NiceConfirmModal.vue";

const props = defineProps({
  form: String,
  loading: Boolean,
  showDelete: Boolean,
  submitText: String,
  deleteText: String,
})
const $nice = inject("nice");
const emit = defineEmits(["submit", "cancel", "delete"]);

function submit() {
  emit("submit");
}

function askToDelete() {
  $nice.modal("delete-prompt", true);
}

function confirmDelete() {
  $nice.modal("delete-prompt", false);
  emit("delete");
}

function cancel() {
  emit("cancel");
}
</script>


<style lang="scss">
.nice-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;

  .btn + .btn {
    margin: 0;
  }
}
</style>
