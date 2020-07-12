import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import * as firebase from "firebase/app";
import "firebase/auth";
import fireBaseConfig from "./plugins/firebase";
const app = createApp(App);
firebase.initializeApp(fireBaseConfig);
app.use(router);
app.use(store);
app.provide("routerSymbol", router);
app.provide("firebaseSymbol", firebase);

router.isReady().then(() => app.mount("#app"));
