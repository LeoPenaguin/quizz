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
</script>

<template>
    <div class="app">
        <div class="app__navbar">
            <div class="navbar__user" v-if="isLoggedIn">
                {{ currentUser?.email }}
                <MoleculeButton type="submit" @click="logout()">Logout</MoleculeButton>
            </div>
            <RouterLink v-else to="/auth">Login or register</RouterLink>
        </div>
        <div class="app__wrapper">
            <div class="wrapper__content">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.app {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: rgb(20, 44, 81);
    color: white;
    font-family: sans-serif;
    &__navbar {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 1rem 0;
        .navbar__user {
            background-color: rgb(25, 84, 173);
            padding: $space1 $space2;
        }
    }
    &__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        .wrapper__content {
            background: rgb(255, 255, 255);
            width: 60vw;
            height: 60vh;
            color: black;
        }
    }
}
</style>
