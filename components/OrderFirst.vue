<template>
  <b-container class="order-first">
    <!-- v-if="activeIndex == 0 || activeIndex == 2 || activeIndex == 4" -->
    <div class="order-product">
      <div class="product-title">
        <span class="order-number">兌換編號 GSDVSD54VFDF</span>
      </div>
      <div class="product-content" @click="gotoOrderDetail(order)">
        <div class="first-col">
          <img src="../assets/pc/calen-icon.png" class="calen-icon">
          <span class="somethingDate">兌換日期 2024/03/01 23:55</span>
        </div>
        <div class="second-col">
          <img src="../assets/pc/product-img.png" class="product-icon">
          <span class="product-text">山丘藍台灣藍莓 5盒裝 單盒淨重 100公克 ×5 盒...</span>
        </div>
        <div class="m-four">
          <p class="btn-row">檢視其他商品</p>
        </div>
        <div class="third-col">
          <div class="row1">
            <span class="total-exchange">兌換總額 5,000</span>
            <img src="../assets/mobile/itemicon_gold.png" class="gold-icon">
          </div>
          <div class="row2">
            <span class="total-quantity">共 3 件商品</span>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>
<script>
export default {
  props: ["order", "activeIndex"],
  data() {
    return {
      deliveryTypes: ["未知", "電子票券", "宅配商品", "外帶外送"],
      serviceRecord: false,
    };
  },
  created() {},
  methods: {
    showRecordHistory() {
      console.log("showRecordHistory()");
      if (this.serviceHistory > 1) {
        this.serviceRecord = true;
      } else if (this.serviceHistory === 1) {
        this.$router.push(`/orderdetail/${this.order.orderId}`);
      }
    },
    gotoOrderDetail(order) {
      console.log("gotoOrderDetail(order=", order, ")");
      if(order) {
        this.$router.push("/orderdetail/" + order.orderId);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
// $size-xl: 1080px;
// $size-lg: 992px;
.order-first {
  width: 80%;
  min-width: 100%;
  margin: 0 auto;
  margin-bottom: 1rem;
  @media screen and (max-width: 1080px) {
    width: 94%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: unset;
    max-width: 100%;
    margin-bottom: 0rem;
    padding-left: 0;
    padding-right: 0;
    border-bottom: 5px solid #6e00fa;
  }
  .order-product {
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    @media screen and (max-width: 768px) {
      border-radius: 0;
    }
    .product-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f7f2e8;
      padding-left: 1.5rem;
      padding-right: 1.5rem;

      height: 48px;

      background: #E3D5FF;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      @media screen and (max-width: 768px) {
        border-radius: 0;
      }
      .order-number {
        color: #2C2C2C;
        font-weight: 400;
        font-size: 14px;
      }
    }
    .product-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 2rem 14px 1.5rem;
      @media screen and (max-width: 768px) {
        padding: 14px 1.5rem 14px 1.5rem;
        flex-direction: column;
        align-items: flex-start;
      }
      cursor: pointer;
      .first-col {
        @media screen and (max-width: 768px) {
          padding-bottom: 1rem;
          width: 100%;
        }
        .calen-icon {
          width: 18px;
          height: 18px;
        }
        .somethingDate {
          font-weight: 400;
          font-size: 12px;
          color: #848484;
          margin-left: 3px;
        }
      }
      .second-col {
        @media screen and (max-width: 768px) {
          display: flex;
          align-items: flex-start;
          width: 100%;
        }
        .product-icon {
          width: 64px;
          height: 64px;
        }
        .product-text {
          font-weight: 400;
          font-size: 12px;
          color: #3C3C3C;
          margin-left: 7px;
        }
      }
      .m-four {
        display: none;
        @media screen and (max-width: 768px) {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #B38BFF;
          border-radius: 12px;
          width: 100%;
          margin: 1rem 0;
          height: 25px;
        }
        .btn-row {
          font-weight: 400;
          font-size: 12px;
          color: #A97BFF;
          margin-bottom: 0;
        }
      }
      .third-col {
        @media screen and (max-width: 768px) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: row-reverse;
          width: 100%;
        }
        .row1 {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-bottom: 5px;
          @media screen and (max-width: 768px) {
            margin-bottom: 0;
          }
          .total-exchange {
            font-weight: 500;
            font-size: 16px;
            color: #E1460E;
            margin-right: 10px;
          }
          .gold-icon {
            width: 18px;
            height: 18px;
          }
        }
        .row2 {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          .total-quantity {
            font-weight: 400;
            font-size: 12px;
            color: #957FEF;
          }
        }
      }
    }
  }
}
</style>
