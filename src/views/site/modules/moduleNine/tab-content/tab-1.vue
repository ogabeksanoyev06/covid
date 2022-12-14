<template>
  <div class="tab_content">
    <div class="ImportantInformation">
      <div class="impInfo_content">
        <img src="/svg/ImportantInfo.svg" alt="" />
        <p style="max-width: 550px; width: 100%">
          Добро пожаловать в модуль №9!
        </p>
      </div>
      <Accordion :activeProp="0">
        <AccordionItem>
          <template slot="accordion-trigger">
            <div class="module__accordion-header">
              <div class="accordion-img">
                <img src="/svg/lineIcon.svg" alt="" />
              </div>
              <h4 class="accordion-text">
                В нем мы с вами активно поработаем над профилактикой
                эмоционального выгорания и узнаем:
              </h4>
            </div>
          </template>
          <template slot="accordion-content">
            <div style="padding: 0 15px 15px">
              <div class="accordion-item">
                <h4 class="accordion-text">
                  • причины и признаки эмоционального выгорания
                </h4>
                <h4 class="accordion-text">
                  • как выявлять у себя признаки эмоционального выгорания
                </h4>
              </div>
            </div>
          </template>
        </AccordionItem>
      </Accordion>
      <div class="tab_content-title">
        9.1 Определение, причины и признаки эмоционального выгорания
      </div>
      <div class="tab_content-title mt-3">ОСНОВНАЯ ИНФОРМАЦИЯ</div>
      <div class="tab_content-text">
        В современной психологии довольно часто можно встретить термин
        «эмоциональное» или «профессиональное выгорание». С этим связывают
        большое количество тренингов и разных развивающих программ. Процесс
        трудовой деятельности в ситуациях особого риска может приводить к
        снижению как трудоспособности человека, так и эффективности труда, а
        также к негативным изменениям психики и утрате ценностных ориентаций в
        труде. Нарушения могут затрагивать разные грани трудового процесса –
        профессиональную деятельность, личность профессионала, профессиональное
        общение.
      </div>
      <div class="tab_content-text">
        Профессия «социальный работник» тоже сопряжена со специфическим риском,
        так как в своей деятельности он имеет дело с неблагополучными,
        переживающими стресс, страдающими людьми, за здоровье и жизнь которых он
        берет на себя моральную ответственность. Социальный работник, помимо
        профессиональных знаний, умений и навыков, в значительной мере
        использует свою личность, являясь своего рода «эмоциональным донором»,
        что тоже относится к факторам профессионального риска.
      </div>
      <div class="tab_content-text">
        Эмоциональное выгорание связывают с падением у людей интереса к своей
        профессиональной деятельности, равнодушным отношением и низкой
        результативностью работы. Профессиональное выгорание возникает в
        результате внутреннего накапливания отрицательных эмоций, когда у
        человека нет возможности их выплеснуть и, таким образом «освободиться».
        Профессиональное выгорание ведет к истощению эмоционально-энергических и
        личностных ресурсов.
      </div>
      <div class="content_flex">
        <div class="tab_content-text content_flex-info">
          Термин «эмоциональное выгорание» (от английского burnout) был введен
          американским психиатром Г. Дж. Фрейденбергером в 1974 г. для
          характеристики «психического состояния здоровых людей, находящихся в
          интенсивном общении с клиентами, в эмоционально нагруженной атмосфере
          при оказании профессиональной помощи», или «истощения энергии у
          профессионалов в сфере социальной помощи, чувствующих себя
          перегру-женными проблемами других людей»
        </div>
        <div class="content_flex-img">
          <img src="/images/tabImg/image 203.png" alt="" />
        </div>
      </div>
      <div class="tab_content-text">
        <strong>Профессиональное выгорание –</strong> совокупность негативных
        переживаний, связанных с работой, коллективом и всей организацией в
        целом. Это – один из видов профессиональной деформации личности. Термин
        «эмоциональное выгорание» (от английского burnout*) был введен
        американским психиатром Г. Дж. Фрейденбергером в 1974 г. для
        характеристики «психического состояния здоровых людей, находящихся в
        интенсивном общении с клиентами, в эмоционально нагруженной атмосфере
        при оказании профессиональной помощи», или «истощения энергии у
        профессионалов в сфере социальной помощи, чувствующих себя
        перегруженными проблемами других людей»
      </div>
      <div class="tabImg">
        <img src="/images/tabImg/image 204.png" alt="" />
      </div>
      <div class="tab_content-block">
        <div class="tab_content-title mb-3">
          Признаки профессионального выгорания:
        </div>
        <div class="tab_content-text">
          1) чувство безразличия, эмоционального истощения, изнеможения (человек
          не может отдаваться работе так, как это было прежде); <br />
          2) развитие негативного отношения к своим коллегам и клиентам; <br />
          3) негативное профессиональное самовосприятие – ощущение собственной
          некомпетентности, недостатка профессионального мастерства. …
          Профессиональное выгорание – это синдром, развивающийся на фоне
          хронического стресса и ведущий к истощению эмоционально-энергических и
          личностных ресурсов работника. <br />
          У специалиста, испытывающего синдром эмоционального «выгорания»,
          появляются различные неприятные симптомы: физическое недомогание,
          головные боли, бессонница, потеря аппетита или склонность к
          перееданию, злоупотреблению успокаивающими или возбуждающими
          средствами. <br />
          Существуют различные мнения относительно факторов возникновения
          выгорания и самих симптомов эмоционального «выгорания». Исследователи
          сходятся во мнении о том, что главный источник «выгорания» — это
          постоянное интенсивное взаимодействие с людьми ввиду профессиональной
          деятельности.[5]
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
  max-width: 500px;
  width: 100%;
}
.content_flex-img {
  max-width: 280px;
  width: 100%;
}
.content_flex-img img {
  width: 100%;
  object-fit: contain;
}
.tabImg {
  max-width: 400px;
  width: 100%;
  margin: 20px auto;
}
.tabImg img {
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
