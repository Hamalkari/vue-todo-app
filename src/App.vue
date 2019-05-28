<template lang="pug">
  #app
    .container
      Header
      Tabs
      TodoList
      TodoCreate
</template>

<script>
import Header from '@/components/Header';
import TodoList from '@/components/TodoList';
import TodoCreate from '@/components/CreateTodo';
import Tabs from '@/components/Tabs';
export default {
  components: {
    Header,
    TodoList,
    TodoCreate,
    Tabs
  }
};
</script>

<style lang="scss" scoped></style>
