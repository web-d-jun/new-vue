<template>
  <div id="loginContainer">
    <div class="left-contents">Welcome to my world</div>
    <div class="right-contents">
      <j-input :label="'아이디를 입력하세요'" :mode="'input'" />
      <j-input :label="'비밀번호를 입력하세요'" :mode="'number'" />
      <div class="button-wrap">
        <div class="button-container">
          <button class="button" @click="handleSignIn">로그인</button>
          <button class="button" @click="handleSignUp">새로가입</button>
        </div>
      </div>
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
      const handleSignIn = () => {
        console.log(router.push("/default/"));
      };
      const handleSignUp = () => {
        console.log("handleSignUp");
      };
      return { handleSignIn, handleSignUp };
    };

    const { handleSignIn, handleSignUp } = useHandleLogin();
    return {
      handleSignIn,
      handleSignUp
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
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  .left-contents {
    flex: 3;
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
    padding: 80px;
    .button-wrap {
      display: flex;
      flex: 1;
      align-items: flex-end;
      flex-wrap: wrap;
      .button-container {
        width: 100%;
      }
    }
    .button {
      width: 100%;
      height: 50px;
      border: 1px solid transparent;
      outline: 0;
      border-radius: 10px;
      color: #fff;
      transition: all 0.5ms ease-in;
      font-size: 20px;
      margin-bottom: 10px;
      &:hover {
        cursor: pointer;
        background: linear-gradient(45deg, #d5007d, #e53935);
        transition: all 0.5ms ease-in;
      }
    }
  }
}
</style>