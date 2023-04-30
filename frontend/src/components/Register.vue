<template>
  <div class="min-h-screen flex items-center justify-center">
    <form
      @submit.prevent="handleSubmit"
      class="max-w-2xl w-full bg-[#0f172a]/30 rounded-2xl flex flex-col gap-2 p-5 overflow-hidden"
    >
      <div class="mb-3">
        <h2 class="text-2xl uppercase font-medium my-2">Register</h2>
        <span>Chào mừng đên với trang đăng ký!</span>
      </div>
      <input
        type="text"
        placeholder="Nhập vào email!"
        v-model="email"
        class="w-full py-4 px-2 rounded-md outline-none border-none bg-slate-100"
      />
      <input
        type="password"
        placeholder="Nhập vào password!"
        class="w-full py-4 px-2 rounded-md outline-none border-none bg-slate-100"
        v-model="password"
      />

      <div class="w-full border-gray-500 h-[1px] border my-4"></div>
      <div class="flex flex-row gap-4">
        <button
          class="bg-blue-500 flex-1 flex-shrink-0 text-center rounded-md py-3 text-md font-medium uppercase"
        >
          Register
        </button>
      </div>
      <div class="mt-2 flex gap-2">
        <p class="">Đã có tài khoản</p>
        <router-link to="/login" class="font-bold underline"
          >Đăng nhập tại đây</router-link
        >
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import Input from "../components/Input.vue";
import httpHandler from "../services/auth.service";
import { ref } from "vue";
const email = ref("");
const password = ref("");
const router = useRouter();

const handleSubmit = () => {
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log();
  httpHandler.useRegisterUser("/user/register", data).then((response) => {
    console.log(response);
    if (response.statusText === "OK") {
      router.push("/login");
    }
  });
};
</script>
