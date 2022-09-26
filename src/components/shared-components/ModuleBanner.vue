<template>
  <div class="module">
    <div class="module__inner">
      <div class="module__content">
        <p class="module-number">{{ moduleId }}</p>
        <p class="module-name">{{ title }}</p>
        <ul class="module-desc">
          <li style="margin-bottom: 12px; font-weight: 700">
            По окончании модуля вы узнаете:
          </li>
          <li v-for="item in goals" :key="item.id">{{ item.text }}</li>
        </ul>
        <button class="module_btn" @click="detailedPage">
          Начать обучение
        </button>
      </div>
      <div class="module__photo"><img :src="`/images/${photo}`" alt="" /></div>
    </div>
    <div class="hr"></div>
    <p class="concepts">
      Ключевые понятия: <span>{{ concepts }}</span>
    </p>
    <div class="module__slide-btn">
      <div class="prev-module slide_btn" @click="goToPrev">
        <p class="slide_btn-title">предыдущий модуль</p>
        <div>
          <p class="module__slide-number">{{ prev }}</p>
          <p class="module__slide-name">{{ prevTitle }}</p>
        </div>
      </div>
      <div class="next-module slide_btn" @click="goToNext">
        <p class="slide_btn-title">Следующий модуль</p>
        <div>
          <p class="module__slide-number">{{ next }}</p>
          <p class="module__slide-name">{{ nextTitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/components/app-module-banner.css";
export default {
  name: "ModuleBanner",
  components: {},
  data() {
    return {
      show: false,
    };
  },
  props: {
    moduleId: String,
    title: String,
    concepts: String,
    photo: String,
    prev: String,
    prevTitle: String,
    prevLink: String,
    next: String,
    nextTitle: String,
    nextLink: String,
    goals: Array,
    detailedPageLink: String,
  },
  methods: {
    goToPrev() {
      this.$router.push({
        name: this.prevLink,
      });
    },
    goToNext() {
      this.$router.push({
        name: this.nextLink,
      });
    },
    detailedPage() {
      this.$emit("showPage", this.show);
    },
  },
};
</script>
<style scoped></style>
