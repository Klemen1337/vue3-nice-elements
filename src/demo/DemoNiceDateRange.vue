<script setup>
import { ref } from 'vue';

const model = ref({
  date: null,
  dateInline: null,
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
      <NiceDate title="Date date" v-model="model.date" :time="false" @change="onChange" />
      <NiceDate title="Date date inline" v-model="model.dateInline" :time="false" isInline @change="onChange" />
      <NiceDateRange title="Date range" v-model:from="model.from" v-model:to="model.to" :time="false" @change="onChange" />
      <NiceDateRange title="Date range time" v-model:from="model.fromTwo" v-model:to="model.toTwo" :time="true" @change="onChange" />

      <pre>{{ model }}</pre>
    </NiceWrapper>
  </NiceView>
</template>

<style lang="scss">
</style>