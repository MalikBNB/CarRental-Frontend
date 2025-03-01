<script setup>
import { reactive, onMounted, defineProps } from "vue";
import { useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import axios from "axios";

import VehicleListing from "@/components/Vehicle/VehicleListing.vue";
// import VehiclesData from "@/Data/Vehicles.json";

const route = useRoute();

const category = route.params.category;

const state = reactive({
  vehicles: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get(`https://localhost:7284/api/Vehicles?category=${category}`);
    state.vehicles = response.data["content"];
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching vehicles", error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-amber-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-center text-amber-500 mb-6">
        Browse Vehicles
      </h2>

      <!-- Show loading spinner while loading is true -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>

      <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <VehicleListing
          v-for="vehicle in state.vehicles"
          :key="vehicle.id"
          :vehicle="vehicle"
        />
      </div>
    </div>
  </section>
</template>
