<script setup>
import { reactive, onMounted } from "vue";
import axios from "axios";

import VehicleListing from "@/components/Vehicle/VehicleListing.vue";
// import VehiclesData from "@/Data/Vehicles.json";

const state = reactive({
  vehicles: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get("https://localhost:7284/api/Vehicles");
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
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-center text-amber-500 mb-6">
        Browse Vehicles
      </h2>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <VehicleListing
          v-for="vehicle in state.vehicles"
          :key="vehicle.id"
          :vehicle="vehicle"
        />
      </div>
    </div>
  </section>
</template>
