<template>
<div>
  <div v-if="!loginSuccess" class="login-css p1" >
    <div class="login-child">
      <div class="left-block">
        <img src="../assets/mobile/connectedGame.png" class="connectgame-icon">
      </div>
      <div class="right-block">
        <input v-model="accNo" placeholder="帳號" class="accountCss1" />
        <input v-model="password" placeholder="密碼" class="accountCss2" />
        <div class="btn-div">
          <p class="newer-css">新玩家？<span class="register-css" @click="register">註冊</span></p>
          <div class="ss register-btn" @click="loginProcess">登入並連動</div>
        </div>
      </div>
    </div>
    <div class="mlogin-child">
      <div class="upper-block">
        <div class="left-block">
          <img src="../assets/mobile/connectedGame.png" class="connectgame-icon">
        </div>
      </div>
      <div class="right-block">
        <input v-model="accNo" placeholder="帳號" class="accountCss1" />
        <input v-model="password" placeholder="密碼" class="accountCss2" />
        <div class="btn-div">
          <p class="newer-css">新玩家？<span class="register-css" @click="register">註冊</span></p>
          <div class="register-btn" @click="loginProcess">登入並連動</div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="login1-css p2">
    <div class="mlogin1-child">
      <div class="upper1-block">
        <div class="left1-block">
          <img src="../assets/mobile/success-check.png" class="success-icon">
          <p class="success-txt">連接成功</p>
        </div>
      </div>
      <div class="lower-success">
        <div class="rightsuccess-block">
          <img src="../assets/mobile/connectedGame.png" class="successgame-icon">
          <span class="success-text">PUBG 絕地求生</span>
        </div>
        <p class="return-btn" @click="$router.push('connectedGame')">返回</p>
      </div>
    </div>
  </div>
  <!-- <Footer /> -->
</div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: 'MyLogin',
  data() {
    return{
      accNo: '',
      password: '',
      pName: 'login',
      loginSuccess: false
    }
  },
  methods: {
    ...mapActions("user", ["updateLogin"]),
    register() {
      this.$router.push('/register')
    },
    loginProcess() {
      if(this.accNo === 'firefly' && this.password === '123456') {
        alert('Success !!')
        this.updateLogin(true);
        this.loginSuccess = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-css, .login1-css {
  min-height: calc(100vh - 80px);
  max-height: calc(100vh - 80px);

  min-height: 100vh;
  max-height: 100vh;
  background: linear-gradient(180deg, #957FEF 0%, #6759FF 100%);
  @media screen and (max-width: 768px) {
    min-height: unset;
    max-height: unset;
  }
}
.login-css {
  @media screen and (max-width: 768px) {
    background: linear-gradient(180deg, #957FEF  50%, #6759FF 100%);
  }
}
.login1-css {
  @media screen and (max-width: 768px) {
    background: linear-gradient(180deg, #957FEF  15%, #6759FF 100%);
  }
}
.login-child {
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    display: none;
  }
}
.mlogin-child, .mlogin1-child {
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: relative;
  }
}
.mlogin-child {
  @media screen and (max-width: 768px) {
    padding-bottom: 82px;
    padding-bottom: 95px;
  }
}
.mlogin1-child {
  display: block;
  position: relative;
  @media screen and (max-width: 768px) {
  }
}
.upper-block, .upper1-block {
  padding: 0px;
  @media screen and (max-width: 768px) {
    height: 50vh;
  }
}
.upper-block {
  background: linear-gradient(180deg, #6759FF 0%, #957FEF 100%);
  @media screen and (max-width: 768px) {
  }
}
.upper1-block {
  position: relative;
  height: 50vh;
  @media screen and (max-width: 768px) {
  }
}
.left-block {
  width: 65%;
  // border: 2px solid #FFFFFF;
  border-radius: 6px; 
  margin: 4rem 0;
  text-align: center;
  padding-top: 2rem;
  height: 70vh;
  @media screen and (max-width: 768px) {
    margin: 0px auto;
    height: unset;
    width: 100%;
    // border: 0 solid #FFF;
    padding-top: 0;
  }
}
.left1-block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -25%);
}
.connectgame-icon {
  max-height: 100vh;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
}

.success-icon {
  width: 83px;
  margin-bottom: 3rem;
}
.success-txt {
  font-weight: 700;
  font-size: 20px;
  color: #FFF;
  margin-bottom: 0;
}
.right-block {
  border: 2px solid #FFFFFF;
  border-radius: 6px; 
  width: 20%;

  background: #F2F1F7;
  box-shadow: 0px 4px 4px rgba(33, 66, 116, 0.25);
  border-radius: 24px;
  padding: 1rem 1rem 1.5rem;

  // margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: -123px auto 0;
    z-index: 100;
    position: inherit;
    padding-top: 66px;
    padding-bottom: 34px;
    background: #FFF;
  }
}
.lower-success {
  height: 50vh;
  position: relative;
  .rightsuccess-block {
    margin-top: 0;
    background: #FFF;
    .successgame-icon {
      width: 92px;
      height: 92px;
    }
    .success-text {
      font-weight: 400;
      font-size: 1rem;
      color: #2C2C2C;
    }
  }
  .return-btn {
    font-weight: 700;
    font-size: 20px;
    color: #FFF;
    text-align: center;
    bottom: 0px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
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

  padding-left: 12px;
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
  margin-top: 30px;
}
.btn-div {
  width: 90%;
  margin: 0 auto;
  text-align: center;
  .newer-css {
    font-weight: 400;
    font-size: 1rem;
    color: #957FEF;
    padding: 2rem 0 1rem;
  }
  .register-css {
    font-weight: 400;
    font-size: 1rem;
    color: #7161EF;
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
</style>