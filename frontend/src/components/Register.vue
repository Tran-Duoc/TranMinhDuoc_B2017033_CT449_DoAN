<script setup>
import Input from "../components/Input.vue";
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <form
      class="max-w-2xl w-full bg-[#0f172a]/30 rounded-2xl flex flex-col gap-2 p-5 overflow-hidden"
    >
      <div class="mb-3">
        <h2 class="text-2xl uppercase font-medium my-2">Register</h2>
        <span>Chào mừng đên với trang đăng ký!</span>
      </div>
      <Input type="text" placeholder="Nhập vào email!" />
      <Input type="password" placeholder="Nhập vào password!" />
      <div class="w-full border-gray-500 h-[1px] border my-4"></div>
      <div class="flex flex-row gap-4">
        <button
          type="button"
          class="bg-blue-500 flex-1 flex-shrink-0 text-center rounded-md py-3 text-md font-medium uppercase"
        >
          Register
        </button>
      </div>
      <div class="mt-2 flex gap-2">
        <p class="">Đã có tài khoản</p>
        <p class="font-bold underline">Đăng nhập tại đây</p>
      </div>
    </form>
  </div>
</template>
