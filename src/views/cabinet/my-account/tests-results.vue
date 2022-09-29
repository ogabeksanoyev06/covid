<template>
  <div class="tests-results">
    <div class="tests__results-title">Мои mодулы</div>
    <div class="tests__results-items">
      <div class="tests__results-item">
        <div class="tests__module-title">
          МОДУЛЬ 1: ОСТРЫЕ РЕСПИРАТОРНЫЕ ИНФЕКЦИИ
        </div>
        <div class="d-flex align-items-center">
          <router-link to="/" class="">
            <div class="d-flex align-items-center">
              <img class="me-2" src="icons/video.svg" alt="" />
              <span style="font-size: 14px; color: #333333; font-weight: 700">
                Начало урока
              </span>
            </div>
          </router-link>
          <div class="tests__module-result">
            <div class="text-center" v-if="loading">
              <div
                class="spinner-border spinner-border-sm text-dark"
                role="status"
              ></div>
            </div>
            <div v-if="!loading && this.testResults.result.length > 0">
              {{ testBall() }}%
            </div>
            <div v-else>null</div>
          </div>
        </div>
      </div>
    </div>
    <div class="tests__results-title">Мой сертификат</div>
  </div>
</template>

<script>
import TokenService from "@/service/TokenService";
// import TokenService from "@/service/TokenService";
// import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "tests-results",
  data() {
    return {};
  },
  methods: {
    testBall() {
      if (this.testResults.result.length > 0) {
        return this.testResults.result[this.testResults.result.length - 1]
          .testBall;
      }
    },
  },
  computed: {
    ...mapGetters(["testResults", "loading"]),
  },
  mounted() {
    this.$store.dispatch("getTestResults", TokenService.headersToken());
  },
};
</script>

<style lang="scss" scoped>
.tests__results-title {
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
  color: #95abc6;
  margin-bottom: 20px;
}
.tests__results-items {
  margin-bottom: 30px;
}
.tests__results-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e5ecf5;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 20px;
}
.tests__module-title {
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
  max-width: 350px;
  width: 100%;
}
.tests__module-result {
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #7cb500;
  margin-left: 20px;
}
@media (max-width: 800px) {
  .tests__results-item {
    flex-wrap: wrap;
    padding: 10px;
  }
  .tests__module-title {
    margin-bottom: 10px;
    line-height: 20px;
    font-weight: 500;
  }
}
</style>
