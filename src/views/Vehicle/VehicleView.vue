<script setup>
import { reactive, onMounted } from "vue";
import { RouterLink, useRouter, useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import Swal from "sweetalert2";
import axios from "axios";

import BackButton from "@/components/BackButton.vue";

const route = useRoute();
const router = useRouter();

const toast = useToast();

const vehicleId = route.params.id;

const state = reactive({
  vehicle: {},
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://localhost:7284/api/Vehicles/${vehicleId}`
    );
    state.vehicle = response.data["content"];
    console.log(state.vehicle);
  } catch (error) {
    console.error("Error fetching vehicle", error);
  } finally {
    state.isLoading = false;
  }
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

const deleteVehicle = async () => {
  try {
    const category = state.vehicle.carCategory;
    const response = await axios.delete(
      `https://localhost:7284/api/Vehicles/${vehicleId}`
    );
    router.push(`/vehicles/${category}`);
    toast.success("Vehicle deleted successfully");
  } catch (error) {
    console.error("Error deleting vehicle", error);
    toast.error("Vehicle was not deleted!");
  }
};

const askForDelete = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#fbbf24",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await deleteVehicle();
    }
  });
};
</script>

<template>
  <BackButton
    :path="'/vehicles/' + state.vehicle.carCategory"
    title="Back to vehicle listings"
  />
  <section class="bg-amber-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div
            class="flex items-center justify-between bg-white p-6 rounded-lg shadow-md text-center md:text-left"
          >
            <div>
              <h1 class="text-3xl font-bold">{{ state.vehicle.model }}</h1>
              <div class="text-gray-500">{{ state.vehicle.make }}</div>
            </div>

            <p
              :class="[
                state.vehicle.isAvailableForRent
                  ? 'text-green-500'
                  : 'text-red-500',
                'font-bold',
              ]"
            >
              {{
                state.vehicle.isAvailableForRent ? "Available" : "Not Available"
              }}
            </p>
          </div>

          <!-- Vehicle Information -->
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-amber-800 text-lg font-bold mb-6">
              Vehicle Information
            </h3>
            <div class="flex content-center justify-around mb-8">
              <div class="flex flex-col items-center">
                <p class="text-gray-500">Year</p>
                <p>{{ state.vehicle.year }}</p>
              </div>
              <div class="flex flex-col items-center">
                <p class="text-gray-500">Mileage</p>
                <p>{{ state.vehicle.mileage }}</p>
              </div>
              <div class="flex flex-col items-center">
                <p class="text-gray-500">Fuel type</p>
                <p>{{ fuleType(state.vehicle.fuelType) }}</p>
              </div>
              <div class="flex flex-col items-center">
                <p class="text-gray-500">Plate number</p>
                <p>{{ state.vehicle.plateNumber }}</p>
              </div>
            </div>
            <div class="flex justify-between">
              <h3 class="text-amber-800 text-lg font-bold mb-1">
                Rental Price
              </h3>
              <p class="text-green-500 font-bold mb-4">
                {{ state.vehicle.rentalPricePerDay }} DZD / Day
              </p>
            </div>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <img
              :src="state.vehicle.picture"
              :alt="`${state.vehicle.make} ${state.vehicle.model}`"
            />

            <div class="flex justify-between mt-4">
              <p>Category</p>
              <p class="text-gray-500">{{ state.vehicle.carCategory }}</p>
            </div>
          </div>

          <!-- Manage -->
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Vehicle</h3>
            <RouterLink
              :to="`/vehicles/${state.vehicle.carCategory}/edit/${state.vehicle.id}`"
              class="bg-amber-500 hover:bg-amber-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >Edit Vehicle</RouterLink
            >
            <button
              @click="askForDelete"
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
              Delete Vehicle
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
