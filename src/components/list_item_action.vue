<template>
  <div id="listItemAction">
    <slot />
  </div>
</template>
<script>
export default {
  name: "listItemAction"
};
</script>
<style lang="scss" scoped>
#listItemAction {
  display: flex;
  align-items: center;
}
</style>