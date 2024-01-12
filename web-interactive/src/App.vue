<template>
  <div id="app">
    <router-link to="/login" v-if="!isAuthenticated">Login</router-link>
    <router-link to="/dashboard" v-if="isAuthenticated">Dashboard</router-link>
    <button @click="logout" v-if="isAuthenticated">Logout</button>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>

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
