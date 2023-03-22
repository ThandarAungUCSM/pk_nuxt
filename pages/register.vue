<template>
<div>
  <div v-if="step == 1" class="register-css">
    <div class="register-child">
      <div class="left-block">
        <p class="big-discount">PK開幕大大大優惠</p>
        <p class="vis-reality">將虛擬化為現實</p>
        <p class="limited-time">年度首檔限時優惠</p>
      </div>
      <div class="right-block">
        <div class="right-inner">
          <p class="welcome-back">註冊</p>

          <input v-model="account" placeholder="請輸入帳號" class="accountCss2" />

          <div class="btn-div">
            <div class="register-btn" @click="registerFun">下一步</div>
          </div>
        </div>
        <div class="login-div1">
          <span class="tologin" @click="loginFun">登入</span>
        </div>
      </div>
      
    </div>
    <div class="mregister-child">
      <div class="upper-block">
        <div class="left-block">
          <p class="big-discount">PK開幕大大大優惠</p>
          <p class="vis-reality">將虛擬化為現實</p>
          <p class="limited-time">年度首檔限時優惠</p>
        </div>
      </div>
      <div class="right-block">
        <div class="stage-div">
          <p class="stage-css">1/4</p>
        </div>
        <p class="welcome-back">註冊</p>

        <input v-model="password" placeholder="請輸入帳號" class="accountCss2" />

        <div class="btn-div">
          <div class="register-btn" @click="registerFun">下一步</div>
        </div>
      </div>
      <div class="login-div">
        <span class="tologin" @click="loginFun">登入</span>
      </div>
    </div>
  </div>
  <div v-else-if="step == 2" class="register-css">
    <div class="register-child">
      <div class="left-block">
        <p class="big-discount">PK開幕大大大優惠</p>
        <p class="vis-reality">將虛擬化為現實</p>
        <p class="limited-time">年度首檔限時優惠</p>
      </div>
      <div class="right-block">
        <div class="right-inner">
          <div class="row-regi">
            <img class="back-css" src="../assets/mobile/back-btn.png" @click="backFun(2)" />
            <p class="welcome-back">註冊</p>
            <p class="hideright">hi</p>
          </div>

          <input v-model="password" placeholder="請輸入新密碼" class="accountCss3" />
          <p class="pwd-valid">密碼長度為6~16碼，需包含英文字母及數字。</p>

          <input v-model="confirmpwd" placeholder="請再輸入相同密碼" class="accountCss2" />

          <div class="btn-div">
            <div class="register-btn" @click="registerFun">下一步</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mregister-child">
      <div class="upper-block">
        <div class="left-block">
          <p class="big-discount">PK開幕大大大優惠</p>
          <p class="vis-reality">將虛擬化為現實</p>
          <p class="limited-time">年度首檔限時優惠</p>
        </div>
      </div>
      <div class="right-block">
        <div class="stage-div">
          <p class="stage-css">2/4</p>
        </div>
        <div class="row-regi">
          <img class="back-css" src="../assets/mobile/back-btn.png" @click="backFun(2)" />
          <p class="welcome-back">註冊</p>
          <p class="hideright">hi</p>
        </div>

        <input v-model="password" placeholder="請輸入新密碼" class="accountCss3" />
        <p class="pwd-valid">密碼長度為6~16碼，需包含英文字母及數字。</p>

        <input v-model="confirmpwd" placeholder="請再輸入相同密碼" class="accountCss2" />

        <div class="btn-div">
          <div class="register-btn" @click="registerFun">下一步</div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="step == 3" class="register-css">
    <div class="register-child">
      <div class="left-block">
        <p class="big-discount">PK開幕大大大優惠</p>
        <p class="vis-reality">將虛擬化為現實</p>
        <p class="limited-time">年度首檔限時優惠</p>
      </div>
      <div class="right-block">
        <div class="right-inner">
          <div class="row-regi">
            <img class="back-css" src="../assets/mobile/back-btn.png" @click="backFun(3)" />
            <p class="welcome-back">註冊</p>
            <p class="hideright">hi</p>
          </div>

          <input v-model="phoneNo" placeholder="請輸入手機號碼" class="accountCss3" />

          <input v-model="dateofBirth" placeholder="1990/04/18" class="accountCss4" />
          <p class="pwd-valid">請輸入正確生日，以免影響使用權益。</p>

          <div>
            <div class="gender-group">
              <p class="gender-css">男</p>
              <p class="gender-css">女</p>
              <p class="gender-css">其他</p>
            </div>
          </div>

          <div class="btn-div">
            <div class="register-btn" @click="registerFun">下一步</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mregister-child">
      <div class="upper-block">
        <div class="left-block">
          <p class="big-discount">PK開幕大大大優惠</p>
          <p class="vis-reality">將虛擬化為現實</p>
          <p class="limited-time">年度首檔限時優惠</p>
        </div>
      </div>
      <div class="right-block">
        <div class="stage-div">
          <p class="stage-css">3/4</p>
        </div>
        <div class="row-regi">
          <img class="back-css" src="../assets/mobile/back-btn.png" @click="backFun(3)" />
          <p class="welcome-back">註冊</p>
          <p class="hideright">hi</p>
        </div>

        <input v-model="phoneNo" placeholder="請輸入手機號碼" class="accountCss3" />

        <input v-model="dateofBirth" placeholder="1990/04/18" class="accountCss4" />
        <p class="pwd-valid">請輸入正確生日，以免影響使用權益。</p>

        <div>
          <div class="gender-group">
            <p class="gender-css">男</p>
            <p class="gender-css">女</p>
            <p class="gender-css">其他</p>
          </div>
        </div>

        <div class="btn-div">
          <div class="register-btn" @click="registerFun">下一步</div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="step == 4" class="register-css">
    <div class="register-child">
      <div class="left-block">
        <p class="big-discount">PK開幕大大大優惠</p>
        <p class="vis-reality">將虛擬化為現實</p>
        <p class="limited-time">年度首檔限時優惠</p>
      </div>
      <div class="right-block">
        <div class="right-inner">
          <div class="row-regi">
            <img class="back-css" src="../assets/mobile/back-btn.png" @click="backFun(3)" />
            <p class="welcome-back">註冊</p>
            <p class="hideright">hi</p>
          </div>
          
          <p class="lable1">電子信箱</p>
          <input v-model="phoneNo" placeholder="example@mail.com" class="accountCss5" />

          <p class="lable1">地址</p>
          <div class="address">
            <select v-model="cityName" class="member-address-city">
              <option value="">新北市</option>
              <option v-for="(city, index) in cityTown" :key="index" :value="city.name">
                {{ city && city.name }}
              </option>
            </select>
            <select v-model="distinctName" class="member-address-city">
              <option value="">三重區</option>
              <option v-for="(city, index) in cityTown" :key="index" :value="city.name">
                {{ city && city.name }}
              </option>
            </select>
          </div>
          
          <input v-model="dateofBirth" placeholder="光復南路三段156巷24號" class="accountCss6" />

          <div class="btn-div">
            <div class="register-btn" @click="registerFun">下一步</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mregister-child">
      <div class="upper-block">
        <div class="left-block">
          <p class="big-discount">PK開幕大大大優惠</p>
          <p class="vis-reality">將虛擬化為現實</p>
          <p class="limited-time">年度首檔限時優惠</p>
        </div>
      </div>
      <div class="right-block">
        <div class="stage-div">
          <p class="stage-css">4/4</p>
        </div>
        <div class="row-regi">
          <img class="back-css" src="../assets/mobile/back-btn.png" @click="backFun(3)" />
          <p class="welcome-back">註冊</p>
          <p class="hideright">hi</p>
        </div>
        
        <p class="lable1">電子信箱</p>
        <input v-model="phoneNo" placeholder="example@mail.com" class="accountCss5" />

        <p class="lable1">地址</p>
        <div class="address">
          <select v-model="cityName" class="member-address-city">
            <option value="">新北市</option>
            <option v-for="(city, index) in cityTown" :key="index" :value="city.name">
              {{ city && city.name }}
            </option>
          </select>
          <select v-model="distinctName" class="member-address-city">
            <option value="">三重區</option>
            <option v-for="(city, index) in cityTown" :key="index" :value="city.name">
              {{ city && city.name }}
            </option>
          </select>
        </div>
        
        <input v-model="dateofBirth" placeholder="光復南路三段156巷24號" class="accountCss6" />

        <div class="btn-div">
          <div class="register-btn" @click="registerFun">下一步</div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="step == 5" class="register-css"> 
    <!-- sign up page 04 -->
    <div class="register-child">
      <div class="left-block">
        <p class="big-discount">PK開幕大大大優惠</p>
        <p class="vis-reality">將虛擬化為現實</p>
        <p class="limited-time">年度首檔限時優惠</p>
      </div>
      <div class="right-block">
        <p class="welcome-back">註冊</p>

        <input v-model="account" placeholder="請輸入帳號" class="accountCss2" />

        <div class="btn-div">
          <div class="register-btn" @click="registerFun">下一步</div>
        </div>
      </div>
      <div class="login-div">
        <span class="tologin" @click="loginFun">登入</span>
      </div>
    </div>
    <div class="mregister-child">
      <div class="upper-block">
        <div class="left-block">
          <p class="big-discount">PK開幕大大大優惠</p>
          <p class="vis-reality">將虛擬化為現實</p>
          <p class="limited-time">年度首檔限時優惠</p>
        </div>
      </div>
      <div class="right-block">
        <p class="welcome-back">驗證電話號碼</p>

        <input v-model="verifycode" placeholder="請輸入驗證碼" class="accountCss4" />
        <p class="pwd-valid">您若有拒收企業簡訊，將有可能導致無法收到驗證碼。</p>

        <div class="btn-div">
          <div class="register-btn1" @click="registerFun">登入</div>
          <div class="resend-css">重新發送(10)</div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="step == 6" class="register-css">
    <!-- mobile login page 03  -->
    <div class="register-child">
      <div class="right-block">
        <p class="welcome-back">註冊</p>

        <input v-model="account" placeholder="請輸入帳號" class="accountCss2" />

        <div class="btn-div">
          <div class="register-btn" @click="registerFun">下一步</div>
        </div>
      </div>
      <div class="login-div">
        <span class="tologin" @click="registerFun">登入</span>
      </div>
    </div>
    <div class="mregister-child">
      <!-- <div class="upper-block">
        <div class="left-block">
          <p class="big-discount">PK開幕大大大優惠</p>
          <p class="vis-reality">將虛擬化為現實</p>
          <p class="limited-time">年度首檔限時優惠</p>
        </div>
      </div> -->
      <div class="lower-block">
        <div class="right-block">
          <div class="row-regi">
            <img class="back-css" src="../assets/mobile/back-btn.png" @click="backFun(2)" />
            <p class="welcome-back">會員服務條款</p>
            <p class="hideright">hi</p>
          </div>

          <p class="termofservice">
            會員條款
            歡迎您加入我們的電商平台會員！為了保障您的權益與維護平台的秩序，請您務必詳細閱讀以下條款：
            一、平台會員的註冊
            1.申請加入平台會員時，請確保您所提供的個人資訊均真實有效，且需保證不會因為任何原因而對第三方造成損害。
            2.您需要保證註冊時填寫的資訊與您本人真實身份一致。若您提供虛假資訊，平台有權隨時終止您的會員資格。
            3.平台有權根據實際需要暫停或終止向會員提供部分或全部服務，且不承擔任何賠償責任。
            4.會員需保管好自己的帳號和密碼，不得將帳號和密碼洩露給第三方使用。如因疏忽或其他原因造成帳號或密碼遭到盜用，會員需立即通知平台，以保障自己的權益。
            二、交易流程
            1.平台只是交易的中介平台，不對買賣雙方的行為承擔任何擔保、擔保、代理、擔保或其他類似的責任。
            2.會員需對在平台上的交易行為負責。在平台上進行交易時，會員應確保交易物品的真實性和合法性，且不得有欺詐行為。
            3.在交易過程中，會員需嚴格遵守平台的相關規定，如有違反，平台有權終止會員資格。
            4.買賣雙方達成交易後，平台將按照約定的方式處理款項，並提供相關的物流跟踪信息。
            5.如果買賣雙方違反交易協議或有其他違法行為，平台有權介入調解，但不對交易結果承擔任何責任。
            三、智慧財產權保護
            1.平台尊重並保護知識產權，會員在平台上傳輸的內容不得侵犯他人
          </p>
          <div class="btn-div">
            <div class="register-btn2" @click="registerFun">我已閱讀並同意</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer :page="pName" />
</div>
</template>
<script>
export default {
  name: 'MyRegister',
  data() {
    return{
      account: '',
      pName: 'login',
      step: 1,
      password: '',
      confirmpwd: '',
      phoneNo: '',
      dateofBirth: '',
      cityTown: [{name: 'aaaaa'}, {name: 'bbbbb'}, {name: 'ccccc'}, {name: 'ddddd'}, {name: 'eeeee'}],
      cityName: '',
      distinctName: '',
      verifycode: ''
    }
  },
  methods: {
    registerFun() {
      if(this.step === 1 || this.step === 2 || this.step === 3 || this.step === 4 || this.step === 5) {
        this.step++;
      }
      // this.$router.push('/register')
    }, 
    loginFun() {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.register-css {
  min-height: calc(100vh - 80px);
  max-height: calc(100vh - 80px);
  background: linear-gradient(180deg, #6759FF 0%, #957FEF 100%);
  display: flex;
  @media screen and (max-width: 768px) {
    min-height: unset;
    max-height: unset;
    background: #957fef;
  }
  .register-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 55%;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .mregister-child {
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
    width: 53%;
    margin: 4rem 0;
    text-align: center;
    padding-top: 2rem;
    height: 70vh;
    @media screen and (max-width: 768px) {
      width: 67%;
      margin: 0px auto;
      height: unset;
    }
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
  .lower-block {
    padding: 44px 0 0;
  }
  .right-block {
    width: 30%;
    // margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-right: 100px;
    @media screen and (max-width: 768px) {
      width: 90%;
      margin: -5px auto 0;

      border: 2px solid #FFFFFF;
      background: #F2F1F7;
      box-shadow: 0px 4px 4px rgba(33, 66, 116, 0.25);
      border-radius: 12px;
      padding: 10px 10px 1.5rem 1rem;
      display: flex;
      flex-direction: column;
    }
    .right-inner {
      border: 2px solid #FFFFFF;
      background: #F2F1F7;
      box-shadow: 0px 4px 4px rgba(33, 66, 116, 0.25);
      border-radius: 12px;
      padding: 1rem 1rem 1.5rem;
      display: flex;
      flex-direction: column;
    }
    .stage-div {
      position: relative;
      .stage-css {
        background: #B79CED;
        border-radius: 42px; 
        font-weight: 400;
        font-size: 14px;
        color: #FFF;
        width: 50px;
        text-align: center;
        margin-bottom: 0;
        position: absolute;
        right: 0;
      }
    }
    .row-regi {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .back-css {
        width: 18px;
        height: 18px;
      }
      .hideright {
        visibility: hidden;
      }
    }
    .lable1 {
      font-weight: 400;
      font-size: 1rem;
      color: #7161EF;
      width: 90%;
      margin: 0 auto 5px;
    }
    .address {
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: 0 auto;
    }
    .member-address-city {
      width: 48%;
      font-weight: 500;
      font-size: 20px;
      color: #FFF;
      background: #7161EF;
      border-radius: 6px;
      border: none;
      padding-left: 10px;
      height: 60px;
      min-height: 60px;
    }
    .welcome-back {
      font-weight: 700;
      font-size: 20px;
      color: #957FEF;
      text-align: center;
      margin-bottom: 0;
      @media screen and (max-width: 768px) {
        margin-top: 8px;
        margin-bottom: 8px;
      }
    }
    .pwd-valid {
      font-weight: 400;
      font-size: 1rem;
      color: #957FEF;
      width: 90%;
      margin: 0 auto;
    }
    .gender-group {
      display: flex;
      justify-content: space-around;
      width: 90%;
      margin: 1.5rem auto 3rem;
    }
    .gender-css {
      font-weight: 400;
      font-size: 20px;
      color: #7161EF;
      margin-bottom: 0;
      border: 2px solid #7161EF;
      border-radius: 12px;
      height: 42px;
      width: 30%;
      text-align: center;
    }
    .accountCss2, .accountCss3, .accountCss4, .accountCss5, .accountCss6 {
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
      margin: 4rem auto 4rem;
    }
    .accountCss2:focus, .accountCss3:focus, .accountCss4:focus, .accountCss5:focus, .accountCss6:focus {
      outline: none;
    }
    .accountCss2::placeholder, .accountCss3::placeholder, .accountCss4::placeholder, .accountCss5::placeholder, .accountCss6::placeholder {
      font-weight: 500;
      font-size: 20px;
      color: #FFF;
    }
    .accountCss3 {
      margin: 1rem auto 3px;
    }
    .accountCss4 {
      margin: 2rem auto 3px;
    }
    .accountCss5 {
      margin: 0rem auto 3px;
    }
    .accountCss6 {
      margin: 1rem auto 4rem;
    }
    .termofservice {
      font-weight: 300;
      font-size: 14px;

      color: #6A5CFD;
      background: #DFDCFF;
      border-radius: 6px;
      padding: 10px;
      margin-bottom: 1.5rem;
    }
    .btn-div {
      width: 90%;
      margin: 0 auto;
      text-align: center;
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
        width: 100%;
        margin: 0 auto;
      }
      .register-btn2 {
        background: #E4D4AB;
        border-radius: 24px;
        height: 56px;
        font-weight: 700;
        font-size: 20px;
        color: #FFF;

        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        width: 100%;
        margin: 0 auto;
      }
      .register-btn1 {
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
        width: 100%;
        margin: 4rem auto 1.5rem;
      }
      .resend-css {
        font-weight: 400;
        font-size: 1rem;
        color: #957FEF;
        border: 2px solid #957FEF;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
      }
    }
  }
  .newer-css {
    font-weight: 400;
    font-size: 1rem;
    color: #CFC7F3;
    padding: 2rem 0 1rem;
  }
  // .pclogi-div {
  //   margin: 2rem 0 3rem;
  //   text-align: center;
  //   @media screen and (max-width: 768px) {
  //     display: none;
  //   }
  // }
  .login-div1 {
    // display: none; 
    margin: 2rem 0 0;
    text-align: center;
    @media screen and (max-width: 768px) {
      margin: 2rem 0 3rem;
    }
  }
  .login-div {
    // display: none; 
    margin: 2rem 0 3rem;
    text-align: center;
    // @media screen and (max-width: 768px) {
    //   display: block;
    //   margin: 2rem 0 3rem;
    //   text-align: center;
    // }
  }
  .tologin {
    font-weight: 400;
    font-size: 1rem;
    color: #FFF;
  }
}
</style>