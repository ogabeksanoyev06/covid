<template>
  <div class="tab_content">
    <div class="impInfo_content">
      <img src="/svg/ImportantInfo.svg" alt="" />
      <p style="max-width: 550px; width: 100%">Добро пожаловать в модуль №2!</p>
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
                • о некоторых особенностях COVID-19 в сочетании с ВИЧ-инфекцией
              </h4>
              <h4 class="accordion-text">
                • как АРВТ препараты взаимодействуют с COVID-19
              </h4>
              <h4 class="accordion-text">
                • особенности ухода и поддержки беременных женщин и детей с ВИЧ
                во время пандемии COVID-19
              </h4>
            </div>
          </div>
        </template>
      </AccordionItem>
    </Accordion>
    <div class="tab_content-block">
      <div class="tab_content-title">
        2.1 Возбудитель - COVID-19, основные симптомы
      </div>
      <div class="tab_content-text">
        <strong>COVID-19</strong> — заболевание, вызываемое новым коронавирусом,
        который называется SARS-CoV-2. Впервые сообщение о нем было получено 31
        декабря 2019 г., как о группе случаев заболевания «вирусной пневмонией»
        в городе Ухане, Китайская Народная Республика[1] Инфекция передается от
        больного человека здоровому через мельчайшие капельки слюны или слизи,
        которые выделяются во время чихания, кашля разговора. Возможна и
        контактная передача.
      </div>
    </div>
    <div class="content_flex mb-3">
      <div class="content_flex-info">
        <div class="tab_content-title" style="margin-bottom: 20px">
          Не следует пользоваться антибиотиками для профилактики или лечения
          COVID‑19
        </div>
        <div class="tab_content-title" style="color: #ec1b23">
          ЛЕЧЕНИЕ НАЗНАЧАЕТ ТОЛЬКО ВРАЧ!
        </div>
      </div>
      <div class="content_flex-img">
        <img src="images/image 193.png" alt="" />
      </div>
    </div>
    <div class="tab_content-block">
      <div class="tab_content-title">
        К наиболее распространенным симптомам COVID-19 относятся:
      </div>
      <div class="d-flex justify-content-between flex-wrap">
        <div class="tab_content-text">• лихорадка;</div>
        <div class="tab_content-text">• сухой кашель;</div>
        <div class="tab_content-text">• утомляемость.</div>
      </div>
    </div>
    <div class="tab_content-block">
      <div class="tab_content-title">
        К другим, менее распространенным симптомам, которые встречаются у ряда
        пациентов, относятся:
      </div>
      <ul class="tab-content_ul">
        <div>
          <li v-for="(item, i) in items1" :key="i" class="tab-content_li">
            <span>{{ item.name }}</span>
          </li>
        </div>
      </ul>
    </div>
    <div class="tab_content-block">
      <div class="tab_content-title">
        Тяжелое течение COVID-19 проявляется следующими симптомами:
      </div>
      <ul class="tab-content_ul">
        <div>
          <li v-for="(item, i) in items2" :key="i" class="tab-content_li">
            <span>{{ item.name }}</span>
          </li>
        </div>
      </ul>
    </div>
    <div class="tabImg">
      <img class="w-100" src="/images/image 196.png" alt="" />
    </div>
    <div class="tab_content-text" style="margin-bottom: 20px">
      Люди любого возраста, которые наряду с появлением лихорадки и/или кашля
      заме-чают у себя затруднение дыхания или одышку, боль или ощущение
      сдавления грудной клетки, нарушения речи или двигательные расстройства,
      должны незамедлительно обратиться за медицинской помощью.
    </div>
    <div class="tab_content-text">
      <strong>Лечение назначает только врач!</strong> <br />
      Применение антибиотиков без назначения врача не рекомендовано. Антибиотики
      не действуют на вирусы, они активны только в отношении бактериальных
      инфекций. Заболевание COVID‑19 имеет вирусную природу, поэтому не следует
      пользоваться антибиотиками для профилактики или лечения COVID‑19.
    </div>
    <div class="tab_content-block mt-3">
      <div class="tab_content-title">
        Группы риска, наиболее подверженные заражению COVID‑19.
      </div>
      <ul class="tab-content_ul">
        <div>
          <li v-for="(item, i) in items3" :key="i" class="tab-content_li">
            <span>{{ item.name }}</span>
          </li>
        </div>
      </ul>
    </div>
    <div class="tabImg">
      <img class="w-100" src="/images/tabImg/image 144.png" alt="wewe" />
    </div>
    <div class="tab_Bag1 tab_Bag">
      <img src="images/tabBaground1.png" alt="" />
    </div>
    <div class="tab_Bag2 tab_Bag">
      <img src="images/tabBaground2.png" alt="" />
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
      items1: [
        {
          id: 0,
          name: "• утрата обоняния или вкусовых ощущений;",
        },
        {
          id: 1,
          name: " • заложенность носа;",
        },
        {
          id: 2,
          name: " • конъюнктивит (или покраснение глаз);",
        },
        {
          id: 3,
          name: "• боль в горле;",
        },
        {
          id: 4,
          name: "• головная боль;",
        },
        {
          id: 5,
          name: "• боль в мышцах или суставах;",
        },
        {
          id: 6,
          name: " • различные виды высыпаний на коже;",
        },
        {
          id: 7,
          name: "• тошнота или рвота; ",
        },
      ],
      items2: [
        {
          id: 0,
          name: "• одышка;",
        },
        {
          id: 1,
          name: " • потеря аппетита;",
        },
        {
          id: 2,
          name: "• спутанность сознания;",
        },
        {
          id: 3,
          name: "• упорные боли или ощущение сдавления грудной клетки;",
        },
        {
          id: 4,
          name: "• высокая температура тела (выше 38°C).",
        },
      ],
      items3: [
        {
          id: 0,
          name: "• Дети;",
        },
        {
          id: 1,
          name: " • Люди старше 60 лет;",
        },
        {
          id: 2,
          name: "• Люди с хроническими заболеваниями легких (бронхиальная астма, хроническая обструктивная болезнь легких); ",
        },
        {
          id: 3,
          name: "• Люди с хроническими заболеваниями сердечно-сосудистой системы (врожденные пороки сердца, ишемическая болезнь сердца, сердечная недостаточность);",
        },
        {
          id: 4,
          name: " • Беременные женщины;",
        },
        {
          id: 5,
          name: "Медицинские работники •",
        },
        {
          id: 6,
          name: "• Работники общественного транспорта, предприятий общественного питания.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.tab_content {
  position: relative;
  overflow: hidden;
}
.tab_Bag1 {
  position: absolute;
  right: 0;
  bottom: 150px;
  max-width: 250px;
  width: 100%;
  z-index: -1;
}
.tab_Bag2 {
  position: absolute;
  left: 0;
  top: 500px;
  max-width: 120px;
  width: 100%;
  z-index: -1;
}
.tab_Bag img {
  width: 100%;
}
.content_flex {
  display: flex;
  align-items: center;
}
.content_flex-img {
  max-width: 170px;
  width: 100%;
}
.content_flex-img img {
  width: 100%;
  object-fit: contain;
}
.content_flex-info {
  max-width: 400px;
  width: 100%;
  margin-right: 30px;
}
.tabImg {
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
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
