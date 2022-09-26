<template>
  <div class="detailed-page">
    <div class="container">
      <button class="prevDetailed" @click="detailedPages">Orqaga</button>
      <div class="content">
        <div class="sidebar">
          <div class="module__accordion">
            <p class="sidebar__title">
              МОДУЛЬ 9: ПРОФИЛАКТИКА ЭМОЦИОНАЛЬНОГО ВЫГОРАНИЯ У СОТРУДНИКОВ ННО,
              РАБОТАЮЩИХ С УЯЗВИМЫМИ ГРУППАМИ.
            </p>
            <div class="divider" />
            <!-- <p class="sidebar__title">Introduction</p> -->
            <Accordion>
              <AccordionItem
                :class="sectionContentId === sectionContent.id ? 'active' : ''"
                v-for="(
                  sectionContent, sectionContentIndex
                ) in sectionContentTree"
                :key="sectionContentIndex"
                @click="sectionContenActive(sectionContent.id)"
              >
                <template slot="accordion-trigger">
                  <div class="module__accordion-header">
                    <div class="module__accordion-numb">
                      1.{{ sectionContentIndex + 1 }}
                    </div>
                    <h4 class="module__accordion-text">
                      {{ sectionContent.name }}
                    </h4>
                  </div>
                </template>
                <template slot="accordion-content">
                  <div
                    style="padding: 0 15px 15px"
                    v-for="(
                      content, contentIndex
                    ) in sectionContent.contentList"
                    :key="contentIndex"
                    @click="selectContent(sectionContent.id, content.id)"
                  >
                    <div
                      class="module__accordion-item"
                      :class="contentId === content.id ? 'active' : ''"
                    >
                      <h4 class="module__accordion-text">
                        {{ content.name }}
                      </h4>
                    </div>
                  </div>
                </template>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div class="content__main">
          <tab-1 v-show="isActive(0)" />
          <tab-2 v-show="isActive(1)" />
          <tab-3 v-show="isActive(2)" />
          <tab-4 v-show="isActive(3)" />
          <tab-5 v-show="isActive(4)" />
          <tab-6 v-show="isActive(5)" />
          <tab-7 v-show="isActive(6)" />
          <div>
            <div style="margin: 30px 0" class="divider" />
            <div class="content__main-btn">
              <button class="content__main-prev">
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.47773 0L8 1.41L3.05533 6L8 10.59L6.47773 12L0 6L6.47773 0Z"
                    fill="#0F101D"
                  />
                </svg>
                <span style="margin-left: 10px">Предыдущий урок</span>
              </button>
              <button class="content__main-next">
                <span style="margin-right: 10px">Предыдущий урок</span>
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z"
                    fill="#0F101D"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Accordion from "@/components/shared-components/Accordion.vue";
import AccordionItem from "@/components/shared-components/AccordionItem.vue";
import "@/assets/styles/pages/detailed-page.css";
import Tab1 from "@/views/site/modules/moduleNine/tab-content/tab-1.vue";
import Tab2 from "@/views/site/modules/moduleNine/tab-content/tab-2.vue";
import Tab3 from "@/views/site/modules/moduleNine/tab-content/tab-3.vue";
import Tab4 from "@/views/site/modules/moduleNine/tab-content/tab-4.vue";
import Tab5 from "@/views/site/modules/moduleNine/tab-content/tab-5.vue";
import Tab6 from "@/views/site/modules/moduleNine/tab-content/tab-6.vue";
import Tab7 from "@/views/site/modules/moduleNine/tab-content/tab-7.vue";
export default {
  name: "detailedPage",
  components: {
    Accordion,
    AccordionItem,
    Tab1,
    Tab2,
    Tab3,
    Tab4,
    Tab5,
    Tab6,
    Tab7,
  },
  data() {
    return {
      contentId: 0,
      sectionContentId: 0,
      activeTab: 0,
      prevModule: true,
      sectionContentTree: [
        {
          id: 0,
          name: "Определение, причины и признаки эмоционального выгорания",
          contentList: [
            {
              id: 0,
              name: "Признаки профессионального выгорания:",
            },
            {
              id: 1,
              name: "Профессиональное выгорание ",
            },
            {
              id: 2,
              name: "Превышение «лимитов»",
            },
            {
              id: 3,
              name: "Отсутствие обоюдного коммуникативного процесса.",
            },
            {
              id: 4,
              name: "Отсутствие полноценного результата.",
            },
            {
              id: 5,
              name: "Индивидуальные особенности человека.",
            },
            {
              id: 6,
              name: "Неправильная организация труда, нерациональное управление.",
            },
          ],
        },
      ],
    };
  },
  methods: {
    detailedPages() {
      this.$emit("prevModules", this.prevModule);
    },
    sectionContenActive(id) {
      this.sectionContentId = id;
    },
    selectContent(sectionContentId, contentId) {
      this.sectionContentId = sectionContentId;
      this.contentId = contentId;
      this.activeTab = contentId;
      console.log(contentId);
    },
    isActive(tab) {
      return this.activeTab === tab;
    },
  },
};
</script>
<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.content__main {
  max-width: calc(100% - 420px);
  width: 100%;
  overflow: hidden;
}
.sidebar {
  max-width: 390px;
  width: 100%;
  overflow: hidden;
  margin-right: 30px;
}
.divider {
  width: 100%;
  height: 1px;
  background-color: #e5ecf5;
}
.module__accordion {
  transition: 0.3s;
  border: 1px solid #e5ecf5 !important;
  border-radius: 10px;
}
.sidebar__title {
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  color: rgba(15, 16, 29, 0.8);
  padding: 16px;
}
.module__accordion .accordion {
  transition: 0.3s !important;
  height: 100%;
}
.accordion__item {
  cursor: pointer;
  position: relative;
  margin: 15px;
  border: 1px solid #e5ecf5 !important;
  border-radius: 10px;
  background-color: #fff;
}
.accordion__trigger {
  display: flex;
  justify-content: space-between;
}
.module__accordion-header {
  padding: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.module__accordion .accordion .module__accordion-numb {
  font-weight: 700;
  color: #232c3c;
  background-color: #e5ecf5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  min-width: 24px;
  min-height: 24px;
  font-size: 12px;
  line-height: 14px;
  margin-right: 20px;
}
.module__accordion .accordion .module__accordion-text {
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: rgba(15, 16, 29, 0.9);
}
.module__accordion-item {
  display: flex;
  width: 100%;
  background: white;
  padding: 10px 20px;
  border: 1px solid #e5ecf5 !important;
  border-radius: 10px;
}
.module__accordion-item:hover {
  background-color: #0467a71c;
}
.accordion__item.active {
  background-color: #f5f9fd;
}
.module__accordion-item.active {
  background-color: #0467a71c;
}
.content__main-btn {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.content__main-btn button {
  display: flex;
  align-items: center;
  max-width: 200px;
  height: 48px;
  width: 100%;
  background: #f2f7f2;
  border-radius: 39px;
}
.content__main-btn button span {
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #0f101d;
  margin-left: 10px;
}
@media (max-width: 991px) {
  .sidebar {
    max-width: 100% !important;
    margin-bottom: 20px;
    order: 2;
    margin-right: 0;
    margin-top: 30px;
  }
  .content__main {
    max-width: 100%;
    order: 1;
  }
  /* .content__main {
    max-width: calc(100% - 310px);
  }
  .sidebar {
    max-width: 280px;
  } */
}
@media (max-width: 576px) {
  .content__main-btn button {
    min-width: 50px !important;
    max-width: 50px;
    padding: 8px;
    height: 34px;
  }
  .content__main-btn button span {
    display: none;
  }
}
</style>
