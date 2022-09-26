<template>
  <div class="tab_content">
    <div class="ImportantInformation">
      <div class="impInfo_content">
        <img src="/svg/ImportantInfo.svg" alt="" />
        <p style="max-width: 550px; width: 100%">
          Добро пожаловать в модуль №7!
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
                  • руководящие принципы обеспечения конфиденциальности и
                  безопасности информации о пациентах.
                </h4>
                <h4 class="accordion-text">
                  • концепции, влияющие на развитие, и реализацию защиты
                  конфиденциальных данных. Неприкосновенность частной жизни,
                  конфиденциальность и безопасность. детей от COVID-19
                </h4>
                <h4 class="accordion-text">
                  • законы РУз, регулирующие права человека и безопасность ЛЖВ
                </h4>
              </div>
            </div>
          </template>
        </AccordionItem>
      </Accordion>
      <div class="tab_content-title">Конфиденциальность</div>
      <div class="tab_content-text">
        <strong>Конфиденциальность—</strong> это одновременно юридическое и
        этическое понятие. Юридическое понятие относится к правовой защите
        которое было предоставлено лицу для контроля как доступа к личным
        данным, так и их использования информации и обеспечивает общую основу, в
        рамках которой как конфиденциальность, так и безопасность реализована.
      </div>
      <div class="tab_content-text">
        Конфиденциальность относится к праву физических лиц на защиту своих
        данных во время хранения, передача и использование для предотвращения
        несанкционированного раскрытия этой информации третьим лицам стороны.
      </div>
      <div class="tab_content-text">
        Это может повлиять на то, требуется ли информированное согласие внутри
        страны от отдельных лиц до того, как информация на уровне пациента может
        быть использована для мониторинга программы и оценки или можно ли
        сделать неявное предположение, что кто-либо, использующий публичные
        сервисы соглашается с тем, что их информация может быть использована для
        мониторинга и оценки таких программ в чтобы улучшить их для всего
        населения. Если второе, то решения должны быть приняты могут ли и при
        каких условиях номинальные, анонимные или псевдо анонимные данные
        собирают, хранят и используют.
      </div>
      <div class="tab_content-block">
        <div class="tab_content-title">
          Какая информация относится к личности?
        </div>
        <div class="tab_content-text">
          Основными данными о личности (персональными данными) являются
          национальность, образование, семейное положение, материальное
          положение, религиозная принадлежность, состояние здоровья, а также
          адрес и место рождения.
        </div>
      </div>
      <div class="content_flex">
        <div class="tab_content-block content_flex-info">
          <div class="tab_content-text">
            <strong>Конфиденциальность -</strong> право физических лиц на защиту
            своих данных и предотвращение несанк-ционированного раскрытия
            информации третьим лицам.
          </div>
          <div class="tab_content-text">
            Конфиденциальность это одновременно юридичес-кое и этическое
            понятие.
          </div>
        </div>
        <div class="content_flex-img">
          <img src="/images/tabImg/image 188.png" alt="" />
        </div>
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
.content_flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content_flex-info {
  max-width: 420px;
  width: 100%;
}
.content_flex-img {
  max-width: 250px;
  width: 100%;
}
.content_flex-img img {
  width: 100%;
  object-fit: contain;
}
@media (max-width: 768px) {
  .content_flex {
    flex-wrap: wrap;
    justify-content: center;
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
