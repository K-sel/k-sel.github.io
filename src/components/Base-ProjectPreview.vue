<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import { getProjectBySlug } from "@/utils/store.js";

const { slug } = defineProps({ slug: String });
const project = computed(() => getProjectBySlug(slug));

const isHovered = ref(false);

function getContrastColor(hexColor) {
  const c = hexColor.charAt(0) === "#" ? hexColor.substring(1) : hexColor;
  const r = parseInt(c.substr(0, 2), 16);
  const g = parseInt(c.substr(2, 2), 16);
  const b = parseInt(c.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 125 ? "text-black" : "text-white";
}

const contrastClass = computed(() =>
  getContrastColor(project.value.meta.color)
);
</script>
<template>
  <RouterLink :to="`projects/${project.slug}`">
    <div
      class="flex flex-col rounded-2xl p-4 transition-colors duration-300 justify-between min-h-[500px]"
      :class="{
        'bg-[var(--box-bg-default)]': true,
        'hover:bg-[var(--hover-color)]': true,
      }"
      :style="{ '--hover-color': project.meta.color }"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <div class="flex flex-row justify-between">
        <p class="meta" :class="{ [contrastClass]: isHovered }">
          {{ project.meta.title }}
        </p>
        <p class="meta" :class="{ [contrastClass]: isHovered }">
          {{ project.meta.category }}
        </p>
      </div>

      <div class="flex w-full">
        <h2
          v-if="project.meta?.cover_text"
          class="w-full text-center text-5xl"
          :class="{ [contrastClass]: isHovered }"
        >
          {{ project.meta.cover_text }}
        </h2>

        <img loading="lazy"
          v-else
          class="w-full h-[400px] object-contain rounded-2xl"
          :src="project.meta.cover"
          alt="screenshot de l'interface d'accueil de mon application lightshelf"
        />
      </div>

      <div class="flex flex-row justify-between">
        <p class="meta" :class="{ [contrastClass]: isHovered }">
          {{ project.meta.technologies }}
        </p>
        <p class="meta" :class="{ [contrastClass]: isHovered }">
          {{ project.meta.date }}
        </p>
      </div>

    </div>
  </RouterLink>
</template>
