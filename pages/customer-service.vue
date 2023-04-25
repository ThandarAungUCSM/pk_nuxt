<template>
  <div>
    <div>
      <Header page="customer-service" />
      <div class="customer-service">
        <div>
          <img src="../assets/pc/service-img.png" class="service-icon">
        </div>
        <div>
          <div class="service-text">
            <p class="service-p">
              如您有兌換或商品相關的問題，可先參考
              <span class="service-color">常見問題</span>
              ，若仍無法解決您的問題，可於周一至周五9:00~18:00，來電(02)1234-5678，由客服人員為您服務。
            </p>
          </div>
          <div class="contact-block">
            <div class="envelope-block">
              <img src="../assets/pc/envelope.png" class="envelope-icon">
              <p class="envelope-text">來信詢問</p>
            </div>
            <div class="envelope-block1">
              <img src="../assets/pc/phone-call.png" class="phone-icon">
              <p class="envelope-text">來電詢問</p>
            </div>
          </div>
        </div>
        <div class="btn-block">
          <p class="btn-text" @click="$router.push('/')">返回商城</p>
        </div>
      </div>
      <Footer class="mobile-false" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyOrder',
  data() {
    return {
    }
  },
  methods: {
    
  },
};
</script>
<style lang="scss" scoped>
.customer-service {
  padding-top: 140px;
  background: #eae9f4;
  text-align: center;
  height: calc(100vh - 80px);
  min-height: calc(100vh - 80px);
  position: relative;
  @media screen and (max-width: 768px) {
    padding-top: 70px;
    background: #FFF;
    height: 100vh;
    min-height: 100vh;
  }
  .service-icon {
    width: 132px;
    margin-top: 27px;
    margin-bottom: 27px;
  }
  .service-text {
    background: #FFFFFF;
    border-radius: 12px;
    width: 496px;
    padding: 1rem;
    margin: auto;
    text-align: left;
    @media screen and (max-width: 768px) {
      width: 97%;
      border: 1px solid #957FEF;
      border-radius: 12px;
    }
    .service-p {
      font-weight: 400;
      font-size: 14px;
      color: #404040;
      @media screen and (max-width: 768px) {
        margin-bottom: 0;
      }
      .service-color {
        color: #7161EF;
      }
    }
  }
  .contact-block {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 52px;
    @media screen and (max-width: 768px) {
      display: none;
    }
    .envelope-block, .envelope-block1 {
      background: #FFFFFF;
      border-radius: 12px;
      width: 148px;
      height: 96px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .envelope-block {
      margin-right: 39px;
    }
    .envelope-block1 {
      margin-left: 39px;
    }
    .envelope-icon, .phone-icon {
      width: 24px;
    }
    .envelope-text {
      font-weight: 400;
      font-size: 14px;
      color: #404040;
      margin-top: 10px;
      margin-bottom: 0;
    }
  }
  .btn-block {
    position: absolute;
    width: 100%;
    bottom: 45px;
    @media screen and (max-width: 768px) {
      bottom: 97px;
    }
    .btn-text {
      font-weight: 400;
      font-size: 14px;
      color: #7161EF;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        margin-bottom: 0;
      }
    }
  }
}
.mobile-false {
  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>
