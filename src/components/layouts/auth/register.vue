<template>
  <div class="auth__body auth__form" style="margin-bottom: 30px">
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
    <p class="auth__body-title">
      Ro'yxatdan o'tish <span>{{ errorMes }}</span>
    </p>
    <br />
    <form class="auth__register-form" @submit.prevent="registerUser">
      <div class="auth__register-form-group">
        <label for="firstName" class="auth__register-form-label">Ism</label>
        <input
          type="text"
          id="firstName"
          class="auth__register-form-input"
          :class="{ 'is-invalid': $v.form.firstName.$error }"
          placeholder="Ismingiz"
          v-model="form.firstName"
        />
        <div v-if="$v.form.firstName.$error" class="invalid-feedback">
          <span v-if="!$v.form.firstName.required"> Phone is required </span>
          <span v-if="!$v.form.firstName.minLength">
            The number of characters should be at least 9!
          </span>
        </div>
      </div>
      <div class="auth__register-form-group">
        <label for="lastName" class="auth__register-form-label">Familiya</label>
        <input
          type="text"
          id="lastName"
          class="auth__register-form-input"
          :class="{ 'is-invalid': $v.form.lastName.$error }"
          placeholder="Ismingiz"
          v-model="form.lastName"
        />
        <div v-if="$v.form.lastName.$error" class="invalid-feedback">
          <span v-if="!$v.form.lastName.required"> Phone is required </span>
          <span v-if="!$v.form.lastName.minLength">
            The number of characters should be at least 9!
          </span>
        </div>
      </div>
      <div class="auth__register-form-group">
        <label for="login" class="auth__register-form-label">
          Telefon raqami</label
        >
        <div class="group_pre">
          <div class="auth-input-group__prepend">998</div>
          <input
            type="text"
            id="login"
            class="auth__register-form-input"
            :class="{ 'is-invalid': $v.form.login.$error }"
            placeholder="(71)123-45-67"
            v-model="form.login"
            v-mask="'#########'"
          />
        </div>
        <div v-if="$v.form.login.$error" class="invalid-feedback">
          <span v-if="!$v.form.login.required"> Phone is required </span>
          <span v-if="!$v.form.login.minLength">
            The number of characters should be at least 9!
          </span>
        </div>
      </div>
      <div class="auth__register-form-group">
        <label for="password" class="auth__register-form-label">Parol</label>
        <div style="position: relative">
          <input
            type="password"
            id="password"
            class="auth__password-form-input"
            :class="{ 'is-invalid': $v.form.password.$error }"
            v-model="form.password"
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
        <div v-if="$v.form.password.$error" class="invalid-feedback">
          <span v-if="!$v.form.password.required"> </span>
          <span v-if="!$v.form.password.minLength"> </span>
        </div>
      </div>
      <div class="auth__register-form-group">
        <label for="passwordConfirmation" class="auth__register-form-label">
          Parolni takrorlang
        </label>
        <div style="position: relative">
          <input
            type="password"
            id="passwordConfirmation"
            class="auth__password-form-input"
            :class="{ 'is-invalid': $v.form.passwordConfirmation.$error }"
            v-model="form.passwordConfirmation"
            v-mask="'######'"
          />
          <div class="showPasswordIcon">
            <img
              src="/icons/eye.svg"
              @click="showConfirmationMethod"
              v-if="passwordConfirmation"
            />
            <img
              src="/icons/eye-closed2.svg"
              @click="showConfirmationMethod"
              v-if="!passwordConfirmation"
            />
          </div>
        </div>
        <div
          v-if="$v.form.passwordConfirmation.$error"
          class="invalid-feedback"
        >
          <span v-if="!$v.form.passwordConfirmation.required"> </span>
          <span v-if="!$v.form.passwordConfirmation.minLength"> </span>
        </div>
      </div>
      <div class="bw__cn">
        <div class="form-check me-2">
          <input class="form-check-input" type="checkbox" value="" id="check" />
          <label class="form-check-label" for="check"> Roziman</label>
        </div>
        <p style="color: rgb(0, 138, 228) !important">Qoidalar & Shartlarga</p>
      </div>
      <button class="register_btn" @click="registerUser">
        Ro'yxatdan o'tish
      </button>
      <div class="d-flex flex-wrap text">
        <p>Akkountingiz bormi ?</p>
        <router-link
          :to="{ name: 'login' }"
          style="color: rgb(0, 138, 228) !important; margin-left: 5px"
        >
          Tizimga kiring
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";
import axios from "axios";
import "@/assets/styles/pages/register.css";
import { mapMutations, mapState } from "vuex";
export default {
  name: "registerApp",
  components: {},
  data() {
    return {
      form: {
        lastName: "",
        firstName: "",
        telefon: this.login,
        login: "",
        password: "",
        passwordConfirmation: "",
      },
      errorMes: "",
      showPassword: false,
      passwordConfirmation: false,
      loading: false,
    };
  },
  validations: {
    form: {
      lastName: { required, minLength: minLength(4) },
      firstName: { required, minLength: minLength(4) },
      login: { required, minLength: minLength(6) },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(15),
      },
      passwordConfirmation: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },
  methods: {
    ...mapMutations([]),
    showPasswordMethod() {
      this.showPassword = !this.showPassword;
      document.getElementById("password").type = this.showPassword
        ? "text"
        : "password";
    },
    showConfirmationMethod() {
      this.passwordConfirmation = !this.passwordConfirmation;
      document.getElementById("passwordConfirmation").type = this
        .passwordConfirmation
        ? "text"
        : "password";
    },
    registerUser() {
      this.loading = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }
      axios
        .post("http://ocelot.atest.uz/main/User/UserRegistration", this.form)
        .then((res) => {
          if (!res.error) {
            this.$router.push({ name: "login" });
            console.log("oxshadi");
            this.loading = false;
          } else {
            console.log("im here baby");
          }
        })
        .catch((error) => {
          this.errorMes = error.response.data.error.message;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    createLinkFormData() {
      let form = new FormData();
      form.append("lastName", this.form.lastName);
      form.append("firstName", this.form.firstName);
      form.append("telefon", "998931880416");
      form.append("password", this.form.password);
      return form;
    },
  },
  computed: {
    ...mapState([]),
  },
};
</script>
<style scoped>
.invalid-feedback {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 5;
  max-width: 100%;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-top: 0;
}
input.is-invalid {
  border-color: #eb5757;
}
input.is-invalid:focus {
  border-color: #eb5757;
}
.invalid-feedback-two {
  color: #eb5757;
}
</style>
