<template>
  <div>
    <Navbar />
    <router-link
      type="button"
      to="/post"
      class="bg-green-500 py-5 px-20 rounded-3xl mt-5 hover:bg-green-500/60 duration-150"
    >
      Thêm blog
    </router-link>
    <div class="grid grid-cols-2 gap-5 mt-3">
      <ListBlog />
    </div>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
import ListBlog from "./ListBlog.vue";

import { useAuthStore } from "../stores/index";
const authStore = useAuthStore();

console.log(authStore.getStateLogin);
</script>

<style lang="scss" scoped></style>
