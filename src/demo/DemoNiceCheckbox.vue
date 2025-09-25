<script setup>
import { ref } from 'vue'
const isDisabled = ref(false);
const loading = ref(false);

function toggleDisabled() {
  isDisabled.value = !isDisabled.value
}

const testForm = ref({
  checkbox: null
})
</script>

<template>
  <NiceView title="Nice checkbox">
    <NiceWrapper>
      <NiceCheckbox title="Checkbox" v-model="testForm.checkbox" :disabled="isDisabled" />
      
      <pre class="mb-2">{{ testForm }}</pre>
      <NiceButton @click="toggleDisabled">Toggle disabled</NiceButton>
    </NiceWrapper>

  </NiceView>
</template>