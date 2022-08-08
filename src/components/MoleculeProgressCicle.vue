<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
  current: {
    type: Number,
    required: true,
  },
})

const percent = computed(() => {
  return (props.current / props.total) * 100
})
</script>

<template>
  <div class="progress-circle">
    <div
      :class="{ warning: percent < 50, danger: percent < 20 }"
      :style="{ width: percent + '%' }"
      class="progress-circle__bar"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.progress-circle {
  width: 100%;
  background: $color-primary;
  height: $space-1;
  &__bar {
    height: 100%;
    background: $color-state-success;
    transition: width 1s linear;
    &.warning {
      background: $color-state-warning;
    }
    &.danger {
      background: $color-state-danger;
    }
  }
}
</style>
