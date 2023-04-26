<template>
  <div>
    <div class="refund-div">
      <div class="product-row">
        <div v-for="(eachproduct, idx) in cartLists" :key="idx" class="row-div">
          <div class="collapse-items1">
            <div class="menu-left">
              <div class="orderFalse">
                <img class="menu-img" :src="eachproduct.imagePath" />
              </div>
              <div class="menu-txt">
                <p class="common-menu-name">
                  {{eachproduct.name}}
                </p>
                <p class="common-menu-price">x {{eachproduct.count}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="price-row">
          <p class="refund-price">108,900</p>
        </div>
      </div>
      <div id="refundId" class="package-row">
        <p class="package-receive">是否收到包裹</p>
        <el-radio-group v-model="radioData">
          <el-radio :label="1" class="facts">
            <p class="yes-css">是</p>
          </el-radio>
          <el-radio :label="2" class="facts">
            <p class="yes-css">否</p>
          </el-radio>
        </el-radio-group>
      </div>
      <div class="refund-row">
        <p class="package-receive">退貨/退款方案</p>
        <p class="fill-receive">請先填選是否收到包裹</p>
      </div>
      <div class="refund-row">
        <p class="package-receive">退貨原因</p>
        <p class="fill-receive">請先填選是否收到包裹</p>
      </div>
      <div class="refund-price-row">
        <div class="inner-line">
          <div class="inner-1line">
            <p class="package-receive">退款合計(PK幣)</p>
            <p class="price-number">108,900</p>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-div" @click="nextPage(3)">
      <p class="btn-text">下一步，選擇退貨物流</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RefundReturn1',
  props: ["productData"],
  data() {
    return {
      cartLists: [],
      radioData: 3,
    }
  },
  created() {
    this.cartLists = this.productData
  },
  methods: {
    nextPage(val) {
      this.$emit("nextcompo", val)
    }
  }
}
</script>
<style lang="scss" scoped>
  
.refund-div {
  width: 393px;
  margin: auto;
  .product-row {
    background: #FFF;
    padding: 1rem 1.5rem;
    margin-bottom: 5px;
    .row-div {
      display: flex;
      align-items: center;
      width: 100%;
      margin-bottom: 1rem;
      .collapse-items1 {
        padding: 0 2rem 0 1rem;
        font-size: 0.813rem;
        font-weight: 400;
        color: #4f4f4f;
        background: #fff;
        width: 95%;
        @media screen and (max-width: 768px) {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .menu-left {
          display: flex;
          align-items: center;
          padding-bottom: 0;
          @media screen and (max-width: 768px) {
            padding-bottom: 0px;
          }
          .orderFalse {
            position: relative;
            text-align: center;
            color: #fff;
          }
          .menu-img {
            width: 58px;
            height: 64px;
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
            .common-menu-name {
              padding-bottom: 7px;
              color: #3C3C3C;
              font-weight: 400;
              font-size: 12px;
              margin-bottom: 0;
              @media screen and (max-width: 768px) {
                font-size: 14px;
                width: 60%;
                word-wrap:break-word;
                white-space:normal;
              }
            }
            .common-menu-price {
              color: #3C3C3C;
              font-weight: 400;
              font-size: 12px;
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
                color: #E1460E;
                border: 2px solid #E1460E;
      
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
      }
    }
    .row-div:last-child {
      margin-bottom: 0;
    }
    .price-row {
      text-align: right;
    }
    .refund-price {
      font-weight: 600;
      font-size: 16px;
      color: #B79CED;
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
    .facts {
      font-weight: 400;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0px;
      margin-left: 2rem;
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
    .fill-receive {
      font-weight: 400;
      font-size: 14px;
      color: #F35A90;
      margin-bottom: 0;
    }
  }
  .refund-price-row {
    // padding-left: 18px;
    // padding-right: 18px;
    // margin-left: 18px;
    .inner-line {
      .inner-1line {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 48px;
        background: #FFF;
        padding-left: 18px;
        padding-right: 18px;
        margin-bottom: 5px;
        border-bottom: 1px solid #B79CED;

        .price-number {
          font-weight: 700;
          font-size: 20px;
          color: #7161EF;
          margin-bottom: 0;
        }
      }
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
  background: #DFCDA0;
  border-radius: 12px;
  width: 393px;
  height: 48px;
  margin: 80px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .btn-text {
    font-weight: 700;
    font-size: 1rem;
    color: #FFF;
    margin-bottom: 0;
  }
}
</style>
<style lang="scss">
#refundId {
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
  
  .el-radio__input.is-checked .el-radio__inner {
    border-color: #7161EF !important;
    background: #f9f8f8 !important;
    width: 18px;
    height: 18px;
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
    padding-left: 4rem;
    margin-left: 5px;
  }
  .el-radio-group {
    display: flex;
    padding-left: 4rem;
    width: 100%;
  }
  .el-radio-group {
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
  .el-radio__label {
    padding-left: 0rem;
  }
}
</style>