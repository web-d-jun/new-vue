import { createApp, inject } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
const app = createApp(App);
app.use(router);
app.use(store);
app.provide('routerSymbol', router);


router.isReady().then(() => app.mount("#app"));
