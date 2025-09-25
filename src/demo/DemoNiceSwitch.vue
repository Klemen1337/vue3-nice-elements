<script setup>
import { ref } from 'vue'
const isDisabled = ref(false);

function toggleDisabled() {
  isDisabled.value = !isDisabled.value
}

const form = ref({
  niceSwitch: null
})
</script>

<template>
  <NiceView title="Nice switch">
    <NiceWrapper>
      <NiceSwitch title="I like pizza" v-model="form.niceSwitch" :disabled="isDisabled" isInline />
      <NiceSwitch title="I like pizza" v-model="form.niceSwitch" :disabled="isDisabled" />
      <NiceSwitch title="I like pizza" v-model="form.niceSwitch" :disabled="isDisabled" titleLeft />
      
      <pre class="mt-4">&lt;NiceSwitch 
  title="I like pizza" 
  v-model="form.niceSwitch" 
  :disabled="isDisabled" 
  titleLeft 
  isInline 
/></pre>

      <pre class="mt-2 mb-2">{{ form }}</pre>
      <NiceButton @click="toggleDisabled">Toggle disabled</NiceButton>
    </NiceWrapper>
  </NiceView>
</template>