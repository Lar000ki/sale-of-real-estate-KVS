<template>
  <div id="app">
    <header>
      <!-- Логотип, который является кнопкой для перехода на главную -->
      <router-link to="/">
        <img src="@/assets/logo.png" alt="Логотип" />
      </router-link>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f8f9fa;
}
</style>
