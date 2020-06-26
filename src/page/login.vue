<template>
  <div id="loginContainer">
    <div class="left-contents">Welcome to my world</div>
    <div class="right-contents">
      <j-input :label="'11'">111</j-input>
    </div>
    <!-- <button type="button" @click="handleLogin">Login</button> -->
  </div>
</template>
<script lang="ts">
import { inject } from "vue";
import jInput from "@/components/input/j_input.vue";
export default {
  name: "loginContainer",
  components: {
    jInput
  },
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
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Piedra&display=swap");
#loginContainer {
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 20px;
  .left-contents {
    flex: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-image: url("../assets/default/background2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    justify-content: center;
    font-size: 5em;
    font-family: "Piedra", cursive;
  }
  .right-contents {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>