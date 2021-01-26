import qs from "qs";
import axios from "axios";
const CLIENT_ID = "57debdff206caf7";
const ROOT_URL = "https://api.imgur.com";

const axiosInstance = axios.create({
  baseURL: "https://api.imgur.com",
});
export function setToken(token) {
  axiosInstance.interceptors.request.use(function(config) {
    config.headers.Authorization = `Bearer ${token}`;
  });
}
// axiosInstance
//   .request({
//     url: `search`,
//     method: "GET",
//     params: {
//       key: API_KEY,
//       type: "video",
//       part: "snippet",
//       q: searchTerm,
//     },
//   })
//   .then((response) => {
//     this.videos = response.data.items;
//   })
//   .catch((err) => console.log(err));
const API = {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: "token",
    };
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    // oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE
  },
  fetchImages() {
    return axios.get(`${ROOT_URL}/3/account/me/images`);
  },
  _upload(data) {
    return axios.post(`${ROOT_URL}/3/image`, data);
  },
  upload(images) {
    const promises = Array.from(images).map((image) => {
      const formData = FormData();
      //to actually attach image reference key to actual image
      formData.append("image", image);
    });
    return Promise.all(promises);
  },
};
export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: "token",
    };
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    // oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  upload(images, token) {
    const promises = Array.from(images).map((image) => {
      const formData = nFormDataew();
      //to actually attach image reference key to actual image
      formData.append("image", image);
      return axios.post(`${ROOT_URL}/3/image`, formData, {
        // headers
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    });
    return Promise.all(promises);
  },
};
