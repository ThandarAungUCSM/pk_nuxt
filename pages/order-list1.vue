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
                <el-radio-group v-model="radio">
                  <el-radio :label="3" class="facts">
                    <div>
                      <div class="shipp-method">
                        <img class="shipping1" src="../assets/pc/shipping-icon4.png" />
                        <div class="shiip-txt">
                          <div>
                            <p class="home-delivery">宅配到府</p>
                            <p class="expected-date">預計2~3個工作天配達</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-radio>
                  <el-radio :label="6" class="facts">
                    <div>
                      <div class="shipp-method">
                        <img class="shipping1" src="../assets/pc/shipping-icon4.png" />
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
                        <img class="shipping1" src="../assets/pc/shipping-icon4.png" />
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
                          <div class="receive-block">
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
                  </el-radio>
                </el-radio-group>
              </div>
              <div class="btn-css">
                <p class="confirm-btn">確認</p>
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
              <div class="items-block">
                <div class="name-block">
                  <img class="ordergame-icon" src="../assets/pc/order-game1.png" />
                  <div class="name-div">
                    <p class="game-name">MYISTAL 米茲塔爾</p>
                    <p class="currency-name">幣值名稱 156,015</p>
                  </div>
                </div>
                <div class="name-block">
                  <img class="ordergame-icon" src="../assets/pc/order-game1.png" />
                  <div class="name-div">
                    <p class="game-name">MYISTAL 米茲塔爾</p>
                    <p class="currency-name">幣值名稱 156,015</p>
                  </div>
                </div>
                <div class="name-block">
                  <img class="ordergame-icon" src="../assets/pc/order-game1.png" />
                  <div class="name-div">
                    <p class="game-name">MYISTAL 米茲塔爾</p>
                    <p class="currency-name">幣值名稱 156,015</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right-block">
            <div>
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
          </div>
        </div>
      </div>
    </div>
    <Footer page="productDetail" />
  </div>
</template>
<script>
export default {
  name: 'OrderList',
  data() {
    return {
      radio: 12
    }
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
.order-list {
  padding-top: 140px;
  background: #eae9f4;
  .orderList-content {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 7rem;
    .exchange {
      font-weight: 400;
      font-size: 24px;
      color: #000;
      margin: 1rem 0;
    }
    .one-row {
      display: flex;
      justify-content: space-between;
      .left-block {
        width: 50%;
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
              .location-btn {
                background: #CFB7FF;
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 113px;
                height: 36px;
                margin-top: 10px;
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
            }
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
            .ordergame-icon{
              width: 58px;
              height: 58px;
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
        }
      }
      .right-block {
        width: 40%;
        .price-block {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 1rem 2rem;
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
          
        }
      }
    }
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
    margin-left: 3rem;
  }
  .el-radio-group {
    margin-left: 4rem;
  }
}
</style>