import { createApp } from 'vue'
import App from './App.vue'
import VueFileUploader from './modules/VueFileUploaderPlugin';

const app = createApp(App);

app.use(VueFileUploader);
app.mount('#app');
