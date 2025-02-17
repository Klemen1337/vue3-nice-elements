<script setup>
import { ref } from 'vue'
const isDisabled = ref(false);
const loading = ref(false);

function toggleDisabled() {
  isDisabled.value = !isDisabled.value
}

function save () {
  console.log(testForm.value)
}

function formatCurrency (amount) {
  const numberFormat = new Intl.NumberFormat("sl-SI", {
    style: "currency",
    currency: "EUR",
  })
  const value = numberFormat.format(amount);
  return value;
}

const testForm = ref({
  name: "",
  email: "",
  comment: "",
  price: 10,
})
</script>

<template>
  <NiceView title="Nice input" isForm @submit.prevent="save('submit')">
    <NiceWrapper>
        <NiceInput title="Name" placeholder="Janez Novak" v-model="testForm.name" :disabled="isDisabled" autocomplete="name" required />
        <NiceInput title="Email" placeholder="info@olaii.com" type="email" v-model="testForm.email" autocomplete="email" :disabled="isDisabled" appendText="@" />
        <NiceInput title="Price" v-model="testForm.price" :disabled="isDisabled" :formatter="formatCurrency" :min="0" required />

      <pre>{{ testForm }}</pre>
    </NiceWrapper>

    <template #footer>
        <NiceActions></NiceActions>
      </template>
  </NiceView>
</template>