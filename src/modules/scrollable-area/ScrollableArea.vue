<script setup lang="ts">
  import { ref } from 'vue';

  interface PropsInterface {
    height?: number;
  }

  const props = withDefaults(defineProps<PropsInterface>(), {
    height: 200,
  });

  defineExpose({
    update,
    scrollToTop,
  });

  const canScrollTop = ref(false);

  const canScrollBottom = ref(false);

  const scrollableInnerRef = ref<HTMLDivElement>();

  function update(): void {
    if (!scrollableInnerRef.value) return;

    const tabNavigationInnerRect = scrollableInnerRef.value.getBoundingClientRect();
    const limitTop = 0;
    const limitBottom = Math.ceil(tabNavigationInnerRect.height + scrollableInnerRef.value?.scrollTop) + 1;

    canScrollTop.value = scrollableInnerRef.value?.scrollTop > limitTop;
    canScrollBottom.value = scrollableInnerRef.value?.scrollHeight > limitBottom;
  }

  function onScroll(): void {
    update();
  }

  function scrollToTop(): void {
    if (!scrollableInnerRef.value) return;

    scrollableInnerRef.value.scrollTop = 0;
  }
</script>

<template>
  <div
    :class="{
      'scrollable-area--scrollable-top': canScrollTop,
      'scrollable-area--scrollable-bottom': canScrollBottom,
    }"
    class="scrollable-area"
  >
    <div
      ref="scrollableInnerRef"
      :style="{ 'max-height': props.height + 'px'}"
      class="scrollable-area__inner"
      @scroll="onScroll()"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .scrollable-area {
    position: relative;

    &:before,
    &:after {
      position: absolute;
      left: 0;
      z-index: 1;
      content: '';
      height: 20px;
      width: 100%;
      pointer-events: none;
      opacity: 0;
      transition: opacity .25s ease;
    }

    &:before {
      top: 0;
      background: linear-gradient(
          180deg,
          var(--scrollable-area-fade-from, rgba(255, 255, 255, 1)) 0%,
          var(--scrollable-area-fade-to, rgba(255, 255, 255, 0)) 100%
      );
    }

    &:after {
      bottom: 0;
      background: linear-gradient(
          0deg,
          var(--scrollable-area-fade-from, rgba(255, 255, 255, 1)) 0%,
          var(--scrollable-area-fade-to, rgba(255, 255, 255, 0)) 100%
      );
    }

    &__inner {
      overflow-y: auto;
      scroll-behavior: smooth;

      &::-webkit-scrollbar {
        display: none;
        width: 0;
        background: transparent;
        -webkit-appearance: none;
      }
    }

    &--scrollable-top {
      &:before {
        opacity: 1;
      }
    }

    &--scrollable-bottom {
      &:after {
        opacity: 1;
      }
    }
  }
</style>
