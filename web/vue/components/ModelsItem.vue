<template>
  <div class="models-item">
    <div class="models-item__wrap">
      <div class="models-item__name-box">
        <h3>{{ item.name }}</h3>
      </div>
      <my-img
        :sorce="`build/images/promo/models/${item.img}`"
        :mobile="false"
        :alt="item.name"
        :animation="false"
      />
      <ul :class="['models-item__list', listClass]">
        <li
          class="models-item__list-item"
          v-for="(li, i) in item.list"
          :key="i"
          v-html="li"
        ></li>
        <div class="models-item__list-extra-wrap" v-if="item.extraList">
          <transition
            name="list-extra"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:before-leave="beforeLeave"
            v-on:leave="leave"
          >
            <div class="models-item__list-extra" :key="showMore">
              <li
                class="models-item__list-item"
                v-for="(li, i) in item.extraList"
                :key="i"
                v-html="li"
              ></li>
            </div>
          </transition>
        </div>
      </ul>
      <button
        v-if="item.extraList"
        @click="toShowMore"
        :class="['models-item__btn-show-more', btnClass]"
      >
        {{ btnText }}
        <span class="models-item__btn-icon"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="9"
            viewBox="0 0 16 9"
            fill="none"
          >
            <path
              d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z"
              fill="#323232"
            /></svg
        ></span>
      </button>
    </div>
  </div>
</template>

<script>
import MyImg from "../UI/MyImg.vue";
export default {
  name: "ModelsItem",
  components: {
    MyImg,
  },
  props: {
    item: Object,
  },
  data() {
    return {
      showMore: false,
      btnText: "Показать все",
    };
  },
  methods: {
    toShowMore() {
      this.showMore = !this.showMore;
      this.showMore
        ? (this.btnText = "Свернуть")
        : (this.btnText = "Показать все");
    },
    beforeEnter: function (el) {
      if (!this.showMore) {
        // el.style.maxHeight = "74px";
        el.style.height = "74px";
        el.style.opacity = "0.09";
        el.style.position = "absolute";
        el.style.visible = "visible";
      }
    },
    enter: function (el) {
      if (this.showMore) {
        el.style.position = "static";
        el.style.height = el.scrollHeight + "px";
        // el.style.maxHeight = el.scrollHeight + "px";
        el.style.opacity = "1";
        el.style.visible = "hidden";
      }
    },
    leave: function (el) {
      if (!this.showMore) {
        el.style.position = "static";

        el.style.height = "74px";
        // el.style.maxHeight = el.scrollHeight + "px";
        el.style.opacity = "0";
        el.style.visible = "hidden";
      }
    },
    beforeLeave: function (el) {
      if (this.showMore) {
        // el.style.maxHeight = "74px";
        el.style.height = el.scrollHeight + "px";
        el.style.opacity = "0";
        el.style.position = "absolute";
        el.style.visible = "visible";
      }
    },
  },
  computed: {
    btnClass() {
      return {
        "models-item__btn-show-more_open": this.showMore,
      };
    },
    listClass() {
      return {
        "models-item__list_open": this.showMore,
      };
    },
  },
};
</script>

<style lang="scss">
.models-item {
  width: 100%;
  max-width: 420px;
  height: auto;

  @media (max-width: 768px) {
    max-width: 340px;
  }

  &__wrap {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    height: 100%;
    padding: 20px 20px 30px;
    background: #f9f9f9;
    border-radius: 10px;
    overflow: hidden;

    @media (max-width: 768px) {
      padding: 15px 10px 20px;
    }
  }

  &__name-box {
    align-self: flex-end;
    display: flex;
    justify-content: center;
    max-width: 251px;
    width: 100%;
    padding: 10px 20px;
    margin-right: -20px;
    background: #ffdf05;
    border-radius: 5px 0px 0px 5px;

    @media (max-width: 768px) {
      max-width: 210px;
      margin-right: -10px;
      padding: 10px;
    }

    h3 {
      font-family: "Source Sans Pro", sans-serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 27px;

      @media (max-width: 768px) {
        font-size: 15px;
        line-height: 27px;
      }
    }
  }

  .img-wrap {
    display: flex;
    justify-content: center;
    max-width: 320px;
    margin: 23px auto 0;

    img {
      &:not([data-ll-status="loaded"]) {
        aspect-ratio: 320/243;
      }
    }
  }

  &__list {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-top: 30px;
    padding-left: 0;
    margin-bottom: -74px;
    transition: 0.4s all;

    &_open {
      margin-bottom: 0;
    }
  }

  &__list-extra-wrap {
    position: relative;
    width: 100%;
    min-height: 74px;
  }

  &__list-extra {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    transition: 0.4s all;
    // max-height: 74px;
    opacity: 0.09;
    overflow: hidden;

    li {
      margin-top: 20px;

      @media (max-width: 768px) {
        margin-top: 10px;
      }
    }
  }

  &__list-item {
    position: relative;
    padding-left: 42px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;

    &:not(:first-child) {
      margin-top: 20px;

      @media (max-width: 768px) {
        margin-top: 10px;
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 27px;
      height: 27px;
      background-image: url("../../images/promo/models/models-marker.svg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }

    @media (max-width: 768px) {
      font-size: 15px;
      line-height: 22px;
      padding-left: calc(22px + 10px);

      &::before {
        width: 22px;
        height: 22px;
      }
    }
  }

  &__btn-show-more {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    width: fit-content;
    max-width: 100%;
    margin-left: 42px;
    margin-top: 30px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 29px;
    transition: 0.3s all;

    @media (max-width: 768px) {
      font-size: 15px;
      line-height: 22px;
    }

    &:hover:not(.models-item__btn-show-more_open) {
      opacity: 0.7;
    }

    &_open {
      opacity: 0.7;

      .models-item__btn-icon {
        transform: rotate(180deg);
      }
    }
  }

  &__btn-icon {
    display: flex;
    margin-left: 12px;
    transition: 0.3s all;

    @media (max-width: 768px) {
      svg {
        width: 9px;
        height: 6px;
      }
    }
  }
}
</style>
