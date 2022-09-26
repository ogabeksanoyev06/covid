<template>
  <div class="tab_content">
    <div class="module_title">
      3.4. Как правильно использовать медицинскую маску для профилактики ОРИ и
      COVID-19
    </div>
    <div class="impInfo_content">
      <img src="/svg/ImportantInfo.svg" alt="" />
      <p>
        Знаете ли Вы, когда необходимо носить медицинскую маску и как правильно
        надеть медицинскую маску?
      </p>
    </div>
    <div class="tab_content-text">
      Просмотрите видеоролики, демонстрирующие, когда необходимо носить маску и
      как правильно надеть маску.
    </div>
    <div class="video-player-wrap">
      <div class="video-player">
        <iframe
          style="width: 100%; height: 300px; object-fit: contain"
          src="https://www.youtube.com/embed/8kYemQyFg58?showinfo=0"
        />
      </div>
    </div>
    <div class="tab_content-text">
      Видеодемонстрация «когда необходимо носить маску»
      <a style="color: #00419e" href="https://youtu.be/BgH0UaDuN2M">
        https://youtu.be/BgH0UaDuN2M
      </a>
    </div>
    <div class="tab_content-text">
      Видеодемонстрация «как правильно надеть маску»
      <a style="color: #00419e" href="https://youtu.be/z5CRR_-w9LI">
        https://youtu.be/z5CRR_-w9LI
      </a>
    </div>
    <div class="tab_content-block mt-3">
      <div class="tab_content-title">
        Правила безопасного использования медицинской маски:
      </div>
      <div class="tab_content-text">
        ( Обучающий герой озвучивает или держит в руках в виде карточек или
        флажков основные правила использования медицинской маски….)
      </div>
      <ul class="tab-content_ul">
        <div>
          <li v-for="(item, i) in items" :key="i" class="tab-content_li">
            <strong class="me-1">{{ i + 1 }}. </strong>
            <span> {{ item.name }}</span>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
export default {
  name: "tab-6",
  components: {},
  data() {
    return {
      items: [
        {
          id: 0,
          name: "Перед тем как надеть медицинскую маску, необходимо вымыть руки с мылом или обработать их антисептиком.",
        },
        {
          id: 1,
          name: "Проверить маску на наличие повреждений.",
        },
        {
          id: 2,
          name: " Поместить маску на лицо так, чтобы она плотно прилегала к нему по краям.",
        },
        {
          id: 3,
          name: "Маска должна закрывать нос, рот и подбородок.",
        },
        {
          id: 4,
          name: "Не касайтесь маски во время использования.",
        },
        {
          id: 5,
          name: " Перед снятием маски необходимо вымыть руки или продезинфицировать",
        },
        {
          id: 6,
          name: "Снимайте маску за завязки или ушные петли, взявшись за низ сзади",
        },
        {
          id: 7,
          name: "Отведите маску от лица",
        },
        {
          id: 8,
          name: "После снятия маски. обработайте антисептиком или вымойте руки с мылом.",
        },
        {
          id: 9,
          name: "Меняйте маску каждые 3 часа, при необходимости чаще.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.video-player-wrap {
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
}
.video-player {
  max-width: 500px;
  width: 100%;
}
</style>
