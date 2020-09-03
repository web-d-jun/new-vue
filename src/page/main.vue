<template>
<div class="main__container"  @click="handle">
   <div class="js-scroll-counter scroll-counter"></div>
    <div class="aos-all">
      <div data-id="1" class="aos-item" data-aos="fade-up"></div>
      <div data-id="2" class="aos-item" data-aos="fade-down"></div>
      <div data-id="3" class="aos-item" data-aos="zoom-out-down"></div>
      <div data-id="4" class="aos-item" data-aos="flip-down"></div>
      <div data-id="5" class="aos-item" data-aos="flip-up"></div>
      <div data-id="6" class="aos-item" data-aos="fade-down"></div>
      <div data-id="7" class="aos-item" data-aos="fade-in"></div>
      <div data-id="8" class="aos-item" data-aos="fade-down"></div>
      <div data-id="9" class="aos-item" data-aos="fade-in"></div>
      <div data-id="10" class="aos-item" data-aos="fade-down" data-aos-id="super-duper"></div>
      <div data-id="11" class="aos-item" data-aos="fade-up"></div>
      <div data-id="12" class="aos-item" data-aos="fade-down"></div>
      <div data-id="13" class="aos-item" data-aos="fade-in"></div>
      <div data-id="14" class="aos-item" data-aos="fade-up"></div>
      <div data-id="15" class="aos-item" data-aos="fade-in"></div>
      <div data-id="16" class="aos-item" data-aos="fade-up"></div>
      <div data-id="17" class="aos-item" data-aos="fade-down"></div>
      <div data-id="18" class="aos-item" data-aos="fade-up"></div>
      <div data-id="19" class="aos-item" data-aos="zoom-out"></div>
      <div data-id="20" class="aos-item" data-aos="fade-up"></div>
      <div data-id="21" class="aos-item" data-aos="zoom-out"></div>
      <div data-id="22" class="aos-item" data-aos="fade-in"></div>
      <div data-id="23" class="aos-item" data-aos="zoom-out-up"></div>
      <div data-id="24" class="aos-item" data-aos="zoom-out-down"></div>
    </div>
</div>
</template>
<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'Main',

  setup() {
    const test = ref(false);
    const handle = () => {
      test.value = true;
    }

    return {
      test,
      handle
    }
  }
}
</script>
<style lang="scss" scoped>
.main__container {
  height: 900px;
  overflow: auto;
}


.aos-item {
  width: 200px;
  height: 200px;
  margin: 50px auto;
  padding-top: 75px;
  background: #ccc;
  text-align: center;
  color: #FFF;
  font-size: 3em;
}

</style>