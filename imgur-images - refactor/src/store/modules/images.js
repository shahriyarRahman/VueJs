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
    commit("setImages", response.data.data);
  },
  async uploadImages({ rootState }, images) {
    const promises = Array.from(images).map((image) => {
      const formData = FormData();
      //to actually attach image reference key to actual image
      formData.append("image", image);
      api.upload(formData);
    });
    await Promise.all(promises);
    router.push("/");
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
