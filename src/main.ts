import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import * as firebase from "firebase/app";
import "firebase/auth";
import fireBaseConfig from "./plugins/firebase";
import "./registerServiceWorker.ts";
import AOS from "aos";
import "aos/dist/aos.css";
import * as Comm from "./assets/ts/common";

AOS.init({
  duration: 1200,
});

const app = createApp(App);
firebase.initializeApp(fireBaseConfig);
app.use(router);
app.use(store);
app.provide("routerSymbol", router);
app.provide("firebaseSymbol", firebase);
app.provide('Comm', Comm)
router.isReady().then(() => app.mount("#app"));
