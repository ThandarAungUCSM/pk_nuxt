<template>
  <div id="serviceId" >
    <transition name="modal">
      <div v-if="show" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-body">
              <slot name="body">
                <div class="title-row">
                  <img class="return-css" src="../assets/mobile/btn-return1.png" @click="$emit('close')" />
                  <p class="title-text">運送方式</p>
                  <img class="return-css hide-text" src="../assets/mobile/btn-return1.png" @click="$emit('close')" />
                </div>
                <div class="radio-block">
                  <el-radio-group v-model="radioData">
                    <el-radio :label="3" class="facts">
                      <div>
                        <div class="shipp-method">
                          <div class="shiip-txt">
                            <div>
                              <p class="home-delivery">7-ELEVEN</p>
                              <p class="expected-date">預計2~3個工作天配達</p>
                            </div>
                            <div v-if="radioData == 3" class="location-btn3">
                              <img class="location" src="../assets/pc/location.png" />
                              <p class="location-text">選擇門市</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-if="radioData == 3" class="btn-css3">
                        <p class="confirm-btn">確認</p>
                      </div>
                    </el-radio>
                    <el-radio :label="6" class="facts">
                      <div>
                        <div class="shipp-method">
                          <div class="shiip-txt">
                            <div>
                              <p class="home-delivery">全家</p>
                              <p class="expected-date">預計2~3個工作天配達</p>
                            </div>
                            <div v-if="radioData == 6" class="location-btn3">
                              <img class="location" src="../assets/pc/location.png" />
                              <p class="location-text">選擇門市</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-if="radioData == 6" class="btn-css3">
                        <p class="confirm-btn">確認</p>
                      </div>
                    </el-radio>
                    <el-radio :label="9" class="facts">
                      <div>
                        <div class="shipp-method">
                          <div class="shiip-txt">
                            <div>
                              <p class="home-delivery">OK Mart</p>
                              <p class="expected-date">預計2~3個工作天配達</p>
                            </div>
                            <div v-if="radioData == 9" class="location-btn3">
                              <img class="location" src="../assets/pc/location.png" />
                              <p class="location-text">選擇門市</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-if="radioData == 9" class="btn-css3">
                        <p class="confirm-btn">確認</p>
                      </div>
                    </el-radio>
                    <el-radio :label="12" class="facts">
                      <div>
                        <div class="shipp-method">
                          <div class="shiip-txt">
                            <div>
                              <p class="home-delivery">宅配到府</p>
                              <p class="expected-date">預計2~3個工作天配達</p>
                            </div>
                            <div v-if="radioData == 12" class="receive-block">
                              <p class="receive-info-title">收件資訊</p>
                              <div class="info-group">
                                <div class="left-info">
                                  <p class="left-text">收件人</p>
                                  <p class="left-text">電話</p>
                                  <p class="left-text">地址</p>
                                </div>
                                <div class="right-info">
                                  <p class="right-text">王大明</p>
                                  <p class="right-text">0912345678</p>
                                  <p class="right-text">新北市 三重區 復興北路87巷</p>
                                </div>
                              </div>
                              <div class="location-btn">
                                <img class="location" src="../assets/pc/location.png" />
                                <p class="location-text">修改地址</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-if="radioData == 12" class="btn-css">
                        <p class="confirm-btn">確認</p>
                      </div>
                    </el-radio>
                  </el-radio-group>
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
      radioData: 7
    }
  },
  created() {
  },
  methods: {
    
  }
}
</script>
<style lang="scss">
#serviceId {
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
    background: #eae9f4;
    @media screen and (max-width: 768px) {
      padding-top: 0;
      overflow-y: auto;
      overflow-y: scroll;
      height: 100vh;
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
#serviceId {
  .el-radio__input.is-checked .el-radio__inner {
    border: 1px solid #7161EF !important;
    background: #7161EF !important;
  }
  .el-radio__input.is-checked+.el-radio__label {
    color: #333 !important;
  }
  .el-radio {
    margin-right: 0px !important;
    background: #FFF;
  }
  .el-radio.is-checked {
    border: 2px solid #7161EF;
  }

  .el-radio__inner {
    border: 1px solid #7161EF;
    margin-top: 15px;
  }
  .el-radio__input.is-checked .el-radio__inner {
    border-color: #7161EF !important;
    background: #f9f8f8 !important;
    width: 14px;
    height: 14px;
  }
  .el-radio__inner::after {
    width: 7px;
    height: 7px;
    background: #7161EF;
  }
  .el-radio__input.is-checked + .el-radio__label {
    font-weight: 400;
    font-size: 1rem;
    color: #4f4f4f !important;
  }
  .el-radio__label {
    font-weight: 400;
    font-size: 1rem;
    color: #4f4f4f !important;
    width: 100% !important;
    padding-left: 0 !important;
  }
  .el-radio-group {
    padding-left: 0 !important;
    padding-right: 0 !important;
    width: 100%;
  }
}
</style>
<style lang="scss" scoped>
.title-row {
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 25px;
    padding-left: 5%;
    padding-right: 5%;
    background: #FFF;
    box-shadow: 10px -10px 1px rgba(0, 0, 0, 0.1);
    margin-bottom: 1px;
  }
  .title-text {
    font-weight: 500;
    font-size: 20px;
    color: #7161EF;
    margin-bottom: 0;
  }
  .close-icon {
    width: 30px;
    height: 30px;
  }
  .return-css {
    width: 18px;
    height: 18px;
  }
  .hide-text {
    visibility: hidden;
    width: 18px;
    height: 18px;
  }
}
.radio-block {
  width: 100%;
  .facts {
    font-weight: 400;
    display: flex;
    padding: 20px 46px 20px 2rem;
    width: 100%;
    .shipp-method {
      display: flex;
    }
    .shiip-txt {
      margin-left: 2rem;
    }
    .home-delivery {
      font-weight: 400;
      font-size: 14px;
      color: #2C2C2C;
      margin-bottom: 10px;
    }
    .expected-date {
      font-weight: 400;
      font-size: 14px;
      color: #EF7B61;
      margin-bottom: 0;
    }
    .receive-block {
      margin-top: 1.2rem;
      .receive-info-title {
        font-weight: 700;
        font-size: 12px;
        color: #957FEF;
        margin-bottom: 10px;
      }
      .info-group {
        display: flex;
        .left-info {
          margin-right: 1.2rem;
        }
        .right-info {
        }
        .left-text, .right-text {
          font-weight: 400;
          font-size: 12px;
          color: #957FEF;
          margin-bottom: 8px;
        }
      }
    }
    .location-btn3 {
      background: #CFB7FF;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 113px;
      height: 36px;
      margin-top: 20px;
    }
    .location-btn {
      background: #CFB7FF;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 113px;
      height: 36px;
      margin-top: 2px;
    }
    .location {
      width: 18px;
      height: 18px;
    }
    .location-text {
      font-weight: 700;
      font-size: 14px;
      color: #FFF;
      margin-bottom: 0;
      margin-left: 5px;
    }
  }
  .btn-css3 {
    background: #B2ADD7;
    border-radius: 6px;
    width: 80px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px auto 0;
  }
  .btn-css {
    background: #7161EF;
    border-radius: 6px; 
    width: 80px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto 0;
  }
  .confirm-btn {
    font-weight: 700;
    font-size: 14px;
    color: #FFF;
    padding: 7px 0rem;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>