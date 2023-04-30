import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routers/index";
import { createPinia } from "pinia";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const pinia = createPinia();

const app = createApp(App);
app.component("VueDatePicker", VueDatePicker);
app.use(router);
app.use(pinia);
app.mount("#app");
