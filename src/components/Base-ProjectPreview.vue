<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import {  getProjectBySlug } from "../utils/store.js";

const { slug } = defineProps({ slug: String });
const project = computed(() => getProjectBySlug(slug));
</script>

<template>
  <RouterLink :to="`project/${project.slug}`">
    <div class="bg-[var(--box-bg-default)] rounded-2xl p-4">
      <div class="flex flex-row justify-between">
        <p class="meta">{{ project.meta.title }}</p>
        <p class="meta">{{ project.meta.category }}</p>
      </div>
      <div class="flex py-6 w-full h-full">
        <img
          class="w-full h-[400px] object-contain rounded-2xl"
          :src="project.images.cover"
          alt="screenshot de l'interface d'accueil de mon application lightshelf"
        />
      </div>
      <div class="flex flex-row justify-between">
        <p class="meta">{{ project.meta.technologies }}</p>
        <p class="meta">{{ project.meta.date }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped></style>
