import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import * as firebase from "firebase/app";
import "firebase/auth";
import fireBaseConfig from "./plugins/firebase";
import './registerServiceWorker.ts';
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init({
  duration: 1200,
});

const app = createApp(App);
firebase.initializeApp(fireBaseConfig);
app.use(router);
app.use(store);
app.provide("routerSymbol", router);
app.provide("firebaseSymbol", firebase);

router.isReady().then(() => app.mount("#app"));

