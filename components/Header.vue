<template>
  <div class="header-block" :class="page && (page == 'category' || page == 'prodDetail') ? 'dropshadow' : ''">
    <b-navbar toggleable="lg" type="dark" variant="info" class="bg-info1">
      <div class="nav-logo">
        <div class="head-left">
          <div class="head-price">
            <img src="../assets/mobile/itemicon_gold.png" class="gold-icon">
            <span>999,999,999</span>
          </div>
        </div>
        <b-navbar-toggle v-b-toggle.sidebar-no-header target="nav-collapse"></b-navbar-toggle>
        <div class="first-col-div">
          <img class="m-logo-css" alt="pk mergent" src="../assets/mobile/PK_Merchant.png" @click="linkToHome" />
        </div>
        <div class="nav-header-right">
          <div class="menu-pc">
            <!-- <img class="user-css" alt="user" src="../assets/mobile/fi-rr-user.png" @click="linkToHome" />
            <img class="user-css" alt="gamepad" src="../assets/mobile/fi-rr-gamepad.png" @click="linkToHome" />
            <img class="user-css" alt="pokerchip" src="../assets/mobile/fi-rr-poker-chip.png" @click="linkToHome" /> -->
            <div class="member-center-part" @mouseleave="mouseLeave" @mouseover="mouseOver">
              <img
                v-if="!showmemberData && authData"
                class="dropbtn user-css"
                alt="user"
                src="../assets/mobile/fi-rr-user.png"
                @click="myFunction"
              />
              <img
                v-else-if="showmemberData && authData"
                class="dropbtn user-css"
                alt="user"
                src="../assets/pc/fi-rr-user-login.png"
                @click="myFunction"
              />
              <img
                v-else-if="(!showmemberData && !authData) || (showmemberData && !authData)"
                class="dropbtn user-css"
                alt="user"
                src="../assets/pc/fi-rr-visitor.png"
                @click="myFunction"
              />
              <div v-if="showmemberData" id="myDropdown" class="dropdown-content"></div>
              <div v-if="showmemberData && authData" class="child-dropdown">
                <!-- :class="pageName && pageName == 'myTicket' ? 'dropdownContentbg' : ''" -->
                <NuxtLink
                  to="/membershipUserinfo"
                  class="dropdown-item"
                >
                  <img class="menu-usercss" alt="user" src="../assets/pc/active-user.png" />
                  <span>會員資料</span>
                </NuxtLink>
                <NuxtLink
                  to="/convert-history"
                  class="dropdown-item"
                >
                  <img class="menu-usercss" alt="notebook" src="../assets/pc/active-notebook.png" />
                  <span>兌換清單</span>
                </NuxtLink>
                <NuxtLink
                  to="/tracking-products"
                  class="dropdown-item"
                >
                  <img class="menu-usercss" alt="heart" src="../assets/pc/active-heart.png" />
                  <span>追蹤清單</span>
                </NuxtLink>
                <NuxtLink
                  to="/myGame"
                  class="dropdown-item"
                >
                  <img class="menu-usercss" alt="shield" src="../assets/pc/active-shield.png" />
                  <span>遊戲連動</span>
                </NuxtLink>
                <NuxtLink
                  to="/membershipSettings"
                  class="dropdown-item"
                >
                  <img class="menu-usercss" alt="shield" src="../assets/pc/active-setting.png" />
                  <span>設定</span>
                </NuxtLink>
                <div class="logout-div">
                  <span>登出</span>
                </div>
              </div>
              <div v-if="showmemberData && !authData" class="child-dropdown">
                <NuxtLink
                  to="/login"
                  class="dropdown-item1"
                >
                  <img class="menu-usercss" alt="user" src="../assets/pc/noactive-user.png" />
                  <span class="noactivetext">會員資料</span>
                </NuxtLink>
                <NuxtLink
                  to="/login"
                  class="dropdown-item1"
                >
                  <img class="menu-usercss" alt="notebook" src="../assets/pc/noactive-notebook.png" />
                  <span class="noactivetext">兌換清單</span>
                </NuxtLink>
                <NuxtLink
                  to="/login"
                  class="dropdown-item1"
                >
                  <img class="menu-usercss" alt="heart" src="../assets/pc/noactive-heart.png" />
                  <span class="noactivetext">追蹤清單</span>
                </NuxtLink>
                <NuxtLink
                  to="/login"
                  class="dropdown-item1"
                >
                  <img class="menu-usercss" alt="shield" src="../assets/pc/noactive-shield.png" />
                  <span class="noactivetext">遊戲連動</span>
                </NuxtLink>
                <NuxtLink
                  to="/login"
                  class="dropdown-item1"
                >
                  <img class="menu-usercss" alt="shield" src="../assets/pc/noactive-setting.png" />
                  <span class="noactivetext">設定</span>
                </NuxtLink>
              </div>
            </div>
            <div class="member-center-part" @mouseleave="gamepadMouseLeave" @mouseover="gamepadMouseOver">
              <img
                :src="
                  showgamepadData
                    ? require('../assets/pc/fi-rr-gamepad-active.png')
                    : require('../assets/mobile/fi-rr-gamepad.png')
                " class="gamedbtn user-css" alt="gamepad" @click="myGamepad" />
              <div v-if="showgamepadData" id="gamepadDropdown" class="gamedd-content"></div>
              <div v-if="showgamepadData" class="child-dropdown">
                <div class="dropdown-item textcss">
                  <span>PK合作遊戲</span>
                </div>
                <div class="dropdown-item textcss1">
                  <span>去玩更多遊戲賺更多吧!!</span>
                </div>
              </div>
            </div>
            <div class="member-center-part" @mouseleave="pokerMouseLeave" @mouseover="pokerMouseOver">
              <img
                class="pokerdbtn user-css" alt="pokerchip" 
                :src="
                  showpokerData
                    ? require('../assets/mobile/fi-rr-poker-chip.png')
                    : require('../assets/mobile/fi-rr-poker-chip.png')" @click="myPokerchip" />
              <div v-if="showpokerData" id="pokerchipDropdown" class="pokerdd-content"></div>
              <div v-if="showpokerData" class="child-dropdown">
                <div class="dropdown-item textcss">
                  <span @click="gotoPage('myWallet')">我的代幣</span>
                </div>
                <div class="dropdown-item textcss1">
                  <span>查看PK遊戲幣值比率</span>
                </div>
              </div>
            </div>
            <div class="member-center-part" @mouseleave="headsetMouseLeave" @mouseover="headsetMouseOver">
              <img class="headsetdbtn user-css" alt="headset" src="../assets/mobile/fi-rr-headset.png" @click="myHeadset" />
              <div v-if="showHeadsetData" id="headsetDropdown" class="headsetdd-content"></div>
              <div v-if="showHeadsetData" class="child-dropdown">
                <div class="dropdown-item textcss">
                  <span>聯繫客服</span>
                </div>
                <div class="dropdown-item textcss">
                  <span>常見問題</span>
                </div>
              </div>
            </div>
          </div>
          <b-navbar-nav>
            <b-nav-item v-b-toggle.shopping-cart-header class="cartcss" @click="clickCart">
              <img class="m-shopping-css" alt="web store logo" src="../assets/mobile/shopping-cart.png" />
              <div v-show="updatetotalAllQty > 0" class="cart-txt circle">
                <span>{{ updatetotalAllQty }}</span>
              </div>
            </b-nav-item>
          </b-navbar-nav>
          <div class="shop-cart">
            <ShoppingCart :show-cart="showCart"></ShoppingCart>
          </div>
        </div>
      </div>
    </b-navbar>
    <div class="menu-sidebar">
      <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
        <template #default="{ hide }">
          <div class="p-3">
            <div class="close-row">
              <img class="close-css" src="../assets/mobile/close.png" @click="hide" />
              <span v-if="authData" class="logout-css">登出</span>
              <span v-if="!authData" class="logout-css">登入</span>
            </div>
            <div class="content-bar">
              <div v-if="authData" class="coin-parent">
                <div class="coin-block">
                  <img src="../assets/mobile/itemicon_gold.png" class="gold-icon">
                  <div class="txtBox">
                    <img src="../assets/mobile/rectangle.png" class="rect-icon">
                    <span class="coin-no">999,999,999</span>
                    <span class="pk-coin">PK Coin</span>
                  </div>
                </div>
                <div class="">
                  <img class="close-css" alt="menu coin" src="../assets/mobile/menu-coin.png" />
                </div>
              </div>
              
              <div class="each-item">
                <!-- <p :class="authData ? 'item-txt' : 'noLog-txt'">我的會員</p> -->
                <p v-if="authData" :class="authData ? 'item-txt' : 'noLog-txt'">我的會員</p>
                <p v-else :class="authData ? 'item-txt' : 'noLog-txt'" @click="gotoPage('member')">我的會員</p>
                <img v-if="authData" class="arrow-css" src="../assets/mobile/rightArr.png" />
                <img v-if="!authData" class="arrow-css" src="../assets/mobile/noactiveArr.png" />
              </div>
              <div class="each-item">
                <p class="item-txt" @click="gotoPage('myWallet')">我的代幣</p>
                <img class="arrow-css" src="../assets/mobile/rightArr.png" />
                <!-- <img v-if="!authData" class="arrow-css" src="../assets/mobile/noactiveArr.png" /> -->
              </div>
              <div class="each-item">
                <p class="item-txt">合作遊戲</p>
                <img class="arrow-css" src="../assets/mobile/rightArr.png" />
                <!-- <img v-if="!authData" class="arrow-css" src="../assets/mobile/noactiveArr.png" /> -->
              </div>

              <div class="title-row">
                <span class="storeTitle">分類</span>
                <h2>
                </h2>
              </div>

              <div class="each-item">
                <p class="color-txt">新品上市</p>
                <img class="arrow-css" src="../assets/mobile/rightArrActive.png" />
              </div>
              <div class="each-item">
                <p class="color-txt">限時優惠</p>
                <img class="arrow-css" src="../assets/mobile/rightArrActive.png" />
              </div>
              <div class="each-item">
                <p class="item-txt1">所有商品</p>
                <img class="arrow-css" alt="user" src="../assets/mobile/rightArr.png" />
              </div>
              <div class="each-item">
                <p class="item-txt1">日用雜貨</p>
                <img class="arrow-css" alt="user" src="../assets/mobile/rightArr.png" />
              </div>
              <div class="each-item">
                <p class="item-txt1">零食飲料</p>
                <img class="arrow-css" alt="user" src="../assets/mobile/rightArr.png" />
              </div>
              <div class="each-item">
                <p class="item-txt1">玩具公仔</p>
                <img class="arrow-css" alt="user" src="../assets/mobile/rightArr.png" />
              </div>

              <div class="title-row">
                <span class="storeTitle">幫助</span>
                <h2>
                </h2>
              </div>
              <div class="each-item">
                <p class="item-txt1">常見問題</p>
                <img class="arrow-css" alt="user" src="../assets/mobile/rightArr.png" />
              </div>
            </div>
          </div>
        </template>
      </b-sidebar>
    </div>
    <div class="head-css">
      <div class="each-menu"><span @click="gotoPage('category')">限時優惠</span></div>
      <div class="each-menu"><span>全部商品</span></div>
      <div class="each-menu"><span>日用雜貨</span></div>
      <div class="each-menu"><span>零食飲料</span></div>
      <div class="each-menu"><span>玩具公仔</span></div>
    </div>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: 'HeaderName',
  props: {
    page: {
      type: String,
      default: 'page'
    },
    authData: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      totalAllQty: 4,
      showCart: false,
      // userLogin: false,
      showmemberData: false,
      showgamepadData: false,
      showpokerData: false,
      showHeadsetData: false,
    }
  },
  computed: {
    ...mapState({
      updatetotalAllQty: state => state.cart.quantity,
      updatecartLists: state => state.cart.cartLists,
    }),
    ...mapGetters("cart", {
      cartItems: "cartProducts"
    }),
    ...mapGetters("user", {
      authVal: "userLogin"
    })
  },
  created() {
    // this.$emit("checkAuth", this.userLogin);
    this.$emit("checkAuth", this.authVal);
    console.log(this.authVal)

    this.setCartQty(this.totalAllQty);
  }, 
  beforeMount() {
    // Close the dropdown if the user clicks outside of it
    window.onclick = function (event) {
      if (!event.target.matches(".dropbtn")) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      } else if (!event.target.matches(".gamedbtn")) {
        const dropdowns = document.getElementsByClassName("gamedd-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      } else if (!event.target.matches(".pokerdbtn")) {
        const dropdowns = document.getElementsByClassName("pokerdd-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      } else if (!event.target.matches(".headsetdbtn")) {
        const dropdowns = document.getElementsByClassName("headsetdd-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };
  },
  methods: {
    ...mapActions("cart", ["setCartQty", "setCartList"]),
    linkToHome() {
      this.$router.push("/");
    },
    clickCart() {
      // console.log("clickCart()");
      this.showCart = true;
    },
    mouseOver(event) {
      // if (this.tokenInfo) {
        this.showmemberData = true;
      // } // else this.$router.push("/login");
    },
    mouseLeave() {
      console.log('mouse leave');
      this.showmemberData = false;
    },
    myFunction() {
      // console.log("myFunction() this.tokenInfo=", this.tokenInfo);
      // if (this.tokenInfo) document.getElementById("myDropdown").classList.toggle("show");
      // else {
      //   console.log("goto login");
      //   this.$router.push("/login");
      // }
      document.getElementById("myDropdown").classList.toggle("show");
    },
    myGamepad() {
      document.getElementById("gamepadDropdown").classList.toggle("show");
    },
    myPokerchip() {
      document.getElementById("pokerchipDropdown").classList.toggle("show");
    },
    myHeadset() {
      document.getElementById("headsetDropdown").classList.toggle("show");
    },
    gamepadMouseOver(event) {
      this.showgamepadData = true;
    },
    gamepadMouseLeave() {
      this.showgamepadData = false;
    },
    pokerMouseOver(event) {
      this.showpokerData = true;
    },
    pokerMouseLeave() {
      this.showpokerData = false;
    },
    headsetMouseOver(event) {
      this.showHeadsetData = true;
    },
    headsetMouseLeave() {
      this.showHeadsetData = false;
    },
    gotoPage(val) {
      this.$router.push(val)
    }
  }
}
</script>

<style lang="scss">
.navbar-toggler-icon {
  @media screen and (max-width: 768px) {
    background-image: url("../assets/mobile/menu-fine.png") !important;
    font-size: 11px;
    width: 24px;
    height: 17px;
  }
}
.navbar-toggler {
  @media screen and (max-width: 768px) {
    padding: 0 !important;
  }
}
.navbar-expand-lg .navbar-toggler {
  display: none;
  width: 30%;
  @media screen and (max-width: 768px) {
    display: unset;
    width: unset;
  }
}
.navbar-brand {
  @media screen and (max-width: 768px) {
    padding: 0 !important;
    margin-right: 0 !important;
  }
}
.header-block {
  .menu-sidebar {
    .b-sidebar {
      width: 100%;
    }
    .bg-light {
      background: #7161EF !important;
    }
  }
  .shop-cart {
    .bg-light {
      background: #eae9f4 !important;
    }
  }
  .p-3 {
    padding-bottom: 0px !important;
  }
  .close-row {
    display: flex;
    justify-content: space-between;

    padding: 55px 31px 23px 8px;
    padding: 52px 31px 15px 8px;
  }
  .content-bar {
    padding: 0 2.5rem;
    .coin-parent {
      display: flex;
      align-items: flex-end;
      margin-bottom: 2rem;
    }
    .each-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 0;
      .item-txt {
        font-weight: 700;
        font-size: 20px;
        color: #FFF;
        margin-bottom: 0;
        cursor: pointer;
      }
      .noLog-txt {
        font-weight: 700;
        font-size: 20px;
        color: #897CF2;
        margin-bottom: 0;
      }
      .item-txt1 {
        font-weight: 400;
        font-size: 20px;
        color: #FFF;
        margin-bottom: 0;
      }
      .arrow-css {
        width: 8px;
        height: 10px;
      }

      .color-txt {
        font-weight: 400;
        font-size: 20px;
        color: #FFD02C;
        margin-bottom: 0;
      }
    }
    .title-row {
      display: flex;
      align-items: center;
      padding: 5px 0;
      h2 {
        width: 80%;
        border-bottom: 2px solid #8C7FF5;
        border-radius: 2px;
        line-height: 2px;
        margin: 0;
      }
      .storeTitle {
        color: #FFF;
        font-weight: 700;
        font-size: 1rem;
        margin-right: 1rem;
      }
    }
  }
  .coin-block {
    position: relative;
    padding-right: 12px;
    .gold-icon {
      width: 36px;
      height: 36px;

      position: relative;
      margin-left: 12px;
      margin-bottom: -15px;
      z-index: 10;
    }
    .pk-coin {
      font-weight: 700;
      font-size: 12px;
      color: #FFF;

      position: absolute;
      display: block;
      left: 61%;
    }
    .txtBox {
      position: relative;
      .rect-icon {
        width: 180px;
        height: 32px;
      }
      .coin-no {
        font-weight: 500;
        font-size: 20px;
        color: #FFF;
        position: absolute;

        top: 45%;
        left: 57%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .close-css {
    width: 24px;
    height: 24px;
  }
  .logout-css {
    font-weight: 400;
    font-size: 16px;
    color: #FFF;
  }
}
</style>
<style lang="scss" scoped>
// .dropshadow {
//   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
// }
.header-block {
  position: fixed;
  width: 100%;
  z-index: 999;
  .bg-info1 {
    background: #FBFBFB !important;
    height: 80px;
    padding: 0 67px;
    @media screen and (max-width: 768px) {
      padding: 0;
      height: 66px;
    }
    .head-left {
      width: 30%;
      @media screen and (max-width: 768px) {
        display: none;
      }
      .head-price {
        background: #3E2BDA;
        border-radius: 32px;
        font-weight: 500;
        font-size: 16px;
        color: #FFF;
        display: flex;
        align-items: center;
        width: 160px;
      }
      .gold-icon {
        width: 30px;
        height: 30px;
        margin-right: 1rem;
      }
    }
  }
  .head-css {
    background: #7161EF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    @media screen and (max-width: 768px) {
      display: none;
    }
    .each-menu {
      font-weight: 700;
      font-size: 1rem;
      color: #FFF;
      width: 170px;
      text-align: center;
      cursor: pointer;
    }
  }
}
.nav-logo {
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 0 1.4rem 0 1rem;
  }
}
.nav-link {
  padding: 0 !important;
  @media screen and (max-width: 768px) {
    
  }
}
.nav-header-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
  @media screen and (max-width: 768px) {
    width: unset;
  }
  .cartcss {
    position: relative;
    @media screen and (max-width: 768px) {
    }
    .m-shopping-css {
      width: 24px;
      height: 24px;
      margin-left: 3rem;
      @media screen and (max-width: 768px) {
        margin-left: 0;
      }
    }
  }
  .menu-pc {
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
      display: none;
    }
    .user-css {
      width: 24px;
      height: 24px;
      margin-left: 12px;
      cursor: pointer;
    }
    .member-center-part {
      
    }
    .dropdown-content, .gamedd-content, .pokerdd-content, .headsetdd-content,
    .child-dropdown {
      // display: none;
      position: absolute;
      min-width: 140px; // 160px;
      overflow: auto;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 99;
      border-radius: 5px;
      background: #fff;
      // margin-top: 17px; // cart with 8px distant
      // margin-top: 10px;
      margin-left: -47px;
    }
    .dropdown-content, .gamedd-content, .pokerdd-content, .headsetdd-content {
      padding: 15px 0 5px;
      opacity: 0;
    }
    .child-dropdown {
      padding: 5px 0 5px;
      margin-top: 17px;
      opacity: 1;
    }

    .dropdown-item {
      padding: 7px 15px;
      text-decoration: none;
      display: block;
      font-weight: 400;
      font-size: 14px;
      color: #000;

      display: flex;
      align-items: center;
      cursor: pointer;

      .menu-usercss {
        width: 1rem;
        height: 1rem;
        margin-right: 10px;
      }
      .noactivetext {
        color: #C5C5C5;
      }
    }
    // .dropdown-item:last-child {
    //   color: #828282;
    //   padding: 7px 15px;
    //   text-decoration: none;
    //   display: block;
    //   font-size: 0.875rem;
    //   font-weight: 400;
    //   border-top: 1px solid #eeeeee;
    // }

    .dropdown-item:hover {
      background: #E2DBFF;
    }
    .dropdown-item1 {
      padding: 7px 15px;
      text-decoration: none;
      display: block;
      font-weight: 400;
      font-size: 14px;
      color: #000;

      display: flex;
      align-items: center;

      .menu-usercss {
        width: 1rem;
        height: 1rem;
        margin-right: 10px;
      }
      .noactivetext {
        color: #C5C5C5;
      }
    }
    // .dropdown-item1:last-child {
    //   color: #828282;
    //   padding: 7px 15px;
    //   text-decoration: none;
    //   display: block;
    //   font-size: 0.875rem;
    //   font-weight: 400;
    //   border-top: 1px solid #eeeeee;
    // }
    .logout-div {
      width: 140px;
      height: 22px;
      border: 1px solid #DBDBDB;

      font-weight: 400;
      font-size: 10px;
      color: #7161EF;

      text-align: center;
      margin: 10px 1rem;
      cursor: pointer;
    }
    .textcss {
      font-weight: 400;
      font-size: 14px;
      color: #000;
      display: flex;
      justify-content: center;
    }
    .textcss1 {
      font-weight: 400;
      font-size: 14px;
      color: #957FEF;
      display: flex;
      justify-content: center;
    }

    .dropdownContentbg {
      background: #f7f2e8;
      color: #4f4f4f;
      font-weight: 500;
    }
    .show {
      display: block;
    }
  }
}
.first-col-div {
  width: 30%;
  text-align: center;
  @media screen and (max-width: 768px) {
    color: #5c5c4f;
    display: flex;
    align-items: center;
    justify-content: center;
    width: unset;
  }
  .m-logo-css {
    cursor: pointer;
    @media screen and (max-width: 768px) {
      width: 165px;
      height: 20px;
    }
  }
}

.cart-txt {
  font-weight: 500;
  font-size: 10px;
  border-radius: 50%;
  padding: 1px 3px;
  position: absolute;
  top: -6px;
  right: -10px;
  border: 1px solid #000;
  @media screen and (max-width: 768px) {
    top: -7px;
    left: 15px;
  }
}
.circle {
  display: inline-block;
  border-radius: 50%;
  width: 8px;
  height: 12px;
  color: white;
  text-align: center;
  line-height: 1;
  box-sizing: content-box;
  white-space: nowrap;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 11px;
    height: 15px;
  }
}
.circle:before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  padding-top: 100%;
  height: 0;
}
.circle span {
  display: inline-block;
  vertical-align: middle;
  color: #000;
  @media screen and (max-width: 768px) {
  }
}
</style>
