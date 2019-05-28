<template lang="pug">
  header.header
    .date-left
      .date-left__day {{ day }}
      .date-left__monyear
        .date-left__month {{ month }}
        .date-left__year {{ year }}
    .date-right TUESDAY

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
      return this.date.getDate();
    },
    month() {
      const months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
      ];
      return months[this.date.getMonth()];
    },
    year() {
      return this.date.getFullYear();
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.date {
  &-left {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 90px;
    &__day {
      color: #616473;
      font-size: 40px;
      font-weight: 500;
    }

    &__month {
      color: #616473;
      font-size: 18px;
      font-weight: 500;
      text-transform: uppercase;
      margin-bottom: 5px;
    }
    &__year {
      color: #616473;
      font-size: 18px;
      font-weight: 400;
    }
  }

  &-right {
    color: #616473;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
  }
}
</style>
