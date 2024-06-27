<!-- App.vue -->
<template>
  <div id="app">
    <!-- Используем динамический компонент -->
    <component :is="headerComponent" :user="$userState.user" @logout="logout" />
    <main class="content">
      <!-- Роутерный вывод основного контента -->
      <router-view @login="login" />
    </main>
    <nav class="navigation">
      <!-- Кнопки навигации для различных страниц -->
      <button @click="navigateTo('StartMenu')">StartMenu</button>
      <button @click="navigateTo('LoginMenu')">LoginMenu</button>
      <button @click="navigateTo('ObjectsMenu')">ObjectsMenu</button>
      <button @click="navigateTo('ObjectsEdit', { id: 'exampleId' })">ObjectsEdit</button>
      <button @click="navigateTo('ObjectsCreate')">ObjectsCreate</button>
      <button @click="navigateTo('ProfileMenu')">ProfileMenu</button>
      <button @click="navigateTo('RegPass')">RegPass</button>
      <button @click="navigateTo('RegPhone')">RegPhone</button>
      <button @click="navigateTo('RegPhone2')">RegPhone2</button>
      <button @click="navigateTo('RegFinal')">RegFinal</button>
    </nav>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'App',
  components: {
    HeaderComponent: defineAsyncComponent(() => import('./components/Header.vue')),
  },
  computed: {
    headerComponent() {
      // Всегда возвращаем компонент 'HeaderComponent'
      return 'HeaderComponent';
    }
  },
  methods: {
    navigateTo(page, params) {
      // Метод для навигации по страницам
      this.$router.push({ name: page, params });
    },
    login(user) {
      // Метод для входа пользователя
      this.$userState.loginUser(user);
    },
    logout() {
      // Метод для выхода пользователя
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
  width: 100vh; /* Занимает всю ширину экрана */
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
