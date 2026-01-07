<script setup lang="ts">
import { ref } from "vue";
import type { Experience } from "../types/CvTypes";

defineProps<{
  items: Experience[];
}>();

const openIndex = ref<number | null>(null);

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index;
}
</script>

<template>
  <section class="box">
    <h2>Praxis & Erfahrung</h2>

    <div v-for="(exp, index) in items" :key="index" class="entry">
      <strong>{{ exp.period }}</strong>
      <p>{{ exp.title }}</p>
      <p v-if="exp.company">{{ exp.company }}</p>

      <button @click="toggle(index)">
        {{ openIndex === index ? "Aufgaben ausblenden" : "Aufgaben anzeigen" }}
      </button>

      <ul v-if="openIndex === index">
        <li v-for="(task, i) in exp.tasks" :key="i">
          {{ task }}
        </li>
      </ul>
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
  margin-bottom: 15px;
}

button {
  background: #004b8d;
  color: white;
  border: none;
  padding: 5px 8px;
  cursor: pointer;
}
</style>
