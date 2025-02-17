<script setup>
import { ref } from 'vue';

const model = ref({
  from: null,
  to: null,
  fromTwo: null,
  toTwo: null
})

function onChange (data) {
  console.log("[NICE DATE RANGE] Change:", data, model)
}
</script>

<template>
  <NiceView title="Nice date range">
    <NiceWrapper>
      <NiceDateRange title="Date range" v-model:from="model.from" v-model:to="model.to" :time="false" @change="onChange" />
      <NiceDateRange title="Date range time" v-model:from="model.fromTwo" v-model:to="model.toTwo" :time="true" @change="onChange" />

      <pre>{{ model }}</pre>
    </NiceWrapper>
  </NiceView>
</template>

<style lang="scss">
</style>