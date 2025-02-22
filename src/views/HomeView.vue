<script setup>
import Hero from "@/components/Hero.vue";
import CategoryListings from "@/components/Category/CategoryListings.vue";
</script>

<template>
  <Hero />
  <CategoryListings :limit="6" :show-button="true" />
</template>
