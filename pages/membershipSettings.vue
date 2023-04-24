<template>
  <div>
    <Header class="forPC" />
    <div class="membership-page">
      <div class="member-content">
        <div class="formobile titlem">
          <div class="pc-back" @click="backBtn">
            <img src="../assets/mobile/btn-return.png" class="back-icon">
          </div>
          <div class="title-div">
            <img src="../assets/mobile/settings.png" class="setting-icon">
            <span class="setting-title">設定</span>
          </div>
          <div class="visibleHidden">hi</div>
        </div>
        <div class="title-div forPC">
          <img src="../assets/pc/settings.png" class="setting-icon">
          <span class="setting-title">設定</span>
        </div>
        <div class="member-block">
          <div class="member-left">
            <div class="left-block forPC">
              <div class="each-row" @click="currentTab = 1">
                <img v-if="currentTab == 1" src="../assets/pc/shield.png" class="setting-icon">
                <img v-else src="../assets/pc/active-shield.png" class="setting-icon">
                <span :class="currentTab == 1 ? 'active-setext' : 'setting-txt'">更改密碼</span>
              </div>
              <div class="each-row" @click="currentTab = 2">
                <img src="../assets/pc/world.png" class="setting-icon">
                <span :class="currentTab == 2 ? 'active-setext' : 'setting-txt'">語言</span>
              </div>
              <div class="each-row" @click="currentTab = 3">
                <img src="../assets/pc/document.png" class="setting-icon">
                <span :class="currentTab == 3 ? 'active-setext' : 'setting-txt'">PK規範</span>
              </div>
              <div class="each-row" @click="currentTab = 4">
                <img src="../assets/pc/user.png" class="setting-icon">
                <span :class="currentTab == 4 ? 'active-setext' : 'setting-txt'">會員條款</span>
              </div>
              <div class="each-row" @click="currentTab = 5">
                <img src="../assets/pc/lock.png" class="setting-icon">
                <span :class="currentTab == 5 ? 'active-setext' : 'setting-txt'">隱私權政策</span>
              </div>
              <div class="each-row" @click="currentTab = 6">
                <img src="../assets/pc/user-delete.png" class="setting-icon">
                <span :class="currentTab == 6 ? 'active-setext' : 'setting-txt'">申請刪除帳號</span>
              </div>
            </div>
            <div v-if="!showBlock" class="left-block formobile">
              <div class="each-row">
                <div class="left-row">
                  <img src="../assets/pc/active-shield.png" class="setting-icon">
                  <span class="setting-txt">更改密碼</span>
                </div>
                <img src="../assets/mobile/rightArrow.png" class="arrow-icon" @click="showEachBlock(1)">
              </div>
              <div class="each-row">
                <div class="left-row">
                  <img src="../assets/pc/world.png" class="setting-icon">
                  <span class="setting-txt">語言</span>
                </div>
                <img src="../assets/mobile/rightArrow.png" class="arrow-icon" @click="currentTab = 2">
              </div>
              <div class="each-row">
                <div class="left-row">
                  <img src="../assets/pc/document.png" class="setting-icon">
                  <span class="setting-txt">PK規範</span>
                </div>
                <img src="../assets/mobile/rightArrow.png" class="arrow-icon" @click="currentTab = 3">
              </div>
              <div class="each-row">
                <div class="left-row">
                  <img src="../assets/pc/user.png" class="setting-icon">
                  <span class="setting-txt">會員條款</span>
                </div>
                <img src="../assets/mobile/rightArrow.png" class="arrow-icon" @click="currentTab = 4">
              </div>
              <div class="each-row">
                <div class="left-row">
                  <img src="../assets/pc/lock.png" class="setting-icon">
                  <span class="setting-txt">隱私權政策</span>
                </div>
                <img src="../assets/mobile/rightArrow.png" class="arrow-icon" @click="currentTab = 5">
              </div>
              <div class="each-row">
                <div class="left-row">
                  <img src="../assets/mobile/user-delete.png" class="setting-icon">
                  <span class="setting-txt">申請刪除帳號</span>
                </div>
                <img src="../assets/mobile/rightArrow.png" class="arrow-icon" @click="currentTab = 6">
              </div>
            </div>
            <div v-else class="left-block formobile">
              <div v-if="currentTab == 1">
                <div class="pwd-div">
                  <p class="old-pwd">請輸入舊密碼</p>
                  <input v-model="userPassword" type="password" class="pwd-css" />
                </div>
                <div class="pwd-div">
                  <p class="old-pwd">請輸入新密碼</p>
                  <input v-model="currentPassword" type="password" class="pwd-css" />
                </div>
                <div class="pwd-div">
                  <p class="old-pwd">請再輸入相同密碼</p>
                  <input v-model="confirmPassword" type="password" class="pwd-css" />
                </div>
                <div class="confirm-block">
                  <div v-if="!updateConfirm" class="update-btn">
                    <span class="confirm-text">確認變更</span>
                  </div>
                  <div v-else class="confirm-btn" @click="saveUpdate">
                    <span class="confirm-text">確認變更</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="member-right">
            <div class="tocenter">
              <div v-if="currentTab == 1">
                <div class="pwd-div">
                  <p class="old-pwd">請輸入舊密碼</p>
                  <input v-model="userPassword" type="password" class="pwd-css" />
                </div>
                <div class="pwd-div">
                  <p class="old-pwd">請輸入新密碼</p>
                  <input v-model="currentPassword" type="password" class="pwd-css" />
                </div>
                <div class="pwd-div">
                  <p class="old-pwd">請再輸入相同密碼</p>
                  <input v-model="confirmPassword" type="password" class="pwd-css" />
                </div>
                <div class="confirm-block">
                  <div v-if="!updateConfirm" class="update-btn">
                    <span class="confirm-text">確認變更</span>
                  </div>
                  <div v-else class="confirm-btn" @click="saveUpdate">
                    <span class="confirm-text">確認變更</span>
                  </div>
                </div>
              </div>
              <div v-if="currentTab == 2"><span>language</span></div>
              <div v-if="currentTab == 3"><span>PK Rules</span></div>
              <div v-if="currentTab == 4"><span>User Guideline</span></div>
              <div v-if="currentTab == 5"><span>Privacy Policy</span></div>
              <div v-if="currentTab == 6"><span>Apply to determinate Account</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer class="forPC" />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'MemberSetting',
  data() {
    return {
      currentTab: 1,
      userName: '',
      userPassword: '',
      currentPassword: '',
      confirmPassword: '',
      updateConfirm: false,
      showBlock: false
    }
  },
  computed: {
    ...mapGetters('user', {
      userData: 'userNamePassword'
    })
  },
  watch: {
    userPassword(val) {
      if(this.userPassword !== '') {
        if(this.currentPassword !== '' && this.confirmPassword !== '' && (this.currentPassword === this.confirmPassword)) {
          this.updateConfirm = true
        }
      }
    },
    currentPassword(val) {
      if(this.currentPassword !== '') {
        if(this.userPassword !== '' && this.confirmPassword !== '' && (this.currentPassword === this.confirmPassword)) {
          this.updateConfirm = true
        }
      }
    },
    confirmPassword(val) {
      if(this.confirmPassword !== '') {
        if(this.userPassword !== '' && this.currentPassword !== '' && (this.currentPassword === this.confirmPassword)) {
          this.updateConfirm = true
        }
      }
    }
  },
  created() {
    if(this.userData) {
      this.userName = this.userData.name
      this.userPassword = this.userData.password
    }
  },
  methods: {
    ...mapActions('user', ['updatePassword']),
    backBtn() {
      this.$router.go(-1)
    },
    saveUpdate() {
      this.updatePassword(this.confirmPassword);
      alert('password success changed')
    },
    showEachBlock(val) {
      this.currentTab = val
      this.showBlock = true
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
.membership-page {
  padding-top: 140px;
  background: #eae9f4;
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
        color: #FFF;
      }
    }
  }
  .member-content {
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
        background: #7161EF;
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
      display: flex;
      width: 80%;
      margin: 0 auto;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      .member-left {
        width: 248px;
        @media screen and (max-width: 768px) {
          margin-right: 0;
          width: 100%;
        }
        .setting-txt {
          font-weight: 400;
          font-size: 20px;
          padding-left: 10px;
          color: #414141;
        }
        .active-setext {
          font-weight: 400;
          font-size: 20px;
          padding-left: 10px;
          color: #7161EF;
        }
        .left-block {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 1rem;
          .each-row {
            display: flex;
            align-items: center;
            padding: 5px 1rem;
            cursor: pointer;
            @media screen and (max-width: 768px) {
              padding: 8px 1rem;
              justify-content: space-between;
            }
          }
          .left-row {
            @media screen and (max-width: 768px) {
              display: flex;
              align-items: center;
            }
          }
          .arrow-icon {
            width: 8px;
            // height: 15px;
          }
        }
      }
      .member-right {
        margin: auto;
        @media screen and (max-width: 768px) {
          display: none;
        }
        .tocenter {
          background: #FFF;
          border-radius: 12px;
          margin-top: 2rem;
          margin-right: 248px;
          padding: 27px 2rem;
          text-align: center;
          width: 380px;
        }
      }
    }
  }
  .setting-icon{
    width: 24px;
    height: 24px;
  }
  .pwd-div {
    margin-bottom: 26px;
    text-align: center;
    .old-pwd {
      font-weight: 400;
      font-size: 14px;
      color: #7161EF;
      text-align: left;
      width: 90%;
      margin: auto;
      padding-left: 7px;
    }
    .pwd-css {
      background: #FAF6FF;
      border-radius: 12px;

      border: none;
      width: 90%;

      padding-left: 1rem;
      height: 48px;
      min-height: 48px;
      margin: 0 auto;
      font-size: 1.5rem;
    }
    .pwd-css:focus {
      outline: none;
    }
    .pwd-css::placeholder {
    }
    .pwd-css {
      margin-top: 5px;
    }
    input[type='password'] {
      
    }
  }
  .confirm-block {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 75px;
    .confirm-btn, .update-btn {
      border-radius: 6px;

      width: 100px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .confirm-btn {
      background: #7161EF;
      cursor: pointer;
    }
    .update-btn {
      background: #B2ADD7; 
    }
    .confirm-text {
      font-weight: 700;
      font-size: 14px;
      color: #FFF;
    }
  }
}
</style>