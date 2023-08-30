<template>
  <div id="order-modal" ref="orderModal">
    <form action="sendOrder.php" method="post" class="spnForm">
      <div v-html="getMetric"></div>

      <div class="order-modal">
        <div class="order-modal__title">
          <p>Оформление заказа</p>
          <p v-html="getOrderModalMangal.name"></p>
        </div>

        <div class="order-modal__img" v-if="getOrderModalMangal.id">
          <my-img
            :sorce="`build/images/promo/order/${getOrderModalMangal.image}`"
            :mobile="false"
            :alt="'изображение'"
            :animation="false"
            :lazyLoad="false"
          />
        </div>

        <div class="order-modal__inputs">
          <input
            aria-label="Ваше имя"
            type="text"
            name="name"
            autocomplete="off"
            placeholder="Имя"
            required
          />

          <input
            aria-label="Ваш номер телефона"
            type="tel"
            name="phone"
            autocomplete="off"
            placeholder="+7 (___)-___-__-__"
            required
          />
        </div>

        <div class="order-modal__button">
          <button class="button button-order" type="submit">Заказать</button>
          <p>
            Мы свяжемся с Вами в течение 10 минут <br />
            и уточним детали доставки
          </p>
        </div>

        <div class="order-modal__price">
          <p class="new">
            {{ getOrderModalMangal.price.toLocaleString() }} РУБ.
          </p>
          <p class="old">
            {{ getOrderModalMangal.oldPrice.toLocaleString() }} РУБ.
          </p>
        </div>
      </div>

      <input type="hidden" name="id[]" :value="getOrderModalMangal.id" />
      <input
        type="hidden"
        :name="'quantity[' + getOrderModalMangal.id + ']'"
        value="1"
      />
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MyImg from "../UI/MyImg.vue";

export default {
  computed: mapGetters(["getOrderModalMangal", "getMetric"]),
  components: {
    MyImg,
  },
};
</script>

<style lang="scss">
@import "../../scss/_mixins.scss";

#order-modal {
  max-width: 870px;
  background: #ffffff;
  border-radius: 10px;
  display: none;
  padding: 0;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 400px;
  }

  .order-modal {
    padding: 50px 25px;
    display: grid;
    grid-template-columns: minmax(270px, 310px) minmax(310px, 100%);
    gap: 30px 70px;

    @media (max-width: 992px) {
      gap: 25px 30px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 20px;
    }

    &__img {
      grid-column: 1/2;
      grid-row: 1/4;

      @media (max-width: 768px) {
        grid-column: 1/2;
        grid-row: 2/3;

        .img-wrap picture {
          justify-content: center;
        }
      }
    }

    &__title {
      grid-column: 2/3;
      grid-row: 1/2;

      @media (max-width: 768px) {
        grid-column: 1/2;
        grid-row: 1/2;
        text-align: center;
      }

      p {
        font-style: normal;
        color: #323232;

        &:first-child {
          font-family: "Lato";
          font-weight: 600;
          font-size: 42px;
          line-height: 117%;
          margin-bottom: 5px;

          @media (max-width: 1024px) {
            font-size: 32px;
          }

          @media (max-width: 576px) {
            font-size: 22px;
          }
        }

        &:last-child {
          font-family: "Source Sans Pro";
          font-weight: 400;
          font-size: 20px;
          line-height: 135%;

          @media (max-width: 992px) {
            font-size: 18px;
          }
        }
      }
    }

    &__inputs {
      display: flex;
      flex-direction: column;
      grid-column: 2/3;
      grid-row: 2/3;

      @media (max-width: 768px) {
        grid-column: 1/2;
        grid-row: 4/5;
      }

      input {
        &:first-child {
          margin-bottom: 20px;
        }
        border: none;
        outline: none;
        max-width: 223px;
        width: 100%;
        padding: 15px 20px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #8b8b8b;
        background: #f3f3f3;
        border-radius: 3px;

        @media (max-width: 768px) {
          margin: 0 auto;
          &:first-child {
            margin-bottom: 20px;
          }
        }
      }
    }

    &__button {
      grid-column: 2/3;
      grid-row: 3/5;

      @media (max-width: 768px) {
        grid-column: 1/2;
        grid-row: 5/6;
        text-align: center;
      }

      button {
        max-width: 268px;
        width: 100%;

        @media (max-width: 768px) {
          margin: 0 auto;
        }

        @media (max-width: 576px) {
          font-size: 18px;
          line-height: 19px;
          width: 238px;
        }
      }

      p {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 21px;
        /* or 150% */
        color: #323232;
        margin-top: 10px;

        @media (max-width: 576px) {
          width: 220px;
          margin: 10px auto 0;
        }
      }
    }

    &__price {
      grid-column: 1/2;
      grid-row: 4/5;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 768px) {
        grid-column: 1/2;
        grid-row: 3/4;
      }

      @media (max-width: 576px) {
        flex-direction: column-reverse;
      }

      p {
        font-family: "Roboto";
        font-style: normal;
        white-space: nowrap;
      }

      .new {
        font-weight: 600;
        font-size: 27px;
        line-height: 32px;
        color: #00ac07;
      }

      .old {
        margin-left: 20px;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        text-decoration-line: line-through;
        color: #323232;

        @media (max-width: 576px) {
          margin: 0;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>