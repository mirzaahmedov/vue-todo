<script lang="ts">
export default {
  methods: {
    createTodo() {
      console.log("created");
    },
  },
};
</script>

<template>
  <form @submit.prevent="createTodo()">
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
  display: flex;
  justify-content: flex-end;
}
button {
  padding: 5px 10px;
  border: 1px solid var(--divider);
  background-color: var(--bg-alt);
  color: var(--text-alt);
}
</style>
