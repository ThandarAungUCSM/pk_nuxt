<template>
  <div>
    <Header class="forPC" />
    <div class="membership-userinfo">
      <div class="member-content">
        <div class="formobile titlem">
          <div class="pc-back">
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
                <p class="gen-select">男</p>
              </div>
              <div>
                <p class="gen-select">女</p>
              </div>
              <div>
                <p class="gen-btn">其他</p>
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
export default {
  name: 'MemberUserinfo',
  data() {
    return {
      currentTab: 1,
      nameText: '王大明',
      phoneNo: '0966-330-678',
      birthDay: '1990/02/18',
      emailText: 'example@gmail.com',
      cityTown: [{name: 'aaaaa'}, {name: 'bbbbb'}, {name: 'ccccc'}, {name: 'ddddd'}, {name: 'eeeee'}],
      cityName: '',
      distinctName: '',
      streetText: '光復南路三段156巷24號'
    }
  },
  methods: {
    saveData() {
      alert('Success!!')
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
          font-size: 1rem;
          color: #858585;
          background: #FAF7FF;
          backdrop-filter: blur(1.5px);
          border-radius: 6px;
          border: none;
          padding-left: 10px;
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