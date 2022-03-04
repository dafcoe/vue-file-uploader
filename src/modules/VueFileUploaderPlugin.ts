import type { App } from "vue";
import { default as VueFileUploader } from "./file-uploader/FileUploader.vue";

export default {
  install: (app: App) => {
    app.component("VueFileUploader", VueFileUploader);
  },
};
