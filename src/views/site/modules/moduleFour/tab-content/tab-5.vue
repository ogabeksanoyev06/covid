<template>
  <div class="tab_content">
    <div class="module_title">
      3.3 Гигиена рук. Мастер-класс по технике гигиеничес-кого мытья рук для
      профилактики респираторных инфекций и COVID-19
    </div>
    <div class="tab_content-text">
      <strong> Мытьё рук </strong> — гигиеническая процедура по очистке кистей
      рук с помощью воды или, реже, другой жидкости, часто с использованием мыла
      или иных поверхностно-активных и дезинфицирующих средств, с целью удаления
      с поверхности кожи грязи, микроорганизмов, химических веществ и прочих
      веществ. Гигиена рук является самым экономичным и эффективным методом
      предотвращения распространения инфекций. Мытьё рук 6-10 раз в день может
      снизить личный риск заражения инфекциями типа COVID-19 или гриппа.
    </div>
    <div class="tab_content-text">
      Для того, чтобы запомнить технику мытья рук, посмотрите ролик. «Как
      правильно мыть руки. Инструкция ВОЗ»
      <a
        style="color: #00419e"
        href="https://drive.google.com/file/d/1HtCcp8k2Z_k1-pIyi1zteVsWcPOOGF-J/view?ts=6241eb7d"
      >
        https://drive.google.com/file/d/1HtCcp8k2Z_k1-pIyi1zteVsWcPOOGF-J/view?ts=6241eb7d
      </a>
    </div>
    <div class="video-player-wrap">
      <div class="video-player">
        <iframe
          style="width: 100%; height: 300px; object-fit: contain"
          src="https://www.youtube.com/embed/8kYemQyFg58?showinfo=0"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "tab-5",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.module_title {
  max-width: 720px;
  width: 100%;
}
.tab_content-text {
  margin-bottom: 10px;
}
.video-player-wrap {
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
}
.video-player {
  max-width: 450px;
  width: 100%;
}
</style>
