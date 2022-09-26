<template>
  <div class="tab_content">
    <div class="tab_content-block">
      <div class="tab_content-title">Превышение «лимитов»</div>
      <div class="tab_content-text">
        Нервная система человека имеет определенный «лимит общения» — за день
        человек в состоянии уделить полноценное внимание только ограниченному
        количеству людей. Если же их число превышает «лимит», неизбежно наступит
        истощение, а потом и выгорание. Такой же лимит есть и у восприятия,
        внимания, решения задач. Этот предел индивидуален, он очень подвижен,
        зависит от состояния нервной системы человека.
      </div>
      <div class="tabImg">
        <img src="/images/tabImg/image 209.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
export default {
  name: "tab-3",
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
  max-width: 650px;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
}
.tabImg img {
  width: 100%;
  object-fit: contain;
}
</style>
