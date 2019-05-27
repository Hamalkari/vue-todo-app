<template lang="pug">
  header.header
    .date-left
      .date-left__day {{ day }}
      .date-left__monyear


</template>

<script>
export default {
  data() {
    return {
      date: new Date()
    };
  },
  computed: {
    day() {
      return this.date.getDay();
    }
  }
};
</script>

<style lang="scss" scoped></style>
