<script setup>
defineProps({
  type: "string",
  placeholder: "string",
});
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    class="w-full py-4 px-2 rounded-md outline-none border-none bg-slate-100"
  />
</template>

<style lang="scss" scoped></style>
