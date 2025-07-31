<script setup>
</script>

<template>
  <NiceView title="Nice loading">
    <NiceWrapper>
        <NiceLoading />
        <NiceLoading message="This is a custom message" size="large" />
        <NiceLoading message="This is a custom message" size="small" />
        <NiceLoading message="This is a custom message" size="mini" :fullDiv="false" />

        <pre class="mt-4">&lt;NiceLoading message="This is a custom message" size="large" :fullDiv="false" /></pre>
    </NiceWrapper>
  </NiceView>
</template>