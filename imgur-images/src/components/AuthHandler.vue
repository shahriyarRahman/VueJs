<template>
  <div>
    Please wait...
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AuthHandler",
  methods: {
    ...mapActions(["finalizeLogin"]),
  },
  //life cycle methods >> https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
  created() {
    this.finalizeLogin(window.location.hash);
  },
};
</script>

<style></style>
