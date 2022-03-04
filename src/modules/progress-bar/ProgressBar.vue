<script setup lang="ts">
  import { colorPrimaryA } from '../shared/shared.constant';
  import {
    onBeforeUnmount,
    onMounted,
    ref,
  } from 'vue';

  interface PropsInterface {
    percentage: number;
  }

  const props = defineProps<PropsInterface>();

  const emit = defineEmits<{
    (e: 'completed'): void,
  }>();

  const progressBarOverRef = ref<HTMLDivElement>();

  function onProgressBarOverTransition(): void {
    if (props.percentage !== 100) return;

    emit('completed');
  }

  onMounted(() => {
    progressBarOverRef.value?.addEventListener('transitionend', onProgressBarOverTransition)
  });

  onBeforeUnmount(() => {
    progressBarOverRef.value?.removeEventListener('transitionend', onProgressBarOverTransition)
  });
</script>

<template>
  <div class="progress-bar-wrapper">
    <div class="progress-bar">
      <div class="progress-bar__content">
        <slot>
          {{ props.percentage }}%
        </slot>
      </div>
    </div>

    <div
      ref="progressBarOverRef"
      :style="{ width: props.percentage + '%' }"
      class="progress-bar progress-bar--over"
    >
      <div class="progress-bar__content">
        <slot>
          {{ props.percentage }}%
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .progress-bar-wrapper {
    position: relative;
    border-radius: 7px;
    height: 14px;
    width: 100%;
    overflow: hidden;
  }

  .progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    font-size: 12px;
    font-weight: 500;
    color: var(--progress-bar-color, v-bind(colorPrimaryA));
    background-color: var(--progress-bar-bg-color, #fff);

    &__content {
      padding: 0 10px;
    }

    &--over {
      color: var(--progress-bar-over-color, #fff);
      background-color: var(--progress-bar-over-bg-color, v-bind(colorPrimaryA));
      overflow: hidden;
      border-left-color: white;
      transition: width .25s ease;
    }
  }
</style>
