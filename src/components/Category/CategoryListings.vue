<script setup>
import { ref, defineProps } from "vue";
import { RouterLink } from "vue-router";

import CategoryListing from "@/components/Category/CategoryListing.vue";
import CategoryData from "@/Data/Categories.json";

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const categories = ref(CategoryData);
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-amber-500 mb-6 text-center">
        Browse Categories
      </h2>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <CategoryListing
          v-for="category in categories.slice(0, limit || categories.length)"
          :key="category.id"
          :category="category"
        />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/categories"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Categories</RouterLink
    >
  </section>
</template>
