<template>
  <div class="tab_content">
    <div class="module_title">4.2 АРВТ препараты и COVID-19</div>
    <div class="tab_content-text">
      Своевременное и раннее начало АРВТ для ЛЖВ может улучшить иммунный ответ
      на COVID-19 и помочь предотвратить возникновение тяжелой иммунной атаки
      организма или прогрессирование тяжелой дыхательной недостаточности.
    </div>
    <div class="tab_content-text">
      Поддерживать нужно как минимум 30-дневный запас, в идеале 90-дневный
      запас, антиретровирусных (АРВ) препаратов Лицам, для которых запланирована
      смена схемы, следует подумать о том, чтобы отложить замену до тех пор,
      пока не станет возможным тщательное наблюдение и мониторинг.
    </div>
    <div class="tab_content-text">
      Необходимо снизить до минимума вероятность изменения схемы АРТ до
      окончания периода COVID-19, если это не является критически важным (при
      хорошей приверженности и отсутствии побочных эффектов. Препарат
      антиретровирусной терапии-Лопинавир/ритонавир (ЛП/Р) нельзя использовать в
      качестве лечения для COVID-19
    </div>
    <div class="module_title text-center">АРВП И COVID-19</div>
    <div class="bc_x">
      <div style="max-width: 350px; width: 100%">
        <p class="ul_title" style="color: #1a990f">Правильно</p>
        <ul class="tab-content_ul">
          <div style="margin-right: 20px">
            <li class="tab-content_li">
              <img src="/svg/check.svg" alt="" />
              <span>
                Поддерживать запас антиретровирусных (АРВ) препаратов
              </span>
            </li>
            <li class="tab-content_li">
              <img src="/svg/check.svg" alt="" />
              <span>
                Проводить терапию COVID-19 согласно Национальному протоколу по
                ведению больных с COVID-19
              </span>
            </li>
          </div>
        </ul>
      </div>
      <div style="max-width: 350px; width: 100%">
        <p class="ul_title" style="color: #ec1b23">Неправильно</p>
        <ul class="tab-content_ul">
          <div>
            <li class="tab-content_li">
              <img src="/svg/close.svg" alt="" />
              <span>
                Применять Лопинавир/ритонавир (ЛП/Р) в качестве лечения для
                COVID-19
              </span>
            </li>
            <li class="tab-content_li">
              <img src="/svg/close.svg" alt="" />
              <span> Менять схемы АРТ без медицинской необходимости </span>
            </li>
            <li class="tab-content_li">
              <img src="/svg/close.svg" alt="" />
              <span> Применять препараты АРВТ для лечения COVID-19 </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <div class="tab_content-text">
      При заболевании COVID-19 терапия проводится согласно Национальному
      протоколу по ведению больных с COVID-19
    </div>
    <div class="tab_content-text">
      Схемы АРТ при COVID-19 не следует менять, если в этом нет медицинской
      необходимости (при хорошей приверженности и отсутствии побочных эффектов)
    </div>
    <div class="tab_content-text">
      В настоящее время ВОЗ не рекомендует применения препаратов АРВТ для
      лечения COVID-19.
    </div>
    <div class="tab_content-text">
      ЛЖВ ПРИ ЗАБОЛЕВАНИИ COVID-19 НЕ ДОЛЖНЫ ПРЕКРАЩАТЬ ПРИЕМ АРВТ!
    </div>
    <div class="tab_content-block">
      <div class="tab_content-title">Вакцинация ЛЖВ от COVID-19</div>
      <div class="tab_content-text">
        Вакцины от COVID-19 безопасны для ЛЖВ. Одобренные вакцины и те, которые
        находятся на стадии разработки считаются безопасными для большинства
        людей, включая ЛЖВ. Вакцина предотвращает риски заболевания COVID-19[2]
      </div>
    </div>
    <div class="content_flex">
      <div class="content_flex-info tab_content-title">
        Bакцины от covid-19 безопасны для лжв вакцина предотвращает риски
        заболевания covid-19
      </div>
      <div class="content_flex-img">
        <img src="/images/tabImg/image 168.png" alt="" />
      </div>
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
.tab_content-text {
  margin-bottom: 10px;
}
.bc_x {
  display: flex;
  justify-content: space-between;
}
.ul_title {
  font-weight: 600;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
}
.content_flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content_flex-img {
  max-width: 360px;
  width: 100%;
}
.content_flex-img img {
  width: 100%;
  object-fit: contain;
}
.content_flex-info {
  max-width: 350px;
  width: 100%;
}
@media (max-width: 768px) {
  .bc_x {
    flex-wrap: wrap;
    justify-content: center;
  }
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
