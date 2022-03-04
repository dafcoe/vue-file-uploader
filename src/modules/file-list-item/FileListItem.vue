<script setup lang="ts">
  import {
    onBeforeUnmount,
    onMounted,
    ref,
  } from 'vue';
  import {
    iconCheck,
    iconFile,
    iconSync,
    colorPrimaryA,
    colorSecondaryA,
  } from '../shared/shared.constant';
  import { getSizeWithUnit } from '../shared/shared.helper';
  import ProgressBar from '../progress-bar/ProgressBar.vue';
  import { FileUploadInterface } from '../shared/shared.interface';


  interface PropsInterface {
    item: FileUploadInterface;
    uploadUrl: string;
  }

  const props = defineProps<PropsInterface>();

  const xhr = new XMLHttpRequest();

  const progress = ref(0);

  const isUploaded = ref(false);

  function onProgressBarCompleted(): void {
    isUploaded.value = true;
  }

  function uploadFile(): void {
    const formData = new FormData();

    formData.append('file', props.item.file);
    xhr.open('POST', props.uploadUrl);
    xhr.upload.addEventListener('progress', (event: ProgressEvent) => onUploadProgress(event));
    xhr.send(formData);
  }

  function onUploadProgress({ loaded, total }: ProgressEvent): void {
    progress.value = Math.floor((loaded / total) * 100);
  }

  onMounted(() => {
    uploadFile();
  });

  onBeforeUnmount(() => {
    xhr.upload.removeEventListener('progress', (event: ProgressEvent) => onUploadProgress(event));
  });
</script>

<template>
  <li
    :class="{ 'file-list-item--uploaded': isUploaded}"
    class="file-list-item"
  >
    <div class="file-list-item__icon">
      <div
        class="file-list-item__icon-file icon"
        v-html="iconFile"
      />
      <div
        class="file-list-item__icon-status icon"
        v-html="isUploaded ? iconCheck : iconSync"
      />
    </div>

    <div class="file-list-item__detail">
      <div class="file-list-item__name">
        {{ props.item.file.name }}
      </div>
      <ProgressBar
        :percentage="progress"
        class="file-list-item__progress"
        @completed="onProgressBarCompleted"
      >
        {{ getSizeWithUnit(props.item.file.size) }}
        <span class="file-list-item__progress-percentage">
          &nbsp;&#10072;&nbsp;&nbsp;{{ progress }}%
        </span>
      </ProgressBar>
    </div>
  </li>
</template>

<style scoped lang="scss">
  .file-list-item {
    $root: &;

    display: flex;
    align-items: center;
    padding: 10px;
    list-style: none;
    background-color: var(--file-list-item-bg-color, v-bind(colorSecondaryA));
    border-radius: 6px;
    animation: slide-bottom .25s cubic-bezier(.250, .460, .450, .940) both;

    &__icon {
      position: relative;
      height: 40px;
      width: 40px;

      &::after {
        position: absolute;
        right: 3px;
        bottom: -1px;
        z-index: 1;
        content: '';
        border-radius: 50%;
        height: 12px;
        width: 12px;
        background-color: white;
      }
    }

    &__icon-file {
      height: 40px;
      width: 40px;
      color: var(--file-list-item-icon-file-color, v-bind(colorPrimaryA));
    }

    &__icon-status {
      position: absolute;
      right: 0;
      bottom: -4px;
      z-index: 2;
      height: 18px;
      width: 18px;
      color: var(--file-list-item-icon-status-syncing-color, #246fff);
      animation: spin 2.5s linear infinite;
    }

    &__detail {
      flex: 1;
      padding: 0 4px 0 10px;
    }

    &__name {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-size: 14px;
      font-weight: 500;
      color: var(--file-list-item-name-color, #333);
    }

    &__progress {
      display: flex;
      align-items: center;
      margin-top: 9px;
    }

    &__progress-percentage {
      transition: opacity .25s ease;
    }

    &--uploaded {
      animation: blink .35s .4s both;

      #{$root}__icon-status {
        color: var(--file-list-item-icon-status-synced-color, #589f00);
        animation: none;
      }

      #{$root}__progress-percentage {
        opacity: 0;
      }
    }
  }

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes blink {
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }
</style>
