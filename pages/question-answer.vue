<template>
  <div>
    <div>
      <Header page="QA" />
      <div id="QAId" class="QACSS">
        <div class="title-block">
          <img src="../assets/pc/qa-icon.png" class="qa-icon">
          <span class="qa-text">常見問題</span>
        </div>
        <div class="content-block">
          <div class="each-item">
            <p class="category-name">分類名稱</p>
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item name="1" class="p-item">
                <template slot="title">
                  <span class="pkcoin-text">如何獲得PK幣?</span>
                </template>
                <div>
                </div>
              </el-collapse-item>
              <el-collapse-item name="2" class="p-item">
                <template slot="title">
                  <span class="pkcoin-text">目前有哪些遊戲可以連動？</span>
                </template>
              </el-collapse-item>
            </el-collapse>
          </div>
          <div class="each-item">
            <p class="category-name">分類名稱</p>
            <el-collapse v-model="activeNames1" @change="handleChange">
              <el-collapse-item name="1" class="p-item">
                <template slot="title">
                  <span class="pkcoin-text">如何獲得PK幣?</span>
                </template>
                <div>
                </div>
              </el-collapse-item>
              <el-collapse-item name="2" class="p-item">
                <template slot="title">
                  <span class="pkcoin-text">目前有哪些遊戲可以連動？</span>
                </template>
              </el-collapse-item>
              <el-collapse-item name="3" class="p-item">
                <template slot="title">
                  <span class="pkcoin-text">目前有哪些遊戲可以連動？</span>
                </template>
              </el-collapse-item>
              <el-collapse-item name="4" class="p-item">
                <template slot="title">
                  <span class="pkcoin-text">目前有哪些遊戲可以連動？</span>
                </template>
              </el-collapse-item>
              <el-collapse-item name="5" class="p-item">
                <template slot="title">
                  <span class="pkcoin-text">目前有哪些遊戲可以連動？</span>
                </template>
              </el-collapse-item>
              <el-collapse-item name="6" class="p-item">
                <template slot="title">
                  <span class="pkcoin-text">目前有哪些遊戲可以連動？</span>
                </template>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
      <Footer page="QA" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyOrder',
  data() {
    return {
      activeNames: [],
      activeNames1: [],
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>
<style lang="scss" scoped>
.QACSS {
  padding-top: 140px;
  background: #eae9f4;
  text-align: center;
  // height: calc(100vh - 80px);
  // min-height: calc(100vh - 80px);
  // position: relative;
  padding-bottom: 100px;
  @media screen and (max-width: 768px) {
    padding-top: 70px;
    background: #f4f4f4;
    // height: 100vh;
    // min-height: 100vh;
  }
  .title-block {
    margin-top: 32px;
    margin-bottom: 13px;
    .qa-icon {
      width: 120px;
      @media screen and (max-width: 768px) {
        width: 90px;
      }
    }
    .qa-text {
      font-weight: 500;
      font-size: 20px;
      color: #7161EF;
      margin-left: 2rem;
      @media screen and (max-width: 768px) {
        font-size: 18px;
        margin-left: 1rem;
      }
    }
  }
  .content-block {
    background: #FFFFFF;
    border-radius: 12px;
    width: 496px;
    margin: auto;
    padding: 2rem 1.5rem;
    text-align: left;
    @media screen and (max-width: 768px) {
      background: #f4f4f4;
      padding-left: 0;
      padding-right: 0;
      width: 100%;
    }
    .each-item {
      margin-bottom: 1.8rem;
      @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
      }
      .category-name {
        font-weight: 700;
        font-size: 14px;
        color: #7161EF;
        margin-bottom: 10px;
        @media screen and (max-width: 768px) {
          color: #BDBDBD;
          padding: 0 1.5rem;
          margin-bottom: 1rem;
        }
      }
      .pkcoin-text {
        font-weight: 400;
        font-size: 16px;
        color: #7161EF;
      }
    }
  }
}
</style>
<style lang="scss">
#QAId {
  
  .p-item {
    @media screen and (max-width: 768px) {
      background: #FFF;
    }
    .el-icon-arrow-right:before {
      // color: #ceb17d;
      // content: "\002B";
      // font-size: 21px;
  
      background-image: url("../assets/mobile/rightarr-blue.png");
      background-size: 8px 12px;
      background-repeat: no-repeat;
      display: inline-block;
      width: 8px;
      height: 12px;
      transform: rotate(90deg);
      content: "";
    }
    i.el-collapse-item__arrow.el-icon-arrow-right.is-active:before {
      // color: #ceb17d;
      // content: '\002D';
      // content: "\2212";
      // font-size: 21px;
  
      background-image: url("../assets/mobile/rightarr-blue.png");
      background-size: 8px 12px;
      display: inline-block;
      width: 8px;
      height: 12px;
      transform: rotate(0deg);
      content: "";
    }
    .el-collapse-item__arrow {
      margin: 0 0 0 auto;
      transition: transform 0.3s;
      font-weight: 100;
      @media screen and (max-width: 768px) {
        margin: 0 -1px 0 auto;
      }
    }
    .el-collapse-item__arrow.is-active {
      transform: rotate(0deg);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .el-collapse-item__header {
      height: 48px;
      line-height: 48px;
      background-color: #fff;
      color: #1a1a1a;
      cursor: pointer;
      border-bottom: 2px solid #E7E1FF;
      font-size: 16px;
      font-weight: 600;
      transition: border-bottom-color 0.3s;
      outline: 0;
      padding-right: 7px;
      @media screen and (max-width: 768px) {
        padding: 0 1.5rem;
        border-bottom: 0 solid #E7E1FF;
        margin-bottom: 3px;
      }
    }
  }
  .el-collapse {
    border-top: 0px solid #ebeef5;
  }
  .el-collapse-item__wrap {
    border-bottom: 0px solid #EBEEF5;
  }
  .el-collapse-item__content {
    
  }
  .el-input--suffix .el-input__inner {
    background: #FAF7FF;
    height: 60px;
    border: none;
    font-weight: 400;
    font-size: 1rem !important;
    color: #7161FE !important;
  }
  .el-input--suffix .el-input__inner::placeholder {
    color: #7161FE !important;
  }
}
</style>
