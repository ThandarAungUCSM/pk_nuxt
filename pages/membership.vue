<template>
  <div>
    <Header />
    <div class="membership-page">
      <div class="member-content">
        <div class="title-div">
          <img src="../assets/pc/settings.png" class="setting-icon">
          <span class="setting-title">設定</span>
        </div>
        <div class="member-block">
          <div class="member-left">
            <div class="left-block">
              <div class="each-row" @click="currentTab = 1">
                <img src="../assets/pc/shield.png" class="setting-icon">
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
    <Footer page="productDetail" />
  </div>
</template>
<script>
export default {
  name: 'MemberPage',
  data() {
    return {
      currentTab: 1
    }
  }
}
</script>
<style lang="scss" scoped>
.membership-page {
  padding-top: 140px;
  background: #eae9f4;
  .title-div {
    text-align: center;
    padding: 1rem;
    .setting-title {
      font-weight: 400;
      font-size: 16px;
      color: #000;
      padding-left: 1rem;
    }
  }
  .member-content {
    .member-block {
      display: flex;
      width: 80%;
      margin: 0 auto;
      .member-left {
        margin-right: 3rem;
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
          }
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