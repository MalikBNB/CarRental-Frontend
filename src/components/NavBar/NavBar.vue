<script setup>
import { RouterLink } from "vue-router";
import NavBarButton from "./NavBarButton.vue";
</script>

<template>
  <nav class="bg-amber-700 border-b border-amber-500">
    <div class="mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/home">
            <!-- <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" /> -->
            <span class="hidden md:block text-white text-2xl font-bold ml-2"
              >A7 Vehicles</span
            >
          </RouterLink>

          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <NavBarButton path="/home" content="Home"/>
              <NavBarButton path="/categories" content="Categories"/>
              <NavBarButton path="/booking" content="Booking"/>
              
              <!-- <RouterLink
                to="/categories"
                :class="[
                  isActiveLink('/categories')
                    ? 'bg-amber-900'
                    : 'hover:bg-amber-600 hover:text-white',
                  'text-white font-bold',
                  'px-3 py-2',
                  'rounded-md',
                ]"
                >Categories</RouterLink
              >
              <RouterLink
                to="/book"
                :class="[
                  isActiveLink('/book')
                    ? 'bg-amber-900'
                    : 'hover:bg-amber-600 hover:text-white',
                  'text-white font-bold',
                  'px-3 py-2',
                  'rounded-md',
                ]"
                >Booking</RouterLink
              > -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
