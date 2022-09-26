<template>
  <div style="margin-top: 30px">
    <div class="container">
      <ModuleBanner
        @showPage="showPage"
        v-if="showDetailedPage"
        moduleId="МОДУЛЬ 2"
        title="COVID-19 - новая респираторная инфекция"
        concepts="COVID-19, вакцинация от COVID-19"
        photo="moduleImg2.png"
        :goals="goals"
        prev="МОДУЛЬ 1"
        prevTitle="Острые респираторные вирусные инфекции"
        next="МОДУЛЬ 3"
        nextTitle="Общие способы защиты от острых респираторных инфекций"
        prevLink="module-one"
        nextLink="module-three"
        detailedPageLink="detailed-two"
        :showDetailedPage="showDetailedPage"
      />
      <DetailedPage v-if="!showDetailedPage" @prevModules="prevModules" />
    </div>
  </div>
</template>
<script>
import ModuleBanner from "@/components/shared-components/ModuleBanner.vue";
import DetailedPage from "@/views/site/modules/moduleTwo/detailed-page";
import "./style.css";
export default {
  name: "moduleTwo",
  components: { ModuleBanner, DetailedPage },
  data() {
    return {
      goals: [
        {
          id: 0,
          text: "знать о возбудителе COVID-19, группах риска тяжелого течения болезни и основных симптомах заболевания",
        },
        {
          id: 1,
          text: "отличать основные симптомы COVID-19, гриппа и других ОРИ",
        },
        {
          id: 2,
          text: "знакомы с рекомендациями о вакцинации против COVID-19",
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
