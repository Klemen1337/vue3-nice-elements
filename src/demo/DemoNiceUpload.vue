<script setup>
import { ref } from 'vue'
const isDisabled = ref(false);
const isRequired = ref(false);
const loading = ref(false);

const testForm = ref({
  niceUpload1: null,
  niceUpload2: "https://olaii-guestlist.s3.amazonaws.com/public/100x200-scaled-1_whesRoi.jpg",
})
</script>

<template>
  <NiceView title="Nice upload">
    <NiceWrapper>
      <form class="mb-3">
        <NiceUpload title="Nice upload" v-model="testForm.niceUpload2" :disabled="isDisabled" :loading="loading" :required="isRequired" />
        <NiceUpload title="Nice upload" v-model="testForm.niceUpload1" :disabled="isDisabled" :loading="loading" :required="isRequired" />
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

      <pre class="mb-3">{{ testForm }}</pre>

      <div class="d-flex gap-3 flex-wrap">
        <NiceSwitch title="Toggle required" v-model="isRequired" />
        <NiceSwitch title="Toggle disabled" v-model="isDisabled" />
        <NiceSwitch title="Toggle loading"  v-model="loading" />
      </div>
    </NiceWrapper>
  </NiceView>
</template>