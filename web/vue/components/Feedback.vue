<template>
  <section id="feedback">
    <div class="content-container">
      <div class="title-box">
        <h2 class="title">Отзывы пользователей FIREGRILL</h2>
      </div>

      <div class="row">
        <div class="feedback__swiper">
          <div class="swiper-wrapper">
            <feedback-item
              class="swiper-slide"
              v-for="(review, i) in reviews"
              :key="i"
              :item="review"
            />
          </div>
          <div class="feedback-navigation">
            <div class="feedback__swiper-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
              >
                <circle
                  cx="27"
                  cy="27"
                  r="27"
                  transform="matrix(-1 0 0 1 54 0)"
                  fill="#00AC07"
                />
                <path
                  d="M35.0626 25.9393C35.6484 26.5251 35.6484 27.4749 35.0626 28.0607L25.5167 37.6066C24.9309 38.1924 23.9811 38.1924 23.3954 37.6066C22.8096 37.0208 22.8096 36.0711 23.3954 35.4853L31.8806 27L23.3954 18.5147C22.8096 17.9289 22.8096 16.9792 23.3954 16.3934C23.9811 15.8076 24.9309 15.8076 25.5167 16.3934L35.0626 25.9393ZM33.002 25.5H34.002V28.5H33.002V25.5Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="feedback__swiper-next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
              >
                <circle
                  cx="27"
                  cy="27"
                  r="27"
                  transform="matrix(-1 0 0 1 54 0)"
                  fill="#00AC07"
                />
                <path
                  d="M35.0626 25.9393C35.6484 26.5251 35.6484 27.4749 35.0626 28.0607L25.5167 37.6066C24.9309 38.1924 23.9811 38.1924 23.3954 37.6066C22.8096 37.0208 22.8096 36.0711 23.3954 35.4853L31.8806 27L23.3954 18.5147C22.8096 17.9289 22.8096 16.9792 23.3954 16.3934C23.9811 15.8076 24.9309 15.8076 25.5167 16.3934L35.0626 25.9393ZM33.002 25.5H34.002V28.5H33.002V25.5Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation } from "swiper";
import FeedbackItem from "./FeedbackItem.vue";

export default {
  name: "Models",
  components: {
    FeedbackItem,
  },
  data() {
    return {
      reviews: [
        {
          img: "feedback-1",
          name: "Олег К.",
          city: "г. Красноярск",
          text: "Купил мангал для пикника, искал именно компактный сборный вариант, не одноразовый. Нашел то что нужно. Тяжеловат конечно, стенки не погнулись после использования. Есть фиксаторы для шампуров, удобно переворачивать. Шашлык бомбезный был.",
        },

        {
          img: "feedback-2",
          name: "Александр Ж.",
          city: "Пензенская обл. г.&nbsp;Мокшан",
          text: "Отличный толстостенный мангал, надеюсь прослужит долго. Брали специально складной, чтобы убирать на зиму и возит с собой на природу.",
        },

        {
          img: "feedback-3",
          name: "Алексей Р.",
          city: "г. Соликамск",
          text: "Топовый мангал,качество изделия на отлично, толщина металла внушает доверие. Подходит и для шампуров и для решетки.",
        },

        {
          img: "feedback-4",
          name: "Михаил К.",
          city: "г. Тверь",
          text: "Легко собирается и разбирается..Занимает мало места в собранном виде. Толстые стенки, стоит четко. Вырезан ровно и качественно без косяков. Кочергу не ожидал,  приятный сюрприз, не заметил в описании.",
        },

        {
          img: "feedback-5",
          name: "Геннадий С.",
          city: "г. Заозерный",
          text: "Хороший мангал. Пока не пробовали в деле. Сталь как и заявлено 2 мм. Влазит 10 шампуров.",
        },

        {
          img: "feedback-6",
          name: "Дмитрий Д.",
          city: "г. Южноуральск",
          text: "Опоздали с доставкой, но сам мангал понравился, сделан не кустарно. Искал на смену отслужившему старому мангалу, мой был шире, но привлекла толщина металла и хорошая скидка. Хороший мангал, тяжелый!! Есть фиксатор шампура, удобно.",
        },
      ],
    };
  },
  mounted() {
    const myFeedbackSwiper = new Swiper(".feedback__swiper", {
      spaceBetween: 30,
      slidesPerView: 2,
      slidesPerGroup: 1,
      grabCursor: true,
      loop: false,

      navigation: {
        nextEl: ".feedback__swiper-next",
        prevEl: ".feedback__swiper-prev",
      },

      breakpoints: {
        993: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },

        577: {
          slidesPerView: 1.4,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },

        0: {
          slidesPerView: 1.2,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
      },
      modules: [Navigation],
    });
  },
};
</script>

<style lang="scss">
#feedback {
  padding: 75px 0;
  @media (max-width: 992px) {
    padding: 60px 0;
  }
  @media (max-width: 576px) {
    padding: 50px 0;
  }

  .content-container {
    overflow: hidden;
  }

  .row {
    max-width: calc(100% - 27px * 2);
    position: relative;

    @media (max-width: 992px) {
      max-width: 100%;
    }
  }

  .feedback-navigation {
    @media (max-width: 992px) {
      display: none;
    }
  }

  .feedback__swiper-prev,
  .feedback__swiper-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    cursor: pointer;

    circle {
      transition: all 0.4s;
    }
    &:hover {
      circle {
        fill: #4bc350;
      }
    }
    &.swiper-button-disabled {
      cursor: default;
      circle {
        fill: #7dd380;
      }
    }
  }

  .feedback__swiper-next {
    right: -27px;
  }

  .feedback__swiper-prev {
    left: -27px;
    transform: translateY(-50%) rotate(180deg);
  }

  .swiper-slide {
    @media (min-width: 993px) {
      opacity: 0;
      transition: opacity 0.4s;

      &-active,
      &-next {
        opacity: 1;
      }
    }
  }
}
</style>
