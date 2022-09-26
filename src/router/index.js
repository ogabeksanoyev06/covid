import Vue from "vue";
import VueRouter from "vue-router";
import TokenService from "@/service/TokenService";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/site/home/AppHome.vue"),
      },
      {
        path: "module-one",
        name: "module-one",
        component: () =>
          import("@/views/site/modules/moduleOne/AppModuleOne.vue"),
      },
      {
        path: "module-two",
        name: "module-two",
        component: () =>
          import("@/views/site/modules/moduleTwo/AppModuleTwo.vue"),
      },
      {
        path: "module-three",
        name: "module-three",
        component: () =>
          import("@/views/site/modules/moduleThree/AppModuleThree.vue"),
      },
      {
        path: "module-four",
        name: "module-four",
        component: () =>
          import("@/views/site/modules/moduleFour/AppModuleFour.vue"),
      },
      {
        path: "module-five",
        name: "module-five",
        component: () =>
          import("@/views/site/modules/moduleFive/AppModuleFive.vue"),
      },
      {
        path: "module-six",
        name: "module-six",
        component: () =>
          import("@/views/site/modules/moduleSix/AppModuleSix.vue"),
      },
      {
        path: "module-seven",
        name: "module-seven",
        component: () =>
          import("@/views/site/modules/moduleSeven/AppModuleSeven.vue"),
      },
      {
        path: "module-eight",
        name: "module-eight",
        component: () =>
          import("@/views/site/modules/moduleEight/AppModuleEight.vue"),
      },
      {
        path: "module-nine",
        name: "module-nine",
        component: () =>
          import("@/views/site/modules/moduleNine/AppModuleNine.vue"),
      },
      {
        path: "/modules",
        name: "modules",
      },
      {
        path: "/contact",
        name: "contact",
      },
    ],
  },
  {
    path: "/sign-in",
    component: () => import("../layouts/Auth"),
    children: [
      {
        path: "/sign-in",
        name: "login",
        component: () => import("../components/layouts/auth/login"),
      },
    ],
  },
  {
    path: "/sign-up",
    component: () => import("../layouts/Auth"),
    children: [
      {
        path: "/sign-up",
        name: "register",
        component: () => import("../components/layouts/auth/register"),
      },
    ],
  },
  {
    path: "/cabinet",
    component: () => import("@/layouts/Cabinet"),
    children: [
      {
        path: "/cabinet",
        name: "cabinet",
        component: () =>
          import("@/views/cabinet/my-account/general-information"),
      },
      {
        path: "/tests-results",
        name: "tests-results",
        component: () => import("@/views/cabinet/my-account/tests-results"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  const token = TokenService.getToken();
  const guestRoutes = ["register", "login"];
  if (!token) {
    if (to.name != "login" && to.name == "test-solving") {
      return next({ name: "login" });
    }
  } else {
    if (guestRoutes.includes(to.name)) {
      if (to.name != "home") {
        return next({ name: "home" });
      }
    }
    next();
  }
  next();

  // if (token) {
  //   if (to.name === "login" || to.name === "register" || to.name === "confirm") next({ name: "home" });
  //   else next();
  // } else {
  //   if (to.name !== "login" && to.name == "test-solving") next({ name: "login" });
  //   else next();
  // }
});

export default router;
