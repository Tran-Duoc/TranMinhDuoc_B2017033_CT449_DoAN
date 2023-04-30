<script setup>
import { reactive, watchEffect } from "vue";

defineProps({
  type: {
    type: String,
    default: "string",
  },
  placeholder: {
    type: String,
    default: "string",
  },
  value: {
    type: String,
    default: "",
  },
  onUpdateValue: {
    type: Function,
    default: () => {},
  },
});
const inputValue = reactive({
  value: value,
});

watchEffect(() => {
  onUpdateValue(inputValue.value);
});

const updateValue = (event) => {
  inputValue.value = { ...inputValue, value: event.target.value };
};
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    class="w-full py-4 px-2 rounded-md outline-none border-none bg-slate-100"
    :value="inputValue.value"
    @input="updateValue"
  />
</template>

<style lang="scss" scoped></style>
