<script setup>
import { reactive, defineProps, onMounted } from "vue";
import { RouterLink } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import axios from "axios";

import CategoryListing from "@/components/Category/CategoryListing.vue";

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  categories: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://localhost:7284/api/CarCategories"
    );
    state.categories = response.data["content"];
    console.log(state.categories);
  } catch (error) {
    console.error("Error fetching Categories!", error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-amber-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-amber-500 mb-6 text-center">
        Browse Categories
      </h2>

      <div v-if="state.isLoading" class="text-center text-red-500 py-6">
        <PulseLoader />
      </div>

      <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <CategoryListing
          v-for="category in state.categories.slice(
            0,
            limit || state.categories.length
          )"
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
