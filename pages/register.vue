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

          <input v-model="myaccount" placeholder="請輸入帳號" onfocus="this.placeholder=''" class="accountCss2" />

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

        <input v-model="myaccount" placeholder="請輸入帳號" onfocus="this.placeholder=''" class="accountCss2" />

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

          <input v-model="mypassword" placeholder="請輸入新密碼" onfocus="this.placeholder=''" class="accountCss3" />
          <p class="pwd-valid">密碼長度為6~16碼，需包含英文字母及數字。</p>

          <input v-model="myconfirmpwd" placeholder="請再輸入相同密碼" onfocus="this.placeholder=''" class="accountCss2" />

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

        <input v-model="mypassword" placeholder="請輸入新密碼" onfocus="this.placeholder=''" class="accountCss3" />
        <p class="pwd-valid">密碼長度為6~16碼，需包含英文字母及數字。</p>

        <input v-model="myconfirmpwd" placeholder="請再輸入相同密碼" onfocus="this.placeholder=''" class="accountCss2" />

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

          <input
            v-model="phoneNo" type="tel" name="mobile" pattern="[0-9]{4} [0-9]{3} [0-9]{3}" maxlength="12" placeholder="請輸入手機號碼" onfocus="this.placeholder=''" class="accountCss3" required
            oninput="this.value = this.value.replace(/[^0-9.]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1');"
          />

          <input v-model="dateofBirth" placeholder="請輸入生日" onfocus="this.placeholder=''" class="accountCss4" />
          <p class="pwd-valid">請輸入正確生日，以免影響使用權益。格式：2000-01-01</p>

          <div>
            <div class="gender-group">
              <p :class="genderData === 'Male' ? 'active-gen' : 'gender-css'" @click="selectGender('Male')">男</p>
              <p :class="genderData === 'Female' ? 'active-gen' : 'gender-css'" @click="selectGender('Female')">女</p>
              <p :class="genderData === 'other' ? 'active-gen' : 'gender-css'" @click="selectGender('other')">其他</p>
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

        <input v-model="phoneNo" type="number" name="mobile" pattern="[0-9]{4} [0-9]{3} [0-9]{3}" maxlength="12" placeholder="請輸入手機號碼" class="accountCss3" required />
        <!-- if (!(/^1[34578]\d{9}$/.test(this.list.mobile))) { -->

        <input v-model="dateofBirth" placeholder="請輸入生日" onfocus="this.placeholder=''" class="accountCss4" />
        <p class="pwd-valid">請輸入正確生日，以免影響使用權益。格式：2000-01-01</p>

        <div>
          <div class="gender-group">
            <p :class="genderData === 'Male' ? 'active-gen' : 'gender-css'" @click="selectGender('Male')">男</p>
            <p :class="genderData === 'Female' ? 'active-gen' : 'gender-css'" @click="selectGender('Female')">女</p>
            <p :class="genderData === 'other' ? 'active-gen' : 'gender-css'" @click="selectGender('other')">其他</p>
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
            <img class="back-css" src="../assets/mobile/back-btn.png" @click="backFun(4)" />
            <p class="welcome-back">註冊</p>
            <p class="hideright">hi</p>
          </div>
          
          <p class="lable1">電子信箱</p>
          <input v-model="myemail" placeholder="example@mail.com" onfocus="this.placeholder=''" class="accountCss5" />

          <p class="lable1">地址</p>
          <div class="address">
            <select id="select1Id" v-model="cityName" class="member-address-city">
              <option value="">選擇縣市</option>
              <option v-for="(city, index) in counties" :key="index" :value="city">
                {{ city }}
              </option>
            </select>
            <select v-if="seleDist.length > 0" v-model="distinctName" class="member-address-city">
              <option value="">選擇區域</option>
              <option v-for="(city, index) in seleDist[0]" :key="index" :value="city">
                {{ city }}
              </option>
            </select>
            <select v-else v-model="distinctName" class="member-address-city">
              <option value="">選擇區域</option>
              <option v-for="(city, index) in seleDist" :key="index" :value="city">
                {{ city }}
              </option>
            </select>
          </div>
          
          <input v-model="myaddress" placeholder="請輸入地址" onfocus="this.placeholder=''" class="accountCss6" />

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
          <img class="back-css" src="../assets/mobile/back-btn.png" @click="backFun(4)" />
          <p class="welcome-back">註冊</p>
          <p class="hideright">hi</p>
        </div>
        
        <p class="lable1">電子信箱</p>
        <input v-model="myemail" placeholder="example@mail.com" onfocus="this.placeholder=''" class="accountCss5" />

        <p class="lable1">地址</p>
        <div class="address">
          <select id="select2Id" v-model="cityName" class="member-address-city">
            <option value="">選擇縣市</option>
            <option v-for="(city, index) in counties" :key="index" :value="city">
              {{ city }}
            </option>
          </select>
          <select v-if="seleDist.length > 0" v-model="distinctName" class="member-address-city">
            <option value="">選擇區域</option>
            <option v-for="(city, index) in seleDist[0]" :key="index" :value="city">
              {{ city }}
            </option>
          </select>
          <select v-else v-model="distinctName" class="member-address-city">
            <option value="">選擇區域</option>
            <option v-for="(city, index) in seleDist" :key="index" :value="city">
              {{ city }}
            </option>
          </select>
        </div>
        
        <input v-model="myaddress" placeholder="請輸入地址" onfocus="this.placeholder=''" class="accountCss6" />

        <div class="btn-div">
          <div class="register-btn" @click="registerFun">下一步</div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="step == 5" class="register-css"> 
    <div class="register-child">
      <div class="right-block1">
        <div class="right-inner">
          <div class="row-regi">
            <img class="back-css" src="../assets/mobile/back-btn.png" @click="backFun(5)" />
            <p class="welcome-back">會員服務條款</p>
            <p class="hideright">hi</p>
          </div>

          <p id="scrollId" class="termofservice ppp" @scroll="onScroll">
            會員條款 <br>
            歡迎您加入我們的電商平台會員！為了保障您的權益與維護平台的秩序，請您務必詳細閱 <br>
            讀以下條款： <br>
            一、平台會員的註冊 <br>
            1.申請加入平台會員時，請確保您所提供的個人資訊均真實有效，且需保證不會因為任何 <br>
            原因而對第三方造成損害。 <br>
            2.您需要保證註冊時填寫的資訊與您本人真實身份一致。若您提供虛假資訊，平台有權隨 <br>
            時終止您的會員資格。 <br>
            3.平台有權根據實際需要暫停或終止向會員提供部分或全部服務，且不承擔任何賠償責 <br>
            任。 <br>
            4.會員需保管好自己的帳號和密碼，不得將帳號和密碼洩露給第三方使用。如因疏忽或其 <br>
            他原因造成帳號或密碼遭到盜用，會員需立即通知平台，以保障自己的權益。 <br>
            二、交易流程 <br>
            1.平台只是交易的中介平台，不對買賣雙方的行為承擔任何擔保、擔保、代理、擔保或其 <br>
            他類似的責任。 <br>
            2.會員需對在平台上的交易行為負責。在平台上進行交易時，會員應確保交易物品的真實 <br>
            性和合法性，且不得有欺詐行為。 <br>
            3.在交易過程中，會員需嚴格遵守平台的相關規定，如有違反，平台有權終止會員資格。 <br>
            4.買賣雙方達成交易後，平台將按照約定的方式處理款項，並提供相關的物流跟踪信息。 <br>
            5.如果買賣雙方違反交易協議或有其他違法行為，平台有權介入調解，但不對交易結果承<br>
            擔任何責任。 <br>
            三、智慧財產權保護 <br>
            1.平台尊重並保護知識產權，會員在平台上傳輸的內容不得侵犯他人<br>
          </p>
          <div class="btn-div">
            <div v-if="activeBtn" class="registerActive" @click="registerFun">我已閱讀並同意</div>
            <div v-else class="register-btn2">我已閱讀並同意</div>
          </div>
        </div>
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
            <img class="back-css" src="../assets/mobile/back-btn.png" @click="backFun(5)" />
            <p class="welcome-back">會員服務條款</p>
            <p class="hideright">hi</p>
          </div>

          <p class="termofservice mmm" @scroll="onScroll">
            會員條款<br>
            歡迎您加入我們的電商平台會員！為了保障您的權益與維護平台的秩序，請您務必詳細閱讀以下條款：<br>
            一、平台會員的註冊<br>
            1.申請加入平台會員時，請確保您所提供的個人資訊均真實有效，且需保證不會因為任何原因而對第三方造成損害。<br>
            2.您需要保證註冊時填寫的資訊與您本人真實身份一致。若您提供虛假資訊，平台有權隨時終止您的會員資格。<br>
            3.平台有權根據實際需要暫停或終止向會員提供部分或全部服務，且不承擔任何賠償責任。<br>
            4.會員需保管好自己的帳號和密碼，不得將帳號和密碼洩露給第三方使用。如因疏忽或其他原因造成帳號或密碼遭到盜用，會員需立即通知平台，以保障自己的權益。<br>
            二、交易流程<br>
            1.平台只是交易的中介平台，不對買賣雙方的行為承擔任何擔保、擔保、代理、擔保或其他類似的責任。<br>
            2.會員需對在平台上的交易行為負責。在平台上進行交易時，會員應確保交易物品的真實性和合法性，且不得有欺詐行為。<br>
            3.在交易過程中，會員需嚴格遵守平台的相關規定，如有違反，平台有權終止會員資格。<br>
            4.買賣雙方達成交易後，平台將按照約定的方式處理款項，並提供相關的物流跟踪信息。<br>
            5.如果買賣雙方違反交易協議或有其他違法行為，平台有權介入調解，但不對交易結果承擔任何責任。<br>
            三、智慧財產權保護<br>
            1.平台尊重並保護知識產權，會員在平台上傳輸的內容不得侵犯他人<br>
          </p>
          <div class="btn-div">
            <div v-if="activeBtn" class="registerActive" @click="registerFun">我已閱讀並同意</div>
            <div v-else class="register-btn2">我已閱讀並同意</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="step == 6" class="register-css"> 
    <div class="register-child">
      <div class="left-block">
        <p class="big-discount">PK開幕大大大優惠</p>
        <p class="vis-reality">將虛擬化為現實</p>
        <p class="limited-time">年度首檔限時優惠</p>
      </div>
      <div class="right-block">
        <div class="right-inner">
          <p class="welcome-back">驗證電話號碼</p>

          <input v-model="verifycode" placeholder="請輸入驗證碼" onfocus="this.placeholder=''" class="accountCss4" />
          <p class="pwd-valid">您若有拒收企業簡訊，將有可能導致無法收到驗證碼。</p>

          <div class="btn-div">
            <div class="register-btn1" @click="registerFun">登入</div>
            <div class="resend-css">重新發送(10)</div>
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
        <p class="welcome-back">驗證電話號碼</p>

        <input v-model="verifycode" placeholder="請輸入驗證碼" onfocus="this.placeholder=''" class="accountCss4" />
        <p class="pwd-valid">您若有拒收企業簡訊，將有可能導致無法收到驗證碼。</p>

        <div class="btn-div">
          <div class="register-btn1" @click="registerFun">登入</div>
          <div class="resend-css">重新發送(10)</div>
        </div>
      </div>
    </div>
  </div>
  <Footer :page="pName" />
</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'MyRegister',
  data() {
    return{
      myaccount: '',
      pName: 'login',
      step: 1,
      mypassword: '',
      myconfirmpwd: '',
      phoneNo: '',
      dateofBirth: '',
      checkDOB: false,
      myaddress: '',
      genderData: '',
      myemail: '',
      cityName: '',
      distinctName: '',
      verifycode: '',
      activeBtn: false,
      isStripeLoaded: false,

      // 縣市

      // counties: [
      //   'Taipei City', 'Keelung City', 'New Taipei City', 'Yilan County', 'Taoyuan City', 'Hsinchu City', 'Hsinchu County', 'Miaoli County',
      //   'Taichung City', 'Changhua County', 'Nantou County', 'Chiayi City', 'Chiayi County', 'Yunlin County', 'Tainan City', 'Kaohsiung City',
      //   'Penghu County', 'Kinmen County', 'Pingtung County', 'Taitung County', 'Hualien County', 'Lienchiang County'
      // ],

      counties: [
        '台北市', '基隆市', '新北市', '宜蘭縣', '桃園市', '新竹市', '新竹縣', '苗栗縣',
        '台中市', '彰化縣', '南投縣', '嘉義市', '嘉義縣', '雲林縣', '台南市', '高雄市',
        '澎湖縣', '金門縣', '屏東縣', '台東縣', '花蓮縣', '連江縣'
      ],

      // 區域

      // districts: [
      //   // 台北市
      //   [
      //     ['Zhongzheng District', 'Datong District', 'Zhongshan District', 'Songshan District', 'Da’an District', 'Wanhua District', 'Xinyi District', 'Shilin District', 'Beitou District', 'Neihu District', 'Nangang District', 'Wenshan District'],

      //     ['100', '103', '104', '105', '106', '108', '110', '111', '112', '114', '115', '116']
      //   ],
      //   // 基隆市
      //   [
      //     ['Ren’ai District', 'Xinyi District', 'Zhongzheng District', 'Zhongshan District', 'Anle District', 'Nuannuan District', 'Qidu District'],

      //     ['200', '201', '202', '203', '204', '205', '206']
      //   ],
      //   // 新北市
      //   [
      //     ['Wanli District', 'Jinshan District', 'Banqiao District', 'Xizhi District', 'Shenkeng District', 'Shiding District', 'Ruifang District', 'Pingxi District', 'Shuangxi District', 'Gongliao District', 'Xindian District', 'Pinglin District', 'Wulai District', 'Yonghe District', 'Zhonghe District', 'Tucheng District', 'Sanxia District', 'Shulin District', 'Yingge District', 'Sanchong District', 'Xinzhuang District', 'Taishan District', 'Linkou District', 'LuzhouDistrict', 'Wugu District', 'Bali District', 'Tamsui District', 'Sanzhi District', 'Shimen District'],

      //     ['207', '208', '220', '221', '222', '223', '224', '226', '227', '228',
      //     '231', '232', '233', '234', '235', '236', '237', '238', '239', '241',
      //     '242', '243', '244', '247', '248', '249', '251', '252', '253']
      //   ],
      //   // 宜蘭縣
      //   [
      //     ['Yilan City', 'Toucheng Township', 'Jiaoxi Township', 'Zhuangwei Township', 'Yuanshan Township', 'Luodong Township', 'Sanxing Township', 'Datong Township', 'Wujie Township', 'Dongshan Township', 'Su’ao Township', 'Nan’ao Township', 'Diauyutai'],

      //     ['260', '261', '262', '263', '264', '265', '266', '267', '268', '269',
      //     '270', '272', '290']
      //   ],
      //   // 桃園市
      //   [
      //     ['Zhongli District', 'Pingzhen District', 'Longtan District', 'Yangmei District', 'Xinwu District', 'Guanyin District', 'Taoyuan District', 'Guishan District', 'Bade District', 'Daxi District', 'Fuxing District', 'Dayuan District', 'Luzhu District'],

      //     ['320', '324', '325', '326', '327', '328', '330', '333', '334', '335',
      //     '336', '337', '338']
      //   ],
      //   // 新竹市
      //   [
      //     ['East District', 'North District', 'Xiangshan District'],

      //     ['300', '300', '300']
      //   ],
      //   // 新竹縣
      //   [
      //     ['Zhubei City', 'Hukou Township', 'Xinfeng Township', 'Xinpu Township', 'Guanxi Township', 'Qionglin Township', 'Baoshan Township', 'Zhudong Township', 'Wufeng Township', 'Hengshan Township', 'Jianshi Township', 'Beipu Township', 'Emei Township'],

      //     ['302', '303', '304', '305', '306', '307', '308', '310', '311',
      //     '312', '313', '314', '315']
      //   ],
      //   // 苗栗縣
      //   [
      //     ['Zhunan Township', 'Toufen Township', 'Sanwan Township', 'Nanzhuang Township', 'Shitan Township', 'Houlong Township', 'Tongxiao Township', 'Yuanli Township', 'Miaoli City', 'Zaoqiao Township', 'Touwu Township', 'Gongguan Township', 'Dahu Township', 'Tai’an Township', 'Tongluo Township', 'Sanyi Township', 'Xihu Township', 'Zhuolan Township'],

      //     ['350', '351', '352', '353', '354', '356', '357', '358', '360', '361',
      //     '362', '363', '364', '365', '366', '367', '368', '369']
      //   ],
      //   // 台中市
      //   [
      //     ['Central District', 'East District', 'South District', 'West District', 'North District', 'Beitun District', 'Xitun District', 'Nantun District', 'Taiping District', 'Dali District', 'Wufeng District', 'Wuri District', 'Fengyuan District', 'Houli District', 'Shigang District', 'Dongshi District', 'Heping District', 'Xinshe District', 'Tanzi District', 'Daya District', 'Shengang District', 'Dadu District', 'ShaluDistrict', 'Longjing District', 'Wuqi District', 'Qingshui District', 'Dajia District', 'Waipu District', 'Da’an District'],

      //     ['400', '401', '402', '403', '404', '406', '407', '408', '411', '412',
      //     '413', '414', '420', '421', '422', '423', '424', '426', '427', '428',
      //     '429', '432', '433', '434', '435', '436', '437', '438', '439']
      //   ],
      //   // 彰化縣
      //   [
      //     ['Changhua City', 'Fenyuan Township', 'Huatan Township', 'Xiushui Township', 'Lukang Township', 'Fuxing Township', 'Xianxi Township', 'Hemei Township', 'Shengang Township', 'Yuanlin Township', 'Shetou Township', 'Yongjing Township', 'Puxin Township', 'Xihu Township', 'Dacun Township', 'Puyan Township', 'Tianzhong Township', 'Beidou Township', 'Tianwei Township', 'Pitou Township', 'Xizhou Township', 'Zhutang Township', 'Erlin Township', 'Dacheng Township', 'Fangyuan Township', 'Ershui Township'],

      //     ['500', '502', '503', '504', '505', '506', '507', '508', '509', '510',
      //     '511', '512', '513', '514', '515', '516', '520', '521', '522', '523',
      //     '524', '525', '526', '527', '528', '530']
      //   ],
      //   // 南投縣
      //   [
      //     ['Nantou City', 'Zhongliao Township', 'Caotun Township', 'Guoxing Township', 'Puli Township', 'Ren’ai Township', 'Mingjian Township', 'Jiji Township', 'Shuili Township', 'Yuchi Township', 'Xinyi Township', 'Zhushan Township', 'Lugu Township'],

      //     ['540', '541', '542', '544', '545', '546', '551', '552', '553', '555',
      //     '556', '557', '558']
      //   ],
      //   // 嘉義市
      //   [
      //     ['East District', 'West District'],

      //     ['600', '600']
      //   ],
      //   // 嘉義縣
      //   [
      //     ['FanluTownship', 'Meishan Township', 'Zhuqi Township', 'Alishan Township', 'Zhongpu Township', 'Dapu Township', 'Shuishang Township', 'Lucao Township', 'Taibao City', 'Puzi City', 'Dongshi Township', 'Liujiao Township', 'Xingang Township', 'Minxiong Township', 'Dalin Township', 'Xikou Township', 'Yizhu Township', 'Budai Township'],

      //     ['602', '603', '604', '605', '606', '607', '608', '611', '612',
      //     '613', '614', '615', '616', '621', '622', '623', '624', '625']
      //   ],
      //   // 雲林縣
      //   [
      //     ['Dounan Township', 'Dapi Township', 'Huwei Township', 'Tuku Township', 'Baozhong Township', 'Dongshi Township', 'Taixi Township', 'Lunbei Township', 'Mailiao Township', 'Douliu City', 'Linnei Township', 'Gukeng Township', 'Citong Township', 'Xiluo Township', 'Erlun Township', 'Beigang Township', 'Shuilin Township', 'Kouhu Township', 'Sihu Township', 'Yuanchang Township'],

      //     ['630', '631', '632', '633', '634', '635', '636', '637', '638', '640', '643',
      //     '646', '647', '648', '649', '651', '652', '653', '654', '655']
      //   ],
      //   // 台南市
      //   [
      //     ['West Central District', 'East District', 'South District', 'North District', 'Anping District', 'Annan District', 'Yongkang District', 'Guiren District', 'Xinhua District', 'Zuozhen District', 'Yujing District', 'Nanxi District', 'Nanhua District', 'Rende District', 'Guanmiao District', 'Longqi District', 'Guantian District', 'Madou District', 'Jiali District', 'Xigang District', 'Qigu District', 'Jiangjun District', 'Xuejia District', 'Beimen District', 'Xinying District', 'Houbi District', 'Baihe District', 'Dongshan District', 'Liujia District', 'Xiaying District', 'Liuying District', 'Yanshui District', 'Shanhua District', 'Danei District', 'Shanshang District', 'Xinshi District', 'Anding District'],

      //     ['700', '701', '702', '704', '708', '709', '710', '711', '712', '713', '714',
      //     '715', '716', '717', '718', '719', '720', '721', '722', '723', '724', '725',
      //     '726', '727', '730', '731', '732', '733', '734', '735', '736', '737', '741',
      //     '742', '743', '744', '745']
      //   ],
      //   // 高雄市
      //   [
      //     ['Xinxing District', 'Qianjin District', 'Lingya District', 'Yancheng District', 'Gushan District', 'Qijin District', 'Qianzhen District', 'Sanmin District', 'Nanzi District', 'Xiaogang District', 'Zuoying District', 'Renwu District', 'Dashe District', 'Dongsha Islands', 'Nansha Islands', 'Gangshan District', 'Luzhu District', 'Alian District', 'Tianliao District', 'Yanchao District', 'Qiaotou District', 'Ziguan District', 'Mituo District', 'Yong’an District', 'Hunei District', 'Fengshan District', 'Daliao District', 'Linyuan District', 'Niaosong District', 'Dashu District', 'Qishan District', 'Meinong District', 'Liugui District', 'Neimen District', 'Shanlin District', 'Jiaxian District', 'Taoyuan District', 'Namaxia District', 'Maolin District', 'Qieding District'],

      //     ['800', '801', '802', '803', '804', '805', '806', '807', '811', '812', '813',
      //     '814', '815', '817', '819', '820', '821', '822', '823', '824', '825', '826', '827', '828',
      //     '829', '830', '831', '832', '833', '840', '842', '843', '844', '845', '846',
      //     '847', '848', '849', '851', '852']
      //   ],
      //   // 澎湖縣
      //   [
      //     ['Magong City', 'Xiyu Township', 'Wang’an Township', 'Qimei Township', 'Baisha Township', 'Huxi Township'],

      //     ['880', '881', '882', '883', '884', '885']
      //   ],
      //   // 金門縣
      //   [
      //     ['Jinsha Township', 'Jinhu Township', 'Jinning Township', 'Jincheng Township', 'Lieyu Township', 'Wuqiu Township'],

      //     ['890', '891', '892', '893', '894', '896']
      //   ],
      //   // 屏東縣
      //   [
      //     ['Pingtung City', 'Sandimen Township', 'Wutai Township', 'Majia Township', 'Jiuru Township', 'Ligang Township', 'Gaoshu Township', 'Yanpu Township', 'Changzhi Township', 'Linluo Township', 'Zhutian Township', 'Neipu Township', 'Wandan Township', 'Chaozhou Township', 'Taiwu Township', 'Laiyi Township', 'Wanluan Township', 'Kanding Township', 'Xinpi Township', 'Nanzhou Township', 'Linbian Township', 'Donggang Township', 'Liuqiu Township', 'Jiadong Township', 'Xinyuan Township', 'Fangliao Township', 'Fangshan Township', 'Chunri Township', 'Shizi Township', 'Checheng Township', 'Mudan Township', 'Hengchun Township', 'Manzhou Township'],

      //     ['900', '901', '902', '903', '904', '905', '906', '907', '908', '909', '911',
      //     '912', '913', '920', '921', '922', '923', '924', '925', '926', '927', '928',
      //     '929', '931', '932', '940', '941', '942', '943', '944', '945', '946', '947']
      //   ],
      //   // 台東縣
      //   [
      //     ['Taitung City', 'Ludao Township', 'Lanyu Township', 'Yanping Township', 'Beinan Township', 'Luye Township', 'Guanshan Township', 'Haiduan Township', 'Chishang Township', 'Donghe Township', 'Chenggong Township', 'Changbin Township', 'Taimali Township', 'Jinfeng Township', 'Dawu Township', 'Daren Township'],

      //     ['950', '951', '952', '953', '954', '955', '956', '957', '958', '959', '961',
      //     '962', '963', '964', '965', '966']
      //   ],
      //   // 花蓮縣
      //   [
      //     ['Hualien City', 'Xincheng Township', 'Xiulin Township', 'Ji’an Township', 'Shoufeng Township', 'Fenglin Township', 'Guangfu Township', 'Fengbin Township', 'Ruisui Township', 'Wanrong Township', 'Yuli Township', 'Zhuoxi Township', 'Fuli Township'],

      //     ['970', '971', '972', '973', '974', '975', '976', '977', '978', '979', '981',
      //     '982', '983']
      //   ],
      //   // 連江縣
      //   [
      //     ['Nangan Township', 'Beigan Township', 'Juguang Township', 'Dongyin Township'],

      //     ['209', '210', '211', '212']
      //   ]
      // ],

      districts: [
        // 台北市
        [
          ['中正區', '大同區', '中山區', '松山區', '大安區', '萬華區', '信義區',
          '士林區', '北投區', '內湖區', '南港區', '文山區'],

          ['100', '103', '104', '105', '106', '108', '110', '111', '112', '114', '115', '116']
        ],
        // 基隆市
        [
          ['仁愛區', '信義區', '中正區', '中山區', '安樂區', '暖暖區', '七堵區'],

          ['200', '201', '202', '203', '204', '205', '206']
        ],
        // 新北市
        [
          ['萬里區', '金山區', '板橋區', '汐止區', '深坑區', '石碇區', '瑞芳區', '平溪區',
          '雙溪區', '貢寮區', '新店區', '坪林區', '烏來區', '永和區', '中和區', '土城區',
          '三峽區', '樹林區', '鶯歌區', '三重區', '新莊區', '泰山區', '林口區', '蘆洲區',
          '五股區', '八里區', '淡水區', '三芝區', '石門區'],

          ['207', '208', '220', '221', '222', '223', '224', '226', '227', '228',
          '231', '232', '233', '234', '235', '236', '237', '238', '239', '241',
          '242', '243', '244', '247', '248', '249', '251', '252', '253']
        ],
        // 宜蘭縣
        [
          ['宜蘭市', '頭城鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '羅東鎮', '三星鄉', '大同鄉',
          '五結鄉', '冬山鄉', '蘇澳鎮', '南澳鄉', '釣魚台列嶼'],

          ['260', '261', '262', '263', '264', '265', '266', '267', '268', '269',
          '270', '272', '290']
        ],
        // 桃園市
        [
          ['中壢區', '平鎮區', '龍潭區', '楊梅區', '新屋區', '觀音區', '桃園區', '龜山區',
          '八德區', '大溪區', '復興區', '大園區', '蘆竹區'],

          ['320', '324', '325', '326', '327', '328', '330', '333', '334', '335',
          '336', '337', '338']
        ],
        // 新竹市
        [
          ['東區', '北區', '香山區'],

          ['300', '300', '300']
        ],
        // 新竹縣
        [
          ['竹北市', '湖口鄉', '新豐鄉', '新埔鎮', '關西鎮', '芎林鄉', '寶山鄉',
          '竹東鎮', '五峰鄉', '橫山鄉', '尖石鄉', '北埔鄉', '峨眉鄉'],

          ['302', '303', '304', '305', '306', '307', '308', '310', '311',
          '312', '313', '314', '315']
        ],
        // 苗栗縣
        [
          ['竹南鎮', '頭份市', '三灣鄉', '南庄鄉', '獅潭鄉', '後龍鎮', '通霄鎮', '苑裡鎮',
          '苗栗市', '造橋鄉', '頭屋鄉', '公館鄉', '大湖鄉', '泰安鄉',
          '銅鑼鄉', '三義鄉', '西湖鄉', '卓蘭鎮'],

          ['350', '351', '352', '353', '354', '356', '357', '358', '360', '361',
          '362', '363', '364', '365', '366', '367', '368', '369']
        ],
        // 台中市
        [
          ['中區', '東區', '南區', '西區', '北區', '北屯區', '西屯區', '南屯區', '太平區',
          '大里區', '霧峰區', '烏日區', '豐原區', '后里區', '石岡區', '東勢區', '和平區',
          '新社區', '潭子區', '大雅區', '神岡區', '大肚區', '沙鹿區', '龍井區', '梧棲區',
          '清水區', '大甲區', '外埔區', '大安區'],

          ['400', '401', '402', '403', '404', '406', '407', '408', '411', '412',
          '413', '414', '420', '421', '422', '423', '424', '426', '427', '428',
          '429', '432', '433', '434', '435', '436', '437', '438', '439']
        ],
        // 彰化縣
        [
          ['彰化市', '芬園鄉', '花壇鄉', '秀水鄉', '鹿港鎮', '福興鄉', '線西鄉', '和美鎮',
          '伸港鄉', '員林市', '社頭鄉', '永靖鄉', '埔心鄉', '溪湖鎮', '大村鄉', '埔鹽鄉',
          '田中鎮', '北斗鎮', '田尾鄉', '埤頭鄉', '溪州鄉', '竹塘鄉', '二林鎮', '大城鄉',
          '芳苑鄉', '二水鄉'],

          ['500', '502', '503', '504', '505', '506', '507', '508', '509', '510',
          '511', '512', '513', '514', '515', '516', '520', '521', '522', '523',
          '524', '525', '526', '527', '528', '530']
        ],
        // 南投縣
        [
          ['南投市', '中寮鄉', '草屯鎮', '國姓鄉', '埔里鎮', '仁愛鄉', '名間鄉', '集集鎮',
          '水里鄉', '魚池鄉', '信義鄉', '竹山鎮', '鹿谷鄉'],

          ['540', '541', '542', '544', '545', '546', '551', '552', '553', '555',
          '556', '557', '558']
        ],
        // 嘉義市
        [
          ['東區', '西區'],

          ['600', '600']
        ],
        // 嘉義縣
        [
          ['番路鄉', '梅山鄉', '竹崎鄉', '阿里山', '中埔鄉', '大埔鄉', '水上鄉',
          '鹿草鄉', '太保市', '朴子市', '東石鄉', '六腳鄉', '新港鄉', '民雄鄉', '大林鎮',
          '溪口鄉', '義竹鄉', '布袋鎮'],

          ['602', '603', '604', '605', '606', '607', '608', '611', '612',
          '613', '614', '615', '616', '621', '622', '623', '624', '625']
        ],
        // 雲林縣
        [
          ['斗南鎮', '大埤鄉', '虎尾鎮', '土庫鎮', '褒忠鄉', '東勢鄉', '台西鄉', '崙背鄉',
          '麥寮鄉', '斗六市', '林內鄉', '古坑鄉', '莿桐鄉', '西螺鎮', '二崙鄉', '北港鎮',
          '水林鄉', '口湖鄉', '四湖鄉', '元長鄉'],

          ['630', '631', '632', '633', '634', '635', '636', '637', '638', '640', '643',
          '646', '647', '648', '649', '651', '652', '653', '654', '655']
        ],
        // 台南市
        [
          ['中西區', '東區', '南區', '北區', '安平區', '安南區', '永康區', '歸仁區', '新化區',
          '左鎮區', '玉井區', '楠西區', '南化區', '仁德區', '關廟區', '龍崎區', '官田區',
          '麻豆區', '佳里區', '西港區', '七股區', '將軍區', '學甲區', '北門區', '新營區',
          '後壁區', '白河區', '東山區', '六甲區', '下營區', '柳營區', '鹽水區', '善化區',
          '大內區', '山上區', '新市區', '安定區'],

          ['700', '701', '702', '704', '708', '709', '710', '711', '712', '713', '714',
          '715', '716', '717', '718', '719', '720', '721', '722', '723', '724', '725',
          '726', '727', '730', '731', '732', '733', '734', '735', '736', '737', '741',
          '742', '743', '744', '745']
        ],
        // 高雄市
        [
          ['新興區', '前金區', '苓雅區', '鹽埕區', '鼓山區', '旗津區', '前鎮區', '三民區',
          '楠梓區', '小港區', '左營區', '仁武區', '大社區', '東沙群島', '南沙群島', '岡山區',
          '路竹區', '阿蓮區', '田寮區', '燕巢區', '橋頭區', '梓官區', '彌陀區', '永安區',
          '湖內區', '鳳山區', '大寮區', '林園區', '鳥松區', '大樹區', '旗山區', '美濃區',
          '六龜區', '內門區', '杉林區', '甲仙區', '桃源區', '那瑪夏區', '茂林區', '茄萣區'],

          ['800', '801', '802', '803', '804', '805', '806', '807', '811', '812', '813',
          '814', '815', '817', '819', '820', '821', '822', '823', '824', '825', '826', '827', '828',
          '829', '830', '831', '832', '833', '840', '842', '843', '844', '845', '846',
          '847', '848', '849', '851', '852']
        ],
        // 澎湖縣
        [
          ['馬公市', '西嶼鄉', '望安鄉', '七美鄉', '白沙鄉', '湖西鄉'],

          ['880', '881', '882', '883', '884', '885']
        ],
        // 金門縣
        [
          ['金沙鎮', '金湖鎮', '金寧鄉', '金城鎮', '烈嶼鄉', '烏坵鄉'],

          ['890', '891', '892', '893', '894', '896']
        ],
        // 屏東縣
        [
          ['屏東市', '三地門鄉', '霧台鄉', '瑪家鄉', '九如鄉', '里港鄉', '高樹鄉', '鹽埔鄉',
          '長治鄉', '麟洛鄉', '竹田鄉', '內埔鄉', '萬丹鄉', '潮州鎮', '泰武鄉', '來義鄉',
          '萬巒鄉', '崁頂鄉', '新埤鄉', '南州鄉', '林邊鄉', '東港鎮', '琉球鄉', '佳冬鄉',
          '新園鄉', '枋寮鄉', '枋山鄉', '春日鄉', '獅子鄉', '車城鄉', '牡丹鄉', '恆春鎮',
          '滿州鄉'],

          ['900', '901', '902', '903', '904', '905', '906', '907', '908', '909', '911',
          '912', '913', '920', '921', '922', '923', '924', '925', '926', '927', '928',
          '929', '931', '932', '940', '941', '942', '943', '944', '945', '946', '947']
        ],
        // 台東縣
        [
          ['台東市', '綠島鄉', '蘭嶼鄉', '延平鄉', '卑南鄉', '鹿野鄉', '關山鎮', '海端鄉',
          '池上鄉', '東河鄉', '成功鎮', '長濱鄉', '太麻里', '金峰鄉', '大武鄉', '達仁鄉'],

          ['950', '951', '952', '953', '954', '955', '956', '957', '958', '959', '961',
          '962', '963', '964', '965', '966']
        ],
        // 花蓮縣
        [
          ['花蓮市', '新城鄉', '秀林鄉', '吉安鄉', '壽豐鄉', '鳳林鎮', '光復鄉', '豐濱鄉',
          '瑞穗鄉', '萬榮鄉', '玉里鎮', '卓溪鄉', '富里鄉'],

          ['970', '971', '972', '973', '974', '975', '976', '977', '978', '979', '981',
          '982', '983']
        ],
        // 連江縣
        [
          ['南竿鄉', '北竿鄉', '莒光鄉', '東引鄉'],

          ['209', '210', '211', '212']
        ]
      ],

      seleDist: [

      ]
    }
  },
  watch: {
    cityName() {
      const tempcount1 = document.getElementById("select1Id").selectedIndex - 1;
      const tempcount2 = document.getElementById("select2Id").selectedIndex - 1;
      this.distinctName = ''
      if(tempcount1 === -1) {
        this.seleDist = this.districts[tempcount2]
      } else if(tempcount2 === -1) {
        this.seleDist = this.districts[tempcount1]
      }
    }
  },
  methods: {
    ...mapActions("user", ["updateLogin"]),
    registerFun() {
      if(this.step === 1 && this.myaccount && this.myaccount !== '') {
        // alert('go to step2 ')
        this.step++;
      } else if(this.step === 2 && (this.mypassword !== '' && this.myconfirmpwd !== '' && (this.mypassword === this.myconfirmpwd))) {
        // alert('go to step3')
        this.step++;
      } else if(this.step === 3 && this.dateofBirth !== '') {
        this.isValidDate(this.dateofBirth);
        if(this.phoneNo !== '' && this.checkDOB && this.genderData !== '') {
          this.step++;
        }
      } else if(this.step === 4 && this.myemail !== '' && this.cityName !== '' && this.distinctName !== '' && this.myaddress !== '') {
        // alert('go to step5')
        this.step++;
      } else if(this.step === 5) {
        // alert('go to step6')
        this.step++;
      } else if(this.step === 6 && this.verifycode !== '') {
        // go to front page with login state
        this.updateLogin(true);
        this.$router.push('/')
      }
      // this.$router.push('/register')
    }, 
    selectGender(val) {
      this.genderData = val
    },
    loginFun() {
      this.$router.push('/login')
    },
    backFun(val) {
      this.step = (val - 1)
    },
    onScroll ({ target: { scrollTop, clientHeight, scrollHeight }}) {
      if (scrollTop + clientHeight >= scrollHeight) {
        this.activeBtn = true
      } else {
        this.activeBtn = false
      }
    },
    isValidDate(date) {
      // Date format: YYYY-MM-DD
      const datePattern = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

      // Check if the date string format is a match
      const matchArray = date.match(datePattern);
      if (matchArray == null) {
          return false;
      }

      // Remove any non digit characters
      const dateString = date.replace(/\D/g, ''); 

      // Parse integer values from the date string
      const year = parseInt(dateString.substr(0, 4));
      const month = parseInt(dateString.substr(4, 2));
      const day = parseInt(dateString.substr(6, 2));
    
      // Define the number of days per month
      const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      // Leap years
      if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
          daysInMonth[1] = 29;
      }

      if (month < 1 || month > 12 || day < 1 || day > daysInMonth[month - 1]) {
          this.checkDOB = false
      }
      this.checkDOB = true
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
  .right-block, .right-block1 {
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
        cursor: pointer;
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
      outline-color: transparent;
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
      margin-bottom: 0;
      border-radius: 12px;
      height: 40px;
      width: 30%;
      border: 2px solid #7161EF;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: #7161EF;
    }
    .active-gen {
      font-weight: 400;
      font-size: 20px;
      margin-bottom: 0;
      border-radius: 12px;
      height: 40px;
      width: 30%;
      border: 2px solid #7161EF;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: #FFF;
      background: #7161EF;
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
      font-weight: 500;
      font-size: 14px;

      color: #6A5CFD;
      background: #DFDCFF;
      border-radius: 6px;
      
      padding: 1rem;
      margin-top: 1rem;
      margin-bottom: 1.5rem;

      height: 423px;
      overflow: auto;
      @media screen and (max-width: 768px) {
        padding: 10px;
      }
    }
    .termofservice::-webkit-scrollbar {
      display: none;
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
        cursor: pointer;
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
        cursor: pointer;
      }
      .registerActive {
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
        cursor: pointer;
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
        cursor: pointer;
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
  .right-block1 {
    width: 50%;
    min-width: 646px;
    margin: auto;
    .right-inner {
      padding: 2rem 2rem 1.5rem;
    }
    .row-regi {
      // justify-content: center;
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

<style>
  /* Chrome, Safari, Edge, Opera */
  /* input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button
  {
      -webkit-appearance: none;
      margin: 0;
  } */

  /* Firefox */
  /* input[type=number]
  {
      -moz-appearance: textfield;
  } */
</style>