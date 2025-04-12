<script setup>
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import axios from "axios";

import BackButton from "@/components/BackButton.vue";

const router = useRouter();
const toast = useToast();

const form = reactive({
  categoryName: "",
  picture: [],
});

const isLoading = ref(false);
const selectedImage = ref("No image chosen");

const convertImageToBase64 = (e) => {
  var file = e.target.files[0] || e.dataTransfer.files[0];

  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", () => {
    form.picture = reader.result;
  });

  selectedImage.value = file.name;
};

const handleSubmit = async () => {
  const newCategory = {
    CategoryName: form.categoryName,
    picture: form.picture,
  };

  var response;

  try {
    isLoading.value = true;
    response = await axios.post(
      "https://localhost:7284/api/CarCategories",
      newCategory
    );
    toast.success("Category updated successfully.");
    router.push("/categories");
  } catch (error) {
    // console.error("Error adding new category!", response.data["error"]);
    toast.error("Adding new category faild!");
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <BackButton path="/categories" title="Back to categories" />
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
          <h2 class="text-3xl text-center font-semibold mb-6">Add Category</h2>

          <div class="flex flex-col-reverse items-center">
            <div class="w-full mb-4 mr-4">
              <label class="block text-gray-700 font-bold mb-2">
                Category name
              </label>
              <input
                v-model="form.categoryName"
                type="text"
                id="categoryName"
                name="categoryName"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Truck"
                required
              />
            </div>

            <div class="flex flex-col justify-between">
              <div class="border-dashed border-amber-600 mb-2 overflow-hidden">
                <img :src="form.picture" alt="category picture" />
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
          </div>

          <div>
            <button
              class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-full w-full foucus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
