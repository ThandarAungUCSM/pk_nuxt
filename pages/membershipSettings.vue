<template>
  <div>
    <Header class="forPC" />
    <div class="membership-page">
      <div class="member-content">
        <div class="formobile titlem">
          <div class="pc-back">
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
            <div class="left-block formobile">
              <div class="each-row">
                <div class="left-row">
                  <img src="../assets/pc/active-shield.png" class="setting-icon">
                  <span class="setting-txt">更改密碼</span>
                </div>
                <img src="../assets/mobile/rightArrow.png" class="arrow-icon" @click="currentTab = 1">
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
          </div>
          <div class="member-right">
            <div v-if="currentTab == 1"><span>change password</span></div>
            <div v-if="currentTab == 2"><span>language</span></div>
            <div v-if="currentTab == 3"><span>PK Rules</span></div>
            <div v-if="currentTab == 4"><span>User Guideline</span></div>
            <div v-if="currentTab == 5"><span>Privacy Policy</span></div>
            <div v-if="currentTab == 6"><span>Apply to determinate Account</span></div>
          </div>
        </div>
      </div>
    </div>
    <Footer class="forPC" />
  </div>
</template>
<script>
export default {
  name: 'MemberSetting',
  data() {
    return {
      currentTab: 1
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
        margin-right: 3rem;
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
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }
  }
  .setting-icon{
    width: 24px;
    height: 24px;
  }
}
</style>