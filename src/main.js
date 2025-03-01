import "./assets/main.css";
import "primeicons/primeicons.css";

import router from "@/router";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import { createApp } from "vue";
import App from "./App.vue";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);

app.use(router);
app.use(VueSweetalert2);
app.use(Toast);

app.mount("#app");
