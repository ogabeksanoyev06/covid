<template>
  <div class="tab_content">
    <div class="tab_content-block">
      <div class="tab_content-title">Невербальное общение</div>
      <div class="tab_content-text">
        <strong>Невербальное общение</strong> - это мимика, поза тела, жесты и
        движения человека во время общения с собеседником. Невербальное общение
        передает эмоции и чувства. Часто такой вид общения может иметь больший
        эффект, чем вербальное общение, и часто дает лучшую картину того, что
        ощущает клиент. В то же время стоит помнить о своем собственном
        невербальном общении, так как это может помочь построить или, наоборот,
        разрушить отношения с клиентом. Важно: сохранять визуальный контакт,
        находиться в открытой позе (руки и ноги не скрещены, корпус тела
        развернут к собеседнику), жестами и мимикой поощрять речь другого
        человека – кивать в ответ на какие-либо утверждения и т.д.
      </div>
    </div>
    <div class="tabImg">
      <img class="w-100" src="/images/tabImg/image 217.png" alt="wewe" />
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
  max-width: 460px;
  width: 100%;
  margin: 10px auto;
}
.tabImg img {
  object-fit: contain;
}
</style>
