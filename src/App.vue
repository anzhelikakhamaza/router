<script setup>
// import {useAuthStore} from "@/stores/authStore.js";

// const setup = () => {
//   const userStore = useAuthStore();
//   return { userStore };
// }
</script>

<template>
  <div>
  </div>

  <div>
    <RouterLink to="/article/1">Article 1</RouterLink>
    <RouterLink to="/article/2">Article 2</RouterLink>
  </div>

  <div>
    <RouterLink to="/my-cabinet">My Cabinet</RouterLink>
    <RouterLink to="/login">Login Page</RouterLink>
    <RouterLink to="/about">About</RouterLink>

  </div>

  <RouterView />
</template>

<style scoped>

</style>