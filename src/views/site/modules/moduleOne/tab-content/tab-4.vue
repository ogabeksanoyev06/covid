<template>
  <div class="tab_content">
    <div>
      <div class="tab_content-block">
        <div class="tab_content-text">
          При кашлевом движении в окружающую среду выделяется до 500 тысяч
          аэрозольных частиц разного размера, при чихании - до 2 миллионов.
          Мелкие частицы аэрозоля остаются в воздушной среде, задерживаясь на
          пылевых частицах, крупные - оседают на различных поверхностях объектов
          среды. Инфекция может также передаваться через руки, загрязненные
          вирусами гриппа. [7]
        </div>
      </div>
      <div class="tab_content-block">
        <div class="tab_content-text">
          <strong> Восприимчивость всеобщая.</strong> Люди болеют ОРВИ и гриппом
          в любом возрасте, но есть группы населения, подверженные повышенному
          риску.
        </div>
      </div>
      <div class="tab_content-block">
        <div class="tab_content-title">Группы риска</div>
      </div>
      <ul class="tab-content_ul">
        <div class="content_flex-info">
          <li v-for="(item, i) in items" :key="i" class="tab-content_li">
            <span>{{ item.name }}</span>
          </li>
        </div>
        <div class="content_flex-img">
          <img src="/images/tabImg/image 144.png" alt="" />
        </div>
      </ul>
      <ul class="tab-content_ul">
        <div>
          <li v-for="(item, i) in items" :key="i" class="tab-content_li">
            <span>{{ item.name }}</span>
          </li>
        </div>
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
.content_flex-img {
  max-width: 350px;
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
