<script setup lang="ts">
import type { TTodo } from "../types/todo";

defineProps<{
  todos: TTodo[];
}>();
</script>
<script lang="ts">
import Todo from "./Todo.vue";

export default {
  components: {
    Todo,
  },
};
</script>

<template>
  <div class="todos">
    <Todo
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle="$emit('toggle-todo', todo.id)"
      @select="$emit('select-todo', todo)"
    />
  </div>
</template>

<style scoped>
.todos {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
  background-color: var(--bg-alt);
  border-radius: 10px;
}
</style>
