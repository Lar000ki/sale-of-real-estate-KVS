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
            <div class="div-8">Вы успешно зарегистрировались!</div>
            <div class="div-9">Регистрация прошла успешно</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegFinal'
}
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
</style>