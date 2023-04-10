<template>
  <div>
    <b-carousel
      v-if="caroName === 1"
      id="bannerId1" v-model="activeSlide"
      class="m-css"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="160"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for="item in caroItem" :key="item.id" :img-src="item.mimg" class="caro-high1"></b-carousel-slide>
    </b-carousel>
    <b-carousel
      v-if="caroName === 2"
      id="bannerId1" v-model="activeSlide"
      class="m-css"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="160"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for="item in caroItem" :key="item.id" :img-src="item.mimg" :class="caroName == 2 ? 'caro-high2' : 'caro-high1'"></b-carousel-slide>
    </b-carousel>
    <b-carousel
      id="bannerId2" 
      v-model="activeSlide"
      class="pc-css"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="160"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for="item in caroItem" :key="item.id" :img-src="item.img" :class="caroName == 2 ? 'caro-high2' : 'caro-high1'"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'CarouselComponent',
  props: {
    caroItem: {
      type: Array,
      default() {
        return []
      }
    },
    currentSlide: {
      type: Number,
      default: 0
    },
    caroName: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      activeSlide: 0
    }
  },
  computed: {
    
  },
  watch: {
    activeSlide(val1, val2) {
      // console.log("xxxxxx current slide changed", val1, val2);
      this.$emit("activeSlide", val1);
    },
  },
  created() {
    this.activeSlide = this.currentSlide;
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  }
}
</script>

<style lang="scss" scoped>
  
</style>
<style lang="scss">
#bannerId1 {
  .caro-high {
    min-height: 160px;
    max-height: 160px;
  }
  .carousel-indicators li {
    width: 5px !important;
    height: 5px !important;
    border-radius: 50% !important;
  }
  .carousel-control-prev-icon {
    font-size: 1.5rem !important;
    font-weight: bold !important;
    transform: rotate(180deg);
    display: none;
    @media screen and (max-width: 768px) {
      // background-image: url("../assets/mobile/facebook.png");
    }
  }
  .carousel-control-next-icon {
    font-size: 1.5rem !important;
    font-weight: bold !important;
    display: none;
    @media screen and (max-width: 768px) {
      // background-image: url("../assets/mobile/facebook.png");
    }
  }
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 7px;
    height: 14px;
    @media screen and (max-width: 768px) {
      visibility: hidden;
    }
  }
  .carousel-control-prev,
  .carousel-control-next {
    width: 7%;
    opacity: 1;
  }
  .carousel-indicators li {
    border-top: 0px solid transparent;
    border-bottom: 0px solid transparent;
  }
  .carousel-indicators {
    bottom: 5px; // for b-carousel bottom 20px
    z-index: 10;
    @media screen and (max-width: 768px) {
      bottom: -4px; // for b-carousel bottom 12px
    }
  }
}
#bannerId1 {
  .bannerImg {
    width: 100%; /* or any custom size */
    // height: 100%; // may be remove it
    object-fit: fill;
  }
  .el-carousel__container {
    height: 320px !important;
    @media screen and (max-width: 768px) {
      height: 189px !important;
    }
    @media screen and (min-width: 1441px) {
      height: 630px !important;
    }
  }
  .el-carousel__indicators--horizontal {
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    height: 20px;
    @media screen and (max-width: 768px) {
      bottom: 12px;
    }
  }
  .el-carousel__indicator--horizontal {
    display: inline-block;
    padding: 0 4px !important;
  }
  .el-carousel__button {
    width: 5px !important;
    height: 5px !important;
    border-radius: 3px;
  }

  .el-carousel__arrow--left {
    // left: 16px;

    background: none !important;

    font-size: 1.5rem !important;
    font-weight: bold !important;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .el-carousel__arrow,
  .el-carousel__arrow:hover {
    background-color: rgba(31, 45, 61, 0.23);
    background-color: transparent !important;
    background: none !important;
    z-index: 8; // original is 10, now for side bar
  }

  .el-carousel__arrow--right {
    background: none !important;

    font-size: 1.5rem !important;
    font-weight: bold !important;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .bannerDropdown-items1 {
    text-align: left;
    padding-left: 2rem;

    font-size: 0.813rem;
    font-weight: 400;
    color: #4f4f4f;
  }
  .banner-dropdown {
    background: #fff;
    border-radius: 15px;
    padding: 5px 9px;
    position: absolute;
    // display: inline-block;
    right: 0;
    margin-right: 24px;
    margin-top: -43px; /* 300/ */
    margin-top: -46px; // for b-carousel bottom 1rem
    z-index: 8;
    display: flex;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      margin-top: -43px; /* 220/ */ // for b-carousel bottom 12px
      margin-right: 1rem;
    }
  }
  .banner-text {
    color: #4f4f4f;
    font-weight: 500;
    font-size: 0.875rem;
    padding-right: 3px;
  }
  .all-div {
    display: flex;
    align-items: center;
    .all-dropdown {
      width: 13px;
    }
  }
  .all-div1 {
    display: flex;
    align-items: center;
    .all-dropdown1 {
      // width: 13px;
    }
  }
  .bannerDropdownicon {
    // transform: rotate(180deg);
    padding-left: 7px;

    width: 24px;
    height: 16px;
  }
  .testing {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .testing::after {
    content: "\e6e0";
    font-family: element-icons !important;
    display: inline-block;

    color: #4f4f4f;
    font-weight: 600;
    font-size: 0.75rem;
    transform: rotate(90deg);
  }
  .overlay {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    z-index: 10;
    top: 0;
    left: 0;
    position: fixed;
    // filter: alpha(opacity=30);
    // filter: blur(8px);
    backdrop-filter: blur(5px);

    padding: 3rem;
    @media screen and (max-width: 768px) {
      padding: 3rem 2rem;
      top: 45px;
      max-height: calc(100vh - 128px);
    }
  }

  .overlay-content {
    position: relative;
    top: 9%;
    width: 70%;
    margin: 0 auto;
    text-align: center;
    @media screen and (max-width: 768px) {
      top: 0;
      width: 100%;
    }
  }

  h2 {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;
    line-height: 2px;
    margin: 20px 0 20px;
  }
  .line-activity {
    display: flex;
    justify-content: center;
    align-items: center;
    .activity-title {
      color: #fff;
      font-weight: bold;
      font-size: 1.125rem;

      // background:#000;
      padding: 0 10px;
      width: 210px;
      @media screen and (max-width: 768px) {
        width: 215px;
        font-size: 1rem;
      }
    }
  }

  .show-items {
    display: flex;
    flex-wrap: wrap;
    display: -webkit-flex;
    display: -moz-flex;
    flex-flow: row wrap;
    -webkit-flex-flow: row wrap;
    -moz-flex-flow: row wrap;

    width: 100%;
    padding-top: 1rem;
    .each-item {
      width: 23%;
      margin-bottom: 1.4rem;

      margin: 0 1% 20px;
      @media screen and (min-width: 1441px) {
      }
      @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0;
        margin-bottom: 1rem;
      }
      .top-seller-img-div {
        text-align: center;
      }
      .top-seller-img-web {
        margin: auto;
        display: none;
        @media screen and (min-width: 768px) {
          width: 7em;
          //height: 4em;
          //border-radius: 5px;
          display: block;
        }
      }
      .top-seller-img-mobile {
        display: none;
        @media screen and (max-width: 768px) {
          width: 100%;
          border-radius: 5px;
          display: block;
        }
      }
      .top-seller-name {
        font-weight: 500;
        font-size: 1rem;
        color: #fff;
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
          height: auto;
        }
      }
      .top-seller-textdiv {
        margin: 7px;
        margin-left: 0px;
        text-align: center;
        width: 100%;
        @media screen and (min-width: 1441px) {
          width: 14em;
          margin: 7px auto;
        }
      }
    }
  }
  .m-close-gp {
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
      width: 100%;
      z-index: 10;
      bottom: 0;
      position: fixed;
      backdrop-filter: blur(5px);
      background-color: rgba(0, 0, 0, 0.7);
      .m-close-p {
        width: 100%;
        text-align: center;
        padding: 1rem 2rem;
        // margin: 0rem 2rem;
        .m-close-c {
          color: #fff;
          background: #244c5a;
          font-weight: 500;
          font-size: 0.875rem;
          padding: 15px;
          border-radius: 8px;
        }
      }
    }
  }
  .overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 30px;
    color: #fff;
    padding: 3rem 3rem 0;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
}
#bannerId2 {
  .caro-high {
    min-height: 300px;
    max-height: 300px;
  }
  .d-block {
    @media screen and (max-width: 768px) {
      height: 100% !important;
    }
  }
}
.caro-high1 {
  height: 320px;
  @media screen and (max-width: 768px) {
    height: 160px;
  }
}
.caro-high2 {
  // height: 500px;
  @media screen and (max-width: 768px) {
    // height: 160px;
    height: 100% !important;
    height: 500px;
  }
}
.m-css {
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
}
.pc-css {
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>
