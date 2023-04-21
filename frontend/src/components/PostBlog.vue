<template>
  <div class="flex items-center justify-center min-h-screen">
    <form
      class="max-w-2xl w-full p-5 text-center flex flex-col gap-2 bg-slate-50 rounded-md"
    >
      <Label class="text-xl font-bold uppercase mb-4">Thêm blog</Label>

      <Input type="text" placeholder="Nhập tiêu đề!" />
      <Input type="text" placeholder="Nhập nội dung!" />
      <Input type="text" placeholder="Nhập tên tác giả" />
      <Input type="text" placeholder="Link ảnh" />
      <Datepicker />
      <button type="button" class="w-full py-3 bg-green-300 mt-4 rounded-xl">
        Đăng bà<i></i>
      </button>
    </form>
  </div>
</template>

<script setup>
import Input from "./Input.vue";
import Datepicker from "../components/Datepicker.vue";
</script>

<style lang="scss" scoped></style>
