<template>
  <div class="tab_content">
    <div class="tab_content-title text-center">5.2. Роды и COVID-19</div>
    <div class="tab_content-text">
      ВОЗ рекомендует родоразрешение методом кесарева сечения только по
      медицинским показаниям. Способ родоразрешения является вопросом
      индивидуального выбора, основанного на предпочтениях женщины и
      акушерско-гинекологических показаниях. Решение о срочном родоразрешении
      (включая и проведение кесарева сечения) в каждом конкретном случае
      принимается индивидуально после медицинского консилиума с участием врачей
      разных специальностей.
    </div>
    <div class="tab_content-text">
      Партнерские роды в период COVID - 19 не рекомендованы. Это необходимо для
      снижения риска инфицирования COVID - 19. С этой же целью количество
      медицинского персонала, присутствующего на родах, сведено к минимуму.
    </div>
    <div>Роды и COVID-19</div>
    <ul class="tab-content_ul">
      <div style="max-width: 550px; width: 100%">
        <li v-for="(item, i) in items" :key="i" class="tab-content_li">
          <img src="/svg/virusIcon.svg" alt="" />
          <span>{{ item.name }}</span>
        </li>
      </div>
    </ul>
    <div class="tabImg mb-3">
      <img class="w-100" src="/images/tabImg/image 174.png" alt="wewe" />
    </div>
    <div class="tab_content-text">
      Здоровым матерям, которые кормят грудью или сцеживают молоко для кормления
      ребенка, рекомендуется вакцинироваться от COVID-19. Рекомендуется
      продолжать грудное вскармливание после вакцинации. Это безопасно
    </div>
    <div class="tabImg" style="max-width: 350px">
      <img class="w-100" src="/images/tabImg/image 176.png" alt="wewe" />
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
export default {
  name: "tab-3",
  components: {},
  data() {
    return {
      items: [
        {
          id: 0,
          name: "ВОЗ рекомендует кесарево сечение только по медицинским показаниям.",
        },
        {
          id: 1,
          name: "Способ родоразрешения – вопрос индивидуального выбора.",
        },
        {
          id: 2,
          name: "Решение о срочном родоразрешении принимается после медицинского консилиума.",
        },
        {
          id: 3,
          name: "Партнерские роды в период COVID - 19 не рекомендованы.",
        },
        {
          id: 4,
          name: "Минимум медицинского персонала.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.tabImg {
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
}
.tabImg img {
  width: 100%;
  object-fit: contain;
}
.tab_content-text {
  margin-bottom: 10px;
}
</style>
