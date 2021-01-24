import api from "../../api/imgur";
import qs from "qs";
import { router } from "../../main";
const state = {
  token: window.localStorage.getItem("imgur_token"),
};
const getters = {
  isLoggedIn: (state) => {
    //!! turns any value to boolean
    return !!state.token;
  },
};
const actions = {
  //commit is the vuex store property used to call mutations
  //the first parameter is mutation name and second and so will be parameters to mutation
  logout: ({ commit }) => {
    commit("setToken", null);
    window.localStorage.removeItem("imgur_token");
  },
  login: () => {
    api.login();
  },
  finalizeLogin: ({ commit }, hash) => {
    const callback = qs.parse(hash.replace("#", ""));
    commit("setToken", callback.access_token);
    window.localStorage.setItem("imgur_token", callback.access_token);
    router.push("/");
  },
};
const mutations = {
  //every mutation can have multiple arguments which will be passed by Actions
  setToken: (state, token) => {
    state.token = token;
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
