<template>
  <div class="footer-block">
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
</template>

<script>
export default {
  name: 'FooterName',
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
  .footer-block {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: linear-gradient(180deg, #7161EF 0%, #4632E3 100%);
    padding: 5rem 1rem 2rem 2rem;
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
      margin-top: 2rem;
      display: flex;
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
      .footest-txt {
        font-weight: 600;
        font-size: 12px;
        color: #FFF;
      }
    }
  }
</style>