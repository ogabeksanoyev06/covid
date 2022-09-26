<template>
  <div class="tab_content">
    <div class="tab_content-block">
      <div class="tab_content-title">Индивидуальные особенности человека.</div>
      <div class="tab_content-text">
        Кому-то проще целыми днями выполнять рутинную работу, но в случае
        необходимости мобилизации сил и аврального режима труда на таких людей
        сложно рассчитывать. Другие люди способны изначально трудиться увлеченно
        и активно, но быстро «выдыхаются». Есть хорошие исполнители, которым
        необходимы прямые указания руководителя, и творческие работники,
        предпочитающие в своей деятельности свободу выбора. Понятно, что в
        случаях, когда поставленные перед сотрудником задачи не соответствуют
        складу его личности, СЭВ (эмоциональное выгорание) может развиться
        быстрее и глубже.
      </div>
      <div class="tab_content-title text-center">ПРИНЦИП САМОРЕГУЛЯЦИИ</div>
      <div class="tabImg">
        <img src="/images/tabImg/image 210.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
export default {
  name: "tab-6",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.tab_content-text {
  margin-bottom: 10px;
}
.tabImg {
  max-width: 590px;
  width: 100%;
  margin: 30px auto;
}
.tabImg img {
  width: 100%;
  object-fit: contain;
}
</style>
