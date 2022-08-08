<script lang="ts" setup>
import MoleculeButton from '@/components/MoleculeButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push({ path: '/' })
}
</script>

<template>
  <div class="score">
    <h1>SCORE</h1>
    <MoleculeButton @clicked="goBack">Quit</MoleculeButton>
  </div>
</template>
