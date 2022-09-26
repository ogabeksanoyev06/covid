<template>
  <div class="tab_content">
    <div class="module_title">1.1. Острые респираторные инфекции и грипп</div>
    <div>
      <div class="tab_content-block">
        <div class="tab_content-title">ОСНОВНАЯ ИНФОРМАЦИЯ</div>
        <div class="tab_content-text">
          Грипп, коронавирусная инфекция (COVID-19) и другие острые
          респираторные инфекции (ОРИ) находятся на первом месте по числу
          ежегодно заболевающих людей.
        </div>
      </div>
      <div class="tab_content-block">
        <div class="tab_content-title">
          Острые респираторные инфекции (ОРИ)[1] (МКБ-10 J00-J06, J20-J22)
        </div>
        <div class="tab_content-text">
          Острые респираторные инфекции (ОРИ)[1] (МКБ-10 J00-J06, J20-J22) –
          инфекционные заболевания, в которые вовлечены дыхательные пути.
          [2]Передаются преимущественно воздушно-капельным путём, поражают
          различные отделы органов дыхания и входят в группу острых
          респираторных заболеваний, являясь самыми распространёнными острыми
          заболеваниями среди людей. Причинами могут быть вирусы и бактерии, а
          также грибы. Из числа вирусов могут вызываться вирусами гриппа,
          парагриппа, риновирусами, коронавирусами, аденовирусами,
          респираторно-синцитиальным вирусом и другими.[3]
        </div>
      </div>
      <ul class="tab-content_ul">
        <div style="max-width: 550px; width: 100%" class="content_flex-info">
          <li v-for="(item, i) in items" :key="i" class="tab-content_li">
            <img src="/svg/virusIcon.svg" alt="" />
            <span>{{ item.name }}</span>
          </li>
        </div>
        <div class="content_flex-img">
          <img src="/images/tabImg/image 142.png" alt="" />
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
export default {
  name: "tab-1",
  components: {},
  data() {
    return {
      items: [
        {
          id: 0,
          name: "ОРИ находятся на первом месте по числу ежегодно заболевающих людей",
        },
        {
          id: 1,
          name: "Поражают органы дыхания ",
        },
        {
          id: 2,
          name: " Передаются воздушно-капельным путём (реже – через предметы и грязные руки)",
        },
        {
          id: 3,
          name: "Вирусы ОРИ живут вне организма до трех недель",
        },
        {
          id: 4,
          name: "Вероятность заражения выше в замкнутых помещениях",
        },
      ],
    };
  },
};
</script>
<style scoped>
.content_flex-img {
  max-width: 150px;
  width: 100%;
  margin: 10px auto;
}
.content_flex-img img {
  width: 100%;
  object-fit: contain;
}
@media (max-width: 768px) {
  .tab-content_ul {
    flex-wrap: wrap;
  }
  .content_flex-img {
    order: 1;
  }
  .content_flex-info {
    max-width: 100%;
    order: 2;
  }
}
</style>
