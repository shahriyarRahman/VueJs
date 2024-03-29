import api from "../../api/imgur";
import { router } from "../../main";
const state = {
  images: [],
};
const getters = {
  allImages: (state) => state.images,
};
const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
};
const actions = {
  //rootState gives all states present vuex instance
  async fetchImages({ rootState, commit }) {
    const response = await api.fetchImages(rootState.auth.token);
    console.log(response.data.data);
    commit("setImages", response.data.data);
  },
  async uploadImages({ rootState }, images) {
    await api.upload(images, rootState.auth.token);
    router.push("/");
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
