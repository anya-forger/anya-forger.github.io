import { createApp } from "vue";
import { registerSW } from "virtual:pwa-register";
import App from "./App.vue";
import "./index.css";
import { router } from "./router";

const app = createApp(App);
app.use(router);

app.mount("#app");

if ("serviceWorker" in navigator && !/localhost/.test(window.location)) {
    registerSW();
}
