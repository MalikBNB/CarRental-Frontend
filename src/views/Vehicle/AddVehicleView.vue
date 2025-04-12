<script setup>
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import BackButton from "@/components/BackButton.vue";
import { reactive, ref } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import axios from "axios";

const route = useRoute();
const router = useRouter();
const toast = useToast();

const category = route.params.category;

const isLoading = ref(false);
const selectedImage = ref("No image chosen");

const form = reactive({
  Make: "",
  Model: "",
  Picture: [],
  Year: 2000,
  Mileage: 0,
  FuelType: "",
  PlateNumber: "",
  CarCategoryId: "",
  RentalPricePerDay: 0.0,
  IsAvailableForRent: false,
});

const convertImageToBase64 = (e) => {
  var file = e.target.files[0] || e.dataTransfer.files[0];

  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", () => {
    form.Picture = reader.result;
  });

  selectedImage.value = file.name;
};

const handleSubmit = async () => {
  const newVehicle = {
    Make: form.Make,
    Model: form.Model,
    Picture: form.Picture,
    Year: form.Year,
    Mileage: form.Mileage,
    FuelType: parseInt(form.FuelType),
    PlateNumber: form.PlateNumber,
    CarCategoryId: "3A7D2AB8-0B0C-48D1-1439-08DD4DFFCCE4", //form.CarCategoryId,
    RentalPricePerDay: form.RentalPricePerDay,
    IsAvailableForRent: form.IsAvailableForRent,
  };

  var response;

  try {
    isLoading.value = true;
    console.log(newVehicle);
    response = await axios.post(
      "https://localhost:7284/api/Vehicles",
      newVehicle
    );
    toast.success("Vehicle added successfully.");
    router.push(`/vehicles/${category}`);
  } catch (error) {
    console.error("Error adding new vehicle!", error);
    console.log(response.data);
    toast.error("Adding new vehicle faild!");
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <BackButton
    :path="`/vehicles/${category}`"
    title="Back to vehicle listings"
  />
  <section class="bg-amber-50">
    <!-- Show loading spinner while loading is true -->
    <div v-if="isLoading" class="text-center text-amber-500 py-6">
      <PulseLoader />
    </div>

    <div v-else class="container m-auto max-w-2xl py-24">
      <div
        class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form @submit.prevent="handleSubmit">
          <div class="flex flex-col items-center">
            <h2 class="text-3xl text-center font-semibold mb-6">Add vehicle</h2>

            <!-- Picture -->
            <div class="flex flex-col justify-between">
              <div class="max-w-72 max-h-64 mb-2 overflow-hidden">
                <img :src="form.Picture" alt="picture" />
              </div>
              <div class="flex flex-row items-center mb-4">
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  @change="(e) => convertImageToBase64(e)"
                  hidden
                />
                <label
                  for="image-upload"
                  class="block text-sm text-amber-500 mr-4 py-2 px-4 rounded-md border-0 font-semibold bg-amber-50 text-amber-700 hover:bg-amber-100 cursor-pointer"
                  >Upload image</label
                >
                <label class="text-sm text-amber-500">
                  {{ selectedImage }}</label
                >
              </div>
            </div>

            <!-- Make -->
            <div class="w-full mb-4 mr-4">
              <label class="block text-gray-700 font-bold mb-2"> Make </label>
              <input
                v-model="form.Make"
                type="text"
                id="make"
                name="make"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Mercedes"
                required
              />
            </div>

            <!-- Model -->
            <div class="w-full mb-4 mr-4">
              <label class="block text-gray-700 font-bold mb-2"> Model </label>
              <input
                v-model="form.Model"
                type="text"
                id="model"
                name="model"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. AMG C63"
                required
              />
            </div>

            <!-- Year -->
            <div class="w-full mb-4 mr-4">
              <label class="block text-gray-700 font-bold mb-2"> Year </label>
              <input
                v-model="form.Year"
                type="text"
                id="year"
                name="year"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. 2025"
                required
              />
            </div>

            <!-- Mileage -->
            <div class="w-full mb-4 mr-4">
              <label class="block text-gray-700 font-bold mb-2">
                Mileage
              </label>
              <input
                v-model="form.Mileage"
                type="text"
                id="mileage"
                name="mileage"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. 5000"
                required
              />
            </div>

            <!-- Fuel Type -->
            <div class="w-full mb-4 mr-4">
              <label class="block text-gray-700 font-bold mb-2">
                Fuel Type
              </label>
              <select
                v-model="form.FuelType"
                id="fuelType"
                name="fuelType"
                class="border rounded w-full py-2 px-3 mb-2"
                required
              >
                <option value="1">Gasoline</option>
                <option value="2">Diesel</option>
                <option value="3">Electric</option>
                <option value="4">Hybrid</option>
              </select>
            </div>

            <!-- Plate Number -->
            <div class="w-full mb-4 mr-4">
              <label class="block text-gray-700 font-bold mb-2">
                Plate number
              </label>
              <input
                v-model="form.PlateNumber"
                type="text"
                id="plateNumber"
                name="plateNumber"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. 199712528"
                required
              />
            </div>

            <!-- Rental Price Per Day -->
            <div class="w-full mb-4 mr-4">
              <label class="block text-gray-700 font-bold mb-2">
                Rental price
              </label>
              <input
                v-model="form.RentalPricePerDay"
                type="number"
                id="rentalPricePerDay"
                name="rentalPricePerDay"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. 2500"
                required
              />
            </div>

            <!-- Is Available For Rent -->
            <div class="w-full mb-4 mr-4">
              <label class="text-gray-700 font-bold mb-2 mr-2">
                Available for rent
              </label>
              <input
                v-model="form.IsAvailableForRent"
                type="checkbox"
                id="isAvailableForRent"
                name="isAvailableForRent"
                class="border rounded py-2 px-3 mb-2"
              />
            </div>
          </div>

          <div>
            <button
              class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-full w-full foucus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Vehicle
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
