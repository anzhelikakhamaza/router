<script setup>
import { reactive } from "vue";

const user = reactive({
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
})
</script>

<template>
  <div>
    <h1>Sigh Up Form</h1>
    <input type="text" v-model="user.name" placeholder="User Name" />
    <input type="email" v-model="user.email" placeholder="User Email" />

    <div>
      <input type="password" v-model="user.password" placeholder="Password" />

      <input
          type="password"
          v-model="user.passwordConfirmation"
          placeholder="Confirm Password"
      />
    </div>

    <div>
      <button>Submit</button>
    </div>
  </div>
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
