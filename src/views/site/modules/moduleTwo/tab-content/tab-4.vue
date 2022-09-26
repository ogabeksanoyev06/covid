<template>
  <div class="tab_content">
    <div class="module_title">
      2.2 Обзор вакцин и новые рекомендации о вакцинации от COVID-19
    </div>
    <div class="tab_content-text">
      Ученые разрабатывают множество потенциальных вакцин против COVID-19, все
      они предназначены для того, чтобы научить иммунную систему организма
      безопасно распознавать и блокировать вирус, вызывающий COVID-19. Вакцина
      не содержит ни живых, ни инактивированных элементов вируса, вызывающего
      COVID-19. Введение вакцины не даст положительного результата теста на
      наличие активной инфекции COVID-19.
    </div>
    <div class="tab_content-title my-3 text-center">
      ВАКЦИНЫ ПРОТИВ COVID-19, ОДОБРЕННЫЕ В УЗБЕКИСТАНЕ
    </div>
    <div class="tabImg">
      <img class="w-100" src="/images/tabImg/image 201.png" alt="wewe" />
    </div>
    <div class="tab_content-block mt-3">
      <div class="tab_content-title text-center">
        В Узбекистане одобрены следующие вакцины против COVID-19[11]:
      </div>
      <ul class="d-flex flex-wrap" style="max-width: 600px; width: 100%">
        <li class="me-4 mb-2">• Moderna;</li>
        <li class="me-4 mb-2">• Oxford/AstraZeneca;</li>
        <li class="me-4 mb-2">• Sinovac;</li>
        <li class="me-4 mb-2">• Sputnik Light;</li>
        <li class="me-4 mb-2">• Sputnik V</li>
        <li class="me-4 mb-2">• ZF2001</li>
      </ul>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
export default {
  name: "tab-4",
  components: {},
  data() {
    return {
      items: [
        {
          id: 0,
          name: "• дети грудного и раннего возраста, особенно младше 2 лет",
        },
        {
          id: 1,
          name: "• беременные женщины",
        },
        {
          id: 2,
          name: "• лица любого возраста с хроническими заболеваниями легких (например, астма)",
        },
        {
          id: 3,
          name: "• лица любого возраста с хроническими заболеваниями сердца (например, сердеч- ная недостаточность)",
        },
      ],
      itemsX: [
        {
          id: 0,
          name: "• лица с расстройствами обмена веществ (например, диабет)",
        },
        {
          id: 1,
          name: "• лица с хроническими заболеваниями почек или печени, определенными неврологическими нарушениями или иммунодефицитом вследствие либо первичных иммунодефицитных состояний, например, ВИЧ-инфекции, либо таких состояний, обусловленных приемом иммуносупрессивных препаратов или онкологическим заболеванием.",
        },
        {
          id: 2,
          name: "• дети, получающие длительную терапию аспирином",
        },
        {
          id: 3,
          name: "• лица в возрасте 65 лет и старше[8]",
        },
      ],
    };
  },
};
</script>
<style scoped>
.tabImg {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}
</style>
