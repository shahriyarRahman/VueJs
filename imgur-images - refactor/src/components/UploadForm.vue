<template>
  <div class="dropper" v-if="isLoggedIn">
    <!-- $ sign indicates look for event object after the event is triggered and pass that value as an argument-->
    <input type="file" multiple accept="image/*" @change="uploadImages($event.target.files)" />
    <h4>Drag files to upload</h4>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "UploadForm",
  methods: { ...mapActions(["uploadImages"]) },
  computed: { ...mapGetters(["isLoggedIn"]) },
};
</script>

<style scoped>
.dropper {
  height: 30vh;
  border: 1px solid;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.dropper:hover {
  background: rgb(252, 252, 252);
}
.dropper input {
  width: 100%;
  height: 100%;
  border: 1px solid;
  position: absolute;
  opacity: 0;
}
</style>
