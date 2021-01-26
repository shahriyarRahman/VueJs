<template>
  <div>
    <div class="image-container" v-if="isLoggedIn">
      <img class="ui fluid image" v-for="image in allImages" :src="image.link" :key="image.id" />
    </div>
    <div v-else>
      <h2>Login to get started</h2>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Gallery",
  methods: {
    ...mapActions(["fetchImages"]),
  },
  computed: { ...mapGetters(["allImages", "isLoggedIn"]) },
  created() {
    this.fetchImages();
  },
};
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}
.image-container img {
  padding: 10px;
}
</style>
