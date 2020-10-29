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
import * as MutationTypes from "./store/mutation-types";
AOS.init({
  duration: 1200,
});

const app = createApp(App);
firebase.initializeApp(fireBaseConfig);
app.use(router);
app.use(store);
app.provide("routerSymbol", router);
app.provide("firebaseSymbol", firebase);
app.provide("Comm", Comm);
app.provide("MutationTypes", MutationTypes);
router.isReady().then(() => app.mount("#app"));
