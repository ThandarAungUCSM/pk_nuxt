<template>
  <div>
    <Header />
    <div v-if="showGames == false" class="game-page">
      <div class="game-container">
        <img src="../assets/pc/game-banner.png" class="pc-game-banner">
        <img src="../assets/mobile/game-banner.png" class="m-game-banner">
        <div class="pc-block">
          <p class="cooperation-game">PK合作遊戲</p>
          <div class="game-item">
            <div v-for="item in items" :key="item.id" class="each-item">
              <img :src="item.imagePath" class="each-gaitem">
              <p class="each-ganame">{{item.title}}</p>
              <p class="each-gacategory">{{item.category}}</p>
            </div>
          </div>
        </div>
        <div class="m-block">
          <div class="title-allsee">
            <p class="cooperation-game">PK合作遊戲</p>
            <p class="view-all" @click="showAll">查看所有</p>
          </div>
          <div class="game-item">
            <div v-for="item in items" :key="item.id" class="each-item">
              <img :src="item.imagePath" class="each-gaitem">
              <p class="each-ganame">{{item.title}}</p>
              <p class="each-gacategory">{{item.category}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="games-page">
      <p class="cooperation-game">PK合作遊戲</p>
      <div class="game-item">
        <div v-for="item in items" :key="item.id" class="each-item">
          <img :src="item.imagePath" class="each-gaitem">
          <p class="each-ganame">{{item.title}}</p>
          <p class="each-gacategory">{{item.category}}</p>
        </div>
      </div>
    </div>
    <Footer page="productDetail" />
  </div>
</template>
<script>
export default {
  name: 'GamePage',
  data() {
    return {
      items: [
        {title: "MYISTAL 米茲塔爾", imagePath: require("../assets/pc/game1.png"), category: '類別', id: 1},
        {title: "MYISTAL 米茲塔爾", imagePath: require("../assets/pc/game2.png"), category: '類別', id: 2},
        {title: "MYISTAL 米茲塔爾", imagePath: require("../assets/pc/game3.png"), category: '類別', id: 3},
        {title: "MYISTAL 米茲塔爾", imagePath: require("../assets/pc/game3.png"), category: '類別', id: 4},
        {title: "MYISTAL 米茲塔爾", imagePath: require("../assets/pc/game3.png"), category: '類別', id: 5},
        {title: "MYISTAL 米茲塔爾", imagePath: require("../assets/pc/game3.png"), category: '類別', id: 6},
        {title: "MYISTAL 米茲塔爾", imagePath: require("../assets/pc/game1.png"), category: '類別', id: 7},
        {title: "MYISTAL 米茲塔爾", imagePath: require("../assets/pc/game2.png"), category: '類別', id: 8},
        {title: "MYISTAL 米茲塔爾", imagePath: require("../assets/pc/game3.png"), category: '類別', id: 9},
        {title: "MYISTAL 米茲塔爾", imagePath: require("../assets/pc/game3.png"), category: '類別', id: 10},
        {title: "MYISTAL 米茲塔爾", imagePath: require("../assets/pc/game3.png"), category: '類別', id: 11},
        {title: "MYISTAL 米茲塔爾", imagePath: require("../assets/pc/game3.png"), category: '類別', id: 12},
      ],
      showGames: false
    }
  },
  created() {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener("resize", this.checkScreen, false);
      this.checkScreen();
    }
  },
  mounted() {
  },
  methods: {
    showAll() {
      this.showGames = true
    },
    checkScreen() {
      if (window) {
        const windowWidth = window.innerWidth;
        if (windowWidth > 768) {
          this.showGames = false;
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.game-page {
  padding-top: 156px;
  background: linear-gradient(180deg, #210A67 0%, #7161EF 100%);
  @media screen and (max-width: 768px) {
    padding-top: 100px;
    padding-top: 65px;
    background: #471ebb;
  }
  .game-container {
    width: 70%;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    .pc-block {
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    .m-block {
      display: none;
      @media screen and (max-width: 768px) {
        display: block;
        background: #210A67;
        background: linear-gradient(180deg, #210A67 0%, rgba(33, 10, 103, 0) 100%);
      }
    }
    .pc-game-banner {
      max-width: 100%;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    .m-game-banner {
      display: none;
      @media screen and (max-width: 768px) {
        display: block;
        width: 100%;
      }
    }
    .title-allsee {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
    }
    .cooperation-game {
      font-weight: 400;
      font-size: 14px;
      color: #FFF;
      margin-top: 1rem;
    }
    .view-all {
      font-weight: 400;
      font-size: 10px;
      color: #FFD058;
      margin-top: 1rem;
    }
    .game-item {
      display: flex;
      flex-wrap: wrap;
      
      @media screen and (max-width: 768px) {
        display: block;
        overflow: auto;
        white-space: nowrap;
        -ms-overflow-style: none;
        scrollbar-width: none;
        overflow-x: scroll;
        margin-left: auto;
        width: 100%;
        padding: 0 9px;
      }
      .each-item {
        width: 15.83%;
        margin: 0 .5% 1.5%;
        background: rgba(49, 20, 132, 0.9);
        border-radius: 6px;
        padding: 7px;
        @media screen and (max-width: 768px) {
          width: 32%;
          display: inline-block;
          margin: 0 1.2% 1.5%;
          
        }
        .each-gaitem {
          max-width: 100%;
        }
        .each-ganame {
          font-weight: 700;
          font-size: 14px;
          color: #FFF;
          margin: 10px 0;
          @media screen and (max-width: 768px) {
            font-size: 10px;
          }
        }
        .each-gacategory {
          font-weight: 400;
          font-size: 10px;
          color: #FFF;
          margin-bottom: 40px;
          @media screen and (max-width: 768px) {
          }
        }
      }
      .each-item:first-child, .each-item:nth-child(7) {
        margin-left: 0;
        @media screen and (max-width: 768px) {
          margin: 0 .5% 1.5%;
        }
      }
      .each-item:last-child, .each-item:nth-child(6) {
        margin-right: 0;
        @media screen and (max-width: 768px) {
          margin: 0 .5% 1.5%;
        }
      }
    }
    .game-item::-webkit-scrollbar {
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    
  }
}
.games-page {
  @media screen and (max-width: 768px) {
    padding-top: 100px;
    background: linear-gradient(180deg, #210A67 0%, #7161EF 100%);
  }
  .cooperation-game {
    @media screen and (max-width: 768px) {
      font-weight: 400;
      font-size: 14px;
      color: #FFF;
      margin-top: 1rem;
      padding: 0 1rem;
    }
  }
  .game-item {
    @media screen and (max-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      padding: 0 9px;
    }
    .each-item {
      @media screen and (max-width: 768px) {
        background: rgba(49, 20, 132, 0.9);
        border-radius: 6px;
        padding: 7px;
        width: 31.33%;
        margin: 0 1% 1.5%;
      }
      .each-gaitem {
        max-width: 100%;
      }
      .each-ganame {
        font-weight: 700;
        font-size: 14px;
        color: #FFF;
        margin: 10px 0;
        @media screen and (max-width: 768px) {
          font-size: 10px;
        }
      }
      .each-gacategory {
        font-weight: 400;
        font-size: 10px;
        color: #FFF;
        margin-bottom: 40px;
        @media screen and (max-width: 768px) {
        }
      }
    }
  }
}
</style>