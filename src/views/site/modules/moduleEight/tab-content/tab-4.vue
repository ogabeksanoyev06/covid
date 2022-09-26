<template>
  <div class="tab_content">
    <div class="tab_content-title">
      Принципы эффективной коммуникации в условиях пандемии COVID-19:
    </div>
    <div class="tabImg">
      <img class="w-100" src="/images/tabImg/image 215.png" alt="wewe" />
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
export default {
  name: "tab-4",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.tabImg {
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
}
.tabImg img {
  width: 100%;
  object-fit: contain;
}
.tab_content-title {
  margin-bottom: 20px;
  text-transform: uppercase;
  max-width: 600px;
  width: 100%;
}
</style>
