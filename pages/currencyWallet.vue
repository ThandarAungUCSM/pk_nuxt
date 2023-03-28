<template>
  <div>
    <Header />
    <div class="currency-page">
      <div class="content-block">
        <div class="left-div">
          <div class="upper-block">
            <p class="tot-wallet">總持有</p>
            <div class="flex-css">
              <img src="../assets/mobile/itemicon_gold.png" class="gold-icon">
              <span v-if="hideData == true" class="wallet-count">****</span>
              <span v-else class="wallet-count">6,660</span>
            </div>
            <div class="eye-div">
              <img v-if="hideData == true" src="../assets/mobile/eye-crossed.png" class="eye-icon" @click="hideData = !hideData" >
              <img v-else src="../assets/mobile/eye.png" class="eye-icon" @click="hideData = !hideData" >
            </div>
          </div>
          <p class="currency-text">已連動遊戲換算</p>
          <div class="lower-block">
            <div class="each-block">
              <p class="currency-title">幣別</p>
              <p class="each-text">楓幣</p>
              <p class="each-text">米茲幣</p>
              <p class="each-text1">幣別名稱</p>
            </div>
            <div class="each-block">
              <p class="currency-title">持有數量</p>
              <p v-if="hideData == true" class="each-text">****</p>
              <p v-else class="each-text">5,000,000</p>
              <p v-if="hideData == true" class="each-text">****</p>
              <p v-else class="each-text">172,500</p>
              <p v-if="hideData == true" class="each-text1">****</p>
              <p v-else class="each-text1">999,999,999</p>
            </div>
            <div class="each-block">
              <p class="currency-title">PK</p>
              <p v-if="hideData == true" class="each-text">****</p>
              <p v-else class="each-text">=1,000</p>
              <p v-if="hideData == true" class="each-text">****</p>
              <p v-else class="each-text">=500</p>
              <p v-if="hideData == true" class="each-text1">****</p>
              <p v-else class="each-text1">=5,160</p>
            </div>
          </div>
        </div>
        <div class="right-div">
          <p class="currencyRatio-text">遊戲幣值比率總覽</p>
          <div class="lower-block">
            <div class="each-block">
              <p class="currency-title">遊戲名稱</p>
              <p class="each-text">楓之谷</p>
              <p class="each-text">米茲塔爾</p>
              <p class="each-text">Null</p>
              <p class="each-text">Null</p>
              <p class="each-text">Null</p>
              <p class="each-text2">Null</p>
            </div>
            <div class="each-block">
              <p class="currency-title">幣別</p>
              <p class="each-text">PK/楓幣</p>
              <p class="each-text">PK/米茲幣</p>
              <p class="each-text">PK/Null</p>
              <p class="each-text">PK/Null</p>
              <p class="each-text">PK/Null</p>
              <p class="each-text2">PK/Null</p>
            </div>
            <div class="each-block">
              <p class="currency-title">採用</p>
              <p class="each-text">5,000</p>
              <p class="each-text">345</p>
              <p class="each-text">17,580</p>
              <p class="each-text">10,000</p>
              <p class="each-text">30,000</p>
              <p class="each-text2">停止兌換</p>
            </div>
          </div>
        </div>
      </div>
      <div class="m-doll">
        <img src="../assets/mobile/doll.png" class="doll-img">
      </div>
    </div>
    <Footer page="productDetail" />
  </div>
</template>
<script>
export default {
  name: 'CurrencyWallet',
  data() {
    return {
      hideData: false
    }
  }
}
</script>

<style lang="scss" scoped>
.currency-page {
  padding-top: 156px;
  background: #241a79;
  height: calc(100vh - 80px);
  @media screen and (max-width: 768px) {
    padding-top: 100px;
    padding-bottom: 2rem;
    width: 100%;
    height: unset;
  }
  .content-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin: 2rem auto 0;
    @media screen and (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      margin-top: 1rem;
    }
    .left-div {
      text-align: center;
      width: 48%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      .upper-block {
        background: #2623AF;
        border-radius: 24px;
        padding: 5px 100px 31px;
        text-align: center;
        width: 90%;
        margin: 0 auto;
        @media screen and (max-width: 768px) {
          padding: 5px 0 1rem;
        }
        .tot-wallet {
          font-weight: 400;
          font-size: 12px;
          color: #FFF;
          margin-bottom: 5px;
        }
        .flex-css {
          display: flex;
          align-items: center;
          justify-content: center;
          .gold-icon {
            width: 36px;
            height: 36px;
          }
          .wallet-count {
            font-weight: 500;
            font-size: 24px;
            color: #FFF;
            margin-left: 23px;
          }
        }
        .eye-div {
          display: none;
          @media screen and (max-width: 768px) {
            display: flex;
            text-align: left;
            padding-left: 1.5rem;
          }
          .eye-icon {
            width: 18px;
            height: 18px;
          }
        }
      }
      .currency-text {
        font-weight: 700;
        font-size: 12px;
        color: #2BDE73;
        margin: 1rem 0;
      }
    }
    .right-div {
      text-align: center;
      width: 48%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      .currencyRatio-text {
        font-weight: 700;
        font-size: 12px;
        color: #FFF;
        @media screen and (max-width: 768px) {
          margin-top: 1rem;
        }
      }
    }
    .lower-block {
      background: #201861;
      border: 1px solid #7161EF;
      border-radius: 12px;
      display: flex;
      justify-content: space-between;
      padding-right: 2rem;
      padding: 9px 1.5rem 1rem 1rem;
      @media screen and (max-width: 768px) {
        width: 95%;
        margin: 0 auto;
      }
      .each-block {
        width: 33.33%;
        text-align: right;
      }
      .currency-title {
        font-weight: 400;
        font-size: 10px;
        color: #FFD643;
        margin-bottom: 10px;
        @media screen and (max-width: 768px) {
          text-align: center;
        }
      }
      .each-text {
        font-weight: 400;
        font-size: 14px;
        color: #FFF;
        margin-bottom: 5px;
      }
      .each-text1 {
        font-weight: 400;
        font-size: 14px;
        color: #FFF;
        margin-bottom: 0px;
      }
      .each-text2 {
        font-weight: 400;
        font-size: 14px;
        color: #F43939;
        margin-bottom: 0px;
      }
    }
  }
  .m-doll {
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
      margin: 2rem 0 0;
    }
    .doll-img {
      width: 87px;
      height: 87px;
    }
  }
}
</style>