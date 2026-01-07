<script setup lang="ts">
import { ref, onMounted } from "vue";

/* einfacher Typ für GitHub-Repos */
interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
}

const repos = ref<Repo[]>([]);
const loading = ref(true);
const error = ref("");

onMounted(async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/Farman1608/repos"
    );

    if (!response.ok) {
      throw new Error("API-Fehler");
    }

    repos.value = await response.json();
  } catch  {
    error.value = "GitHub-Daten konnten nicht geladen werden.";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <section class="box">
    <h2>GitHub Projekte</h2>

    <p v-if="loading">Lade Projekte…</p>
    <p v-if="error" class="error">{{ error }}</p>

    <ul v-if="!loading && !error">
      <li v-for="repo in repos" :key="repo.id">
        <a :href="repo.html_url" target="_blank">
          {{ repo.name }}
        </a>
        <p class="desc" v-if="repo.description">
          {{ repo.description }}
        </p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.box {
  background: #fff;
  border: 1px solid #ccc;
  padding: 12px;
}

ul {
  padding-left: 18px;
}

li {
  margin-bottom: 10px;
}

a {
  font-weight: bold;
  color: #004b8d;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.desc {
  font-size: 0.9rem;
  color: #555;
}

.error {
  color: red;
}
</style>
