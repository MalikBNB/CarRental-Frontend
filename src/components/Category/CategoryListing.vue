<script setup>
import { defineProps } from "vue";
import { RouterLink, useRouter } from "vue-router";
import Swal from "sweetalert2";
import { useToast } from "vue-toastification";
import axios from "axios";

const router = useRouter();
const toast = useToast();

defineProps({
  category: Object,
});

const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(
      `https://localhost:7284/api/CarCategories/${id}`
    );
    toast.success("Category deleted successfully");
    router.go();
  } catch (error) {
    console.error("Error deleting category!");
    toast.error("Category was not deleted");
  }
};

const askForDelete = (id) => {
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
      await deleteCategory(id);
    }
  });
};
</script>

<template>
  <div class="bg-white rounded-xl shadow-md">
    <div class="flex flex-col justify-between p-4">
      <div class="flex justify-between">
        <div class="mb-6">
          <h3 class="text-xl font-bold">{{ category.categoryName }}</h3>
        </div>

        <!-- Edit / Delete -->
        <div>
          <RouterLink :to="'/categories/edit/' + category.id">
            <i
              class="pi pi-pencil ml-4 bg-amber-500 hover:bg-amber-600 p-1 rounded text-white"
            ></i>
          </RouterLink>
          <button @click="askForDelete(category.id)">
            <i
              class="pi pi-trash ml-4 bg-red-500 hover:bg-red-600 p-1 rounded text-white"
            ></i>
          </button>
        </div>
      </div>

      <div class="mb-5 h-52 overflow-hidden">
        <img
          :src="category.picture"
          :alt="category.categoryName"
          class="w-full h-full"
        />
      </div>

      <RouterLink
        :to="`/vehicles/${category.categoryName}`"
        class="h-[36px] bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-center text-sm"
      >
        Show Vehicles
      </RouterLink>
    </div>
  </div>
</template>
