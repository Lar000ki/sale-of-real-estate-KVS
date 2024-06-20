<template>
  <div class="div">
    <div class="div-5">
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
              <input v-model="phone" class="div-12" type="text" placeholder="+7">
            </div>
            <div class="div-13">
              <div class="div-14">Пароль</div>
              <input v-model="password" class="div-15" type="password" placeholder="******">
            </div>
            <div class="div-16" @click="login">Войти</div>
            <div class="div-17">
              <div class="div-18">Нет аккаунта?</div>
              <router-link to="/register" class="div-19">Зарегистрироваться</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginMenu',
  data() {
    return {
      phone: '', // Переменная для хранения введенного номера телефона
      password: '' // Переменная для хранения введенного пароля
    };
  },
  methods: {
    login() {
      // Переходим на страницу ObjectsMenu после успешного логина
      this.$router.push({ name: 'ObjectsMenu' });
    }
  }
};
</script>


<style scoped>
.div {
  justify-content: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.div-5 {
  width: 100%;
}
.div-6 {
  gap: 20px;
  display: flex;
}
.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
}
.img-3 {
  aspect-ratio: 0.95;
  object-fit: auto;
  object-position: center;
  width: 100%;
  align-self: stretch;
  flex-grow: 1;
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
}
.div-7 {
  justify-content: center;
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 80px 80px 70px;
}
.div-8 {
  color: var(--GreyDarkMain, #292f36);
  margin-top: 154px;
  font: 700 42px PT Root UI, sans-serif;
}
.div-9 {
  color: var(--GreyDarkMain, #292f36);
  margin-top: 24px;
  font: 400 18px PT Root UI, sans-serif;
}
.div-10 {
  background-color: #fff;
  display: flex;
  margin-top: 28px;
  width: 470px;
  max-width: 100%;
  flex-direction: column;
}
.div-11 {
  color: var(--GreyDarkMain, #292f36);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: 0.32px;
  font: 700 16px PT Root UI, sans-serif;
}
.div-12 {
  align-items: start;
  border-radius: 4px;
  background-color: var(--GreyLight_L, #f4f5f6);
  margin-top: 8px;
  color: #b0b2b6;
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
  white-space: nowrap;
}
.div-14 {
  color: var(--GreyDarkMain, #292f36);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: 0.32px;
  font: 700 16px PT Root UI, sans-serif;
}
.div-15 {
  align-items: start;
  border-radius: 4px;
  background-color: var(--GreyLight_L, #f4f5f6);
  margin-top: 8px;
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
.div-17 {
  display: flex;
  margin-top: 60px;
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
