<script setup>
import { inject } from "vue";
import { getAllProjectsSlug } from "../utils/store.js";

const projects = getAllProjectsSlug();
console.log(projects);

import Hero from "../components/TheHero.vue";
import ProjectPreview from "../components/Base-ProjectPreview.vue";
import TheFooter from "../components/TheFooter.vue";
import About from "../components/Base-TextContainer.vue";

const night = inject("night");
const clock = inject("clock");
</script>

<template>
  <main class="m-3 md:m-6 lg:m-24 max-w-dvw flex flex-col gap-3">
    <Hero :clock="clock" :night="night" />
    <section class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      <ProjectPreview
        v-for="(slug, index) in projects"
        :key="index"
        :slug="slug"
      />
    </section>
    <About :night="night" />
    <TheFooter></TheFooter>
  </main>
</template>

<style scoped></style>
