<template>
  <div>
    <Header page="prodDetail" @checkAuth="checkAuth" />
    <div class="product-page">
      <div v-if="itemtoCart" class="formobile">
        <div class="cart-hint">
          <img src="../assets/mobile/cart-check.png" alt="" class="cart-img" />
          <p class="txt-cart">已加入購物車</p>
        </div>
      </div>
      <div class="first-row">
        <img src="../assets/pc/produ-img.png" alt="" class="product-img" />
        <div id="normalId" class="prod-data">
          <p class="prod-title">山丘藍台灣藍莓 5盒裝 單盒淨重 100公克 ×5 盒</p>
          <p class="prod-content">藍莓是一種深藍色的小果實，是近年來越來越受歡迎的農產品之一。藍莓味道鮮美，並且擁有豐富的營養價值，含有豐富的維生素C、維生素K、維生素E和膳食纖維等多種營養成分。此外，藍莓還含有豐富的抗氧化物質，能夠幫助抵禦自由基對身體的損害，對保持身體健康有很大的幫助。</p>
          <span class="prod-price">
            <img src="../assets/mobile/itemicon_gold.png" class="gold-icon">
            <span>{{totalPrice}}</span>
          </span>
          <div id="mProductId" class="bottom-block">
            <el-input-number
              v-model="showArr"
              :min="1"
              :max="5"
              @change="(currentVal, oldVal) => {updateNum(currentVal, oldVal, productData)}" ></el-input-number>
            <div v-if="productCondition" class="two-btn product-count">
              <p class="pre-sell-btn" @click="buyNow">上架時間：2024-02-02 00:00</p>
              <loginModal :show="showModal" class="formobile" @close="showModal = false" />
            </div>
            <div v-else-if="!productCondition" class="two-btn product-count">
              <p class="sold-out-btn" @click="addtoCart">售完</p>
              <loginModal :show="showModal" class="formobile" @close="showModal = false" />
            </div>
            <div v-else class="two-btn product-count">
              <p class="to-cart" @click="addtoCart">加入購物車</p>
              <p class="buy-now" @click="buyNow">立即購買</p>
              <loginModal :show="showModal" class="formobile" @close="showModal = false" />
            </div>
          </div>
          <div class="heart-row">
            <img v-if="redheart" src="../assets/pc/heart.png" alt="" class="heart-img" @click="redheart = !redheart" />
            <img v-else src="../assets/pc/white-heart.png" alt="" class="heart-img" @click="redheart = !redheart" />
            <span class="to-tracklist">加入追蹤清單</span>
          </div>
        </div>
      </div>
      <div class="each-row">
        <div class="title-row">
          <span class="storeTitle">商品描述</span>
          <h2>
          </h2>
        </div>
        <div>
          <p class="prod-description">【注意事項】</p>
          <p class="prod-description">【商品特色】</p>
          <p class="prod-description">【商品規格】</p>
        </div>
      </div>
      <div class="each-row">
        <div class="title-row">
          <span class="storeTitle">了解更多</span>
          <h2>
          </h2>
        </div>
        <img src="../assets/pc/prod1.png" alt="" class="prod-img" />
        <img src="../assets/pc/prod2.png" alt="" class="prod-img" />
        <img src="../assets/pc/prod3.png" alt="" class="prod-img" />
      </div>
      <div class="recommend-block">
        <p class="recommend-prod">推薦商品</p>
        <div class="recommend-items">
          <div v-for="item in recommendItems" :key="item.bid" class="each-item" @click="gotoProductDetail(item)">
            <img :src="item.imagePath" alt="" class="top-seller-img" />
            <div class="top-seller-textdiv">
              <span class="top-seller-name">{{ item.title }}</span>
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
    <div id="mscrollshowId" class="upder-footer">
      <div v-if="productCondition" class="two-btn product-count">
        <p class="pre-sell-btn" @click="buyNow">上架時間：2024-02-02 00:00</p>
        <loginModal :show="showModal" class="formobile" @close="showModal = false" />
      </div>
      <div v-else-if="!productCondition" class="two-btn product-count">
        <p class="sold-out-btn" @click="addtoCart">售完</p>
        <loginModal :show="showModal" class="formobile" @close="showModal = false" />
      </div>
      <div v-else class="two-btn product-count">
        <p class="to-cart" @click="addtoCart">加入購物車</p>
        <p class="buy-now" @click="buyNow">立即購買</p>
        <loginModal :show="showModal" class="formobile" @close="showModal = false" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import "element-ui/lib/theme-chalk/index.css";
export default {
  name: 'ProductDetail',
  data() {
    return {
      showArr: 1,
      recommendItems: [
        {title: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒", imagePath: require("../assets/mobile/newArrival.png"), price: "$99,999", originalPrice: "99,999", bid: 1},
        {title: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒", imagePath: require("../assets/mobile/newArrival.png"), price: "$99,999", originalPrice: "99,999", bid: 2},
        {title: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒", imagePath: require("../assets/mobile/newArrival.png"), price: "$99,999", originalPrice: "99,999", bid: 3},
        {title: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒", imagePath: require("../assets/mobile/newArrival.png"), price: "$99,999", originalPrice: "99,999", bid: 4},
        {title: "山丘藍台灣藍莓 5盒裝單盒淨重 100公克 ×5 盒", imagePath: require("../assets/mobile/newArrival.png"), price: "$99,999", originalPrice: "99,999", bid: 5}
      ],
      itemtoCart: false,
      showModal: false,
      totalPrice: 0,
      redheart: true,
      tempProduct: {},
      currentVal: 1,
      productCondition: true // true => pre-sell, false => sold out
    }
  },
  computed: {
    productData() {
      console.log("this.prodLists=", JSON.parse(this.$route.query.item));
      return JSON.parse(this.$route.query.item);
    },
  },
  mounted() {
    if(typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        const element = document.getElementById("mProductId");
        const y = element.getBoundingClientRect().top;
        if(y < -3) {
          const showdiv = document.getElementById("mscrollshowId");
          showdiv.classList.add('mshowBottom')
        } else if(y > 1) {
          const showdiv = document.getElementById("mscrollshowId");
          showdiv.classList.remove('mshowBottom')
        }

      });
    }
  },
  created() {
    this.tempProduct = JSON.parse(this.$route.query.item);
    this.totalPrice = this.tempProduct.price * 1;
  },
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    checkAuth(auth) {
      this.userLogin = auth
    },
    updateNum(current, old, val) {
      console.log('current ', current);
      console.log('old ', old);
      this.currentVal = current
      this.totalPrice = val.price * current;
    },
    addtoCart() {
      this.itemtoCart = true;
      // window.scrollTo(0, 0);
      window.scrollTo({ top: 0, behavior: "smooth" });

      this.productData.max = 5;
      this.productData.quantity = this.currentVal;
      const product = this.productData;
      this.addProductToCart(JSON.stringify(product));
      this.$message({
        message: "Add to Cart Success",
        type: "success",
        duration: 2000,
      });
      this.$forceUpdate();
    },
    buyNow() {
      // if(this.userLogin) {
      //   console.log('hi');
      // } else {
      //   this.itemtoCart = false;
      //   this.showModal = true;
      // }
      this.$router.push({name: 'convert'})
    },
  }
}
</script>

<style lang="scss">
.el-input-number .el-input__inner {
  -webkit-appearance: none;
  padding-left: 50px;
  padding-right: 50px;
  text-align: center;

  border: none;
  line-height: 36px !important;

  font-size: 20px;
  font-weight: 700;
  color: #957FEF;
}
.el-input-number {
  width: 150px !important;

  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 36px;
  margin: auto;
  @media screen and (max-width: 768px) {
    margin: 1rem auto;
  }
}
#normalId {
  .el-input-number__decrease,
  .el-input-number__increase {
    color: #FFF !important;
    background: #b79ced;
    font-size: 1rem !important;
    border: 1px solid #b79ced;
    top: 3px;

    width: 36px;
    height: 36px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .el-input-number__decrease.is-disabled,
  .el-input-number__increase.is-disabled {
    color: #DBDBDB !important;
    background: #efefef;
    font-size: 1rem !important;
    border: 1px solid #efefef;
    cursor: not-allowed;

    width: 36px;
    height: 36px;
    border-radius: 18px;
  }
  .el-input-number__decrease:hover,
  .el-input-number__increase:hover {
    color: #b79ced !important;
    background: #f7f2e8;
    font-size: 1rem !important;
    border: 1px solid #b79ced;
    top: 0px;
  }
}
</style>

<style lang="scss" scoped>
.product-page {
  padding-top: 156px;
  width: 60%;
  width: 962px;
  margin: auto auto 96px;
  @media screen and (max-width: 768px) {
    padding-top: 67px;
    width: 100%;
  }
  .formobile {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
  .cart-hint {
    @media screen and (max-width: 768px) {
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #00FF94;
    }
  }
  .cart-img {
    @media screen and (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
  .txt-cart {
    @media screen and (max-width: 768px) {
      font-weight: 400;
      font-size: 1rem;
      color: #000;
      margin-left: 10px;
      margin-bottom: 0;
    }
  }
  .first-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 64px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      margin-bottom: 50px;
    }
    .product-img {
      width: 45%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    .prod-data {
      width: 50%;
      margin-top: 50px;
      position: relative;
      @media screen and (max-width: 768px) {
        width: 100%;
        padding: 1rem 0;
        margin-top: 0;
      }
      .prod-title {
        font-weight: 400;
        font-size: 20px;
        color: #3C3C3C;
        @media screen and (max-width: 768px) {
          padding: 0 1rem;
        }
      }
      .prod-content {
        font-weight: 400;
        font-size: 16px;
        color: #957FEF;
        @media screen and (max-width: 768px) {
          padding: 0 1rem;
        }
      }
      .prod-price {
        font-weight: 400;
        font-size: 20px;
        color: #E1460E;
        @media screen and (max-width: 768px) {
          display: flex;
          align-items: center;
          padding: 0 1rem;
        }
        .gold-icon {
          width: 24px;
          height: 24px;
          @media screen and (max-width: 768px) {
            margin-right: 6px;
          }
        }
      }
      .bottom-block {
        position: absolute;
        width: 100%;
        bottom: 0;
        @media screen and (max-width: 768px) {
          position: unset;
        }
      }
      .heart-row {
        position: absolute;
        bottom: -50px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        @media screen and (max-width: 768px) {
          bottom: -30px;
        }
      }
      .heart-img {
        width: 24px;
        height: 24px;
        margin-right: 10px;
      }
      .to-tracklist {
        font-weight: 400;
        font-size: 1rem;
        color: #2D2D2D;
      }
    }
  }
  .each-row {
    padding-top: 10px;
    @media screen and (max-width: 768px) {
      padding: 10px 10px 0;
    }
  }
  .title-row {
    display: flex;
    align-items: center;
    padding: 5px 0;
    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 5px 0 10px;
    }
    h2 {
      width: 91%;
      border-bottom: 2px solid #EBE7FF;
      border-radius: 2px;
      line-height: 2px;
      margin: 0;
      @media screen and (max-width: 768px) {
        width: 80%;
      }
    }
    .storeTitle {
      color: #3C3C3C;
      font-weight: 400;
      font-size: 20px;
      width: 9%;
      @media screen and (max-width: 768px) {
        font-size: 14px;
        width: 20%;
      }
    }
  }
  .prod-img {
    width: 100%;
    max-width: 100%;
    margin-bottom: 5px;
    @media screen and (max-width: 768px) {
      margin-bottom: 3px;
    }
  }
  .prod-description {
    font-weight: 400;
    font-size: 14px;
    color: #3C3C3C;
    margin-bottom: 5px;
    @media screen and (max-width: 768px) {
      padding-left: 7px;
    }
  }
  .recommend-block {

    @media screen and (max-width: 768px) {
      padding: 1rem 0px 1rem 10px;
    }
    .recommend-prod {
      margin: 1rem 0;
      @media screen and (max-width: 768px) {
        font-weight: 700;
        font-size: 16px;
        color: #3C3C3C;
        margin: 0;
      }
    }
    .recommend-items {
      display: block;
      overflow: auto;
      white-space: nowrap;
  
      -ms-overflow-style: none; 
      scrollbar-width: none; 
      overflow-x: scroll;
  
      width: 100%;
      @media screen and (max-width: 768px) {
        display: block;
        overflow: auto;
        white-space: nowrap;
  
        -ms-overflow-style: none; 
        scrollbar-width: none; 
        overflow-x: scroll;
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
        @media screen and (max-width: 768px) {
          width: 34%;
          border: 3px solid #EFEFEF;
          box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
          display: inline-block;
          margin-right: 12px;
          margin-bottom: 1rem;
          border-radius: 6px;
        }
        .top-seller-img {
          width: 100%;
          border-top-left-radius: 7px;
          border-top-right-radius: 7px;
          @media screen and (min-width: 1441px) {
          }
          @media screen and (max-width: 768px) {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
          }
        }
        .top-seller-name {
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
            font-size: 12px;
  
            height: 50px;
            line-height: 14px;
          }
        }
        .top-seller-price {
          color: #E1460E;
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
              width: 18px;
              height: 18px;
  
              margin-right: 6px;
            }
          }
        }
        .top-seller-textdiv {
          padding: 10px 12px 16px 12px;
          @media screen and (min-width: 1441px) {
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
    .recommend-items::-webkit-scrollbar {
      // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
      // border-radius: 10px;
      // height: 8px;
      @media screen and (max-width: 768px) {
        display: none; 
      }
    }
    .recommend-items::-webkit-scrollbar-thumb {
      // background: #dfdfdf;
      // border-radius: 10px;
    }
  }
}
.upder-footer {
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
}
.mshowBottom {
  position: fixed;
  width: 100%;
  bottom: 0;

  visibility: hidden;
  opacity: 0.5;
  animation-name: bottomToTop7;
  animation-duration: 0.1s;
  animation-timing-function: linear;
  animation-fill-mode: forwards; 
}
@keyframes bottomToTop7 {
  0% {
    visibility: hidden;
    opacity: 0.5;
    transform: translateY(20px);
  }
  100% {
    visibility: visible;
    opacity: 1;
    transform: translateY(0px);
  }
}
.two-btn {
  display: flex;
  margin-top: 12px;
  .to-cart, .buy-now {
    font-weight: 700;
    font-size: 1rem;
    color: #FFF;
    width: 50%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    cursor: pointer;
  }
  .to-cart {
    background: #7161EF;
  }
  .buy-now {
    background: #E9B531;
  }
  .pre-sell-btn, .sold-out-btn {
    font-weight: 500;
    font-size: 20px;
    color: #FFF;
    width: 100%;
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    cursor: pointer;
  }
  .pre-sell-btn {
    background: #E9B531;
  }
  .sold-out-btn {
    background: #B79CED;
  }
}
</style>
