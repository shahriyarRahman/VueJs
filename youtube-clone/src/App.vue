<template>
  <div class="container">
    <SearchBar @searchChange="onSearchChange"></SearchBar>
    <!-- <test></test> -->
    <div class="row">
      <div class="col-lg-8">
        <VideoDetail :video="selectedVideo"></VideoDetail>
      </div>
      <div class="col-lg-4">
        <VideoList :listOfVideos="videos" @videoSelect="onVideoSelect"></VideoList>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
// import test from "./components/test";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
const API_KEY = "AIzaSyAkEOI929DGsCukgvr4tIV8WeKsoFU_seE";
export default {
  name: "App",
  components: {
    SearchBar,
    // test,
    VideoList,
    VideoDetail,
  },
  data() {
    return {
      videos: [],
      selectedVideo: null,
    };
  },
  methods: {
    onSearchChange(searchTerm) {
      const axiosInstance = axios.create({
        baseURL: "https://www.googleapis.com/youtube/v3/",
      });
      axiosInstance
        .request({
          url: `search`,
          method: "GET",
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            q: searchTerm,
          },
        })
        .then((response) => {
          this.videos = response.data.items;
        })
        .catch((err) => console.log(err));
    },
    onVideoSelect(video) {
      this.selectedVideo = video;
    },
  },
};
</script>
