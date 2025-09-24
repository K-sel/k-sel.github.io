<script setup>
import { inject } from "vue";
import { useRoute } from "vue-router";
import aboutData from "@/contents/about.json";

const props = defineProps({
  text: {
    type: String,
    required: false,
    default: aboutData.hero,
  },

  title: {
    type: String,
    required: false,
    default: "A propos de moi",
  },

  color: {
    type: String,
    required: false,
  },
});

const theme = inject("theme");
const route = useRoute().path;
</script>

<template>
  <div class="box h-fit flex flex-col justify-between">
    <div class="flex">
      <p class="uppercase text-xs">{{ props.title }}</p>
    </div>
    <div class="flex py-12 md:p-12 lg:p-24">
      <p class="text-2xl md:text-3xl lg:text-4xl" :style="{ '--custom-color': props.color }" v-html="props.text"></p>
    </div>

    <div v-if="route == '/'" class="flex justify-end">
      <router-link
        to="./about"
        class="flex flex-row gap-1 w-fit border-b-2 border-current pb-0.5"
      >
        <p>En savoir plus à propos de moi</p>
        <span>
          <img loading="lazy"
            :src="
              theme == 'dark' ? '/svg/arrow-white.svg' : '/svg/arrow-black.svg'
            "
            alt=""
          />
        </span>
      </router-link>
    </div>
    <div v-else class="flex justify-start">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8.79785" r="8" :fill="props.color" />
      </svg>
    </div>
  </div>
</template>

<style>
.colored {
  color: var(--custom-color);
}
</style>
