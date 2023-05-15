<template>
  <div>
    <Header />
    <div id="orderlistId" class="order-list">
      <div class="orderList-content">
        <p class="exchange">兌換</p>
        <div class="one-row">
          <div class="left-block">
            <div class="Lupper-block">
              <el-collapse v-model="activeNames" @change="handleChange1">
                <el-collapse-item name="1" class="p-item">
                  <template slot="title">
                    <img class="shipping-icon" src="../assets/pc/school-bus.png" />
                    <span class="shipping-text">寄送方式</span>
                  </template>
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
                                <p v-if="cityName !== '' && cityTown !== ''"> {{cityName}} {{district}}</p>
                              </div>
                              <div v-if="radioData == 3" class="location-btn3" @click="locationFunc">
                                <img class="location" src="../assets/pc/location.png" />
                                <p class="location-text">選擇門市</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div v-if="radioData == 3 && !showLocation" class="ship-block-btn">
                          <div v-if="cityName !== '' && cityTown !== ''" class="btn1-css3" @click="confirmFunc">
                            <p class="confirm-btn">確認</p>
                          </div>
                          <div v-else class="btn-css3">
                            <p class="confirm-btn">確認</p>
                          </div>
                        </div>
                        <div v-else-if="radioData == 3 && showLocation" class="locale-info1">
                          <div class="name1-block">
                            <span class="name1-txt">姓名</span>
                            <input
                              v-model="nameText"
                              type="text"
                              placeholder="王大明"
                              class="name-input"
                              onfocus="this.placeholder=''"
                            />
                          </div>
                          <div class="phone-block">
                            <span class="name1-txt">手機號碼</span>
                            <input
                              v-model="phoneNo"
                              type="text"
                              placeholder="範例：0966330678"
                              class="phone-input"
                              onfocus="this.placeholder=''"
                            />
                          </div>
                          <div class="address-block">
                            <span class="email-txt">地址</span>
                            <div class="address">
                              <el-select v-model="cityName" class="member-address-city" placeholder="新北市">
                                <el-option
                                  v-for="(city, index) in cityTown"
                                  :key="index"
                                  :label="city.label"
                                  :value="city.name">
                                </el-option>
                              </el-select>
                              
                              <el-select
                                v-model="district"
                                class="member-address-city"
                                style="margin-left: 20px;"
                                placeholder="三重區">
                                <el-option
                                  v-for="(city) in cityTown"
                                  :key="city.value"
                                  :label="city.label"
                                  :value="city.name">
                                </el-option>
                              </el-select>
                              
                            </div>
                          </div>
                          <div class="street-block">
                            <input
                              v-model="streetText"
                              type="text"
                              placeholder="範例：光復南路三段156巷24號"
                              class="address-input"
                            />
                          </div>
                          <div class="btn-block">
                            <p class="btn1" @click="nochoiceRadioFunc">確認</p>
                            <p class="btn2" @click="backLocation">取消</p>
                          </div>
                        </div>
                      </el-radio>
                      <el-radio :label="6" class="facts">
                        <div class="shipp-method">
                          <img class="shipping1" src="../assets/pc/shipping-icon2.png" />
                          <div class="shiip-txt">
                            <div>
                              <p class="home-delivery">宅配到府</p>
                              <p class="expected-date">預計2~3個工作天配達</p>
                            </div>
                            <div v-if="radioData == 6" class="location-btn3">
                              <img class="location" src="../assets/pc/location.png" />
                              <p class="location-text">選擇門市</p>
                            </div>
                          </div>
                        </div>
                        <div v-if="radioData == 6" class="ship-block-btn">
                          <div class="btn-css3">
                            <p class="confirm-btn">確認</p>
                          </div>
                        </div>
                      </el-radio>
                      <el-radio :label="9" class="facts">
                        <div class="shipp-method">
                          <img class="shipping1" src="../assets/pc/shipping-icon3.png" />
                          <div class="shiip-txt">
                            <div>
                              <p class="home-delivery">宅配到府</p>
                              <p class="expected-date">預計2~3個工作天配達</p>
                            </div>
                            <div v-if="radioData == 9" class="location-btn3">
                              <img class="location" src="../assets/pc/location.png" />
                              <p class="location-text">選擇門市</p>
                            </div>
                          </div>
                        </div>
                        <div v-if="radioData == 9" class="ship-block-btn">
                          <div class="btn-css3">
                            <p class="confirm-btn">確認</p>
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
                                <p v-if="cityName !== '' && district !== ''" class="receive-info-title">{{cityName}} {{district}}</p>
                                <p v-else class="receive-info-title">收件資訊</p>
                                <div class="info-group">
                                  <div class="left-info">
                                    <p class="left-text">收件人</p>
                                    <p class="left-text">電話</p>
                                    <p class="left-text">地址</p>
                                  </div>
                                  <div class="right-info">
                                    <p v-if="nameText !== ''" class="right-text">{{nameText}}</p>
                                    <p v-else class="right-text">王大明</p>
                                    <p v-if="phoneNo !== ''" class="right-text">{{phoneNo}}</p>
                                    <p v-else class="right-text">0912345678</p>
                                    <p v-if="streetText !== ''" class="right-text">{{streetText}}</p>
                                    <p v-else class="right-text">新北市 三重區 復興北路87巷</p>
                                  </div>
                                </div>
                                <div class="location-btn" @click="locationFunc">
                                  <img class="location" src="../assets/pc/location.png" />
                                  <p class="location-text">修改地址</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- <div v-if="radioData == 12" class="btn-css">
                          <p class="confirm-btn">確認</p>
                        </div> -->
                      </el-radio>
                    </el-radio-group>
                    <div v-if="radioData == 12 && !showLocation" class="btn-css">
                      <p class="confirm-btn">確認</p>
                    </div>
                    <div v-else-if="radioData == 12 && showLocation" class="locale-info">
                      <div class="name1-block">
                        <span class="name-txt">姓名</span>
                        <input
                          v-model="nameText"
                          type="text"
                          placeholder="王大明"
                          class="name-input"
                          onfocus="this.placeholder=''"
                        />
                      </div>
                      <div class="phone-block">
                        <span class="name-txt">手機號碼</span>
                        <input
                          v-model="phoneNo"
                          type="text"
                          placeholder="範例：0966330678"
                          class="phone-input"
                          onfocus="this.placeholder=''"
                        />
                      </div>
                      <div class="address-block">
                        <span class="email-txt">地址</span>
                        <div class="address">
                          <el-select v-model="cityName" class="member-address-city" placeholder="新北市">
                            <el-option
                              v-for="(city, index) in cityTown"
                              :key="index"
                              :label="city.label"
                              :value="city.name">
                            </el-option>
                          </el-select>
                          
                          <el-select
                            v-model="district"
                            class="member-address-city"
                            style="margin-left: 20px;"
                            placeholder="三重區">
                            <el-option
                              v-for="(city) in cityTown"
                              :key="city.value"
                              :label="city.label"
                              :value="city.name">
                            </el-option>
                          </el-select>
                          
                        </div>
                      </div>
                      <div class="street-block">
                        <input
                          v-model="streetText"
                          type="text"
                          placeholder="範例：光復南路三段156巷24號"
                          class="address-input"
                        />
                      </div>
                      <div class="btn-block">
                        <p class="btn1" @click="nochoiceRadioFunc">確認</p>
                        <p class="btn2" @click="backLocation">取消</p>
                      </div>
                    </div>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
            <div class="Llower-block">
              <el-collapse v-model="activeWallet" @change="walletChange">
                <el-collapse-item name="1" class="p-item">
                  <template slot="title">
                    <img class="dollar-icon" src="../assets/pc/dollar.png" />
                    <span class="shipping-text">使用遊戲幣</span>
                  </template>
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
                    <div class="currency-block-btn">
                      <div v-if="!selectWallet" class="currency-div">
                        <p class="confirm-currency">確認</p>
                      </div>
                      <div v-else class="currency1-div" @click="walletCollapse">
                        <p class="confirm-currency">確認</p>
                      </div>
                    </div>
                  </div>
                  <div v-else class="nodata-block">
                    <div class="nameno-block">
                      <img class="convertempty-icon" src="../assets/pc/convert-empty.png" />
                      <div class="nameno-div">
                        <p class="empty-name">尚未有連動的遊戲錢包</p>
                        <p class="currency-btn" @click="$router.push('myGame')">前往連動</p>
                      </div>
                    </div>
                  </div>
                </el-collapse-item>
              </el-collapse>
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
                    <p v-if="disCoupon !== ''" class="cou-rightxt">{{disCoupon}}</p>
                    <p v-else class="cou-rightxt">請選擇優惠券或輸入優惠代碼</p>
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
            <div class="hide-m" :class="allSelected ? 'active-price-btn' : 'price-block1'">
              <p class="price-title">確認兌換</p>
            </div>

            <el-collapse v-model="activeCart" @change="cartChange">
              <el-collapse-item name="1" class="p-item">
                <template slot="title">
                  <img class="shopping-icon" src="../assets/mobile/shopping-cart.png" />
                  <span class="shipping-text">4項商品</span>
                </template>
                <div class="cart-block">
                  <!-- .self -->
                  <div v-for="(eachproduct, idx) in cartItems" :key="idx" class="each-row" @click="gotoPage()">
                    <div class="orderFalse">
                      <img class="menu-img" src="../assets/pc/product.png" />
                    </div>
                    <div class="each-right">
                      <div class="title-row">
                        <p class="common-menu-name">
                          奶油椰子口味玉米脆條 (造句包)
                        </p>
                        <span class="deleteBtn" @click.stop="doRemoveItem(eachproduct)">
                          <img class="deleteimg" src="../assets/pc/trash.png" />
                        </span>
                      </div>
                      <div id="shoppingId" class="menu-price" @click.stop>
                        <el-input-number 
                          v-model="showArr[idx]"
                          :min="1"
                          :max="5"
                          @change="(currentVal, oldVal) => {handleChange(currentVal, oldVal, eachproduct)}" ></el-input-number>
                        <div class="each-brow">
                          <div class="each-price">
                            <img class="gold-icon" src="../assets/mobile/itemicon_gold.png" />
                            <span class="gold-price">100</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- <div class="each-row" @click="gotoPage()">
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
                  </div> -->
                </div>
              </el-collapse-item>
            </el-collapse>
            <div class="show-m">
              <div class="price-block">
                <div class="price-row">
                  <div class="coupon-left">
                    <img class="star-icon" src="../assets/pc/star-icon.png" />
                    <p class="coupon-txt">優惠券</p>
                  </div>
                  <div class="coupon-right">
                    <p v-if="disCoupon !== ''" class="cou-rightxt1">{{disCoupon}}</p>
                    <p v-else class="cou-rightxt">請選擇優惠券或輸入優惠代碼</p>
                    <img id="show-modal" class="right-icon" src="../assets/pc/right-arr.png" @click="showModal = true" />
                  </div>
                </div>
                <convertModal v-if="showModal" :dis-coupon="disCoupon" :show="showModal" @close="showModal = false" @selectData="selectData" />
                <convertServiceModal v-if="showServiceModal" :show="showServiceModal" @close="showServiceModal = false" @serviceData="serviceData" />
                <convertWalletModal v-if="showWalletModal" :show="showWalletModal" @close="showWalletModal = false" @walletData="walletData" />
              </div>
            </div>
            <div class="show-m">
              <div class="bg-mo">
                <div class="m-bus-row">
                  <div class="left-title">
                    <img class="shipping-icon" src="../assets/pc/school-bus.png" />
                    <span class="shipping-text">寄送方式</span>
                  </div>
                  <div class="right-title">
                    <span v-if="deliName === ''" class="ship-name-txt1">請選擇配送方式</span>
                    <span v-else class="ship-name">7-11超商取貨-OX門市$1,500</span>
                  </div>
                </div>
                <div class="right-divm">
                  <img id="show-modal" class="right-icon" src="../assets/pc/right-arr.png" @click="showServiceModal = true" />
                </div>
                <div class="visible-hide">
                  hide
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
              <div class="bg-mo">
                <div class="m-bus-row">
                  <div class="left-title">
                    <span class="shipping-text3">使用遊戲幣</span>
                  </div>
                  <div class="right-title">
                    <span v-if="!walletName" class="ship-name-txt1">請選擇兌換用遊戲幣</span>
                    <span v-else class="ship-name1">米茲塔爾</span>
                  </div>
                </div>
                <div class="right-divm">
                  <img id="show-modal" class="right-icon" src="../assets/pc/right-arr.png" @click="showWalletModal = true" />
                </div>
                <div v-if="!walletName" class="visible-hide">
                  hide
                </div>
                
                <div v-if="walletName" class="m-bus-row1">
                  <div class="left-title">
                    <span class="shipping-text1">將提領</span>
                  </div>
                  <div class="right-title">
                    <span class="ship-name2">256,000</span>
                  </div>
                </div>
                <div v-if="walletName" class="m-bus-row1">
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
                    <span class="shipping-text3">兌換詳情</span>
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
                    <span class="shipping-text3">合計</span>
                  </div>
                  <div class="right-title">
                    <span class="ship-name4">1,900</span>
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
          <p class="price-text">1,900</p>
          <img src="../assets/mobile/itemicon_gold.png" class="gold-icon">
        </div>
      </div>
      <div class="right-div">
        <b-button v-if="!filledUp" size="sm" class="nfilledup-btn-css">兌換(3)</b-button>
        <b-button v-else-if="filledUp && enoughCoins && !allfilled" size="sm" class="allfill-btn-css">兌換(3)</b-button>
        <b-button v-else-if="filledUp && !enoughCoins" size="sm" class="nenough-btn-css" @click="gotoPage('nocoin')">額度不足</b-button>
        <b-button v-else size="sm" class="allfill-btn-css" @click="gotoPage">確認兌換</b-button>
      </div>
    </div>
    <Footer page="productDetail" class="forPC" />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'OrderList',
  data() {
    return {
      radioData: 0,
      oneData: 0,
      ifData: true,
      checkClick: false,
      activeId: 0,
      showModal: false,
      showServiceModal: false,
      showWalletModal: false,

      connectedGame: true,
      filledUp: true,
      enoughCoins: true,
      allfilled: true,
      toselect: false,
      showLocation: false,

      nameText: '',
      phoneNo: '',
      cityName: '',
      district: '',
      streetText: '',
      cityTown: [{name: 'aaaaa', label: 'aaaaa'}, {name: 'bbbbb', label: 'bbbbb'}, {name: 'ccccc', label: 'ccccc'}],
      activeNames: ['1'],
      activeWallet: ['1'],
      activeCart: ['1'],
      selectWallet: false,

      disCoupon: '',
      deliName: '',
      walletName: '',
      allSelected: false
    }
  },
  computed: {
    ...mapGetters("cart", {
      cartItems: "cartProducts"
    }),
    showArr() {
      const temp = this.cartItems.map(n => n.quantity)
      return temp;
    }
  },
  watch: {
    radioData() {
      if((this.radioData !== 0) && (this.checkClick === true && this.activeId !== 0) && this.oneData !== 0) {
        this.allSelected = true
      } else {
        this.allSelected = false
      }
    }, 
    checkClick() {
      if((this.radioData !== 0) && (this.checkClick === true && this.activeId !== 0) && this.oneData !== 0) {
        this.allSelected = true
      } else {
        this.allSelected = false
      }
    },
    oneData() {
      if((this.radioData !== 0) && (this.checkClick === true && this.activeId !== 0) && this.oneData !== 0) {
        this.allSelected = true
      } else {
        this.allSelected = false
      }
    }
  },
  methods: {
    ...mapActions("cart", ["removeProductFromCart"]),
    ...mapActions("cart", ["incProductQty"]),
    ...mapActions("cart", ["decProductQty"]),
    doRemoveItem(product) {
      console.log("doRemoveItem(bid=", product.bid, ")");
      this.removeProductFromCart(product.bid);
      this.$emit("deleteItem", this.selecttype, product);
    },
    handleChange1(val) {
      console.log(val);
    },
    handleChange(current, old, value) {
      console.log('current ', current);
      console.log('old ', old);
      console.log('data ', value);
      if (current > old) {
        this.incProductQty(value);
      } else {
        this.decProductQty(value);
      }
      this.$emit("activeVal", value.bid)
    },
    walletChange(val) {
      console.log(val);
    },
    cartChange(val) {
      console.log(val);
    },
    toCheck(val) {
      if(this.activeId === val) {
        this.checkClick = false
        this.activeId = 0
        this.selectWallet = false
      } else {
        this.checkClick = true
        this.activeId = val
        this.selectWallet = true
      }
    },
    walletCollapse() {
      // this.checkClick = false
      // this.activeId = 0
      // this.selectWallet = false
      this.activeWallet = []
    },
    gotoPage(val) {
      if(val && val === 'nocoin') {
        this.$router.push({name: 'convertCart', query: {item: val}})
      } else {
        this.$router.push('convertCart')
      }
    },
    locationFunc() {
      this.showLocation = true
    },
    backLocation() {
      this.showLocation = false
    },
    nochoiceRadioFunc() {
      // this.radioData = 0
      this.showLocation = false
      this.activeNames = []
    },
    confirmFunc() {
      this.activeNames = []
    },
    selectData(val) {
      this.disCoupon = val
    },
    serviceData(val) {
      this.deliName = val
    },
    walletData(val) {
      this.walletName = val
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
          .shipping-icon {
            width: 14px;
            height: 14px;
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
              margin-bottom: 10px;
            }
            .expected-date {
              font-weight: 400;
              font-size: 14px;
              color: #EF7B61;
              margin-bottom: 10px;
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
          .ship-block-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 40px auto 0;
            .btn-css3 {
              background: #B1AAED;
              border-radius: 6px;
              width: 80px;
              height: 36px;
              margin-right: calc(8rem + 14px);
              cursor: pointer;
            }
            .btn1-css3 {
              background: #7161EF;
              border-radius: 6px;
              width: 80px;
              height: 36px;
              margin-right: calc(8rem + 14px);
              cursor: pointer;
            }
          }
          .btn-css {
            background: #7161EF;
            border-radius: 6px; 
            width: 80px;
            height: 36px;
            margin: 30px auto 0;
          }
          .confirm-btn {
            font-weight: 700;
            font-size: 14px;
            color: #FFF;
            margin-bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 33px;
          }
          .locale-info {
            width: 65%;
            margin: auto;
          }
          .locale-info1 {
            width: 97%;
            margin: auto;
          }
          .name1-block, .phone-block {
            background: #FAF6FF;
            backdrop-filter: blur(1.5px);
            height: 56px;
            padding: 5px 1rem;
            margin-top: 1rem;
          }
          .name-txt {
            font-weight: 400;
            font-size: 14px;
            color: #9D9D9D;
            width: 100%;
            display: block;
          }
          .name1-txt {
            font-weight: 400;
            font-size: 14px;
            color: #9D9D9D;
            width: 100%;
            display: block;
            margin-bottom: 7px;
          }
          input:focus {
            outline: none;
          }
          .name-input {
            font-weight: 400;
            font-size: 14px;
            color: #957FEF;
            border: none;
            width: 100%;
            background: none;
            padding: 0;
          }
          .phone-input {
            font-weight: 400;
            font-size: 1rem;
            color: #957FEF;
            border: none;
            width: 100%;
            background: none;
            padding: 0;
          }
          .address-input {
            font-weight: 400;
            font-size: 1rem;
            color: #7161EF;
            border: none;
            width: 100%;
            background: none;
            padding: 0;
          }
          .name-input::placeholder {
            font-weight: 400;
            font-size: 14px;
            color: #957FEF;
            border: none;
            width: 100%;
            background: none;
            padding: 0;
          }
          .phone-input::placeholder {
            font-weight: 400;
            font-size: 1rem;
            color: #957FEF;
            border: none;
            width: 100%;
            background: none;
            padding: 0;
          }
          .address-input::placeholder {
            font-weight: 400;
            font-size: 1rem;
            color: #7161EF;
            border: none;
            width: 100%;
            background: none;
            padding: 0;
          }
          .address-block {
            margin-top: 10px;
            .address {
              display: flex;
              justify-content: space-between;
              width: 100%;
              margin-top: 10px;
            }
            .member-address-city {
              width: 48%;
              font-weight: 400;
              font-size: 1rem !important;
              color: #7161FE;
              background: #FAF7FF;
              backdrop-filter: blur(1.5px);
              border-radius: 6px;
              border: none;
              // padding-left: 10px;
              height: 60px;
              min-height: 60px;

              background-image: url('../assets/pc/angle-down.png');
              background-repeat: no-repeat;
              background-position: calc(100% - 12px) center;
              background-size: 16px;
            }
            .member-address-city::placeholder {
              color: red;
            }
            select:focus {
              outline: none;
            }
            select {
              appearance: none;
              -moz-appearance: none;
              -webkit-appearance: none;
              padding-right: 1rem;
            }
            .email-txt {
              font-weight: 400;
              font-size: 16px;
              color: #858585;
            }
          }
          .street-block {
            background: #FAF7FF;
            backdrop-filter: blur(1.5px);
            height: 56px;
            line-height: 56px;
            padding-left: 10px;
            margin-top: 10px;
            @media screen and (max-width: 768px) {
              margin-top: 1rem;
            }
          }
          .btn-block {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 2rem;
            margin-bottom: 4rem;
            .btn1, .btn2 {
              border-radius: 6px;
              margin-bottom: 0;
              font-weight: 700;
              font-size: 14px;
              width: 80px;
              height: 36px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-left: 8px;
              cursor: pointer;
            }
            .btn1 {
              background: #7161EF;
              border: 2px solid #7161EF;
              color: #FFF;
            }
            .btn2 {
              background: #FFF;
              border: 2px solid #7161EF;
              color: #7161EF;
            }
          }
        }
        .Llower-block {
          background: #FFF;
          .dollar-icon {
            width: 8px;
            height: 14px;
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
            .currency-block-btn {
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 30px auto 0;
              .currency-div, .currency1-div {
                border-radius: 6px; 
                width: 80px;
                height: 36px;
                margin-right: 2rem;
                cursor: pointer;
                .confirm-currency {
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
              .currency-div {
                background: #B2ADD7;
              }
              .currency1-div {
                background: #7161EF;
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
                cursor: pointer;
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
            .cou-rightxt1 {
              @media screen and (max-width: 768px) {
                font-weight: 400;
                font-size: 16px;
                color: #2c2c2c;
                margin-bottom: 0;
                margin-right: 1rem;
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
        .price-block1, .active-price-btn {
          border-radius: 12px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 44px;
          .price-title {
            font-weight: 700;
            font-size: 20px;
            color: #DAD5FF;
            margin-bottom: 0;
          } 
        }
        .price-block1 {
          background: #B2ADD7;
        }
        .active-price-btn {
          background: #7161EF;
          cursor: pointer;
        }
        .shopping-icon {
          width: 1rem;
          height: 1rem;
        }
        .cart-block {
          background: #FFF;
          padding-bottom: 33px;
          @media screen and (max-width: 768px) {
            margin-top: 3px;
            padding-bottom: 12px;
          }
          
          .shipping-icon {
            width: 14px;
            height: 14px;
          }
          .each-row {
            display: flex;
            padding: 1rem;
            // background: #F5F2FF;
            background: #FBF7FF;
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
              .title-row {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                padding: 0;
                .right-title {
                  .minus-icon {
                    width: 12px;
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
                .row-price {
                  display: flex;
                  align-items: center;
                  
                }
                .gold-price {
                  font-weight: 700;
                  font-size: 16px;
                  color: #000;
                  margin-left: 5px;
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
          .deleteBtn {
            .deleteimg {
              width: 18px;
              height: 18px;
            }
          }
          .row-div {
            display: flex;
            align-items: center;
            width: 100%;
            .menu-txt {
              display: flex;
              flex-direction: column;
              margin-left: 1rem;
              width: 100%;
              
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
          .bg-mo {
            background: #FFF;
            margin-top: 5px;
            padding-bottom: 1rem;
            position: relative;
            .visible-hide {
              visibility: hidden;
              height: 43px;
            }
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
            .ship-name-txt1 {
              color: #B79CED;
              font-weight: 500;
              font-size: 14px;
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
          .right-divm {
            display: flex;
            justify-content: flex-end;
            padding-right: 1rem;
            @media screen and (max-width: 768px) {
              position: absolute;
              right: 0;
            }
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
            margin-left: 7px;
          }
          .shipping-text3 {
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
    .allfill-btn-css {
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
    .nfilledup-btn-css {
      @media screen and (max-width: 768px) {
        border-color: #614EF3 !important;
        border-radius: 12px;
        color: #9B90F0;
        font-weight: 700;
        font-size: 1rem;
        background: #614EF3;
        border-radius: 12px;
        height: 45px;
        width: 368px;
      }
    }
    .filledup-btn-css {
      @media screen and (max-width: 768px) {
        border-color: #614EF3 !important;
        border-radius: 12px;
        color: #9B90F0;
        font-weight: 700;
        font-size: 1rem;
        background: #614EF3;
        border-radius: 12px;
        height: 45px;
        width: 368px;
      }
    }
    .nenough-btn-css {
      @media screen and (max-width: 768px) {
        border-color: #614EF3 !important;
        border-radius: 12px;
        color: #FFF;
        font-weight: 700;
        font-size: 1rem;
        background: #EF6161;
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
  .el-input-number .el-input__inner {
    background: #fcf7ff;
  }
  .p-item {
    .el-icon-arrow-right:before {
      // color: #ceb17d;
      // content: "\002B";
      // font-size: 21px;

      background-image: url("../assets/pc/plus-black.png");
      background-size: 12px 12px;
      display: inline-block;
      width: 12px;
      height: 12px;
      content: "";
    }
    i.el-collapse-item__arrow.el-icon-arrow-right.is-active:before {
      // color: #ceb17d;
      // content: '\002D';
      // content: "\2212";
      // font-size: 21px;

      background-image: url("../assets/pc/minus-black.png");
      background-size: 18px 18px;
      display: inline-block;
      width: 12px;
      height: 2px;
      content: "";
    }
    .el-collapse-item__arrow {
      margin: 0 0 0 auto;
      transition: transform 0.3s;
      font-weight: 100;
      @media screen and (max-width: 768px) {
        margin: 0 -1px 0 auto;
      }
    }
    .el-collapse-item__arrow.is-active {
      transform: rotate(0deg);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .el-collapse-item__header {
      // display: flex;
      // align-items: center;
      height: 48px;
      line-height: 48px;
      background-color: #fff;
      color: #1a1a1a;
      cursor: pointer;
      border-bottom: 0 solid #ebeef5;
      font-size: 16px;
      font-weight: 600;
      transition: border-bottom-color 0.3s;
      outline: 0;
      padding-right: 1rem;
      padding-left: 1rem;
      @media screen and (max-width: 768px) {
      }
    }
  }
  .el-collapse {
    border-bottom: 0px solid #ebeef5;
  }
  .el-collapse-item__wrap {
    border-bottom: 0px solid #ebeef5;
  }
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