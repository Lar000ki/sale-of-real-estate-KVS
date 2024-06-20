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
            <div class="div-8">
              Добро пожаловать <br />на портал «Luxury Home»
            </div>
            <div class="div-9">
              Пользуйтесь нашим порталом, зарегистрировавшись или войдя в свою учетную запись
            </div>
            <div class="div-10">
              <!-- Используем компоненты формы входа и регистрации вместо ссылок -->
              <router-link to="/login" class="div-11">Войти</router-link>
              <router-link to="/regphone" class="div-12">Зарегистрироваться</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartMenu'
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
  display: flex;
  gap: 20px;
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
}

.div-7 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 80px 70px;
  text-align: center;
}

.div-8 {
  color: var(--GreyDarkMain, #292f36);
  font-size: 42px;
  font-family: PT Root UI, sans-serif;
  margin-top: 40px;
}

.div-9 {
  color: var(--GreyDarkMain, #292f36);
  font-family: PT Root UI, sans-serif;
  font-weight: 400;
  margin-top: 24px;
  max-width: 470px;
}

.div-10 {
  display: flex;
  margin-top: 60px;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.div-11,
.div-12 {
  font-family: PT Root UI, sans-serif;
  font-feature-settings: "clig" off, "liga" off;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 13px 28px;
  cursor: pointer;
  text-decoration: none;
}

.div-11 {
  background-color: var(--Accent, #008ad7);
  color: #fff;
}

.div-12 {
  color: var(--Accent, #008ad7);
}
</style>
