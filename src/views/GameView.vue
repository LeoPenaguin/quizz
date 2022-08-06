<script lang="ts" setup>
import OrganismQuestionCard from '@/components/OrganismQuestionCard.vue'
import type { Question } from 'packages/typings/question.js'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import MoleculeButton from '../components/MoleculeButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeIndex = ref(0)
const transitioning = ref(true)
const transitionCounter = ref(0)
const config = ref({
    counterSteps: 4,
    counterDuration: 5000,
    questionDuration: 15,
})

const questions = ref([
    {
        id: 1,
        text: 'Blablabla 1',
        choices: [{ text: 'lol' }],
    },
    {
        id: 2,
        text: 'Bloubloublou 2',
        choices: [{ text: 'lol' }],
    },
    {
        id: 3,
        text: 'LALALALALALA 3',
        choices: [{ text: 'lol' }],
    },
    {
        id: 4,
        text: 'Bloup blip 4',
        choices: [{ text: 'lol' }],
    },
] as Question[])

const currentQuestion = computed(() => questions.value[activeIndex.value])

let counter = 0

const nextQuestion = () => {
    transitionCounter.value = config.value.questionDuration

    counter = setInterval(() => {
        transitionCounter.value -= 1
        console.log('nextQuestion', transitionCounter.value)
        if (transitionCounter.value <= 0) {
            clearInterval(counter)

            activeIndex.value += 1

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
    transitionCounter.value = config.value.counterSteps
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
    }, config.value.counterDuration / config.value.counterSteps)
}

onMounted(() => {
    console.log('onMounted')
    startTransitionCounter()
})

onUnmounted(() => {
    clearInterval(counter)
    transitioning.value = true
    transitionCounter.value = 0
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
            <div>{{ transitionCounter }}</div>
            <OrganismQuestionCard class="game__question" :key="currentQuestion.id" :question="currentQuestion" />
        </template>
    </div>
    <div class="game__devtools">
        <MoleculeButton @clicked="nextQuestion">Next</MoleculeButton>
    </div>
</template>

<style lang="scss" scoped>
.game {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    &__counter {
        display: block;
        width: 100%;
        flex: 1;
        background: rgb(0, 157, 255);
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
.game__devtools {
    position: fixed;
    left: 0;
    bottom: 0;
}
</style>
