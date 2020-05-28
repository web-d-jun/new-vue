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
    router.push("/default/dashboard");
  }
};
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
