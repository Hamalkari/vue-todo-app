<template lang="pug">
  .todo(:class="{'completed' : todoItem.done }")
    .todo__title {{ todoItem.title }}
    .todo__done
      input(type="checkbox")#todo__check
      label.todo__label(for="todo__check")(@click="todoToggle")
</template>

<script>
export default {
  props: {
    todo: Object
  },
  data() {
    return {
      todoItem: this.todo
    };
  },
  methods: {
    todoToggle() {
      this.todoItem.done = !this.todoItem.done;
    }
  }
};
</script>

<style lang="scss" scoped>
.todos {
  .todo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;

    &.completed {
      .todo__label {
        border-color: #2df71b;

        &::before {
          opacity: 1;
        }
      }
      .todo__title {
        color: #bdc0ca;
        text-decoration: line-through;
      }
    }

    &__title {
      color: #3e434f;
      font-size: 17px;
      font-weight: 400;
    }

    input {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }

    &__label {
      display: block;
      position: relative;
      width: 25px;
      height: 25px;
      border: 2px solid #eef0f5;
      background-color: #ffffff;
      border-radius: 50%;
      transition: 0.3s;
      cursor: pointer;

      &::before {
        content: '';
        top: 5px;
        left: 5px;
        position: absolute;
        transition: 0.3s;
        width: 12px;
        height: 8px;
        border-radius: 1px;
        border-left: 2px solid #2df71b;
        border-bottom: 2px solid #2df71b;
        transform: rotate(-45deg);
        opacity: 0;
      }
    }
  }
}
</style>
