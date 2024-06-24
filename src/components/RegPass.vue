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
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegPass',
  data() {
    return {
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    continueRegistration() {
      // Проверка паролей и переход к следующему шагу
      if (this.password !== this.confirmPassword) {
        alert('Пароли не совпадают');
        return;
      }
      // Здесь может быть логика сохранения пароля и перехода к следующему шагу (например, RegFinal)
      this.$router.push({ name: 'RegFinal' });
    }
  }
};
</script>

<style scoped>
/* Ваши стили остаются без изменений */
</style>

<style scoped>
.div {
  justify-content: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.div-2 {
  justify-content: space-between;
  background-color: var(--GreyDarkMain, #292f36);
  display: flex;
  width: 100%;
  gap: 20px;
  font-size: 18px;
  color: var(--White, #fff);
  font-weight: 700;
  line-height: 133%;
  padding: 0 24px;
}
@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
  }
}
.img {
  aspect-ratio: 3.7;
  object-fit: auto;
  object-position: center;
  width: 200px;
  max-width: 100%;
  margin: auto 0;
}
.div-3 {
  display: flex;
  gap: 16px;
  padding: 23px 0;
}
.img-2 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
}
.div-4 {
  font-family: PT Root UI, sans-serif;
}
.div-5 {
  width: 100%;
}
@media (max-width: 991px) {
  .div-5 {
    max-width: 100%;
  }
}
.div-6 {
  gap: 20px;
  display: flex;
}
/* Стили для .column */
.column {
  width: 50%; /* Ширина 50% */
}

/* Стили для .img-3 */
.img-3 {
  width: 100%; /* Занимает всю ширину колонки */
  max-width: 100%; /* Максимальная ширина 100% */
}
/* Стили для .column-2 */
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
  margin-top: 196px;
  font: 700 42px PT Root UI, sans-serif;
}
@media (max-width: 991px) {
  .div-8 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-9 {
  margin-top: 24px;
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
  white-space: nowrap;
}
@media (max-width: 991px) {
  .div-10 {
    white-space: initial;
  }
}
.div-11 {
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
  justify-content: center;
  padding: 12px;
  font: 500 18px PT Root UI, sans-serif;
}
@media (max-width: 991px) {
  .div-12 {
    max-width: 100%;
    padding-right: 20px;
    white-space: initial;
  }
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
@media (max-width: 991px) {
  .div-14 {
    max-width: 100%;
  }
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
@media (max-width: 991px) {
  .div-15 {
    max-width: 100%;
    padding-right: 20px;
    white-space: initial;
  }
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
@media (max-width: 991px) {
  .div-16 {
    white-space: initial;
    padding: 0 20px;
  }
}
</style>