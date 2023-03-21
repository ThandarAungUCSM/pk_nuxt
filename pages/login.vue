<template>
<div>
  <div class="login-css">
    <div class="login-child">
      <div class="left-block">
        <p class="big-discount">PK開幕大大大優惠</p>
        <p class="vis-reality">將虛擬化為現實</p>
        <p class="limited-time">年度首檔限時優惠</p>
      </div>
      <div class="right-block">
        <p class="welcome-back">歡迎回來</p>

        <input v-model="accNo" placeholder="帳號" class="accountCss1" />
        <input v-model="password" placeholder="密碼" class="accountCss2" />
        <p class="forget-pwd">忘記密碼?</p>

        <div class="btn-div">
          <p class="newer-css">新玩家？<span class="register-css">註冊</span></p>
          <div class="register-btn">登入</div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>
</template>
<script>
export default {
  name: 'MyLogin',
  data() {
    return{
      accNo: '',
      password: '',
    }
  }
}
</script>

<style lang="scss" scoped>
.login-css {
  min-height: calc(100vh - 80px);
  max-height: calc(100vh - 80px);
  background: linear-gradient(180deg, #6759FF 0%, #957FEF 100%);
  
  .login-child {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 80%;
    margin: 0 auto;
  }
  .left-block {
    border: 2px solid #FFFFFF;
    border-radius: 6px; 
    width: 55%;
    margin: 4rem 0;
    text-align: center;
    padding-top: 2rem;
    height: 70vh;
    .big-discount, .limited-time {
      font-weight: 700;
      font-size: 20px;
      color: #FFF;
    }
    .vis-reality {
      font-weight: 700;
      font-size: 32px;
      color: #F3DD65;
    }
    .limited-time {

    }
  }
  .right-block {
    border: 2px solid #FFFFFF;
    border-radius: 6px; 
    width: 20%;

    background: #F2F1F7;
    box-shadow: 0px 4px 4px rgba(33, 66, 116, 0.25);
    border-radius: 12px;
    padding: 1rem 1rem 1.5rem;

    // margin: 0 auto;
    display: flex;
    flex-direction: column;

    .welcome-back {
      font-weight: 700;
      font-size: 20px;
      color: #957FEF;
      text-align: center;
    }
    .accountCss1, .accountCss2 {
      font-weight: 500;
      font-size: 20px;
      color: #FFF;

      background: #7161EF;
      border-radius: 6px;

      border: none;
      width: 90%;

      padding-left: 10px;
      height: 60px;
      min-height: 60px;
      margin: 0 auto;
    }
    .accountCss1:focus, .accountCss2:focus {
      outline: none;
    }
    .accountCss1::placeholder, .accountCss2::placeholder {
      font-weight: 500;
      font-size: 20px;
      color: #FFF;
    }
    .accountCss2 {
      margin-top: 2rem;
    }
    .forget-pwd {
      font-weight: 400;
      font-size: 1rem;
      color: #957FEF;
      width: 90%;
      margin: 1.2rem auto 0;
    }
    .btn-div {
      width: 90%;
      margin: 0 auto;
      text-align: center;
      .newer-css {
        font-weight: 400;
        font-size: 1rem;
        color: #CFC7F3;
        padding: 2rem 0 1rem;
      }
      .register-css {
        font-weight: 400;
        font-size: 1rem;
        color: #957FEF;
      }
      .register-btn {
        background: #E9B531;
        border-radius: 24px;
        height: 56px;
        font-weight: 700;
        font-size: 20px;
        color: #FFF;

        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        margin: 0 auto;
      }
    }
  }
}
</style>