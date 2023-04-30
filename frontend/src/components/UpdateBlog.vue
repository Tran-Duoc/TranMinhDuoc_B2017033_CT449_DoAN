<template>
  <div class="flex items-center justify-center min-h-screen">
    <form
      class="max-w-2xl w-full p-5 text-center flex flex-col gap-2 bg-slate-50 rounded-md"
      @submit.prevent="handleSubmit"
    >
      <Label class="text-xl font-bold uppercase mb-4">Chỉnh sửa chi tiết</Label>

      <input
        type="text"
        placeholder="Nhập vào tiêu đề!"
        v-model="title"
        class="w-full py-4 px-2 rounded-md outline-none border-none bg-slate-100"
      />

      <input
        type="text"
        placeholder="Nhập nội dung!"
        v-model="content"
        class="w-full py-4 px-2 rounded-md outline-none border-none bg-slate-100"
      />

      <input
        type="text"
        placeholder="Nhập tên tác giả"
        v-model="author"
        class="w-full py-4 px-2 rounded-md outline-none border-none bg-slate-100"
      />

      <input
        type="text"
        placeholder="Link ảnh"
        v-model="imgPath"
        class="w-full py-4 px-2 rounded-md outline-none border-none bg-slate-100"
      />
      <input
        type="date"
        class="py-5 bg-gray-400/30 inset-0 px-2"
        v-model="time"
      />
      <button
        class="w-full py-3 bg-green-300 mt-4 rounded-xl hover:bg-green-400/90 duration-300 font-semibold"
      >
        Cập nhật
      </button>
      <router-link
        to="/"
        class="w-full py-3 bg-gray-300 mt-4 rounded-xl hover:bg-green-400/90 duration-300 font-semibold"
      >
        Quay về trang chủ
      </router-link>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import https from "../utils/http.util";

const route = useRoute();
const router = useRouter();

const title = ref("");
const content = ref("");
const author = ref("");
const imgPath = ref("");
const time = ref("");
let data = {};

onMounted(async () => {
  const item = await https.get(`item/blog/${route.params.id}`);
  console.log(item);
  if (item.statusText === "OK") {
    data = item.data.blog;
    const result = item.data.blog;
    console.log(result);
    title.value = result.title;
    content.value = result.content;
    author.value = result.author;
    imgPath.value = result.imgPath;
    time.value = result.created_at;
  }
});
const handleSubmit = async () => {
  try {
    const data = {
      title: title.value,
      author: author.value,
      content: content.value,
      created_at: time.value,
      imgPath: imgPath.value,
    };
    console.log(data);
    const result = await https.put(`/item/update/${route.params.id}`, data);
    if (result.statusText === "OK") {
      alert("Cập nhật thành công");
      router.push(`/detail/${route.params.id}`);
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
