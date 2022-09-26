<template>
  <div class="tab_content">
    <Accordion :activeProp="0">
      <AccordionItem>
        <template slot="accordion-trigger">
          <div class="module__accordion-header">
            <div class="accordion-img">
              <img src="/svg/lineIcon.svg" alt="" />
            </div>
            <h4 class="accordion-text">
              Когда необходимо срочное обращение к врачу?
            </h4>
          </div>
        </template>
        <template slot="accordion-content">
          <div style="padding: 0 15px 15px">
            <div class="accordion-item">
              <div class="tab_content-text">
                Если вы обнаружили перечисленные симптомы у себя и членов семьи,
                то обратитесь к вашему лечащему врачу. Вызвать неотложную
                медицинскую помощь необходимо в следующих ситуациях:
              </div>
              <ul class="tab-content_ul">
                <div>
                  <li
                    v-for="(item, i) in items"
                    :key="i"
                    class="tab-content_li"
                  >
                    <span>{{ item.name }}</span>
                  </li>
                </div>
              </ul>
              <div class="tab_content-text">
                Лечение ОРВИ и ГРИПП проводится под контролем врача, который
                только после осмотра назначает схему лечения. Заболевший должен
                соблюдать постельный режим, полноценно питаться и пить больше
                жидкости. Применение противовирусных средств при лёгком течении
                ОРВИ не требуется. Большинство людей выздоравливают сами по
                себе. Антибиотики не способны справиться с вирусом. Принимать
                антибиотики для профилак-тики - опасно и бесполезно Антибиотики
                назначает только врач.[11]
              </div>
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
  name: "tab-6",
  components: { Accordion, AccordionItem },
  data() {
    return {
      items: [
        {
          id: 0,
          name: "• температура тела превышает 40˚С;",
        },
        {
          id: 1,
          name: "• лихорадка продолжается более 3 дней;",
        },
        {
          id: 2,
          name: "• появились сильные боли в груди при дыхании, кашле;;",
        },
        {
          id: 3,
          name: "• больной потерял сознание;",
        },
        {
          id: 4,
          name: "• у человека появились судороги",
        },
        {
          id: 5,
          name: "• на теле появилась сыпь в виде мелких багровых точек;",
        },
        {
          id: 6,
          name: "• рвота и/или диарея не прекращаются;",
        },
        {
          id: 7,
          name: "• нет улучшения после 5-7 дней лечения простуды или гриппа и т. д.",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
