<template lang="pug">
  .todos
    TodoItem(v-for="todo in todos" :key="todo.id" :todo="todo") 
</template>

<script>
import TodoItem from '@/components/Todoitem';
import { mapGetters } from 'vuex';
export default {
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters({
      status: 'status'
    }),
    todos() {
      return this.$store.getters[this.status];
    }
  }
};
</script>

<style lang="scss" scoped></style>
