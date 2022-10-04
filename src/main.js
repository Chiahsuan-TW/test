import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import { router } from "./plugins";
// 沒有將檔案集中管理至plugin資料夾底下的index.js則直接依照路徑引入會出的檔案
// import router from "./plugins/vue-router"

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
