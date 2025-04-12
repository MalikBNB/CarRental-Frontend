<script setup>
import { RouterLink } from "vue-router";
import { defineProps } from "vue";

defineProps({
  vehicle: Object,
});

function fuleType(enumIndex) {
  switch (enumIndex) {
    case 1:
      return "Gasoline";
    case 2:
      return "Diesel";
    case 3:
      return "Electric";
    case 4:
      return "Hybrid";
    default:
      break;
  }
}
</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="flex flex-col justify-between mb-4">
        <div class="flex justify-between mb-4">
          <div class="text-center">
            <h3 class="text-xl font-bold">{{ vehicle.model }}</h3>
            <div class="text-gray-600">{{ vehicle.make }}</div>
          </div>
        </div>

        <div class="overflow-hidden h-48 mb-4">
          <img
            :src="vehicle.picture"
            :alt="vehicle.model"
            class="w-full h-full"
          />
        </div>

        <div class="flex content-center justify-around mb-4">
          <div class="flex flex-col items-center">
            <p class="text-gray-500">Year</p>
            <p>{{ vehicle.year }}</p>
          </div>
          <div class="flex flex-col items-center">
            <p class="text-gray-500">Mileage</p>
            <p>{{ vehicle.mileage }}</p>
          </div>
          <div class="flex flex-col items-center">
            <p class="text-gray-500">Fuel type</p>
            <p>{{ fuleType(vehicle.fuelType) }}</p>
          </div>
        </div>
      </div>

      <div class="flex justify-between">
        <h3 class="text-green-500 mb-2">
          {{ vehicle.rentalPricePerDay }} / Day
        </h3>
        <div
          :class="[
            vehicle.isAvailableForRent ? 'text-green-500' : 'text-red-500',
          ]"
        >
          {{ vehicle.isAvailableForRent ? "Available" : "Not Available" }}
        </div>
      </div>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flexn flex-col justify-between">
        <RouterLink
          :to="'/vehicle/' + vehicle.id"
          class="h-[36px] mb-2 block mx-10 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-center"
        >
          Book
        </RouterLink>

        <RouterLink
          :to="'/vehicle/' + vehicle.id"
          class="h-[36px] block mx-10 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-lg text-center"
        >
          More details
        </RouterLink>
      </div>
    </div>
  </div>
</template>
