<template>
  <div class="tabs-container">
    <div class="tabs-wrapper">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="[
          'tab-item',
          tab.type == active ? 'tab-item--active' : '',
          'tab-item--' + tab.type,
        ]"
        @click="tab.type != active ? change(tab.type) : ''"
      >
        <p>{{ tab.value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
    },
    active: {
      type: String,
    },
  },
  methods: {
    change(type) {
      this.$emit("changeActive", type);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_mixins.scss";

.tabs-container {
  width: 100%;

  .tabs-wrapper {
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
      justify-content: center;
      gap: 10px;
    }

    @media (max-width: 576px) {
      flex-direction: column;
      align-items: center;
      gap: 0;
    }
  }

  .tab-item {
    padding: 10px 20px;
    cursor: pointer;
    position: relative;

    @media (max-width: 992px) {
      padding: 10px 15px;
    }

    @media (max-width: 576px) {
      width: min-content;
    }

    p {
      font-weight: 400;
      font-size: 27px;
      line-height: 32px;
      color: rgba(45, 45, 45, 0.8);
      transition: color 0.4s;
      white-space: nowrap;

      @include fluidFontSize(22, 27, 992, 1920);

      @media (max-width: 768px) {
        font-size: 15px;
      }

      &:hover {
        color: rgba(45, 45, 45, 0.5);
      }
    }

    &::before {
      position: absolute;
      bottom: 0;
      left: 50%;
      content: "";
      width: 0%;
      height: 2px;
      background: #00ac07;
      transition: width 0.3s ease;
      transform: translate(-50%, 0%);

      @media (max-width: 576px) {
        bottom: 2px;
      }
    }

    &--active {
      p {
        color: #00ac07;
        font-weight: 600;
        &:hover {
          color: rgb(0, 172, 7, 0.8);
        }
      }

      &::before {
        width: 100%;
      }
    }
  }
}
</style>
