<template>
  <div class="div-6">
    <div class="column">
      <img loading="lazy" :src="require('@/assets/hotel1.png')" class="img-3" />
    </div>
    <div class="column-2">
      <div class="div-7">
        <div class="div-8">Вход</div>
        <div class="div-9">Введите номер телефона и пароль.</div>
        <div class="div-10">
          <div class="div-11">Телефон</div>
          <input
            v-model="phone"
            class="div-12"
            type="text"
            placeholder="+7 (___) ___-__-__"
            @input="formatPhone"
            @focus="clearPhoneError"
            :class="{ 'input-error': phoneError }"
          />
          <div v-if="phoneError" class="error-message">{{ phoneError }}</div>
        </div>
        <div class="div-13">
          <div class="div-14">Пароль</div>
          <input
            v-model="password"
            class="div-15"
            type="password"
            placeholder="******"
            @focus="clearPasswordError"
            :class="{ 'input-error': passwordError }"
          />
          <div v-if="passwordError" class="error-message">{{ passwordError }}</div>
        </div>
        <button class="div-16" @click="login" type="button">Войти</button>
        <div class="div-17">
          <div class="div-18">Нет аккаунта?</div>
          <button class="div-19" @click="$router.push('/regphone')" type="button">Зарегистрироваться</button>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from 'axios';

export default {
  name: 'LoginMenu',
  data() {
    return {
      phone: '',
      password: '',
      phoneError: '',
      passwordError: ''
    };
  },
  methods: {
    formatPhone(event) {
      let input = event.target.value.replace(/\D/g, ''); 
      if (input.length > 11) input = input.slice(0, 11); 

      let formatted = '+7 ';
      if (input.length > 1) formatted += `(${input.slice(1, 4)}`;
      if (input.length >= 4) formatted += `) ${input.slice(4, 7)}`;
      if (input.length >= 7) formatted += `-${input.slice(7, 9)}`;
      if (input.length >= 9) formatted += `-${input.slice(9, 11)}`;

      this.phone = formatted;
    },
    clearPhoneError() {
      this.phoneError = '';
    },
    clearPasswordError() {
      this.passwordError = '';
    },
    validatePhone() {
      const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
      if (!phonePattern.test(this.phone)) {
        this.phoneError = 'Введите корректный номер телефона.';
        return false;
      }
      this.phoneError = '';
      return true;
    },
    validatePassword() {
      if (this.password.length < 6) { 
        this.passwordError = 'Пароль должен содержать минимум 6 символов.';
        return false;
      }
      this.passwordError = '';
      return true;
    },
    async login() {
      if (this.validatePhone() && this.validatePassword()) {
        try {
          const response = await axios.post('http://localhost:3000/login', {
            phone: this.phone,
            password: this.password
          });
          
          const { token, user } = response.data;

        
          localStorage.setItem('authToken', token);
          localStorage.setItem('user', JSON.stringify(user));

         
          this.$emit('login', user);
          this.$router.push({ name: 'ObjectsMenu' });
        } catch (error) {
          console.error('Ошибка входа: ', error);
          Swal.fire({
  title: 'Ошибка входа, перепроверьте введенные данные',
  icon: 'error',
  confirmButtonText: 'OK'
});
          
        }
      }
    }
  },
  mounted() {
  
    const token = localStorage.getItem('authToken');
    if (token) {
    
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
       
        this.$router.push({ name: 'ObjectsMenu' });
      }
    }
  }
};
</script>

<style scoped>

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}

.input-error {
  border: 2px solid #f44336; 
}

.error-message {
  color: #f44336; 
  font-size: 0.875rem; 
  margin-top: 0.5rem; 
}

.div-6 {
  display: flex; 
  gap: 20px; 
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
  margin: 0; 
}

.column {
  width: 50%;
  display: flex;
  align-items: center; 
  height: 100%; 
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
  margin-left: 10vw;
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
  border: none;
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
  border: none;
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
  text-decoration: none; 
  background: none; 
  border: none; 
  padding: 0; 
}

</style>
