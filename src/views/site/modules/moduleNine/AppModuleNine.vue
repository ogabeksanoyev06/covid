<template>
  <div style="margin-top: 30px">
    <div class="container">
      <ModuleBanner
        @showPage="showPage"
        v-if="showDetailedPage"
        moduleId="МОДУЛЬ 9"
        title="ПРОФИЛАКТИКА ЭМОЦИОНАЛЬНОГО ВЫГОРАНИЯ У СОТРУДНИКОВ ННО, РАБОТАЮЩИХ С УЯЗВИМЫМИ ГРУППАМИ"
        concepts="эмоциональное выгорание, стресс"
        photo="moduleImg9.png"
        :goals="goals"
        prev="МОДУЛЬ 8"
        prevTitle="НАВЫКИ ЭФФЕКТИВНОГО ОБЩЕНИЯ В ДЕЯТЕЛЬНОСТИ СОЦИАЛЬНОГО РАБОТНИКА В УСЛОВИЯХ ПАНДЕМИИ COVID-19"
        next="МОДУЛЬ 1"
        nextTitle="Острые респираторные вирусные инфекции"
        prevLink="module-eight"
        nextLink="module-one"
      />
      <DetailedPage v-if="!showDetailedPage" @prevModules="prevModules" />
    </div>
  </div>
</template>
<script>
import ModuleBanner from "@/components/shared-components/ModuleBanner.vue";
import DetailedPage from "@/views/site/modules/moduleNine/detailed-page";
import "./style.css";
export default {
  name: "moduleNine",
  components: { ModuleBanner, DetailedPage },
  data() {
    return {
      goals: [
        {
          id: 0,
          text: "причины и признаки эмоционального выгорания",
        },
        {
          id: 1,
          text: "как выявлять у себя признаки эмоционального выгорания",
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
