<script setup>
import { RouterLink } from "vue-router";
import { defineProps } from "vue";

defineProps({
  vehicle: Object,
});
</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <img :src="vehicle.picture" />
      </div>

      <div class="flex flex-row justify-between mb-4">
        <div>
          <h3 class="text-xl font-bold">{{ vehicle.model }}</h3>
          <div class="text-gray-600">{{ vehicle.make }}</div>
        </div>
        <div
          :class="
            vehicle.isAvailableForRent ? 'text-green-500' : 'text-red-500'
          "
        >
          {{ vehicle.isAvailableForRent ? "Available" : "Not Available" }}
        </div>
      </div>

      <div class="mb-4">
        <div><span class="font-bold">Year: </span>{{ vehicle.year }}</div>
        <div><span class="font-bold">Mileage: </span>{{ vehicle.mileage }}</div>
        <div>
          <span class="font-bold">Fuel type: </span>{{ vehicle.fuelType }}
        </div>
      </div>

      <h3 class="text-green-500 mb-2">{{ vehicle.rentalPricePerDay }} / Day</h3>

      <div class="border border-gray-100 mb-5"></div>

      <RouterLink
        :to="'/booking/' + vehicle.id"
        class="h-[36px] block mx-10 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-center"
      >
        Book
      </RouterLink>
    </div>
  </div>
</template>
