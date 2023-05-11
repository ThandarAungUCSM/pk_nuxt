<template>
  <div>
    <Header class="pc-css" />
    <div v-if="activeStep !== 4" class="formobile titlem">
      <div class="pc-back" @click="backBtn">
        <img src="../assets/mobile/btn-return.png" class="back-icon">
      </div>
      <div class="title-div">
        <img src="../assets/mobile/m-dollar.png" class="mdollar-icon">
        <span class="setting-title">申請退貨退款</span>
      </div>
      <div class="visibleHidden">hi</div>
    </div>
    <div v-if="activeStep !== 4" id="refundId" class="order-list">
      <div class="dollar-row">
        <img src="../assets/pc/dollar-icon.png" class="dollar-icon">
        <span class="refund-title">申請退貨退款</span>
      </div>
      <RefundReturn1 v-if="activeStep == 1" :product-data="cartLists" @nextcompo="nextcompo" />
      <RefundReturn2 v-else-if="activeStep == 2" :product-data="cartLists" @nextcompo="nextcompo" />
      <RefundReturn3 v-else-if="activeStep == 3" :product-data="cartLists" @nextcompo="nextcompo" />
    </div>
    <div v-else-if="activeStep == 4" id="refundId" class="order-list1">
      <!-- <div class="dollar-row">
        <img src="../assets/pc/dollar-icon.png" class="dollar-icon">
        <span class="refund-title">申請退貨退款</span>
      </div> -->
      <RefundReturn4 :product-data="cartLists" @nextcompo="nextcompo" />
    </div>
    <Footer page="refund" class="pc-css" />
  </div>
</template>
<script>
export default {
  name: 'OrderList',
  data() {
    return {
      checkAll: false,
      checkedCities: [],
      isIndeterminate: true,
      activeStep: 1,
      cartLists: [
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒1", imagePath: require("../assets/mobile/newArrival.png"), count: 20, price: "99999", bid: 1},
        {name: "Product Name 1", imagePath: require("../assets/mobile/newArrival.png"), count: 10, price: "99999", bid: 2},
        {name: "Product Name 2", imagePath: require("../assets/mobile/newArrival.png"), count: 50, price: "99999", bid: 3},
        {name: "Product Name 3", imagePath: require("../assets/mobile/newArrival.png"), count: 2, price: "99999", bid: 4}
      ]
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? this.cartLists : [];
      this.isIndeterminate = false;
    },
    handleCheckedEachChange(value) {
      const checkedCount = value.length;
      this.checkAll = checkedCount === this.cartLists.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cartLists.length;
    },
    nextcompo(val) {
      this.activeStep = val
    },
    backBtn() {
      this.$router.push('/member')
    },
  }
}
</script>
<style lang="scss" scoped>
.pc-css {
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  }
}
.formobile {
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
  .pc-back {
    @media screen and (max-width: 768px) {
      display: flex;
    }
    .back-icon {
      width: 36px;
      height: 36px;
    }
  }
  .title-div {
    @media screen and (max-width: 768px) {
      text-align: left;
      padding: 0;
    }
    .setting-title {
      @media screen and (max-width: 768px) {
        font-weight: 400;
        font-size: 16px;
        color: #FFF;
        padding-left: 5px;
      }
    }
    .mdollar-icon {
      width: 24px;
    }
  }
}
.titlem {
  @media screen and (max-width: 768px) {
    background: #7161EF;
    height: 114px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 1rem;
  }
  .visibleHidden {
    visibility: hidden;
  }
}
.order-list, .order-list1 {
  padding-top: 140px;
  padding-bottom: 100px;
  background: #eae9f4;
  // height: 100vh;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    padding-top: 0; 
    padding-bottom: 0;
    min-height: unset; 
    min-height: calc(100vh - 114px - 48px); // for RefundReturn3
  }
  .dollar-row {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 36px 0;
    @media screen and (max-width: 768px) {
      display: none;
    }
    .dollar-icon {
      width: 24px;
      height: 24px;
    }
    .refund-title {
      font-weight: 400;
      font-size: 20px;
      color: #7161EF;
      margin-left: 1.5rem;
    }
  }
}
.order-list1 {
  @media screen and (max-width: 768px) {
    min-height: 100vh;
  }
}
</style>
<style lang="scss">
#refundId {
  .el-checkbox__inner {
    width: 24px !important;
    height: 24px !important;
    border: 1.6px solid #b79ced !important;

    border: 2px solid #957FEF !important;
    border-radius: 6px;
    margin-right: 2rem;
  }
  .el-checkbox__inner::after {
    // height: 8px !important;
    // left: 6px !important;
    // top: 2px !important;

    height: 11px !important;
    left: 8px !important;
    top: 4px !important;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #FFF !important;
    border: 2px solid #957FEF !important;
    border-radius: 6px;
    margin-right: 2rem;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner {
    color: #b79ced !important;
    background-color: #b79ced !important;
    border-color: #b79ced !important;
    margin-right: 2rem;
  }
  .el-checkbox__input.is-disabled .el-checkbox__inner {
    background-color: #edf2fc;
    border-color: #DCDFE6 !important;
    cursor: not-allowed;
  }
  #refundallId {
    label {
      margin-bottom: 0rem; 
      height: 60px;
      width: 100%;
      margin-right: 0;
      background: #FFF;
      padding: 0 1rem 0 25px;
      display: flex;
      align-items: center;
      
      @media screen and (max-width: 768px) {
        padding: 0 10px;
        padding: 0 7px 0 17px;
        border-bottom: 1px solid #E3D4FF;
      }
    }

    .el-checkbox__label {
      font-weight: 400;
      font-size: 14px;
      color: #000;
      padding-left: 0;
      width: 100%;
    }
    .el-checkbox__input.is-checked+.el-checkbox__label {
      font-weight: 400;
      font-size: 14px;
      color: #000;
    }
  }
  #refundeachId {
    label {
      margin-bottom: 0rem; 

      width: 1%;
      background: #FFF;
      padding: 0 1rem 0 0;
      margin-left: 1.5rem;
      margin-right: 1rem;

      border-bottom: 3px solid #f9f8f8;
      @media screen and (max-width: 768px) {
        padding: 0 10px;
        margin-bottom: 0rem; 
        width: 3%;
        margin-right: 1rem;
        margin-left: 7px;
        background: #FFF;
      }
    }
    .el-checkbox__label {
      padding-left: 0;
      width: 10%;
      visibility: hidden;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
}
</style>