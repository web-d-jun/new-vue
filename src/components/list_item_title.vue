<template>
  <div id="listItemTitle">
    <slot />
  </div>
</template>
<script>
export default {
  name: "ListItemTitle"
};
</script>
<style lang="scss" scoped>
#listItemTitle {
  font-size: 20px;
}
</style>