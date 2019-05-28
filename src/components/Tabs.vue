<template lang="pug">
  ul.tabs
    li.tab(v-for="(tab,index) in tabs" :key="index")
      button.tab__btn(:class="{'active': tab.status == status}" @click="setStatus(tab.status)") {{ tab.title }}
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      tabs: [
        { title: 'Все', status: 'all' },
        { title: 'Выполненные', status: 'completed' },
        { title: 'Невыполненные', status: 'uncompleted' }
      ]
    };
  },
  methods: {
    setStatus(status) {
      this.$store.commit('SET_STATUS', status);
    }
  },
  computed: {
    ...mapGetters({
      status: 'status'
    })
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  margin-bottom: 20px;
  .tab {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }

    &__btn {
      display: block;
      padding: 10px;
      font-size: 14px;
      background: #fff;
      border: 1px solid #000;
      border-radius: 20px;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        color: #2df71b;
        border-color: #2df71b;
      }
      &.active {
        color: #2df71b;
        border-color: #2df71b;
      }
    }
  }
}
</style>
