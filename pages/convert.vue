<template>
  <div class="comingsoon">
    <div class="inner-div">
      Coming Soon
    </div>
  </div>
</template>
<script>
export default {
  name: 'ConvertPage',
}
</script>
<style lang="scss" scoped>
.comingsoon {
  height: 100vh;
  background: #b79ced;
  .inner-div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    font-size: 2rem;
    color: #FFF;
  }
}
</style>