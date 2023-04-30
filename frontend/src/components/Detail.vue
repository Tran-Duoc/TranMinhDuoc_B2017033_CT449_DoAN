<script setup>
import Navbar from "./Navbar.vue";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import https from "../utils/http.util";

const route = useRoute();
const router = useRouter();
const value = ref({});

onMounted(async () => {
  const detail = await https.get(`/item/blog/${route.params.id}`);
  const { title, content, author, imgPath, created_at } = detail.data.blog;

  const date = new Date(created_at);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dateFormat = date.toLocaleDateString("en-US", options);

  value.value = {
    title: title,
    content: content,
    author: author,
    imgPath: imgPath,
    created_at: dateFormat,
  };
});

const handleDelete = async () => {
  let text = "Press a button!\nEither OK or Cancel.";
  if (confirm(text) == true) {
    const id = route.params.id;
    const deleteBlog = await https.delete(`/item/delete/${id}`);
    if (deleteBlog.statusText === "OK") {
      alert("Xóa thành công");
      await router.push("/");
    }

    console.log("OK");
  } else {
    console.log("Cancel!");
    return;
  }
};
</script>
<template>
  <div>
    <Navbar />
    <div class="grid grid-cols-12 grid-rows-4 gap-8 p-10">
      <div class="col-span-4 row-span-4">
        <img :src="value.imgPath" class="bg-cover w-full" />
      </div>
      <div class="col-span-8 row-span-4">
        <div>
          <div class="grid grid-cols-1 grid-rows-6">
            <div
              class="text-2xl font-semibold capitalize border-b-2 pb-5 border-gray-500 row-span-1"
            >
              {{ value.title }}
            </div>
            <div class="text-lg font-medium mt-5 row-start-2 row-span-4">
              <p>
                {{ value.content }}
              </p>
              <div class="mt-5 border-t-2 border-gray-500 pt-5">
                Tác giả: {{ value.author }}
              </div>
              <div class="mt-3">
                Ngày tạo:
                {{ value.created_at }}
              </div>
            </div>
            <div class="row-start-6 row-span-1 mt-10">
              <div class="flex gap-5">
                <button
                  type="button"
                  class="bg-gray-300 py-4 px-16 rounded-xl"
                  @click="handleDelete"
                >
                  Xóa bài
                </button>
                <router-link
                  :to="`/update/${route.params.id}`"
                  class="bg-gray-300 py-4 px-16 rounded-xl"
                >
                  Chỉnh sửa
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
