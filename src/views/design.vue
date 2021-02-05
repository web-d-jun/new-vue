<template>
  <div class="design__container">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'Design',
  setup() {
    return {}
  }
};
</script>
<style lang="scss" scoped>
.design__container {
  width: 100%;
  border: 1px solid red;
}
</style>