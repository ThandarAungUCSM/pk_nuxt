<template>
  <div>
    <Header />
    <div class="content-css">
      <div class="banner-block1">
        <Carousel :caro-item="regularBannerBlock1" :current-slide="slide" caro-name="1" />
        <img class="banner-btn" alt="mobile banner" src="../assets/mobile/btnNewsList.png" />
      </div>

      <div class="banner-block2">
        <Carousel :caro-item="regularBannerBlock2" :current-slide="slide" caro-name="2" />
        <div class="indicate-block">
          <div class="indicator-css">{{currentNo}}/{{totalNo}}</div>
        </div>
      </div>

      <EachBlock title="新品上市" />
      <EachBlock title="限時優惠" />
      <EachBlock title="日用雜貨" />
      <EachBlock title="零食飲料" />
      <EachBlock title="玩具公仔" />
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      slide: 0,
      sliding: null,
      regularBannerBlock1: [
        {
          "title": "3月全站_38女神節1T",
          "mimg": require("../assets/mobile/b1.png"),
          "img": require("../assets/pc/b1.png"),
          "themeType": 999,
          "outerUrl": "https://www.google.com/",
          "id": 1
        }, {
          "title": "防範疫情不恐慌",
          "mimg": "http://i1.wp.com/inews.gtimg.com/newsapp_bt/0/1627177403/641",
          "img": require("../assets/pc/b1.png"),
          "themeType": 1,
          "outerUrl": "",
          "id": 2
        }, {
          "title": "防範疫情3",
          "mimg": "http://i1.wp.com/inews.gtimg.com/newsapp_bt/0/1627177403/641",
          "img": require("../assets/pc/b1.png"),
          "themeType": 1,
          "outerUrl": "",
          "id": 3
        }
      ], // Banner1
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
      ], // Banner2
      currentNo: 1,
      totalNo: 6
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>

.content-css {
  // padding: 0 67px;
  // @media screen and (max-width: 768px) {
  //   padding: 0;
  // }
  padding-top: 140px;
  padding-bottom: 110px;
  @media screen and (max-width: 768px) {
    padding-top: 102px;
  }
}
.banner-block1 {
  position: relative;

  padding: 0 67px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  .banner-btn {
    // display: none;
    position: absolute;
    width: 36px;
    height: 36px;
    bottom: 5px;
    right: 76px;
    @media screen and (max-width: 768px) {
      // display: block;
      bottom: 0;
      right: 9px;
      
    }
  }
}
.banner-block2 {
  background: #FFF;
  position: relative;
  padding: 0;
  margin-top: 1rem;

  padding: 0 67px;
  @media screen and (max-width: 768px) {
    background: #E1E1E1;
    padding: 2.5rem 1rem 1rem;
    margin-top: 0;
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
      bottom: 27px;
      right: 25px;
    }
    .indicator-css {
      font-weight: 300;
      font-size: 14px;
      color: #FFF;
      text-align: center;
    }
  }
}
  
</style>
<style lang="scss">
</style>
