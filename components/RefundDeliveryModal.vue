<template>
  <div id="refundId" >
    <transition name="modal">
      <div v-if="show" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-body">
              <slot name="body">
                <div class="title-row">
                  <img class="return-css mobile-css" src="../assets/mobile/btn-return1.png" @click="$emit('close')" />
                  <p class="title-text">選擇退貨原因</p>
                  <p class="hide-text mobile-css">hi</p>
                </div>
                <div v-if="tochoicepopup && tochoicepopup === 'delivery'" id="refundModalId" class="">
                  <el-radio-group v-model="deliData">
                    <el-radio v-for="(list, ind) in delilists" :key="ind" :label="list" class="facts" >
                      <p class="yes-css">{{list}}</p>
                    </el-radio>
                  </el-radio-group>
                </div>
                <div v-else-if="tochoicepopup && tochoicepopup === 'calendar'" id="refundModalId" class="">
                  <el-radio-group v-model="calenData">
                    <el-radio v-for="(list, ind) in calenlists" :key="ind" :label="list" class="facts" >
                      <p class="yes-css">{{list}}</p>
                    </el-radio>
                  </el-radio-group>
                </div>
                <!-- <div id="refundModalId1" >
                  <el-input
                    v-model="textcontent" 
                    type="textarea"
                    placeholder="請在這裡寫下"
                    maxlength="1000"
                    show-word-limit
                  >
                  </el-input>
                </div> -->
                <div class="confirm-btn" @click="selectedRefund()">
                  <p class="confirm-text">確認</p>
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
  props: ["show", "choice", "tochoicepopup"],
  data() {
    return {
      couponCode: '',
      deliData: 5,
      calenData: 5,
      isCheck: [false, false],
      textcontent: '',
      delilists: ['delivery1', 'delivery2', 'delivery3', 'delivery4'],
      calenlists: ['calendar1', 'calendar2', 'calendar3', 'calendar4']
    }
  },
  created() {
    if(this.choice !== '') {
      if(this.tochoicepopup === 'delivery') {
        this.deliData = this.choice;
      } else {
        this.calenData = this.choice
      }
    }
  },
  methods: {
    checkFunc(val) {
      this.isCheck[val] = !this.isCheck[val];
      this.$forceUpdate();
    },
    selectedRefund() { 
      this.$emit('selectedDelivery', this.deliData)
      this.$emit('selectedCalendar', this.calenData)
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss">
#refundId {
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
    width: 458px;
    margin: 0px auto;
    padding: 20px 60px 40px;
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
    padding: 5px 0 0;
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
#refundModalId {
  .el-radio__input.is-checked .el-radio__inner {
    border: 1px solid #7161EF !important;
    background: #7161EF !important;
  }
  .el-radio__input.is-checked+.el-radio__label {
    color: #333 !important;
  }
  .el-radio {
    margin-right: 0px !important;
  }
  .el-input--suffix .el-input__inner {
    border: none;
    font-weight: 400;
    font-size: 1rem !important;
    color: #7161FE !important;
  }
  .el-input--suffix .el-input__inner::placeholder {
    color: #7161FE !important;
  }
  
  .el-radio__input.is-checked .el-radio__inner {
    border-color: #7161EF !important;
    background: #f9f8f8 !important;
    width: 18px;
    height: 18px;
  }
  .el-radio__inner::after {
    width: 12px;
    height: 12px;
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
    padding-left: 4rem;
    margin-left: 29px;
    padding-left: 0rem;
  }
  .el-radio-group {
    display: block !important;
    padding-left: 4rem;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    width: unset;
  }
  .el-radio__inner {
    margin-top: 4px;
    border: 1px solid #7161EF;
    width: 18px;
    height: 18px;
  }
}
#refundModalId1 {
  .el-textarea {
    height: 182px !important;
  }
  .el-textarea__inner {
    background: #F2EFFF !important;
    border-radius: 6px !important;
    height: 182px !important;
    border: #F2EFFF;
    border-radius: 6px;
  }
  .el-textarea__inner::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #957FEF;
  }
  .el-textarea .el-input__count {
    font-weight: 400;
    font-size: 10px;
    color: #000;
    background: #F2EFFF;
  }
}
</style>
<style lang="scss" scoped>
.title-row {
  display: flex;
  justify-content: center;
  margin-bottom: 22px;
  @media screen and (max-width: 768px) {
    align-items: center;
    padding-top: 25px;
    box-shadow: 0px -1px 11px rgba(0, 0, 0, 0.1);
    padding-left: 5%;
    padding-right: 5%;
  }
  .title-text {
    font-weight: 400;
    font-size: 20px;
    color: #957FEF;
    margin-bottom: 0;
  }
}
.facts {
  font-weight: 400;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0px;
  height: 60px;
  .policy-css {
    .agree-css {
      font-weight: 400;
      font-size: 14px;
      color: #000;
      margin-bottom: 0;
      margin-left: 10px;
      .spantext {
        color: #7161EF;
      }
    }
  }
  .boolean-method {
    
  }
  .yes-css {
    font-weight: 400;
    font-size: 16px;
    color: #7161EF;
    margin-bottom: 0;
  }
  .receive-block {
    margin-top: 1.2rem;
    .receive-info-title {
      font-weight: 700;
      font-size: 14px;
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
        font-size: 14px;
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
    margin-top: 10px;
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
.confirm-btn {
  display: flex;
  justify-content: center;
  background: #7161EF;
  border-radius: 6px;
  width: 120px;
  height: 36px;
  margin: auto;
  margin-top: 50px;
  cursor: pointer;
  .confirm-text {
    font-weight: 700;
    font-size: 14px;
    color: #FFF;
    margin-bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
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
</style>