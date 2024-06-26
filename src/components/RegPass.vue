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
        <div class="div-8">Регистрация</div>
        <div class="div-9">Придумайте пароль</div>
        <div class="div-10">
          <div class="div-11">Пароль</div>
          <input v-model="password" class="div-12" type="password" placeholder="Введите пароль">
        </div>
        <div class="div-13">
          <div class="div-14">Повторите пароль</div>
          <input v-model="confirmPassword" class="div-15" type="password" placeholder="Повторите пароль">
        </div>
        <div class="div-16" @click="continueRegistration">Продолжить</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegPass',
  props: ['phone'],
  data() {
    return {
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    async continueRegistration() {
      if (this.password !== this.confirmPassword) {
        alert('Пароли не совпадают');
        return;
      }
      try {
        const response = await axios.post('http://localhost:3000/register', {
          phone: this.phone,
          pass: this.password
        });
        if (response.status === 201) {
          alert('User registered successfully');
          this.$router.push({ name: 'RegFinal' });
        }
      } catch (error) {
        console.error('Error registering user:', error);
        alert('Error registering user');
      }
    }
  }
};
</script>

<style scoped>
.div-6 {
  gap: 20px;
  display: flex;
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
  justify-content: left;
  align-items: left;
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  color: var(--GreyDarkMain, #292f36);
  margin-left: 10vw;
  margin-top:15vh;
}

.div-8 {
  font: 700 42px PT Root UI, sans-serif;
  margin-top: 1vw;
}

.div-9 {
  margin-top: 1vw;
  font: 400 18px PT Root UI, sans-serif;
}

.div-10 {
  background-color: #fff;
  display: flex;
  margin-top: 1vw;
  width: 470px;
  max-width: 100%;
  flex-direction: column;
  white-space: nowrap;
}

.div-11 {
  text-align: left;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: 0.32px;
  font: 700 16px PT Root UI, sans-serif;
}

.div-12 {
  align-items: start;
  border-radius: 4px;
  background-color: var(--GreyLight_L, #f4f5f6);
  margin-top: 8px;
  justify-content: center;
  padding: 12px;
  font: 500 18px PT Root UI, sans-serif;
}

.div-13 {
  background-color: #fff;
  display: flex;
  margin-top: 24px;
  width: 470px;
  max-width: 100%;
  flex-direction: column;
}

.div-14 {
  text-align: left;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: 0.32px;
  font: 700 16px PT Root UI, sans-serif;

}
.div-15 {
  align-items: start;
  border-radius: 4px;
  background-color: var(--GreyLight_L, #f4f5f6);
  margin-top: 8px;
  white-space: nowrap;
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
  margin-top: 24px;
  width: 470px;
  max-width: 100%;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  letter-spacing: 0.36px;
  padding: 13px 28px;
  font: 700 18px/133% PT Root UI, sans-serif;
}

</style>