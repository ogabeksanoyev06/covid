<template>
  <div style="margin-top: 30px">
    <div class="container">
      <ModuleBanner
        @showPage="showPage"
        v-if="showDetailedPage"
        moduleId="МОДУЛЬ 1"
        title="Острые респираторные вирусные инфекции"
        concepts="ОРИ, грипп, вакцинация"
        photo="moduleImg1.png"
        :goals="goals"
        prev="МОДУЛЬ 1"
        prevTitle="Острые респираторные вирусные инфекции"
        next="МОДУЛЬ 2"
        nextTitle="COVID-19 - новая респираторная инфекция"
        prevLink=""
        nextLink="module-two"
        detailedPageLink="detailed-one"
        :showDetailedPage="showDetailedPage"
      />
      <DetailedPage v-if="!showDetailedPage" @prevModules="prevModules" />
    </div>
  </div>
</template>
<script>
import ModuleBanner from "@/components/shared-components/ModuleBanner.vue";
import DetailedPage from "@/views/site/modules/moduleOne/detailed-page";
import "./style.css";
export default {
  name: "moduleOne",
  components: { ModuleBanner, DetailedPage },
  data() {
    return {
      goals: [
        {
          id: 0,
          text: "о возбудителях основных острых респираторных инфекций",
        },
        {
          id: 1,
          text: "о симптомах острых респираторных инфекций",
        },
        {
          id: 2,
          text: "о том, какая категория населения входит в группу риска тяжелого течения и осложнений острых респираторных инфекций",
        },
        {
          id: 3,
          text: "об основных мерах профилактики острых респираторных инфекций",
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
