<script setup>
import AddButton from "@/components/AddButton.vue";
import CategoryListings from "@/components/Category/CategoryListings.vue";
</script>

<template>
  <AddButton path="/categories/add" title="Add category" />
  <CategoryListings />
</template>
