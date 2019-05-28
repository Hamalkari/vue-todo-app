import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    status: 'all'
  },
  getters: {
    status: state => state.status,
    completed: state => {
      return state.todos.filter(todo => todo.done);
    },
    uncompleted: state => {
      return state.todos.filter(todo => !todo.done);
    },
    all: state => state.todos
  },
  mutations: {
    ADD_TODO(state, payload) {
      state.todos.push(payload);
    },
    SET_STATUS(state, payload) {
      state.status = payload;
    }
  },
  actions: {}
});
