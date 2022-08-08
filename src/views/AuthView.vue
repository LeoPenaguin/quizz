<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
import MoleculeButton from '@/components/MoleculeButton.vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const loginWithGoogle = () => {
  userStore.googleLogin().then(() => {
    goBack()
  })
}

const loginWithTwitter = () => {
  userStore.twitterLogin().then(() => {
    goBack()
  })
}

const goBack = () => {
  router.push({ path: '/' })
}
</script>

<template>
  <div class="auth">
    <MoleculeButton @clicked="goBack()">Quit</MoleculeButton>
    <h1>Auth</h1>

    <div>
      <MoleculeButton @clicked="loginWithGoogle()">Google</MoleculeButton>
      <MoleculeButton @clicked="loginWithTwitter()">Twitter</MoleculeButton>
    </div>

    <RouterView />
  </div>
</template>
