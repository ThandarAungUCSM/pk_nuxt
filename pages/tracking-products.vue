<template>
  <div>
    <Header page='category' />
    <div class="tracking-product" :class="!productData ? 'tracking-null' : ''">
      <div class="path-div">
        <img v-if="!productData" src="../assets/pc/fi-rr-user-login.png" alt="" class="user-img1" />
        <img v-else src="../assets/pc/fi-rr-user-login.png" alt="" class="user-img" />
        <span class="home-txt">我的會員</span>
        <span class="cate-txt"> / 追蹤清單</span>
      </div>
      <p class="cate-name">追蹤清單</p>
      <div v-if="!productData" class="null-product">
        <img src="../assets/pc/noproduct.png" alt="" class="noproductimg" />
        <p class="datanull-text">追蹤清單是空的，趕快去買東西吧~</p>
        <div class="goshop-css">
          <span>去逛逛</span>
        </div>
      </div>
      <div v-else class="category-items">
        <div v-for="item in showItems" :key="item.bid" class="each-item">
          <img :src="item.imagePath" alt="" class="cate-img" />
          <div class="overlap-css">
            <img src="../assets/pc/btn-checkout.png" class="checkout-icon">
            <img src="../assets/pc/btn-hearted.png" class="hearted-icon">
          </div>
          <div class="cate-textdiv">
            <span class="cate-title">{{ item.title }}</span>
            <span class="cate-price">
              <img src="../assets/mobile/itemicon_gold.png" class="gold-icon">
              <span class="cate-right"> {{ item.originalPrice }} </span>
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
  name: 'TrackingProductsPage',
  data() {
    return {
      showItems: [
        {title: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒", imagePath: require("../assets/mobile/newArrival1.png"), price: "$99,999", originalPrice: "99,999", bid: 1},
        {title: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒", imagePath: require("../assets/mobile/newArrival1.png"), price: "$99,999", originalPrice: "99,999", bid: 2},
        {title: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒", imagePath: require("../assets/mobile/newArrival1.png"), price: "$99,999", originalPrice: "99,999", bid: 3},
        {title: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒", imagePath: require("../assets/mobile/newArrival1.png"), price: "$99,999", originalPrice: "99,999", bid: 4},
        {title: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒", imagePath: require("../assets/mobile/newArrival1.png"), price: "$99,999", originalPrice: "99,999", bid: 5},
        {title: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒", imagePath: require("../assets/mobile/newArrival1.png"), price: "$99,999", originalPrice: "99,999", bid: 6},
        {title: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒", imagePath: require("../assets/mobile/newArrival1.png"), price: "$99,999", originalPrice: "99,999", bid: 7}
      ],
      productData: true
    }
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.tracking-product {
  padding: 156px 81px 24px 81px;
  background: #eae9f4;
  @media screen and (max-width: 768px) {
    padding: 118px 24px 24px 24px;
    background: #FFF;
  }
  .path-div {
    margin-left: 0.5%;
    @media screen and (max-width: 768px) {
      margin-left: 0;
    }
    .user-img {
      width: 14px;
      height: 14px;
    }
    .user-img1 {
      width: 14px;
      height: 14px;
      visibility: hidden;
      @media screen and (max-width: 768px) {
        display: none;
      }
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
    font-size: 32px;
    color: #000;
    margin: 2rem 0 2rem 0.5%;
    @media screen and (max-width: 768px) {
      font-size: 20px;
      margin: 1.5rem 0 1rem;
    }
  }
  .null-product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .noproductimg {
      width: 240px;
      height: 240px;
      @media screen and (max-width: 768px) {
        width: 200px;
        height: 200px;
      }
    }
    .datanull-text {
      font-weight: 400;
      font-size: 20px;
      color: #B79CED;
      margin: 2rem 0;
      @media screen and (max-width: 768px) {
        font-size: 1rem;
      }
    }
    .goshop-css {
      background: #E9B531;
      border-radius: 24px;
      font-weight: 700;
      font-size: 16px;
      color: #FFF;
      width: 140px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
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
      width: 15.666%;
      background: #FFFFFF;
      border: 3px solid #EFEFEF;
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
      display: inline-block;
      margin: 0 0.5% 2%;
      border-radius: 6px;
      border-radius: 15px;
      cursor: pointer;

      position: relative;
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
        // border-top-left-radius: 6px;
        // border-top-right-radius: 6px;
        @media screen and (max-width: 768px) {
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
        position: absolute;
        bottom: 1rem;
        display: flex;
        align-items: center;
        @media screen and (max-width: 768px) {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          position: unset;
        }
        .gold-icon {
          width: 27px;
          height: 27px;
          @media screen and (max-width: 768px) {
            width:21px;
            height: 21px;

            margin-right: 6px;
          }
        }
        .cate-right {
          font-weight: 600;
          font-size: 24px;
          color: #E1460E;
          margin-left: 10px;
          @media screen and (max-width: 768px) {
            font-size: 1rem;
          }
        }
      }
      .cate-textdiv {
        margin: 0;
        padding: 10px 12px 16px 12px;
        height: 150px;
        position: relative;

        // box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
        @media screen and (min-width: 1441px) {
        }
        @media screen and (max-width: 768px) {
          padding: 10px 10px 8px;
          height: unset;
          position: unset;
        }
      }
      .overlap-css {
        position: absolute;
        margin-top: -43px;
        right: 0;
      }
      .checkout-icon {
        width: 36px;
        height: 36px;
        margin-right: 6px;
      }
      .hearted-icon {
        width: 36px;
        height: 36px;
        margin-right: 12px;
      }
    }
  }
}
.tracking-null {
  height: calc(100vh - 80px);
}
</style>
