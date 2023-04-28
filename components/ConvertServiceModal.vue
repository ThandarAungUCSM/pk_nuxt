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
                              <div class="location-btn" @click="locationFunc">
                                <img class="location" src="../assets/pc/location.png" />
                                <p class="location-text">修改地址</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-if="radioData == 12 && !showLocation" class="btn-css" @click="selectedFunc()">
                        <p class="confirm-btn">確認</p>
                      </div>
                      <div v-else-if="radioData == 12 && showLocation">
                        <div class="name-block">
                          <span class="name-txt">姓名</span>
                          <input
                            v-model="nameText"
                            type="text"
                            placeholder="王大明"
                            class="name-input"
                            onfocus="this.placeholder=''"
                          />
                        </div>
                        <div class="phone-block">
                          <span class="name-txt">手機號碼</span>
                          <input
                            v-model="phoneNo"
                            type="text"
                            placeholder="範例：0966330678"
                            class="phone-input"
                            onfocus="this.placeholder=''"
                          />
                        </div>
                        <div class="address-block">
                          <span class="email-txt">地址</span>
                          <div class="address">
                            <el-select v-model="cityName" class="member-address-city" placeholder="新北市">
                              <el-option
                                v-for="(city, index) in cityTown"
                                :key="index"
                                :label="city.label"
                                :value="city.name">
                              </el-option>
                            </el-select>
                            
                            <el-select
                              v-model="district"
                              class="member-address-city"
                              style="margin-left: 20px;"
                              placeholder="三重區">
                              <el-option
                                v-for="(city) in cityTown"
                                :key="city.value"
                                :label="city.label"
                                :value="city.name">
                              </el-option>
                            </el-select>
                            
                          </div>
                        </div>
                        <div class="street-block">
                          <input
                            v-model="streetText"
                            type="text"
                            placeholder="範例：光復南路三段156巷24號"
                            class="address-input"
                          />
                        </div>
                        <div class="btn-block">
                          <p class="btn1" @click="$emit('close')">確認</p>
                          <p class="btn2" @click="backLocation">取消</p>
                        </div>
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
      radioData: 7,
      showLocation: false,
      nameText: '',
      phoneNo: '',
      cityName: '',
      district: '',
      streetText: '光復南路三段156巷24號',
      cityTown: [{name: 'aaaaa', label: 'aaaaa'}, {name: 'bbbbb', label: 'bbbbb'}, {name: 'ccccc', label: 'ccccc'}],
    }
  },
  computed: {
    // nameText: {
    //   get() {
    //     console.log(this.$store.state);
    //     return this.$store.state.user.profile && this.$store.state.user.profile.name;
    //   },
    //   set(value) {
    //     console.log(value);
    //     this.$store.commit("user/UPDATE_NAME", value);
    //   },
    // },
    // phoneNo: {
    //   get() {
    //     return this.$store.state.user.profile && this.$store.state.user.profile.mobile;
    //   },
    //   set(value) {
    //     this.$store.commit("user/UPDATE_MOBILE", value);
    //   },
    // },
  },
  created() {
  },
  methods: {
    locationFunc() {
      this.showLocation = true
    },
    backLocation() {
      this.showLocation = false
    },
    selectedFunc() {
      this.$emit("serviceData", this.radioData);
      this.$emit("close");
    }
  }
}
</script>
<style lang="scss">
#serviceId {
  .modal-mask {
    position: fixed;
    z-index: 9998;
    z-index: 999;
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
    padding-bottom: 2rem;
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
    color: #858585 !important;
  }
  .el-radio__label {
    font-weight: 400;
    font-size: 1rem;
    color: #858585 !important;
    width: 100% !important;
    padding-left: 0 !important;
  }
  .el-radio-group {
    padding-left: 0 !important;
    padding-right: 0 !important;
    width: 100%;
    margin-top: 12px;
  }
  .el-input--suffix .el-input__inner {
    background: #FAF7FF;
    height: 60px;
    border: none;
    font-weight: 400;
    font-size: 1rem !important;
    color: #7161FE !important;
  }
  .el-input--suffix .el-input__inner::placeholder {
    color: #7161FE !important;
  }
  .el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
    background: #FAF7FF;
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
    // padding: 25px 5% 12px;
    padding: 17px 5%;
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
  height: calc(100vh - 66px);
  overflow-y: scroll;
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
  .name-block, .phone-block {
    background: #FAF6FF;
    backdrop-filter: blur(1.5px);
    height: 56px;
    padding: 10px 1rem;
    margin-top: 1rem;
  }
  .name-txt {
    font-weight: 400;
    font-size: 14px;
    color: #9D9D9D;
    width: 100%;
    display: block;
    margin-bottom: 5px;
  }
  input:focus {
    outline: none;
  }
  .name-input {
    font-weight: 400;
    font-size: 14px;
    color: #957FEF;
    border: none;
    width: 100%;
    background: none;
    padding: 0;
  }
  .phone-input {
    font-weight: 400;
    font-size: 1rem;
    color: #957FEF;
    border: none;
    width: 100%;
    background: none;
    padding: 0;
  }
  .address-input {
    font-weight: 400;
    font-size: 1rem;
    color: #7161EF;
    border: none;
    width: 100%;
    background: none;
    padding: 0;
  }
  .name-input::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #957FEF;
    border: none;
    width: 100%;
    background: none;
    padding: 0;
  }
  .phone-input::placeholder {
    font-weight: 400;
    font-size: 1rem;
    color: #957FEF;
    border: none;
    width: 100%;
    background: none;
    padding: 0;
  }
  .address-input::placeholder {
    font-weight: 400;
    font-size: 1rem;
    color: #7161EF;
    border: none;
    width: 100%;
    background: none;
    padding: 0;
  }
  .address-block {
    margin-top: 10px;
    .address {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 10px;
    }
    .member-address-city {
      width: 48%;
      font-weight: 400;
      font-size: 1rem !important;
      color: #7161FE;
      background: #FAF7FF;
      backdrop-filter: blur(1.5px);
      border-radius: 6px;
      border: none;
      // padding-left: 10px;
      height: 60px;
      min-height: 60px;

      background-image: url('../assets/pc/angle-down.png');
      background-repeat: no-repeat;
      background-position: calc(100% - 12px) center;
      background-size: 16px;
    }
    .member-address-city::placeholder {
      color: red;
    }
    select:focus {
      outline: none;
    }
    select {
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      padding-right: 1rem;
    }
  }
  .street-block {
    background: #FAF7FF;
    backdrop-filter: blur(1.5px);
    height: 56px;
    line-height: 56px;
    padding-left: 10px;
    margin-top: 10px;
    @media screen and (max-width: 768px) {
      margin-top: 1rem;
    }
  }
  .btn-block {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 68px;
    .btn1 {
      background: #7161EF;
      border: 2px solid #7161EF;
      border-radius: 6px;
      margin-bottom: 0;
      font-weight: 700;
      font-size: 14px;
      color: #FFF;
      width: 80px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 25px;
    }
    .btn2 {
      background: #FFF;
      border: 2px solid #7161EF;
      border-radius: 6px;
      margin-bottom: 0;
      font-weight: 700;
      font-size: 14px;
      color: #7161EF;
      width: 80px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 25px;
    }
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