<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="bg-info1">
      <div class="nav-logo">
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
            <img class="user-css" alt="user" src="../assets/mobile/fi-rr-user.png" @click="linkToHome" />
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
  </div>
</template>

<script>
export default {
  name: 'HeaderName',
  data() {
    return {
      totalAllQty: 4,
      showCart: false
    }
  },
  methods: {
    linkToHome() {
      this.$router.push("/");
    },
    clickCart() {
      // console.log("clickCart()");
      this.showCart = true;
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
    height: 24px;
  }
}
.navbar-toggler {
  @media screen and (max-width: 768px) {
    padding: 0 !important;
  }
}
.navbar-expand-lg .navbar-toggler {
  visibility: hidden;
  display: unset;
  width: 30%;
  @media screen and (max-width: 768px) {
    visibility: visible;
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
.bg-info1 {
  background: #FBFBFB !important;
  height: 80px;
  padding: 0 67px;
  @media screen and (max-width: 768px) {
    padding: 60px 0 0;
    height: unset;
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
    @media screen and (max-width: 768px) {
      display: none;
    }
    .user-css {
      width: 24px;
      height: 24px;
      margin-left: 12px;
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
    top: 1px;
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
