<template>
  <div>
    <Header class="forPC" />
    <div class="membership-userinfo">
      <div class="member-content">
        <div class="formobile titlem">
          <div class="pc-back" @click="backBtn">
            <img src="../assets/mobile/btnReturnBlack.png" class="back-icon">
          </div>
          <div class="title-div">
            <img src="../assets/mobile/fi-rr-user.png" class="setting-icon">
            <span class="setting-title">會員資料</span>
          </div>
          <div class="visibleHidden">hi</div>
        </div>
        <div class="title-div forPC">
          <img src="../assets/mobile/fi-rr-user.png" class="setting-icon">
          <span class="setting-title">會員資料</span>
        </div>
        <div class="member-block">
          <div class="name-block">
            <span class="name-txt">姓名</span>
            <input
              v-model="nameText"
              type="text"
              placeholder="王大明"
              class="name-input"
            />
          </div>
          <div class="row-css">
            <div class="phone-block">
              <span class="name-txt">手機號碼</span>
              <input
                v-model="phoneNo"
                type="text"
                placeholder="0966-330-678"
                class="phone-input"
              />
            </div>
            <div class="phone-block">
              <span class="name-txt">生日</span>
              <input
                v-model="birthDay"
                type="text"
                placeholder="1990/02/18"
                class="phone-input"
              />
            </div>
          </div>
          <div class="gender-block">
            <div>
              <span class="gen-txt">性別</span>
            </div>
            <div class="gender-row">
              <div>
                <p :class="genderCode == 'male' ? 'gen-btn' : 'gen-select'" @click="selectGender('male')">男</p>
              </div>
              <div>
                <p :class="genderCode == 'female' ? 'gen-btn' : 'gen-select'" @click="selectGender('female')">女</p>
              </div>
              <div>
                <p :class="genderCode == 'other' ? 'gen-btn' : 'gen-select'" @click="selectGender('other')">其他</p>
              </div>
            </div>
          </div>
          <div class="email-block">
            <span class="email-txt">Email</span>
            <input
              v-model="emailText"
              type="text"
              placeholder="example@gmail.com"
              class="email-input"
            />
          </div>
          <div class="address-block">
            <span class="email-txt">地址</span>
            <div class="address">
              <el-select v-model="cityName" class="member-address-city" placeholder="選擇縣市" @change="(e) => {handleChange(e)}">
                <el-option value="">選擇縣市</el-option>
                <el-option
                  v-for="(city, index) in counties"
                  :key="index"
                  :label="city"
                  :value="city">
                </el-option>
              </el-select>
              
              <el-select
                v-if="seleDist.length > 0" 
                v-model="district"
                class="member-address-city"
                style="margin-left: 20px;"
                placeholder="選擇區域">
                <el-option value="">選擇區域</el-option>
                <el-option
                  v-for="(city, ind) in seleDist[0]"
                  :key="ind"
                  :label="city"
                  :value="city">
                </el-option>
              </el-select>
              <el-select
                v-else
                v-model="district"
                class="member-address-city"
                style="margin-left: 20px;"
                placeholder="選擇區域">
                <el-option value="">選擇區域</el-option>
                <el-option
                  v-for="(city, ind) in seleDist"
                  :key="ind"
                  :label="city"
                  :value="city">
                </el-option>
              </el-select>
              
            </div>
          </div>
          <div class="street-block">
            <input
              v-model="streetText"
              type="text"
              placeholder="光復南路三段156巷24號"
              class="address-input"
            />
          </div>
          <div class="submit-block">
            <p class="submit-btn" @click="saveData">儲存</p>
          </div>
        </div>
      </div>
    </div>
    <Footer class="forPC" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: 'MemberUserinfo',
  data() {
    return {
      currentTab: 1,
      // nameText: '王大明',
      // phoneNo: '0966-330-678',
      // birthDay: '1990/02/18',
      // emailText: 'example@gmail.com',
      // cityName: '',
      // district: '',
      // genderCode: 'other',
      // streetText: '光復南路三段156巷24號',
      // cityTown: [{name: 'aaaaa', label: 'aaaaa'}, {name: 'bbbbb', label: 'bbbbb'}, {name: 'ccccc', label: 'ccccc'}],
      counties: [
        '台北市', '基隆市', '新北市', '宜蘭縣', '桃園市', '新竹市', '新竹縣', '苗栗縣',
        '台中市', '彰化縣', '南投縣', '嘉義市', '嘉義縣', '雲林縣', '台南市', '高雄市',
        '澎湖縣', '金門縣', '屏東縣', '台東縣', '花蓮縣', '連江縣'
      ],
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
      seleDist: []
    }
  },
  computed: {
    ...mapGetters("user", {
      profile: "storeProfile",
    }),
    nameText: {
      get() {
        console.log(this.$store.state);
        return this.$store.state.user.profile && this.$store.state.user.profile.name;
      },
      set(value) {
        console.log(value);
        this.$store.commit("user/UPDATE_NAME", value);
      },
    },
    phoneNo: {
      get() {
        return this.$store.state.user.profile && this.$store.state.user.profile.mobile;
      },
      set(value) {
        this.$store.commit("user/UPDATE_MOBILE", value);
      },
    },
    birthDay: {
      get() {
        return this.$store.state.user.profile && this.$store.state.user.profile.birthDay;
      },
      set(value) {
        this.$store.commit("user/UPDATE_BIRTHDAY", value);
      },
    },
    emailText: {
      get() {
        return this.$store.state.user.profile && this.$store.state.user.profile.email;
      },
      set(value) {
        this.$store.commit("user/UPDATE_EMAIL", value);
      },
    },
    cityName: {
      get() {
        return this.$store.state.user.profile && this.$store.state.user.profile.cityName;
      },
      set(value) {
        this.$store.commit("user/UPDATE_CITY_NAME", value);
      },
    },
    district: {
      get() {
        return this.$store.state.user.profile && this.$store.state.user.profile.district;
      },
      set(value) {
        this.$store.commit("user/UPDATE_DISTRICT", value);
      },
    },
    genderCode: {
      get() {
        return this.$store.state.user.profile && this.$store.state.user.profile.genderCode;
      },
      set(value) {
        this.$store.commit("user/UPDATE_GENDER", value);
      },
    },
    streetText: {
      get() {
        return this.$store.state.user.profile && this.$store.state.user.profile.street;
      },
      set(value) {
        this.$store.commit("user/UPDATE_STREET", value);
      },
    },
  },
  // watch: {
  // },
  methods: {
    saveData() {
      alert('Success!!')
      // this.updateMemberProfile();
    },
    handleChange(e) {
      const index = this.counties.map(item => item).indexOf(e);
      this.district = ''
      this.seleDist = this.districts[index]
    },
    async updateMemberProfile() {
      console.log("updateMemberProfile()");
      const accessToken = this.$store.getters.accessToken;
      console.log("this.nameText=", this.nameText);
      console.log("this.phoneNo=", this.phoneNo);
      console.log("this.birthDay=", this.birthDay);
      console.log("this.emailText=", this.emailText);
      console.log("this.cityName=", this.cityName);
      console.log("this.district=", this.district);
      console.log("this.genderCode=", this.genderCode);
      console.log("this.streetText=", this.streetText);
      // let cityName = this.cityTown[this.selectCityIndex].name;
      // let district = this.cityTown[this.selectCityIndex].townshipsList[this.selectTownIndex].name;
      if (this.profile != null) {
        // const profileId = this.profile.profileId;
        // const appMemberShipCardNumber = this.profile.appMemberShipCardNumber;
        // const mobileCountryNumber = this.profile.mobileCountryNumber;
        // const marriage = this.profile.marriage;
        // const profession = this.profile.profession;
        // const postcode = this.profile.postcode;
        // const nationalityCode = this.profile.nationalityCode;
        const mobile = this.phoneNo;
        const nameText = this.nameText;
        const genderCode = this.genderCode;
        const birthDay = this.birthDay;
        const email = this.emailText;
        const cityName = this.cityName;
        const district = this.district;
        const street = this.streetText;
        const rs = await this.$api17.updateMemberProfile(
          accessToken,
          // profileId,
          // appMemberShipCardNumber,
          // mobileCountryNumber,
          // marriage,
          // profession,
          // postcode,
          // nationalityCode,
          mobile,
          nameText,
          genderCode,
          birthDay,
          email,
          cityName,
          district,
          street,
        );
        if (rs.code === 1000) {
          const data = rs.data;
          console.log("updateMemberProfile() data=", data);
          const rs2 = await this.$api17.getMemberProfile(accessToken);
          if (rs2.code === 1000) {
            const userData = rs2.data;
            console.log("userData=", userData);
            this.setUserProfile(userData);
          } else {
            console.error('Error');
          }
        } else {
          console.error(" updateMemberProfile() ...");
        }
      } else {
        console.error("profile=null");
      }
    },
    selectGender(val) {
      this.genderCode = val
    },
    backBtn() {
      this.$router.push('/member')
    }
  }
}
</script>
<style lang="scss" scoped>
.forPC {
  @media screen and (max-width: 768px) {
    display: none;
  }
}
.membership-userinfo {
  padding-top: 140px;
  background: #FFF;
  height: calc(100vh - 80px);
  @media screen and (max-width: 768px) {
    padding-top: 0;
    background: #FFF;
    height: 100vh;
  }
  .title-div {
    text-align: center;
    padding: 1rem;
    @media screen and (max-width: 768px) {
      text-align: left;
      padding: 0;
    }
    .setting-title {
      font-weight: 400;
      font-size: 16px;
      padding-left: 1rem;
      color: #000;
      @media screen and (max-width: 768px) {
      }
    }
  }
  .member-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 768px) {
    }
    .formobile {
      display: none;
      @media screen and (max-width: 768px) {
        display: block;
      }
      .pc-back {
        @media screen and (max-width: 768px) {
          display: flex;
        }
        .back-icon {
          width: 36px;
          height: 36px;
        }
      }
    }
    .titlem {
      @media screen and (max-width: 768px) {
        // background: #7161EF;
        height: 114px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        padding: 1rem;
      }
      .visibleHidden {
        visibility: hidden;
      }
    }
    .member-block {
      // display: flex;
      width: 25%;
      width: 320px;
      margin: 0 auto;
      @media screen and (max-width: 768px) {
        
      }
      .row-css {
        display: flex;
        justify-content: space-between;
        margin-top: 23px;
      }
      .name-block {
        background: #FAF7FF;
        backdrop-filter: blur(1.5px);
        /* Note: backdrop-filter has minimal browser support */
        height: 56px;
        padding-left: 10px;
      }
      .phone-block {
        background: #FAF7FF;
        backdrop-filter: blur(1.5px);
        height: 56px;
        padding-left: 10px;
        width: 49%;
      } 
      .name-txt {
        font-weight: 400;
        font-size: 14px;
        color: #9D9D9D;
      }
      input:focus {
        outline: none;
      }
      .gender-block {
        margin-top: 10px;
        .gen-txt {
          padding: 0 10px;
          font-weight: 400;
          font-size: 1rem;
          color: #858585;
        }
        .gender-row {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          .gen-select {
            font-weight: 400;
            font-size: 1rem;
            color: #7161EF;
            border: 2px solid #7161EF;
            border-radius: 12px;
            height: 36px;
            margin-bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            // padding: 0 2rem;
            max-width: 80px;
            width: 80px;
            cursor: pointer;
          }
          .gen-btn {
            font-weight: 400;
            font-size: 1rem;
            color: #FFF;
            background: #7161EF;
            border: 2px solid #7161EF;
            border-radius: 12px;
            height: 36px;
            margin-bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            // padding: 0 2rem;
            max-width: 80px;
            width: 80px;
            cursor: pointer;
          }
        }
      }
      .email-block {
        margin-top: 10px;
      }
      .street-block {
        background: #FAF7FF;
        backdrop-filter: blur(1.5px);
        height: 56px;
        line-height: 56px;
        padding-left: 10px;
        margin-top: 10px;
        @media screen and (max-width: 768px) {
          margin-top: 1rem;
        }
      }
      .submit-block {
        margin-top: 1rem;
        cursor: pointer;
        .submit-btn {
          background: #7161EF;
          border-radius: 6px;
          height: 56px;
          font-weight: 400;
          font-size: 1rem;
          color: #FFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .address-block {
        margin-top: 10px;
        .address {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin-top: 10px;
        }
        .member-address-city {
          width: 48%;
          font-weight: 400;
          font-size: 1rem !important;
          color: #858585;
          background: #FAF7FF;
          backdrop-filter: blur(1.5px);
          border-radius: 6px;
          border: none;
          // padding-left: 10px;
          height: 60px;
          min-height: 60px;

          background-image: url('../assets/pc/angle-down.png');
          background-repeat: no-repeat;
          background-position: calc(100% - 12px) center;
          background-size: 16px;
        }
        select:focus {
          outline: none;
        }
        select {
          appearance: none;
          -moz-appearance: none;
          -webkit-appearance: none;
          padding-right: 1rem;
        }
      }
      .email-txt {
        font-weight: 400;
        font-size: 16px;
        color: #858585;
        padding-left: 10px;
      }
      .name-input, .phone-input, .email-input, .address-input {
        font-weight: 400;
        font-size: 14px;
        color: #957FEF;
        border: none;
        width: 100%;
        background: none;
        padding: 0;
      }
      .address-input {
        @media screen and (max-width: 768px) {
          font-size: 1rem;
          color: #858585;
        }
      }
      .email-input {
        background: #FAF7FF;
        backdrop-filter: blur(1.5px);
        height: 56px;
        padding-left: 10px;
        margin-top: 10px;
      }
    }
  }
  .setting-icon{
    width: 24px;
    height: 24px;
  }
}
</style>
<style lang="scss">
.el-input--suffix .el-input__inner {
  background: #FAF7FF;
  height: 60px;
  border: none;
}
.el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
  background: #FAF7FF;
}
</style>