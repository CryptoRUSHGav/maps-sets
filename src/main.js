// Import Vue
import Vue from "vue";
import VueRouter from "vue-router";

// Note: Using an Alias in Webpack
import "styles/index.scss";

// Import Vue App, routes, store
import App from "./components/App.vue";

new Vue({
  el: "#app",
  render: (h) => h(App),
});

// Note: Most likely not needed !!
// if (module.hot) {
// module.hot.accept();
// }
