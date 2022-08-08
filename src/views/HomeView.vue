<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import MoleculeButton from '@/components/MoleculeButton.vue'

const userStore = useUserStore()
const router = useRouter()

const { isLoggedIn } = storeToRefs(userStore)

const onJoinLobby = () => {
  router.push('/lobby')
}
</script>

<template>
  <div class="home">
    <h1>HOME</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis iste, repudiandae odio consequuntur harum
      sint, architecto neque numquam id sit omnis officiis natus perferendis deserunt eveniet excepturi quos. Quidem,
      commodi?
    </p>
    <MoleculeButton @clicked="onJoinLobby">Join lobby</MoleculeButton>
  </div>
</template>
