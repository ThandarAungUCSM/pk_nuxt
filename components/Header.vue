<template>
  <div class="header-block">
    <b-navbar toggleable="lg" type="dark" variant="info" class="bg-info1">
      <div class="nav-logo">
        <div class="head-left">
          <div class="head-price">
            <img src="../assets/mobile/itemicon_gold.png" class="gold-icon">
            <span>999,999,999</span>
          </div>
        </div>
        <b-navbar-toggle v-b-toggle.sidebar-1 target="nav-collapse"></b-navbar-toggle>
        <b-sidebar id="sidebar-1" title="Sidebar" shadow>
          <div class="px-3 py-2">
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
          </div>
        </b-sidebar>
        <div class="first-col-div">
          <img class="m-logo-css" alt="pk mergent" src="../assets/mobile/PK_Merchant.png" @click="linkToHome" />
        </div>
        <div class="nav-header-right">
          <div class="menu-pc">
            <!-- <img class="user-css" alt="user" src="../assets/mobile/fi-rr-user.png" @click="linkToHome" /> -->
            
            <div class="member-center-part" @mouseleave="mouseLeave" @mouseover="mouseOver">
              <img
                class="dropbtn user-css"
                alt="user"
                :src="
                  showmemberData
                    ? require('../assets/mobile/fi-rr-user.png')
                    : require('../assets/mobile/fi-rr-user.png')
                "
                @click="myFunction"
              />
              <div v-if="showmemberData" id="myDropdown" class="dropdown-content"></div>
              <div v-if="showmemberData && userLogin" class="child-dropdown">
                <!-- :class="pageName && pageName == 'myTicket' ? 'dropdownContentbg' : ''" -->
                <NuxtLink
                  to="/memberCenter"
                  class="dropdown-item"
                >
                  <img class="menu-usercss" alt="user" src="../assets/pc/active-user.png" />
                  <span>會員資料</span>
                </NuxtLink>
                <NuxtLink
                  to="/myOrder"
                  class="dropdown-item"
                >
                  <img class="menu-usercss" alt="notebook" src="../assets/pc/active-notebook.png" />
                  <span>兌換清單</span>
                </NuxtLink>
                <NuxtLink
                  to="/myOrder"
                  class="dropdown-item"
                >
                  <img class="menu-usercss" alt="heart" src="../assets/pc/active-heart.png" />
                  <span>追蹤清單</span>
                </NuxtLink>
                <NuxtLink
                  to="/myOrder"
                  class="dropdown-item"
                >
                  <img class="menu-usercss" alt="shield" src="../assets/pc/active-shield.png" />
                  <span>遊戲連動</span>
                </NuxtLink>
                <NuxtLink
                  to="/myOrder"
                  class="dropdown-item"
                >
                  <img class="menu-usercss" alt="shield" src="../assets/pc/active-setting.png" />
                  <span>設定</span>
                </NuxtLink>
              </div>
              <div v-if="showmemberData && !userLogin" class="child-dropdown">
                <NuxtLink
                  to="/memberCenter"
                  class="dropdown-item1"
                >
                  <img class="menu-usercss" alt="user" src="../assets/pc/noactive-user.png" />
                  <span class="noactivetext">會員資料</span>
                </NuxtLink>
                <NuxtLink
                  to="/myOrder"
                  class="dropdown-item1"
                >
                  <img class="menu-usercss" alt="notebook" src="../assets/pc/noactive-notebook.png" />
                  <span class="noactivetext">兌換清單</span>
                </NuxtLink>
                <NuxtLink
                  to="/myOrder"
                  class="dropdown-item1"
                >
                  <img class="menu-usercss" alt="heart" src="../assets/pc/noactive-heart.png" />
                  <span class="noactivetext">追蹤清單</span>
                </NuxtLink>
                <NuxtLink
                  to="/myOrder"
                  class="dropdown-item1"
                >
                  <img class="menu-usercss" alt="shield" src="../assets/pc/noactive-shield.png" />
                  <span class="noactivetext">遊戲連動</span>
                </NuxtLink>
                <NuxtLink
                  to="/myOrder"
                  class="dropdown-item1"
                >
                  <img class="menu-usercss" alt="shield" src="../assets/pc/noactive-setting.png" />
                  <span class="noactivetext">設定</span>
                </NuxtLink>
              </div>
            </div>
            <img class="user-css" alt="gamepad" src="../assets/mobile/fi-rr-gamepad.png" @click="linkToHome" />
            <img class="user-css" alt="pokerchip" src="../assets/mobile/fi-rr-poker-chip.png" @click="linkToHome" />
            <img class="user-css" alt="headset" src="../assets/mobile/fi-rr-headset.png" @click="linkToHome" />
          </div>
          <b-navbar-nav>
            <b-nav-item v-b-toggle.shopping-cart-header class="cartcss" @click="clickCart">
              <img class="m-shopping-css" alt="web store logo" src="../assets/mobile/shopping-cart.png" />
              <div v-show="totalAllQty > 0" class="cart-txt circle">
                <span>{{ totalAllQty }}</span>
              </div>
            </b-nav-item>
          </b-navbar-nav>
        </div>
      </div>
    </b-navbar>
    <div class="head-css">
      <div class="each-menu"><span>限時優惠</span></div>
      <div class="each-menu"><span>全部商品</span></div>
      <div class="each-menu"><span>日用雜貨</span></div>
      <div class="each-menu"><span>零食飲料</span></div>
      <div class="each-menu"><span>玩具公仔</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderName',
  data() {
    return {
      totalAllQty: 4,
      showCart: false,
      showmemberData: false,
      userLogin: true
    }
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
      }
    };
  },
  methods: {
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
</style>
<style lang="scss" scoped>
.header-block {
  position: fixed;
  width: 100%;
  z-index: 999;
  .bg-info1 {
    background: #FBFBFB !important;
    height: 80px;
    padding: 0 67px;
    @media screen and (max-width: 768px) {
      padding: 60px 0 1rem;
      height: unset;
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
    }
  }
}
.nav-logo {
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 0 1.5rem 0 1rem;
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
    .dropdown-content,
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
    .dropdown-content {
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
