<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { getProjectBySlug } from "@/utils/store.js";

const { slug } = defineProps({ slug: String });
const project = computed(() => getProjectBySlug(slug));

function getContrastColor(hexColor) {
  const c = hexColor.charAt(0) === '#' ? hexColor.substring(1) : hexColor;
  const r = parseInt(c.substr(0,2),16);
  const g = parseInt(c.substr(2,2),16);
  const b = parseInt(c.substr(4,2),16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 125 ? 'text-black' : 'text-white';
}

const contrastClass = computed(() => getContrastColor(project.value.meta.color));
</script>

<template>
  <RouterLink :to="`project/${project.slug}`">
    <div
      class="rounded-2xl p-4 transition-colors duration-300"
      :class="{
        'bg-[var(--box-bg-default)]': true,
        'hover:bg-[var(--hover-color)]': true
      }"
      :style="{ '--hover-color': project.meta.color }"
    >
      <div class="flex flex-row justify-between">
        <p :class="['meta', contrastClass]">{{ project.meta.title }}</p>
        <p :class="['meta', contrastClass]">{{ project.meta.category }}</p>
      </div>
      <div class="flex py-6 w-full h-full">
        <img
          class="w-full h-[400px] object-contain rounded-2xl"
          :src="project.meta.cover"
          alt="screenshot de l'interface d'accueil de mon application lightshelf"
        />
      </div>
      <div class="flex flex-row justify-between">
        <p :class="['meta', contrastClass]">{{ project.meta.technologies }}</p>
        <p :class="['meta', contrastClass]">{{ project.meta.date }}</p>
      </div>
    </div>
  </RouterLink>
</template>
