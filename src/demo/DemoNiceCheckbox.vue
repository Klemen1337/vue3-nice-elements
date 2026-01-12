<script setup>
import { ref } from 'vue'
const isDisabled = ref(false);
const isIndeterminate = ref(false);

const testForm = ref({
  checkbox: null
})
</script>

<template>
  <NiceView title="Nice checkbox">
    <NiceWrapper>
      <NiceCheckbox 
        title="Checkbox" 
        description="This is a short description" 
        v-model="testForm.checkbox" 
        :indeterminate="isIndeterminate" 
        :disabled="isDisabled"
      />
      <NiceCheckbox 
        title="Checkbox" 
        description="This is a short description" 
        v-model="testForm.checkbox" 
        :indeterminate="isIndeterminate" 
        :disabled="isDisabled"
      />

      <pre class="mb-2">{{ testForm }}</pre>
      <pre class="mb-2">
&lt;NiceCheckbox 
  title="Checkbox" 
  description="This is a short description" 
  v-model="testForm.checkbox" 
  :indeterminate="isIndeterminate" 
  :disabled="isDisabled"
/></pre>

      <NiceSwitch title="Disabled" v-model="isDisabled"></NiceSwitch>
      <NiceSwitch title="Indeterminate" v-model="isIndeterminate"></NiceSwitch>
    </NiceWrapper>

  </NiceView>
</template>