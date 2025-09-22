<script setup>
import { inject } from "vue";
import BaseProjectHero from "../components/Base-ProjectHero.vue";
import { useRoute } from "vue-router";
import { getProjectBySlug } from "../utils/store";

const route = useRoute().path;
const night = inject("night");
const project = getProjectBySlug(route.split("/")[2]);



</script>

<template>
  <main class="m-3 md:m-6 lg:m-24 max-w-dvw flex flex-col gap-3">
    <BaseProjectHero :night="night" :meta="project.meta"/>
  </main>
</template>

<style scoped></style>
