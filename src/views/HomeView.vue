<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
const userStore = useUserStore();

const { isLoggedIn } = storeToRefs(userStore);
</script>

<template>
  <div class="about">
    <h1 class="text-xl">HOME</h1>
    <RouterLink v-if="isLoggedIn" class="text-orange-400" to="/lobby"
      >Join lobby</RouterLink
    >
    <RouterLink v-else class="text-orange-400" to="/auth"
      >Login or register</RouterLink
    >
  </div>
</template>
