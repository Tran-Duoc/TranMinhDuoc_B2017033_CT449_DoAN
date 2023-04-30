<script setup>
import { useRouter } from "vue-router";
import Input from "../components/Input.vue";
import httpHandler from "../services/auth.service";
import { ref } from "vue";
const email = ref("");
const password = ref("");
const check = ref("");
const router = useRouter();

const error = ref({
  isError: false,
  message: "",
});
import { useAuthStore } from "../stores/index";
import { setItem } from "../services/stogare.service";
const authStore = useAuthStore();
const { setData, setUser } = authStore;

const handleSubmit = () => {
  if (password.value !== check.value) {
    error.value.isError = true;
    error.value.message = "Xác Nhận mật khẩu ko thành công";
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    httpHandler.useLoginUser("/user/login", data).then((response) => {
      console.log(response);
      if (response.statusText === "OK") {
        console.log(response.data);
        alert("Đăng nhập thành công");
        const data = {
          isLogin: true,
          user: response.data.user.email,
        };
        setUser(data);
        setItem("auth", data);
        router.push("/");
      }
    });
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <form
      class="max-w-2xl w-full bg-[#0f172a]/30 rounded-2xl flex flex-col gap-2 p-5 overflow-hidden"
      @submit.prevent="handleSubmit"
    >
      <div class="mb-3">
        <h2 class="text-2xl uppercase font-medium my-2">Login</h2>
        <span>Chào mừng đên với trang đăng nhập!</span>
      </div>
      <label>Email</label>
      <input
        type="text"
        placeholder="Nhập vào email!"
        v-model="email"
        class="w-full py-4 px-2 rounded-md outline-none border-none bg-slate-100"
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="Nhập vào password!"
        class="w-full py-4 px-2 rounded-md outline-none border-none bg-slate-100"
        v-model="password"
      />
      <label>Xác nhận Password</label>
      <input
        type="password"
        placeholder="Xác Nhận password!"
        class="w-full py-4 px-2 rounded-md outline-none border-none bg-slate-100"
        v-model="check"
      />

      <p v-if="error.isError" class="text-red-500">{{ error.message }}</p>

      <div class="w-full border-gray-500 h-[1px] border my-4"></div>
      <div class="flex flex-row gap-4">
        <button
          class="bg-blue-500 flex-1 flex-shrink-0 text-center rounded-md py-3 text-md font-medium uppercase"
        >
          Login
        </button>
      </div>
      <div class="mt-2 flex gap-2">
        <p class="">Chưa có tài khoản</p>
        <router-link to="/register" class="font-bold underline"
          >Đăng ký tại đây</router-link
        >
      </div>
    </form>
  </div>
</template>
