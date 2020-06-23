<template>
  <div id="loginContainer">
    loginContainer
    <button type="button" @click="handleLogin">Login</button>
  </div>
</template>
<script lang="ts">
import { inject } from "vue";
export default {
  name: "loginContainer",
  setup() {
    const router = inject("routerSymbol", [{}]);

    const useHandleLogin = () => {
      const handleLogin = () => {
        console.log(router.push("/default/"));
      };
      return { handleLogin };
    };
    const { handleLogin } = useHandleLogin();
    return {
      handleLogin
    };
  }
};
</script>
<style lang="scss">
#loginContainer {
  width: 100%;
  height: 100%;
}
</style>