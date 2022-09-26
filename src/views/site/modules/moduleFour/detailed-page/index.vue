<template>
  <div class="detailed-page">
    <div class="container">
      <button class="prevDetailed" @click="detailedPages">Orqaga</button>
      <div class="content">
        <div class="sidebar">
          <div class="module__accordion">
            <p class="sidebar__title">МОДУЛЬ 4. COVID-19 и ВИЧ-инфекция</p>
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
                      4.{{ sectionContentIndex + 1 }}
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Accordion from "@/components/shared-components/Accordion.vue";
import AccordionItem from "@/components/shared-components/AccordionItem.vue";
import Tab1 from "@/views/site/modules/moduleFour/tab-content/tab-1.vue";
import Tab2 from "@/views/site/modules/moduleFour/tab-content/tab-2.vue";
import Tab3 from "@/views/site/modules/moduleFour/tab-content/tab-3.vue";
import Tab4 from "@/views/site/modules/moduleFour/tab-content/tab-4.vue";
import "@//assets/styles/pages/detailed-page.css";

export default {
  name: "detailedPage",
  components: { Accordion, AccordionItem, Tab1, Tab2, Tab3, Tab4 },
  data() {
    return {
      contentId: 0,
      sectionContentId: 0,
      activeTab: 0,
      prevModule: true,
      sectionContentTree: [
        {
          id: 0,
          name: "Основная информация о COVID-19... ",
          contentList: [
            {
              id: 0,
              name: "Основная информация о COVID-19 и ВИЧ - инфекция ",
            },
          ],
        },
        {
          id: 1,
          name: "АРВТ препараты и COVID-19 ",
          contentList: [
            {
              id: 1,
              name: "АРВТ препараты и COVID-19 ",
            },
          ],
        },
        {
          id: 2,
          name: "Беременные и дети с ВИЧ и COVID-19",
          contentList: [
            {
              id: 2,
              name: "Беременные и дети с ВИЧ и COVID-19",
            },
            {
              id: 3,
              name: "Для закрепления знаний, ответьте на вопросы по теме модуля",
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
      console.log(contentId);
    },
    isActive(tab) {
      return this.activeTab === tab;
    },
    activeTabList(tab) {
      this.activeTab = tab;
      if (this.activeTab >= 3) {
        this.activeTab = 0;
      }
      if (this.activeTab < 0) {
        this.activeTab = 2;
      }
    },
  },
};
</script>
<style scoped></style>
