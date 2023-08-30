<template>
  <div class="feedback-item">
    <div class="feedback-item__header">
      <div class="feedback-item__img">
        <my-img
          :sorce="`build/images/promo/feedback/${item.img}`"
          :mobile="false"
          :alt="'отзывы пользователей'"
          :animation="false"
        />
      </div>
      <div class="feedback-item__title">
        <p class="feedback-item__title-name">{{ item.name }}</p>
        <p class="feedback-item__title-city" v-html="item.city"></p>
      </div>
    </div>
    <div class="feedback-item__content">
      <p v-html="item.text"></p>
    </div>
  </div>
</template>

<script>
import MyImg from "../UI/MyImg.vue";

export default {
  data() {
    return {};
  },
  components: {
    MyImg,
  },
  props: {
    item: Object,
  },
};
</script>

<style lang="scss">
@import "../../scss/_mixins.scss";

.feedback-item {
  padding: 50px;
  background: #f9f9f9;
  border-radius: 10px;
  height: auto;

  @media (max-width: 576px) {
    padding: 20px 15px;
  }

  &__header {
    display: flex;
  }

  &__img {
    width: 100%;
    max-width: 89px;
    margin-right: 30px;
    height: 89px;

    @media (max-width: 768px) {
      max-width: 65px;
      margin-right: 20px;
      height: 65px;
    }

    @media (max-width: 375px) {
      max-width: 55px;
      margin-right: 11px;
      height: 55px;
    }

    img {
      display: block;
    }
  }

  &__title {
    &-name {
      font-style: normal;
      font-weight: 600;
      font-size: 42px;
      line-height: 49px;
      color: #323232;
      @media (max-width: 1280px) {
        font-size: 32px;
      }

      @include fluidFontSize(22, 42, 425, 1920);

      @media (max-width: 768px) {
        font-size: 22px;
        line-height: 29px;
      }

      @media (max-width: 375px) {
        font-size: 20px;
      }
    }

    &-city {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 27px;
      color: #323232;
      @media (max-width: 768px) {
        font-size: 15px;
        line-height: 22px;
      }
    }
  }

  &__content {
    margin-top: 30px;

    @media (max-width: 768px) {
      margin-top: 20px;
    }

    p {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 135%;
      color: #323232;

      @include fluidFontSize(18, 20, 425, 1920);

      @media (max-width: 768px) {
        font-size: 15px;
        line-height: 22px;
      }
    }
  }
}
</style>