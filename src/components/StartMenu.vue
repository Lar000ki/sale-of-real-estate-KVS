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
            <div class="div-8">
              Добро пожаловать <br />на портал «Luxury Home»
            </div>
            <div class="div-9">
              Зарегистрируйтесь или войдите в свою учетную запись, чтобы начать пользоваться функционалом портала
            </div>
            <div class="div-10">
              <!-- Используем компоненты формы входа и регистрации вместо ссылок -->
              <router-link to="/login" class="div-11">Войти</router-link>
              <router-link to="/regphone" class="div-12">Зарегистрироваться</router-link>
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
  display: flex; 
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: flex-start; 
  text-align: left;
  margin-left: 10vw;
}

.div-8 {
  color: var(--GreyDarkMain, #292f36); 
  font-size: 42px; 
  font-weight: bolder;
  font-family: PT Root UI, sans-serif; 
  margin-top: 1vw; 
}

.div-9 {
  color: var(--GreyDarkMain, #292f36); 
  font-family: PT Root UI, sans-serif; 
  font-weight: 400;
  font-size: 18px;
  margin-top: 1vw; 
  max-width: 470px; 
}


.div-10 {
  display: flex; 
  margin-top: 1vw; 
  gap: 50px;
  width: 100%; 
  max-width: 1000px;
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
  font-size: 18px; 
  display: flex; 
  align-items: center; 
  width: 190px;
  
}

.div-11 {
  background-color: var(--Accent, #008ad7); 
  color: #fff; 
}


.div-12 {
  color: var(--Accent, #008ad7); 
  background-color: #fff; 
}
</style>
