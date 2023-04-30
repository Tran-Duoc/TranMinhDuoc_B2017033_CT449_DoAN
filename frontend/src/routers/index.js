import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Home from "../components/Home.vue";
import PostBlog from "../components/PostBlog.vue";
import Detail from "../components/Detail.vue";
import UpdateBlog from "../components/UpdateBlog.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/post",
    component: PostBlog,
  },
  {
    path: "/detail/:id",
    component: Detail,
  },
  {
    path: "/update/:id",
    component: UpdateBlog,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
