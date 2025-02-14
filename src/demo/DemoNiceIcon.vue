<script setup>
import { onMounted, ref } from 'vue'

const icons = ref([]);
const selectedIcon = ref('icon-check');

onMounted(() => {
  icons.value = Array.from(document.getElementsByTagName('symbol')).map((element) => element.id);
  selectedIcon.value = icons.value[Math.floor(Math.random() * icons.value.length)];
})
</script>

<template>
  <NiceView title="Nice icon">
    <!-- Nice icon -->
    <NiceWrapper>
      <div class="text-center">
        <NiceIcon :icon="selectedIcon" />
        <pre class="mb-4">&lt;NiceIcon icon="{{ selectedIcon }}" /></pre>
      </div>

      <div class="icons">
        <NiceButton 
          v-for="icon in icons"
          :key="icon" 
          :icon="icon" 
          :class="{ active: selectedIcon == icon }" 
          @click="selectedIcon = icon"
          type="dark" 
          plain 
        />
      </div>
    </NiceWrapper>
  </NiceView>
</template>