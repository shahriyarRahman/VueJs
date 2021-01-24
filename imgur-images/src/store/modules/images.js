import api from "../../api/imgur";
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
  async fetchImages: ({ rootState }) => {
 const response = await api.fetchImages(rootState.auth.token);
 console.log(response)
  },
};
