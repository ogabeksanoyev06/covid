<template>
  <div class="tab_content">
    <div class="tab_content-title">
      4.3 Беременные и дети с ВИЧ и COVID-19[3]
    </div>
    <div class="tab_content-text">
      Иммунологические и физиологические изменения во время беременности обычно
      усиливают восприимчивость беременной к вирусным респираторным инфекциям.
      Беременные женщины более восприимчивы к ОРВИ, включая COVID-19. Могут
      возникнуть неблагоприятные исходы беременности, такие как дистресс плода
      (происходит, если плод получает недостаточное количество кислорода) и
      преждевременные роды.
    </div>
    <div class="tab_content-text">
      Результаты, полученные от небольшой группы беременных женщин с COVID-19,
      не нашли доказательств вертикальной передачи COVID-19 (от матери ребенку)
    </div>
    <div class="tab_content-text">
      Хотя случаев передачи инфекции по вертикальному механизму не
      зафиксировано, предметом для беспокойства остается риск заражения после
      рождения при контакте с заразными выделениями из дыхательных путей. В
      случае если у матери имеется предполагаемый, вероятный или подтвержденный
      диагноз COVID‑19, новорожденный должен получать питание согласно
      стандартной стратегии по кормлению с соблюдением необходимой
      предосторожности в соответствии с мерами профилактики инфекций и
      инфекционного контроля (ПИИК). Принятие решения о вскармливании младенца
      должно основываться на сравнении риска заражения младенца ВИЧ через
      грудное вскармливание с повышенным риском смерти от недоедания, диареи и
      пневмонии, если младенец находится не на исключительно грудном
      вскармливании. Для определения возможности искусственного вскармливания
      используют критерии ПОДСБ (приемлемости, осуществимости, доступности,
      стабильности и безопасности). Если Искусственное вскармливание не
      соответствует критериям ПОДСБ, то рекомендуется исключительно грудное
      вскармливание в течение 6 месяцев с постепенным отнятием от груди и
      получением матерью АРВП в течение всего периода кормления грудью. Так же,
      как и во всех подозрительных или подтвержденных случаях COVID‑19, при
      наличии симптомов заболевания тесно контактирующие с ребенком или
      практикующие выхаживание по методу «кенгуру» матери должны соблюдать
      правила респираторной гигиены, в том числе во время кормления (например,
      при наличии симптомов респираторной инфекции пользоваться медицинской
      маской во время контакта с новорожденным), проводить гигиеническую
      обработку рук до и после контакта с новорожденным, а также регулярно
      очищать и дезинфицировать поверхности, с которыми они контактировали.
    </div>
    <div class="tab_content-text">
      Для ЛЖВ обязательно учитывается степень иммунодефицита и уровень вирусной
      нагрузки, приём АРВП во время беременности, длительность приема,
      приверженность к терапии. Необходимо знать, что правильный прием АРВП и
      неопределяемая вирусная нагрузка (менее 50 копий/мл) значительно повышают
      вероятность родов через естественные пути без повышения риска передачи ВИЧ
      ребенку.
    </div>
    <div class="tab_content-text">
      Младенцы и дети с ВИЧ должны быть вакцинированы согласно календарю
      прививок, включая вакцины против гриппа и пневмококка.
    </div>
    <div class="tab_content-title">
      Если у Вас есть подозрение или подтвержденная COVID-19 инфекция:
    </div>
    <ul class="tab-content_ul">
      <div>
        <li v-for="(item, i) in items" :key="i" class="tab-content_li">
          <span>{{ item.name }}</span>
        </li>
      </div>
    </ul>
    <div class="impInfo_content">
      <img src="/svg/ImportantInfo.svg" alt="" />
      <p style="max-width: 550px; width: 100%">
        Для закрепления знаний, ответьте на вопросы по теме модуля
      </p>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
export default {
  name: "tab-3",
  components: {},
  data() {
    return {
      items: [
        {
          id: 0,
          name: "• Продолжать прием АРВТ",
        },
        {
          id: 1,
          name: "• Поддерживать связь с лечащим врачом ",
        },
        {
          id: 2,
          name: "• Купировать симптомы дома с помощью поддерживающей терапии – по назначению врача",
        },
        {
          id: 3,
          name: "• При симптомах ухудшения состояния- высокая температура, не снижающаяся в течение 48 часов, одышка, чувство нехватки воздуха – вызвать скорую медицинскую помощь (103).",
        },
        {
          id: 4,
          name: "• Следует избегать смены или замены АРВТ",
        },
        {
          id: 5,
          name: "•	Для пациентов в критическом состоянии требующих кормление через трубку, необходимо заменить АРВТ на доступные жидкие формы, либо АВТ таблетки давать в виде порошка",
        },
      ],
    };
  },
};
</script>
<style scoped>
.tabImg {
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
}
.tabImg img {
  width: 100%;
  object-fit: contain;
}
.tab_content-text {
  margin-bottom: 10px;
}
</style>
