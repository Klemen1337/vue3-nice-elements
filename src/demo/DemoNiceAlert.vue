<script setup>
import { onMounted, ref } from 'vue'
const types = [
  "primary",
  "default",
  "success",
  "warning",
  "danger",
  "info",
]

const form = ref({
  title: "Lorem ipsum",
  message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam mollis justo. Integer vel dolor egestas velit commodo interdum et et ante. Praesent vel pellentesque neque, aliquet posuere mauris. Praesent aliquam, ipsum ut sagittis egestas, dolor libero efficitur tortor, in fermentum elit nisi quis metus. Suspendisse potenti. Integer porta augue sodales, consectetur enim in, condimentum urna. Quisque felis lorem, tincidunt vel libero id, consequat sollicitudin lacus. Proin ut nunc sit amet lectus finibus eleifend in nec lectus. Suspendisse potenti. Proin vel odio efficitur, ullamcorper neque et, hendrerit turpis. Nulla quis magna turpis. Sed eget velit et lacus condimentum convallis.",
  icon: "icon-feather",
  inline: true
})

const icons = ref([]);
onMounted(() => {
  icons.value = Array.from(document.getElementsByTagName('symbol')).map((element) => ({ id: element.id, value: element.id }));
})
</script>

<template>
  <NiceView title="Nice alert">
    <NiceWrapper>
      <div class="alerts-grid">
        <NiceAlert :title="form.title" :message="form.message" :icon="form.icon" :inline="form.inline" :alignCenter="form.alignCenter" :type="type" v-for="type in types" :key="type" />
      </div>

      <div class="d-flex f-wrap gap-3 mt-4">
        <NiceInput title="Title" v-model="form.title" />
        <NiceTextarea title="Message" v-model="form.message" />
        <!-- <NiceInput title="Icon" v-model="form.icon" /> -->
        <NiceDropdown title="Icon" v-model="form.icon" :values="icons" keyOnly>
          <template #selected-option="{ item }">
            <div class="d-flex gap-2">
              <NiceIcon :icon="item.id" :size="20"></NiceIcon>
              <span>{{ item.value }}</span>
            </div>
          </template>
          
          <template #option="{ item }">
            <div class="d-flex gap-2">
              <NiceIcon :icon="item.id" :size="20"></NiceIcon>
              <span>{{ item.value }}</span>
            </div>
          </template>
        </NiceDropdown>
        <NiceSwitch title="Inline" v-model="form.inline" isInline />
        <NiceSwitch title="Align center" v-model="form.alignCenter" isInline />
      </div>
    </NiceWrapper>
  </NiceView>
</template>

<style lang="scss" scoped>
.alerts-grid {
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
}
</style>