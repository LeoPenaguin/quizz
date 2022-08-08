<script lang="ts" setup>
import type { PropType } from 'vue'

const emit = defineEmits(['clicked'])
const props = defineProps({
  user: {
    type: Object as PropType<{ name: string }>,
    required: true,
  },
})

const clicked = () => emit('clicked')
</script>

<template>
  <div class="user-item" @click="clicked">
    <div class="user-item__image"></div>
    <div class="user-item__name">
      {{ props.user.name }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-item {
  background: rgb(206, 206, 206);
  padding: $space-1;
  border-radius: $space-1;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__image {
    width: 60px;
    height: 60px;
    background: white;
    border-radius: 100%;
    margin-bottom: $space-1;
  }
  &__name {
    text-align: center;
  }
}
</style>
