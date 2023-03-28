<template>
  <div>
    <Header />
    <div class="game-page">
      <div class="game-container">
        <img src="../assets/pc/game-banner.png" class="game-banner">
        <div>
          <p class="cooperation-game">PK合作遊戲</p>
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
    }
  },
}
</script>
<style lang="scss" scoped>
.game-page {
  padding-top: 156px;
  background: linear-gradient(180deg, #210A67 0%, #7161EF 100%);
  @media screen and (max-width: 768px) {
    padding-top: 100px;
  }
  .game-container {
    width: 70%;
    margin: 0 auto;
    .game-banner {
      max-width: 100%;
    }
    .cooperation-game {
      font-weight: 400;
      font-size: 14px;
      color: #FFF;
      margin-top: 1rem;
    }
    .game-item {
      display: flex;
      flex-wrap: wrap;
      .each-item {
        width: 144px;
        width: 15.83%;
        margin: 0 .5% 1.5%;
        background: rgba(49, 20, 132, 0.9);
        border-radius: 6px;
        padding: 7px;
        .each-gaitem {
          max-width: 100%;
        }
        .each-ganame {
          font-weight: 700;
          font-size: 14px;
          color: #FFF;
          margin: 10px 0;
        }
        .each-gacategory {
          font-weight: 400;
          font-size: 10px;
          color: #FFF;
          margin-bottom: 40px;
        }
      }
      .each-item:first-child, .each-item:nth-child(7) {
        margin-left: 0;
      }
      .each-item:last-child, .each-item:nth-child(6) {
        margin-right: 0;
      }
    }
  }
}
</style>