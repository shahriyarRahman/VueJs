import Vue from "vue";
import VueRouter from "vue-router";
//we do not need to specify the file name if its name is index
import store from "./store";

//components
import App from "./App";
import AuthHandler from "./components/AuthHandler";
import Gallery from "./components/Gallery";
import UploadForm from "./components/UploadForm";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/oauth2/callback", component: AuthHandler },
    { path: "/", component: Gallery },
    { path: "/upload", component: UploadForm },
  ],
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
