import { defineStore } from "pinia";
// import { setItem } from "../services/stogare.service";

export const useAuthStore = defineStore("author", {
  state: () => ({
    isLogin: false,
    data: null,
    auth: {
      name: "",
      isLogin: false,
    },
  }),
  getters: {
    getStateLogin: (state) => {
      return state.isLogin;
    },
    getData: (state) => {
      return state.data;
    },
    getAuth: () => {
      return state.auth;
    },
  },
  actions: {
    setIsLogin(state) {
      return (this.isLogin = state);
    },
    setData(data) {
      this.data = data;
    },
    setUser(data) {
      return (this.auth = data);
    },
  },
});
