<template>
  <div id="app">
    <HeaderComponent />
    <router-view />
    <nav class="navigation">
      <button @click="navigateTo('StartMenu')">StartMenu</button>
      <button @click="navigateTo('LoginMenu')">LoginMenu</button>
      <button @click="navigateTo('ObjectsMenu')">ObjectsMenu</button>
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
    }
  }
};
</script>

<style>
/* Reset margins and paddings for all elements */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
}

/* Additional styling for navigation and header */
.navigation {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f8f9fa;
}
</style>
