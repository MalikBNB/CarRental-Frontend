<script setup>
import { RouterLink } from "vue-router";
import { defineProps } from "vue";

defineProps({
  path: {
    type: String,
  },
  title: String,
});
</script>

<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink
        :to="path"
        class="text-amber-500 hover:text-amber-600 font-bold flex items-center"
      >
        <i class="pi pi-arrow-circle-left mr-3"></i> {{ title }}
      </RouterLink>
    </div>
  </section>
</template>
