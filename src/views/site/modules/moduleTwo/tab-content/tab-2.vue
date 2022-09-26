<template>
  <div class="tab_content">
    <div class="tab_content-block mt-3">
      <div class="tab_content-title">Диагностика COVID-19</div>
      <div class="tab_content-text">
        Узнать о наличии инфекции в организме можно с помощью лабораторных
        анализов и рентгенологического исследования (компьютерной томографии). В
        лаборатории определяют наличие вируса с помощью ПЦР (полимеразной цепной
        реакции) и тестов на антитела (наличие иммунитета к COVID-19) В отличие
        от ПЦР, тесты на антитела не определяют наличие активного вируса в
        организме, но определяют наличие иммунитета к нему, то есть наличие IgM-
        и IgG-антител в крови. Если обнаруживаются одновременно антитела IgG и
        IgM, то это означает, что инфекция была в течение нескольких
        предшествующих недель, если же обнаруживаются лишь IgG, то инфекция была
        ранее.
      </div>
      <div class="tab_content-text">
        При этом тесты не показывают, выздоровел ли человек. Таким образом,
        тесты могут использоваться для определения тех, кто был инфицирован[6]
      </div>
      <div class="tabImg">
        <img class="w-100" src="/images/tabImg/image 198.png" alt="wewe" />
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
export default {
  name: "tab-2",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.tabImg {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}
</style>
