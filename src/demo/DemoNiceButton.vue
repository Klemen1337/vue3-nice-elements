<script setup>
import { ref } from 'vue'

const types = ['primary', 'default', 'success', 'warning', 'danger', 'info', 'dark', 'white']
const selectedIcon = ref('icon-check');
const isDisabled = ref(false);
const loading = ref(false);

function toggleDisabled() {
  isDisabled.value = !isDisabled.value
}
</script>

<template>
  <NiceView title="Nice button">
    <NiceWrapper>
      <div class="mb-4">
        <NiceButton @click="toggleDisabled">Toggle disabled</NiceButton>
        <NiceButton @click="loading = !loading">Toggle loading</NiceButton>

      </div>

      
      <pre class="mb-4">
&lt;NiceButton 
  :disabled="false" 
  :loading="false" 
  icon="icon-circle"
  plain
  naked
  outline
  rounded
  appendIcon
  text
  addClass
  type="primary" 
  size="large"
>Text&lt;/NiceButton></pre>

      <div class="buttons">
        <div class="buttons-wrap" v-for="t in types" :key="t">
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" size="large">{{ t }} large</NiceButton>
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t">{{ t }} medium</NiceButton>
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" size="small">{{ t }} small</NiceButton>
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" size="mini">{{ t }} mini</NiceButton>
        </div>
        
        <div class="buttons-wrap" v-for="t in types" :key="t">
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" size="large"></NiceButton>
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t"></NiceButton>
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" size="small"></NiceButton>
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" size="mini"></NiceButton>
        </div>

        <div class="buttons-wrap" v-for="t in types" :key="t">
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" plain size="large">
            {{ t }} large plain
          </NiceButton>
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" plain>{{ t }} medium plain</NiceButton>
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" plain size="small">
            {{ t }} small plain
          </NiceButton>
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" plain size="mini">
            {{ t }} small mini
          </NiceButton>
        </div>

        <div class="buttons-wrap" v-for="t in types" :key="t">
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" naked size="large">
            {{ t }} large naked
          </NiceButton>
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" naked>{{ t }} medium naked</NiceButton>
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" naked size="small">
            {{ t }} small naked
          </NiceButton>
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" naked size="mini">
            {{ t }} mini naked
          </NiceButton>
        </div>

        <div class="buttons-wrap" v-for="t in types" :key="t">
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" rounded size="large">
            {{ t }} large rounded
          </NiceButton>
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" rounded>{{ t }} medium rounded</NiceButton>
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" rounded size="small">
            {{ t }} small rounded
          </NiceButton>
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" rounded size="mini">
            {{ t }} mini rounded
          </NiceButton>
        </div>

        <div class="buttons-wrap" v-for="t in types" :key="t">
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" outline size="large">
            {{ t }} large outline
          </NiceButton>
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" outline>{{ t }} medium outline</NiceButton>
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" outline size="small">
            {{ t }} small outline
          </NiceButton>
          <NiceButton :disabled="isDisabled" :icon="selectedIcon" :loading="loading" :type="t" outline size="mini">
            {{ t }} mini outline
          </NiceButton>
        </div>
      </div>
    </NiceWrapper>
  </NiceView>
</template>