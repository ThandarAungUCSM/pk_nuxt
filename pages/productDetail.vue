<template>
  <div>
    <Header page="prodDetail" />
    <div class="product-page">
      <div class="first-row">
        <img src="../assets/pc/produ-img.png" alt="" class="product-img" />
        <div id="normalId" class="prod-data">
          <p class="prod-title">山丘藍台灣藍莓 5盒裝 單盒淨重 100公克 ×5 盒</p>
          <p class="prod-content">藍莓是一種深藍色的小果實，是近年來越來越受歡迎的農產品之一。藍莓味道鮮美，並且擁有豐富的營養價值，含有豐富的維生素C、維生素K、維生素E和膳食纖維等多種營養成分。此外，藍莓還含有豐富的抗氧化物質，能夠幫助抵禦自由基對身體的損害，對保持身體健康有很大的幫助。</p>
          <span class="prod-price">
            <img src="../assets/mobile/itemicon_gold.png" class="gold-icon">
            <span>99,999</span>
          </span>
          <div class="bottom-block">
            <el-input-number
              v-model="showArr"
              :min="1"
              :max="5"
              @change="(currentVal, oldVal) => {updateNum(currentVal, oldVal)}" ></el-input-number>
            <div class="two-btn">
              <p class="to-cart">加入購物車</p>
              <p class="buy-now">立即購買</p>
            </div>
          </div>
          <div class="heart-row">
            <img src="../assets/pc/heart.png" alt="" class="heart-img" />
            <span class="to-tracklist">加入追蹤清單</span>
          </div>
        </div>
      </div>
      <div class="each-row">
        <div class="title-row">
          <span class="storeTitle">商品描述</span>
          <h2>
          </h2>
        </div>
        <div>
          <p class="prod-description">【注意事項】</p>
          <p class="prod-description">【商品特色】</p>
          <p class="prod-description">【商品規格】</p>
        </div>
      </div>
      <div class="each-row">
        <div class="title-row">
          <span class="storeTitle">了解更多</span>
          <h2>
          </h2>
        </div>
        <img src="../assets/pc/prod1.png" alt="" class="prod-img" />
        <img src="../assets/pc/prod2.png" alt="" class="prod-img" />
        <img src="../assets/pc/prod3.png" alt="" class="prod-img" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
export default {
  name: 'ProductDetail',
  data() {
    return {
      showArr: 1
    }
  },
  computed: {
    
  },
  methods: {
    updateNum(current, old) {
      console.log('current ', current);
      console.log('old ', old);
    }
  }
}
</script>

<style lang="scss">
.el-input-number .el-input__inner {
  -webkit-appearance: none;
  padding-left: 50px;
  padding-right: 50px;
  text-align: center;

  border: none;
  line-height: 36px !important;

  font-size: 20px;
  font-weight: 700;
  color: #957FEF;
}
#collapseProId .el-input__inner {
  border-radius: 4px !important;
  border: 1px solid #dcdfe6 !important;
  color: #333333;
  font-weight: 500;
  font-size: 1rem;
  display: inline-block;
  height: 36px !important;
  line-height: 36px !important;
  padding: 0 15px !important;
  border-bottom: 1px solid #dcdfe6 !important;
}
.el-input-number {
  width: 150px !important;

  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 36px;
  margin: auto;
}
#normalId {
  .el-input-number__decrease,
  .el-input-number__increase {
    color: #FFF !important;
    background: #b79ced;
    font-size: 1rem !important;
    border: 1px solid #b79ced;
    top: 0px;

    width: 36px;
    height: 36px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .el-input-number__decrease.is-disabled,
  .el-input-number__increase.is-disabled {
    color: #DBDBDB !important;
    background: #efefef;
    font-size: 1rem !important;
    border: 1px solid #efefef;
    cursor: not-allowed;

    width: 36px;
    height: 36px;
    border-radius: 18px;
  }
  .el-input-number__decrease:hover,
  .el-input-number__increase:hover {
    color: #ccb170 !important;
    background: #f7f2e8;
    font-size: 1rem !important;
    border: 1px solid #ceb17d;
    top: 0px;
  }
}

#activeId {
  .el-input-number__decrease,
  .el-input-number__increase {
    color: #fff !important;
    background: #ceb17d;
    font-size: 1rem !important;
    border: 1px solid #ceb17d;
    top: 0px;
  }
  .el-input-number__decrease.is-disabled,
  .el-input-number__increase.is-disabled {
    color: #c0c4cc !important;
    background: #f5f7fa;
    font-size: 1rem !important;
    border: 1px solid #bdbdbd;
    cursor: not-allowed;
  }
  .el-input-number__decrease:hover,
  .el-input-number__increase:hover {
    color: #ccb170 !important;
    background: #f7f2e8;
    font-size: 1rem !important;
    border: 1px solid #ceb17d;
    top: 0px;
  }
}
</style>

<style lang="scss" scoped>
.product-page {
  padding-top: 156px;
  width: 60%;
  margin: auto auto 96px;
  .first-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 64px;
    .product-img {
      width: 45%;
    }
    .prod-data {
      width: 50%;
      margin-top: 50px;
      position: relative;
      .prod-title {
        font-weight: 400;
        font-size: 20px;
        color: #3C3C3C;
      }
      .prod-content {
        font-weight: 400;
        font-size: 16px;
        color: #957FEF;
      }
      .prod-price {
        font-weight: 400;
        font-size: 20px;
        color: #E1460E;
        .gold-icon {
          width: 24px;
          height: 24px;
          @media screen and (max-width: 768px) {
            width: 18px;
            height: 18px;

            margin-right: 6px;
          }
        }
      }
      .bottom-block {
        position: absolute;
        width: 100%;
        bottom: 0;
      }
      .two-btn {
        display: flex;
        margin-top: 12px;
        .to-cart, .buy-now {
          font-weight: 700;
          font-size: 1rem;
          color: #FFF;
          width: 50%;
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 0;
        }
        .to-cart {
          background: #7161EF;
        }
        .buy-now {
          background: #E9B531;
        }
      }
      .heart-row {
        position: absolute;
        bottom: -50px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
      .heart-img {
        width: 24px;
        height: 24px;
        margin-right: 10px;
      }
      .to-tracklist {
        font-weight: 400;
        font-size: 1rem;
        color: #2D2D2D;
      }
    }
  }
  .each-row {
    padding-top: 10px;
  }
  .title-row {
    display: flex;
    align-items: center;
    padding: 5px 0;
    h2 {
      width: 91%;
      border-bottom: 2px solid #EBE7FF;
      border-radius: 2px;
      line-height: 2px;
      margin: 0;
    }
    .storeTitle {
      color: #3C3C3C;
      font-weight: 400;
      font-size: 20px;
      width: 9%;
    }
  }
  .prod-img {
    width: 100%;
    max-width: 100%;
    margin-bottom: 5px;
  }
  .prod-description {
    font-weight: 400;
    font-size: 14px;
    color: #3C3C3C;
    margin-bottom: 5px;
  }
}

.menu-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 0;
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
</style>
