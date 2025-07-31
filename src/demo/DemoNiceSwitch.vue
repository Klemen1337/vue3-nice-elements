<script setup>
import { ref } from 'vue'
const isDisabled = ref(false);

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

      <pre class="mt-4">{{ form }}</pre>
    </NiceWrapper>
  </NiceView>
</template>