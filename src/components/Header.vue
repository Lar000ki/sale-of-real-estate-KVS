<template>
  <div>
    <header>
      <div class="left-content">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f00260add49e87f7a22ab03e6c015f9b249e06b89bdf33849f98653660cd777?"
          class="logo"
        />
      </div>
      <div class="right-content">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/21902bbfdae78d9644dc63d5ac3931f815f906dbc5075560a75ddd690a60a017?"
          class="user-icon"
        />
        <div class="login-text">Войти / Зарегистрироваться</div>
      </div>
    </header>
    <main class="content">
    </main>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent' 
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vh 1vw; 
  box-sizing: border-box;
  background-color: #2c2f34;
  color: white;
  z-index: 1000;
}

body {
  margin: 0;
}

.content {
  padding-top: 13vh; 
}

.logo img {
  height: 8vh;
}

.nav-icons {
  display: flex;
  align-items: center;
}

.user-icon, .logout-icon {
  margin-right: 1vw;
}

.logout-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.left-content {
  display: flex;
  align-items: center;
}

.logo {
  margin-right: 2vw;
}

.right-content {
  display: flex;
  align-items: center;
}

.user-icon {
  margin-right: 1vw;
}

.login-text {
  margin-left: 1vw;
}
</style>
