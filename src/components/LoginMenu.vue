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
              <router-link to="/regphone" class="div-19">Зарегистрироваться</router-link>
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
    },
    regphone() {
      // Переходим на страницу регистрации
      this.$router.push({ name: 'RegPhone' });
    }
  }
};
</script>


<style scoped>
/* Стили для контейнера .div */
.div {
  justify-content: center; /* Центрируем содержимое по горизонтали */
  background-color: #fff; /* Белый фон */
  display: flex; /* Отображаем элемент как flex-контейнер */
  flex-direction: column; /* Располагаем элементы в колонку */
}

/* Стили для .div-5 */
.div-5 {
  width: 100%; /* Ширина 100% */
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

/* Стили для .div-7 */
/* Внутренний контейнер для текстового содержимого */
.div-7 {
  display: flex; /* Использование flexbox */
  flex-direction: column; /* Вертикальное расположение элементов */
  justify-content: flex-start; /* Выравнивание по левому краю */
  align-items: flex-start; /* Выравнивание по левому краю */
  padding: 5vh 10vw; /* Внутренние отступы в процентах от высоты и ширины окна */
  text-align: left; /* Выравнивание текста по левому краю */
}

/* Стили для .div-8 */
.div-8 {
  color: var(--GreyDarkMain, #292f36); /* Цвет текста с использованием CSS переменной или #292f36 */
  font-size: 2.5vw; /* Размер шрифта в процентах от ширины окна */
  font-weight: bolder;
  font-family: PT Root UI, sans-serif; /* Шрифт */
  margin-top: 30vh; /* Отступ сверху в процентах от высоты окна */
}

/* Стили для .div-9 */
.div-9 {
  color: var(--GreyDarkMain, #292f36); /* Цвет текста с использованием CSS переменной или #292f36 */
  margin-top: 24px; /* Отступ сверху 24 пикселя */
  font: 400 18px PT Root UI, sans-serif; /* Нормальный шрифт, размер 18 пикселей, семейство шрифтов PT Root UI */
  text-align: left; /* Выравнивание текста по левому краю */
}


/* Стили для .div-10 */
.div-10 {
  background-color: #fff; /* Белый фон */
  display: flex; /* Отображаем элемент как flex-контейнер */
  margin-top: 28px; /* Отступ сверху 28 пикселей */
  width: 470px; /* Ширина 470 пикселей */
  max-width: 100%; /* Максимальная ширина 100% */
  flex-direction: column; /* Располагаем элементы в колонку */
}

/* Стили для .div-11 */
.div-11 {
  color: var(--GreyDarkMain, #292f36); /* Цвет текста с использованием CSS переменной или #292f36 */
  text-align: left; /* Выравнивание текста по центру */
  font-feature-settings: "clig" off, "liga" off; /* Отключаем опции OpenType */
  letter-spacing: 0.32px; /* Межбуквенный интервал 0.32 пикселя */
  font: 700 16px PT Root UI, sans-serif; /* Жирный шрифт, размер 16 пикселей, семейство шрифтов PT Root UI */
}

/* Стили для .div-12 */
.div-12 {
  align-items: start; /* Выравнивание содержимого по началу */
  border-radius: 4px; /* Радиус скругления углов 4 пикселя */
  background-color: var(--GreyLight_L, #f4f5f6); /* Фон с использованием CSS переменной или #f4f5f6 */
  margin-top: 8px; /* Отступ сверху 8 пикселей */
  color: #b0b2b6; /* Цвет текста #b0b2b6 */
  justify-content: center; /* Центрируем содержимое по горизонтали */
  padding: 12px; /* Внутренний отступ 12 пикселей */
  font: 500 18px PT Root UI, sans-serif; /* Нормальный шрифт, размер 18 пикселей, семейство шрифтов PT Root UI */
}

/* Стили для .div-13 */
.div-13 {
  background-color: #fff; /* Белый фон */
  display: flex; /* Отображаем элемент как flex-контейнер */
  margin-top: 24px; /* Отступ сверху 24 пикселя */
  width: 470px; /* Ширина 470 пикселей */
  max-width: 100%; /* Максимальная ширина 100% */
  flex-direction: column; /* Располагаем элементы в колонку */
  white-space: nowrap; /* Не переносить текст */
}

/* Стили для .div-14 */
.div-14 {
  color: var(--GreyDarkMain, #292f36); /* Цвет текста с использованием CSS переменной или #292f36 */
  text-align: left; /* Выравнивание текста по центру */
  font-feature-settings: "clig" off, "liga" off; /* Отключаем опции OpenType */
  letter-spacing: 0.32px; /* Межбуквенный интервал 0.32 пикселя */
  font: 700 16px PT Root UI, sans-serif; /* Жирный шрифт, размер 16 пикселей, семейство шрифтов PT Root UI */
}

/* Стили для .div-15 */
.div-15 {
  align-items: start; /* Выравнивание содержимого по началу */
  border-radius: 4px; /* Радиус скругления углов 4 пикселя */
  background-color: var(--GreyLight_L, #f4f5f6); /* Фон с использованием CSS переменной или #f4f5f6 */
  margin-top: 8px; /* Отступ сверху 8 пикселей */
  color: #b0b2b6; /* Цвет текста #b0b2b6 */
  justify-content: center; /* Центрируем содержимое по горизонтали */
  padding: 12px; /* Внутренний отступ 12 пикселей */
  font: 500 18px PT Root UI, sans-serif; /* Нормальный шрифт, размер 18 пикселей, семейство шрифтов PT Root UI */
}

/* Стили для .div-16 */
.div-16 {
  font-feature-settings: "clig" off, "liga" off; /* Отключаем опции OpenType */
  justify-content: center; /* Центрируем содержимое по горизонтали */
  align-items: center; /* Центрируем содержимое по вертикали */
  border-radius: 4px; /* Радиус скругления углов 4 пикселя */
  background-color: var(--Accent, #008ad7); /* Фон с использованием CSS переменной или #008ad7 */
  margin-top: 24px; /* Отступ сверху 24 пикселя */
  width: 470px; /* Ширина 470 пикселей */
  max-width: 100%; /* Максимальная ширина 100% */
  color: #fff; /* Белый цвет текста */
  white-space: nowrap; /* Не переносить текст */
  text-align: center; /* Выравнивание текста по центру */
  letter-spacing: 0.36px; /* Межбуквенный интервал 0.36 пикселя */
  padding: 13px 28px; /* Внутренний отступ: сверху 13 пикселей, справа 28 пикселей */
  font: 700 18px/133% PT Root UI, sans-serif; /* Жирный шрифт, размер 18 пикселей, семейство шрифтов PT Root UI */
}

/* Стили для .div-17 */
.div-17 {
  display: flex; /* Отображаем элемент как flex-контейнер */
  margin-top: 60px; /* Отступ сверху 60 пикселей */
  width: 470px; /* Ширина 470 пикселей */
  max-width: 100%; /* Максимальная ширина 100% */
  gap: 20px; /* Расстояние между элементами 20 пикселей */
  font-size: 18px; /* Размер шрифта 18 пикселей */
  text-align: center; /* Выравнивание текста по центру */
  letter-spacing: 0.36px; /* Межбуквенный интервал 0.36 пикселя */
  line-height: 133%; /* Межстрочный интервал 133% */
  justify-content: space-between; /* Равномерное распределение элементов по контейнеру */
}

/* Стили для .div-18 */
.div-18 {
  color: #000; /* Черный цвет текста */
  font-feature-settings: "clig" off, "liga" off; /* Отключаем опции OpenType */
  font-family: PT Root UI, sans-serif; /* Семейство шрифтов PT Root UI */
  font-weight: 400; /* Нормальная толщина шрифта */
}

/* Стили для .div-19 */
.div-19 {
  color: var(--Accent, #008ad7); /* Цвет текста с использованием CSS переменной или #008ad7 */
  font-feature-settings: "clig" off, "liga" off; /* Отключаем опции OpenType */
  font-family: PT Root UI, sans-serif; /* Семейство шрифтов PT Root UI */
  font-weight: 700; /* Жирная толщина шрифта */
}
</style>
