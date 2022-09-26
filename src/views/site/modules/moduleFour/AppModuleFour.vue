<template>
  <div style="margin-top: 30px">
    <div class="container">
      <ModuleBanner
        @showPage="showPage"
        v-if="showDetailedPage"
        moduleId="МОДУЛЬ 4"
        title="COVID-19 и ВИЧ-инфекция"
        concepts="COVID-19 и ВИЧ, COVID-19 и АРВТ"
        photo="moduleImg4.png"
        :goals="goals"
        prev="МОДУЛЬ 3"
        prevTitle="Общие способы защиты от острых респираторных инфекций"
        next="МОДУЛЬ 5"
        nextTitle="ОКАЗАНИЕ ПОМОЩИ ЖЕНЩИНАМ С COVID-19 ВО ВРЕМЯ БЕРЕМЕННОСТИ И ПОСЛЕ РОДОВ"
        prevLink="module-three"
        nextLink="module-five"
        detailedPageLink="detailed-four"
        :showDetailedPage="showDetailedPage"
      />
      <DetailedPage v-if="!showDetailedPage" @prevModules="prevModules" />
    </div>
  </div>
</template>
<script>
import ModuleBanner from "@/components/shared-components/ModuleBanner.vue";
import DetailedPage from "@/views/site/modules/moduleFour/detailed-page";
import "./style.css";
export default {
  name: "moduleFour",
  components: { ModuleBanner, DetailedPage },
  data() {
    return {
      goals: [
        {
          id: 0,
          text: "о некоторых особенностях COVID-19 в сочетании с ВИЧ-инфекцией",
        },
        {
          id: 1,
          text: "как АРВТ препараты сочетаются с COVID-19",
        },
        {
          id: 2,
          text: "особенности ухода и поддержки беременных женщин и детей с ВИЧ во время пандемии COVID-19",
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
