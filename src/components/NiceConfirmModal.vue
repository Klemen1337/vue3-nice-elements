<template>
  <NiceModal
    :name="name"
    :title="$gettext('Delete')"
    :subtitle="$gettext('Are you sure you want to delete?')"
    @close="cancel"
  >
    <div class="text-right">
      <!-- Cancel -->
      <NiceButton
        :text="$gettext('Cancel')"
        @click="cancel"
        type="default"
        plain
        icon="icon-x"
      />

      <!-- Confirm -->
      <NiceButton
        :text="$gettext('Confirm')"
        @click="confirm"
        icon="icon-check"
      />
    </div>
  </NiceModal>
</template>

<script>
import NiceButton from "./NiceButton.vue";
import NiceModal from "./NiceModal.vue";

export default {
  name: "NiceConfirmModal",
  
  components: {
    NiceButton,
    NiceModal,
  },

  props: {
    name: {
      type: String,
      default: "confirm-prompt",
    },
  },

  emits: ["cancel", "confirm"],

  methods: {
    cancel() {
      this.$nice.modal(this.name, false);
      this.$emit("cancel");
    },

    confirm() {
      this.$emit("confirm");
    },
  },
};
</script>
