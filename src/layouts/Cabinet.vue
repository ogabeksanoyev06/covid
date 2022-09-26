<template>
  <div>
    <AppHeader />
    <app-loading
      :active="loading"
      :can-cancel="true"
      :color="'#008AE4'"
      :height="70"
      :is-full-page="true"
      :loader="'bars'"
      :opacity="0.8"
      :transition="''"
      :width="70"
    ></app-loading>
    <div class="page__wrap">
      <div class="container">
        <div class="section__top mb-30">
          <p>Mening profilim</p>
        </div>
        <div class="content">
          <div class="sidebar sm mt-20">
            <div class="account__details text-center">
              <div class="account__photo">
                <div class="account__photo-wrap">
                  <div class="account__photo-empty" v-if="!hasImage">
                    <!-- <img :src="user.data.result.photo" alt="" /> -->
                  </div>
                  <image-uploader
                    :preview="true"
                    :className="[
                      'fileinput',
                      { 'fileinput--loaded': hasImage },
                    ]"
                    capture="environment"
                    :debug="1"
                    doNotResize="gif"
                    :autoRotate="true"
                    outputFormat="file"
                    @change="changePhoto"
                  >
                    <label
                      for="fileInput"
                      slot="upload-label"
                      style="display: block"
                    >
                      <span class="upload-caption">
                        <img src="/icons/edit.svg" alt="" />
                      </span>
                    </label>
                  </image-uploader>
                </div>
              </div>
              <p class="midlle__name">
                {{
                  user.data.result.firstName + " " + user.data.result.lastName
                }}
              </p>
            </div>
            <div class="sidebar__menu">
              <div
                class="sidebar__menu-item"
                :class="
                  currentRouteName === item.path.replace('/', '')
                    ? 'active'
                    : ''
                "
                v-for="(item, idx) in sidebarMenu"
                :key="idx"
                @click="$router.push({ path: `${item.path}` })"
              >
                {{ item.title }}
              </div>
            </div>
            <div class="sidebar__logout" @click="logout">
              <img src="/icons/voyti.svg" alt="" />
              <span>Выйти</span>
            </div>
          </div>
          <div class="content__main w-100">
            <router-view />
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "@/components/layouts/default/app-footer/AppFooter";
import AppHeader from "@/components/layouts/default/app-header/AppHeader";
import TokenService from "@/service/TokenService";
import "../assets/styles/pages/cabinet.css";
import ImageUploader from "vue-image-upload-resize";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import axios from "axios";

export default {
  name: "AppCabinet",
  components: { AppHeader, AppFooter, ImageUploader },
  data() {
    return {
      hasImage: false,
      sidebarMenu: [
        {
          title: "Asosiy malumotlar",
          path: "/cabinet",
        },
        {
          title: "Test natijalari",
          path: "/tests-results",
        },
      ],
    };
  },
  computed: {
    ...mapGetters([]),
    ...mapState(["user", "loading"]),
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    ...mapActions(["getUser"]),
    ...mapMutations(["setAccessToken", "setIsLoggedOn"]),

    setToken() {
      this.setAccessToken(null);
      this.setIsLoggedOn(TokenService.getToken());
    },
    logout() {
      TokenService.removeToken();
      TokenService.removeRefreshToken();
      this.setToken();
      this.$router.push({ name: "home" });
    },
    updateProfile() {
      let form = new FormData();
      form.append("FirstName", this.user.firstName);
      form.append("LastName", this.user.lastName);
      form.append("MiddleName", this.user.middleName);
      form.append("Email", this.user.email);
      form.append("Telefon", this.user.telefon);
      form.append("PhotoFile", this.user.photo);
      // this.axios.put("Admin/Management/profile", form).then((res) => {
      //   if (!res.error && res.statusCode === 200) {
      //     this.user = res.result;
      //   }
      // });
    },
    changePhoto(file) {
      this.user.data.result.photo = file;
    },
  },

  mounted() {
    this.$store.dispatch(
      "getUser",
      (axios.defaults.headers.common["Authorization"] =
        "Bearer " + TokenService.getToken())
    );
    this.setToken();
  },
};
</script>

<style lang="scss" scoped>
.page__wrap {
  min-height: calc(100vh - 245px);
  padding: 30px 0;
}
.section__top {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 30px;
}
.section__top p {
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
}
.content {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.sidebar {
  max-width: 210px;
  width: 100%;
  margin-right: 60px;
}
.midlle__name {
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 20px;
}
.sidebar__menu-item {
  width: 100%;
  padding: 10px 20px;
  color: #95abc6;
  font-weight: 700;
  text-align: center;
  transition: 0.3s;
  border-radius: 10px;
  margin-bottom: 5px;
  line-height: 20px;
  cursor: pointer;
}
.sidebar__menu-item.active,
.sidebar__menu-item:hover {
  background: #edf5ff;
  color: #232c3c;
}
.content__main {
  max-width: calc(100% - 270px);
  width: 100%;
  padding: 30px;
  border: 1px solid #e5ecf5 !important;
  border-radius: 10px;
  overflow: hidden;
}
.sidebar__logout {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 60px;
}
.sidebar__logout span {
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  color: #333333;
  margin-left: 10px;
}
@media (max-width: 1150px) {
  .content__main {
    max-width: calc(100% - 240px);
    padding: 20px;
  }
  .sidebar {
    margin-right: 30px;
  }
}
@media (max-width: 800px) {
  .content__main,
  .sidebar {
    max-width: 100% !important;
  }
  .sidebar {
    margin-bottom: 20px;
    margin-right: 0;
  }
}
@media (max-width: 600px) {
  .section__top {
    text-align: center;
    justify-content: center;
  }
  .content__main {
    padding: 10px;
  }
}
</style>
