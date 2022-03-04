<script setup lang="ts">
  import { nextTick, ref } from 'vue';
  import { nanoid } from 'nanoid';
  import FileInput from '../file-input/FileInput.vue';
  import FileList from '../file-list/FileList.vue';
  import ScrollableArea from '../scrollable-area/ScrollableArea.vue';
  import { colorPrimaryA } from '../shared/shared.constant';
  import { FileUploadInterface } from '../shared/shared.interface';

  interface PropsInterface {
    uploadUrl: string;
    heading?: string;
    label?: string;
  }

  const props = withDefaults(defineProps<PropsInterface>(), {
    heading: 'File Uploader',
    label: 'browse files or drop them here',
  });

  const uploadFileList = ref<FileUploadInterface[]>([]);

  const scrollableAreaRef = ref<InstanceType<typeof ScrollableArea>>();

  async function onFileInputChange(uploadFiles: File[]): Promise<void> {
    uploadFileList.value = [
      ...uploadFiles.map((file) => ({
        id: nanoid(),
        file,
      })),
      ...uploadFileList.value,
    ];

    await nextTick();
    updateScrollableArea();
  }

  function updateScrollableArea(): void {
    (scrollableAreaRef.value as any)?.update();
    (scrollableAreaRef.value as any)?.scrollToTop();
  }
</script>

<template>
  <section class="file-uploader">
    <h1
      v-if="props.heading"
      class="file-uploader__heading"
    >
      {{ props.heading }}
    </h1>
    <FileInput
      :label="props.label"
      @file-input-change="onFileInputChange($event)"
    />
    <ScrollableArea
      v-if="uploadFileList.length"
      ref="scrollableAreaRef"
      class="file-uploader__list-wrapper"
    >
      <FileList
        :items="uploadFileList"
        :upload-url="props.uploadUrl"
      />
    </ScrollableArea>
  </section>
</template>

<style scoped lang="scss">
  .file-uploader {
    padding: 16px;
    width: 400px;
    background-color: var(--file-uploader-bg-color, white);
    border-radius: 10px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04);

    &__heading {
      margin: 0 0 16px;
      text-align: center;
      font-size: 1.75rem;
      color: var(--file-uploader-heading-color, v-bind(colorPrimaryA));
    }

    &__list-wrapper {
      margin-top: 16px;
    }
  }
</style>

<style lang="scss">
  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  .file-uploader {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
  }

  .icon {
    svg {
      height: 100%;
      width: 100%;
    }
  }
</style>
