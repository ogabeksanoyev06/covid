<template>
  <div class="home-page">
    <HeroBanner />
    <div class="container mt-5">
      <div class="module__title">{{ $t("Modules") }}</div>
      <app-modules />
    </div>
  </div>
</template>

<script>
import HeroBanner from "@/components/pages/home/HeroBanner.vue";
import AppModules from "../modules/AppModules.vue";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "app-home",
  components: { HeroBanner, AppModules },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getUser"]),
    closeModal() {
      this.resultTest = false;
    },
  },
  computed: {
    ...mapGetters(["user", "isLoggedOn"]),
    ...mapState([]),
  },
  mounted() {},
};
</script>

<style scoped>
.module__title {
  font-weight: 700;
  font-size: 40px;
  line-height: 110%;
  text-transform: uppercase;
  color: #0f101d;
  margin-bottom: 40px;
}
</style>
