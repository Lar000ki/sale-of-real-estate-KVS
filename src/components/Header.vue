<template>
  <div class="header-container">
    <header>
      <router-link to="/" class="logo-link">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f00260add49e87f7a22ab03e6c015f9b249e06b89bdf33849f98653660cd777?"
          class="logo"
        />
      </router-link>
      <div class="left-content">
        <router-link v-if="isLoggedIn" to="/objects" class="nav-item">
          <span class="objects-link">Объекты</span>
        </router-link>
        <router-link v-if="isLoggedIn" to="/profile" class="nav-item">
          <span class="settings-link">Общие настройки</span>
        </router-link>
      </div>
      <div class="right-content">
        <div class="profile-info" v-if="isLoggedIn">
          <router-link to="/profile" class="profile-link">
            <img
              loading="lazy"
              :src="isLoggedIn ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/21902bbfdae78d9644dc63d5ac3931f815f906dbc5075560a75ddd690a60a017?' : ''"
              class="user-icon"
            />
          </router-link>
          <span class="profile-name">{{ user.firstname }} {{ user.lastname }}</span>
        </div>
        <div v-else class="not-logged-in">
          <router-link to="/login" class="login-text">Войти / Зарегистрироваться</router-link>
        </div>
        <div v-if="isLoggedIn" class="logged-in">
          <button @click="logout" class="logout-button">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe969f6fc205c0ae87e62e47b821da4160fda71457d54ce8502486b26bb5fa10?"
              class="logout-icon"
            />
            <span class="logout-text">Выйти</span>
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    user: Object
  },
  computed: {
    isLoggedIn() {
      return !!this.user; // Проверяем, залогинен ли пользователь
    }
  },
  methods: {
    logout() {
      this.$emit('logout'); // Вызываем событие выхода
    }
  }
};
</script>

<style scoped>
.header-container {
  width: 100%; 
  display: flex;
  flex-direction: column;
  box-sizing: border-box; 
}

header {
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1vw;
  box-sizing: border-box;
  background-color: #2c2f34;
  color: white;
}

.logo-link {
  text-decoration: none; 
}

.logo {
  height: 8vh;
  margin-left: 1vw; 
}

.left-content {
  display: flex;
  align-items: center;
  flex: 1; 
  font: 700 16px PT Root UI, sans-serif;
}

.objects-link {
  margin-left: 1vw;
  font-size: 18px; 
}

.settings-link {
  margin-left: 1vw;
  font-size: 18px; 
}

.right-content {
  display: flex;
  align-items: center;
}

.profile-info {
  display: flex;
  align-items: center;
}

.user-icon {
  margin-right: 0.5vw;
  max-width: 24px; 
}

.profile-name {
  margin-left: 0.5vw;
  margin-right: 1vw;  
  font-size: 18px; 
  color: white;
  font: 700 16px PT Root UI, sans-serif;
}

.not-logged-in {
  display: flex;
  align-items: center;
}

.logged-in {
  display: flex;
  align-items: center;
}

.logout-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: white;
  font: 700 16px PT Root UI, sans-serif;
}

.logout-icon {
  height: 24px; 
}

.logout-text {
  margin-left: 0.5vw;
  font-size: 18px;
}

.nav-item {
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.login-text {
  color: white;
  text-decoration: none;
  font: 700 16px PT Root UI, sans-serif;
}
</style>
