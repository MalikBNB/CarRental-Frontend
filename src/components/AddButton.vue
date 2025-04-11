<script setup>
import { RouterLink } from "vue-router";
import { defineProps } from "vue";

defineProps({
  path: {
    type: String,
  },
  title: {
    type: String,
  },
});
</script>

<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink
        :to="path"
        class="text-green-500 hover:text-green-600 font-bold flex items-center"
      >
        <i class="pi pi-plus-circle mr-3"></i> {{ title }}
      </RouterLink>
    </div>
  </section>
</template>
