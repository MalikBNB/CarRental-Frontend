<script setup>
import AddButton from "@/components/AddButton.vue";
import VehicleListings from "@/components/Vehicle/VehicleListings.vue";
</script>

<template>
  <AddButton path="/vehicles/add" title="Add vehicle" />
  <VehicleListings />
</template>
