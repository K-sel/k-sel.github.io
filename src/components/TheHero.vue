<script setup>
import { inject } from "vue";

const night = inject("night");
const theme = inject("theme");
const toggleTheme = inject("toggleTheme");

console.log(theme.value);

const phrase = "Je transforme mes idées en réalités, un projet à la fois.";

defineProps({
  clock: {
    type: String,
    default: "00:00:00",
  },
});
</script>

<template>
  <div class="box h-[70dvh] flex flex-col justify-between px-6 py-4">
    <div class="flex flex-col gap-12 md:flex-row md:justify-between">
      <h1 class="text-2xl md:text-3xl lg:text-4xl">
        Jonathan Pinard
        <span v-if="night">😴</span>
        <span v-else>💻</span>
      </h1>

      <div class="flex flex-col gap-6">
        <a class="link" href="#">Projets</a>
        <a class="link" href="#">A propos</a>
        <a
          class="link"
          href="mailto:clarinette-86-elements@icloud.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </div>

      <div class="hidden md:flex flex-col gap-3">
        <a class="link" href="https://github.com/K-sel">Github</a>
        <a class="link" href="https://www.linkedin.com/in/jonathanpnrd/"
          >LinkedIn</a
        >
      </div>
    </div>

    <div
      class="flex flex-col lg:flex-row gap-6 lg:justify-between lg:items-end"
    >
      <div class="flex-1 min-w-0 max-w-full md:max-w-[38rem]">
        <h2 class="text-2xl md:text-3xl lg:text-4xl">{{ phrase }}</h2>
      </div>

      <div class="flex-shrink-0 flex items-center gap-2 align-middle">
        <div class="flex items-center gap-2 whitespace-nowrap">
          <img
            :src="night ? '/svg/dot-red.svg' : '/svg/dot-green.svg'"
            alt="dot"
            class="dot w-4 h-4 flex-shrink-0"
          />
          <p class="hidden md:block text-lg whitespace-nowrap">
            {{ night ? "Closed for the night" : "Open to work" }}
          </p>
          <div class="whitespace-nowrap">
            <p class="text-lg whitespace-nowrap">UTC+1 ZH {{ clock }}</p>
          </div>
        </div>

        <button
          @click="toggleTheme"
          class="flex items-center justify-center rounded-md focus:outline-none"
          aria-label="Toggle theme"
        >
          <img
            :src="
              (theme?.value ?? theme) === 'dark'
                ? '/svg/sun.svg'
                : '/svg/moon.svg'
            "
            alt="theme-toggle"
            class="w-5 h-5 flex-shrink-0"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
