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
};

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true, 
};
