<template>
  <div class="loginContainer" v-if="deviceMode === 'pc'">
    <div class="left-contents">I A M</div>
    <div class="flip-container">
      <div class="right-contents" :class="[{ flip: signUpMode }]">
        <j-input :label="'아이디를 입력하세요'" :mode="'input'" :placeholder="'이메일을 입력하세요.'" :value="'testt'" />
        <j-input :label="'비밀번호를 입력하세요'" :mode="'number'" :placeholder="'비밀번호를 입력하세요.'" :value="'testtest'" />
        <div class="button-wrap">
          <div class="button-container">
            <button class="button" @click="handleSignIn">로그인</button>
            <button class="button" @click="handleSignUp">새로가입</button>
          </div>
        </div>
      </div>
      <div class="sign-up-container" :class="[{ flip: !signUpMode }]">
        <div class="sign-up-contents">
          <j-input :label="'아이디'" :mode="'input'" :value="personInfo.id" @input="(val) => (personInfo.id = val.target.value)" :placeholder="'ex) cjy874545@gamil.com'" />
          <j-input :label="'비밀번호'" :mode="'number'" :value="personInfo.pw" @input="(val) => (personInfo.pw = val.target.value)" :placeholder="'비밀번호를 입력하세요.'" />
          <div class="button-wrap">
            <div class="button-container">
              <button class="button" @click="handleSignUpSave">가입하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <button type="button" @click="handleLogin">Login</button> -->
  </div>
  <div class="loginContainer" v-if="deviceMode === 'mob'">
    <div class="left-contents mobile">
      <div class="logo-container">
        <img :src="require('../assets/img/logo.png')" alt="" style="width: 100px; height: 100px" />
      </div>
      <div class="flip-container">
        <div class="right-contents" :class="[{ flip: signUpMode }]">
          <j-input :label="'아이디를 입력하세요'" :mode="'input'" :placeholder="'이메일을 입력하세요.'" :value="'testt'" />
          <j-input :label="'비밀번호를 입력하세요'" :mode="'number'" :placeholder="'비밀번호를 입력하세요.'" :value="'testtest'" />
          <div class="button-wrap">
            <div class="button-container">
              <button class="button" @click="handleSignIn">로그인</button>
              <button class="button" @click="handleSignUp">새로가입</button>
            </div>
          </div>
        </div>
        <div class="sign-up-container" :class="[{ flip: !signUpMode }]">
          <div class="sign-up-contents">
            <j-input :label="'아이디'" :mode="'input'" :value="personInfo.id" @input="(val) => (personInfo.id = val.target.value)" :placeholder="'ex) cjy874545@gamil.com'" />
            <j-input :label="'비밀번호'" :mode="'number'" :value="personInfo.pw" @input="(val) => (personInfo.pw = val.target.value)" :placeholder="'비밀번호를 입력하세요.'" />
            <div class="button-wrap">
              <div class="button-container">
                <button class="button" @click="handleSignUpSave">가입하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, ref, reactive } from 'vue';
import jInput from '@/components/input/JInput.vue';
interface PersonInfo {
  id: string;
  pw: string;
}
export default {
  name: 'loginContainer',
  components: {
    jInput,
  },
  setup() {
    const router = inject('routerSymbol', [{}]);
    // const firebase = inject("firebaseSymbol", "");

    const signUpMode = ref(false);
    const deviceMode = ref('pc');

    if (window.innerWidth <= 1390) {
      deviceMode.value = 'mob';
    }

    const personInfo: PersonInfo = reactive({
      id: '',
      pw: '',
    });

    const useHandleLogin = () => {
      const handleSignIn = () => {
        console.log('login');
        router.push('/default/dashboard');
      };
      const handleSignUp = () => {
        signUpMode.value = true;
      };
      const handleSignUpSave = () => {
        signUpMode.value = false;
        
        console.log('저장!');
      };
      return { handleSignIn, handleSignUp, handleSignUpSave };
    };

    const { handleSignIn, handleSignUp, handleSignUpSave } = useHandleLogin();
    return {
      personInfo,
      handleSignIn,
      handleSignUp,
      handleSignUpSave,
      signUpMode,
      deviceMode,
    };
  },
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Piedra&display=swap');
.loginContainer {
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
    background-image: url('../assets/default/background2.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    justify-content: center;
    font-size: 5em;
    font-family: 'Piedra', cursive;
    &.mobile {
      font-size: 1.3em;
      flex: 1;
      width: 100%;
      font-family: Georgia, 'Malgun Gothic', serif;
      display: flex;
      align-items: center;
      .logo-container {
        padding-top: 50px;
      }
      .flip-container {
        display: flex;
        align-items: center;
      }
      .right-contents {
        height: 80%;
        .input-container {
          border-bottom: 1px solid rgb(236, 236, 236);
        }
      }
    }
  }
  .flip-container {
    flex: 1;
    padding: 30px 80px 80px 80px;
    position: relative;
    .right-contents {
      display: flex;
      flex-direction: column;
      transition: all 0.5s ease-in;
      height: 100%;
      &.flip {
        transform: rotateY(-90deg);
        transition: all 0.3s ease-in;
      }
    }
    .sign-up-container {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      transform: rotateY(0deg);
      transition: all 0.5s ease-in;
      &.flip {
        transform: rotateY(-90deg);
        transition: all 0.3s ease-in;
      }
      .sign-up-contents {
        padding: 80px;
        display: flex;
        flex-direction: column;
        transition: all 0.5s ease-in;
        height: 100%;
      }
    }
  }
}
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
  background: linear-gradient(45deg, #d5007d, #e53935);
  position: relative;
  &:hover {
    cursor: pointer;
    background: linear-gradient(45deg, #d5007d, #e53935);
    transition: all 0.5ms ease-in;
  }
}
</style>