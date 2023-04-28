<template>
  <div>
    <div class="refund-div">
      <div class="product-row">
        <p class="pickup-css">取件</p>
        <p class="pickup-note">將於您提供的退貨地址收取退貨包裹，請您留意物流人員的取件時間</p>
      </div>
      <div class="package-row">
        <p class="package-receive">運送方式</p>
        <div v-if="!afterDelivery" class="right-div" @click="showDeliModal = true">
          <p class="fill-receive-color">請選擇</p>
          <img src="../assets/pc/right-arr.png" class="rightarr-icon">
        </div>
        <div v-else-if="afterDelivery" class="right-div" @click="showDeliModal = true">
          <p class="fill-receive-color">{{showDelivery}}</p>
          <img src="../assets/pc/right-arr.png" class="rightarr-icon">
        </div>
      </div>
      <div class="package-row">
        <p class="package-receive">預計取件時間</p>
        <div v-if="!afterCalendar" class="right-div" @click="showModal = true">
          <p class="fill-receive-color1">選擇取件時間</p>
          <img src="../assets/pc/right-arr.png" class="rightarr-icon">
        </div>
        <div v-else-if="afterCalendar" class="right-div" @click="showModal = true">
          <p class="fill-receive-color">{{showCalendar}}</p>
          <img src="../assets/pc/right-arr.png" class="rightarr-icon">
        </div>
      </div>
      <div class="refund-row">
        <p class="package-receive">取件人姓名</p>
        <div class="right-div">
          <!-- <p class="fill-receive">王大明</p> -->
          <input v-model="username" type="text" class="user-name-css" placeholder="王大明" onfocus="this.placeholder=''">
          <img src="../assets/pc/right-arr.png" class="rightarr-icon hidecss">
        </div>
      </div>
      <div class="refund-row">
        <p class="package-receive">取件人電話</p>
        <div class="right-div">
          <!-- <p class="fill-receive">0966087987</p> -->
          <input v-model="usermobile" type="text" class="user-name-css" placeholder="0966087987" onfocus="this.placeholder=''">
          <img src="../assets/pc/right-arr.png" class="rightarr-icon hidecss">
        </div>
      </div>
      <div class="refund-row">
        <p class="package-receive">取件地址</p>
        <div class="right-div">
          <!-- <p class="fill-receive">新北市三重區光復南路156巷24號</p> -->
          <input v-model="useraddress" type="text" class="user-name-css" placeholder="新北市三重區光復南路156巷24號" onfocus="this.placeholder=''">
          <img src="../assets/pc/right-arr.png" class="rightarr-icon hidecss">
        </div>
      </div>
      <!-- <div class="refund-row">
        <p class="package-receive">退貨原因</p>
        <p class="fill-receive">請先填選是否收到包裹</p>
        <div v-else-if="(radioData == 1 || radioData == 2) && !afterSelect" class="right-div" @click="showModal = true">
          <p class="fill-receive-color">請選擇退貨原因</p>
          <img src="../assets/pc/right-arr.png" class="rightarr-icon">
        </div>
        <div v-else-if="afterSelect" class="right-div" @click="showModal = true">
          <p class="fill-receive-color">{{showData}}</p>
          <img src="../assets/pc/right-arr.png" class="rightarr-icon">
        </div>
      </div> -->
    </div>
    <div class="btn-div" @click="nextPage(4)">
      <p class="btn-text">確認並送出</p>
    </div>
    <RefundDeliveryModal v-if="showDeliModal" :show="showDeliModal" :choice="showDelivery" tochoicepopup="delivery" @close="showDeliModal = false" @selectedDelivery="selectedDelivery" />
    <RefundDeliveryModal v-if="showModal" :show="showModal" :choice="showCalendar" tochoicepopup="calendar" @close="showModal = false" @selectedCalendar="selectedCalendar" />
  </div>
</template>
<script>
export default {
  name: 'RefundReturn1',
  props: ["productData"],
  data() {
    return {
      cartLists: [],
      showModal: false,
      showDeliModal: false,
      showDelivery: '',
      showCalendar: '',
      afterDelivery: false,
      afterCalendar: false,
      username: '',
      usermobile: '',
      useraddress: ''
    }
  },
  watch: {
    userPassword(val) {
      if(this.userPassword !== '') {
        if(this.currentPassword !== '' && this.confirmPassword !== '' && (this.currentPassword === this.confirmPassword)) {
          this.updateConfirm = true
        }
      }
    },
  },
  created() {
    this.cartLists = this.productData
  },
  methods: {
    nextPage(val) {
      this.$emit("nextcompo", val)
    },
    selectedDelivery(val) {
      this.showDelivery = val
      this.afterDelivery = true
    },
    selectedCalendar(val) {
      this.showCalendar = val
      this.afterCalendar = true
    }
  }
}
</script>
<style lang="scss" scoped>
  
.refund-div {
  width: 393px;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  .product-row {
    background: #FFF;
    padding: 1rem 1.5rem;
    margin-bottom: 5px;
    height: 109px;
    .pickup-css {
      font-weight: 400;
      font-size: 20px;
      color: #000;
      margin-bottom: 5px;
    }
    .pickup-note {
      font-weight: 400;
      font-size: 14px;
      color: #957FEF;
      margin-bottom: 0;
    }
  }
  .package-row, .refund-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    background: #FFF;
    padding-left: 18px;
    padding-right: 18px;
    margin-bottom: 5px;
    @media screen and (max-width: 768px) {
      padding: 0 19px 0 1.5rem;
    }
    .fill-receive {
      font-weight: 400;
      font-size: 14px;
      color: #957FEF;
      margin-bottom: 0;
    }
    .user-name-css {
      font-weight: 400;
      font-size: 14px;
      color: #957FEF;
      // background: #F2EFFF;
      border-radius: 6px;

      border: none;
      width: 100%;
      padding-left: 10px;
      height: 36px;
      min-height: 36px;
      margin: auto;
      text-align: right;
      @media screen and (max-width: 768px) {
        // width: 68%;
        padding-left: 0;
        margin: unset;
      }
    }
    .user-name-css:focus {
      outline: none;
    }
    .user-name-css::placeholder {
      font-weight: 400;
      font-size: 14px;
      color: #957FEF;
    }
    .right-div {
      display: flex;
      align-items: center;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        justify-content: flex-end;
        width: 75%;
      }
      .fill-receive-color, .fill-receive-color1 {
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 0;
      }
      .fill-receive-color {
        color: #B79CED;
      }
      .fill-receive-color1 {
        color: #957FEF;
      }
      .rightarr-icon {
        width: 5px;
        height: 10px;
        margin-left: 10px;
      }
    }
    .hidecss {
      visibility: hidden;
    }
  }
  .package-receive {
    font-weight: 400;
    font-size: 14px;
    color: #000;
    margin-bottom: 0;
  }
}
.btn-div {
  background: #E9B531;
  border-radius: 12px;
  width: 393px;
  height: 48px;
  margin: 60px auto 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 0;
    position: absolute;
    bottom: 0;
    border-radius: 0;
  }
  .btn-text {
    font-weight: 700;
    font-size: 1rem;
    color: #FFF;
    margin-bottom: 0;
  }
}
</style>
<style lang="scss">
</style>