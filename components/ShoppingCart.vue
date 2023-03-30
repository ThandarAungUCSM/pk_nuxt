<template>
  <div>
    <b-sidebar
      v-if="showCart"
      id="shopping-cart-header"
      sidebar-class="shopping-cart-bg"
      aria-label="Sidebar with custom footer"
      backdrop-variant="dark"
      no-header
      backdrop
      right
      shadow
    >
      <template #footer="{ hide }">
       <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
        <div class="bottom-css">
          <div class="left-div">
            <p class="tot-text">總計</p>
            <div class="pri-div">
              <p v-if="!emptycart"  class="price-text">1,900</p>
              <p v-else  class="price-text">0</p>
              <img src="../assets/mobile/itemicon_gold.png" class="gold-icon">
            </div>
          </div>
          <div class="right-div">
            <b-button v-if="!emptycart" size="sm" class="btn-css" @click="hide">前往兌換(3)</b-button>
            <b-button v-else size="sm" class="empty-btn-css">前往兌換(3)</b-button>
          </div>
        </div>
       </div>
      </template>
      <template #default="{ hide }">
        <div id="scrollerP" :class="emptycart ? 'emptybg' : ''">
          <div id="scrollerC">
            <div class="atTop">
              <div v-if="!emptycart" class="px-3 py-3 cart-title">
                <img class="cartimg" alt="shoppingCart" src="../assets/mobile/shopping-cart.png" />
                <span class="cart-txt" @click="hide">購物車</span>
              </div>
              <div class="sele-all-btn" :class="emptycart ? 'sele-all-btn1' : ''">
                <!-- <p class="select-all-txt" @click="selectAll">全選</p> -->
                <div :class="emptycart ? 'emptycss' : ''" class="select-all-txt1">
                  <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全選</el-checkbox>
                </div>
                <img class="cartimg" alt="shoppingCart" src="../assets/mobile/m-close.png" @click="hide" />
              </div>

              <!-- <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">Check all</el-checkbox> -->
              <!-- <div style="margin: 15px 0;"></div> -->
              <el-checkbox-group  v-if="!emptycart" v-model="checkedCities" class="checkGro" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :key="city" :label="city">
                  <div class="collapse-items1">
                    <div class="menu-left">
                      <div class="orderFalse">
                        <img class="menu-img" src="../assets/pc/product.png" />
                      </div>
                      <div class="menu-txt">
                        <div class="title-row">
                          <p class="common-menu-name">
                            奶油椰子口味玉米脆條 (造句包)
                          </p>
                          <span class="deleteBtn">
                            <img class="deleteimg" src="../assets/pc/trash.png" />
                          </span>
                        </div>
                        <div id="shoppingId" class="menu-price">
                          <el-input-number
                            v-model="showArr"
                            :min="1"
                            :max="5"
                            @change="(currentVal, oldVal) => {updateNum(currentVal, oldVal)}" ></el-input-number>
                          <span class="gold-price">100</span>
                          <img src="../assets/mobile/itemicon_gold.png" class="gold-icon">
                        </div>
                      </div>
                    </div>
                  </div>
                </el-checkbox>
              </el-checkbox-group>

              <div class="empty-block" :class="emptycart == false ? 'showData' : ''">
                <img class="empty-img" alt="shoppingCart" src="../assets/mobile/empty-cart.png" />
                <p class="empty-text">
                  車是空的，趕快去買東西吧~
                </p>
                <div class="btn-empty">
                  <p class="empty-btn">去逛逛</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
// const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
export default {
  name: "ShoppingCart",
  components: {},
  props: ["showCart"],
  data() {
    return {
      emptycart: false,
      selectedCartList: [],
      selectedItem: "",
      showDropdown: false,
      hideFalse: false,
      items: [
        { name: "外帶外送", id: 3 },
        { name: "宅配商品", id: 2 },
        { name: "電子票券", id: 1 },
      ],
      currentId: null,
      newType: [],
      currentProductId: "",
      currentStoreId: "",
      myArr: [],
      fineUpdate: null,

      checkAll: false,
      checkedCities: ['Shanghai', 'Beijing'],
      // cityOptions: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'],
      cities: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'],
      isIndeterminate: true,
      showArr: 3,
      allSelect: false
    };
  },
  computed: {
    
  },
  watch: {
  },
  mounted() {
    
  },
  methods: {
    hide() {
      
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? this.cities : [];
      this.isIndeterminate = false;
    },
    // selectAll() {
    //   if(this.checkedCities.length === this.cities.length) {
    //     this.allSelect = false
    //     this.checkAll = false
    //     // this.checkedCities = [];
    //   } else {
    //     this.allSelect = true
    //     this.checkAll = true
    //     this.checkedCities = this.cityOptions;
    //   }
    // },
    handleCheckedCitiesChange(value) {
      const checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },
    updateNum(current, old) {
      console.log('current ', current);
      console.log('old ', old);
    },
  },
};
</script>

<style scoped lang="scss">
.bottom-css {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 98%;
  }
  .left-div {
    background: #F9F9F9;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    padding: 10px 1rem;
    width: 200px;
    @media screen and (max-width: 768px) {
      height: 45px;
      width: 63%;
    }
    .tot-text {
      margin-bottom: 0;
      font-weight: 400;
      font-size: 14px;
      color: #AFAFAF;
    }
    .pri-div {
      display: flex;
      align-items: center;
      .price-text {
        font-weight: 400;
        font-size: 14px;
        color: #AFAFAF;
        margin-bottom: 0;
        margin-right: 7px;
        @media screen and (max-width: 768px) {
          font-weight: 700;
          font-size: 20px;
          color: #000;
        }
      }
      .gold-icon {
        width: 24px;
        height: 24px;
      }
    }
  }
  .right-div {
    @media screen and (max-width: 768px) {
      width: 35%;
      display: flex;
      justify-content: flex-end;
    }
    .btn-css {
      font-weight: 700;
      font-size: 1rem;
      color: #FFF;
      background-color: #000 !important;
      border-color: #000 !important;
      border-radius: 12px;  
    }
    .empty-btn-css {
      @media screen and (max-width: 768px) {
        font-weight: 700;
        font-size: 1rem;
        color: #FFF;
        background-color: #E3E3E3 !important;
        border-color: #E3E3E3 !important;
        border-radius: 12px; 
      }
    }
  }
}
</style>
<style scoped lang="scss">
#scrollerP {
  position: relative;
  min-height: 100%;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    position: unset;
  }
}
#scrollerC {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: -20px;
  overflow-y: scroll;
  @media screen and (max-width: 768px) {
    position: unset;
  }
}
.signInCss {
  background: #f9f8f8 !important;
  margin: 1rem;
  border-radius: 7px;
  justify-content: center;
  padding: 0px !important;
}
.hidebtncss {
  font-weight: 500;
  font-size: 1rem;

  background: #244c5a !important;
  border-color: #244c5a !important;
  padding: 7px 15px;
}
.hidebtncss1 {
  font-weight: 500;
  font-size: 1rem;

  background: grey !important;
  border-color: grey !important;
  padding: 7px 15px;
}
.footercss1 {
  color: #4f4f4f;
  font-weight: normal;
  font-size: 0.8125rem;
  padding: 0 1rem;
}
.footer-price {
  color: #9d8147;
  font-weight: bold;
  font-size: 1rem;
}
.footercss {
  // border-top: 1px solid #e0e0e0;
  // box-shadow: 0px -1px 3px #e0e0e0;
  // box-shadow: 0px -1px 8px 1px rgba(0, 0, 0, 0.06);
}
.emptybg {
  @media screen and (max-width: 768px) {
    background: #FFF;
  }
}
.atTop {
  position: fixed;
  width: 100%;
  z-index: 10;
  background: #f9f8f8;
  .cart-title {
    background: #fff;
    height: 56px;
    display: flex;
    align-items: center;
    
    padding-left: 28px !important;
    @media screen and (max-width: 768px) {
      display: none;
    }
    .cartimg {
      width: 21px;
    }
    .cart-txt {
      color: #000;
      font-weight: 400;
      font-size: 24px;
      margin-left: 5px;
    }
  }
  .sele-all-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFF;
    padding-left: 28px;
    padding-bottom: 1rem !important;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    @media screen and (max-width: 768px) {
      padding: 28px;
    }
  }
  .sele-all-btn1 {
    @media screen and (max-width: 768px) {
      box-shadow: unset !important;
      padding: 28px;
    }
  }
  .empty-block {
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      background: #FFF;
      justify-content: center;
      align-items: center;
      padding-top: calc(25vh - 80px);
    }
    .empty-img {
      @media screen and (max-width: 768px) {
        width: 180px;
        height: 180px;
      }
    }
    .empty-text {
      @media screen and (max-width: 768px) {
        font-weight: 400;
        font-size: 1rem;
        color: #B79CED;
        margin: 2rem 0;
      }
    }
    .btn-empty {
      @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .empty-btn {
        @media screen and (max-width: 768px) {
          background: #E9B531;
          border-radius: 24px;
          font-weight: 700;
          font-size: 1rem;
          color: #FFF;
          margin-bottom: 0;
          padding: 0 3rem;
          height: 36px;
          line-height: 36px;
        }
      }
    }
  }
  .showData {
    display: none;
  }
  .select-all-txt, .select-all-txt1 {
    font-weight: 400;
    font-size: 14px;
    color: #000;

    border: 2px solid #000000;
    border-radius: 6px;
    margin-bottom: 0;

    padding: 3px 2.5rem;
    cursor: pointer;
  }
  .select-all-txt1 {
    padding: 3px 1.5rem;
  }
  .emptycss {
    @media screen and (max-width: 768px) {
      visibility: hidden;
    }
  }
  .cartimg {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      width: 24px;
      width: 24px;
    }
  }
}
.checkGro {
  padding: 0rem;
  border-top: 1px solid rgba(0,0,0,0.05);
  // box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  @media screen and (max-width: 768px) {
    margin-top: 1px;
  }
}
.checkGrop1 {
  margin-top: 60px;
  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
}
.collapseDiv {
  @media screen and (max-width: 768px) {
    margin-bottom: 4px;
  }
}
.shopping-way {
  margin-top: 2px;
  background: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 1rem;

  // border-bottom: 1px solid #f9f8f8;
  box-shadow: 0px 1px 3px #e0e0e0;
  @media screen and (max-width: 768px) {
    margin-top: 0;
    box-shadow: 0 2px 8px rgb(0 0 0 / 3%);
  }
  .each-item {
    padding-bottom: 1rem;
    font-size: 1rem;
    color: #bdbdbd;
    font-weight: 400;
    cursor: pointer;
  }
  .select-item {
    padding-bottom: 1rem;
    font-size: 1rem;

    position: relative;
    text-align: center;
    font-weight: 700;
    color: #9d8147;
    cursor: pointer;
  }
  .select-item::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 2px;
    background: #ceb17d;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
}
</style>
<style lang="scss">
.collapse-items1 {
  padding: 1rem 2rem 0 1rem;
  font-size: 0.813rem;
  font-weight: 400;
  color: #4f4f4f;
  background: #fff;
  @media screen and (max-width: 768px) {
    padding-left: 10px;
  }
  .menu-left {
    display: flex;
    align-items: flex-start;
    padding-bottom: 1rem;
    // border-bottom: 2px solid #f9f8f8;
    @media screen and (max-width: 768px) {
      padding-bottom: 0px;
    }
    .orderFalse {
      position: relative;
      text-align: center;
      color: #fff;
    }
    .menu-img {
      width: 89px;
      height: 89px;
      border-radius: 5px;

      background: #FFFFFF;
      border-radius: 12px;
      filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1));
    }
    .menu-txt {
      display: flex;
      flex-direction: column;
      margin-left: 1rem;
      width: 100%;
      .menu-name {
      }
      .deleteBtn {
        .deleteimg {
          width: 18px;
          height: 18px;
        }
      }
      .title-row {
        display: flex;
        justify-content: space-between;
      }
      .common-menu-name {
        padding-bottom: 7px;
        color: #151515;
        font-weight: 400;
        font-size: 1rem;
        margin-bottom: 0;
        @media screen and (max-width: 768px) {
          font-size: 14px;
          width: 60%;
          word-wrap:break-word;
          white-space:normal;
        }
      }
      .limited-css {
        color: #828282;
        font-weight: 400;
        font-size: 0.875rem;
        .text1-limit {
          color: #828282;
          font-weight: 400;
          font-size: 0.875rem;
        }
        .limited-div {
          display: flex;
          .place-div {
            display: flex;
            align-items: center;
            padding-left: 15px;
            cursor: pointer;
          }
        }
        .placeofuse {
          color: #244c5a;
          font-weight: 500;
          padding-right: 5px;
          font-size: 0.875rem;
        }
        .arrow-css {
          width: 8px;
        }
      }
      .delivery-parent {
        width: 100%;
        padding-top: 2px;
        padding-bottom: 2px;
        .delivery {
          background: #f9f8f8;
          color: #bdbdbd;
        }
        .delivery1 {
          background: #fdfcfc;
          color: #e5e5e5;
        }
        .common-deli {
          display: flex;
          align-items: center;
          border-radius: 20px;
          padding: 0;
          margin: 0;
          font-weight: normal;
          width: 40%;
          @media screen and (max-width: 768px) {
            width: 55%;
          }
        }
        .meal-delivery {
          color: #9d8147;
          border: 2px solid #ceb17d;

          background: #ffffff;
          box-sizing: border-box;
          box-shadow: 0px 0px 4px 2px rgba(206, 177, 125, 0.3);
        }
        .meal-delivery1 {
          color: #e7e0d1;
          border: 2px solid #f5efe5;

          background: #ffffff;
          box-sizing: border-box;
          box-shadow: 0px 0px 4px 2px rgba(206, 177, 125, 0.3);
        }
        .common-meal-deli {
          text-align: center;
          font-weight: 500;
          font-size: 0.875rem;
          border-radius: 18px;
          padding: 3px 5px;

          width: 50%;
          cursor: pointer;
        }
        .takeaway {
          padding: 3px 5px;
          font-size: 0.875rem;
        }
      }
    }
  }
  .menu-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 0;
    @media screen and (max-width: 768px) {
      padding: 0;
    }
    .gold-price {
      font-weight: 700;
      font-size: 16px;
      color: #000;
      margin-right: 7px;
    }
    .gold-icon {
      width: 18px;
      height: 18px;
    }
    .signSize {
      width: 12px;
      height: 2px;
      background: #ccb170;
    }
    .common-circle {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .circleMinus {
      cursor: pointer;
      background: #fff;
      border: 1.6px solid #ceb17d;
      color: #ceb17d;
      margin-right: 1rem;
    }
    .circleMinus1 {
      cursor: pointer;
      background: #f2f2f2;
      border: 1.6px solid #f2f2f2;
      color: #ccb170;
      margin-right: 1rem;
    }
    .circleMinus2 {
      cursor: pointer;
      background: #f2f2f2;
      border: 1.6px solid #f2f2f2;
      color: #8f8f8f;
      margin-right: 1rem;
    }
    .circleAdd {
      cursor: pointer;
      background: #ceb17d;
      color: #fff;
      margin-left: 1rem;
    }
    .circleAdd1 {
      cursor: pointer;
      background: #fff;
      border: 1.6px solid #ceb17d;
      color: #ceb17d;
      margin-left: 1rem;
    }
    .circleAdd2 {
      cursor: pointer;
      background: #f2f2f2;
      border: 1.6px solid #f2f2f2;
      color: #8f8f8f;
      margin-left: 1rem;
    }
    .plusSign {
      font-size: 1.2rem;
    }
    .count {
      display: flex;
      align-items: center;
    }
  }
}
</style>
<style lang="scss">
#shopping-cart-header {
  .b-sidebar {
    @media screen and (max-width: 768px) {
      max-height: calc(100vh - 63px);
      max-height: 100vh !important;
      width: 100% !important;
      bottom: 0 !important;
      top: auto !important;
    }
  }
  .el-checkbox__inner {
    width: 24px !important;
    height: 24px !important;
    border: 1.6px solid #b79ced !important;
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
    border-color: #b79ced !important;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner {
    color: #b79ced !important;
    background-color: #b79ced !important;
    border-color: #b79ced !important;
  }
  .el-checkbox__input.is-disabled .el-checkbox__inner {
    background-color: #edf2fc;
    border-color: #DCDFE6 !important;
    cursor: not-allowed;
  }
  .el-checkbox__inner {
    border: 1px solid #b79ced !important;
  }
  label {
    margin-bottom: 0rem; 

    width: 100%;
    margin-right: 0;
    background: #FFF;
    padding: 0 1rem;

    border-bottom: 3px solid #f9f8f8;
    @media screen and (max-width: 768px) {
      padding: 0 10px;
      border-bottom: 3px solid #b79ced;
    }
  }

  .el-checkbox__label {
    padding-left: 0;
    width: 100%;
  }

  .el-radio__input.is-checked .el-radio__inner {
    border-color: #CEB17D !important;
    background: #CEB17D !important;
  }
  .el-radio__input.is-checked+.el-radio__label {
    color: #333 !important;
  }
  .el-radio {
    margin-right: 0px !important;
  }


  .select-all-txt1 {
    .el-checkbox__input {
      display: none;
    }
    label {
      @media screen and (max-width: 768px) {
        padding: 0 10px;
        border-bottom: unset;
      }
    }
  }
}
.shopping-cart-bg {
  width: calc(((100vw / 5) * 2) - 48px);
  width: 528px;
  background-color: #f9f9f8 !important;
  height: 100vh;
}
.b-sidebar-footer {
  // height: 85px;
  // background: #FFFFFF !important;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
}
.bg-dark {
  height: 85px;
  background: #FFFFFF !important;
}
.btn-sm {
  border-radius: 5px;
}
div#shopping-cart-header {
  @media screen and (max-width: 768px) {
    width: 100% !important;
  }
}
</style>
<style lang="scss">
#shoppingId {
  .el-input-number .el-input__inner {
    -webkit-appearance: none;
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;

    border: none;
    line-height: 33px !important;

    font-size: 20px;
    font-weight: 700;
    color: #957FEF;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
  .el-input-number {
    width: 130px !important;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    line-height: 33px;
    // margin: auto;
    margin-left: 0;
    @media screen and (max-width: 768px) {
      margin: 1rem auto;
      margin-left: 0;
      margin-top: 7px;
      margin-bottom: 7px;
      padding-left: 0;
    }
  }
}
#shoppingId {
  .el-input-number__decrease,
  .el-input-number__increase {
    color: #FFF !important;
    background: #b79ced;
    font-size: 1rem !important;
    border: 1px solid #b79ced;
    top: 0px;

    width: 33px;
    height: 33px;
    border-radius: 16.5px;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 4px;
  }
  .el-input-number__decrease.is-disabled,
  .el-input-number__increase.is-disabled {
    color: #DBDBDB !important;
    background: #efefef;
    font-size: 1rem !important;
    border: 1px solid #efefef;
    cursor: not-allowed;

    width: 33px;
    height: 33px;
    border-radius: 16.5px;
  }
  .el-input-number__decrease:hover,
  .el-input-number__increase:hover {
    color: #b79ced !important;
    background: #f7f2e8;
    font-size: 1rem !important;
    border: 1px solid #b79ced;
    top: 0px;
  }
}
</style>
