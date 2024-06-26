<template>
  <div id="app">
    <HeaderComponent :user="$userState.user" @logout="logout" />
    <main class="content">
      <router-view @login="login" />
    </main>
    <nav class="navigation">
      <button @click="navigateTo('StartMenu')">StartMenu</button>
      <button @click="navigateTo('LoginMenu')">LoginMenu</button>
      <button @click="navigateTo('ObjectsMenu')">ObjectsMenu</button>
      <button @click="navigateTo('ObjectsEdit')">ObjectsEdit</button>
      <button @click="navigateTo('ObjectsCreate')">ObjectsCteate</button>
      <button @click="navigateTo('ProfileMenu')">ProfileMenu</button>
      <button @click="navigateTo('RegPass')">RegPass</button>
      <button @click="navigateTo('RegPhone')">RegPhone</button>
      <button @click="navigateTo('RegPhone2')">RegPhone2</button>
      <button @click="navigateTo('RegFinal')">RegFinal</button>
    </nav>
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  methods: {
    navigateTo(page) {
      this.$router.push({ name: page });
    },
    login(user) {
      this.$userState.loginUser(user);
    },
    logout() {
      this.$userState.logoutUser();
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
}
header {
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f8f9fa;
}
.navigation {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}
.content {
  padding-top: 20px;
}
</style>
