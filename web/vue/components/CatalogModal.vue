<template>
  <div id="catalog-modal">
    <div class="catalog-modal">
      <div class="catalog-modal__slider">
        <my-slider-gallery
          v-if="updSlider"
          class="catalog-modal__img-slider"
          :imgSrc="'build/images/promo/catalog/modal/'"
          :images="getCatalogModalMangal.images"
        />
      </div>
      <div class="catalog-modal__button">
        <button
          class="button button-order"
          @click="openOrderModal__item(getCatalogModalMangal.id)"
        >
          Заказать
        </button>
        <a
          class="button button-ozon"
          :href="getCatalogModalMangal.ozon"
          target="_blank"
          >Купить на Ozon</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MySliderGallery from "../UI/MySliderGallery.vue";

export default {
  data() {
    return {
      updSlider: false,
    };
  },
  computed: mapGetters(["getCatalogModalMangal"]),
  components: {
    MySliderGallery,
  },
  mounted() {
    //обновление слайдера
    var elemToObserve = document.getElementById("catalog-modal");
    var prevClassState = elemToObserve.classList.contains("fancybox__content");
    let context = this;
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.attributeName == "class") {
          var currentClassState =
            mutation.target.classList.contains("fancybox__content");
          if (prevClassState !== currentClassState) {
            prevClassState = currentClassState;
            if (currentClassState) {
              context.updSlider = true;

              setTimeout(() => {
                document
                  .querySelectorAll(
                    "#catalog-modal .catalog-modal__img-slider .swiper-pagination-bullet"
                  )
                  [context.getCatalogModalMangal.activeIndex].click();
              }, 10);
            } else {
              context.updSlider = false;
            }
          }
        }
      });
    });
    observer.observe(elemToObserve, { attributes: true });
  },

  methods: {
    ...mapMutations(["openOrderModal"]),
    openOrderModal__item(id) {
      Fancybox.close();
      this.openOrderModal(id);
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#order-modal",
          },
        ]);
      }, 20);
    },
  },
};
</script>

<style lang="scss">
#catalog-modal {
  max-width: 645px;
  background: #ffffff;
  border-radius: 10px;
  display: none;
  padding: 0;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 400px;
  }

  .catalog-modal {
    padding: 30px;

    @media (max-width: 768px) {
      padding: 20px;
    }

    &__button {
      margin-top: 30px;
      display: flex;
      width: 100%;

      @media (max-width: 768px) {
        flex-direction: column;
      }

      a,
      button {
        width: 100%;
        &:first-child {
          margin-right: 20px;

          @media (max-width: 768px) {
            margin-right: auto;
            margin-bottom: 10px;
          }
        }

        @media (max-width: 768px) {
          font-size: 18px;
          line-height: 19px;
          width: 238px;
          margin: 0 auto;
        }
      }
    }
    &__slider {
      background: #f9f9f9;
      border-radius: 10px;
      position: relative;
    }
  }
}
</style>
