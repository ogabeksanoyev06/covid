<template>
  <div class="tab_content">
    <Accordion :activeProp="0">
      <AccordionItem v-for="(item, idx) in ImportantInformation" :key="idx">
        <template slot="accordion-trigger">
          <div class="module__accordion-header">
            <div class="accordion-img">
              <img src="/svg/lineIcon.svg" alt="" />
            </div>
            <h4 class="accordion-text">
              {{ item.name }}
            </h4>
          </div>
        </template>
        <template slot="accordion-content">
          <div
            style="padding: 0 15px 15px"
            v-for="(description, i) in item.text"
            :key="i"
          >
            <div class="accordion-item">
              <h4 class="accordion-text">
                {{ description.title1 }}
              </h4>
              <h4 class="accordion-text">
                {{ description.title2 }}
              </h4>
            </div>
          </div>
        </template>
      </AccordionItem>
    </Accordion>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
import Accordion from "@/components/shared-components/Accordion.vue";
import AccordionItem from "@/components/shared-components/AccordionItem.vue";
export default {
  name: "tab-4",
  components: { Accordion, AccordionItem },
  data() {
    return {
      ImportantInformation: [
        {
          id: 0,
          name: "Отличается ли течение COVID-19 инфекции у ЛЖВ?",
          text: [
            {
              id: 0,
              title1:
                "•	ЛЖВ, получающие эффективное антиретровирусное лечение (АРТ), не подвержены большему риску заражения коронавирусом.",
              title2:
                "• У ЛЖВ наблюдается тяжёлое течение коронавирусной инфекции",
            },
          ],
        },
        {
          id: 1,
          name: "Можно ли лечить COVID-19 инфекцию препаратами АРВТ?",
          text: [
            {
              id: 1,
              title1:
                "•	Препараты АРВТ не рекомендовано использовать для лечения коронавирусной инфекции",
              title2:
                "•	Препарат АРВТ-Лопинавир/ритонавир эффективен для лечения коронавирусной инфекции",
            },
          ],
        },
        {
          id: 2,
          name: "На сколько дней должен быть минимальный запас АРВТ?",
          text: [
            {
              id: 2,
              title1: "•	На неделю",
              title2: "•  Минимальный запас должен быть на 30дней",
            },
          ],
        },
        {
          id: 3,
          name: "Надо ли прекращать приём АРВТ во время лечения COVID-19 инфекции?",
          text: [
            {
              id: 3,
              title1: "•	Необходимо временно прекратить приём АРВТ ",
              title2:
                "•	ЛЖВ при заболевании коронавирусной инфекцией не должны прекращать приём АРВТ",
            },
          ],
        },
        {
          id: 4,
          name: "При каких симптомах ОРИ необходимо вызвать скорую медицинскую помощь?",
          text: [
            {
              id: 4,
              title1:
                "•	Лихорадка более 3х дней, боль в груди при дыхании, нет улучшения после 5-7 дней лечения простуды",
              title2: "•	Насморк, пониженный аппетит",
            },
          ],
        },
        {
          id: 5,
          name: "Надо ли менять схему АРВТ во время лечения COVID-19 инфекции?",
          text: [
            {
              id: 5,
              title1: "•	Необходимо заменить схему РАВТ",
              title2:
                "•	Схему АРВТ не следует менять в период COVID-19 инфекции, если нет медицинской необходимости",
            },
          ],
        },
        {
          id: 6,
          name: "В каких случаях для ЛЖВ рекомендована особая защита (изоляция)?",
          text: [
            {
              id: 6,
              title1:
                "• Особая защита (изоляция) в период COVID-19 рекомендуется людям, живущим с ВИЧ, у которых количество CD4 < 200 клеток/мм3, есть другие серьезные сопутствующие заболевания или определяемая вирусная нагрузка.",
              title2: "•	Особая защита не рекомендована для ЛЖВ",
            },
          ],
        },
        {
          id: 7,
          name: "Надо ли вакцинировать ЛЖВ от гриппа?",
          text: [
            {
              id: 7,
              title1: "•	Необходимо проведение вакцинации в положенные сроки",
              title2: "•	Вакцинация от гриппа противопоказана всем ЛЖВ",
            },
          ],
        },
        {
          id: 8,
          name: "Надо ли вакцинировать ЛЖВ от COVID-19?",
          text: [
            {
              id: 8,
              title1: "•	Вакцинация ЛЖВ от COVID-19 не рекомендована",
              title2: "•	ЛЖВ могут быть вакцинированы от COVID-19",
            },
          ],
        },
        {
          id: 9,
          name: " Укажите основные способы борьбы с ОРИ",
          text: [
            {
              id: 9,
              title1:
                "•	Вакцинация, социальная дистанция, ношение медицинской маски, гигиена рук, гигиена помещения",
              title2: "•	Нет эффективных способов борьбы с ОРИ",
            },
          ],
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
</style>
