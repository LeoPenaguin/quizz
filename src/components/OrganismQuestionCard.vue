<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Question } from '@packages/typings'
import MoleculeButton from './MoleculeButton.vue'

const props = defineProps({
  question: {
    type: Object as PropType<Question>,
    required: true,
  },
})

const onAnswerClicked = (choice: any) => {
  alert(choice)
}
</script>

<template>
  <div class="question-card">
    <div class="question-card__text">
      {{ props.question.text }}
    </div>
    <div class="question-card__choices">
      <div v-bind:key="choice.text" v-for="choice in props.question.choices">
        <MoleculeButton @clicked="onAnswerClicked(choice)">{{ choice.text }}</MoleculeButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.question-card {
  padding: $space-1;
  border-radius: $space-1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__text {
    font-size: 1.5rem;
    margin: $space-2 $space-1;
  }
}
</style>
