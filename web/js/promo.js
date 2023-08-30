import "../scss/main.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { createApp } from "vue";
import App from "../vue/App.vue";
import store from "../vue/store/store.js";
import "./libraries/smoothScroll";

import LazyLoad from "vanilla-lazyload";

let lazyLoad = new LazyLoad({
  elements_selector: ".img-wrap .lazy",
  class_loaded: ".loaded",
  load_delay: 100,
});

createApp(App)
  .use(store)
  .mixin({
    data: function () {
      return {
        lazyLoad: null,
      };
    },
    created: function () {
      this.lazyLoad = lazyLoad;
    },
    mounted: function () {
      this.$nextTick(() => {
        this.lazyLoad.update();
      });
    },
  })
  .mount("#app");
