<script setup>
import { computed, inject } from "vue";
import { useRoute } from "vue-router";
import aboutData from "../contents/about.json";

const night = inject("night");
const color = computed(() => (night ? "white" : "black"));

const route = useRoute().path;
</script>

<template>
  <div class="box h-fit flex flex-col justify-between">
    <div class="flex">
      <p class="uppercase text-xs">A propos de moi</p>
    </div>
    <div class="flex py-12 md:p-12 lg:p-24">
      <p class="text-2xl md:text-3xl lg:text-4xl">{{ aboutData.hero }}</p>
    </div>

    <div class="flex justify-end">
      <router-link
        v-if="route == '/'"
        to="./about"
        class="flex flex-row gap-1 w-fit border-b-2 border-current pb-0.5"
      >
        <p>En savoir plus à propos de moi</p>
        <span
          ><svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17.4351L17 7.43506"
              :stroke="color"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 17.4351V7.43506H7"
              :stroke="color"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
