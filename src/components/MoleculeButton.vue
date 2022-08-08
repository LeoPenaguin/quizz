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
  background: $color-state-default;
  padding: $space-1 $space-2;
  border-radius: $space-1;
  color: $color-text;
  border: 0;
  cursor: pointer;
}
</style>
