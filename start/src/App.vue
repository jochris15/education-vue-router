<script setup>
import LoginPage from "./components/LoginPage.vue";
import HomePage from "./components/HomePage.vue";
import { ref } from "vue";

const isLoggedIn = ref(true);

const login = (email, password) => {
  console.log(`Logging in with email: ${email} and password: ${password}`);
  isLoggedIn.value = true;
};

const logout = () => {
  isLoggedIn.value = false;
};
//   components: {
//     LoginPage,
//     HomePage,
//   },
//   data() {
//     return {
//       isLoggedIn: false,
//     };
//   },
//   methods: {
//     login(email, password) {
//       console.log(`Logging in with email: ${email} and password: ${password}`);
//       this.isLoggedIn = true;
//     },
//     logout() {
//       this.isLoggedIn = false;
//     },
//   },
// };
</script>

<template>
  <div class="p-5">
    <LoginPage @login="login" v-if="!isLoggedIn" />
    <div v-if="isLoggedIn">
      <NavBar @logout="logout"></NavBar>
      <HomePage />
    </div>
  </div>
</template>
