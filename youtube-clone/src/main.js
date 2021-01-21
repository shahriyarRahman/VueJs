import Vue from "vue";
import App from "./App";

new Vue({
  // =====old method====
  //   render: function(h) {
  //     return h(App);
  //   },
  // =====new method====
  render: (h) => h(App),
}).$mount("#app");
