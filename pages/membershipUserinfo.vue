<template>
  <div>
    <Header class="forPC" :auth-data='userLogin' @checkAuth="checkAuth" />
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
              <el-select v-model="cityName" class="member-address-city" placeholder="新北市">
                <el-option
                  v-for="(city, index) in cityTown"
                  :key="index"
                  :label="city.label"
                  :value="city.name">
                </el-option>
              </el-select>
              
              <el-select
                v-model="district"
                class="member-address-city"
                style="margin-left: 20px;"
                placeholder="三重區">
                <el-option
                  v-for="(city) in cityTown"
                  :key="city.value"
                  :label="city.label"
                  :value="city.name">
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
      cityTown: [{name: 'aaaaa', label: 'aaaaa'}, {name: 'bbbbb', label: 'bbbbb'}, {name: 'ccccc', label: 'ccccc'}],
      userLogin: false,
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
  methods: {
    saveData() {
      alert('Success!!')
      // this.updateMemberProfile();
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
    checkAuth(auth) {
      this.userLogin = auth
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