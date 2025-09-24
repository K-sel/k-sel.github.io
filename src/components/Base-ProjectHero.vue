<script setup>
import { onMounted, inject, ref } from "vue";
import { useRouter } from "vue-router";
import gsap from "gsap";

const theme = inject("theme");
const router = useRouter();

function handleBack() {
  if (window.history.state?.back) {
    router.back();
  } else {
    router.push("/");
  }
}

const heroRef = ref(null);

onMounted(() => {
  if (!heroRef.value) return;
  gsap.set(heroRef.value, {
    y: 80,
    opacity: 0,
    rotationX: 6, // démarrer incliné (donne profondeur)
    transformOrigin: "center center",
    willChange: "transform, opacity",
  });
  gsap.to(heroRef.value, {
    y: 0,
    opacity: 1,
    rotationX: 0,
    duration: 1,
    ease: "power3.out",
     transformPerspective: 800,
  });
   gsap.to(".back", { rotation: 360, duration: 1 });
});

defineProps({
  meta: Object,
});

</script>

<template>
  <section ref="heroRef" class="box flex flex-col h-[80dvh] w-full justify-between">
    <div class="flex flex-row h-fit w-full">
      <img loading="lazy"
        class="back cursor-pointer"
        @click="handleBack"
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
