<template>
  <div class="tab_content">
    <div class="module_title">
      Категории граждан, которые должны пройти полный курс вакцинации:
    </div>
    <ul class="tab-content_ul">
      <div>
        <li v-for="(item, i) in items" :key="i" class="tab-content_li">
          <span>{{ item.name }}</span>
        </li>
      </div>
    </ul>
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
          name: "• сотрудники всех видов сервисных объектов (центры государственных услуг, почто-вые отделения, банки, лизинговые компании, нотариальные конторы, страховые компании, салоны красоты, парикмахерские и др.), взаимодействующие с населением;",
        },
        {
          id: 1,
          name: "• сотрудники всех видов торговых объектов (магазины продуктов, хозтоваров, одеж-ды, аптеки и другие);",
        },
        {
          id: 2,
          name: "• сотрудники спортивных школ и спортивных сооружений;",
        },
        {
          id: 3,
          name: "• работники культурно-развлекательных учреждений и зон отдыха;",
        },
        {
          id: 4,
          name: "• сотрудники гостиниц, хостелов, отелей, общежитий, и кемпингов;",
        },
        {
          id: 5,
          name: "• сотрудники государственных и негосударственных образовательных учреждений;",
        },
        {
          id: 6,
          name: "• военнослужащие;",
        },
        {
          id: 7,
          name: "• работники предприятий общественного питания, в частности, точек быстрого пита-ния, расположенных в общественных местах, чайхан, свадебных залов, кафе и ресторанов, в том числе занимающихся доставкой продуктов;",
        },
        {
          id: 8,
          name: "• работники коммунальной сферы;",
        },
        {
          id: 9,
          name: "• работники объектов связи и телекоммуникаций;",
        },
        {
          id: 10,
          name: "• сотрудники органов государственной власти и управления;",
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
