<script setup>
import { onMounted, inject, ref, nextTick, watch } from "vue";
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

const props = defineProps({
  meta: Object,
});

const container = ref(null)
const title = ref(null)
const fontSize = ref(100) // taille initiale max en px

const adjustFontSize = () => {
  if (!container.value || !title.value) return

  const containerWidth = container.value.clientWidth
  let currentFont = 100
  title.value.style.fontSize = currentFont + 'px'

  // Réduire la taille jusqu'à ce que le texte tienne
  while (title.value.scrollWidth > containerWidth && currentFont > 10) {
    currentFont -= 1
    title.value.style.fontSize = currentFont + 'px'
  }

  fontSize.value = currentFont
}

onMounted(() => {
  nextTick(adjustFontSize)
  window.addEventListener('resize', adjustFontSize)
})

watch(() => props.meta.title, () => {
  nextTick(adjustFontSize)
})
</script>

<template>
  <section
    ref="heroRef"
    class="box flex flex-col h-[90dvh] md:h-[80dvh] w-full justify-between"
  >
    <div class="flex flex-row h-fit w-full">
      <img
        loading="lazy"
        class="back cursor-pointer"
        @click="handleBack"
        :src="theme == 'dark' ? '/svg/back-white.svg' : '/svg/back-black.svg'"
        alt="Bouton de retour"
      />
    </div>

     <div ref="container" class="flex justify-center items-center w-full">
    <h1
      ref="title"
      class="text-center leading-tight whitespace-nowrap"
      :style="{ fontSize: fontSize + 'px' }"
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
