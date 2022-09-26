<template>
  <div style="margin-top: 30px">
    <div class="container">
      <ModuleBanner
        @showPage="showPage"
        v-if="showDetailedPage"
        moduleId="МОДУЛЬ 3"
        title="Общие способы защиты от острых респираторных инфекций"
        concepts="респираторный этикет, мытье рук, медицинская маска"
        photo="moduleImg3.png"
        :goals="goals"
        prev="МОДУЛЬ 2"
        prevTitle="COVID-19 -  новая респираторная инфекция"
        next="МОДУЛЬ 4"
        nextTitle="COVID 19 И ВИЧ ИНФЕКЦИЯ"
        prevLink="module-two"
        nextLink="module-four"
        detailedPageLink="detailed-three"
        :showDetailedPage="showDetailedPage"
      />
      <DetailedPage v-if="!showDetailedPage" @prevModules="prevModules" />
    </div>
  </div>
</template>
<script>
import ModuleBanner from "@/components/shared-components/ModuleBanner.vue";
import DetailedPage from "@/views/site/modules/moduleThree/detailed-page";

import "./style.css";
export default {
  name: "moduleThree",
  components: { ModuleBanner, DetailedPage },
  data() {
    return {
      goals: [
        {
          id: 0,
          text: "Повысите свой уровень знаний по вопросам снижения риска заражения и распространения ОРИ и COVID-19",
        },
        {
          id: 1,
          text: "Узнаете об основных правилах респираторного этикета",
        },
        {
          id: 2,
          text: "Научитесь применять технику мытья рук для профилактики заражения респираторными инфекциями и COVID-19",
        },
        {
          id: 3,
          text: "Научитесь правильно надевать медицинскую маску",
        },
      ],
      showDetailedPage: true,
    };
  },
  methods: {
    showPage(isBoolean) {
      this.showDetailedPage = isBoolean;
    },
    prevModules(id) {
      this.showDetailedPage = id;
    },
  },
};
</script>
<style scoped></style>
