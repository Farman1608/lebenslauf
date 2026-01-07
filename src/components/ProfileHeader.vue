<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <header class="header">
    <h1>Lebenslauf</h1>
    <p class="name">{{ name }}</p>
  </header>
</template>

<style scoped>
.header {
  background: #004b8d;
  color: white;
  padding: 15px;
  text-align: center;
}

.name {
  font-size: 1.1rem;
}
</style>
