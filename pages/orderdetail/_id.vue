<template>
  <div>
    <Header />
    <div class="pc-true">
      <b-container class="orderDetail bg-color">
        <div class="leftdiv">
          <div class="title">
            <span class="storeName">兌換清單(Amount)</span>
          </div>
          <div class="product-block">
            <div v-for="item in order && order.items" :key="item.itemId" class="each-product">
              <div>
                <img src="../../assets/pc/product-img.png" class="product-icon">
              </div>
              <div class="product-div">
                <p class="product-text">山丘藍台灣藍莓 5盒裝 單盒淨重 100公克 ×5 盒</p>
                <p class="product-quantity">x20</p>
              </div>
            </div>
          </div>
          <div class="title-block">
            <p class="title-txt">收件資訊</p>
            <div class="detail-content">
              <div class="detail-left">
                <p class="left-facts">聯繫方式：</p>
                <p class="left-facts">收貨人資料：</p>
                <p class="left-facts hidee">收貨人資料：</p>
                <p class="left-facts">配送方式：</p>
              </div>
              <div class="detail-right">
                <p class="right-facts">09-12345678</p>
                <p class="right-facts"> 王大明 </p>
                <p class="right-facts"> 新北市 三重區 光復南路三段156巷24號 </p>
                <p class="right-facts">宅配到府</p>
              </div>
            </div>
          </div>
          <div class="price-block">
            <p class="title-txt">兌換資訊</p>
            <div class="detail-content">
              <div class="detail-left">
                <p class="price1-txt">小計</p>
                <p class="price1-txt">運費</p>
                <p class="price1-txt">使用優惠券</p>
                <p class="price-txt">合計</p>
              </div>
              <div class="detail-right">
                <p class="price-amount">100,900</p>
                <p class="price-amount"> 8,000 </p>
                <p class="price-amount"> 0</p>
                <p class="price1-amount">108,900</p>
              </div>
            </div>
          </div>
          <div class="price1-block">
            <div class="methods-div">
              <p class="title-txt">兌換資訊</p>
              <span class="method-txt">統一編號/管理室代收/電話連絡方式</span>
            </div>
            <div class="detail-content hidee">
              <div class="detail-left">
                <p class="price1-txt">小計</p>
                <p class="price1-txt">運費</p>
                <p class="price1-txt">使用優惠券</p>
                <p class="price-txt">合計</p>
              </div>
              <div class="detail-right">
                <p class="price-amount">100,900</p>
                <p class="price-amount"> 8,000 </p>
                <p class="price-amount"> 0</p>
                <p class="price1-amount">108,900</p>
              </div>
            </div>
          </div>
          <div class="apply-block">
            <p class="apply-txt">申請退貨退款</p>
          </div>
          <div class="apply-block">
            <p class="apply-txt">如有疑問請和我們聯絡</p>
          </div>
        </div>
        <div class="rightdiv">
          <div class="first-row">
            <img src="../../assets/pc/calen-icon.png" class="calen-icon">
            <span class="somethingDate">兌換日期 2024/03/01 23:55</span>
          </div>
          <div class="second-row">
            <div class="leftpart">
              <p class="shipping-status">配送狀態：</p>
              <p class="shipping-result">等待處理</p>
            </div>
            <div class="rightpart">
              <img src="../../assets/pc/shipping-icon.png" class="shipping-icon">
            </div>
          </div>
          <div class="third-row">
            <p class="code-txt">兌換編號 GSDVSD54VFDF</p>
            <div class="copy-div">
              <img src="../../assets/pc/copy-icon.png" class="copy-icon">
              <span class="copy-text">複製</span>
            </div>
          </div>
          <p class="delivery-status">*<span>關於配送狀態</span></p>
        </div>
      </b-container>
    </div>
    <Footer page="category" />
  </div>
</template>
<script>
export default {
  name: 'OrderDetail',
  data() {
    return {
      order: [],
      deliveryTypes: ["未知", "電子票券", "宅配商品", "外帶外送"],
      currentId: null,
      showDropdown: false,
      showModal: false,
    };
  },
  async fetch() {
    if (this.orderId) {
      this.order = {
        items: [
          {
           storeName : [{name: 'name1', itemId: 1}]
          },
          {
           storeName : [{name: 'name2', itemId: 1}]
          },
          {
           storeName : [{name: 'name3', itemId: 1}]
          }
        ]
      }; 
      await this.delay(1000);
    }
  },
  computed: {
    orderId () {
      return this.$route.params.id;
    },
  },
  fetchOnServer: false,
  mount() {
    this.show();
  },
  created() {},
  methods: {
    delay(time) {
      return new Promise(resolve => setTimeout(resolve, time));
    },
    changeStage(val, id) {
      this.showDropdown = val;
      this.currentId = id;
    },
    refundProcess(order) {
      console.log("refundProcess(", order, ")");
      this.$router.push({ name: "refund", query: { id: order.orderId, no: order.orderNo } });
    },
  },
};
</script>
<style lang="scss" scoped>
.pc-true {
  display: flex;
  padding-top: 140px;
  background: #eae9f4;
  min-height: 100vh;
}
.orderDetail {
  width: 80%;
  margin: 3rem auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .leftdiv {
    width: 63%;
    
    .title {
      padding: 1rem 2rem;
      border-radius: 5px 5px 0 0;
      display: flex;
      align-items: center;
      margin-bottom: 2px;
      background: #fff;
      .storeName {
        margin-bottom: 0;
        padding-right: 1rem;
        color: #2C2C2C;
        font-weight: 700;
        font-size: 14px;
      }
    }
    .product-block {
      padding: 1.5rem 2rem 0.5rem;
      background: #fff;
      .each-product {
        display: flex;
        align-items: flex-end;
        background: #fff;
        margin-bottom: 1rem;
        .product-icon {
          width: 64px;
          height: 64px;
        }
        .product-div {
          padding-left: 1rem;
          .product-text {
            font-weight: 400;
            font-size: 12px;
            color: #3C3C3C;
          }
          .product-quantity {
            font-weight: 400;
            font-size: 12px;
            color: #3C3C3C;
            margin-bottom: 0;
          }
        }
      }
    }
    .title-block {
      background: #FFF;
      margin-top: 7px;
      padding: 1rem 2rem;
      .title-txt {
        font-weight: 400;
        font-size: 1rem;
        color: #2C2C2C;
      }
      .detail-content {
        display: flex;
        .detail-left {
          .left-facts {
            font-weight: 400;
            font-size: 12px;
            color: #B9B9B9;
            margin-bottom: 7px;
          }
          .hidee {
            visibility: hidden;
          }
        }
        .detail-right {
          .right-facts {
            font-weight: 400;
            font-size: 12px;
            color: #3C3C3C;
            margin-bottom: 7px;
          }
        }
      }
    }
    .price-block {
      background: #FFF;
      margin-top: 7px;
      padding: 1rem 2rem;
      .title-txt {
        font-weight: 400;
        font-size: 1rem;
        color: #2C2C2C;
      }
      
      .detail-content {
        display: flex;
        justify-content: space-between;
        .detail-left {
          .price1-txt {
            font-weight: 400;
            font-size: 12px;
            color: #957FEF;
            margin-bottom: 7px;
          }
          .price-txt {
            font-weight: 500;
            font-size: 14px;
            color: #000;
            margin-bottom: 7px;
          }
        }
        .detail-right {
          .price-amount {
            font-weight: 400;
            font-size: 14px;
            color: #957FEF;
            margin-bottom: 7px;
          }
          .price1-amount {
            font-weight: 600;
            font-size: 16px;
            color: #E1460E;
            margin-bottom: 7px;
          }
        }
      }
    }
    .price1-block {
      background: #FFF;
      margin-top: 7px;
      padding: 1rem 2rem;
      .methods-div {
        display: flex;
        align-items: center;
      }
      .title-txt {
        font-weight: 400;
        font-size: 1rem;
        color: #2C2C2C;
        margin-bottom: 0;
        margin-right: 3rem;
      }
      .method-txt {
        font-weight: 500;
        font-size: 14px;
        color: #C6C6C6;
      }
      .detail-content {
        display: flex;
        justify-content: space-between;
      }
      .hidee {
        visibility: hidden;
      }
      p {
        margin-bottom: 2px;
      }
    }
    .apply-block {
      background: #FFF;
      margin-top: 7px;
      padding: 10px 2rem;
      .apply-txt {
        font-weight: 400;
        font-size: 1rem;
        color: #7161EF;
        margin-bottom: 0;
        margin-right: 3rem;
      }
    }
  }
  .rightdiv {
    width: 33%;
    background: #FFFFFF;
    border-radius: 12px;
    padding: 1rem 1.5rem;
    .first-row {
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
    .second-row {
      display: flex;
      padding: 1rem 0;
      justify-content: space-between;
      align-items: center;
      .leftpart {
        .shipping-status {
          font-weight: 400;
          font-size: 12px;
          color: #957FEF;
          margin-bottom: 0;
        }
        .shipping-result {
          font-weight: 400;
          font-size: 32px;
          color: #7161EF;
          margin-bottom: 0;
        }
      }
      .rightpart {
        .shipping-icon {
          width: 100px;
          height: 100px;
        }
      }
    }
    .third-row {
      background: #E3D5FF;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      padding: 10px 1rem;
      .code-txt {
        font-weight: 700;
        font-size: 1rem;
        color: #2C2C2C;
        margin-bottom: 0;
      }
      .copy-div {
        .copy-icon {
          width: 13px;
          height: 14px;
        }
        .copy-text {
          font-weight: 400;
          font-size: 12px;
          color: #7161EF;
        }
      }
    }
    .delivery-status {
      margin-bottom: 0;
      font-weight: 400;
      font-size: 14px;
      color: #957FEF;
      margin-top: 1rem;
      span {
        text-decoration: underline;
      }
    }
  }
}
</style>
