<script lang="ts">
import type { TTodo } from "./types/todo";

import Todos from "./components/Todos.vue";
import CreateTodo from "./components/CreateTodo.vue";
import Modal from "./components/Modal.vue";

type TState = {
  selected: null | TTodo;
  todos: TTodo[];
};

export default {
  data(): TState {
    return {
      selected: null,
      todos: [
        {
          id: 1,
          name: "This is some Todo",
          done: true,
          content: "This is some todo",
          date: new Date(),
        },
        {
          id: 2,
          name: "This is some Todo",
          done: true,
          content: "This is some todo",
          date: new Date(),
        },
      ],
    };
  },
  methods: {
    handleSelectTodo(todo: TTodo) {
      this.selected = todo;
    },
    handleCreateTodo(todo: TTodo) {
      this.todos = [...this.todos, todo];
    },
    handleToggleTodo(id: number) {
      const found = this.todos.findIndex((todo) => todo.id === id);
      this.todos = [
        ...this.todos.slice(0, found),
        { ...this.todos[found], done: !this.todos[found].done },
        ...this.todos.slice(found + 1),
      ];
    },
  },
  components: {
    Todos,
    CreateTodo,
    Modal,
  },
};
</script>

<template>
  <header>
    <h1 class="app-logo">
      <font-awesome-icon icon="square-check" /> Vue TodoList
    </h1>
  </header>
  <main>
    <CreateTodo @onsubmit="handleCreateTodo" />
    <Todos
      @select-todo="handleSelectTodo"
      @toggle-todo="handleToggleTodo"
      :todos="todos"
    />
    <Modal :todo="selected" @close-modal="selected = null" />
  </main>
</template>

<style scoped>
header {
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.app-logo {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
