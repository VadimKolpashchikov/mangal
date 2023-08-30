<template>
  <section id="models">
    <div class="content-container">
      <div class="title-box">
        <h2 class="title">
          Приготовьтесь к горячему сезону <br />
          шашлыков&nbsp;и&nbsp;барбекю!
        </h2>
      </div>

      <div class="models__swiper">
        <div class="swiper-wrapper">
          <models-item
            class="swiper-slide"
            v-for="(item, i) in items"
            :key="i"
            :item="item"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper } from "swiper";

import ModelsItem from "./ModelsItem.vue";
export default {
  name: "Models",
  components: {
    ModelsItem,
  },
  data() {
    return {
      items: [
        {
          name: "Костровая чаша-мангал",
          img: "model-1",
          list: [
            "Гибридная сборка (4 положения: мангал, гриль, чаша, микс)",
            "Кочерга-мешалка в комплекте",
            "Удобные прорези-пазы для размещения и фиксации шампуров",
            "Вместилище для огня с высокими стенками (250&nbsp;мм)",
            "Толстая сталь (3&nbsp;мм)",
          ],
          extraList: [
            "Уникальные фиксаторы конструкции увеличивают жёсткость каркаса — мангал прослужит в 2-3 раза дольше.",
            "Основание для гриль-решётки",
            "Складная конструкция (до размеров чемоданчика)",
          ],
        },
        {
          name: "Разборный мангал",
          img: "model-2",
          list: [
            "Вместилище для огня клиновидной формы (с расширением вверх)",
            "Толстая сталь (2&nbsp;мм)",
            "Уникальные фиксаторы конструкции увеличивают жёсткость каркаса — мангал прослужит в 2-3 раза дольше",
            "Основание для гриль-решётки",
            "Складная конструкция (до размеров чемоданчика)",
          ],
        },
        {
          name: "Мангал на ножках",
          img: "model-3",
          list: [
            "Наибольшая площадь жарки и оптимальная высота стенок",
            "Толстая сталь (2&nbsp;мм)",
            "Поверхность находится на уровне стола (длина ножек – 580&nbsp;мм)",
            "Удобные прорези-пазы для размещения и фиксации шампуров",
            "Складная конструкция (до размеров чемоданчика)",
          ],
        },
      ],
    };
  },
  mounted() {
    const myPresentsSwiper = new Swiper(".models__swiper", {
      spaceBetween: 30,
      slidesPerView: "auto",
      slidesPerGroup: 1,
      grabCursor: true,
      loop: false,

      breakpoints: {
        577: {
          slidesPerView: "auto",
          slidesPerGroup: 1,
          spaceBetween: 30,
        },

        426: {
          slidesPerView: "auto",
          slidesPerGroup: 1,
          spaceBetween: 20,
        },

        0: {
          slidesPerView: 1.2,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
      },
    });
  },
};
</script>

<style lang="scss">
#models {
  max-width: 1920px;
  padding: 75px 0 150px;
  margin: 0 auto;
  background-image: url("../../images/promo/models/models-bg_left.png"),
    url("../../images/promo/models/models-bg_right.png");
  background-position: left 340px, right 300px;
  background-repeat: no-repeat, no-repeat;
  overflow: hidden;

  @media (max-width: 1536px) {
    background-position: right -130px bottom -35px, left -60px top 35px;
    background-size: auto, 325px;
  }

  @media (max-width: 1100px) {
    background-position: right -130px bottom -30px, left -60px top 100px;
  }

  @media (max-width: 768px) {
    padding: 50px 0 100px;
    background-size: 300px, 159px;
    background-position: right -80px bottom -27px, left -60px top 100px;
  }

  .models__swiper {
    max-width: 100%;
  }

  .title {
    br {
      display: none;

      @media (max-width: 1536px) and (min-width: 768px) {
        display: block;
      }
    }
  }
}
</style>
