<script setup>
defineProps({
  clock: {
    type: String,
    default: "00:00:00",
  },
  night: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="box h-[70dvh] flex flex-col justify-between">
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
      <div class="flex flex-col max-w-full md:max-w-[38rem]">
        <h2 class="text-2xl md:text-3xl lg:text-4xl">
          Je transforme mes idées en réalités, un projet à la fois.
        </h2>
      </div>

      <div class="flex flex-row justify-between">
        <div class="flex flex-row gap-1.5 md:gap-4 items-center">
          <div class="flex flex-row items-center gap-1.5">
            <img
              v-if="night"
              src="../assets/svg/dot-red.svg"
              alt="dot"
              class="dot w-4 h-4"
            />
            <img
              v-else
              src="../assets/svg/dot-green.svg"
              alt="dot"
              class="dot w-4 h-4"
            />
            <p v-if="night" class="hidden md:block text-lg">
              Closed for the night
            </p>
            <p v-else class="hidden md:block text-lg">Open for work</p>
          </div>
          <p class="text-lg">UTC+1 ZH {{ clock }}</p>
        </div>
        <div class="flex md:hidden flex-row gap-3">
          <a class="link" href="https://github.com/K-sel">Github</a>
          <a class="link" href="https://www.linkedin.com/in/jonathanpnrd/"
            >LinkedIn</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
