<script setup>
import { ref, reactive } from "vue";

import VehicleListing from "@/components/Vehicle/VehicleListing.vue";
import VehiclesData from "@/Data/Vehicles.json";

// const state = reactive({
//   vehicles: [],
//   isLoading: true,
// });

const vehicles = ref(VehiclesData);
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-center text-amber-500 mb-6">
        Browse Vehicles
      </h2>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <VehicleListing
          v-for="vehicle in vehicles"
          :key="vehicle.id"
          :vehicle="vehicle"
        />
      </div>
    </div>
  </section>
</template>
