<template>
  <div class="tab_content">
    <div class="ImportantInformation">
      <div class="impInfo_content">
        <img src="/svg/ImportantInfo.svg" alt="" />
        <p style="max-width: 550px; width: 100%">
          Знаете ли Вы как можно защитить себя от заражения ОРИ и COVID-19?
        </p>
      </div>
      <div class="tab_content-text">
        Перед тем, как приступить к изучению материала модуля, попробуйте
        ответить на следующие вопросы. ( Обучающий герой держит вопросы в виде
        карточек или флажков….)
      </div>
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
      <strong>тестовое задание с оценками, 60% проходной, </strong>
      <div class="tab_content-text">
        Очень хорошо! Давайте теперь запомним основные меры профилактики ОРИ и
        COVID-19. Прочтите информацию и посмотрите видео-материалы к модулю №3
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
import Accordion from "@/components/shared-components/Accordion.vue";
import AccordionItem from "@/components/shared-components/AccordionItem.vue";
export default {
  name: "tab-1",
  components: { Accordion, AccordionItem },
  data() {
    return {
      ImportantInformation: [
        {
          id: 0,
          name: "Что такое ОРИ?",
          text: [
            {
              id: 0,
              title1: "•	Острые респираторные инфекции",
              title2: "•	Острые риновирусные инфекции",
            },
          ],
        },
        {
          id: 1,
          name: "Как передаются  ОРИ?",
          text: [
            {
              id: 1,
              title1: "•	Воздушно-капельным путём",
              title2: "•	Контактным и половым путём",
            },
          ],
        },
        {
          id: 2,
          name: "Возбудитель COVID-19 ?",
          text: [
            {
              id: 2,
              title1: "•Новый вид бактерий",
              title2: "• Вирус SARS-CoV-2.",
            },
          ],
        },
        {
          id: 3,
          name: "В каком году впервые узнали о новой коронавирусной инфекции?",
          text: [
            {
              id: 3,
              title1: "•	В 2020году",
              title2: "•	В 2019 году",
            },
          ],
        },
        {
          id: 4,
          name: "В какой стране впервые обнаружили новую коронавирусную инфекцию?",
          text: [
            {
              id: 4,
              title1: "•	В Китайской Народной Республике (г. Ухань)",
              title2: "•	В США ",
            },
          ],
        },
        {
          id: 5,
          name: "Как вы думаете, сколько минут надо мыть руки?",
          text: [
            {
              id: 5,
              title1: "•	10 секунд",
              title2: "•	Не менее 20-30 секунд ",
            },
          ],
        },
        {
          id: 6,
          name: "Сколько % спирта по вашему мнению должен содержать антисептик?",
          text: [
            {
              id: 6,
              title1: "•	Не имеет значения ",
              title2: "•	Не менее 80% спирта",
            },
          ],
        },
        {
          id: 7,
          name: "Как часто надо проветривать помещения?",
          text: [
            {
              id: 7,
              title1: "•	Ежедневно",
              title2: "•	Каждые 2-3 часа",
            },
          ],
        },
        {
          id: 8,
          name: "Что такое вакцинация?",
          text: [
            {
              id: 8,
              title1: "•	Лечение вирусной инфекции",
              title2: "•	Эффективный способ защиты от инфекционных заболеваний",
            },
          ],
        },
        {
          id: 9,
          name: "Эффективны ли антибиотики при коронавирусной инфекции?",
          text: [
            {
              id: 9,
              title1: "•	Да",
              title2: "•	Антибиотики не способны справиться с вирусом",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style scoped></style>
