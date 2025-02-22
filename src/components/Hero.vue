<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    default: "You Have a Busy Day ?",
  },
  subtitle: {
    type: String,
    default: "Choose The Ride That Fits Your Needs And Journey",
  },
});
</script>

<template>
  <section class="bg-amber-700 py-20 mb-4">
    <div
      class="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <div class="text-center">
        <h1 class="text-4x1 font-extrabold text-white sm:text-5xl md:text-6xl">
          {{ title }}
        </h1>
        <p class="my-4 text-xl text-white font-bold">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>
