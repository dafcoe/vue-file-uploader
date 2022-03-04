<script setup lang="ts">
  import { ref } from 'vue';
  import {
    colorPrimaryA,
    colorPrimaryB,
    iconCloud,
  } from '../shared/shared.constant';

  interface PropsInterface {
    label: string;
  }

  const props = defineProps<PropsInterface>();

  const emit = defineEmits<{
    (e: 'file-input-change', uploadFiles: File[]): void,
  }>();

  const formRef = ref<HTMLFormElement>();

  const inputRef = ref<HTMLInputElement>();

  function onFormClick(): void {
    inputRef.value?.click();
  }

  function onFormDrop(event: DragEvent): void {
    const files = Array.from(event.dataTransfer?.files || []);

    if (!files.length) return;

    emit('file-input-change', files);
    formRef.value?.classList.remove('file-input--active');
  }

  function onFormDragOver(): void {
    formRef.value?.classList.add('file-input--active');
  }

  function onFormDragLeave(): void {
    formRef.value?.classList.remove('file-input--active');
  }

  function onInputChange(): void {
    const files = Array.from(inputRef.value?.files || []);

    if (!files.length) return;

    emit('file-input-change', files);
    formRef.value?.reset();
  }
</script>

<template>
  <form
    ref="formRef"
    class="file-input"
    @click="onFormClick()"
    @drop.prevent="onFormDrop($event)"
    @dragover.prevent="onFormDragOver()"
    @dragleave.prevent="onFormDragLeave()"
  >
    <span
      class="file-input__icon icon"
      v-html="iconCloud"
    />
    <div
      v-if="props.label"
      class="file-input__label"
    >
      {{ props.label }}
    </div>
    <input
      ref="inputRef"
      type="file"
      multiple
      class="file-input__input"
      @change="onInputChange()"
    >
  </form>
</template>

<style scoped lang="scss">
  .file-input {
    $root: &;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    border: 1px dashed var(--file-input-border-color, v-bind(colorPrimaryA));
    border-radius: 6px;
    height: 132px;
    cursor: pointer;

    &__icon {
      height: 80px;
      width: 80px;
      color: var(--file-input-icon-color, v-bind(colorPrimaryB));
      transition: transform .25s ease;
    }

    &__label {
      margin-bottom: 10px;
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--file-input-label-color, v-bind(colorPrimaryB));
      transition: all .25s ease;
    }

    &__input {
      display: none;
    }

    &--active,
    &:hover {
      #{$root} {
        &__icon {
          color: var(--file-input-icon-color-hover, v-bind(colorPrimaryA));
          transform: scale(1.25);
        }

        &__label {
          color: var(--file-input-label-color-hover, v-bind(colorPrimaryA));
        }
      }
    }
  }
</style>
