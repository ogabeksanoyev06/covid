<template>
  <div>
    <!-- <app-loading
      :active="''"
      :can-cancel="''"
      :color="'#008AE4'"
      :height="70"
      :is-full-page="true"
      :loader="'bars'"
      :opacity="0.8"
      :transition="''"
      :width="70"
    ></app-loading> -->
    <AppHeader />
    <div class="page__wrap">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>
<script>
import AppFooter from "../components/layouts/default/app-footer/AppFooter";
import AppHeader from "../components/layouts/default/app-header/AppHeader";
import { mapMutations, mapState } from "vuex";
export default {
  name: "MainLayout",
  components: { AppHeader, AppFooter },
  methods: {
    ...mapMutations(["setLoading"]),
  },
  computed: {
    ...mapState({ loading: "loading" }),
  },
  mounted() {
    // document.onreadystatechange = () => {
    //   if (document.readyState == "complete") {
    //     this.setLoading(true);
    //   }
    // };
  },
};
</script>

<style lang="scss" scoped>
.page__wrap {
  min-height: calc(100vh - 402px);
}
</style>

<style>
.vue-notification {
  padding: 10px;
  margin: 5px 5px 5px;
  font-size: 16px;
  color: #ffffff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;
}
</style>
