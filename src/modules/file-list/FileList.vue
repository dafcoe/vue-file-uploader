<script setup lang="ts">
  import FileListItem from '../file-list-item/FileListItem.vue';
  import { FileUploadInterface } from '../shared/shared.interface';

  interface PropsInterface {
    items: FileUploadInterface[];
    uploadUrl: string;
  }

  const props = defineProps<PropsInterface>();
</script>

<template>
  <ul class="file-list">
    <FileListItem
      v-for="item in props.items"
      :key="item.id"
      :item="item"
      :upload-url="props.uploadUrl"
    />
  </ul>
</template>

<style scoped lang="scss">
  .file-list {
    margin: 0;
    padding: 0;
  }

  :deep(.file-list-item) {
    &:not(:first-of-type) {
      margin-top: 10px;
    }
  }
</style>
