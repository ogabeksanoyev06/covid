<template>
  <div class="app-card" :class="status ? 'active' : ''" id="app-card">
    <div class="Success_bage" v-if="status"><span>Успешно</span></div>
    <div class="app-card__content">
      <div>
        <div class="app-card__title">{{ $t("Module") }} {{ id }}</div>
        <div class="app-card__text">{{ text }}</div>
      </div>
      <button
        class="app-card__btn"
        :class="isLoggedOn ? 'active' : ''"
        @click="goToLink"
      >
        Подробнее
      </button>
    </div>
    <div class="app-card__photo">
      <img :src="`/images/${photo}`" alt="" />
    </div>
  </div>
</template>
<script>
import "@/assets/styles/components/app-modules-card.css";
// import axios from "axios";
// import TokenService from "@/service/TokenService";
import { mapMutations, mapState } from "vuex";
import TokenService from "@/service/TokenService";
export default {
  name: "ModulesCard",
  components: {},
  data() {
    return {
      status: false,
    };
  },
  props: {
    id: Number,
    title: String,
    text: String,
    link: String,
    photo: String,
    maxBall: Number,
  },
  methods: {
    ...mapMutations(["setAccessToken", "setIsLoggedOn"]),
    goToLink() {
      if (this.isLoggedOn) {
        this.$router.push({
          name: this.link,
        });
      } else {
        this.$router.push({ name: "login" });
      }
      this.setToken();
    },
    setToken() {
      let accessToken = TokenService.getToken();
      if (accessToken !== null) {
        this.setAccessToken(accessToken);
        this.setIsLoggedOn(true);
      } else {
        this.setAccessToken(null);
        this.setIsLoggedOn(false);
      }
    },
    testResultBall() {
      this.$store.dispatch("getTestResults", TokenService.headersToken());
    },
    testStatus() {
      if (this.testResults.length > 0) {
        let testBall =
          this.testResults.result[this.testResults.result.length - 1].testBall;
        if (testBall > this.maxBall) {
          this.status = true;
        }
      }
    },
  },
  computed: {
    ...mapState(["isLoggedOn", "loading", "testResults"]),
  },
  mounted() {
    this.setToken();
    this.testStatus();
    if (TokenService.getToken()) {
      this.testResultBall();
    }
  },
};
</script>
<style scoped></style>
