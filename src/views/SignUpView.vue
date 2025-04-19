<script setup></script>

<template>
  <section class="bg-amber-50">
    <div class="container m-auto max-w-xl py-20">
      <div
        class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form>
          <div class="flex flex-col items-center">
            <h2 class="text-3xl text-amber-500 text-center font-bold mb-6">
              Sign Up
            </h2>

            <!-- First name -->
            <div class="w-full mb-4 mr-4">
              <label class="block text-gray-700 font-bold mb-2"
                >First name</label
              >
              <input
                type="text"
                id="firstName"
                name="firstname"
                class="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:shadow-outline"
                placeholder="First name"
                required
              />
            </div>

            <!-- Last name -->
            <div class="w-full mb-4 mr-4">
              <label class="block text-gray-700 font-bold mb-2"
                >Last name</label
              >
              <input
                type="text"
                id="lastName"
                name="lastName"
                class="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:shadow-outline"
                placeholder="Last name"
                required
              />
            </div>

            <!-- Email -->
            <div class="w-full mb-4 mr-4">
              <label class="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
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
                type="password"
                id="password"
                name="password"
                class="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:shadow-outline"
                placeholder="Password"
                required
              />
            </div>
          </div>

          <div>
            <button
              class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
