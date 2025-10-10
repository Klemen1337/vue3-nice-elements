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

      <pre class="mb-3">{{ testForm }}</pre>

      <div class="d-flex gap-3 flex-wrap">
        <NiceSwitch title="Toggle disabled" v-model="isDisabled" />
        <NiceSwitch title="Toggle loading"  v-model="loading" />
      </div>
    </NiceWrapper>
  </NiceView>
</template>