import qs from "qs";
import axios from "axios";
const CLIENT_ID = "57debdff206caf7";
const ROOT_URL = "https://api.imgur.com";

// const axiosInstance = axios.create({
//   baseURL: "https://api.imgur.com/3/account/me/images",
// });
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
};
