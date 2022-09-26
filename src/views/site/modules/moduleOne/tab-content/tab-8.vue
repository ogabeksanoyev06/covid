<template>
  <div class="tab_content">
    <div class="module_title">1.3. Меры профилактики ОРВИ и гриппа</div>
    <div class="tab_content-text">
      Вы отлично справляетесь с прохождением курса. Сейчас мы начнем осваивать
      основные меры про профилактики ОРВИ и Гриппа. Для этого Вам необходимо
      посмотреть ролик.
    </div>
    <div class="video-player-wrap">
      <div class="video-player">
        <iframe
          frameborder="0"
          allow="autoplay"
          style="width: 100%; height: 300px; object-fit: contain"
          src="https://www.youtube.com/embed/8kYemQyFg58?showinfo=0"
        />
      </div>
    </div>
    <div class="tab_content-text">
      Основным методом специфической (направленной на возбудителя болезни)
      профилактики против гриппа является ежегодная активная вакцинация.
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
export default {
  name: "tab-8",
  components: {},
  data() {
    return {
      items: [
        {
          id: 0,
          name: "ОРИ находятся на первом месте по числу ежегодно заболевающих людей",
        },
        {
          id: 1,
          name: "Поражают органы дыхания ",
        },
        {
          id: 2,
          name: " Передаются воздушно-капельным путём (реже – через предметы и грязные руки)",
        },
        {
          id: 3,
          name: "Вирусы ОРИ живут вне организма до трех недель",
        },
        {
          id: 4,
          name: "Вероятность заражения выше в замкнутых помещениях",
        },
      ],
    };
  },
  methods: {
    playerStateChanged() {
      //console.log(event)
    },
  },
};
</script>
<style scoped>
.video-player-wrap {
  margin: 30px 0;
}
</style>
