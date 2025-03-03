<script setup>
import { onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import axios from "axios";

const route = useRoute();
const router = useRouter();
const toast = useToast();

const form = reactive({
  categoryName: "",
  picture: [],
});

const state = reactive({
  category: {},
  isLoading: true,
});

const categoryId = route.params.id;

const handleSubmit = async () => {
  const updatedCategory = {
    name: form.categoryName,
    picture: form.picture,
  };

  const response = Object;

  try {
    response = await axios.put(
      `https://localhost:7284/api/CarCategories/${categoryId}`,
      updatedCategory
    );
    toast.success("Category updated successfully.");
    router.push("/categories");
  } catch (error) {
    console.error("Error updating category!", error, response.data);
    toast.error("Updating category faild!");
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://localhost:7284/api/CarCategories/${categoryId}`
    );
    state.category = response.data["content"];

    form.categoryName = state.category.categoryName;
    form.picture = state.category.picture;
  } catch (error) {
    console.error("Error fetching category!", error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-amber-50">
    <!-- Show loading spinner while loading is true -->
    <div v-if="state.isLoading" class="text-center text-amber-500 py-6">
      <PulseLoader />
    </div>

    <div v-else class="container m-auto max-w-2xl py-24">
      <div
        class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form @submit.prevent="handleSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6">Edit Category</h2>

          <div class="mb-4">
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

          <div>
            <button
              class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-full w-full foucus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Category
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
