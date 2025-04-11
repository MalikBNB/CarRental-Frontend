<script setup>
import Hero from "@/components/Hero.vue";
import CategoryListings from "@/components/Category/CategoryListings.vue";
</script>

<template>
  <Hero />
  <CategoryListings :limit="3" :show-button="true" />
</template>
