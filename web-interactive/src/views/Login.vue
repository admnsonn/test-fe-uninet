<template>
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label>Email:</label>
        <input v-model="email" type="text" required />
        <label>Password:</label>
        <input v-model="password" type="password" required />
        <button type="submit">Login</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: ''
      };
    },
    methods: {
      async login() {
        try {
          // Implement API call to login
          // If successful, store session in Redux or similar
          // Redirect to dashboard
        } catch (error) {
          this.error = "Login failed. Please check your credentials.";
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .error {
    color: red;
  }
  </style>
  