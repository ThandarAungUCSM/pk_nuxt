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
        {title: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒", imagePath: require("../assets/mobile/newArrival.png"), price: "$99,999", originalPrice: "99,999", bid: 5}
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
  padding: 118px 24px 24px 24px;
  .path-div {
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
    font-size: 20px;
    color: #000;
    margin: 1.5rem 0 1rem;
  }
  .category-items {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    @media screen and (max-width: 768px) {
      
    }
    .each-item {
      // cursor: pointer;
      // width: 20.5%;
      // border: 1px solid #f8f8f8;
      // box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
      // display: inline-block;
      // margin-right: 24px;
      // margin-bottom: 1rem;
      // border-radius: 6px;
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
        color: #4f4f4f;
        font-weight: normal;
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
          color: #3C3C3C;
          font-weight: 400;
          font-size: 14px;

          height: 50px;
          line-height: 14px;
        }
      }
      .cate-price {
        color: #9d8147;
        font-weight: bold;
        font-size: 1rem;
        font-family: "Roboto", sans-serif;
        @media screen and (max-width: 768px) {
          font-weight: 600;
          font-size: 1rem;

          display: flex;
          align-items: center;
          justify-content: flex-start;
          color: #E1460E;
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
        padding: 10px 12px 16px 12px;
        @media screen and (min-width: 1441px) {
          // width: 11.3em; // comment after using container
          margin: 0;
          padding: 7px;

          border: 1px solid #f8f8f8;
          box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
          border-radius: 7px;
          padding: 10px 12px 12px;
        }
        @media screen and (max-width: 768px) {
          padding: 10px 10px 8px;
        }
      }
    }
  }
}
</style>
