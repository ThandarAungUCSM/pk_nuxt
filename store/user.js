const state = () => {
  return {
    loginState: false
  };
};

const actions = {
  updateLogin({ state, commit }, logindata) {
    if (logindata != null) {
      commit("loginMutate", logindata);
    }
  },
};

const mutations = {
  loginMutate(state, logindata) {
    state.loginState = logindata
  },
};

const getters = {
  userLogin: state => {
    return state.loginState;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true, 
};
