<template>
  <ul class="list-group container-fluid">
    <VideoListItem
      v-for="video in listOfVideos"
      :key="video.etag"
      :video="video"
      @videoSelect="onVideoSelect"
    >
    </VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from "./VideoListItem";
export default {
  name: "VideoList",
  components: {
    VideoListItem,
  },
  //method 1 to use props
  //   props: ["listOfVideos"],
  //method 2 to use props
  props: {
    listOfVideos: Array,
  },
  methods: {
    onVideoSelect(selectedVideo) {
      this.$emit("videoSelect", selectedVideo);
    },
  },
};
</script>

<style></style>
