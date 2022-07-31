<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import MoleculeButton from "../components/MoleculeButton.vue";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const { email, password } = storeToRefs(userStore);
const router = useRouter();

const registerUser = () => {
  userStore.register().then(() => {
    router.push({ path: "/" });
  });
};

const loginUser = () => {
  userStore.login().then(() => {
    router.push({ path: "/" });
  });
};

const loginWithGoogle = () => {
  userStore.googleLogin().then(() => {
    router.push({ path: "/" });
  });
};

const loginWithTwitter = () => {
  userStore.twitterLogin().then(() => {
    router.push({ path: "/" });
  });
};
</script>

<template>
  <div class="about">
    <RouterLink class="text-orange-400" to="/">Quit</RouterLink>
    <h1 class="text-xl">Auth</h1>

    <div class="w-full flex m-4">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mr-4"
        @submit.prevent="registerUser()"
      >
        <h2 class="mb-4">Register</h2>

        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            v-model="email"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            v-model="password"
          />
        </div>
        <MoleculeButton type="submit">Go</MoleculeButton>
      </form>

      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="loginUser()"
      >
        <h2 class="mb-4">Login</h2>

        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            v-model="email"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            v-model="password"
          />
        </div>
        <MoleculeButton type="submit">Go</MoleculeButton>
      </form>
      <MoleculeButton @click="loginWithGoogle()">Google</MoleculeButton>
      <MoleculeButton @click="loginWithTwitter()">Twitter</MoleculeButton>
    </div>

    <RouterView />
  </div>
</template>
