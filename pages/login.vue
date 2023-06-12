<template>
<div>
  <div class="login-css">
    <div class="login-child">
      <!-- <div class="left-block">
        <p class="big-discount">PK開幕大大大優惠</p>
        <p class="vis-reality">將虛擬化為現實</p>
        <p class="limited-time">年度首檔限時優惠</p>
      </div> -->
      <div class="left1-block">
        <img class="advertise-css" src="../assets/pc/advertise.png" />
      </div>
      <div class="right-block">
        <div class="right-inner">
          <p class="welcome-back">歡迎回來</p>

          <input v-model="accNo" placeholder="帳號" class="accountCss1" />
          <input v-model="password" placeholder="密碼" class="accountCss2" />
          <p class="forget-pwd">忘記密碼?</p>

          <div class="btn-div">
            <p class="newer-css">新玩家？<span class="register-css" @click="register">註冊</span></p>
            <div class="ss register-btn" @click="loginProcess">登入</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mlogin-child">
      <div class="upper-block">
        <div class="left-block">
          <p class="big-discount">PK開幕大大大優惠</p>
          <p class="vis-reality">將虛擬化為現實</p>
          <p class="limited-time">年度首檔限時優惠</p>
        </div>
      </div>
      <div class="right-block">
        <div class="row-regi">
          <img class="back-css" src="../assets/mobile/back-btn.png" @click="backFun(2)" />
          <p class="welcome-back">歡迎回來</p>
          <p class="hideright">hi</p>
        </div>

        <input v-model="accNo" placeholder="帳號" class="accountCss1" />
        <input v-model="password" placeholder="密碼" class="accountCss2" />
        <p class="forget-pwd">忘記密碼?</p>

        <div class="btn-div">
          <p class="newer-css">新玩家？<span class="register-css" @click="register">註冊</span></p>
          <div class="register-btn" @click="loginProcess">登入</div>
        </div>
      </div>
    </div>
  </div>
  <Footer :page="pName" />
</div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'MyLogin',
  data() {
    return{
      accNo: '',
      password: '',
      pName: 'login'
    }
  },
  computed: {
    ...mapGetters('user', {
      userdata: 'userNamePassword'
    })
  },
  methods: {
    ...mapActions("user", ["updateLogin"]),
    register() {
      this.$router.push('/register')
    },
    loginProcess() {
      if(this.accNo === this.userdata.name && this.password === this.userdata.password) {
        alert('Success !!')
        this.updateLogin(true);
        this.$router.push('/')
      }
    },
    backFun(val) {
    },
  }
}
</script>

<style lang="scss" scoped>
.login-css {
  min-height: calc(100vh - 80px);
  max-height: calc(100vh - 80px);
  background: linear-gradient(180deg, #6759FF 0%, #957FEF 100%);
  display: flex;
  @media screen and (max-width: 768px) {
    min-height: unset;
    max-height: unset;
    background: #957fef;
  }
  .login-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 85%;
    max-width: 1130px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .mlogin-child {
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-bottom: 5%;
    }
  }
  .upper-block {
    background: linear-gradient(180deg, #6759FF 0%, #957FEF 100%);
    padding: 44px 0 0px;
  }
  .left-block {
    border: 2px solid #FFFFFF;
    border-radius: 6px; 
    width: 65%;
    margin: 4rem 0;
    text-align: center;
    padding-top: 2rem;
    height: 70vh;
    @media screen and (max-width: 768px) {
      width: 67%;
      margin: 0px auto;
      height: 154px;
      padding: 1rem 0;
    }
    .big-discount, .limited-time {
      font-weight: 700;
      font-size: 20px;
      color: #FFF;
      @media screen and (max-width: 768px) {
        margin-bottom: 5px;
      }
    }
    .vis-reality {
      font-weight: 700;
      font-size: 32px;
      color: #F3DD65;
      @media screen and (max-width: 768px) {
        margin-bottom: 5px;
      }
    }
    .limited-time {

    }
  }
  .left1-block {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 53%;
    // min-width: 630px;
    max-width: 630px;
    height: 70vh;
    max-height: 669px;
    @media screen and (max-width: 768px) {
      display: unset;
      width: 67%;
      margin: 0px auto;
      // min-width: unset;
      max-width: unset;
      height: unset;
      max-height: unset;
    }
    .advertise-css {
      width: 100%;
      height: 100%;
    }
  }
  .right-block {
    width: 40%;
    // margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 75px;
    padding-bottom: 0;
    max-width: 360px;
    height: 451px;
    @media screen and (max-width: 768px) {
      width: 90%;
      margin: -5px auto 0;

      max-width: initial;
      justify-content: initial;
      padding-bottom: 0;
      border: 2px solid #FFFFFF;
      background: #F2F1F7;
      box-shadow: 0px 4px 4px rgba(33, 66, 116, 0.25);
      border-radius: 12px;
      padding: 1rem 10px 27px 1rem;
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .row-regi {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 1rem;
      }
      .back-css {
        width: 18px;
        height: 18px;
        cursor: pointer;
      }
      .hideright {
        visibility: hidden;
      }
    }
    .right-inner {
      border: 2px solid #FFFFFF;
      background: #F2F1F7;
      box-shadow: 0px 4px 4px rgba(33, 66, 116, 0.25);
      border-radius: 12px;
      padding: 1rem 1rem 33px;
      display: flex;
      flex-direction: column;
      height: 451px;
      position: relative;
    }
    .welcome-back {
      font-weight: 700;
      font-size: 20px;
      color: #957FEF;
      text-align: center;
      @media screen and (max-width: 768px) {
        margin-bottom: 0;
      }
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
      position: absolute;
      bottom: 33px;
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
        cursor: pointer;
      }
      .register-btn {
        background: #E9B531;
        border-radius: 24px;
        height: 56px;
        font-weight: 700;
        font-size: 20px;
        color: #FFF;
        cursor: pointer;

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