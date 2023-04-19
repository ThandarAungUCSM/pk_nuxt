<template>
  <div id="walletId" >
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
                <div class="items-block">
                  <div v-if="checkClick && activeId == 1" class="check-block" @click="toCheck(1)">
                    <div class="check-inner" >
                      <div class="check-left">
                        <img class="ordergame-icon" src="../assets/pc/order-game1.png" />
                        <div class="name-div">
                          <p class="game-name">MYISTAL 米茲塔爾</p>
                          <p class="currency-name">幣值名稱 156,015</p>
                        </div>
                      </div>
                      <img class="check-icon" src="../assets/pc/check-btn.png" />
                    </div>
                    <div class="">
                      <div class="withdrawn-div">
                        <p class="withdrawn-name">將提領之數額</p>
                        <p class="currency-pk">256,000</p>
                      </div>
                      <div class="equal-block">
                        <p class="equal-sign">=</p>
                      </div>
                      <div class="withdrawn-div">
                        <p class="withdrawn-name">換算後等值PK幣</p>
                        <p class="currency-pk">1,900</p>
                      </div>
                    </div>
                  </div>
                  <div v-else class="name-block" @click="toCheck(1)">
                    <img class="ordergame-icon" src="../assets/pc/order-game1.png" />
                    <div class="name-div">
                      <p class="game-name">MYISTAL 米茲塔爾</p>
                      <p class="currency-name">幣值名稱 156,015</p>
                    </div>
                  </div>
                  <div v-if="checkClick && activeId == 2" class="check-block" @click="toCheck(2)">
                    <div class="check-inner" >
                      <div class="check-left">
                        <img class="ordergame-icon" src="../assets/pc/order-game1.png" />
                        <div class="name-div">
                          <p class="game-name">MYISTAL 米茲塔爾</p>
                          <p class="currency-name">幣值名稱 156,015</p>
                        </div>
                      </div>
                      <img class="check-icon" src="../assets/pc/check-btn.png" />
                    </div>
                    <div class="">
                      <div class="withdrawn-div">
                        <p class="withdrawn-name">將提領之數額</p>
                        <p class="currency-pk">256,000</p>
                      </div>
                      <div class="equal-block">
                        <p class="equal-sign">=</p>
                      </div>
                      <div class="withdrawn-div">
                        <p class="withdrawn-name">換算後等值PK幣</p>
                        <p class="currency-pk">1,900</p>
                      </div>
                    </div>
                  </div>
                  <div v-else class="name-block" @click="toCheck(2)">
                    <img class="ordergame-icon" src="../assets/pc/order-game1.png" />
                    <div class="name-div">
                      <p class="game-name">MYISTAL 米茲塔爾</p>
                      <p class="currency-name">幣值名稱 156,015</p>
                    </div>
                  </div>
                  <div v-if="checkClick && activeId == 3" class="check-block" @click="toCheck(3)">
                    <div class="check-inner" >
                      <div class="check-left">
                        <img class="ordergame-icon" src="../assets/pc/order-game1.png" />
                        <div class="name-div">
                          <p class="game-name">MYISTAL 米茲塔爾</p>
                          <p class="currency-name">幣值名稱 156,015</p>
                        </div>
                      </div>
                      <img class="check-icon" src="../assets/pc/check-btn.png" />
                    </div>
                    <div class="">
                      <div class="withdrawn-div">
                        <p class="withdrawn-name">將提領之數額</p>
                        <p class="currency-pk">256,000</p>
                      </div>
                      <div class="equal-block">
                        <p class="equal-sign">=</p>
                      </div>
                      <div class="withdrawn-div">
                        <p class="withdrawn-name">換算後等值PK幣</p>
                        <p class="currency-pk">1,900</p>
                      </div>
                    </div>
                  </div>
                  <div v-else class="name-block" @click="toCheck(3)">
                    <img class="ordergame-icon" src="../assets/pc/order-game1.png" />
                    <div class="name-div">
                      <p class="game-name">MYISTAL 米茲塔爾</p>
                      <p class="currency-name">幣值名稱 156,015</p>
                    </div>
                  </div>
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
      checkClick: true,
      activeId: 1,
    }
  },
  created() {
  },
  methods: {
    toCheck(val) {
      this.checkClick = !this.checkClick
      this.activeId = val
    },
  }
}
</script>
<style lang="scss">
#walletId {
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
#walletId {
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
.items-block {
  padding: 0 0 2rem 0;
  .name-block {
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #E7E7E7;
    margin-bottom: 5px;
  }
  .check-block {
    background: #FFFFFF;
    border: 2px solid #7161EF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
    padding-bottom: 10px;
    margin-bottom: 10px;
    .check-inner {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .check-left {
        display: flex;
        align-items: center;
      }
    }
  }
  .ordergame-icon{
    width: 92px;
    height: 92px;
  }
  .check-icon {
    width: 24px;
    height: 1rem;
    margin-right: 17px;
  }
  .equal-block {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 33px;
    height: 5px;
  }
  .equal-sign {
    font-weight: 500;
    font-size: 14px;
    color: #B9B9B9;
    transform: rotate(-90deg);
    margin-bottom: 0;
  }
  .withdrawn-div {
    display: flex;
    justify-content: space-between;
    margin: 0 33px;
    .withdrawn-name {
      font-weight: 400;
      font-size: 14px;
      color: #957FEF;
      margin-bottom: 0;
    }
    .currency-pk {
      font-weight: 500;
      font-size: 14px;
      color: #957FEF;
      margin-bottom: 0;
    }
  }
  .name-div {
    padding-left: 10px;
    .game-name {
      font-weight: 400;
      font-size: 14px;
      color: #2C2C2C;
      margin-bottom: 0px;
    }
    .currency-name {
      font-weight: 400;
      font-size: 14px;
      color: #EF7B61;
      margin-bottom: 0px;
    }
  }
}
</style>