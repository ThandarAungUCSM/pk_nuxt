<template>
  <div id="convertId" >
    <transition name="modal">
      <div v-if="show" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-body">
              <slot name="body">
                <div class="title-row">
                  <p class="hide-text pc-css">hi</p>
                  <img class="return-css mobile-css" src="../assets/mobile/btn-return1.png" @click="$emit('close')" />
                  <p class="title-text">選擇優惠券</p>
                  <img class="close-icon pc-css" src="../assets/pc/close-icon.png" @click="$emit('close')" />
                  <p class="hide-text mobile-css">hi</p>
                </div>
                <div class="coupon-block mobile-css">
                  <input v-model="couponCode" type="text" class="coupon-code" onfocus="this.placeholder=''" placeholder="輸入優惠券代碼" />
                  <p class="useBtn">使用</p>
                </div>
                <div class="parent-block">
                  <div class="each-block">
                    <div class="each-left">
                      <img class="ellipse-icon" src="../assets/pc/active-ellipse.png" />
                      <div>
                        <p class="discount-ellipse">折$5 PK幣</p>
                        <p class="min-spend">低消$100</p>
                        <p class="expired-date">有效期限2025.07.31</p>
                      </div>
                    </div>
                    <div class="each-right">
                      <p class="hide-text1">hi</p>
                      <div class="right-inner">
                        <p class="hide-text2">hi</p>
                        <p v-if="!(isCheck[0])" class="circle-css" @click="checkFunc(0)"></p>
                        <p v-else class="circle-color-css" @click="checkFunc(0)">
                          <img class="correct-check" src="../assets/mobile/check-white.png" />
                        </p>
                        <p class="rule-use">使用規則</p>
                      </div>
                      <img class="ellipse-icon1" src="../assets/pc/active-ellipse.png" />
                    </div>
                  </div>
                  <div class="each-block">
                    <div class="each-left">
                      <img class="ellipse-icon" src="../assets/pc/active-ellipse.png" />
                      <div>
                        <p class="discount-ellipse">折$10 PK幣</p>
                        <p class="min-spend">低消$200</p>
                        <p class="expired-date">有效期限2025.07.31</p>
                      </div>
                    </div>
                    <div class="each-right">
                      <p class="hide-text1">hi</p>
                      <div class="right-inner">
                        <p class="hide-text2">hi</p>
                        <p v-if="!isCheck[1]" class="circle-css" @click="checkFunc(1)"></p>
                        <p v-else class="circle-color-css" @click="checkFunc(1)">
                          <img class="correct-check" src="../assets/mobile/check-white.png" />
                        </p>
                        <p class="rule-use">使用規則</p>
                      </div>
                      <img class="ellipse-icon1" src="../assets/pc/active-ellipse.png" />
                    </div>
                  </div>
                  <div class="each-block">
                    <div class="each-left">
                      <img class="ellipse-icon" src="../assets/pc/active-ellipse.png" />
                      <div>
                        <p class="discount-ellipse">折$5 PK幣</p>
                        <p class="min-spend">低消$100</p>
                        <p class="expired-date">有效期限2025.07.31</p>
                      </div>
                    </div>
                    <div class="each-right">
                      <p class="hide-text1">hi</p>
                      <div class="right-inner">
                        <p class="hide-text2">hi</p>
                        <p class="btn-css">領取</p>
                        <p class="rule-use">使用規則</p>
                      </div>
                      <img class="ellipse-icon1" src="../assets/pc/active-ellipse.png" />
                    </div>
                  </div>
                  <div class="each-block">
                    <div class="each-left">
                      <img class="ellipse-icon" src="../assets/pc/noactive-ellipse.png" />
                      <div>
                        <p class="discount-ellipse">折$5 PK幣</p>
                        <p class="min-spend">低消$100</p>
                        <p class="expired-date">有效期限2025.07.31</p>
                      </div>
                    </div>
                    <div class="each-right">
                      <p class="hide-text1">hi</p>
                      <div class="right-inner">
                        <p class="hide-text2">hi</p>
                        <p class="btn1-css">領取</p>
                        <p class="rule-use">使用規則</p>
                      </div>
                      <img class="ellipse-icon1" src="../assets/pc/noactive-ellipse.png" />
                    </div>
                  </div>
                  <div class="each-block">
                    <div class="each-left">
                      <img class="ellipse-icon" src="../assets/pc/active-ellipse.png" />
                      <div>
                        <p class="discount-ellipse">折$5 PK幣</p>
                        <p class="min-spend">低消$100</p>
                        <p class="expired-date">有效期限2025.07.31</p>
                      </div>
                    </div>
                    <div class="each-right">
                      <p class="hide-text1">hi</p>
                      <div class="right-inner">
                        <p class="hide-text2">hi</p>
                        <p class="btn-css">領取</p>
                        <p class="rule-use">使用規則</p>
                      </div>
                      <img class="ellipse-icon1" src="../assets/pc/active-ellipse.png" />
                    </div>
                  </div>
                </div>
                <div class="coupon-block pc-css">
                  <input v-model="couponCode" type="text" class="coupon-code" onfocus="this.placeholder=''" placeholder="輸入優惠券代碼" />
                  <p class="useBtn">使用</p>
                </div>
                <div class="m-bottom mobile-css">
                  <span>確認</span>
                </div>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: ["show"],
  data() {
    return {
      couponCode: '',
      isCheck: [false, false]
    }
  },
  created() {
  },
  methods: {
    checkFunc(val) {
      this.isCheck[val] = !this.isCheck[val];
      this.$forceUpdate();
    }
  }
}
</script>
<style lang="scss">
#convertId {
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(57, 47, 134, 0.62);
    backdrop-filter: blur(3px);
    display: table;
    transition: opacity 0.3s ease;
  }
  
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  
  .modal-container {
    width: 370px;
    margin: 0px auto;
    padding: 20px 30px;
    box-shadow: 0px 4px 4px rgba(33, 66, 116, 0.25);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;

    background: #FFFFFF;
    border-radius: 42px;
    @media screen and (max-width: 768px) {
      width: 100%;
      border-radius: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
    }
  }
  
  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }
  
  .modal-body {
    padding: 5px 0 1rem;
    @media screen and (max-width: 768px) {
      padding-top: 0;
      overflow-y: auto;
      overflow-y: scroll;
    }
  }
  
  .modal-default-button {
    float: right;
  }
  
  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */
  
  .modal-enter {
    opacity: 0;
  }
  
  .modal-leave-active {
    opacity: 0;
  }
  
  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}

</style>
<style lang="scss" scoped>
.title-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  @media screen and (max-width: 768px) {
    align-items: center;
    box-shadow: 0px -1px 11px rgba(0, 0, 0, 0.1);
    // padding: 25px 5% 12px;
    padding: 17px 5%;
  }
  .title-text {
    font-weight: 400;
    font-size: 20px;
    color: #957FEF;
    margin-bottom: 0;
  }
  .close-icon {
    width: 30px;
    height: 30px;
  }
}
.hide-text {
  visibility: hidden;
  width: 30px;
  margin-bottom: 0;
}
.pc-css {
  @media screen and (max-width: 768px) {
    display: none !important;
  }
}
.mobile-css {
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
}
.return-css {
  width: 18px;
  height: 18px;
}
.m-bottom {
  background: #7161EF;
  height: 48px;
  font-weight: 700;
  font-size: 1rem;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
}
.parent-block {
  @media screen and (max-width: 768px) {
    margin-top: 0;
    
    height: calc(100vh - 173px);
    overflow-y: scroll;
  }
  .each-block {
    border: 1px solid #000000;
    box-shadow: 0px 4px 0px #957FEF;
    display: flex;
    justify-content: space-between;
    height: 90px;
    margin-bottom: 14px;

    @media screen and (max-width: 768px) {
      margin-left: 3px;
      margin-right: 3px;
    }
    .each-left {
      display: flex;
      align-items: center;
      .ellipse-icon {
        width: 15px;
        margin-right: 1rem;
      }
      .discount-ellipse {
        font-weight: 400;
        font-size: 16px;
        color: #2C2C2C;
        margin-bottom: 0;
        line-height: 1.2;
      }
      .min-spend {
        font-weight: 300;
        font-size: 14px;
        color: #2C2C2C;
        margin-bottom: 0;
        line-height: 1.2;
      }
      .expired-date {
        font-weight: 400;
        font-size: 14px;
        color: #CDC3F5;
        margin-bottom: 0;
        line-height: 1.2;
      }
    }
    .each-right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 107px;
      border-left: 1px dashed #7161EF;
      .right-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .circle-css {
        background: #F2EFFF;
        border: 1px solid #7161EF;
        border-radius: 22px;
        width: 30px;
        height: 30px;
        margin-top: 8px;
        margin-bottom: 8px;
      }
      .circle-color-css {
        background: #7161ef;
        border: 1px solid #7161EF;
        border-radius: 22px;
        width: 30px;
        height: 30px;
        margin-top: 8px;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        .correct-check {
          width: 18px;
          height: 18px;
        }
      }
      .btn-css {
        background: #7161EF;
        border: 1px solid #7161EF;
        border-radius: 12px;
        width: 60px;
        height: 30px;
        font-weight: 400;
        font-size: 14px;
        color: #FFF;
        margin-top: 8px;
        margin-bottom: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .btn1-css {
        background: #B7B7B7;
        border: 1px solid #B7B7B7;
        border-radius: 12px;
        width: 60px;
        height: 30px;
        font-weight: 400;
        font-size: 14px;
        color: #FFF;
        margin-top: 8px;
        margin-bottom: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .rule-use {
        font-weight: 500;
        font-size: 12px;
        color: #957FEF;
        margin-bottom: 0;
      }
      .hide-text1 {
        width: 15px;
        visibility: hidden;
      }
      .hide-text2 {
        font-weight: 500;
        font-size: 12px;
        color: #957FEF;
        margin-bottom: 0;
        visibility: hidden;
      }
      .ellipse-icon1 {
        width: 15px;
        transform: rotate(-180deg);
      }
    }
  }
}
.coupon-block {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin: 2rem 2px 1rem;
  @media screen and (max-width: 768px) {
    margin: 1.5rem 0 0;
    justify-content: space-evenly;
    padding-bottom: 1.5rem ;
    border-bottom: 3px solid #e1e1e1;
  }
  .coupon-code {
    font-weight: 400;
    font-size: 14px;
    color: #957FEF;
    background: #F2EFFF;
    border-radius: 6px;

    border: none;
    width: 75%;
    padding-left: 10px;
    height: 36px;
    min-height: 36px;
    margin: auto;
    @media screen and (max-width: 768px) {
      width: 68%;
      margin: unset;
    }
  }
  .coupon-code:focus {
    outline: none;
  }
  .coupon-code::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #957FEF;
  }
  .useBtn {
    background: #F2EFFF;
    border-radius: 6px;
    height: 36px;
    line-height: 36px;
    font-weight: 400;
    font-size: 14px;
    color: #957FEF;
    margin-bottom: 0;
    padding: 0 1rem;
    @media screen and (max-width: 768px) {
      width: 20%;
      text-align: center;
    }
  }
}
</style>