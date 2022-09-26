<template>
  <div class="tab_content">
    <div class="ImportantInformation">
      <div class="impInfo_content">
        <img src="/svg/ImportantInfo.svg" alt="" />
        <p style="max-width: 550px; width: 100%">
          Добро пожаловать в модуль №5!
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
        Беременность - это физиологическое состояние, создающее
        предрасположенность к респираторным вирусным инфекциям. Это связано с
        физиологическими изменениями в иммунной и сердечно-сосудистой системе. У
        беременных женщин повышена вероятность тяжелого течения респираторных
        вирусных инфекций.
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
