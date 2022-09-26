<template>
  <div class="general-information">
    <p class="title">Asosiy malumotlar</p>
    <div class="cabinet__content">
      <form class="grid-block" style="max-width: 660px">
        <div class="input__block">
          <label class="input__block-label" for="firstName"> Ism </label>
          <input
            class="input__block-input"
            type="text"
            id="firstName"
            v-model="user.data.result.firstName"
          />
          <div></div>
        </div>
        <div class="input__block">
          <label class="input__block-label" for="lastName">Familiya</label>
          <input
            class="input__block-input"
            type="text"
            id="lastName"
            v-model="user.data.result.lastName"
          />
          <div></div>
        </div>
        <div class="input__block">
          <label class="input__block-label" for="login">Login</label>
          <input
            class="input__block-input"
            type="text"
            id="login"
            v-model="user.data.result.login"
          />
          <div></div>
        </div>
      </form>
      <p class="title">Parolni o'zgartirish</p>
      <form class="grid-block" style="max-width: 660px">
        <div class="input__block">
          <label class="input__block-label" for="Password"> Eski parol </label>
          <div style="position: relative">
            <input
              class="input__block-input"
              type="password"
              id="Password"
              v-model="password"
              v-mask="'######'"
            />
            <div class="showPasswordIcon">
              <img
                src="/icons/eye.svg"
                @click="showPasswordMethod"
                v-if="showPassword"
              />
              <img
                src="/icons/eye-closed2.svg"
                @click="showPasswordMethod"
                v-if="!showPassword"
              />
            </div>
          </div>
          <div></div>
        </div>
        <div class="input__block">
          <label class="input__block-label" for="newPassword">
            Yangi Parol
          </label>
          <div style="position: relative">
            <input
              class="input__block-input"
              type="password"
              id="newPassword"
              v-model="newPassword"
            />
            <div class="showPasswordIcon">
              <img
                src="/icons/eye.svg"
                @click="showNewPasswordMethod"
                v-if="showNewPassword"
              />
              <img
                src="/icons/eye-closed2.svg"
                @click="showNewPasswordMethod"
                v-if="!showNewPassword"
              />
            </div>
          </div>
          <div></div>
        </div>
        <button type="button" class="updateBtn">O'zgarishlarni saqlash</button>
      </form>
    </div>
  </div>
</template>
<script>
import TokenService from "@/service/TokenService";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "my-account",
  components: {},
  data() {
    return {
      login: "930819140",
      firstName: "Og'abek",
      lastName: "Sanoyev",
      phoneNumber: "",
      email: "",
      password: "",
      newPassword: "",
      showPassword: false,
      showNewPassword: false,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapActions(["getUser"]),
    ...mapMutations(["setAccessToken", "setIsLoggedOn"]),
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
    showPasswordMethod() {
      this.showPassword = !this.showPassword;
      document.getElementById("Password").type = this.showPassword
        ? "text"
        : "password";
    },
    showNewPasswordMethod() {
      this.showNewPassword = !this.showNewPassword;
      document.getElementById("newPassword").type = this.showNewPassword
        ? "text"
        : "password";
    },
  },
  mounted() {
    let config = {
      headers: {
        Authorization: "Bearer " + TokenService.getToken(),
      },
    };
    this.$store.dispatch("getUser", config);
  },
};
</script>
<style scoped>
.title {
  font-size: 14px;
  line-height: 26px;
  font-weight: 700;
  color: #95abc6;
  margin-bottom: 20px;
}
.grid-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 30px;
  margin-bottom: 20px;
}
.input__block {
  margin-bottom: 15px;
  max-width: 350px;
  width: 100%;
}
.input__block-label {
  display: block;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  margin-bottom: 10px;
}
.input__block-input {
  border: 1px solid #e5ecf5;
  border-radius: 10px;
  width: 100%;
  height: 46px;
  font-size: 18px;
  padding: 10px 15px;
  outline: none !important;
  font-size: 16px;
  font-weight: 500;
  line-height: 17px;
}
.updateBtn {
  font-size: 18px;
  font-weight: 600;
  padding: 0 20px;
  max-width: 250px;
  width: 100%;
  height: 50px;
  background: linear-gradient(278.92deg, #00d06c -7.77%, #a6ffdf 158.52%);
  border-radius: 10px;
  margin-top: 20px;
}
.showPasswordIcon img {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
@media (max-width: 768px) {
  .grid-block {
    grid-template-columns: 1fr;
  }
  .input__block {
    max-width: 100%;
  }
}
</style>
