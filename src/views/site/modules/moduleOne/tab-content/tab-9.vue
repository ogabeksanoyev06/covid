<template>
  <div class="tab_content">
    <div class="tab_content-text">
      <strong>Вакцинация</strong> – это простой, безопасный и эффективный способ
      защиты от болезней до того, как человек вступит в контакт с их
      возбудителями. Вакцинация задействует естественные защитные механизмы
      организма для формирования устойчивости к ряду инфекционных заболеваний и
      делает вашу иммунную систему сильнее. Как и болезни, вакцины тренируют
      иммунную систему выработке специфических антител. Однако вакцины содержат
      только убитые или ослабленные формы возбудителей той или иной болезни –
      вирусов или бактерий, – которые не приводят к заболеванию и не создают
      риска связанных с ним осложнений.[12]
    </div>
    <div class="tab_content-title text-center mt-3">
      САМОЕ ЭФФЕКТИВНОЕ СРЕДСТВО ПРОТИВ ВИРУСА – ЭТО ВАКЦИНАЦИЯ!
    </div>
    <div class="box">
      <div style="background-color: #198754">
        <strong>Вакцина</strong> – (От лат. vacca — корова), медицинский
        препарат, предназначенный для создания иммунитета к инфекционным
        болезням.
      </div>
      <div style="background-color: #6610f2">
        <strong>Ревакцинация</strong> – повторное введение вакцины спустя
        несколько месяцев и лет. Служит для продления иммунитета.
      </div>
    </div>
    <div class="tab_content-text">
      <strong>Вакцина</strong> – (От лат. vacca — корова), медицинский препарат,
      предназначенный для создания иммунитета к инфекционным болезням.
      Ревакцинация – повторное введение вакцины спустя несколько месяцев и лет.
      Служит для продления иммунитета.
    </div>
    <ul class="tab-content_ul">
      <div class="content_flex-info">
        <li v-for="(item, i) in items" :key="i" class="tab-content_li">
          <img src="/svg/gripIcon.svg" alt="" />
          <span>{{ item.name }}</span>
        </li>
      </div>
      <div class="content_flex-img">
        <img src="/images/tabImg/image 154.png" alt="" />
      </div>
    </ul>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
export default {
  name: "tab-1",
  components: {},
  data() {
    return {
      items: [
        {
          id: 0,
          name: "Оптимальное время для вакцинации октябрь- ноябрь",
        },
        {
          id: 1,
          name: "Вакцинация детей против гриппа возможна, начиная с 6-месячного возраста",
        },
        {
          id: 2,
          name: "Вакцина против гриппа становится эффективной примерно через 14 дней после вакцинации",
        },
        {
          id: 3,
          name: "Вакцинация против гриппа хорошо переносится",
        },
        {
          id: 4,
          name: "Вакцинация на 90 % снижает заболеваемость, на 60 % снижает госпитализацию",
        },
      ],
    };
  },
};
</script>
<style scoped>
.box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px 0;
}
.box div {
  max-width: 330px;
  width: 100%;
  color: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  padding: 10px 5px;
  margin-right: 15px;
  margin-bottom: 15px;
  text-align: center;
}
.content_flex-img {
  max-width: 160px;
  width: 100%;
  margin: 10px auto;
}
.content_flex-img img {
  width: 100%;
  object-fit: contain;
}
.content_flex-info {
  max-width: 600px;
  width: 100%;
}
@media (max-width: 768px) {
  .tab-content_ul {
    flex-wrap: wrap;
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
