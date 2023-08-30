<template>
  <div>
    <header>
      <header-top />
      <header-img />
    </header>
    <main>
      <models />
      <catalog />
      <pay-delivery />
      <feedback />
    </main>
    <mangal-footer />
    <catalog-modal />
    <order-modal />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

import HeaderTop from "./components/HeaderTop.vue";
import HeaderImg from "./components/HeaderImg.vue";
import Models from "./components/Models.vue";
import Catalog from "./components/Catalog.vue";
import OrderModal from "./components/OrderModal.vue";

export default {
  components: {
    HeaderTop,
    HeaderImg,

    // блоки main
    Models,
    Catalog,
    Feedback: defineAsyncComponent(() => import("./components/Feedback.vue")),
    MangalFooter: defineAsyncComponent(() => import("./components/Footer.vue")),
    PayDelivery: defineAsyncComponent(() =>
      import("./components/PayDelivery.vue")
    ),

    // Модальные Окна
    CatalogModal: defineAsyncComponent(() =>
      import("./components/CatalogModal.vue")
    ),
    OrderModal,
  },
};
</script>
