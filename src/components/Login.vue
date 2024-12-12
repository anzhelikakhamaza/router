<script setup>
import { reactive } from "vue";

const user = reactive({
  email: "",
  password: "",
})

const emits = defineEmits(["login"])

const login = () => {
  if (user.email && user.password) {
    emits("login", user.email, user.password)
    console.log(user.email)
  } else {
    alert('Please fill out the info')
  }
}

</script>

<template>
  <form @submit.prevent="login">
    <label>Email</label>
    <input type="text" v-model="user.email" />
    <label>Password</label>
    <input type="password" v-model="user.password" />
    <button type="submit">Login</button>
  </form>
</template>

<style scoped>
input {
  display: block;
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
