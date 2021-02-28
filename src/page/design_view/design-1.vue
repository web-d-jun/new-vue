<template>
  <div class="container">
    <div class="main__contents">
      <img :src="require('@/assets/img/design/background2.jpg')" alt="" class="background-image" />
      <div class="header">
        <div class="logo"></div>
        <div class="navigation__contents">
          <div class="navigation navigation--default">Home</div>
          <div class="navigation navigation--default">about</div>
          <div class="navigation navigation--default">service</div>
          <div class="navigation navigation--default">contact</div>
          <div class="navigation navigation--button">문의하기</div>
        </div>
      </div>
      <div class="body">body</div>
    </div>
    <div class="sub__contents">sub</div>
  </div>
</template>

<script>
export default {
  name: 'Design-1',
};
</script>
<style lang="scss" scpoed>
$main-contents-height: 500px;
.container {
  user-select: none;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 10px 20px;
  .main__contents {
    width: 100%;
    height: $main-contents-height;
    border: 1px solid;
    position: relative;
    .background-image {
      width: 100%;
      height: $main-contents-height;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      z-index: -1;
      background: transparent;
      opacity: 0.7;
      object-fit: cover;
    }

    .header {
      height: 80px;
      border: 1px solid;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      .navigation__contents {
        display: flex;

        .navigation {
          width: 100px;
          font-size: 20px;
          color: $defaultColor;
        }
      }
    }
  }
  .sub__contents {
    width: 100%;
  }
}
</style>
