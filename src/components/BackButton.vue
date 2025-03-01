<script setup>
import { RouterLink } from "vue-router";
import { defineProps } from "vue";

defineProps({
  vehicleCategory: {
    type: String,
  },
});
</script>

<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink
        :to="'/vehicles/' + { category }"
        class="text-amber-500 hover:text-amber-600 flex items-center"
      >
        <i class="pi pi-arrow-circle-left mr-3"></i> Back to vehicle listings
      </RouterLink>
    </div>
  </section>
</template>
