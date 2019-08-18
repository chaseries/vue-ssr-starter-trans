

const DEFAULT_TRANS = {
  name: "default",
  duration: { enter: 0, leave: 0 }
};


const state = {
  state: false,
  initFlag: false,
  transCurrent: DEFAULT_TRANS,
  transDefault: DEFAULT_TRANS
};


const mutations = {

  show (state) {
    state.state = true;
  },

  hide (state) {
    state.state = false;
  },

  triggerInitFlag (state) {
    state.initFlag = true;
  },

  setTransCurrent (state, trans) {
    state.transCurrent = trans;
  },

  setTransDefault (state, trans) {
    state.transDefault = trans;
  }
};


const actions = {

  show ({ commit }) {
    commit("show");
  },

  hide ({ commit }) {
    commit("hide");
  },

  setTransCurrent ({ commit }) {
    commit("setTransCurrent");
  },

  setTransDefault ({ commit }) {
    commit("setTransDefault");
  },

  initialize ({ commit }, settings) {

    if (settings && settings.transCurrent) {
      commit("setTransCurrent", settings.transCurrent);
    }

    if (settings && settings.transDefault) {
      commit("setTransDefault", settings.transDefault);
    }

    commit("show");
    commit("triggerInitFlag");
  }
};


export default {
  namespaced: true,
  state,
  mutations,
  actions
};
