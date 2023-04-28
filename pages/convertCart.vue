<template>
  <div>
    <Header class="forPC" />
    <div id="" class="convertCart">
      <div class="" :class="!enoughtCoin ? 'nocoin-row' : 'first-row'">
        <div class="convertCart-block">
          <img v-if="!enoughtCoin" class="convert-icon" src="../assets/mobile/nocoin.png" />
          <img v-else class="convert-icon" src="../assets/pc/convert-cart.png" />
          <div class="mo-css">
            <p v-if="!enoughtCoin" class="order-sent">訂單送出失敗</p>
            <p v-else class="order-sent">訂單送出~</p>
            <p v-if="!enoughtCoin" class="more-info">請檢查網路連線是否正常</p>
            <p v-else class="more-info">詳情可至兌換清單查看更多資訊</p>
            <div class="btn-group">
              <p class="btn1" @click="routeTo('/')">
                回商城
              </p>
              <p class="btn1 btn2" @click="routeTo('/convert-history')">
                兌換清單
              </p>
            </div>
          </div>
        </div>
        <div class="btn-group1">
          <p class="btn1" @click="routeTo('/')">
            回商城
          </p>
          <p class="btn1 btn2" :class="!enoughtCoin ? 'hidebtn' : ''" @click="routeTo('/convert-history')">
            兌換清單
          </p>
        </div>
      </div>
      <div class="top-seller-parent">
        <div class="top-seller-title">
          <span class="topSellerTitle">新品上市</span>
          <span class="topSellerSeeMore" @click="routeTo('新品上市')">
            <span class="see-text">更多</span>
            <img src="../assets/mobile/seemore.png" class="seemore" />
          </span>
        </div>
        <div class="top-seller-items">
          <div v-for="item in recommendItems" :key="item.bid" class="each-item" @click="gotoProductDetail(item)">
            <img :src="item.imagePath" class="top-seller-img" />
            <div class="top-seller-textdiv">
              <span class="top-seller-name">{{ item.name }}</span>
              <span class="top-seller-price">
                <img src="../assets/mobile/itemicon_gold.png" class="gold-icon">
                {{ item.originalPrice }}
              </span>
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
  name: 'ConvertCart',
  data() {
    return {
      recommendItems: [
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒1", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 1},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒1", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 2},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒1", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒1", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 4},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒1", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 5},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒1", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 6},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒1", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 7},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒1", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 8},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒1", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 9},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒1", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 10}
      ],
      items6: [
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒5", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 51},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒5", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 52},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒5", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 53},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒5", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 54},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒5", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 55},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒5", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 56},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒5", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 57},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒5", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 58},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒5", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 59},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒5", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 60}
      ],
      enoughtCoin: true
    }
  },
  created() {
    if(this.$route.query && this.$route.query.item) {
      this.enoughtCoin = false
    } else {
      this.enoughtCoin = true
    }
  },
  methods: {
    routeTo(val) {
      if(val === '新品上市') {
        this.$router.push({
          path: "category",
          query: { cateName: val, prodLists: JSON.stringify(this.items6) },
        });
      } else {
        this.$router.push(val)
      }
    },
  }
}
</script>
<style lang="scss">
.forPC {
  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>
<style lang="scss" scoped>
.convertCart {
  padding-top: 140px;
  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
  .first-row {
    background: #7161EF;
    border-radius: 0 0 24px 24px;
  }
  .nocoin-row {
    background: #EF6A61;
    border-radius: 0 0 24px 24px;
  }
  .convertCart-block {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: auto;
    padding: 1rem 0;
    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 4rem 39px 2rem;
      justify-content: unset;
    }
    .convert-icon {
      width: 200px;
      margin-right: 39px;
      @media screen and (max-width: 768px) {
        width: 120px;
        margin-right: 0;
      }
    }
    .mo-css {
      @media screen and (max-width: 768px) {
        margin-left: 19px;
      }
    }
    .order-sent {
      font-weight: 700;
      font-size: 36px;
      color: #FFF;
      margin-bottom: 0;
      @media screen and (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
    .more-info {
      font-weight: 400;
      font-size: 14px;
      color: #FFF;
      margin-bottom: 24px;
      @media screen and (max-width: 768px) {
        font-size: 12px;
        margin-bottom: 5px;
      }
    }
    .btn-group {
      display: flex;
      @media screen and (max-width: 768px) {
        display: none;
      }
      .btn1 {
        border: 1px solid #FFFFFF;
        border-radius: 12px;
        font-weight: 700;
        font-size: 1rem;
        color: #FFF;
        height: 44px;
        line-height: 44px;
        width: 136px;
        text-align: center;
        margin-bottom: 0;
      }
      .btn2 {
        margin-left: 29px;
      }
    }
  }
  .btn-group1 {
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 31px 1rem;
    }
    .btn1 {
      border: 1px solid #FFFFFF;
      border-radius: 12px;
      font-weight: 700;
      font-size: 1rem;
      color: #FFF;
      height: 44px;
      line-height: 44px;
      width: 136px;
      text-align: center;
      margin-bottom: 0;
    }
    .btn2 {
      margin-left: 29px;
      @media screen and (max-width: 768px) {
        margin-left: 0;
      }
    }
    .hidebtn {
      visibility: hidden;
    }
  }
  
  .top-seller-parent {
    width: 100%;
    margin-bottom: 3rem;
    @media screen and (max-width: 768px) {
    }
    .top-seller-title {
      display: flex;
      justify-content: space-between;
      padding: 3rem 120px 2rem;
      @media screen and (max-width: 768px) {
        padding: 0;
        height: 60px;
        align-items: center;

        width: 90%;
        margin: 0 auto;
      }
      .topSellerTitle {
        font-weight: 700;
        font-size: 24px;
        color: #3C3C3C;
        @media screen and (max-width: 768px) {
          font-size: 1rem;
        }
      }
      .topSellerSeeMore {
        color: #ceb17d;
        font-weight: 500;
        font-size: 0.875rem;
        cursor: pointer;
        display: flex;
        align-items: center;
      }
      .see-text {
        padding-right: 5px;
        font-weight: 400;
        font-size: 16px;
        color: #7161EF;
      }
      .seemore {
        width: 6px;
        height: 11px;
      }
    }
    .top-seller-items {
      // display: flex;
      // justify-content: space-between;
      // width: 100%;
      // flex-wrap: wrap;

      display: block;
      // overflow: auto;
      white-space: nowrap;

      -ms-overflow-style: none; 
      scrollbar-width: none; 
      overflow-x: scroll;

      margin-left: 67px;
      width: 96.5%;

      margin-left: calc(81px + 0.5%);
      width: 95.2%;
      @media screen and (max-width: 768px) {
        display: block;
        overflow: auto;
        white-space: nowrap;

        -ms-overflow-style: none; 
        scrollbar-width: none; 
        overflow-x: scroll;

        margin-left: auto;
        width: 98%;
      }
      .each-item {
        cursor: pointer;
        width: 20.5%;
        border: 1px solid #f8f8f8;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
        display: inline-block;
        margin-right: 24px;
        margin-bottom: 1rem;
        border-radius: 60px 60px 6px 6px;
        // @media screen and (min-width: 1441px) {
        //   border: none;
        //   box-shadow: none;
        //   border-radius: 0;
        // }
        @media screen and (max-width: 768px) {
          width: 35%;
          border: 3px solid #EFEFEF;
          box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
          display: inline-block;
          margin-right: 8px;
          margin-bottom: 1rem;
          border-radius: 6px;
        }
        .top-seller-img {
          width: 100%;
          border-top-left-radius: 7px;
          border-top-right-radius: 7px;
          @media screen and (min-width: 1441px) {
            // width: 11.3em; // comment after using container
          }
          @media screen and (max-width: 768px) {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
          }
        }
        .top-seller-name {
          font-weight: 400;
          font-size: 20px;
          color: #3C3C3C;
          display: block;

          height: 93px;

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
            font-size: 12px;

            height: 50px;
            line-height: 14px;
          }
        }
        .top-seller-price {
          font-weight: 600;
          font-size: 24px;
          color: #E1460E;
          
          display: flex;
          align-items: center;

          @media screen and (max-width: 768px) {
            font-weight: 600;
            font-size: 1rem;

            display: flex;
            align-items: center;
            justify-content: flex-start;
            color: #E1460E;
          }
          .gold-icon {
            width: 36px;
            height: 36px;
            margin-right: 12px;
            @media screen and (max-width: 768px) {
              width: 18px;
              height: 18px;
            }
          }
        }
        
        .top-seller-discount {
          //  color:red;
          //  text-decoration:line-through;

          border-bottom: 1px solid #aaaaaa;
          top: -9px; /* Tweak this and the other top in equal, but opposite values */
          position: relative;

          padding: 0.1em 0;
        }
        .top-seller-discount1 {
          color: #aaaaaa;
          font-weight: normal;
          font-size: 0.8125rem;

          position: relative;
          top: 9px; /* Tweak this and the other top in equal, but opposite values */
          font-family: "Roboto", sans-serif;
          @media screen and (max-width: 768px) {
            font-weight: 400;
            font-size: 0.6875rem;
          }
        }
        .top-seller-textdiv {
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
    .top-seller-items::-webkit-scrollbar {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
      border-radius: 10px;
      height: 8px;

      display: none; 
      @media screen and (max-width: 768px) {
      }
    }
    // .top-seller-items::-webkit-scrollbar-thumb {
    //   background: #dfdfdf;
    //   border-radius: 10px;
    // }
  }
}
</style>