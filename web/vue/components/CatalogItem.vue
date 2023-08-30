<template>
  <div class="catalog-item__container">
    <div class="catalog-item">
      <transition name="fade">
        <div class="catalog-item__wrapper" v-show="showitem">
          <div :class="['catalog-item__img', 'catalog-item__img-' + index]">
            <div
              @click="openCatalogModal__item(item.id, item.images, item.ozon)"
              class="catalog-item__img-full"
            ></div>

            <div
              class="click-box"
              @click="openCatalogModal__item(item.id, item.images, item.ozon)"
            ></div>
            <my-slider-gallery
              ref="sliderItem"
              class="catalog-item__img-slider"
              :imgSrc="'build/images/promo/catalog/'"
              :images="item.images"
              :alt="item.alt"
            />
          </div>
          <div class="catalog-item__content">
            <h2 v-html="item.name"></h2>

            <div class="char-box">
              <p v-for="(char, i) in item.chars" :key="i">
                <span v-html="char[0]"></span> {{ char[1] }}
              </p>
            </div>

            <div class="price-box">
              <p class="new">{{ item.price.toLocaleString() }} РУБ.</p>
              <p class="old">{{ item.oldPrice.toLocaleString() }} РУБ.</p>
            </div>

            <div class="button-box">
              <button
                class="button button-order"
                @click="openOrderModal__item(item.id)"
              >
                Заказать
              </button>
              <a class="button button-ozon" :href="item.ozon" target="_blank"
                >Купить на Ozon</a
              >
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import MySliderGallery from "../UI/MySliderGallery.vue";
import { mapMutations } from "vuex";

export default {
  props: {
    item: Object,
    showitem: {
      type: Boolean,
    },
    index: Number,
  },
  methods: {
    ...mapMutations(["openCatalogModal", "openOrderModal"]),
    openCatalogModal__item(id, images, ozon) {
      let activeIndex = [
        ...document.querySelectorAll(
          "#catalog .catalog-item__img-" +
            this.index +
            " .catalog-item__img-slider .swiper-pagination-bullet "
        ),
      ].findIndex((el) =>
        el.classList.contains("swiper-pagination-bullet-active")
      );

      this.openCatalogModal({
        id: id,
        images: images,
        ozon: ozon,
        activeIndex: activeIndex,
      });

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#catalog-modal",
            autoFocus: false,
          },
        ]);
      }, 200);
    },
    openOrderModal__item(id) {
      this.openOrderModal(id);
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#order-modal",
            autoFocus: false,
          },
        ]);
      }, 10);
    },
  },

  components: {
    MySliderGallery,
  },
};
</script>

<style lang="scss">
@import "../../scss/_mixins.scss";

.catalog-item {
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  height: 100%;

  &__container {
    max-width: 100%;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: minmax(210px, 300px) minmax(170px, 277px);
    gap: 30px;

    @media (max-width: 1280px) {
      grid-template-columns: minmax(155px, 300px) minmax(170px, 277px);
      gap: 20px;

      .slider-gallery__controllers .slider-gallery__pagination {
        gap: 8px;
      }
    }

    @media (max-width: 1024px) {
      grid-template-columns: minmax(200px, 300px);
      height: 100%;
      grid-template-rows: 355px auto;
      //875
    }

    @media (max-width: 992px) {
      justify-content: center;
    }

    @media (max-width: 576px) {
      grid-template-rows: 310px auto;
    }
  }

  &__content {
    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }

    h2 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 28px;
      color: #323232;
      margin-bottom: 15px;
      width: calc(100% + 4px);

      @media (max-width: 1024px) {
        font-size: 20px;
        @media (min-width: 769px) {
          @include fluidFontSize(16, 24, 425, 1920);
        }
      }

      @media (max-width: 768px) and (min-width: 577px) {
        font-size: 18px;
      }

      @include fluidFontSize(16, 24, 425, 1920);
    }

    .char-box {
      p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        color: #323232;
        white-space: nowrap;

        &:not(:last-child) {
          margin-bottom: 10px;
        }

        span {
          font-weight: 500;
        }
      }
    }

    .price-box {
      display: flex;
      gap: 15px;
      align-items: flex-end;
      margin: 25px 0;

      @media (max-width: 1280px) {
        margin: 21px 0;
      }

      p {
        font-family: "Roboto";
        font-style: normal;
        white-space: nowrap;
        color: #323232;
        line-height: 110%;
      }

      .new {
        font-weight: 600;
        font-size: 24px;

        @include fluidFontSize(20, 24, 425, 1920);
      }

      .old {
        font-weight: 300;
        font-size: 18px;
        text-decoration-line: line-through;

        @include fluidFontSize(15, 18, 425, 1920);
      }
    }

    .button-box {
      display: flex;
      flex-direction: column;

      .button {
        width: 100%;

        &:first-child {
          margin-bottom: 10px;
        }

        @media (max-width: 1360px) and (min-width: 993px) {
          padding: 15px;
          border-radius: 10px;
        }

        @media (max-width: 992px) {
          font-size: 18px;
        }

        @include fluidFontSize(18, 22, 425, 1440);
      }
    }
  }

  &__img {
    position: relative;
    background: #f9f9f9;
    border-radius: 10px;

    &-full {
      background-image: url("../../images/promo/full.png");
      width: 28px;
      height: 28px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: block;
      z-index: 6;
      transition: all 0.4s;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
      }
    }

    .click-box {
      cursor: pointer;
      position: absolute;
      width: 100%;
      height: 70%;
      left: 0;
      top: 50%;
      z-index: 4;
      transform: translateY(-50%);
    }

    &-slider {
      height: 100%;
      // display: flex;
      // align-items: flex-end;
      & > div {
        height: 100%;

        .img-wrap {
          display: flex;
          height: 100%;

          picture {
            align-self: end;
          }
        }
      }
    }
  }
}
</style>
