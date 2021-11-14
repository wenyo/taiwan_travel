import { createRouter, createWebHistory } from "vue-router";
import { PAGE_TYPE } from "../util/Type";
import Home from "../page/Home";
import Temp from "../page/Temp";
import { Item1, Item2, Item3 } from "../component/Image.js";

export const routes = [
  {
    path: "/",
    name: "home",
    props: { default: true, page: PAGE_TYPE[0] },
    component: Home,
    text: "台灣景點",
    icon_img: Item1,
  },
  {
    path: "/food-hotel",
    name: "food-hotel",
    props: { default: true, page: PAGE_TYPE[1] },
    component: Home,
    text: "美食住宿",
    icon_img: Item2,
  },
  {
    path: "/transportation",
    name: "transportation",
    // props: { default: true, page: PAGE_ÎTYPE[2] },
    component: Temp,
    text: "景點交通",
    icon_img: Item3,
  },
];

const router = createRouter({
  mode: history,
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
