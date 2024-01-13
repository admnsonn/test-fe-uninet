<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

router-link {
  margin-right: 10px;
  text-decoration: none;
  color: #3498db;
}

button {
  margin-top: 10px;
  background-color: #e74c3c;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
