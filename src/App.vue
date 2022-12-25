<script lang="ts">
import type { TTodo } from "./types/todo";

import Todos from "./components/Todos.vue";
import CreateTodo from "./components/CreateTodo.vue";

type TState = {
  todos: TTodo[];
};

export default {
  data(): TState {
    return {
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
  components: {
    Todos,
    CreateTodo,
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
    <CreateTodo />
    <Todos :todos="todos" />
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
