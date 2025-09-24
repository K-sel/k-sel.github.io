<script setup>
import { onMounted, inject } from "vue";
import { gsap } from "@/libs/gsap/esm/all.js";
import { useRouter } from "vue-router";

const router = useRouter();

const theme = inject("theme");

defineProps({
  meta: Object,
});

onMounted(() => {
  gsap.to(".back", { rotation: 360, duration: 1 });
});

</script>

<template>
  <section class="box flex flex-col h-[80dvh] w-full justify-between">
    <div class="flex flex-row h-fit w-full">
      <img
        class="back"
        @click="router.back() ? router.back() :  '/'"
        :src="theme == 'dark' ? '/svg/back-white.svg' : '/svg/back-black.svg'"
        alt="Bouton de retour"
      />
    </div>

    <div class="flex justify-center items-center">
      <h1
        class="w-full break-words text-center leading-tight"
        style="font-size: clamp(6rem, 8vw, 10rem)"
      >
        {{ meta.title }}
      </h1>
    </div>

    <div class="flex flex-row gap-8">
      <div>
        <p class="taxonomy">Date</p>
        <p class="taxonomy">Category</p>
        <p class="taxonomy">Technologies</p>
      </div>
      <div>
        <p class="taxonomy">{{ meta.date }}</p>
        <p class="taxonomy">{{ meta.category }}</p>
        <p class="taxonomy">{{ meta.technologies }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
