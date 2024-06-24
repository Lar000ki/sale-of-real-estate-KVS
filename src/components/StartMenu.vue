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
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartMenu'
};
</script>

<style scoped>
/* Основной контейнер страницы */
.div {
  justify-content: center; /* Центрирование по горизонтали */
  background-color: #fff; /* Белый фон */
  display: flex; /* Использование flexbox */
  flex-direction: column; /* Вертикальное расположение элементов */
  align-items: center; /* Центрирование элементов по горизонтали */
}

/* Контейнер для внутреннего содержимого */
.div-5 {
  width: 100%; /* Занимает всю ширину родительского элемента */
}

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

/* Внутренний контейнер для текстового содержимого */
.div-7 {
  display: flex; /* Использование flexbox */
  flex-direction: column; /* Вертикальное расположение элементов */
  justify-content: flex-start; /* Выравнивание по левому краю */
  align-items: flex-start; /* Выравнивание по левому краю */
  padding: 80px 80px 70px; /* Внутренние отступы */
  text-align: left; /* Выравнивание текста по левому краю */
  margin-left: 70px;
}

/* Заголовок */
.div-8 {
  color: var(--GreyDarkMain, #292f36); /* Цвет текста */
  font-size: 42px; /* Размер шрифта */
  font-weight: bolder;
  font-family: PT Root UI, sans-serif; /* Шрифт */
  margin-top: 40px; /* Отступ сверху */
  margin-left: 80px;
}

/* Описание */
.div-9 {
  color: var(--GreyDarkMain, #292f36); /* Цвет текста */
  font-family: PT Root UI, sans-serif; /* Шрифт */
  font-weight: 400; /* Толщина шрифта */
  font-size: 18px;
  margin-top: 24px; /* Отступ сверху */
  margin-left: 80px;
  max-width: 470px; /* Максимальная ширина */
}

/* Контейнер для кнопок */
.div-10 {
  display: flex; /* Использование flexbox */
  margin-top: 40px; /* Отступ сверху */
  gap: 50px; /* Расстояние между кнопками */
  width: 100%; /* Занимает всю ширину родительского элемента */
  max-width: 1000px; /* Максимальная ширина */
}

/* Стили для кнопок */
.div-11,
.div-12 {
  font-family: PT Root UI, sans-serif; /* Шрифт */
  font-feature-settings: "clig" off, "liga" off; /* Отключение лигатур */
  justify-content: center; /* Центрирование текста внутри кнопки */
  align-items: center; /* Центрирование текста внутри кнопки */
  border-radius: 4px; /* Скругленные углы */
  padding: 13px 28px; /* Внутренние отступы */
  cursor: pointer; /* Курсор в виде руки при наведении */
  text-decoration: none; /* Удаление подчеркивания текста */
  font-size: 18px; /* Размер шрифта */
  display: flex; /* Использование flexbox */
  align-items: center; /* Центрирование текста внутри кнопки */
  width: 190px;
  
}

/* Кнопка "Войти" */
.div-11 {
  background-color: var(--Accent, #008ad7); /* Фоновый цвет */
  color: #fff; /* Цвет текста */
  margin-left: 80px;
}

/* Кнопка "Зарегистрироваться" */
.div-12 {
  color: var(--Accent, #008ad7); /* Цвет текста */
  background-color: #fff; /* Фоновый цвет */
}
</style>
