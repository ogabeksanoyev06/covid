<template>
  <div style="margin-top: 30px">
    <div class="container">
      <ModuleBanner
        @showPage="showPage"
        v-if="showDetailedPage"
        moduleId="МОДУЛЬ 7"
        title="КОНФИДЕНЦИАЛЬНОСТЬ И ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ ЛЖВ"
        concepts="конфиденциальность, информационная безопасность"
        photo="moduleImg7.png"
        :goals="goals"
        prev="МОДУЛЬ 6"
        prevTitle="ОКАЗАНИЕ ПОМОЩИ ЖЕНЩИНАМ С COVID-19 ВО ВРЕМЯ БЕРЕМЕННОСТИ И ПОСЛЕ РОДОВ"
        next="МОДУЛЬ 8"
        nextTitle="НАВЫКИ ЭФФЕКТИВНОГО ОБЩЕНИЯ В ДЕЯТЕЛЬНОСТИ СОЦИАЛЬНОГО РАБОТНИКА В УСЛОВИЯХ ПАНДЕМИИ COVID-19"
        prevLink="module-six"
        nextLink="module-eight"
      />
      <DetailedPage v-if="!showDetailedPage" @prevModules="prevModules" />
    </div>
  </div>
</template>
<script>
import ModuleBanner from "@/components/shared-components/ModuleBanner.vue";
import DetailedPage from "@/views/site/modules/moduleSeven/detailed-page";
import "./style.css";
export default {
  name: "moduleFive",
  components: { ModuleBanner, DetailedPage },
  data() {
    return {
      goals: [
        {
          id: 0,
          text: "руководящие принципы обеспечения конфиденциальности и безопасности информации о пациентах.",
        },
        {
          id: 1,
          text: "концепции, влияющие на развитие, и реализацию защиты конфиденциальных данных. Неприкосновенность частной жизни, конфиденциальность и безопасность.",
        },
        {
          id: 2,
          text: "законы РУз, регулирующие права человека и безопасность ЛЖВ",
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
