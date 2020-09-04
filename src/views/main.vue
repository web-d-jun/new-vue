<template>
  <div class="main__container" >
      <div class="aos-all">
        <div data-id="3" class="aos-item" data-aos="zoom-out-down"></div>
      </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'Main',

}
</script>
<style lang="scss" scoped>
.main__container {
  width: 100%;
  height: 100%;
}


.aos-item {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  padding-top: 75px;
  background: #ccc;
  text-align: center;
  color: #FFF;
  font-size: 3em;
}

</style>