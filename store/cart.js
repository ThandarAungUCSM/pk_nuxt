const state = () => {
  return {
    quantity: null,
    cartLists: []
  };
};

const actions = {
  addProductToCart({ state, commit }, product) {
    if (product != null) {
      const cartItem = state.cartLists.find(item => item.bid === product.bid);
      if(!cartItem) {
        commit("pushProductToCart", product);
      } 
    }
  },
  setCartQty({ commit }, data) {
    commit("SET_QTY", data);
  },
  setCartList({ commit }, data) {
    commit("SET_CART_LIST", data);
  },
  removeProductFromCart({ state, commit }, bid) {
    // console.log("[Action] removeProductFromCart() bid=", bid);
    // if (bid != null) {
    //   const cartItem = state.items.find(item => item.data.bid === bid);
    //   if (cartItem) {
    //     commit("popProductFromCart", cartItem);
    //   }
    // }
  },
};

const mutations = {
  pushProductToCart(state, product) {
    state.cartLists.push({
      data: product,
      quantity: state.quantity+1,
    });
    state.quantity+=1
  },
  "SET_QTY"(state, data) {
    state.quantity = data;
  },
  "SET_CART_LIST"(state, data) {
    state.cartLists = data;
  },
};

const getters = {
  cartProducts: state => {
    return state.cartLists;
  },
  cartTotalPrice: (state, getters) => {
    // if(groupItems) {
    //   return groupItems.reduce((total, product) => {
    //     if (product != null && product.data != null) return total + product.data.price * product.quantity;
    //   }, 0);
    // } else return 0;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true, 
};
