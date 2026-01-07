<script setup lang="ts">
import type { Education } from "../types/CvTypes";

defineProps<{
  items: Education[];
}>();
</script>

<template>
  <section class="box">
    <h2>Bildungsweg</h2>

    <div
      v-for="(edu, index) in items"
      :key="index"
      class="entry"
    >
      <strong>{{ edu.period }}</strong>
      <p>{{ edu.institution }}</p>
      <p class="desc">{{ edu.description }}</p>
    </div>
  </section>
</template>

<style scoped>
.box {
  background: #fff;
  border: 1px solid #ccc;
  padding: 12px;
}

.entry {
  margin-bottom: 12px;
}

.desc {
  color: #555;
  font-size: 0.95rem;
}
</style>
