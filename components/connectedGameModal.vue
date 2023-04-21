<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask" id="connectedGameId">
      <div class="modal-wrapper">
        <div class="homedeliqrmodal-container">
          <div class="homedeliqrmodal-body">
            <slot name="body">
              <el-carousel height="420px" class="mobile-css" :interval="5000" arrow="always" :autoplay="false" @change="activeCarousel">
                <el-carousel-item v-for="(item, index) in sendtoPopup" :key="index">
                  <img src="../assets/pc/game11.png" class="qrleft-img">
                  <div class="green-btn">
                    <span class="green-text">{{item.situation}}</span>
                  </div>
                  <p class="locking-date">連動時間:{{item.lockingTime}}</p>
                  <p class="locking-title">{{item.title}}</p>
                  <div class="lock-price-block">
                    <p class="locking-price">米茲幣：65,161,284</p>
                    <p class="locking-price">≈1,680 PK</p>
                  </div>
                  <div class="red-btn" @click="gotoLogin">
                    <span class="red-txt">取消連動</span>
                  </div>
                  <div class="pupple-btn">
                    <span class="pupple-txt" @click="$emit('close')">關閉</span>
                  </div>
                </el-carousel-item>
              </el-carousel>
              <el-carousel height="500px" class="pc-css" :interval="5000" arrow="always" :autoplay="false" @change="activeCarousel">
                <el-carousel-item v-for="(item, index) in sendtoPopup" :key="index">
                  <img src="../assets/pc/game11.png" class="qrleft-img">
                  <div class="green-btn">
                    <span class="green-text">{{item.situation}}</span>
                  </div>
                  <p class="locking-date">連動時間:{{item.lockingTime}}</p>
                  <p class="locking-title">{{item.title}}</p>
                  <div class="lock-price-block">
                    <p class="locking-price">米茲幣：65,161,284</p>
                    <p class="locking-price">≈1,680 PK</p>
                  </div>
                  <div class="red-btn" @click="gotoLogin">
                    <span class="red-txt">取消連動</span>
                  </div>
                  <div class="pupple-btn">
                    <span class="pupple-txt" @click="$emit('close')">關閉</span>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </slot>
              
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
export default {
  data() {
    return {
      items: [1, 2 , 3],
      currentIndex: 0,
      oldIndex: null,
      activeSlide: 0
    };
  },
  props: ["show", "sendtoPopup", "currentSlide"],
  methods: {
    activeCarousel(activeIndex, oldActiveIndex) {
      this.currentIndex = activeIndex
      this.oldIndex = oldActiveIndex
      this.activeSlide = activeIndex;
      this.$emit("activemSlide", activeIndex);
    },
    gotoLogin() {
      this.$router.push('gameLogin')
    }
  }
}
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 112;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(57, 47, 134, 0.62);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  display: table;
  transition: opacity 0.3s ease;
}
#connectedGameId {
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__arrow--left {
    left: 0px !important;
    left: 3% !important;
    display: block !important;
    color: #333 !important;
    color: rgba(255, 255, 255, 0.5) !important;
    font-size: 1.5rem !important;
    font-weight: bold !important;
    background: none;
  }
  .el-carousel__arrow--right {
    right: 0px !important;
    right: 3% !important;
    color: #333 !important;
    color: rgba(255, 255, 255, 0.5) !important;
    font-size: 1.5rem !important;
    font-weight: bold !important;
    background: none;
    @media screen and (max-width: 768px)  {
      display: block !important;
    }
  }
  .qrleft-img {
    width: 100%;
    position: relative;
  }
  .green-btn {
    background: #00DD73;
    position: absolute;
    right: 30px;
    top: 24px;
    height: 19px;
    width: 66px;
    display: flex;
    justify-content: center;
    .green-text {
      font-weight: 400;
      font-size: 12px;
      color: #FFF;
    }
  }
  .locking-date {
    font-weight: 400;
    font-size: 12px;
    color: #DAD4F2;
    text-align: left;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .locking-title {
    font-weight: 400;
    font-size: 16px;
    color: #2c2c2c;
    text-align: left;
    margin-bottom: 5px;
  }
  .lock-price-block {
    padding: 10px 0;
    text-align: right;
    .locking-price {
      font-weight: 400;
      font-size: 14px;
      color: #7161EF;
      margin-bottom: 0px;
    }
  }
  .red-btn {
    height: 17px;
    border: 1px solid #FF005A;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .red-txt {
      font-weight: 400;
      font-size: 12px;
      color: #FF206F;
    }
  }
  .pupple-btn {
    margin-top: 1.5rem;
    position: absolute;
    bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(85% - 10px); 
    @media screen and (max-width: 768px)  {
      width: calc(70% + 10px);
    }
    .pupple-txt {
      font-weight: 400;
      font-size: 12px;
      color: #957FEF;
    }
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .homedeliqrmodal-container {
    width: 500px;
    margin: 0px auto;
    padding: 20px 10px;
    // background-color: #fff;
    transition: all 0.3s ease;
    // box-shadow: 0px 4px 4px rgba(33, 66, 116, 0.25);
    // backdrop-filter: blur(2px);
    border-radius: 12px;
    @media screen and (max-width: 768px)  {
      width: 100%;
      // height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  .homedeliqrmodal-body {
    margin: 0;
    // background: #FFF;
    margin-top: 0;
    border-radius: 5px;
    font-size: 0.75rem;
    text-align: center;
    padding: 1rem 0 !important;

    // margin: auto;
    // z-index: 100;
  }
  .mobile-css {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      width: 350px;
    }
  }
  .pc-css {
    width: 500px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .el-carousel__item.is-active.is-animating {
    width: calc(70% - 20px);
    background: #FFF;
    margin-left: calc(15% + 10px);
    border-radius: 12px;
    padding: 24px 30px;
  }

  /*
  * The following styles are auto-applied to elements with
  * transition="modal" when their visibility is toggled
  * by Vue.js.
  *
  * You can easily play with the modal transition by editing
  * these styles.
  */

  .modal-enter-from {
    opacity: 0;
  }

  .modal-leave-to {
    opacity: 0;
  }

  .modal-enter-from .homedeliqrmodal-container,
  .modal-leave-to .homedeliqrmodal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}
</style>

<!-- 
https://vuejs.org/examples/#modal
https://dev.to/davidemaye/how-to-create-a-modal-component-in-nuxt-38g1
https://fsymbols.com/keyboard/windows/alt-codes/list/
 -->
