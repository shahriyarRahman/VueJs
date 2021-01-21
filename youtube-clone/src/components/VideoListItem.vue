<template>
  <li class="list-group-item d-flex" @click="onVideoSelect">
    <img :src="thumbnailUrl" class="col-5 p-0 mr-3" alt="thumbnail" />
    <div class="col-7 p-0">
      <p>
        {{ video.snippet.title }}
      </p>
    </div>
  </li>
</template>
<script>
export default {
  name: "VideoListItem",
  props: {
    video: Object,
  },
  computed: {
    thumbnailUrl() {
      console.log(this.video.snippet.thumbnails.default.url);
      return this.video.snippet.thumbnails.default.url;
    },
  },
  methods: {
    onVideoSelect() {
      this.$emit("videoSelect", this.video);
    },
  },
};
</script>

<style>
li {
  cursor: pointer;
}
li:hover {
  background: #eeee;
}
</style>
