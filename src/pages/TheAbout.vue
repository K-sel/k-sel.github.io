<script setup>
import { inject, computed } from "vue";
import { useRoute } from "vue-router";
import TheHero from "../components/TheHero.vue";
import TheFooter from "@/components/TheFooter.vue";
import TextContainer from "../components/Base-TextContainer.vue";
import about from "@/contents/about.json";

const route = useRoute().path;
const isAbout = route.split("/")[1] === "about" ? true : false;

console.log(isAbout);

const night = inject("night");
const clock = inject("clock");
const aboutData = computed(() => about);
</script>

<template>
  <main class="m-3 md:m-6 lg:m-24 max-w-dvw flex flex-col gap-3">
    <TheHero :clock="clock" :isAbout="isAbout" :phrase="aboutData.education" />

    <TextContainer
      :text="about.texts.skills"
    ></TextContainer>

    <TextContainer
      :text="about.texts.hobbies"
    ></TextContainer>
    
    <TheFooter></TheFooter>
  </main>
</template>

<style scoped></style>
