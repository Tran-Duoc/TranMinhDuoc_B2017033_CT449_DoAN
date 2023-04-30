<template>
  <div class="grid grid-cols-12 bg-green-600 gap-2 p-5 shadow-2xl rounded-2xl">
    <div class="col-span-1">
      <router-link
        class="text-2xl font-bold text-gray-100 border-b-2 text-center"
        to="/"
      >
        BlogApp
      </router-link>
    </div>

    <div
      v-if="isLogin === true || isLogin"
      class="col-span-11 ml-auto text-xl font-semibold"
    >
      <div class="flex gap-2">
        <span>{{ user }}</span>
        <i @click="handleLogout" class="bg-gray-400 underline rounded-full"
          >logout</i
        >
      </div>
    </div>

    <div class="col-span-11 ml-auto flex gap-3" v-else>
      <router-link
        to="/register"
        class="flex items-center justify-center w-full bg-white px-10 rounded-3xl duration-100 hover:bg-gray-500 hover:text-neutral-100"
      >
        <p>Register</p>
      </router-link>
      <router-link
        to="/login"
        class="flex items-center justify-center w-full bg-white px-10 rounded-3xl duration-100 hover:bg-gray-500 hover:text-neutral-100"
      >
        <p>Login</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { getItem, setItem } from "../services/stogare.service";
import { useRouter } from "vue-router";

const router = useRouter();
const authUser = getItem("auth");
const { isLogin, user } = authUser;
const handleLogout = () => {
  setItem("auth", {
    isLogin: false,
    name: "",
  });
  router.push("/login");
  alert("Đăng xuất thành công");
};

// const isLogin = authStore.getStateLogin;
</script>

<style lang="scss" scoped></style>
