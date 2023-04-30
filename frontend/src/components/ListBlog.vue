<template>
  <div v-for="blog in blogs.data">
    <BlogCard :blog="blog" />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import https from "../utils/http.util";
import BlogCard from "./BlogCard.vue";
const blogs = reactive({
  data: [],
});

https.get("item/blogs").then((res) => {
  if (res.statusText == "OK") {
    console.log(res.data.blogs);
    blogs.data = res.data.blogs;
  }
});
</script>

<style lang="scss" scoped></style>
