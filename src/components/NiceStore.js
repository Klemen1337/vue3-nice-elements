export default {
  namespaced: true,

  // ---------------------- State ----------------------
  state: {
    sideViewWidth: 500,
  },

  // ---------------------- Getters ----------------------
  getters: {},

  // ---------------------- Mutations ----------------------
  mutations: {
    changeSideViewWidth(state, data) {
      state.sideViewWidth = data;
    },
  },

  // ---------------------- Actions ----------------------
  actions: {},
};
