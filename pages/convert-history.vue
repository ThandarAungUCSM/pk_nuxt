<template>
  <div>
    <div>
      <Header class="forPC" />
      <div class="formobile titlem">
        <div class="pc-back">
          <img src="../assets/mobile/btn-return.png" class="back-icon">
        </div>
        <div class="title-div">
          <img src="../assets/mobile/notebook.png" class="notebook-icon">
          <span class="setting-title">兌換清單</span>
        </div>
        <div class="visibleHidden">hi</div>
      </div>
      <div class="order-parent">
        <b-container class="orderPage">
          <OrderNav :orders="orders" @changeIndex="changeIndex"></OrderNav>
          <div v-if="orders && orders.length > 0 && orders[activeIndex].orderList.length > 0" class="m-pad">
            <div v-for="order in orders[activeIndex].orderList" :key="order.orderId">
              <OrderFirst :order="order" :active-index="activeIndex" :service-history="serviceHistory" />
            </div>
          </div>
          <div v-else class="havenotOrder">
            <div>
              <img src="../assets/pc/empty-order-img.png" class="emptyCss" />
              <div style="text-align: center">
                <p class="order-empty">
                  尚未有訂單
                </p>
              </div>
              <div class="shopnowCss" @click="gotoHome">
                <span>去逛逛</span>
              </div>
            </div>
          </div>
        </b-container>
      </div>
      <Footer page="category" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyOrder',
  data() {
    return {
      pageName: "myOrder",
      activeIndex: 0,
      orders: [
        {
          groupName: "處理中",
          groupType: 0,
          orderList: [
            {
              orderNo: 111, 
              orderId: 1,
              customerServiceDate: '1.2.23', 
              returnApplyDate: '2.2.23', 
              orderDate: '29.1.23', 
              deliveryType:'type1', 
              storeName: 'name1', 
              productNameSet: 'productname1', 
              payAmount: 500, 
              totalQty: 100000, 
            },
            {
              orderNo: 222, 
              orderId: 2,
              customerServiceDate: '1.2.23', 
              returnApplyDate: '2.2.23', 
              orderDate: '29.1.23', 
              deliveryType:'type2', 
              storeName: 'name2', 
              productNameSet: 'productname2', 
              payAmount: 500, 
              totalQty: 100000, 
            },
            {
              orderNo: 333, 
              orderId: 3, 
              customerServiceDate: '1.2.23', 
              returnApplyDate: '2.2.23', 
              orderDate: '29.1.23', 
              deliveryType:'type3', 
              storeName: 'name3', 
              productNameSet: 'productname3', 
              payAmount: 500, 
              totalQty: 100000, 
            },
            {
              orderNo: 444, 
              orderId: 4, 
              customerServiceDate: '1.2.23', 
              returnApplyDate: '2.2.23', 
              orderDate: '29.1.23', 
              deliveryType:'type4', 
              storeName: 'name4', 
              productNameSet: 'productname4', 
              payAmount: 500, 
              totalQty: 100000, 
            }
          ],
        },
        {
          groupName: "已完成",
          groupType: 1,
          orderList: [],
        },
        {
          groupName: "退貨處理中",
          groupType: 2,
          orderList: [],
        },
        {
          groupName: "已退款",
          groupType: 3,
          orderList: [],
        }
      ],
      serviceHistory: 2,
    };
  },
  // async fetch() {
  //   while (!this.$nuxt.context.app || this.$nuxt.context.app.getTokening) {
  //     console.log("getTokening!!!...delay 1000ms");
  //     await this.delay(1000);
  //   }
  //   const rs = await this.$api17.getOrderList();
  //   if (rs.code === 1000) {
  //     const orders = rs.data;
  //     this.orders = orders;
  //   }
  // },
  // fetchOnServer: false,
  methods: {
    delay(time) {
      return new Promise(resolve => setTimeout(resolve, time));
    },
    changeIndex(i) {
      // console.log("changeIndex(", i, ")");
      this.activeIndex = i;
    },
    gotoHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
.forPC {
  @media screen and (max-width: 768px) {
    display: none;
  }
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
      padding-left: 0px;
      @media screen and (max-width: 768px) {
        color: #FFF;
      }
    }
    .notebook-icon {
      width: 24px;
      height: 24px;
      margin-right: 7px;
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

    position: fixed;
    width: 100%;
    z-index: 999;
  }
  .visibleHidden {
    visibility: hidden;
  }
}
.order-parent {
  background: #eae9f4;
  padding-top: 156px;
  padding-bottom: 70px;
  min-height: calc(100vh - 80px);
  @media screen and (max-width: 768px) {
    padding-top: 114px;
  }
}
.orderPage {
  @media screen and (max-width: 768px) {
    padding-top: 0px;
    width: 100%;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
  .m-pad {
    @media screen and (max-width: 768px) {
      padding-top: 44px;
    }
  }
}
.havenotOrder {
  display: flex;
  justify-content: center;
  align-items: center;
  
  position: absolute;
  top:50px;
  bottom: 0;
  left: 0;
  right: 0;
  
  // margin: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 550px);
    min-height: calc(100vh - 250px);
  }
  .emptyCss {
    width: 180px;
    height: 180px;
  }
  .order-empty {
    color: #A97BFF;
    font-weight: 400;
    font-size: 20px;
    margin-top: 1rem;
  }
  .shopnowCss {
    font-weight: 700;
    font-size: 1rem;
    color: #FFF;
    height: 36px;
    margin-top: 2rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    background: #E9B531;
    box-shadow: 0px 3px 7px rgba(233, 181, 49, 0.7);
    border-radius: 24px;
  }
}
</style>
