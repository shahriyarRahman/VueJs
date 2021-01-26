import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

//components
import App from "./App";
import Sample from "./components/Sample";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [{ path: "/", component: Sample }],
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
