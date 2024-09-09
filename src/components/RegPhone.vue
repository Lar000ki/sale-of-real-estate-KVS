<template>
  <div class="div-6">
    <div class="column">
      <img loading="lazy" :src="require('@/assets/hotel1.png')" class="img-3" />
    </div>
    <div class="column-2">
      <div class="div-7">
        <div class="div-8">Регистрация</div>
        <div class="div-9">
          Заполните данные и получите смс-код <br />для подтверждения на ваш
          номер телефона
        </div>
        <div class="div-10">
          <div class="div-11">Телефон</div>
          <input
            v-model="phone"
            class="div-12"
            type="text"
            placeholder="+7 (___) ___-__-__"
            @input="formatPhone"
            :class="{ 'input-error': phoneError }"
          />
          <div v-if="phoneError" class="error-message">{{ phoneError }}</div>
        </div>
        <button class="div-13" @click="sendSmsCode" type="button">Получить смс-код</button>
        <div class="div-14">
          <div class="div-15">У вас уже есть аккаунт?</div>
          <button class="div-16" @click="redirectToLogin" type="button">Войти</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'RegPhone',
  data() {
    return {
      phone: '',
      phoneError: ''
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
    validatePhone() {
      
      const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
      if (!phonePattern.test(this.phone)) {
        this.phoneError = 'Введите корректный номер телефона.';
        return false;
      }
      this.phoneError = '';
      return true;
    },
    sendSmsCode() {
      if (!this.validatePhone()) {
        return;
      }

      this.$router.push({ name: 'RegPhone2', params: { phone: this.phone } });
    },
    redirectToLogin() {
      this.$router.push({ name: 'LoginMenu' });
    }
  }
};
</script>

<style scoped>
.div-6 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100vh; 
  padding: 0;
  box-sizing: border-box;
}

.column, .column-2 {
  flex: 1; 
  display: flex;
  justify-content: center;
  align-items: center;
}
.column {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; 
}

.img-3 {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover; 
}
.div-8 {
  margin-top: 0;
}
.column-2 {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: flex-start; 
}



.div-13 {
  background-color: var(--Accent, #008ad7);
  color: #fff;
  font: 700 18px/133% PT Root UI, sans-serif;
  text-align: center;
  padding: 12px;
  width: 470px;
  max-width: 100%;
  border: none;
  border-radius: 4px;
}

.div-16 {
  color: var(--Accent, #008ad7);
  font-feature-settings: "clig" off, "liga" off;
  font-family: PT Root UI, sans-serif;
  font-weight: 700;
  background: none;
  border: none;
  text-align: center;
  padding: 12px;
  cursor: pointer;
}

.div-16:hover {
  background: none; 
  color: var(--Accent, #008ad7); 
 
}

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

button:hover {
  background-color: #0056b3;
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
  margin-top: -5vw;
}

.div-8 {
  color: var(--GreyDarkMain, #292f36);
  font: 700 42px PT Root UI, sans-serif;
}

.div-9 {
  color: var(--GreyDarkMain, #292f36);
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
  margin-top: 8px;
  padding: 12px;
  color: #b0b2b6;
  justify-content: center;
  border: none;
  font: 500 18px PT Root UI, sans-serif;
}

.div-14 {
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

.div-15 {
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  font-family: PT Root UI, sans-serif;
  font-weight: 400;
}
</style>

