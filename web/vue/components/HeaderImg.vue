<template>
  <section id="header-img">
    <h1 class="hidden-element">Разборные мангалы</h1>
    <div class="content-container">
      <my-img
        sorce="build/images/promo/header/mangal-promo"
        format=".jpg"
        :lazyLoad="false"
        alt="Новая линейка разборных мангалов и костровых чаш"
        :media="479"
      />
    </div>
  </section>
</template>

<script>
import MyImg from "../UI/MyImg.vue";
export default {
  name: "HeaderImg",
  components: {
    MyImg,
  },
};
</script>

<style lang="scss">
#header-img {
  position: relative;
  padding: 73px 0 75px;

  @media (max-width: 992px) {
    padding: 50px 0 60px;
  }

  @media (max-width: 576px) {
    padding: 20px 0 50px;
  }
}
</style>
