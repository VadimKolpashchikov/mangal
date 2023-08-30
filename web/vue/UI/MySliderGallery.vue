<template>
  <div class="slider-gallery">
    <div ref="sliderGallery">
      <div class="swiper-wrapper">
        <div v-for="(image, index) in images" :key="index" class="swiper-slide">
          <div class="img-wrap">
            <picture>
              <source :srcset="imgSrc + image + '.webp'" type="image/webp" />
              <img
                draggable="false"
                :src="imgSrc + image + '.png'"
                :alt="alt"
                loading="lazy"
              />
            </picture>
          </div>

          <div class="swiper-lazy-preloader"></div>
        </div>
      </div>

      <div class="slider-gallery__controllers">
        <div ref="sliderGallery__prev" class="slider-gallery__prev">
          <svg
            width="27"
            height="16"
            viewBox="0 0 27 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26 9C26.5523 9 27 8.55228 27 8C27 7.44772 26.5523 7 26 7L26 9ZM0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31946 8.07107 0.928931C7.68054 0.538406 7.04738 0.538406 6.65686 0.92893L0.292893 7.29289ZM26 7L1 7L1 9L26 9L26 7Z"
              fill="#323232"
            />
          </svg>
        </div>
        <div
          ref="sliderGallery__pagination"
          class="slider-gallery__pagination"
        ></div>
        <div ref="sliderGallery__next" class="slider-gallery__next">
          <svg
            width="27"
            height="16"
            viewBox="0 0 27 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM1 9H26V7H1V9Z"
              fill="#323232"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination } from "swiper";
export default {
  mounted() {
    const sliderGallery = new Swiper(this.$refs.sliderGallery, {
      spaceBetween: 10,
      slidesPerView: 1,
      slidesPerGroup: 1,
      grabCursor: this.swiperSettings.touch,
      loop: this.swiperSettings.loop,
      lazy: true,
      pagination: {
        el: this.$refs.sliderGallery__pagination,
        type: "bullets",
        clickable: true,
      },
      allowTouchMove: this.swiperSettings.touch,
      navigation: {
        nextEl: this.$refs.sliderGallery__next,
        prevEl: this.$refs.sliderGallery__prev,
      },
      modules: [Navigation, Pagination],
    });
  },

  props: {
    images: Array,
    imgSrc: String,
    alt: {
      type: String,
      default: "Изображение",
    },
    swiperSettings: {
      type: Object,
      default: {
        touch: false,
        loop: true,
      },
    },
  },
};
</script>

<style lang="scss">
.slider-gallery {
  .swiper-lazy-preloader {
    border-color: #8bc34a;
    border-top-color: transparent;
    animation: rotated 1s ease 2;

    @keyframes rotated {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .swiper-slide {
    height: auto;
  }

  overflow: hidden;

  &__controllers {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;

    .slider-gallery__next,
    .slider-gallery__prev {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    .slider-gallery__pagination {
      width: auto;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;

      .swiper-pagination-bullet {
        margin: 0;
        width: 9px;
        height: 9px;
        border: 1px solid #323232;
        opacity: 1;
        background: transparent;

        &-active {
          background: #323232;
        }
      }
    }
  }
}
</style>
