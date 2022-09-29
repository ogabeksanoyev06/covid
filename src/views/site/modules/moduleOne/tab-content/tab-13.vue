<template>
  <div class="tab_content">
    <div class="section__top">
      <p>Umumiy natijalar</p>
    </div>
    <div class="table-block table-hover">
      <table class="hoverTable">
        <tbody>
          <tr class="text-center" v-for="(item, idx) in 1" :key="idx">
            <th scope="row">{{ idx + 1 }}-Модуль</th>
            <!-- <td v-for="(result, i) in setTestsModuleId" :key="i">
              {{ result.testBall}}
            </td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "tab-13",
  data() {
    return {
      selectedIndex: 0,
      setTestsModuleId: [],
    };
  },
  methods: {
    // filterModuleId(id) {
    //   this.testResults.result.map((item) => {
    //     if (item.modulId === id) {
    //       this.setTestsModuleId.push(item);
    //     }
    //   });
    // },
  },
  computed: {
    ...mapState(["testResults"]),
  },
  mounted() {},
};
</script>
<style scoped>
.section__top {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
}
.section__top p {
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
}
.table-block {
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #e5ecf5;
  width: 100%;
  overflow-x: auto;
}
.table-block::-webkit-scrollbar {
  height: 2px;
}
.table-block table {
  width: 100%;
  border-spacing: 0;
}
.table-block table thead tr {
  background: #f6f8fc;
}
.table-block table thead th:first-child {
  border-left: 0;
}
.table-block table tbody th {
  padding: 10px;
  font-size: 14px;
  line-height: 18px;
  min-width: 100px;
}
.table-block table tbody tr td:first-child {
  border-left: 0;
}
.table-block table tbody tr td {
  padding: 10px 20px;
  font-size: 14px;
  line-height: 26px;
  border: 1px solid #e5ecf5;
  border-bottom: none;
  border-right: 0;
  min-width: 20px;
  min-height: 47px;
  min-width: 100px !important;
}

.table-block table tbody tr:nth-child(2n + 1) {
  background: #f8f8fa;
}
@media (max-width: 991px) {
}
</style>
