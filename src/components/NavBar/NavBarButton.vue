<script setup>
import { RouterLink, useRoute } from "vue-router";
import { defineProps } from "vue";

const isActiveLink = (routePath) => {
  const route = useRoute();

  return route.path === routePath;
};

defineProps({
  path: String,
  content: String,
});
</script>

<template>
  <RouterLink
    :to="path"
    :class="[
      isActiveLink(path)
        ? 'bg-amber-900'
        : 'hover:bg-amber-600 hover:text-white',
      'text-white font-bold',
      'px-3 py-2',
      'rounded-md',
    ]"
    >{{ content }}</RouterLink
  >
</template>
