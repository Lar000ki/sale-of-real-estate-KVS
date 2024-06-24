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
            <div class="div-8">Регистрация</div>
            <div class="div-9">
              Введите смс-код высланный на Ваш номер телефона
            </div>
            <div class="div-10">
              <div class="div-11">СМС-код</div>
              <input v-model="phone" class="div-12" type="text" placeholder="XXXX">
            </div>
            <!-- Кнопка "Получить смс-код" с переходом на страницу RegPass -->
            <div class="div-13" @click="sendSmsCode">Зарегистрироваться</div>
            <!-- Кнопка "Войти" -->
            <div class="div-14">
              <div class="div-15">Не получили код?</div>
              <div class="div-16" @click="redirectToLogin">Отправить снова</div>
            </div>
          </div>
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
  }
};
</script>


<style scoped>
/* Контейнер для колонок */
.div-6 {
  display: flex; /* Использование flexbox */
  gap: 20px; /* Расстояние между колонками */
  justify-content: center; /* Центрирование по горизонтали */
  align-items: center; /* Центрирование по вертикали */
}

/* Левая колонка */
.column {
  width: 50%; /* Ширина 50% */
}

/* Изображение */
.img-3 {
  width: 100%; /* Занимает всю ширину колонки */
  max-width: 100%; /* Максимальная ширина 100% */
}

/* Правая колонка */
.column-2 {
  width: 50%; /* Ширина 50% */
  display: flex; /* Использование flexbox */
  justify-content: flex-start; /* Выравнивание по левому краю */
  align-items: flex-start; /* Выравнивание по левому краю */
}

.div-7 {
  justify-content: left;
  align-items: left;
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  color: var(--GreyDarkMain, #292f36);
  padding: 170px 80px 70px;
  margin-left: 150px;
}
@media (max-width: 991px) {
  .div-7 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.div-8 {
  color: var(--GreyDarkMain, #292f36);
  margin-top: 197px;
  font: 700 42px PT Root UI, sans-serif;
}
@media (max-width: 991px) {
  .div-8 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-9 {
  color: var(--GreyDarkMain, #292f36);
  margin-top: 24px;
  width: 470px;
  font: 400 18px PT Root UI, sans-serif;
}
@media (max-width: 991px) {
  .div-9 {
    max-width: 100%;
  }
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
  text-align: left;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: 0.32px;
  font: 700 16px PT Root UI, sans-serif;
}
@media (max-width: 991px) {
  .div-11 {
    max-width: 100%;
  }
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
@media (max-width: 991px) {
  .div-12 {
    max-width: 100%;
    padding-right: 20px;
  }
}
.div-13 {
  font-feature-settings: "clig" off, "liga" off;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: var(--Accent, #008ad7);
  margin-top: 24px;
  width: 470px;
  max-width: 100%;
  color: #fff;
  text-align: center;
  letter-spacing: 0.36px;
  padding: 13px 28px;
  font: 700 18px/133% PT Root UI, sans-serif;
}
@media (max-width: 991px) {
  .div-13 {
    padding: 0 20px;
  }
}
.div-14 {
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
@media (max-width: 991px) {
  .div-14 {
    flex-wrap: wrap;
    margin-top: 40px;
  }
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