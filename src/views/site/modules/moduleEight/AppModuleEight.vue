<template>
  <div style="margin-top: 30px">
    <div class="container">
      <ModuleBanner
        @showPage="showPage"
        v-if="showDetailedPage"
        moduleId="МОДУЛЬ 8"
        title="НАВЫКИ ЭФФЕКТИВНОГО ОБЩЕНИЯ В ДЕЯТЕЛЬНОСТИ СОЦИАЛЬНОГО РАБОТНИКА В УСЛОВИЯХ ПАНДЕМИИ COVID-19"
        concepts="эффективная коммуникация, эффективное консультирование"
        photo="moduleImg8.png"
        :goals="goals"
        prev="МОДУЛЬ 7"
        prevTitle="КОНФИДЕНЦИАЛЬНОСТЬ И ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ ЛЖВ"
        next="МОДУЛЬ 9"
        nextTitle="ПРОФИЛАКТИКА ЭМОЦИОНАЛЬНОГО ВЫГОРАНИЯ У СОТРУДНИКОВ ННО, РАБОТАЮЩИХ С УЯЗВИМЫМИ ГРУППАМИ"
        prevLink="module-seven"
        nextLink="module-nine"
        detailedPageLink="detailed-eight"
        :showDetailedPage="showDetailedPage"
      />
      <DetailedPage v-if="!showDetailedPage" @prevModules="prevModules" />
    </div>
  </div>
</template>
<script>
import ModuleBanner from "@/components/shared-components/ModuleBanner.vue";
import DetailedPage from "@/views/site/modules/moduleEight/detailed-page";
import "./style.css";
export default {
  name: "moduleFive",
  components: { ModuleBanner, DetailedPage },
  data() {
    return {
      goals: [
        {
          id: 0,
          text: "Ознакомитесь с руководящими принципами эффективного общения в условиях пандемии COVID-19",
        },
        {
          id: 1,
          text: "Узнаете о эффективной межличностной коммуникации в условиях повышенного стресса",
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
