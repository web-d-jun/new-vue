<template>
  <div id="appContainer">
    <router-view />
  </div>
</template>
<script>
import { inject } from 'vue';
export default {
  name: 'App',

  setup() {
    const localforage = inject('localforage');
    localforage.setItem('test', { test: '111' });
    const getLocalforage = async () => {
      const test =  await localforage.getItem('test');
      // console.log(test,'test')
      return test
    };
    // console.log(getLocalforage());
    // router.push("/main/");
    // router.push('recentPage')
  },
};
</script>
<style>
* {
  font-family: 'Noto Sans CJK KR';
}
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  font-size: 10px;
  -webkit-tap-highlight-color: transparent;
}

#app,
#appContainer {
  font-family: Avenir, Helvetica, Arial, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: inherit;
  height: inherit;
}
</style>
