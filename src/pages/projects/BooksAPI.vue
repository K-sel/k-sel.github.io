<script setup>
import { inject } from "vue";
import { useRoute } from "vue-router";
import { getProjectBySlug } from "@/utils/store";

import ProjectHero from "@/components/Base-ProjectHero.vue";
import TextContainer from "@/components/Base-TextContainer.vue";

const route = useRoute().path;
const night = inject("night");
const project = getProjectBySlug(route.split("/")[2]);

project.images = Object.values(project.images);

console.log(project);

</script>

<template>
  <main class="m-3 md:m-6 lg:m-24 max-w-dvw flex flex-col gap-3">
    <ProjectHero :night="night" :meta="project.meta"/>
    <TextContainer :text="project.texts.bloc1.content" :title="project.texts.bloc1.title"/>
  </main>
</template>

<style scoped></style>
