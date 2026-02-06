<script setup>
  import { ref } from 'vue'
  const isDisabled = ref(false);
  const isRequired = ref(false);
  const loading = ref(false);

  const testForm = ref({
    niceDropdown1: null,
    niceDropdown2: null,
  })

  const list = [
    { id: 1, value: 'List 1', description: "This is a description for list 1", icon: "icon-square" },
    { id: 2, value: 'List 2', description: "This is a description for list 2", icon: "icon-square" },
    { id: 3, value: 'List 3', description: "This is a description for list 3", icon: "icon-square" },
    { id: 4, value: 'List 4', description: "This is a description for list 4", icon: "icon-square" },
    { id: 5, value: 'List 5', description: "This is a description for list 5", icon: "icon-square" }
  ]

  function formatValue (value) {
    return `
      <nice-icon icon="${value.icon}"></nice-icon>
      <div>${value.value}</div>
      <small>${value.description}</small>
    `;
  }
</script>

<template>
  <NiceView title="Nice dropdown">
    <NiceWrapper>
      <form class="mb-3">

        <NiceDropdown 
          title="Nice dropdown" 
          v-model="testForm.niceDropdown1" 
          :values="list" 
          :disabled="isDisabled" 
          :loading="loading" 
          :required="isRequired"
        />

        <NiceDropdown 
          title="Nice dropdown formatted" 
          v-model="testForm.niceDropdown2" 
          :values="list" 
          :disabled="isDisabled" 
          :loading="loading" 
          :required="isRequired"
          :formatFunction="formatValue"
        />
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