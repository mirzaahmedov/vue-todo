<script setup lang="ts">
import type { TTodo } from "../types/todo";

defineProps<{
  todo: TTodo | null;
}>();
</script>

<template>
  <div class="modal-container" v-if="todo">
    <button class="close-button" @click="$emit('close-modal')">
      <font-awesome-icon icon="times"></font-awesome-icon>
    </button>
    <h4>{{ todo.name }}</h4>
    <p>{{ todo.content }}</p>
    {{ todo.done ? "Finished" : "Not finished" }}
    <font-awesome-icon
      :style="{
        color: todo.done ? 'var(--text)' : 'var(--divider)',
      }"
      icon="circle-check"
    ></font-awesome-icon>
  </div>
</template>

<style scoped>
.modal-container {
  width: 100%;
  max-width: 600px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  background-color: var(--bg-alt);
  box-shadow: 0 0 5px 100vw rgba(0, 0, 0, 0.2);
}

.close-button {
  appearance: none;
  border: none;
  background: none;
  font-size: 2rem;
  color: var(--text);
  float: right;
}

h4 {
  font-size: 3rem;
  font-weight: 600;
}
p {
  margin: 1rem 0;
}
</style>
