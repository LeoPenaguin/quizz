<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import MoleculeButton from './components/MoleculeButton.vue'

const userStore = useUserStore()
const router = useRouter()

const { currentUser, isLoggedIn } = storeToRefs(userStore)

const logout = () => {
  userStore.logout()
  router.push({ path: '/' })
}

const goToLogin = () => {
  router.push({ path: '/auth' })
}
</script>

<template>
  <div class="app">
    <div class="app__navbar">
      <div class="navbar__user" v-if="isLoggedIn">
        {{ currentUser?.email }}
        <MoleculeButton type="submit" @click="logout()">Logout</MoleculeButton>
      </div>
      <MoleculeButton v-else type="submit" @click="goToLogin()">Login or register</MoleculeButton>
    </div>
    <div class="app__wrapper">
      <div class="wrapper__content">
        <RouterView />
      </div>
    </div>
    <div class="app__footer">Léo</div>
  </div>
</template>

<style lang="scss">
.app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: $color-background;
  font-family: sans-serif;
  &__navbar {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    .navbar__user {
      padding: $space-1;
      border-radius: $space-1;
    }
  }
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
    width: 100%;
    .wrapper__content {
      width: 900px;
      height: 600px;
      color: black;
    }
  }
  &__footer {
    width: 100%;
    height: 50px;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
