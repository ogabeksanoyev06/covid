<template>
  <div class="detailed-page">
    <div class="container">
      <button class="prevDetailed" @click="detailedPages">Orqaga</button>
      <div class="content">
        <div class="sidebar">
          <div class="module__accordion">
            <p class="sidebar__title">
              МОДУЛЬ 1. ОСТРЫЕ РЕСПИРАТОРНЫЕ ИНФЕКЦИИ
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
          <tab-3 v-show="isActive(1)" />
          <tab-4 v-show="isActive(2)" />
          <tab-5 v-show="isActive(3)" />
          <tab-6 v-show="isActive(4)" />
          <tab-7 v-show="isActive(5)" />
          <tab-8 v-show="isActive(6)" />
          <tab-9 v-show="isActive(7)" />
          <tab-10 v-show="isActive(8)" />
          <tab-11 v-show="isActive(9)" />
          <tab-12 v-show="isActive(10)" @newDate="newDate" :beginDate="date" />
          <tab-13 v-show="isActive(11)" />
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
                <span
                  style="margin-left: 10px"
                  @click="activeTabList(sectionContentId - 1)"
                >
                  Предыдущий урок
                </span>
              </button>
              <button
                class="content__main-next"
                @click="activeTabList(sectionContentId + 1)"
              >
                <span style="margin-right: 10px">Следующий урок</span>
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
import Tab1 from "../tab-content/tab-1.vue";
import Tab3 from "../tab-content/tab-3.vue";
import Tab4 from "../tab-content/tab-4.vue";
import Tab5 from "../tab-content/tab-5.vue";
import Tab6 from "../tab-content/tab-6.vue";
import Tab7 from "../tab-content/tab-7.vue";
import Tab8 from "../tab-content/tab-8.vue";
import Tab9 from "../tab-content/tab-9.vue";
import Tab10 from "../tab-content/tab-10.vue";
import Tab11 from "../tab-content/tab-11.vue";
import Tab12 from "../tab-content/tab-12.vue";
import Tab13 from "../tab-content/tab-13.vue";
import "@/assets/styles/pages/detailed-page.css";

export default {
  name: "detailedPage",
  components: {
    Accordion,
    AccordionItem,
    Tab1,
    Tab3,
    Tab4,
    Tab5,
    Tab6,
    Tab7,
    Tab8,
    Tab9,
    Tab10,
    Tab11,
    Tab12,
    Tab13,
  },
  data() {
    return {
      contentId: 0,
      sectionContentId: 0,
      activeTab: 0,
      date: null,
      prevModule: true,
      sectionContentTree: [
        {
          id: 0,
          name: "Острые респираторные вирусные инфекции",
          contentList: [
            {
              id: 0,
              name: "Основная информация",
              isActive: true,
            },
            {
              id: 1,
              name: "Грипп",
              isActive: true,
            },
            {
              id: 2,
              name: "Группы риска",
              isActive: true,
            },
          ],
        },
        {
          id: 1,
          name: "Симптомы ОРВИ и гриппа",
          contentList: [
            {
              id: 3,
              name: "Типичные симптомы ОРВИ и Гриппа",
              isActive: false,
            },
            {
              id: 4,
              name: "Когда необходимо срочное обра...",
              isActive: true,
            },
            {
              id: 5,
              name: "Инструкция для слушателя",
              isActive: true,
            },
          ],
        },
        {
          id: 2,
          name: "Меры профилактики ОРВИ и гриппа",
          contentList: [
            {
              id: 6,
              name: "Ролик",
              isActive: true,
            },
            {
              id: 7,
              name: "Вакцинация",
              isActive: true,
            },
            {
              id: 8,
              name: "Бустерная доза",
              isActive: true,
            },
            {
              id: 9,
              name: "Важные информации",
              isActive: true,
            },
          ],
        },
        {
          id: 3,
          name: "Тест",
          contentList: [
            {
              id: 10,
              name: "Тест",
            },
            {
              id: 11,
              name: "Мои баллы",
            },
          ],
        },
      ],
      ImportantInformation: [
        {
          id: 0,
          name: "Как вакцина защищает нас?",
          text: [
            {
              id: 0,
              title:
                "Вакцина против гриппа содержит вирусные белки, после попадания которых в организм, он воспринимает их как чужеродные и начинается выработка специфических антител. Если после этого произойдет заражение настоящим вирусом, эти антитела прикрепляются к частицам проникшего вируса гриппа и ликвидируют его до того, как будут повреждены ткани; в результате люди не заболевают или болезнь протекает в менее тяжелой форме.",
            },
          ],
        },
        {
          id: 1,
          name: "Как часто нужно вакцинироваться?",
          text: [
            {
              id: 0,
              title:
                "Важно делать прививки от гриппа каждый год. Это объясняется тем, что вирусы гриппа постоянно меняются, вследствие чего каждый год могут циркулировать другие штаммы, а также, что иммунитет от вакцинации против гриппа со временем снижается. Вакцины против сезонного гриппа обновляются каждый год, чтобы обеспечить максимально возможную защиту путем подбора такого состава вакцин, который бы наиболее соответствовал тем штаммам, которые циркулируют.",
            },
          ],
        },
        {
          id: 2,
          name: "Безопасны ли вакцины от гриппа?",
          text: [
            {
              id: 0,
              title:
                "Вакцины против гриппа безопасны и не вызывают грипп. Вакцинированный человек может испытать реакцию на вакцинацию, но такая реакция не будет гриппом, а симптомы будут мягче, чем при заболевании гриппом.",
            },
          ],
        },
        {
          id: 2,
          name: "Может ли вакцинированный человек заразиться гриппом?",
          text: [
            {
              id: 0,
              title:
                "Даже вакцинированные люди могут заболеть гриппом. Это объясняется тем, что противогриппозная вакцина защищает не от всех вирусов гриппа, а только от тех типов вируса, циркуляция которых ожидается в данный сезон гриппа. Кроме того, индивидуальный иммунитет конкретного человека может сделать его более восприимчивым к определенному типу гриппа. Однако вакцинация приносит пользу даже при заболевании гриппом, так как у привитых людей симптомы заболевания будут менее выраженными и, следовательно, менее опасными. Вакцины против большинства возбудителей острых респираторных вирусных инфекций не разработаны.",
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
    },
    isActive(tab) {
      return this.activeTab === tab;
    },
    activeTabList(tab) {
      this.sectionContentId = tab;
      if (this.activeTab >= 3) {
        this.activeTab = 0;
      }
      if (this.activeTab < 0) {
        this.activeTab = 2;
      }
    },
    newDate() {
      this.date = new Date();
    },
  },
};
</script>
<style scoped></style>
