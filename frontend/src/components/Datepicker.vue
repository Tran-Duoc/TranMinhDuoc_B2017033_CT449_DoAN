<template>
  <div>
    <VueDatePicker v-model="date" placeholder="Select Date"></VueDatePicker>
    <span></span>
  </div>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  components: { VueDatePicker },
  data() {
    return {
      date: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
