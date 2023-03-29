<template>
  <div class="nice-actions">
    <!-- Delete -->
    <NiceButton
      v-if="showDelete"
      plain
      type="danger"
      class="mr-2"
      @click="askToDelete"
      :text="$gettext('Delete')"
      :form="form"
      :disabled="loading"
    />
    <div class="flex-grow"></div>
    <!-- Cancel -->
    <NiceButton
      plain
      type="default"
      class="mr-2"
      @click="cancel"
      :text="$gettext('Cancel')"
      :form="form"
      :disabled="loading"
    />
    <!-- Submit -->
    <NiceButton
      native-type="submit"
      @click="submit"
      :text="$gettext('Submit')"
      :form="form"
      :disabled="loading"
    />
  </div>

  <NiceConfirmModal
    name="delete-prompt"
    @confirm="confirmDelete"
    @cancel="cancel"
    :title="$gettext('Delete')"
    :subtitle="$gettext('Are you sure you want to delete?')"
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
  width: 100%;
}
</style>
