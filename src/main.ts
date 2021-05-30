import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import fireBaseConfig from './plugins/firebase';
import './registerServiceWorker.ts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as Comm from './assets/ts/common';
import * as MutationTypes from './store/mutation-types';
import * as Filters from '@/common/ts/filters';
import * as dayjs from 'dayjs';

AOS.init({
  duration: 1200,
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  store.commit(MutationTypes.MutationTypes.CHANGE_IS_MOBILE, true);
} else {
  store.commit(MutationTypes.MutationTypes.CHANGE_IS_MOBILE, false);
}

const app = createApp(App);
firebase.initializeApp(fireBaseConfig);

app.config.globalProperties.$filters = {
  ...Filters,
};

app.use(router);
app.use(store);
app.provide('routerSymbol', router);
app.provide('firebaseSymbol', firebase);
app.provide('Comm', Comm);
app.provide('MutationTypes', MutationTypes);
app.provide('dayjs', dayjs);
// app.config.globalProperties.$dayjs = dayjs;
router.isReady().then(() => {
  app.mount('#app');
});
