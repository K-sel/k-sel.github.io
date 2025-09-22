<script setup>
import { provide, ref, computed, watch } from "vue";
import { RouterView } from "vue-router";

const date = ref(Date.now());

const clock = computed(() => {
  const now = new Date(date.value);
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const sec = String(now.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${sec}`;
});

const night = computed(() => {
  const now = new Date(date.value);
  const hours = now.getHours();
  return hours <= 6 || hours >= 22;
});

watch(
  night,
  (isNight) => {
    if (isNight) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
  { immediate: true }
);

setInterval(() => {
  date.value = Date.now();
}, 1000);

provide("night", night);
provide("clock", clock);

console.log(`
+------------------------------------------------------------------------------------------------+
|                                                                                                |
|  On a ici un expert,                                                                           |                                                                        
|                                                                                                |
|  Hésitez pas à me contacter si mon travail vous intéresse ou à aller faire                     |
|  un tour sur mon Github : https://github.com/k-sel                                             |
|                                                                                                |
|  Excellente journée !                                                                          |
|                                                                                                |
+------------------------------------------------------------------------------------------------+
`);
</script>

<template>
  <RouterView> </RouterView>
</template>

<style scoped></style>
