<template>
  <div :class="page && (page == 'login' || page == 'front' || page == 'category' || page == 'productDetail') ? 'loginfooter-div' : 'footer-div'">
    <div v-if="page && page == 'login'" class="loginfooter-block-m">
      <div class="loginfootest-block">
        <div class="m-center">
          <span class="center-top">關於PK</span>
          <span class="center-top">隱私權政策</span>
          <span class="center-top">使用規範</span>
        </div>
        <div class="line-css"></div>
        <span class="footest-txt">OOXX娛樂電商有限公司© 2023 PK. 版權所有。</span>
      </div>
    </div>
    <div v-else class="footer-block-m">
      <div>
        <p class="foot-title1">關於PK</p>
        <span class="txt1">關於我們</span>
        <span class="txt1">隱私政策</span>
        <span class="txt1">會員規範</span>
      </div>
      <div class="mid-block">
        <p class="foot-title2">聯絡我們</p>
        <span class="txt1">PK Merchant 娛樂電商有限公司</span>
        <span class="txt1">02-12345678 服務時間：週一至週五 09:30-17:30</span>
      </div>
      <div class="foot-img">
        <img class="fb-css" alt="facebook" src="../assets/mobile/facebook.png" />
        <img class="inst-css" alt="instagram" src="../assets/mobile/instagram.png" />
      </div>
      <div class="footest-block">
        <span class="footest-txt">OOXX娛樂電商有限公司© 2023 PK. 版權所有。</span>
      </div>
    </div>
    <div class="footer-block-pc">
      <div class="hidden-css">
      </div>
      <div class="footest-block">
        <div class="m-center">
          <span class="center-top">關於PK</span>
          <span class="center-top">隱私權政策</span>
          <span class="center-top">使用規範</span>
        </div>
        <div class="line-css"></div>
        <span class="footest-txt">OOXX娛樂電商有限公司© 2023 PK. 版權所有。</span>
      </div>
      <div class="foot-img">
        <img class="fb-css" alt="facebook" src="../assets/mobile/facebook.png" />
        <img class="inst-css" alt="instagram" src="../assets/mobile/instagram.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterName',
  props: {
    page: {
      type: String,
      default: 'page'
    }
  },
  data() {
    return {
      pageName: ''
    }
  },
  mounted() {
  },
  created() {
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.footer-div {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1;
}
.loginfooter-div {

}
.footer-block-m {
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    background: linear-gradient(180deg, #7161EF 0%, #4632E3 100%);
    padding: 3rem 1rem 2rem 2rem;
    // position: absolute;
    // bottom: 0;
    // width: 100%;

    position: unset;
    bottom: unset;
    width: unset;
  }
}
.loginfooter-block-m {
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #5243CA;
    padding: 2rem 1rem 7rem 2rem;

    position: unset;
    bottom: unset;
    width: unset;
  }
}
.foot-title1, .foot-title2 {
  font-weight: 700;
  font-size: 14px;
  color: #FFF;
  margin-bottom: 10px;
}
.txt1 {
  font-weight: 400;
  font-size: 12px;
  color: #FFF;
  display: block;
  margin-bottom: 10px;
}
.mid-block {
  margin-top: 2rem;
}
.foot-img {
  display: flex;
  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    display: flex;
    align-items: center;
  }
  .fb-css {
    width: 31px;
    height: 31px;
    margin-right: 1.5rem;
  }
  .inst-css {
    width: 28px;
    height: 28px;
  }
}
.footest-block {
  text-align: center;
  margin-top: 5rem;
  @media screen and (max-width: 768px) {
    margin-top: 3rem;
  }
  .footest-txt {
    font-weight: 600;
    font-size: 12px;
    color: #FFF;
  }
}

.loginfootest-block {
  width: 90%;
  margin: 0 auto;
  text-align: center;
  .m-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 90%;
    .center-top {
      font-weight: 400;
      font-size: 14px;
      color: #FFF;
    }

  }
  .line-css {
    width: 100%;
    margin: 0 auto;
    border: 1px solid #7161EF;
    margin: 1rem 0;
  }
  .footest-txt {
    font-weight: 400;
    font-size: 10px;
    color: #FFF;
  }
}
.footer-block-pc {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #5243CA;
  padding: 0 2rem;
  height: 80px;
  // position: absolute;
  // bottom: 0;
  // width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
  .hidden-css {
    visibility: hidden;
    width: 30%;
  }
  .footest-block {
    width: 30%;
    text-align: center;
    margin-top: 0;
    .m-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 37%;
      margin: 0 auto;
      .center-top {
        font-weight: 400;
        font-size: 14px;
        color: #FFF;
      }

    }
    .line-css {
      width: 260px;
      margin: 0 auto;
      border: 1px solid #7161EF;
      margin-top: 2px;
    }
    .footest-txt {
      font-weight: 400;
      font-size: 10px;
      color: #FFF;
    }
  }
  .foot-img {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .fb-css {
      width: 36px;
      height: 36px;
    }
    .inst-css {
      width: 28px;
      height: 28px;
      margin-left: 1rem;
    }
  }
}
</style>