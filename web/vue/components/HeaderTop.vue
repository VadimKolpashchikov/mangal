<template>
  <div id="header-top">
    <div class="bg-header-top" :class="{ 'bg-header-top_shadow': atTop }">
      <div class="content-container header-top">
        <div class="header-top__wrap">
          <div class="header-top__logo">
            <my-img
              :sorce="`build/images/promo/logo`"
              :lazyLoad="false"
              :mobile="false"
              :alt="'Helicon'"
            />
          </div>

          <div class="menu-container">
            <div
              class="menu-toggler"
              v-bind:class="{ 'menu-toggler_open': mobilMenuShow }"
              v-on:click="mobilMenuShow = !mobilMenuShow"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <ul
              class="menu header-top__menu"
              v-bind:class="{ 'header-top__menu_visible': mobilMenuShow }"
            >
              <li>
                <a
                  href="#catalog"
                  @click.prevent="clickBtn('catalog', MANGALTYPES.demount)"
                  >Разборные</a
                >
              </li>
              <li>
                <a
                  href="#catalog"
                  @click.prevent="clickBtn('catalog', MANGALTYPES.foot)"
                  >На ножках</a
                >
              </li>
              <li>
                <a
                  href="#catalog"
                  @click.prevent="clickBtn('catalog', MANGALTYPES.cup)"
                  >Костровые чаши</a
                >
              </li>
            </ul>
          </div>

          <div class="header-top__phone">
            <a href="tel:88002505932" class="header-top__phone-number"
              >8 800 250 59 32</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyImg from "../UI/MyImg.vue";
import { MANGALTYPES } from "../../js/vars/mangal-types";

export default {
  name: "HeaderTop",
  data() {
    return {
      atTop: false,
      mobilMenuShow: false,
      MANGALTYPES: MANGALTYPES,
    };
  },
  components: {
    MyImg,
  },
  methods: {
    clickBtn(link, type) {
      document.getElementById(link).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      document
        .querySelector("#catalog .tabs-container .tab-item--" + type)
        .click();
    },
  },
  // created() {
  //   window.addEventListener("scroll", () => {
  //     this.atTop = window.pageYOffset < 30 ? false : true;
  //   });
  // },
};
</script>

<style lang="scss">
// @import "../../scss/variables";
#header-top {
  background: #292929;
  position: relative;
  z-index: 10;
  min-height: 95px;
  max-width: 100vw;
  // overflow-x: hidden;
  font-family: "Inter";
  @media (max-width: 1200px) {
    position: relative;
    min-height: 66px;
  }

  [v-cloak] {
    display: none;
  }

  .bg-header-top {
    // position: fixed;
    // top: 0;
    // left: 0;
    width: 100%;
    max-width: 100vw;
    min-height: 95px;
    background: rgb(50, 50, 50);
    display: flex;
    z-index: 100;
    transition: 0.4s box-shadow ease-in-out;

    // &_shadow {
    //   box-shadow: 0 5px 8px 1px rgba(0, 0, 0, 0.2);
    // }

    @media (max-width: 1200px) {
      min-height: 66px;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #323232;
        z-index: 2;
      }
    }
  }

  .content-container {
    justify-content: center;
  }

  .header-top__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    column-gap: 16px;
    padding: 20px 0;

    @media (max-width: 1200px) {
      padding: 10px 0;
      column-gap: 30px;
    }
  }

  .header-top__logo {
    display: flex;
    align-items: center;

    @media (max-width: 1430px) {
      flex-direction: column;
    }

    @media (max-width: 1200px) {
      position: relative;
      z-index: 11;
    }

    img {
      display: block;
      max-width: 280px;
      width: 100%;

      @media (max-width: 768px) {
        max-width: 220px;
      }
    }
  }

  @media (max-width: 1200px) and (min-width: 480px) {
    .menu-container span {
      display: block;
    }
  }

  .menu-container {
    @media (min-width: 992px) {
      justify-content: space-around;
      max-width: 600px;
      width: 100%;
    }

    @media (max-width: 1200px) {
      position: static;
      background: transparent;
      order: 3;
      z-index: auto;
      width: auto;
    }

    .menu-toggler {
      display: none;

      @media (max-width: 1200px) {
        display: block;
      }

      position: relative;

      background: #ffffff;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      cursor: pointer;
      z-index: 11;
      transition: 0.4s all;

      span {
        position: absolute;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 22px;
        height: 2px;
        border-radius: 25px;
        background-color: #0c0c0c;
        transition: 0.4s all;

        &:nth-child(1) {
          top: 32%;
          transition: 0.3s all 0.2s;
        }

        &:nth-child(2) {
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
        }

        &:nth-child(3) {
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
        }

        &:nth-child(4) {
          top: 68%;
          transition: 0.3s all 0.2s;
        }
      }

      &_open {
        transform: rotate(90deg);
        span {
          &:nth-child(1) {
            opacity: 0;
            transition: 0.1s all;
          }

          &:nth-child(2) {
            // width: 33px;
            transform: translateX(-50%) translateY(-50%) rotate(45deg);

            @media (max-width: 576px) {
              width: 24px;
            }
          }

          &:nth-child(3) {
            // width: 33px;
            transform: translateX(-50%) translateY(-50%) rotate(-45deg);

            @media (max-width: 576px) {
              width: 24px;
            }
          }

          &:nth-child(4) {
            opacity: 0;
            transition: 0.1s all;
          }
        }
      }
    }

    .header-top__menu {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      row-gap: 10px;
      column-gap: 30px;
      width: auto;
      margin: 0;

      @media (max-width: 1199px) {
        column-gap: 10px;
      }

      @media (min-width: 992px) {
        justify-content: space-between;
        max-width: 600px;
        width: 100%;
      }

      @media (max-width: 1200px) {
        top: 100%;
        right: 0;
        flex-direction: column;
        align-items: stretch;
        row-gap: 5px;
        padding: 16px 0 10px;
        width: 100%;
        transform: translateY(-100%);
        border: none;
        background: rgb(50, 50, 50, 97%);
        box-shadow: 0 0 12px 1px rgb(0, 0, 0, 70%);
        opacity: 0;
        z-index: 1;
        transition: 0.4s;
        position: absolute;

        @media (min-width: 577px) {
          max-width: 310px;
        }

        &_visible {
          opacity: 1;
          transform: translateY(-1px);
        }
      }

      li {
        margin: 0px;
      }

      a {
        padding: 5px 10px;
        font-weight: 300;
        font-size: 22px;
        line-height: 27px;
        text-align: center;
        color: rgb(255, 255, 255);
        transition: 0.4s all;

        @media (max-width: 1200px) {
          display: block;
          width: 100%;
          padding: 5px 15px;
          text-align: left;
        }

        @media (max-width: 576px) {
          padding: 5px;
          font-size: 15px;
          line-height: 18px;
          text-align: center;
        }

        &:hover {
          color: rgba(255, 255, 255, 0.5);
        }
      }
    }
  }

  .header-top__phone {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;
    row-gap: 8px;

    @media (max-width: 1200px) {
      flex-direction: column;
    }

    @media (max-width: 1200px) {
      position: relative;
      z-index: 11;
      margin-left: auto;
    }

    .header-top__phone-number {
      font-style: normal;
      font-weight: 600;
      font-size: 27px;
      line-height: 33px;
      color: #ffffff;
      transition: 0.4s all;

      &:hover {
        opacity: 0.7;
      }

      @media (max-width: 768px) {
        display: none;
      }
    }
  }
}
</style>
