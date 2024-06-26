<template>
  <div class="div-6">
    <div class="column">
      <img
        loading="lazy"
        :src="require('@/assets/hotel1.png')"
        class="img-3"
      />
    </div>
    <div class="column-2">
      <div class="div-7">
        <div class="div-8">Вход</div>
        <div class="div-9">Введите номер телефона и пароль.</div>
        <div class="div-10">
          <div class="div-11">Телефон</div>
          <input v-model="phone" class="div-12" type="text" placeholder="+7" />
        </div>
        <div class="div-13">
          <div class="div-14">Пароль</div>
          <input
            v-model="password"
            class="div-15"
            type="password"
            placeholder="******"
          />
        </div>
        <div class="div-16" @click="login">Войти</div>
        <div class="div-17">
          <div class="div-18">Нет аккаунта?</div>
          <router-link to="/regphone" class="div-19"
            >Зарегистрироваться</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginMenu',
  data() {
    return {
      phone: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/login', {
          phone: this.phone,
          password: this.password
        });
        const user = response.data.user;
        this.$emit('login', user);
        this.$router.push({ name: 'ObjectsMenu' });
      } catch (error) {
        console.error('Ошибка входа: ', error);
        alert('Ошибка входа, перепроверьте введеные данные');
      }
    },
    regphone() {
      this.$router.push({ name: 'RegPhone' });
    }
  }
};
</script>


<style scoped>
.div-6 {
  display: flex; 
  gap: 20px; 
  justify-content: center; 
  align-items: center; 
  margin-top: -3vh;
}

.column {
  width: 50%; 
}

.img-3 {
  width: 100%; 
  max-width: 100%;
}

.column-2 {
  width: 50%; 
  display: flex; 
  justify-content: flex-start; 
  align-items: flex-start; 
}

.div-7 {
  display: flex; 
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: flex-start; 
  margin-left:10vw;
  text-align: left; 
}

.div-8 {
  color: var(--GreyDarkMain, #292f36); 
  font-size: 2.5vw; 
  font-weight: bolder;
  font-family: PT Root UI, sans-serif;
  margin-top: 1vh;
}


.div-9 {
  color: var(--GreyDarkMain, #292f36);
  margin-top: 1vw;
  font: 400 18px PT Root UI, sans-serif; 
  text-align: left; 
}


.div-10 {
  background-color: #fff; 
  display: flex;
  margin-top: 1vw;
  width: 470px; 
  max-width: 100%; 
  flex-direction: column; 
}

.div-11 {
  color: var(--GreyDarkMain, #292f36); 
  text-align: left; 
  font-feature-settings: "clig" off, "liga" off; 
  letter-spacing: 0.32px; 
  font: 700 16px PT Root UI, sans-serif; 
}

.div-12 {
  align-items: start;
  border-radius: 4px;
  background-color: var(--GreyLight_L, #f4f5f6); 
  margin-top: 1vw; 
  color: #b0b2b6; 
  justify-content: center; 
  padding: 12px; 
  font: 500 18px PT Root UI, sans-serif; 
}

.div-13 {
  background-color: #fff; 
  display: flex; 
  margin-top: 1vw;
  width: 470px; 
  max-width: 100%; 
  flex-direction: column; 
  white-space: nowrap; 
}


.div-14 {
  color: var(--GreyDarkMain, #292f36); 
  text-align: left; 
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: 0.32px; 
  font: 700 16px PT Root UI, sans-serif; 
}

.div-15 {
  align-items: start; 
  border-radius: 4px; 
  background-color: var(--GreyLight_L, #f4f5f6); 
  margin-top: 1vw; 
  color: #b0b2b6; 
  justify-content: center; 
  padding: 12px; 
  font: 500 18px PT Root UI, sans-serif;
}

.div-16 {
  font-feature-settings: "clig" off, "liga" off; 
  justify-content: center; 
  align-items: center; 
  border-radius: 4px; 
  background-color: var(--Accent, #008ad7); 
  margin-top: 1vw; 
  width: 470px; 
  max-width: 100%; 
  color: #fff; 
  white-space: nowrap; 
  text-align: center; 
  letter-spacing: 0.36px; 
  padding: 13px 28px; 
  font: 700 18px/133% PT Root UI, sans-serif; 
}

.div-17 {
  display: flex; 
  margin-top: 1vw; 
  width: 470px; 
  max-width: 100%; 
  gap: 20px;
  font-size: 18px;
  text-align: center; 
  letter-spacing: 0.36px; 
  line-height: 133%; 
  justify-content: space-between; 
}

.div-18 {
  color: #000; 
  font-feature-settings: "clig" off, "liga" off; 
  font-family: PT Root UI, sans-serif;
  font-weight: 400; 
}

.div-19 {
  color: var(--Accent, #008ad7); 
  font-feature-settings: "clig" off, "liga" off; 
  font-family: PT Root UI, sans-serif; 
  font-weight: 700; 
}
</style>
