<script setup lang="ts">
/* =======================
   Komponenten
   ======================= */
import ProfileHeader from "./components/ProfileHeader.vue";
import PersonalData from "./components/PersonalData.vue";
import EducationList from "./components/EducationList.vue";
import ExperienceList from "./components/ExperienceList.vue";
import GitHubProjects from "./components/GitHubProjects.vue";

/* =======================
   TypeScript-Typen
   ======================= */
import type { Education, Experience } from "./types/CvTypes";

/* =======================
   Bildungsweg
   ======================= */
const education: Education[] = [
  {
    period: "03/2024 – heute",
    institution: "Hochschule Esslingen",
    description: "IT-Sicherheit (B. Eng.)",
  },
  {
    period: "09/2020 – 07/2023",
    institution: "Werner-Siemens-Schule TG, Stuttgart",
    description: "Elektro- und Informationstechnik (Hochschulreife)",
  },
  {
    period: "03/2017 – 07/2020",
    institution: "Jahn-Realschule, Stuttgart",
    description: "Mittlere Reife",
  },
];

/* =======================
   Praxis & Erfahrung
   ======================= */
const experience: Experience[] = [
  {
    period: "10/2024 – 02/2025",
    title: "Studienprojekt: IP-Range-Analyse",
    company: "Hochschule Esslingen",
    tasks: [
      "Analyse von IP-Ranges",
      "Bewertung von Sicherheitslücken",
      "Präsentation von Ergebnissen",
    ],
  },
  {
    period: "08/2023 – 09/2023",
    title: "Ferienarbeit: Gabelstaplerfahrer",
    company: "Mercedes-Benz Stuttgart",
    tasks: [
      "Transport und Lagerung von Waren",
      "Einhaltung von Sicherheitsvorschriften",
    ],
  },
  {
    period: "08/2022 – 09/2022",
    title: "Ferienarbeit: Produktionsmitarbeiter",
    company: "Mercedes-Benz Stuttgart",
    tasks: [
      "Unterstützung im Team",
      "Selbstständige Durchführung einfacher Tätigkeiten",
    ],
  },
];
</script>

<template>
  <!-- Header -->
  <ProfileHeader name="Rasul Farmanullah" />

  <!-- Hauptlayout -->
  <main class="wrapper">
    <!-- Linke Spalte -->
    <PersonalData />

    <!-- Rechte Spalte -->
    <div class="content">
      <EducationList :items="education" />
      <ExperienceList :items="experience" />
      <GitHubProjects />
    </div>
  </main>
</template>

<style>
.wrapper {
  display: flex;
  gap: 15px;
  padding: 15px;
  color: #222;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Responsive wie im Labor 1 */
@media (max-width: 800px) {
  .wrapper {
    flex-direction: column;
  }
}
</style>
