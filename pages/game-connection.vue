<template>
  <div class="game-connection">
    <Header class="forPC" />
    <div class="game-content">
      <div class="banner-block">
        <div class="banner-block2">
          <Carousel :caro-item="regularBannerBlock2" :current-slide="slide" :caro-name="2" />
          <div class="indicate-block">
            <div class="indicator-css">{{currentNo}}/{{totalNo}}</div>
          </div>
        </div>
        <div class="pc-back" @click="backBtn">
          <img src="../assets/mobile/btn-return.png" class="back-icon">
        </div>
      </div>
      <div class="tab-row">
        <p :class="activeTab === 1 ? 'active-tab' : 'noactive-tab'" @click="clickTab(1)">已連動遊戲</p>
        <p :class="activeTab === 2 ? 'active-tab' : 'noactive-tab'" @click="clickTab(2)">未連結的遊戲</p>
      </div>
      <div v-if="activeTab === 1" class="tab-content">
        <div class="each-row">
          <img src="../assets/pc/game11.png" class="game-icon">
          <p class="game-name">MYISTAL 米茲塔爾</p>
          <div class="green-btn">
            <span class="green-text">已連動</span>
          </div>
          <p class="time-text">連動時間:2023.03.06</p>
        </div>
        <div class="each-row">
          <img src="../assets/pc/game22.png" class="game-icon">
          <p class="game-name">Maple Story 楓之谷R</p>
          <div class="green-btn">
            <span class="green-text">已連動</span>
          </div>
          <p class="time-text">連動時間:2023.02.18</p>
        </div>
        <div class="each-row">
          <img src="../assets/pc/game33.png" class="game-icon">
          <p class="game-name">League Of Lagends英雄聯盟</p>
          <div class="green-btn">
            <span class="green-text">已連動</span>
          </div>
          <p class="time-text">連動時間:2023.06.21</p>
        </div>
      </div>
      <div v-if="activeTab === 2" class="tab-content">
        <div class="each-row">
          <img src="../assets/pc/unlinkgame1.png" class="game-icon">
          <p class="game-name">Clash Royale《部落衝突:皇室戰爭》</p>
          <div class="blue-btn">
            <span class="blue-text">前往連動</span>
            <img src="../assets/pc/arrow-icon.png" class="arrow-icon">
          </div>
        </div>
        <div class="each-row">
          <img src="../assets/pc/unlinkgame2.png" class="game-icon">
          <p class="game-name">Genshin impact原神</p>
          <div class="blue-btn">
            <span class="blue-text">前往連動</span>
            <img src="../assets/pc/arrow-icon.png" class="arrow-icon">
          </div>
        </div>
        <div class="each-row">
          <img src="../assets/pc/unlinkgame3.png" class="game-icon">
          <p class="game-name">Kart Rider 跑跑卡丁車:飄移</p>
          <div class="blue-btn">
            <span class="blue-text">前往連動</span>
            <img src="../assets/pc/arrow-icon.png" class="arrow-icon">
          </div>
        </div>
        <div class="each-row">
          <img src="../assets/pc/unlinkgame4.png" class="game-icon">
          <p class="game-name">PUBG 絕地求生</p>
          <div class="blue-btn">
            <span class="blue-text">前往連動</span>
            <img src="../assets/pc/arrow-icon.png" class="arrow-icon">
          </div>
        </div>
      </div>
      <div class="img-block">
        <img src="../assets/pc/game-banner.png" class="pc-game-banner">
      </div>
    </div>
    <Footer page="category" />
  </div>
</template>
<script>
export default {
  name: 'ConvertPage',
  data() {
    return {
      activeTab: 1,
      slide: 0,
      currentNo: 1,
      totalNo: 6,
      regularBannerBlock2: [
        {
          "title": "3月全站_38女神節1T",
          "mimg": require("../assets/mobile/b2.png"),
          "img": require("../assets/pc/b2.png"),
          "themeType": 999,
          "outerUrl": "https://www.google.com/",
          "id": 1
        }, {
          "title": "防範疫情不恐慌",
          "mimg": require("../assets/mobile/b2.png"),
          "img": require("../assets/pc/b2.png"),
          "themeType": 1,
          "outerUrl": "",
          "id": 2
        }, {
          "title": "防範疫情3",
          "mimg": require("../assets/mobile/b2.png"),
          "img": require("../assets/pc/b2.png"),
          "themeType": 1,
          "outerUrl": "",
          "id": 3
        }
      ], 
    }
  },
  methods: {
    clickTab(val) {
      this.activeTab = val;
    },
    backBtn() {
      this.$router.push('/member')
    }
  }
}
</script>
<style lang="scss" scoped>
.forPC {
  @media screen and (max-width: 768px) {
    display: none;
  }
}
.game-connection {
  .game-content {
    padding-top: 140px;
    background: #eae9f4;
    @media screen and (max-width: 768px) {
      padding-top: 0;
      background: #FFF;
    }
    .banner-block {
      display: none;
      @media screen and (max-width: 768px) {
        display: block;
        position: relative;
      }
      .banner-block2 {
        background: #FFF;
        position: relative;
        padding: 0;
        margin-top: 1rem;
  
        padding: 0 81px;
        margin-left: 0.5%;
        margin-right: 0.5%;
        @media screen and (max-width: 768px) {
          background: #E1E1E1;
          margin-top: 0;
          margin-left: 0;
          margin-right: 0;
          padding: 0;
        }
        .indicate-block {
          background: rgba(36, 36, 36, 0.7);
          border-radius: 61px;
  
          position: absolute;
          width: 60px;
          height: 20px;
          bottom: 27px;
          right: 92px;
          
          display: none;
          @media screen and (max-width: 768px) {
            display: unset;
            bottom: 10px;
            right: 10px;
          }
          .indicator-css {
            font-weight: 300;
            font-size: 14px;
            color: #FFF;
            text-align: center;
          }
        }
      }
      .pc-back {
        position: absolute;
        top: 3.5rem;
        left: 1.1rem;
        .back-icon {
          width: 36px;
          height: 36px;
        }
      }
    }
    .tab-row {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 3rem 0 2rem;
      @media screen and (max-width: 768px) {
        margin: 0;
      }
      .active-tab {
        font-weight: 400;
        font-size: 20px;
        margin: 10px 1rem;
        padding-bottom: 10px;
        cursor: pointer;
        width: 130px;
        text-align: center;

        color: #6100FF;
        border-bottom: 3px solid #6100FF;
        @media screen and (max-width: 768px) {
          font-size: 1rem;
          margin-bottom: 0;
          width: 50%;
          margin-left: 0;
          margin-right: 0;
        }
      }
      .noactive-tab {
        font-weight: 400;
        font-size: 20px;
        margin: 10px 1rem;
        padding-bottom: 10px;
        cursor: pointer;
        width: 130px;
        text-align: center;

        color: #000;
        border-bottom: 3px solid #eae9f4;
        @media screen and (max-width: 768px) {
          font-size: 1rem;
          margin-bottom: 0;
          width: 50%;
          margin-left: 0;
          margin-right: 0;
          border-bottom: 3px solid #fff;
        }
      }
    }
    .tab-content {
      .each-row {
        display: flex;
        align-items: center;
        width: 60%;
        margin: auto;
        min-width: 900px;
        position: relative;
        background: #FFF;
        margin-bottom: 7px;
        @media screen and (max-width: 768px) {
          width: 100%;
          min-width: 0;
          margin-bottom: 2px;
          box-shadow: 0px 2px 0px #957FEF;
        }
        .game-icon {
          width: 92px;
        }
        .game-name {
          font-weight: 400;
          font-size: 16px;
          color: #2C2C2C;
          margin-left: 12px;
          margin-bottom: 0;
        }
        .green-btn {
          background: #00DD73;
          position: absolute;
          right: 0;
          top: 0;
          height: 19px;
          width: 66px;
          display: flex;
          justify-content: center;
          .green-text {
            font-weight: 400;
            font-size: 12px;
            color: #FFF;
          }
        }
        .blue-btn {
          position: absolute;
          right: 0;
          bottom: 8px;

          display: flex;
          justify-content: flex-end;
          align-items: center;

          background-image: url("../assets/pc/blue-icon.png");
          background-repeat: no-repeat;
          background-size: cover;
          
          width: 112px;
          height: 23px;

          padding-right: 7px;
          .blue-text {
            font-weight: 700;
            font-size: 12px;
            color: #FFF;
          }
          .arrow-icon {
            width: 19px;
          }
        }
        .time-text {
          position: absolute;
          right: 5px;
          bottom: 5px;
          font-weight: 400;
          font-size: 12px;
          color: #DAD4F2;
          margin-bottom: 0;
        }
      }
    }
    .img-block {
      // width: 70%;
      text-align: center;
      margin: 0 auto;
      padding: 3rem 0;
      @media screen and (max-width: 768px) {
        width: 100%;
        display: none;
      }
      .pc-game-banner {
        max-width: 100%;
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }
  }
}
</style>