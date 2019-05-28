<template lang="pug">
  form.form(@submit.prevent="addTodo")
    .form__btn(@click.prevent="showInput = !showInput" v-if="!showInput") +
    input(v-model="title" v-if="showInput").form__input
</template>

<script>
export default {
  data() {
    return {
      title: '',
      id: 1,
      done: false,
      showInput: false
    };
  },
  methods: {
    addTodo() {
      const todo = {
        title: this.title,
        id: this.id,
        done: this.done
      };
      this.$store.commit('ADD_TODO', todo);
      this.clear();
    },
    clear() {
      this.title = '';
      this.id++;
      this.done = false;
      this.showInput = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  position: absolute;
  left: 50%;
  bottom: -50px;
  transform: translate(-50%);
  &__btn {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 10px rgba(62, 192, 136, 0.8);
    background-color: #50e3a4;
    border-radius: 50%;
    border: 1px solid #50e3a4;
    cursor: pointer;
    font-size: 50px;
    color: #46be8b;
    transition: 0.3s;
    &:hover {
      color: #fff;
    }
  }

  &__input {
    width: 300px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 20px;
    transition: 0.3s;
    &:focus {
      border-color: #2df71b;
    }
  }
}
</style>
