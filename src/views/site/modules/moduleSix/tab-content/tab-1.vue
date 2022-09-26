<template>
  <div class="tab_content">
    <div class="ImportantInformation">
      <div class="impInfo_content">
        <img src="/svg/ImportantInfo.svg" alt="" />
        <p style="max-width: 550px; width: 100%">
          Добро пожаловать в модуль №6!
        </p>
      </div>
      <Accordion :activeProp="0">
        <AccordionItem>
          <template slot="accordion-trigger">
            <div class="module__accordion-header">
              <div class="accordion-img">
                <img src="/svg/lineIcon.svg" alt="" />
              </div>
              <h4 class="accordion-text">В этом модуле вы узнаете:</h4>
            </div>
          </template>
          <template slot="accordion-content">
            <div style="padding: 0 15px 15px">
              <div class="accordion-item">
                <h4 class="accordion-text">
                  • информацию о беременности и COVID-19
                </h4>
                <h4 class="accordion-text">
                  • о способах защиты для беременных и кормящих матерей и их
                  детей от COVID-19
                </h4>
                <h4 class="accordion-text">
                  • особенности ведения родов в период COVID-19
                </h4>
                <h4 class="accordion-text">
                  • об уходе за новорожденными, матери которых болеют COVID-19
                </h4>
              </div>
            </div>
          </template>
        </AccordionItem>
      </Accordion>
      <div class="tab_content-title">ОСНОВНАЯ ИНФОРМАЦИЯ</div>
      <div class="tab_content-text">
        Впервые термин «этика» употребил Аристотель, как учение о
        нравственности, озна-чает систему непротиворечивых суждений о смысле и
        назначении морали, а также нормы, правила, обычаи, регулирующие
        поведение и взаимоотношения людей в обществе.
      </div>
      <div class="tab_content-text">
        Медицинская этика или медицинская деонтология – совокупность этических
        норм и принципов поведения медицинских работников при выполнении ими
        своих профессиональных обязанностей. Медицинская этика не только изучает
        нравственность человека, но и воздействует на его идеологическое
        формирование.
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
    return {};
  },
};
</script>
<style scoped>
.tab_content-text {
  margin-bottom: 10px;
}
</style>
