<template>
  <div class="tab_content">
    <div class="module_title">1.2. Симптомы ОРВИ и гриппа</div>
    <div>
      <div class="tab_content-block">
        <div class="tab_content-title">Типичные симптомы ОРВИ и Гриппа:</div>
      </div>
      <ul class="tab-content_ul">
        <div>
          <li v-for="(item, i) in items" :key="i" class="tab-content_li">
            <span>{{ item.name }}</span>
          </li>
        </div>
      </ul>
      <div class="tab_content-block">
        <div class="tab_content-title">
          Типичные симптомы гриппа и других ОРИ:
        </div>
      </div>
      <ul class="tab-content_ul">
        <div class="box">
          <li v-for="(item, i) in items" :key="i" class="tab-content_li">
            <img src="/svg/virusIcon.svg" alt="" />
            <span>{{ item.name }}</span>
          </li>
        </div>
        <img class="tabImg" src="/images/tabImg/image 145.png" alt="" />
      </ul>
      <div class="tab_content-block">
        <div class="tab_content-text">
          В среднем, болезнь длится около 5 дней. Если температура держится
          дольше, возможно, возникли осложнения.
        </div>
      </div>
      <div class="d-flex flex-column align-items-center">
        <div class="imgTabs">
          <img src="/images/tabImg/image 146.png" alt="" />
        </div>
        <div class="tab_content-title">ЛЕЧЕНИЕ</div>
        <div
          class="d-flex justify-content-between flex-wrap align-items-center w-100"
        >
          <div>
            <p class="ul_title" style="color: #1a990f">Правильно</p>
            <ul class="tab-content_ul flex-wrap">
              <div style="margin-right: 20px">
                <li class="tab-content_li">
                  <img src="/svg/check.svg" alt="" />
                  <span>Обратиться к врачу</span>
                </li>
                <li class="tab-content_li">
                  <img src="/svg/check.svg" alt="" />
                  <span>Соблюдать постельный режим</span>
                </li>
              </div>
              <div>
                <li class="tab-content_li">
                  <img src="/svg/check.svg" alt="" />
                  <span>Пить много жидкости</span>
                </li>
                <li class="tab-content_li">
                  <img src="/svg/check.svg" alt="" />
                  <span>Полноценно питаться</span>
                </li>
              </div>
            </ul>
          </div>
          <div style="max-width: 200px; width: 100%">
            <p class="ul_title" style="color: #ec1b23">Неправильно</p>
            <ul class="tab-content_ul">
              <div>
                <li class="tab-content_li">
                  <img src="/svg/close.svg" alt="" />
                  <span>Принимать антибиотики без назначения врача</span>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "tab-5",
  components: {},
  data() {
    return {
      items: [
        {
          id: 0,
          name: "резкий подъем температуры тела (в течение нескольких часов) до высоких цифр (38-40 С), озноб;",
        },
        {
          id: 1,
          name: "чувство разбитости;",
        },
        {
          id: 2,
          name: "боли в мышцах, суставах, в животе, в глазных яблоках, слезотечение;",
        },
        {
          id: 3,
          name: "слабость и недомогание. В среднем, болезнь длится около 5 дней. Если температура держится дольше, возможно, возникли осложнения.[9] [10]",
        },
      ],
      itemsX: [
        {
          id: 0,
          name: "резкий подъем температуры тела (в течение нескольких часов) до высоких цифр (38-40 С), озноб;",
        },
        {
          id: 1,
          name: "чувство разбитости;",
        },
        {
          id: 2,
          name: "боли в мышцах, суставах, в животе, в глазных яблоках, слезотечение;",
        },
        {
          id: 3,
          name: "слабость и недомогание",
        },
      ],
    };
  },
};
</script>
<style scoped>
.imgTabs {
  max-width: 748px;
  width: 100%;
  margin: 15px 0;
}
.imgTabs img {
  width: 100%;
  object-fit: contain;
}
.ul_title {
  font-weight: 600;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
}
@media (max-width: 768px) {
  .ul_title {
    text-align: start;
  }
  .tab-content_ul {
    flex-wrap: wrap;
  }
  .tab-content_ul .tabImg {
    order: 1;
  }
  .tab-content_ul .box {
    order: 2;
    margin-top: 10px;
  }
}
</style>
