<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import MoleculeButton from "./components/MoleculeButton.vue";

const userStore = useUserStore();
const router = useRouter();

const { currentUser, isLoggedIn } = storeToRefs(userStore);

const logout = () => {
  userStore.logout();
  router.push({ path: "/" });
};
</script>

<template>
  <div class="m-4">
    <div v-if="isLoggedIn">
      {{ currentUser?.email }}
      <MoleculeButton class="ml-2" type="submit" @click="logout()"
        >Logout</MoleculeButton
      >
    </div>
    <RouterView />
  </div>
</template>
