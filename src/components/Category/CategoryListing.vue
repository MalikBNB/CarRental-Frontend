<script setup>
import { defineProps } from "vue";
import { RouterLink } from 'vue-router';

defineProps({
  category: Object,
});
</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <!-- Category -->
      <div class="mb-6">
        <h3 class="text-xl font-bold">{{ category.categoryName }}</h3>
      </div>

      <!-- Description -->
      <div class="mb-5">
        <img src="https://placehold.co/400x250" alt="">
      </div>

      <RouterLink
        :to="'/vehicles/' + category.categoryName"
        class="h-[36px] bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-center text-sm"
      >
        Show More
      </RouterLink>
    </div>
  </div>
</template>
