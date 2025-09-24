<script setup>
import { inject, computed } from "vue";
import { useRoute } from "vue-router";
import { getProjectBySlug } from "@/utils/store";

import ProjectHero from "@/components/Base-ProjectHero.vue";
import TextContainer from "@/components/Base-TextContainer.vue";
import TheFooter from "@/components/TheFooter.vue";

const route = useRoute().path;
const night = inject("night");
const project = computed(() => getProjectBySlug(route.split("/")[2]));
const projectColor = project.value.meta.color;
</script>

<template>
  <main ref="mainRef" class="m-3 md:m-6 lg:m-24 max-w-dvw flex flex-col gap-3">
    <ProjectHero :night="night" :meta="project.meta" />
    <TextContainer
      :text="project.texts.bloc1.content"
      :title="project.texts.bloc1.title"
      :color="projectColor"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <img loading="lazy"
        class="w-full h-full object-contain rounded-2xl"
        :src="project.images.image1"
        alt=""
      />
      <img loading="lazy"
        class="w-full h-full object-contain rounded-2xl"
        :src="project.images.image2"
        alt=""
      />
    </div>

    <TextContainer
      :text="project.links.content"
      :title="project.links.title"
      :color="projectColor"
    />
    <TextContainer
      :text="project.texts.bloc2.content"
      :title="project.texts.bloc2.title"
      :color="projectColor"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <img loading="lazy"
        class="w-full h-full object-contain rounded-2xl"
        :src="project.images.image3"
        alt=""
      />
      <img loading="lazy"
        class="w-full h-full object-contain rounded-2xl"
        :src="project.images.image4"
        alt=""
      />
    </div>
    <TextContainer
      :text="project.texts.bloc3.content"
      :title="project.texts.bloc3.title"
      :color="projectColor"
    />

    <TheFooter></TheFooter>
  </main>
</template>

<style scoped></style>
