<template>
  <div id="listItem">
    <slot />
  </div>
</template>
<script>
export default {
  name: "ListItem"
};
</script>
<style lang="scss" scoped>
#listItem {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  height: 50px;
  color: rgb(199, 199, 199);
}
</style>
