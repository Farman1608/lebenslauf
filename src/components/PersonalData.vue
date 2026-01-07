<script setup lang="ts">
import { ref } from "vue";

const showContact = ref(true);
</script>

<template>
  <aside class="side">
    <h2>Persönliche Daten</h2>

    <button @click="showContact = !showContact">
      {{ showContact ? "Kontakt ausblenden" : "Kontakt anzeigen" }}
    </button>

    <div v-if="showContact" class="kontakt">
      <p><strong>Adresse:</strong> Schmidener Str. 108, 70374 Stuttgart</p>
      <p><strong>Telefon:</strong> 01575 3672526</p>
      <p>
        <strong>E-Mail:</strong>
        <a href="mailto:farmanrasul02@gmail.com">
          farmanrasul02@gmail.com
        </a>
      </p>
      <p><strong>Geburtsdatum:</strong> 16.08.2002</p>
      <p><strong>Staatsangehörigkeit:</strong> deutsch</p>
    </div>
  </aside>
</template>

<style scoped>
.side {
  background: #fff;
  padding: 10px;
  border: 1px solid #ccc;
}

button {
  background: #004b8d;
  color: white;
  border: none;
  padding: 5px 8px;
  cursor: pointer;
  margin-bottom: 10px;
}
</style>
