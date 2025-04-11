<script setup>
import CategoryListings from "@/components/Category/CategoryListings.vue";
import AddButton from "@/components/AddButton.vue";
</script>

<template>
  <AddButton path="/categories/add" title="Add category"/>
  <CategoryListings />
</template>
