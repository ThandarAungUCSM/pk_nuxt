<template>
  <div class="order-nav">
    <div v-for="order in orders" :key="order.groupType" class="paddingCss" :class="activeIndex == order.groupType ? 'activeCss' : ''" >
      <div v-if="activeIndex == order.groupType" class="order-active" @click="changeIndex(order.groupType)">
        {{ order.groupName }}
      </div>
      <div v-else class="order-nonactive" @click="changeIndex(order.groupType)">
        {{ order.groupName }}
        <!-- ({{ order.orderList.length }}) -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["orders"],
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    changeIndex(i) {
      console.log("changeIndex(", i, ")");
      this.activeIndex = i;
      this.$emit("changeIndex", i);
    },
  },
};
</script>
<style lang="scss" scoped>
.order-nav {
  display: flex;
  width: 60%;
  margin: 0 auto;
  justify-content: center;
  color: #dbdada;
  padding: 1.5rem 0;
  padding-top: 55px;

  position: relative;
  z-index: 10;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1.5rem 1rem;
    justify-content: space-between;
    background: #FFF;

    height: 44px;
    padding: 0 1rem 0;
    align-items: center;
    position: fixed;
  }
  .activeCss {
    @media screen and (max-width: 768px) {
      border-bottom: 2px solid #6100FF;
    }
  }
  .paddingCss {
    padding-left: 28px;
    padding-right: 28px;
    @media screen and (max-width: 768px) {
      padding-left: 5px;
      padding-right: 5px;

      height: 44px;
      display: flex;
      align-items: center;
    }
    .order-active {
      color: #6100FF;
      font-weight: 400;
      font-size: 1rem;
      border-bottom: 2px solid #6100FF;
      padding-bottom: 5px;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        font-weight: 400;
        font-size: 1rem;
        padding-bottom: 0;
        border-bottom: 0;
      }
    }
    .order-nonactive {
      color: #ABABAB;
      font-weight: 400;
      font-size: 1rem;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        font-weight: 400;
        font-size: 0.875rem;
      }
    }
  }
}
</style>
