<template>
  <div class="mobile-member">
    <div class="head-css">
      <p class="user-acc">jason1234</p>
      <div class="head-row">
        <div class="inner-head">
          <div class="head-price">
            <img src="../assets/mobile/itemicon_gold.png" class="gold-icon">
            <span>999,999,999</span>
          </div>
          <div class="list-div">
            <img src="../assets/mobile/list-icon.png" class="list-icon">
          </div>
        </div>
        <div class="home-div">
          <img src="../assets/mobile/home-icon.png" class="home-icon">
        </div>
      </div>
    </div>
    <img src="../assets/mobile/fake-banner.png" class="banner-icon">
    <div class="menu-block">
      <div class="each-menu-row" @click="gotoPage('membershipUserinfo')">
        <div class="left-side">
          <img class="menu-usercss" alt="user" src="../assets/pc/active-user.png" />
          <span class="menu-text">會員資料</span>
        </div>
        <img class="rightarr-icon" src="../assets/mobile/rightarr-blue.png" />
      </div>
      <div class="each-menu-row" @click="gotoPage('convert-history')">
        <div class="left-side">
          <img class="menu-usercss" alt="notebook" src="../assets/pc/active-notebook.png" />
          <span class="menu-text">兌換清單</span>
        </div>
        <img class="rightarr-icon" src="../assets/mobile/rightarr-blue.png" />
      </div>
      <div class="each-menu-row" @click="gotoPage('tracking-products')">
        <div class="left-side">
          <img class="menu-usercss" alt="heart" src="../assets/pc/active-heart.png" />
          <span class="menu-text">追蹤清單</span>
        </div>
        <img class="rightarr-icon" src="../assets/mobile/rightarr-blue.png" />
      </div>
      <div class="each-menu-row" @click="gotoPage('connectedGame')">
        <div class="left-side">
          <img class="menu-usercss" alt="shield" src="../assets/pc/active-shield.png" />
          <span class="menu-text">遊戲連動</span>
        </div>
        <img class="rightarr-icon" src="../assets/mobile/rightarr-blue.png" />
      </div>
      <div class="each-menu-row" @click="gotoPage('membershipSettings')">
        <div class="left-side">
          <img class="menu-usercss" alt="shield" src="../assets/pc/active-setting.png" />
          <span class="menu-text">設定</span>
        </div>
        <img class="rightarr-icon" src="../assets/mobile/rightarr-blue.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MobileMember',
  data() {
    return {
    }
  },
  created() {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener("resize", this.checkScreen, false);
      this.checkScreen();
    }
  },
  methods: {
    checkScreen() {
      if (window) {
        const windowWidth = window.innerWidth;
        if (windowWidth > 768) {
          if(location.pathname === '/member')
          this.$router.push('/')
        }
      }
    },
    gotoPage(val) {
      this.$router.push(val);
    },
  }
}
</script>
<style lang="scss" scoped>
.mobile-member {
  .head-css {
    background: #7161EF;
    padding: 3rem 10px 12px 10px;
    .user-acc {
      font-weight: 700;
      font-size: 14px;
      color: #FFF;
      margin-bottom: 7px;
    }
    .head-row {
      display: flex;
      justify-content: space-between;
      .inner-head {
        display: flex;
        .head-price {
          background: #3E2BDA;
          border-radius: 32px;
          font-weight: 500;
          font-size: 16px;
          color: #FFF;
          display: flex;
          align-items: center;
          width: 160px;
          .gold-icon {
            width: 30px;
            height: 30px;
            margin-right: 1rem;
          }
        }
        .list-div {
          width: 30px;
          height: 30px;
          background: #3E2BDA;
          border-radius: 6px;
          margin-left: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          .list-icon {
            width: 18px;
            height: 18px;
          }
        }
      }
      .home-div {
        .home-icon {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
  .banner-icon {
    width: 100%;
  }
  .menu-block {
    padding: 0 2rem 2rem;
    .each-menu-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 1.5rem;
      .left-side {
        display: flex;
        align-items: center;
        .menu-usercss {
          width: 24px;
          height: 24px;
        }
        .menu-text {
          font-weight: 400;
          font-size: 20px;
          color: #000;
          margin-left: 10px;
        }
      }
      .rightarr-icon {
        width: 8.4px;
        height: 15px;
      }
    }
  }
}
</style>