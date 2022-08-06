<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
const userStore = useUserStore()

const { isLoggedIn } = storeToRefs(userStore)
</script>

<template>
    <div class="home">
        <h1>HOME</h1>
        <RouterLink v-if="isLoggedIn" to="/lobby">Join lobby</RouterLink>
    </div>
</template>
