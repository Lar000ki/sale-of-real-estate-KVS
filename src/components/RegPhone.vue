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
            <div class="div-9">
              Заполните данные и получите смс-код <br />для подтверждения на ваш
              номер телефона
            </div>
            <div class="div-10">
              <div class="div-11">Телефон</div>
              <input v-model="phone" class="div-12" type="text" placeholder="+7 (900) 000 00 00">
            </div>
            <!-- Кнопка "Получить смс-код" с переходом на страницу RegPass -->
            <div class="div-13" @click="sendSmsCode">Получить смс-код</div>
            <!-- Кнопка "Войти" -->
            <div class="div-14">
              <div class="div-15">У вас уже есть аккаунт?</div>
              <div class="div-16" @click="redirectToLogin">Войти</div>
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
      phone: '' // Поле для хранения номера телефона
    };
  },
  methods: {
    sendSmsCode() {
      // Здесь можно добавить логику отправки SMS кода
      // В данном случае просто переходим на страницу RegPass
      this.$router.push({ name: 'RegPass' });
    },
    redirectToLogin() {
      // Переход на страницу LoginMenu при клике на "Войти"
      this.$router.push({ name: 'LoginMenu' });
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
  margin-top:1vw;
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

  font: 500 18px PT Root UI, sans-serif;
}

.div-13 {
  font-feature-settings: "clig" off, "liga" off;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: var(--Accent, #008ad7);
  margin-top: 1vw;
  padding: 12px;
  width: 470px;
  max-width: 100%;
  color: #fff;
  text-align: center;
  letter-spacing: 0.36px;
  font: 700 18px/133% PT Root UI, sans-serif;
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
.div-16 {
  color: var(--Accent, #008ad7);
  font-feature-settings: "clig" off, "liga" off;
  font-family: PT Root UI, sans-serif;
  font-weight: 700;
}
</style>