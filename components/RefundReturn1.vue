<template>
  <div>
    <div class="refund-div">
      <div class="title-row">
        <span class="retund-title">請選擇要退貨之商品</span>
      </div>
      <div>
        <div id="refundallId" class="select-all-txt1">
          <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全選</el-checkbox>
        </div>
        <el-checkbox-group id="refundeachId" v-model="checkedCities" class="checkGro" @change="handleCheckedEachChange">
          <div v-for="(eachproduct, idx) in cartLists" :key="idx" class="row-div">
            <el-checkbox :label="eachproduct">
            </el-checkbox>
            <div class="collapse-items1">
              <div class="menu-left">
                <div class="orderFalse">
                  <img class="menu-img" :src="eachproduct.imagePath" />
                </div>
                <div class="menu-txt">
                  <p class="common-menu-name">
                    {{eachproduct.name}}
                  </p>
                  <p class="common-menu-price">x {{eachproduct.count}}</p>
                </div>
              </div>
            </div>
          </div>
        </el-checkbox-group>
      </div>
    </div>
    <div class="btn-div" @click="nextPage(2)">
      <p class="btn-text">下一步</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RefundReturn1',
  props: ["productData"],
  data() {
    return {
      checkAll: false,
      checkedCities: [],
      isIndeterminate: true,
      cartLists: []
    }
  },
  created() {
    this.cartLists = this.productData
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? this.cartLists : [];
      this.isIndeterminate = false;
    },
    handleCheckedEachChange(value) {
      const checkedCount = value.length;
      this.checkAll = checkedCount === this.cartLists.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cartLists.length;
    },
    nextPage(val) {
      this.$emit("nextcompo", val)
    }
  }
}
</script>
<style lang="scss" scoped>
  
.refund-div {
  width: 393px;
  margin: auto;
  .retund-title {
    font-weight: 700;
    font-size: 12px;
    color: #2C2C2C;
    padding-left: 1rem;
  }
  .checkGro {
    background: #FFF;
    padding: 1.2rem 0;
    @media screen and (max-width: 768px) {
      margin-top: 70px;
    }
  }
  .row-div {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
    .collapse-items1 {
      padding: 0 2rem 0 1rem;
      font-size: 0.813rem;
      font-weight: 400;
      color: #4f4f4f;
      background: #fff;
      width: 95%;
      @media screen and (max-width: 768px) {
        padding-left: 1rem;
        padding-right: 1rem;
      }
      .menu-left {
        display: flex;
        align-items: center;
        padding-bottom: 0;
        @media screen and (max-width: 768px) {
          padding-bottom: 0px;
        }
        .orderFalse {
          position: relative;
          text-align: center;
          color: #fff;
        }
        .menu-img {
          width: 58px;
          height: 64px;
          border-radius: 5px;
    
          background: #FFFFFF;
          border-radius: 12px;
          filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1));
        }
        .menu-txt {
          display: flex;
          flex-direction: column;
          margin-left: 1rem;
          width: 100%;
          .menu-name {
          }
          .common-menu-name {
            padding-bottom: 7px;
            color: #3C3C3C;
            font-weight: 400;
            font-size: 12px;
            margin-bottom: 0;
            @media screen and (max-width: 768px) {
              font-size: 14px;
              width: 60%;
              word-wrap:break-word;
              white-space:normal;
            }
          }
          .common-menu-price {
            color: #3C3C3C;
            font-weight: 400;
            font-size: 12px;
            margin-bottom: 0;
            @media screen and (max-width: 768px) {
              font-size: 14px;
              width: 60%;
              word-wrap:break-word;
              white-space:normal;
            }
          }
          .limited-css {
            color: #828282;
            font-weight: 400;
            font-size: 0.875rem;
            .text1-limit {
              color: #828282;
              font-weight: 400;
              font-size: 0.875rem;
            }
            .limited-div {
              display: flex;
              .place-div {
                display: flex;
                align-items: center;
                padding-left: 15px;
                cursor: pointer;
              }
            }
            .placeofuse {
              color: #244c5a;
              font-weight: 500;
              padding-right: 5px;
              font-size: 0.875rem;
            }
            .arrow-css {
              width: 8px;
            }
          }
          .delivery-parent {
            width: 100%;
            padding-top: 2px;
            padding-bottom: 2px;
            .delivery {
              background: #f9f8f8;
              color: #bdbdbd;
            }
            .delivery1 {
              background: #fdfcfc;
              color: #e5e5e5;
            }
            .common-deli {
              display: flex;
              align-items: center;
              border-radius: 20px;
              padding: 0;
              margin: 0;
              font-weight: normal;
              width: 40%;
              @media screen and (max-width: 768px) {
                width: 55%;
              }
            }
            .meal-delivery {
              color: #E1460E;
              border: 2px solid #E1460E;
    
              background: #ffffff;
              box-sizing: border-box;
              box-shadow: 0px 0px 4px 2px rgba(206, 177, 125, 0.3);
            }
            .meal-delivery1 {
              color: #e7e0d1;
              border: 2px solid #f5efe5;
    
              background: #ffffff;
              box-sizing: border-box;
              box-shadow: 0px 0px 4px 2px rgba(206, 177, 125, 0.3);
            }
            .common-meal-deli {
              text-align: center;
              font-weight: 500;
              font-size: 0.875rem;
              border-radius: 18px;
              padding: 3px 5px;
    
              width: 50%;
              cursor: pointer;
            }
            .takeaway {
              padding: 3px 5px;
              font-size: 0.875rem;
            }
          }
        }
      }
    }
  }
  .row-div:last-child {
    margin-bottom: 0;
  }
  .select-all-txt1 {
    font-weight: 400;
    font-size: 14px;
    color: #000;
    border-radius: 6px;
    margin-bottom: 2px;
    cursor: pointer;
  }
  .title-row {
    height: 44px;
    display: flex;
    align-items: center;
    background: #FFF;
    margin-bottom: 2px;
  }
}
.btn-div {
  background: #E9B531;
  border-radius: 12px;
  width: 393px;
  height: 48px;
  margin: 80px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .btn-text {
    font-weight: 700;
    font-size: 1rem;
    color: #FFF;
    margin-bottom: 0;
  }
}
</style>