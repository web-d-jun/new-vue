<template>
  <div id="listItemAction">
    <slot />
  </div>
</template>
<script>
export default {
  name: "JListItemAction"
};
</script>
<style lang="scss" scoped>
#listItemAction {
  display: flex;
  align-items: center;
  margin-right: 10px;
}
</style>