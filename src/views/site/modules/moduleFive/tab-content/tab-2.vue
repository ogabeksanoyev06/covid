<template>
  <div class="tab_content">
    <div class="module_title">5.1 COVID-19 и беременность</div>
    <div class="tab_content-text">
      Все беременные, родильницы и их новорожденные, в том числе с
      подтвержденной или предполагаемой инфекцией COVID-19, имеет право на
      высококачественную помощь и уход до, во время и после родов.
    </div>
    <div class="tab_content-text">
      Как представляется, беременные женщины не подвержены более высокому риску
      заражения коронавирусом SARS-CoV-2, вызывающим COVID-19. Тем не менее, по
      данным исследований, в случае заражения беременные подвержены более
      высокому риску развития тяжелых форм COVID-19 по сравнению с другими
      женщинами аналогичного возраста. Кроме того, заболевание COVID-19 во время
      беременности также ассоциируется с повышенным риском преждевременных
      родов.
    </div>
    <div class="tab_content-title mt-3 text-center">
      COVID-19 И БЕРЕМЕННОСТЬ
    </div>
    <div class="tabImg">
      <img class="w-100" src="/images/tabImg/image 171.png" alt="wewe" />
    </div>
    <div class="tab_content-text">
      В целом клинические проявления коронавирусной инфекции схожи с общим
      населением, часто наблюдаются бессимптомные формы, но у беременных с
      COVID-19 возможно развитие критического состояния на фоне стабильного
      течения заболевания. Особенно высокому риску развития серьёзных осложнений
      в случае заражения COVID-19 подвержены беременные более старшего возраста,
      имеющие избыточный вес, страдающие сопутствующими заболеваниями
      (артериальная гипертония, сахарный диабет)
    </div>
    <div class="tab_content-text">
      Поэтому очень важно, чтобы беременные женщины принимали необходимые меры
      предосторожности для профилактики заражения COVID-19. Во избежание
      заражения COVID-19 беременным следует принимать такие же меры
      предосторожности, что и остальным людям.
    </div>
    <div class="tab_content-text">
      ВОЗ рекомендует вакцинировать беременных женщин в тех случаях, когда
      польза от вакцинации перевешивает потенциальные риски (например, когда
      женщины подвергаются высокому риску заражения COVID-19 или имеют
      сопутствующие заболевания, которые помещают их в группу высокого риска
      тяжелого течения COVID-19)[2] Вакцины против COVID-19 чрезвычайно
      эффективны: они обеспечивают надежную защиту от тяжелых заболеваний и
      смерти в результате заражения коронавирусом. Беременные женщины, судя по
      имеющимся данным, в результате вакцинации получают тот же уровень защиты,
      что и небеременные.
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
export default {
  name: "tab-2",
  components: {},
  data() {
    return {
      items: [
        {
          id: 0,
          name: "• Вакцинация - самый эффективный способ защиты от вирусных инфекций (например, от гриппа, COVID-19);",
        },
        {
          id: 1,
          name: "• Избегать многолюдных мест (особенно закрытых помещений);",
        },
        {
          id: 2,
          name: "• Используйте медицинскую маску, если ухаживаете или контактируете с людьми с признаками ОРИ.",
        },
        {
          id: 3,
          name: "• Соблюдение социальной дистанции в 1,5-2 метра;",
        },
        {
          id: 4,
          name: "•  Гигиена рук (тщательное мытье рук с мылом не менее 20 сек, использование антисептиков, содержащих 80% спирта, в случае невозможности мытья рук);",
        },
        {
          id: 5,
          name: "• Влажная уборка помещения с использованием моющих средств и дезинфицирующих средств;",
        },
        {
          id: 6,
          name: "• Увлажнение и частое проветривание помещений (каждые 2-3 часа).",
        },
      ],
    };
  },
};
</script>
<style scoped>
.tabImg {
  max-width: 200px;
  width: 100%;
  margin: 0 auto;
}
.tab_content-text {
  margin-bottom: 10px;
}
@media (max-width: 768px) {
}
</style>
