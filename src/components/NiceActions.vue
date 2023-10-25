<template>
  <div class="nice-actions">
    <!-- Delete -->
    <NiceButton
      v-if="showDelete"
      plain
      type="danger"
      @click="askToDelete"
      :text="$t('Nice', 'Delete')"
      :form="form"
      :disabled="loading"
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
      :form="form"
      :disabled="loading"
      icon="icon-x"
    />

    <!-- Submit -->
    <NiceButton
      native-type="submit"
      @click="submit"
      :text="submitText ? submitText : $t('Nice', 'Submit')"
      :form="form"
      :disabled="loading"
      icon="icon-save"
    />
  </div>

  <!-- Delete prompt -->
  <NiceConfirmModal
    name="delete-prompt"
    @confirm="confirmDelete"
    :title="$t('Nice', 'Delete')"
    :subtitle="deleteText ? deleteText : $t('Nice', 'Are you sure you want to delete?')"
  />
</template>

<script>
import NiceConfirmModal from "./NiceConfirmModal.vue";

export default {
  name: "NiceActions",

  components: {
    NiceConfirmModal,
  },

  props: {
    form: String,
    loading: Boolean,
    showDelete: Boolean,
    submitText: String,
    deleteText: String,
  },

  emits: ["submit", "cancel", "delete"],

  methods: {
    submit() {
      this.$emit("submit");
    },
    askToDelete() {
      this.$nice.modal("delete-prompt", true);
    },
    confirmDelete() {
      this.$nice.modal("delete-prompt", false);
      this.$emit("delete");
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
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
