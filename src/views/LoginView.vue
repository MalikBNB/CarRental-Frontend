<script setup>
import { onMounted, reactive, ref } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";

import axios from "axios";

const router = useRouter();

const rememberMe = ref(false);
const isLoading = ref(false);
const isNotValidUser = ref(false);

const state = reactive({
  authModel: {},
});

const user = reactive({
  username: "",
  password: "",
});

const logIn = async () => {
  var response;

  try {
    isLoading.value = true;

    localStorage.removeItem("Username");
    localStorage.removeItem("Password");

    response = await axios.post("https://localhost:7284/api/Auth/login", user);
    state.authModel = response.data;

    if (state.authModel.errors.length > 0) {
      console.error("Login failed!", state.authModel.errors);
      isNotValidUser.value = true;
      return;
    }

    if (state.authModel.isAuthenticated) {
      isNotValidUser.value = false;

      localStorage.removeItem("Token");
      localStorage.removeItem("Roles");

      localStorage.setItem("Token", state.authModel.token);
      localStorage.setItem("Roles", state.authModel.roles);

      console.log(rememberMe.value);
      if (rememberMe.value) {
        localStorage.setItem("Username", user.username);
        localStorage.setItem("Password", user.password);
      }

      router.push("/home");
    } else {
      isNotValidUser.value = true;
    }
  } catch (error) {
    console.error("Axios error!", error);
    // isNotValidUser.value = true;
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  const username = localStorage.getItem("Username");
  const password = localStorage.getItem("Password");

  if (password !== null && username !== null) {
    user.username = username;
    user.password = password;

    rememberMe.value = true;
  }
});
</script>

<template>
  <section class="bg-amber-50">
    <div v-if="isLoading" class="text-center py-6">
      <PulseLoader />
    </div>

    <div v-else class="container m-auto max-w-xl py-20">
      <div
        class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form @submit.prevent="logIn">
          <div class="flex flex-col items-center">
            <h2 class="text-3xl text-amber-500 text-center font-bold mb-6">
              Log In
            </h2>

            <!-- Email -->
            <div class="w-full mb-4 mr-4">
              <div class="block mb-2">
                <label class="text-gray-700 font-bold">Email</label>
                <label
                  v-if="isNotValidUser"
                  class="bg-red-50 text-red-400 p-1 ml-6"
                  >*Invalid email or password!</label
                >
              </div>
              <input
                v-model="user.username"
                type="text"
                id="email"
                name="email"
                class="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:shadow-outline"
                placeholder="test@email.com"
                required
              />
            </div>

            <!-- Password -->
            <div class="w-full mb-4 mr-4">
              <label class="block text-gray-700 font-bold mb-2">Password</label>
              <input
                v-model="user.password"
                type="password"
                id="password"
                name="password"
                class="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:shadow-outline"
                placeholder="Password"
                required
              />
            </div>

            <!-- Remember Me -->
            <div class="w-full mb-4 mr-4">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                v-model="rememberMe"
              />
              <label class="text-gray-700 font-bold mb-2 ml-2" for="rememberMe"
                >Remember Me</label
              >
            </div>
          </div>

          <div>
            <button
              class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
