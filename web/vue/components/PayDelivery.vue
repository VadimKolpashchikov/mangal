<template>
  <div id="pay-delivery">
    <div class="content-container">
      <div class="pay-delivery__wrapper">
        <div class="pay-delivery__item">
          <h2>Оплата</h2>
          <p>
            картой или наличными <br />
            при получении
          </p>

          <my-img
            class="pay-delivery__img"
            :sorce="`build/images/promo/pay-delivery/pay`"
            :alt="'Оплата картой'"
            :media="768"
          />
        </div>

        <div class="pay-delivery__item">
          <h2>Доставка</h2>
          <p>
            по всей России <br />
            от 1 до 7 дней
          </p>

          <my-img
            class="pay-delivery__img"
            :sorce="`build/images/promo/pay-delivery/delivery`"
            :alt="'Оплата картой'"
            :media="768"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyImg from "../UI/MyImg.vue";

export default {
  components: {
    MyImg,
  },
};
</script>

<style lang="scss">
@import "../../scss/_mixins.scss";

#pay-delivery {
  padding: 75px 0;
  @media (max-width: 992px) {
    padding: 60px 0;
  }
  @media (max-width: 576px) {
    padding: 50px 0;
  }

  .pay-delivery__wrapper {
    display: flex;
    width: 100%;
    gap: 30px;

    @media (max-width: 576px) {
      flex-direction: column;
      gap: 20px;
    }
  }

  .pay-delivery__item {
    flex: 1 1 0;
    padding: 38px 40px;
    background: #f9f9f9;
    border-radius: 10px;
    position: relative;

    @media (max-width: 1150px) {
      padding: 25px 30px;
    }

    @media (max-width: 768px) {
      padding: 20px;
    }

    h2 {
      font-weight: 600;
      font-size: 42px;
      line-height: 140%;
      color: #323232;
      margin-bottom: 10px;

      @media (max-width: 768px) {
        font-size: 22px;
      }

      @include fluidFontSize(22, 42, 425, 1920);
    }

    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 135%;
      color: #323232;

      @media (max-width: 768px) {
        font-size: 18px;
      }

      @include fluidFontSize(18, 20, 425, 1920);
    }
  }

  .pay-delivery__img {
    width: 60%;
    position: absolute;
    right: 0;
    top: -9%;

    @media (max-width: 1150px) {
      position: static;
      width: 90%;
      margin-left: auto;
      margin-top: 5px;
      transform: translateX(25px);
    }

    @media (max-width: 768px) {
      transform: translateX(20px);
      width: 100%;
    }

    @media (max-width: 576px) {
      transform: translateX(20px);
      width: max-content;
      max-width: 100%;
    }
  }
}
</style>
