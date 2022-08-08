<script lang="ts" setup>
import MoleculeButton from '@/components/MoleculeButton.vue'
import OrganismUserItem from '@/components/OrganismUserItem.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goToGame = () => router.push('/game')
</script>

<template>
  <div class="lobby">
    <div class="lobby__section lobby__users">
      <OrganismUserItem :user="{ name: 'test' }" />
      <OrganismUserItem :user="{ name: 'test' }" />
      <OrganismUserItem :user="{ name: 'test' }" />
      <OrganismUserItem :user="{ name: 'test' }" />
      <OrganismUserItem :user="{ name: 'test' }" />
      <OrganismUserItem :user="{ name: 'test' }" />
      <OrganismUserItem :user="{ name: 'test' }" />
      <OrganismUserItem :user="{ name: 'test' }" />
      <OrganismUserItem :user="{ name: 'test' }" />
      <OrganismUserItem :user="{ name: 'test' }" />
    </div>
    <div class="lobby__section lobby__tutorial">
      <h3>How to play</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fuga totam obcaecati, ducimus cum
        repudiandae? Exercitationem, fugiat? Corporis ab alias ratione dicta itaque velit pariatur vero quia vitae, enim
        minima?
      </p>
    </div>
    <div class="lobby__section lobby__start">
      <MoleculeButton @clicked="goToGame">Start game</MoleculeButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lobby {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 0.5rem;
  &__section {
    padding: $space-1;
    border-radius: $space-1;
  }
  &__users {
    background: rgb(0, 167, 20);
    grid-column: 2 / 4;
    grid-row: 1 / 5;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(6, 1fr);
    gap: $space-1;
  }
  &__tutorial {
    background: rgb(255, 0, 128);
    grid-column: 1 / 2;
    grid-row: 1 / 5;
  }
  &__start {
    background: rgb(255, 136, 0);
    grid-column: 1 / 4;
    grid-row: 5 / 6;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
