<template>
  <div>
    <header class="header">
      <!-- <marquee behavior="" direction="left" style="color: #fff">
        Sayt test rejimida ishlamoqda...Kamchiliklar uchun uzr so'raymiz
      </marquee> -->
      <div class="container">
        <div class="header__inner">
          <div class="header__left">
            <router-link to="/" class="logo">
              <img src="/svg/logo1.svg" alt="logo" />
            </router-link>
            <ul class="header__menu">
              <li
                class="header__menu-item"
                v-for="(item, index) in menu"
                :key="index"
                :class="[activeId === index ? 'active' : '']"
                @click="activeLink(index)"
              >
                <router-link class="header__menu-link" :to="item.link">
                  {{ $t(item.title) }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="header__right">
            <div
              class="header__language"
              @click="languageDropdown = !languageDropdown"
              v-on-click-outside:excludedClass="hideLanguageDropdown"
            >
              <div class="header__language-icon">
                <img src="/icons/globe.svg" alt="" />
                <span> {{ languageValue }} </span>
              </div>
              <div
                class="header__dropdown"
                :class="languageDropdown ? 'active' : ''"
              >
                <ul class="header__dropdown-wrap">
                  <li
                    @click="changeLanguage('ru')"
                    class="header__dropdown-item"
                  >
                    <a class="header__dropdown-link"> <span>Russian</span> </a>
                  </li>
                  <li
                    @click="changeLanguage('uz')"
                    class="header__dropdown-item"
                  >
                    <a class="header__dropdown-link"> <span>Uzbek</span> </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="header__auth" v-if="!userIsLoggedOn">
              <button
                class="header__login"
                @click="$router.push({ name: 'login' })"
              >
                {{ $t("Enter") }}
              </button>
              <button
                class="header__register"
                @click="$router.push({ name: 'register' })"
              >
                {{ $t("Registration") }}
              </button>
            </div>
            <div
              class="header__account"
              v-if="userIsLoggedOn"
              @click="accountDropdown = !accountDropdown"
              v-on-click-outside:excludedClass="hideAccountDropdown"
            >
              <!-- <div class="header__account-photo" v-if="user && user.photo">
                <img :src="baseURL + user.photo" alt="" />
              </div> -->
              <div class="header__account-photo">
                <img src="/images/user-photo.png" alt="" />
              </div>
              <div
                class="header__dropdown"
                :class="accountDropdown ? 'active' : ''"
              >
                <ul class="header__dropdown-wrap">
                  <li class="header__dropdown-item">
                    <router-link to="/cabinet" class="header__dropdown-link">
                      <span> Mening profilim </span>
                    </router-link>
                  </li>
                  <li class="header__dropdown-item" @click.prevent="logout">
                    <router-link to="/" class="header__dropdown-link">
                      <span> Chiqish </span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="hamburger__menu"
              @click="showNavigationDrawer"
              :class="{ active: navigationDrawer }"
            >
              <svg
                data-v-545dd0d4=""
                width="100"
                height="100"
                viewBox="0 0 100 100"
                class="svg-icon"
                style="width: 24px; height: 24px"
              >
                <path
                  data-v-545dd0d4=""
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                  class="line line1"
                ></path>
                <path
                  data-v-545dd0d4=""
                  d="M 20,50 H 80"
                  class="line line2"
                ></path>
                <path
                  data-v-545dd0d4=""
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                  class="line line3"
                ></path>
              </svg>
              <span>Menu</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <NavigationDrawer
      :isActive="navigationDrawer"
      @closeNavigationDrawer="closeDrawer"
    />
    <div
      class="overlay"
      v-if="navigationDrawer"
      @click="navigationDrawer = false"
    ></div>
  </div>
</template>

<script>
import "./header.css";
import i18n from "@/locales/i18n";
import NavigationDrawer from "./NavigationDrawer";
import TokenService from "@/service/TokenService";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "AppHeader",
  components: { NavigationDrawer },
  data() {
    return {
      menu: [
        {
          id: 1,
          title: "Главная",
          link: "/",
        },
        {
          id: 2,
          title: "Модулы",
          link: "/modules",
        },
        {
          id: 3,
          title: "Контакты",
          link: "/contact",
        },
      ],
      navigationDrawer: false,
      showDropdown: false,
      accountDropdown: false,
      languageDropdown: false,
      activeId: 0,
      languageValue: "ru",
    };
  },
  props: {
    headerShadow: {
      type: Boolean,
      default: false,
    },
    headerGreyBg: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(["user"]),
    ...mapState(["isLoggedOn"]),
    userIsLoggedOn() {
      return this.isLoggedOn;
    },
  },
  methods: {
    ...mapMutations(["setAccessToken", "setIsLoggedOn"]),
    ...mapActions(["getUser"]),
    activeLink(id) {
      this.activeId = id;
    },
    showNavigationDrawer() {
      this.navigationDrawer = !this.navigationDrawer;
    },
    closeDrawer() {
      this.navigationDrawer = false;
    },
    changeLanguage(lang) {
      localStorage.setItem("lang", lang);
      i18n.locale = lang;
      this.languageValue = localStorage.getItem("lang");
    },
    hideAccountDropdown() {
      this.accountDropdown = false;
    },
    hideLanguageDropdown() {
      this.languageDropdown = false;
    },
    logout() {
      TokenService.removeToken();
      TokenService.removeRefreshToken();
      this.setToken();
      this.$router.push({ name: "home" });
    },

    setToken() {
      this.setAccessToken(null);
      this.setIsLoggedOn(false);
    },
  },
  mounted() {},
  created() {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "ru");
    }
    i18n.locale = localStorage.getItem("lang");
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #ffffff96;
  z-index: 49;
}
</style>
