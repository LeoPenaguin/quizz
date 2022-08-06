<script lang="ts" setup>
const emit = defineEmits(['clicked'])

const clicked = () => emit('clicked')
</script>

<template>
    <button @click="clicked" class="molecule__button">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
.molecule__button {
    background: rgb(123, 123, 123);
    padding: $space1 $space2;
    border-radius: $space1;
    color: white;
    border: 1px solid white;
    cursor: pointer;
}
</style>
