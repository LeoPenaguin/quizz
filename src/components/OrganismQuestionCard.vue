<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Question } from '@packages/typings'

const emit = defineEmits(['clicked'])
const props = defineProps({
    question: {
        type: Object as PropType<Question>,
        required: true,
    },
})

const clicked = () => emit('clicked')
</script>

<template>
    <div class="question-card" @click="clicked">
        <div class="question-card__text">
            {{ props.question.text }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.user-item {
    background: rgb(255, 255, 255);
    padding: $space1;
    border-radius: $space1;
    color: rgb(0, 0, 0);
}
</style>
