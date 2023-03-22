<template>
  <div>
    <Header page='category' />
    <div class="category-page">
      <div class="path-div">
        <img src="../assets/mobile/fi-rr-home.png" alt="" class="home-img" />
        <span class="home-txt">首頁</span>
        <span class="cate-txt"> / 分類名稱</span>
      </div>
      <p class="cate-name">分類名稱</p>
      <div class="category-items">
        <div v-for="item in showItems" :key="item.bid" class="each-item">
          <img :src="item.imagePath" alt="" class="cate-img" />
          <div class="cate-textdiv">
            <span class="cate-title">{{ item.title }}</span>
            <span class="cate-price">
              <img src="../assets/mobile/itemicon_gold.png" class="gold-icon">
              {{ item.originalPrice }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <Footer page="category" />
  </div>
</template>

<script>
export default {
  name: 'CategoryPage',
  data() {
    return {
      showItems: [
        {title: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒", imagePath: require("../assets/mobile/newArrival.png"), price: "$99,999", originalPrice: "99,999", bid: 1},
        {title: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒", imagePath: require("../assets/mobile/newArrival.png"), price: "$99,999", originalPrice: "99,999", bid: 2},
        {title: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒", imagePath: require("../assets/mobile/newArrival.png"), price: "$99,999", originalPrice: "99,999", bid: 3},
        {title: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒", imagePath: require("../assets/mobile/newArrival.png"), price: "$99,999", originalPrice: "99,999", bid: 4},
        {title: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒", imagePath: require("../assets/mobile/newArrival.png"), price: "$99,999", originalPrice: "99,999", bid: 5},
        {title: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒", imagePath: require("../assets/mobile/newArrival.png"), price: "$99,999", originalPrice: "99,999", bid: 6},
        {title: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒", imagePath: require("../assets/mobile/newArrival.png"), price: "$99,999", originalPrice: "99,999", bid: 7}
      ],
    }
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.category-page {
  padding: 156px 81px 24px 81px;
  @media screen and (max-width: 768px) {
    padding: 118px 24px 24px 24px;
  }
  .path-div {
    margin-left: 0.5%;
    @media screen and (max-width: 768px) {
      margin-left: 0;
    }
    .home-img {
      width: 1rem;
      height: 1rem;
    }
    .home-txt {
      font-weight: 400;
      font-size: 12px;
      color: #957FEF;
    }
    .cate-txt {
      font-weight: 400;
      font-size: 12px;
      color: #000;
    }
  }
  .cate-name {
    font-weight: 700;
    color: #000;
    font-size: 32px;
    margin: 1.5rem 0 1rem 0.5%;
    @media screen and (max-width: 768px) {
      font-size: 20px;
      margin: 1.5rem 0 1rem;
    }
  }
  .category-items {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    @media screen and (max-width: 768px) {
      justify-content: space-between;
    }
    .each-item {
      width: 19%;
      border: 1px solid #f8f8f8;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
      display: inline-block;
      margin: 0 0.5% 2%;
      border-radius: 6px;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        width: 47%;
        border: 3px solid #EFEFEF;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
        display: inline-block;
        margin-bottom: 1rem;
        border-radius: 6px;
      }
      .cate-img {
        width: 100%;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        @media screen and (max-width: 768px) {
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
        }
      }
      .cate-title {
        color: #3C3C3C;
        font-weight: 400;
        font-size: 1rem;
        display: block;

        height: 50px;
        line-height: 25px;

        display: -webkit-box;
        overflow: hidden;
        white-space: normal !important;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        @media screen and (max-width: 768px) {
          font-size: 14px;
          line-height: 14px;
        }
      }
      .cate-price {
        font-weight: 600;
        font-size: 1rem;
        color: #E1460E;
        position: absolute;
        bottom: 1rem;
        @media screen and (max-width: 768px) {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          position: unset;
        }
        .gold-icon {
          @media screen and (max-width: 768px) {
            width:21px;
            height: 21px;

            margin-right: 6px;
          }
        }
      }
      .cate-textdiv {
        margin: 0;
        border: 1px solid #f8f8f8;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        
        padding: 10px 12px 16px 12px;
        height: 150px;
        position: relative;
        @media screen and (min-width: 1441px) {
        }
        @media screen and (max-width: 768px) {
          padding: 10px 10px 8px;
          height: unset;
          position: unset;
        }
      }
    }
  }
}
</style>
