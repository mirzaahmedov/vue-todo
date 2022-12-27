<script setup lang="ts">
import type { TTodo } from "../types/todo";

defineProps<{
  todo: TTodo;
}>();
</script>

<template>
  <div
    @contextmenu.prevent="$emit('select', todo)"
    @click="$emit('toggle', todo.id)"
    class="todo"
  >
    <div class="todo-info">
      <h6 class="name">{{ todo.name }}</h6>
      <p class="created-date">{{ new Date(todo.date).toLocaleString() }}</p>
    </div>
    <font-awesome-icon
      class="todo-done"
      :style="{
        color: todo.done ? 'var(--text)' : 'var(--divider)',
      }"
      icon="circle-check"
    ></font-awesome-icon>
  </div>
</template>

<style scoped>
.todo {
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: box-shadow var(--animation-speed);
}
.todo:hover {
  box-shadow: var(--shadow-md);
}

.todo-info {
  flex: 1;
}

.todo .name {
  font-weight: 600;
}

.todo .created-date {
  margin-top: 10px;
  font-size: 0.7rem;
  color: var(--text-alt);
}

.todo:not(:last-child)::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid var(--bg-highlight);
}

.todo-done {
  margin-left: auto;
}
</style>
