<template>
  <div>
    <Header />
    <div id="orderlistId" class="order-list">
      <div class="orderList-content">
        <p class="exchange">兌換</p>
        <div class="one-row">
          <div class="left-block">
            <div class="Lupper-block">
              <div class="title-row">
                <div class="left-title">
                  <img class="shipping-icon" src="../assets/pc/school-bus.png" />
                  <span class="shipping-text">寄送方式</span>
                </div>
                <div class="right-title">
                  <img class="minus-icon" src="../assets/pc/minus-black.png" />
                </div>
              </div>
              <div>
                <el-radio-group v-model="radioData">
                  <el-radio :label="3" class="facts">
                    <div>
                      <div class="shipp-method">
                        <img class="shipping1" src="../assets/pc/shipping-icon1.png" />
                        <div class="shiip-txt">
                          <div>
                            <p class="home-delivery">宅配到府</p>
                            <p class="expected-date">預計2~3個工作天配達</p>
                          </div>
                          <div v-if="radioData == 3" class="location-btn3">
                            <img class="location" src="../assets/pc/location.png" />
                            <p class="location-text">選擇門市</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="radioData == 3" class="btn-css3">
                      <p class="confirm-btn">確認</p>
                    </div>
                  </el-radio>
                  <el-radio :label="6" class="facts">
                    <div>
                      <div class="shipp-method">
                        <img class="shipping1" src="../assets/pc/shipping-icon2.png" />
                        <div class="shiip-txt">
                          <div>
                            <p class="home-delivery">宅配到府</p>
                            <p class="expected-date">預計2~3個工作天配達</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-radio>
                  <el-radio :label="9" class="facts">
                    <div>
                      <div class="shipp-method">
                        <img class="shipping1" src="../assets/pc/shipping-icon3.png" />
                        <div class="shiip-txt">
                          <div>
                            <p class="home-delivery">宅配到府</p>
                            <p class="expected-date">預計2~3個工作天配達</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-radio>
                  <el-radio :label="12" class="facts">
                    <div>
                      <div class="shipp-method">
                        <img class="shipping1" src="../assets/pc/shipping-icon4.png" />
                        <div class="shiip-txt">
                          <div>
                            <p class="home-delivery">宅配到府</p>
                            <p class="expected-date">預計2~3個工作天配達</p>
                          </div>
                          <div v-if="radioData == 12" class="receive-block">
                            <p class="receive-info-title">收件資訊</p>
                            <div class="info-group">
                              <div class="left-info">
                                <p class="left-text">收件人</p>
                                <p class="left-text">電話</p>
                                <p class="left-text">地址</p>
                              </div>
                              <div class="right-info">
                                <p class="right-text">王大明</p>
                                <p class="right-text">0912345678</p>
                                <p class="right-text">新北市 三重區 復興北路87巷</p>
                              </div>
                            </div>
                            <div class="location-btn">
                              <img class="location" src="../assets/pc/location.png" />
                              <p class="location-text">修改地址</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="radioData == 12" class="btn-css">
                      <p class="confirm-btn">確認</p>
                    </div>
                  </el-radio>
                </el-radio-group>
              </div>
            </div>
            <div class="Llower-block">
              <div class="title-row">
                <div class="left-title">
                  <img class="dollar-icon" src="../assets/pc/dollar.png" />
                  <span class="shipping-text">使用遊戲幣</span>
                </div>
                <div class="right-title">
                  <img class="minus-icon" src="../assets/pc/minus-black.png" />
                </div>
              </div>
              <div v-if="ifData" class="items-block">
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
                      <p class="withdrawn-name">256,000</p>
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
                      <p class="withdrawn-name">256,000</p>
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
                      <p class="withdrawn-name">256,000</p>
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
              <div v-else class="nodata-block">
                <div class="nameno-block">
                  <img class="convertempty-icon" src="../assets/pc/convert-empty.png" />
                  <div class="nameno-div">
                    <p class="empty-name">尚未有連動的遊戲錢包</p>
                    <p class="currency-btn">前往連動</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right-block">
            <div class="hide-m">
              <div class="price-block">
                <p class="price-title">兌換詳情</p>
                <div class="price-row">
                  <p class="pri-txt">小計</p>
                  <p class="pri-txt1">1,900</p>
                </div>
                <div class="price-row">
                  <p class="pri-txt">運費</p>
                  <p class="pri-txt1">0</p>
                </div>
                <div class="price-row">
                  <p class="pri-txt">使用優惠券</p>
                  <p class="pri-txt1">0</p>
                </div>
                <div class="price-total">
                  <p class="total-txt">合計</p>
                  <p class="total-txt1">1,900</p>
                </div>
              </div>
            </div>
            <div class="hide-m">
              <div class="price-block">
                <div class="price-row">
                  <div class="coupon-left">
                    <img class="star-icon" src="../assets/pc/star-icon.png" />
                    <p class="coupon-txt">優惠券</p>
                  </div>
                  <div class="coupon-right">
                    <p class="cou-rightxt">請選擇優惠券或輸入優惠代碼</p>
                    <img id="show-modal" class="right-icon" src="../assets/pc/right-arr.png" @click="showModal = true" />
                  </div>
                </div>
                <convertModal v-if="showModal" :show="showModal" @close="showModal = false" />
              </div>
            </div>
            <div id="oneRadioId" class="third-row hide-m">
              <el-radio-group v-model="oneData">
                <el-radio :label="3" class="facts">
                  <div class="policy-css">
                    <p class="agree-css">我同意<span class="spantext">PK購物條款</span></p>
                  </div>
                </el-radio>
              </el-radio-group>
            </div>
            <div class="price-block1 hide-m">
              <p class="price-title">確認兌換</p>
            </div>
            <div class="cart-block">
              <div class="title-row">
                <div class="left-title">
                  <img class="shopping-icon" src="../assets/mobile/shopping-cart.png" />
                  <span class="shipping-text">4項商品</span>
                </div>
                <div class="right-title">
                  <img class="minus-icon" src="../assets/pc/minus-black.png" />
                </div>
              </div>
              <div class="each-row" @click="gotoPage()">
                <div class="orderFalse">
                  <img class="menu-img" src="../assets/pc/product.png" />
                </div>
                <div class="each-right">
                  <p class="product-text">奶油椰子口味玉米脆條 (造句包)</p>
                  <div class="each-brow">
                    <div class="each-price">
                      <img class="gold-icon" src="../assets/mobile/itemicon_gold.png" />
                      <span class="gold-price">100</span>
                    </div>
                    <p class="each-count">x1</p>
                  </div>
                </div>
              </div>
              <div class="each-row" @click="gotoPage()">
                <div class="orderFalse">
                  <img class="menu-img" src="../assets/pc/product1.png" />
                </div>
                <div class="each-right">
                  <p class="product-text">奇多隨口脆-家常起司(28G/12入)</p>
                  <div class="each-brow">
                    <div class="each-price">
                      <img class="gold-icon" src="../assets/mobile/itemicon_gold.png" />
                      <span class="gold-price">400</span>
                    </div>
                    <p class="each-count">x2</p>
                  </div>
                </div>
              </div>
              <div class="each-row" @click="gotoPage()">
                <div class="orderFalse">
                  <img class="menu-img" src="../assets/pc/product2.png" />
                </div>
                <div class="each-right">
                  <p class="product-text">Monster魔爪能量碳酸飲料355mL(24...</p>
                  <div class="each-brow">
                    <div class="each-price">
                      <img class="gold-icon" src="../assets/mobile/itemicon_gold.png" />
                      <span class="gold-price">1,400</span>
                    </div>
                    <p class="each-count">x1</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="show-m">
              <div class="price-block">
                <div class="price-row">
                  <div class="coupon-left">
                    <img class="star-icon" src="../assets/pc/star-icon.png" />
                    <p class="coupon-txt">優惠券</p>
                  </div>
                  <div class="coupon-right">
                    <p class="cou-rightxt">請選擇優惠券或輸入優惠代碼</p>
                    <img id="show-modal" class="right-icon" src="../assets/pc/right-arr.png" @click="showModal = true" />
                  </div>
                </div>
                <convertModal v-if="showModal" :show="showModal" @close="showModal = false" />
              </div>
            </div>
            <div class="show-m">
              <div class="bg-m">
                <div class="m-bus-row">
                  <div class="left-title">
                    <img class="shipping-icon" src="../assets/pc/school-bus.png" />
                    <span class="shipping-text">寄送方式</span>
                  </div>
                  <div class="right-title">
                    <span class="ship-name">7-11超商取貨-OX門市$1,500</span>
                  </div>
                </div>
                <div class="right-div">
                  <img id="show-modal" class="right-icon" src="../assets/pc/right-arr.png" @click="showModal = true" />
                </div>
              </div>
            </div>
            <div v-if="!connectedGame" class="show-m">
              <div class="bg-m">
                <div class="m-bus-row">
                  <div class="left-title">
                    <span class="shipping-text">使用遊戲幣</span>
                  </div>
                  <div class="right-title">
                    <span class="game-connect">尚未有連動的遊戲錢包</span>
                  </div>
                </div>
                <div class="m-bus-row2">
                  <div class="connect-btn" @click="$router.push('/')">
                    <span class="connectgame-txt">前往連動</span>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="show-m">
              <div class="bg-m">
                <div class="m-bus-row">
                  <div class="left-title">
                    <span class="shipping-text">使用遊戲幣</span>
                  </div>
                  <div class="right-title">
                    <span class="ship-name1">米茲塔爾</span>
                  </div>
                </div>
                <div class="right-div">
                  <img id="show-modal" class="right-icon" src="../assets/pc/right-arr.png" @click="showModal = true" />
                </div>
                
                <div class="m-bus-row1">
                  <div class="left-title">
                    <span class="shipping-text1">將提領</span>
                  </div>
                  <div class="right-title">
                    <span class="ship-name2">256,000</span>
                  </div>
                </div>
                <div class="m-bus-row1">
                  <div class="left-title">
                    <span class="shipping-text1">換算後等值PK幣</span>
                  </div>
                  <div class="right-title">
                    <span class="ship-name2">1,900</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="show-m">
              <div class="bg-m">
                <div class="m-bus-row">
                  <div class="left-title">
                    <span class="shipping-text">兌換詳情</span>
                  </div>
                </div>
                <div class="m-bus-row1">
                  <div class="left-title">
                    <span class="shipping-text2">小計</span>
                  </div>
                  <div class="right-title">
                    <span class="ship-name3">1,900</span>
                  </div>
                </div>
                <div class="m-bus-row1">
                  <div class="left-title">
                    <span class="shipping-text2">運費</span>
                  </div>
                  <div class="right-title">
                    <span class="ship-name3">0</span>
                  </div>
                </div>
                <div class="m-bus-row1">
                  <div class="left-title">
                    <span class="shipping-text2">使用優惠券-NKUUD</span>
                  </div>
                  <div class="right-title">
                    <span class="ship-name3">0</span>
                  </div>
                </div>
                <div class="m-bus-row1">
                  <div class="left-title">
                    <span class="shipping-text">合計</span>
                  </div>
                  <div class="right-title">
                    <span class="ship-name4">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-css">
      <div class="left-div">
        <p class="tot-text">總計</p>
        <div class="pri-div">
          <!-- <p v-if="!emptycart" class="price-text">hh</p> -->
          <p class="price-text">0</p>
          <img src="../assets/mobile/itemicon_gold.png" class="gold-icon">
        </div>
      </div>
      <div class="right-div">
        <!-- <b-button v-if="emptycart === false" size="sm" class="btn-css">前往兌換(0))</b-button> -->
        <b-button size="sm" class="empty-btn-css">確認兌換</b-button>
      </div>
    </div>
    <Footer page="productDetail" class="forPC" />
  </div>
</template>
<script>
export default {
  name: 'OrderList',
  data() {
    return {
      radioData: 12,
      oneData: 0,
      ifData: true,
      checkClick: false,
      activeId: 0,
      showModal: false,

      connectedGame: true
    }
  },
  methods: {
    toCheck(val) {
      this.checkClick = true
      this.activeId = val
    },
    gotoPage() {
      this.$router.push('convertCart')
    }
  }
}
</script>
<style lang="scss" scoped>
.order-list {
  padding-top: 140px;
  background: #eae9f4;
  @media screen and (max-width: 768px) {
    padding-top: 70px; 
  }
  .orderList-content {
    width: 80%;
    margin: 0 auto;
    padding-bottom: 7rem;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    .exchange {
      font-weight: 400;
      font-size: 24px;
      color: #000;
      margin: 1rem 0 6px;
      @media screen and (max-width: 768px) {
        margin: 0;
        padding: 1rem;
        background: #FFF;
        font-weight: 500;
        font-size: 20px;
      }
    }
    .one-row {
      display: flex;
      justify-content: space-between;
      .left-block {
        width: 53%;
        margin-top: 10px;
        @media screen and (max-width: 768px) {
          display: none;
        }
        .Lupper-block {
          background: #FFF;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          .title-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 2rem 2rem 2.5rem;
            .left-title {
              // display: flex;
              .shipping-icon {
                width: 14px;
                height: 14px;
              }
              .shipping-text {
                font-weight: 500;
                font-size: 14px;
                color: #000;
                margin-left: 7px;
              }
            }
            .right-title {
              .minus-icon {
                width: 12px;
              }
            }
          }
          .facts {
            font-weight: 400;
            display: flex;
            margin-bottom: 20px;
            width: 100%;
            .shipp-method {
              display: flex;
            }
            .shipping1 {
              width: 24px;
              height: 24px;
              margin-top: 10px;
            }
            .shiip-txt {
              margin-left: 27px;
            }
            .home-delivery {
              font-weight: 400;
              font-size: 14px;
              color: #2C2C2C;
            }
            .expected-date {
              font-weight: 400;
              font-size: 14px;
              color: #EF7B61;
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
          .btn-css3 {
            background: #B1AAED;
            border-radius: 6px;
            width: 80px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 40px auto 0;
          }
          .btn-css {
            background: #7161EF;
            border-radius: 6px; 
            width: 80px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 30px auto 0;
          }
          .confirm-btn {
            font-weight: 700;
            font-size: 14px;
            color: #FFF;
            padding: 7px 0rem;
            margin-bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .Llower-block {
          background: #FFF;
          .title-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 2rem 2rem 2.5rem;
            .left-title {
              .dollar-icon {
                width: 8px;
                height: 14px;
              }
              .shipping-text {
                font-weight: 500;
                font-size: 14px;
                color: #000;
                margin-left: 7px;
              }
            }
            .right-title {
              .minus-icon {
                width: 12px;
              }
            }
          }
          .items-block {
            padding: 0 4rem 2rem 6rem;
            .name-block {
              display: flex;
              align-items: center;
              background: #FFFFFF;
              border: 1px solid #E7E7E7;
              margin-bottom: 10px;
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
              width: 58px;
              height: 58px;
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
              margin: 0 33px 0 74px;
              .withdrawn-name {
                font-weight: 400;
                font-size: 14px;
                color: #957FEF;
                margin-bottom: 0;
              }
              .currency-pk {
                font-weight: 500;
                font-size: 14px;
                color: #FF8A65;
                margin-bottom: 0;
              }
            }
            .name-div {
              padding-left: 1rem;
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

          .nodata-block {
            padding: 0 4rem 72px;
            .nameno-block {
              display: flex;
              align-items: center;
              justify-content: space-between;
              background: #FFFFFF;

              width: 50%;
              margin: auto;
            }
            .convertempty-icon{
              width: 124px;
              height: 124px;
            }
            .nameno-div {
              .empty-name {
                font-weight: 400;
                font-size: 14px;
                color: #957FEF;
                margin-bottom: 16px;
              }
              .currency-btn {
                font-weight: 700;
                font-size: 16px;
                color: #FFF;
                margin-bottom: 0px;

                background: #7161EF;
                box-shadow: 0px 3px 7px rgba(113, 97, 239, 0.5);
                border-radius: 24px;
                height: 36px;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }
        }
      }
      .right-block {
        width: 42%;
        @media screen and (max-width: 768px) {
          width: 100%; 
        }
        .price-block {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 1rem 2rem;
          margin-top: 10px;
          @media screen and (max-width: 768px) {
            border-radius: 0;
            margin-top: 5px;
            padding: 1rem 1rem 1rem 2rem;
          }
          .price-title {
            font-weight: 500;
            font-size: 14px;
            color: #000;
            margin-bottom: 5px;
          }
          .price-row, .price-total {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .pri-txt {
              font-weight: 500;
              font-size: 12px;
              color: #957FEF;
              margin-bottom: 0;
            }
            .pri-txt1 {
              font-weight: 400;
              font-size: 14px;
              color: #957FEF;
              margin-bottom: 0;
            }
            .total-txt {
              font-weight: 500;
              font-size: 14px;
              color: #000;
              margin-bottom: 0;
            }
            .total-txt1 {
              font-weight: 600;
              font-size: 16px;
              color: #E1460E;
              margin-bottom: 0;
            }
          }
          .coupon-left {
            display: flex;
            align-items: center;
            .star-icon {
              width: 12px;
              height: 12px;
            }
            .coupon-txt {
              font-weight: 500;
              font-size: 14px;
              color: #000;
              margin-bottom: 0;
              margin-left: 10px;
            }
          }
          .coupon-right {
            display: flex;
            align-items: center;
            .right-icon {
              width: 7px;
              height: 14px;
              cursor: pointer;
            }
            .cou-rightxt {
              font-weight: 500;
              font-size: 14px;
              color: #B79CED;
              margin-bottom: 0;
              margin-right: 1rem;
              @media screen and (max-width: 768px) {
                font-weight: 400;
                font-size: 16px;
              }
            }
          }
        }
        .third-row {
          display: flex;
          justify-content: center;
          margin: 1.5rem 0 1rem;
          .facts {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 0px;
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
          }
        }
        .price-block1 {
          background: #B2ADD7;
          border-radius: 12px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          .price-title {
            font-weight: 700;
            font-size: 20px;
            color: #DAD5FF;
            margin-bottom: 0;
          } 
        }
        .cart-block {
          background: #FFF;
          margin-top: 44px;
          padding-bottom: 33px;
          @media screen and (max-width: 768px) {
            margin-top: 3px;
            padding-bottom: 12px;
          }
          .title-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
            .shopping-icon {
              width: 1rem;
              height: 1rem;
            }
            .left-title {
              .shipping-icon {
                width: 14px;
                height: 14px;
              }
              .shipping-text {
                font-weight: 400;
                font-size: 14px;
                color: #000;
                margin-left: 7px;
              }
            }
            .right-title {
              .minus-icon {
                width: 12px;
              }
            }
          }
          .each-row {
            display: flex;
            padding: 1rem;
            background: #F5F2FF;
            backdrop-filter: blur(3px);
            margin: 0 1rem 3px;
            @media screen and (max-width: 768px) {
              margin: 0 5px 3px;
            }
            .orderFalse {
              position: relative;
              text-align: center;
              color: #fff;
              padding-right: 1rem;
              .menu-img {
                width: 89px;
                height: 89px;
                border-radius: 5px;
          
                background: #FFFFFF;
                border-radius: 12px;
                filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1));
                @media screen and (max-width: 768px) {
                  width: 57px;
                  height: 57px;
                }
              }
            }
            .each-right {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              width: 100%;
              .product-text {
                font-weight: 400;
                font-size: 14px;
                color: #151515;
                @media screen and (max-width: 768px) {
                  margin-bottom: 10px;
                }
              }
              .each-brow {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .each-price {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  .gold-icon {
                    width: 18px;
                    height: 18px;
                  }
                  .gold-price {
                    font-weight: 400;
                    font-size: 16px;
                    color: #000;
                  }
                }
                .each-count {
                  font-weight: 400;
                  font-size: 16px;
                  color: #000;
                  margin-bottom: 0;
                }
              }
            }
          }
        }
        .hide-m {
          @media screen and (max-width: 768px) {
            display: none;
          }
        }
        .show-m {
          display: none;
          @media screen and (max-width: 768px) {
            display: block;
          }
          .bg-m {
            background: #FFF;
            margin-top: 5px;
            padding-bottom: 1rem;
          }
          .m-bus-row {
            display: flex;
            padding: 1rem 1rem 5px 2rem;
            justify-content: space-between;
            .ship-name {
              font-weight: 500;
              font-size: 14px;
              color: #2C2C2C;
            }
            .right-title {
              margin-right: 23px;
            }
            .game-connect {
              font-weight: 500;
              font-size: 14px;
              color: #957FEF;
            }
          }
          .m-bus-row2 {
            display: flex;
            justify-content: flex-end;
            padding: 1rem 1rem 5px 2rem;
            margin-top: 1.5rem;
            margin-bottom: 1rem;
            @media screen and (max-width: 768px) {
              padding-top: 0;
              padding-bottom: 0;
              margin-right: 23px;
            }
            .connect-btn {
              background: #7161EF;
              box-shadow: 0px 3px 7px rgba(113, 97, 239, 0.5);
              border-radius: 24px;
              width: 100px;
              height: 24px;
              display: flex;
              align-items: center;
              justify-content: center;
              .connectgame-txt {
                font-weight: 700;
                font-size: 12px;
                color: #FFF;
              }
            }
          }
          .m-bus-row1 {
            display: flex;
            padding: 1rem 1rem 5px 2rem;
            justify-content: space-between;
            @media screen and (max-width: 768px) {
              padding-top: 0;
              padding-bottom: 0;
              margin-right: 23px;
            }
            .ship-name1 {
              font-weight: 500;
              font-size: 14px;
              color: #000;
            }
            .ship-name2 {
              font-weight: 500;
              font-size: 14px;
              color: #E1460E;
            }
            .ship-name3 {
              font-weight: 400;
              font-size: 14px;
              color: #957FEF;
            }
            .ship-name4 {
              font-weight: 600;
              font-size: 16px;
              color: #E1460E;
            }
          }
          .right-div {
            display: flex;
            justify-content: flex-end;
            padding-right: 1rem;
            .right-icon {
              width: 7px;
              height: 14px;
              cursor: pointer;
            }
          }
          .shipping-icon {
            width: 14px;
            height: 14px;
          }
          
          .shipping-text {
            font-weight: 500;
            font-size: 14px;
            color: #000;
          }
          .shipping-text1 {
            font-weight: 400;
            font-size: 14px;
            color: #E1460E;
          }
          .shipping-text2 {
            font-weight: 500;
            font-size: 12px;
            color: #957FEF;
          }
        }
      }
    }
  }
}
.bottom-css {
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    width: 100%;
    height: 82px;
    background: #7161EF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  }
  .left-div {
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: space-between;
      padding: 10px 1rem;
      height: 45px;
      width: 63%;
      width: 225px;
      background: #F9F9F9;
      border-radius: 12px;
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
        // font-weight: 400;
        // font-size: 14px;
        // color: #AFAFAF;
        font-weight: 700;
        font-size: 20px;
        color: #000;
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
        border-color: #000 !important;
        border-radius: 12px;
        color: #FFF;
        font-weight: 700;
        font-size: 1rem;
        background: #000;
        border-radius: 12px;
        height: 45px;
        width: 368px;
      }
    }
  }
}
.forPC {
  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>
<style lang="scss">
#orderlistId {
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
    padding-left: 4rem;
  }
  .el-radio-group {
    padding-left: 4rem;
    padding-right: calc( 4rem + 24px );
    width: 100%;
  }
}
#oneRadioId {
  .el-radio-group {
    padding-left: 0;
    padding-right: 0;
    width: unset;
  }
  .el-radio__inner {
    margin-top: 5px;
  }
  .el-radio__label {
    padding-left: 0rem;
  }
}
</style>