<script setup>
import { ref } from 'vue'
const isDisabled = ref(false);
const loading = ref(false);

function toggleDisabled() {
  isDisabled.value = !isDisabled.value
}

function toggleLoading() {
  loading.value = !loading.value
}

const testForm = ref({
  niceUpload1: null,
  niceUpload2: "https://olaii-guestlist.s3.amazonaws.com/public/100x200-scaled-1_whesRoi.jpg",
})
</script>

<template>
  <NiceView title="Nice upload">
    <NiceWrapper>
      <NiceUpload title="Checkbox" v-model="testForm.niceUpload1" :disabled="isDisabled" :loading="loading" />
      <NiceUpload title="Checkbox" v-model="testForm.niceUpload2" :disabled="isDisabled" :loading="loading" />
      <pre>{{ testForm }}</pre>

      <NiceButton @click="toggleDisabled">Toggle disabled</NiceButton>
      <NiceButton @click="toggleLoading">Toggle loading</NiceButton>
    </NiceWrapper>
  </NiceView>
</template>