<template>
  <!-- <Tutorial /> -->
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
  name: 'IndexPage',
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
.navbar-brand {
  @media screen and (max-width: 768px) {
    padding: 0 !important;
    margin-right: 0 !important;
  }
}
</style>
<style lang="scss" scoped>
.bg-info1 {
  @media screen and (max-width: 768px) {
    background: #FBFBFB !important;
    padding-top: 60px;
  }
}
.nav-logo {
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 1.5rem 0 1rem;
  }
}
.nav-header-right {
  .cartcss {
    @media screen and (max-width: 768px) {
      position: relative;
    }
    .m-shopping-css {
      @media screen and (max-width: 768px) {
        width: 24px;
        height: 24px;
      }
    }
  }
}
.first-col-div {
  @media screen and (max-width: 768px) {
    color: #5c5c4f;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .m-logo-css {
    @media screen and (max-width: 768px) {
      width: 165px;
      height: 20px;
    }
  }
}

.cart-txt {
  @media screen and (max-width: 768px) {
    font-weight: 500;
    font-size: 10px;
    border-radius: 50%;
    padding: 1px 3px;
    position: absolute;
    top: 1px;
    left: 15px;
    border: 1px solid #000;
  }
}
.circle {
  @media screen and (max-width: 768px) {
    display: inline-block;
    border-radius: 50%;
    min-width: 10px;
    min-height: 10px;
    padding: 2px;
    color: white;
    text-align: center;
    line-height: 1;
    box-sizing: content-box;
    white-space: nowrap;
    background: #FFF;
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
  @media screen and (max-width: 768px) {
    display: inline-block;
    vertical-align: middle;
    color: #000;
  }
}
</style>
