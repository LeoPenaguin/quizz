<script lang="ts" setup>
import OrganismQuestionCard from '@/components/OrganismQuestionCard.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import MoleculeProgressCicle from '@/components/MoleculeProgressCicle.vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '@/stores/game'
import { storeToRefs } from 'pinia'

const gameStore = useGameStore()
const router = useRouter()

const transitioning = ref(true)
const transitionCounter = ref(0)

const { currentQuestion, counterDuration, counterSteps, questionDuration } = storeToRefs(gameStore)

let counter = 0

const nextQuestion = () => {
  transitionCounter.value = questionDuration.value

  counter = setInterval(() => {
    transitionCounter.value -= 1
    console.log('nextQuestion', transitionCounter.value)
    if (transitionCounter.value < 0) {
      clearInterval(counter)

      gameStore.setNextQuestion()

      if (!currentQuestion.value) {
        router.push('/score')
      }

      startTransitionCounter()
      return
    }
  }, 1000)
}

const startTransitionCounter = () => {
  clearInterval(counter)
  transitionCounter.value = counterSteps.value
  transitioning.value = true

  counter = setInterval(() => {
    transitionCounter.value -= 1
    console.log('startTransitionCounter', transitionCounter.value)
    if (transitionCounter.value <= 0) {
      transitioning.value = false
      clearInterval(counter)
      nextQuestion()
      return
    }
  }, counterDuration.value / counterSteps.value)
}

onMounted(() => {
  console.log('onMounted')
  gameStore.resetQuestion()
  startTransitionCounter()
})

onUnmounted(() => {
  clearInterval(counter)
  transitioning.value = true
})
</script>

<template>
  <div class="game">
    <div v-if="transitioning && transitionCounter" class="game__counter">
      <div class="counter__value">
        <template v-if="transitionCounter === 4">3</template>
        <template v-if="transitionCounter === 3">2</template>
        <template v-if="transitionCounter === 2">1</template>
        <template v-if="transitionCounter === 1">Gooo</template>
      </div>
    </div>
    <template v-if="currentQuestion && !transitioning">
      <MoleculeProgressCicle :current="transitionCounter" :total="questionDuration" />
      <OrganismQuestionCard class="game__question" :key="currentQuestion.position" :question="currentQuestion" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.game {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: $space-1;
  overflow: hidden;
  border: 5px solid $color-primary;
  &__counter {
    display: block;
    width: 100%;
    flex: 1;
    background: $color-primary;
    display: flex;
    justify-content: center;
    align-items: center;
    .counter__value {
      font-size: 3rem;
      color: white;
    }
  }
  &__question {
    &.v-leave-active {
      display: none;
    }
  }
}
</style>
