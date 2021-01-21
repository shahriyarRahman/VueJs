<template>
  <div>
    <!-- <input type="text" @input="onInput" />
    <h1>{{ processInfo }}</h1> -->
    <ul>
      <!-- <li v-for="(nav, index) in navs" v-bind:key="index">{{ nav }}</li> -->
      <li v-for="(nav, index) in navs" :key="index">{{ nav }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      value: "",
      navs: ["home", "about us", "contact us", "shop", "menu"],
    };
  },
  computed: {
    processInfo: function() {
      if (this.value && this.value.length >= 3) {
        return this.value == "shahriyar" ? "Welcome Admin" : "Welcome newbie";
      } else {
        return "";
      }
    },
  },
  methods: {
    onInput: function(event) {
      this.value = event.target.value;
    },
  },
};
</script>

<style></style>
