import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./assets/styles/main.scss";
import "./plugins/directives/click-outside";
import i18n from "./locales/i18n";
import Vuelidate from "vuelidate";
// import api from "./service/apiService";
import VueMask from "v-mask";
import Moment from "vue-moment";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

Vue.config.productionTip = false;

Vue.component("app-loading", Loading);
Vue.use(VueMask);
Vue.use(Moment);
Vue.use(Vuelidate);
// Vue.use(api);
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
