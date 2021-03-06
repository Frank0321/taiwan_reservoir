import Vue from "vue";
import VueRouter from "vue-router";
import Drop from "../components/drop";
import waterOne from "../components/waterOne";
import waterTwo from "../components/waterTwo";
import waterThree from "../components/waterThree";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/reservoirInfo",
    name: "ReservoirInfo",
    component: () => import("../components/reservoirInfoDemo.vue"),
  },
  {
    path: "/drop",
    name: "Drop",
    component: Drop,
  },
  {
    path: "/water/one",
    name: "waterOne",
    component: waterOne,
  },
  {
    path: "/water/two",
    name: "waterTwo",
    component: waterTwo,
  },
  {
    path: "/water/three",
    name: "waterThree",
    component: waterThree,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
