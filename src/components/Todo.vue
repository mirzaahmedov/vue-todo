<script setup lang="ts">
import type { TTodo } from "../types/todo";

defineProps<{
  todo: TTodo;
}>();
</script>

<template>
  <div class="todo">
    <h6 class="name">{{ todo.name }}</h6>
    <p class="created-date">{{ new Date(todo.date).toLocaleString() }}</p>
  </div>
</template>

<style scoped>
.todo {
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: box-shadow var(--animation-speed);
}
.todo:hover {
  box-shadow: var(--shadow-md);
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
  width: 100%;
  transform: translateY(20px);
  border-bottom: 1px solid var(--bg-highlight);
}
</style>
