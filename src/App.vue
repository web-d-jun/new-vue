<template>
  <div id="appContainer">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',

  setup() {
    // router.push("/main/");
    // router.push('recentPage')
  },
};
</script>
<style>
* {
  font-family:  'Noto Sans CJK KR'
}
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
}

#app, #appContainer {
  font-family: Avenir, Helvetica, Arial, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: inherit;
  height: inherit;
}
</style>
