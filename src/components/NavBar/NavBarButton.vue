<script setup>
import { RouterLink, useRoute } from "vue-router";
import { defineProps } from "vue";

const route = useRoute();

const isActiveLink = (routePath) => {
  return route.path === routePath;
};

const showIt = () => {
  if (props.isLogoutButton) {
    if (route.path === "/") return false;
    else return localStorage.getItem("isLoggedIn");
  } else return true;
};

defineProps({
  props: {
    path: String,
    content: String,
    isLogoutButton: Boolean,
  },
});
</script>

<template>
  <RouterLink
    :to="props.path"
    :class="[
      isActiveLink(props.path)
        ? 'bg-amber-900'
        : 'hover:bg-amber-600 hover:text-white',
      'text-white font-bold',
      'px-3 py-2',
      'rounded-md',
    ]"
    v-show="showIt"
    >{{ props.content }}</RouterLink
  >

  <!--     v-show="props.isLogoutButton ? (showIt() ? true : false) : true" -->
</template>
