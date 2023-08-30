<template>
  <footer>
    <div class="content-container">
      <div class="footer-wrapper">
        <div class="footer-wrapper__logo">
          <my-img
            :sorce="`build/images/promo/logo`"
            :lazyLoad="false"
            :mobile="false"
            :alt="'Helicon'"
          />
        </div>

        <div class="footer-wrapper__phone">
          <a href="tel:88002505932">8 800 250 59 32</a>
          <p>Телефон горячей линии</p>
        </div>

        <div class="footer-wrapper__links">
          <div>
            <div>
              <a href="uploadupdate/confidentiality.pdf" target="_blank"
                >Политика конфиденциальности</a
              >
            </div>
            <div>
              <a download href="uploadupdate/oferta-rus.pdf" target="_blank"
                >Договор оферты</a
              >
            </div>
          </div>
        </div>

        <div class="footer-wrapper__decr">
          <div>
            <div>
              <p><span> ИНН:</span> 432500888349</p>
              <p><span>ОГРНИП:</span> 314744919000039</p>
            </div>
            <div class="decr-adr">
              <p>
                <span> Адрес почтовый (фактический):</span>
                <br />
                610006, г. Киров, Октябрьский пр-т, д. 24
              </p>
            </div>
            <div>
              <p><span>Для корреспонденции: </span> 610000,а/я 154</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-wrapper__copyright">
      <div class="content-container">
        <p>
          © 2010 - {{ getYear }} mangal-firegrill.ru
          <span> Все права защищены. <br /></span>

          Использование материалов разрешено только с согласия правообладателей.
          <br />
          Полное или частичное копирование сайта запрещено и преследуется по
          закону.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
import MyImg from "../UI/MyImg.vue";

export default {
  computed: mapGetters(["getYear"]),
  components: {
    MyImg,
  },
};
</script>

<style lang="scss">
@import "../../scss/_mixins.scss";

footer {
  margin-top: 50px;
  background: #2a2a2a;
  padding: 50px 0 30px;

  @media (max-width: 992px) {
    margin-top: 35px;
    padding-top: 35px;
  }

  @media (max-width: 576px) {
    margin-top: 20px;
    padding-top: 20px;
  }

  .footer-wrapper {
    display: grid;
    grid-template-columns: 1.3fr 1.2fr 0.8fr;
    row-gap: 40px;
    width: 100%;

    @media (max-width: 992px) {
      grid-template-columns: 1.4fr 1fr;
      gap: 30px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    &__logo {
      img {
        max-width: 280px;
        width: 100%;

        @media (max-width: 992px) {
          max-width: 220px;
        }

        @media (max-width: 768px) {
          max-width: 220px;
        }
      }
    }

    &__phone {
      grid-column: 1/2;
      grid-row: 2/3;

      @media (max-width: 992px) {
        grid-column: 2/3;
        grid-row: 1/2;
      }

      @media (max-width: 768px) {
        grid-column: 1/2;
        grid-row: 2/3;
      }

      a {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 36px;

        color: #ffffff;

        white-space: nowrap;

        @include fluidFontSize(20, 30, 769, 1920);

        @media (max-width: 768px) {
          font-weight: 600;
          font-size: 20px;
          line-height: 26px;
          color: #ffffff;
        }
      }

      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #ffffff;
        opacity: 0.55;
      }
    }
    &__decr {
      grid-row: 1/3;
      grid-column: 2/3;

      @media (max-width: 992px) {
        grid-column: 1/2;
        grid-row: 2/3;
      }

      @media (max-width: 768px) {
        grid-column: 1/2;
        grid-row: 3/4;
      }

      & > div {
        display: flex;
        flex-direction: column;
        & > div:not(:first-child) {
          margin-top: 16px;

          @media (max-width: 992px) {
            margin-top: 0px;

            &:not(:last-child) {
              margin-top: 16px;
            }
          }
        }

        @media (min-width: 993px) {
          max-width: max-content;
          margin: 0 auto;
          .decr-adr {
            margin-top: 20px;
          }
        }
      }

      p {
        font-family: "Play";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: rgba(255, 255, 255, 0.7);
        white-space: nowrap;

        @include fluidFontSize(14, 16, 425, 1920);

        @media (max-width: 768px) {
          font-size: 14px;
          line-height: 140%;
        }

        span {
          color: #ffffff;
        }
      }
    }
    &__links {
      grid-row: 1/2;
      grid-column: 3/4;

      @media (max-width: 992px) {
        grid-column: 2/3;
        grid-row: 2/3;
      }

      @media (max-width: 768px) {
        grid-column: 1/2;
        grid-row: 4/5;
      }

      & > div {
        display: flex;
        gap: 14px;
        flex-direction: column;

        @media (min-width: 993px) {
          max-width: max-content;
          margin: auto;
        }

        @media (max-width: 768px) {
          gap: 8px;
        }
      }

      a {
        font-family: "Play";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 110%;
        color: #ffffff;
        transition: all 0.4s;

        @include fluidFontSize(14, 16, 769, 1920);

        @media (max-width: 768px) {
          font-size: 14px;
          line-height: 140%;
        }
        &:hover {
          opacity: 0.7;
        }
      }
    }
    &__copyright {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 30px;
      margin-top: 70px;

      @media (max-width: 992px) {
        margin-top: 50px;
      }

      @media (max-width: 768px) {
        margin-top: 30px;
        padding-top: 20px;
      }

      p {
        font-family: "Play";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #ffffff;
        width: 100%;

        @media (max-width: 768px) {
          font-size: 10px;
          line-height: 140%;

          span {
            display: block;

            br {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
