<template>
  <div class="module">
    <img class="module__bg" src="/images/moduleBg.png" alt="" />
    <img class="module__bg2" src="/images/moduleBg2.png" alt="" />
    <div v-for="(item, index) in modules" :key="index" class="module__items">
      <modules-card
        :link="item.link"
        :title="item.title"
        :text="item.text"
        :photo="item.photo"
        :id="item.id"
        :maxBall="item.maxBall"
      />
    </div>
  </div>
</template>
<script>
import ModulesCard from "@/components/shared-components/ModulesCard.vue";

export default {
  name: "app-modules",
  components: { ModulesCard },
  data() {
    return {
      modules: [
        {
          id: 1,
          title: "Модуль",
          text: "Острые респираторные вирусные инфекции",
          link: "module-one",
          photo: "moduleImg1.png",
          maxBall: 70,
        },
        {
          id: 2,
          title: "Модуль",
          text: "COVID-19 - новая респираторная инфекция",
          link: "module-two",
          photo: "moduleImg2.png",
        },
        {
          id: 3,
          title: "Модуль",
          text: "Общие способы защиты от острых респираторных инфекций",
          link: "module-three",
          photo: "moduleImg3.png",
        },
        {
          id: 4,
          title: "Модуль",
          text: "COVID-19 и ВИЧ-инфекция",
          link: "module-four",
          photo: "moduleImg4.png",
        },
        {
          id: 5,
          title: "Модуль",
          text: "Оказание помощи женщинам с COVID-19 во время беременности и родов",
          link: "module-five",
          photo: "moduleImg5.png",
        },
        {
          id: 6,
          title: "Модуль",
          text: "COVID-19 и права человека",
          link: "module-six",
          photo: "moduleImg6.png",
        },
        {
          id: 7,
          title: "Модуль",
          text: "Конфиденциальность и информационная безопасность ЛЖВ",
          link: "module-seven",
          photo: "moduleImg7.png",
        },
        {
          id: 8,
          title: "Модуль",
          text: "Навыки эффективного общения в деятельности социального работника в условиях пандемии COVID-19",
          link: "module-eight",
          photo: "moduleImg8.png",
        },
        {
          id: 9,
          title: "Модуль",
          text: "Профилактика эмоционального выгорания у сотрудников ННО, работающих с уязвимыми группами",
          link: "module-nine",
          photo: "moduleImg9.png",
        },
      ],
    };
  },
  methods: {},
  computed: {},
  mounted() {},
};
</script>
<style scoped>
.module {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.module__items {
  margin-bottom: 24px;
  margin-left: 24px;
  max-width: 550px;
  width: 100%;
  min-height: 250px;
}
.module__bg {
  position: absolute;
  bottom: 52px;
  left: 0;
}
.module__bg2 {
  position: absolute;
  right: 0;
  top: 145px;
  width: 300px;
  height: 500px;
}
@media (max-width: 576px) {
  .module__items {
    margin-left: 0px;
  }
}
</style>
