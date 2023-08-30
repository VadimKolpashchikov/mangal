<template>
  <section id="catalog">
    <div class="content-container">
      <div class="title-box">
        <h2 class="title">Каталог товаров</h2>
      </div>

      <catalog-tabs
        class="catalog-tabs"
        @changeActive="changeActiveTab"
        :tabs="tabs"
        :active="activeTab"
      />

      <transition-group tag="div" class="catalog-items" name="cards">
        <catalog-item
          v-for="(card, index) in getMangals"
          v-show="this.activeTab == 'all' ? true : card.type == this.activeTab"
          :key="index"
          :item="card"
          :index="index"
          :showitem="show"
        />
      </transition-group>
    </div>
  </section>
</template>

<script>
import CatalogTabs from "./CatalogTabs.vue";
import CatalogItem from "./CatalogItem.vue";
import { MANGALTYPES } from "../../js/vars/mangal-types";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      activeTab: MANGALTYPES.all,
      show: true,
      tabs: [
        {
          value: "Все мангалы",
          type: MANGALTYPES.all,
        },

        {
          value: "Костровые чаши",
          type: MANGALTYPES.cup,
        },

        {
          value: "Мангалы на ножках",
          type: MANGALTYPES.foot,
        },

        {
          value: "Разборные мангалы",
          type: MANGALTYPES.demount,
        },
      ],
    };
  },
  methods: {
    changeActiveTab(type) {
      this.activeTab = type;
      this.show = false;
      setTimeout(() => {
        this.show = true;
      }, 300);
    },
  },
  computed: {
    ...mapGetters(["getMangals"]),
    cardsFilter() {
      return this.activeTab == MANGALTYPES.all
        ? this.getMangals
        : this.getMangals.filter((el) => el.type == this.activeTab && el.color);
    },
  },

  mounted() {
    const tabsBreakpoint = window.matchMedia("(min-width:1025px)");
    const breakpointChecker = () => {
      if (!tabsBreakpoint.matches) {
        this.activeTab = MANGALTYPES.cup;
        this.tabs = [
          {
            value: "Костровые чаши",
            type: MANGALTYPES.cup,
          },

          {
            value: "Мангалы на ножках",
            type: MANGALTYPES.foot,
          },

          {
            value: "Разборные мангалы",
            type: MANGALTYPES.demount,
          },
        ];
      } else {
        this.activeTab = MANGALTYPES.all;
        this.tabs = [
          {
            value: "Все мангалы",
            type: MANGALTYPES.all,
          },

          {
            value: "Костровые чаши",
            type: MANGALTYPES.cup,
          },

          {
            value: "Мангалы на ножках",
            type: MANGALTYPES.foot,
          },

          {
            value: "Разборные мангалы",
            type: MANGALTYPES.demount,
          },
        ];
      }
    };

    tabsBreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
  components: {
    CatalogTabs,
    CatalogItem,
  },
};
</script>

<style lang="scss">
#catalog {
  margin-top: -50px;
  padding: 50px 0 75px;

  @media (max-width: 768px) {
    margin-top: -25px;
    padding: 25px 0 50px;
  }

  .catalog-tabs {
    margin-bottom: 50px;
    @media (max-width: 768px) {
      margin-bottom: 25px;
    }
  }

  .title-box {
    @media (max-width: 1024px) {
      margin-bottom: 25px;
    }
    @media (max-width: 576px) {
      margin-bottom: 10px;
    }
  }

  .catalog-items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    width: 100%;

    & > div {
      transition: all 0.35s ease-in-out;
    }
    @media (min-width: 890px) {
      @media (max-width: 1280px) {
        gap: 20px;
      }
      @media (max-width: 1024px) {
        grid-template-columns: minmax(300px, 340px) minmax(300px, 340px);
        justify-content: center;
        gap: 30px;
      }
    }

    @media (max-width: 576px) {
      gap: 20px;
      grid-template-columns: minmax(280px, 290px);
      justify-content: center;
    }
  }

  .cards-enter-from,
  .cards-enter-active {
    transform: scale(0.85) translatey(-80px);
    opacity: 0;
  }

  .cards-leave-to {
    transform: translatey(30px);
    opacity: 0;
  }
}
</style>
