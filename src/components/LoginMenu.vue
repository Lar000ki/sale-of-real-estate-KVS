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
              <div class="div-12">+7 (900) 000 00 00</div>
            </div>
            <div class="div-13">
              <div class="div-14">Пароль</div>
              <div class="div-15">******</div>
            </div>
            <div class="div-16">Войти</div>
            <div class="div-17">
              <div class="div-18">Нет аккаунта?</div>
              <div class="div-19">Зарегистрироваться</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginMenu'
}
</script>

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
@media (max-width: 991px) {
  .div-6 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
.img-3 {
  aspect-ratio: 0.95;
  object-fit: auto;
  object-position: center;
  width: 100%;
  align-self: stretch;
  flex-grow: 1;
}
@media (max-width: 991px) {
  .img-3 {
    max-width: 100%;
  }
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
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
@media (max-width: 991px) {
  .div-7 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.div-8 {
  color: var(--GreyDarkMain, #292f36);
  margin-top: 154px;
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
  text-align: center;
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
  background-color: #fff;
  display: flex;
  margin-top: 24px;
  width: 470px;
  max-width: 100%;
  flex-direction: column;
  white-space: nowrap;
}
@media (max-width: 991px) {
  .div-13 {
    white-space: initial;
  }
}
.div-14 {
  color: var(--GreyDarkMain, #292f36);
  text-align: center;
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
  color: #b0b2b6;
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
@media (max-width: 991px) {
  .div-17 {
    flex-wrap: wrap;
    margin-top: 40px;
  }
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