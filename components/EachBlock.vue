<template>
  <div>
    <div class="top-seller-parent">
      <div class="top-seller-title">
        <span class="topSellerTitle">{{title}}</span>
        <span class="topSellerSeeMore" @click="gotoCategory(title, showItems)">
          <span class="see-text">更多</span>
          <img src="../assets/mobile/seemore.png" alt="" class="seemore" />
        </span>
      </div>
      <div class="top-seller-items">
        <div v-for="item in showItems" :key="item.bid" class="each-item" @click="gotoProductDetail(item)">
          <div class="toinsert-txt">
            <img :src="item.imagePath" alt="" class="top-seller-img" />
            <div v-if="item.state && item.state === 1" class="datetime-orange">
              <p class="date-time">上架時間 <br> 2024-02-02 00:00</p>
            </div>
            <div v-if="item.state && item.state === 2" class="datetime-purple">
              <p class="date-time">售完</p>
            </div>
          </div>
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
</template>

<script>
export default {
  name: 'EachBlock',
  props: {
    title: {
      type: String,
      default: 'title',
      // 1 => orange (pre-sell), 2 => purple (sold out)
    }
  },
  data() {
    return {
      items1: [
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒1", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 1, state: 1},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒1", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 2, state: 2},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒1", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 3, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒1", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 4, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒1", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 5, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒1", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 6, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒1", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 7, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒1", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 8, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒1", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 9, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒1", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 10, state: 3}
      ],
      items2: [
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒2", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 11, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒2", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 12, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒2", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 13, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒2", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 14, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒2", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 15, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒2", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 16, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒2", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 17, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒2", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 18, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒2", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 19, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒2", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 20, state: 3}
      ],
      items3: [
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒3", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 21, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒3", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 22, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒3", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 23, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒3", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 24, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒3", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 25, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒3", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 26, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒3", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 27, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒3", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 28, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒3", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 29, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒3", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 30, state: 3}
      ],
      items4: [
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒4", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 31, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒4", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 32, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒4", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 33, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒4", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 34, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒4", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 35, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒4", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 36, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒4", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 37, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒4", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 38, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒4", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 39, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒4", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 40, state: 3}
      ],
      items5: [
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒5", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 41, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒5", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 42, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒5", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 43, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒5", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 44, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒5", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 45, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒5", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 46, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒5", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 47, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒5", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 48, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒5", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 49, state: 3},
        {name: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒5", imagePath: require("../assets/mobile/newArrival.png"), price: "99999", originalPrice: "99,999", bid: 50, state: 3}
      ],
      showLess: true
    }
  },
  computed: {
    showItems() {
      // if (this.items.length < 6) {
      //   return this.items;
      // } else {
      //   return this.showLess ? this.items.slice(0, 5) : this.items;
      // }
      if(this.title === '限時優惠') {
        return this.items1;
      } else if(this.title === '全部商品') {
        return this.items2;
      } else if(this.title === '日用雜貨') {
        return this.items3;
      } else if(this.title === '零食飲料') {
        return this.items4;
      } else {
        return this.items5;
      }
    },
  },
  methods: {
    gotoCategory(title, lists) {
      // this.$router.push({ name: "category" });
      this.$router.push({
        path: "category",
        query: { cateName: title, prodLists: JSON.stringify(lists) },
      });
    },
    gotoProductDetail(data) {
      this.$router.push({ name: "productDetail", query: { item: JSON.stringify(data)} });
    }
  }
}
</script>

<style lang="scss" scoped>
  .top-seller-parent {
    width: 100%;
    // width: 80%;
    // margin: 0 auto;
    @media screen and (max-width: 768px) {
    }
    .top-seller-title {
      display: flex;
      justify-content: space-between;
      padding: 2rem 90px 1rem;
      @media screen and (max-width: 768px) {
        padding: 0;
        height: 45px;
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
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      .see-text {
        padding-right: 5px;
        font-weight: 400;
        font-size: 14px;
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

      margin-left: calc(81px + 0.5%);
      width: 95.2%;
      width: calc(100% - (81px + 0.5%));
      @media screen and (max-width: 768px) {
        display: block;
        overflow: auto;
        white-space: nowrap;

        -ms-overflow-style: none; 
        scrollbar-width: none; 
        overflow-x: scroll;

        margin-left: auto;
        width: 95%;
      }
      .each-item {
        cursor: pointer;
        width: 20.5%;
        border: 1px solid #f8f8f8;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
        display: inline-block;
        margin-right: 24px;
        margin-bottom: 1rem;
        border-radius: 6px;
        // @media screen and (min-width: 1441px) {
        //   border: none;
        //   box-shadow: none;
        //   border-radius: 0;
        // }
        @media screen and (max-width: 768px) {
          width: 34%;
          border: 3px solid #EFEFEF;
          box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
          display: inline-block;
          margin-right: 12px;
          margin-bottom: 1rem;
          border-radius: 6px;
        }
        .toinsert-txt {
          position: relative;
          width: 100%;
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
          .datetime-orange, .datetime-purple {
            position: absolute;
            border-radius: 0px 0px 6px 6px;
            padding: 6px 0;
            bottom: 0px;
            width: 100%;
            text-align: center;
            background: #E9B531;
            background: rgba(233, 181, 49, 0.6);
            backdrop-filter: blur(2px);
            .date-time {
              font-weight: 500;
              font-size: 16px;
              color: #FFF;
              margin-bottom: 0;
              @media screen and (max-width: 768px) {
                font-size: 8px;
              }
            }
          }
          .datetime-purple {
            background: #B79CED;
            background: rgba(183, 156, 237, 0.6);
            backdrop-filter: blur(2px);
            @media screen and (max-width: 768px) {
              font-size: 10px;
            }
          }
        }
        .top-seller-name {
          color: #3C3C3C;
          font-weight: 400;
          font-size: 20px;
          display: block;

          height: 100px;
          line-height: 25px;

          display: -webkit-box;
          overflow: hidden;
          white-space: normal !important;
          text-overflow: ellipsis;
          word-wrap: break-word;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          @media screen and (max-width: 768px) {
            font-size: 12px;
            height: 50px;
            line-height: 14px;
          }
        }
        .top-seller-price {
          color: #E1460E;
          font-weight: bold;
          font-size: 24px;
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
              width: 18px;
              height: 18px;

              margin-right: 6px;
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
</style>
