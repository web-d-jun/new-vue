<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import router from "./router";
export default {
  name: "App",

  setup() {
    router.push("/main/");
  }
};
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-y: hidden !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: inherit;
  height: inherit;
}
</style>
