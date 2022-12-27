<script lang="ts">
import type { TTodo } from "../types/todo";

type TState = {
  form: Omit<TTodo, "id" | "date">;
};

export default {
  data(): TState {
    return {
      form: {
        name: "",
        content: "",
        done: false,
      },
    };
  },
  methods: {
    validateForm(): boolean {
      return !!this.form.name && !!this.form.content;
    },
    createTodo() {
      if (this.validateForm())
        this.$emit("onsubmit", {
          ...this.form,
          id: Date.now(),
          date: new Date(),
        });
    },
  },
};
</script>

<template>
  <form @submit.prevent="createTodo()">
    <fieldset>
      <legend>Create New Todo</legend>
      <input type="text" placeholder="name" v-model="form.name" />
      <textarea placeholder="content" v-model="form.content" />
      <input type="checkbox" v-model="form.done" />
    </fieldset>
    <button type="submit">
      <font-awesome-icon icon="circle-check"></font-awesome-icon> Create
    </button>
  </form>
</template>

<style scoped>
form {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0;
}
button {
  padding: 5px 10px;
  border: 1px solid var(--divider);
  background-color: var(--bg-alt);
  color: var(--text-alt);
}
fieldset {
  display: flex;
  padding: 1rem 0;
  flex-direction: column;
  gap: 1rem;
  border: none;
}
legend {
  font-weight: 600;
}
input[type="checkbox"] {
  position: relative;
  display: inline-block;
  width: 2.5rem;
  height: 1rem;
  border-radius: 0.5rem;
  background-color: var(--divider);
  opacity: 0.7;
}
input[type="checkbox"]::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  background-color: var(--text-alt);
  transition: transform 0.3s;
}
input[type="checkbox"]:checked::after {
  transform: translateX(1.5rem);
  background: green;
}

input[type="text"] {
  line-height: 2;
  padding: 0 0.5rem;
  border: 1px solid var(--divider);
  background: none;
}
textarea {
  padding: 0.5rem;
  background: none;
  border: 1px solid var(--divider);
}

button,
input[type="text"],
textarea {
  border-radius: 5px;
}
</style>
