<template>
  <div class="p-5 bg-slate-300">
    <div class="grid grid-cols-12 grid-rows-4 gap-2">
      <div class="col-span-4 row-span-4">
        <img :src="blog.imgPath" alt="" class="bg-cover w-full" />
      </div>
      <div class="col-start-5 col-span-8 row-span-4">
        <span class="text-lg font-semibold">{{ blog.title }}</span>
        <p class="font-light mt-3">
          {{ blog.content }}
        </p>
        <div class="font-semibold mt-3">Tác Giả : {{ blog.author }}</div>
        <div>Ngày tạo: {{ blog.created_at }}</div>
        <div
          class="mt-10 bg-green-400 py-4 px-10 rounded-2xl text-lg font-bold text-white w-52"
        >
          <router-link :to="`/detail/${blog._id}`"> Xem chi tiết </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import Detail from "./Detail.vue";

const props = defineProps({
  blog: Object,
});

const date = new Date(props.blog.created_at);
const options = { year: "numeric", month: "long", day: "numeric" };
props.blog.created_at = date.toLocaleDateString("en-US", options);
</script>
