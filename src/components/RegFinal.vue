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
  padding: 130px 80px 70px;
  margin-left: 150px;
}
@media (max-width: 991px) {
  .div-7 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.div-8 {
  margin: 340px 71px 0;
  font: 700 42px PT Root UI, sans-serif;
}
@media (max-width: 991px) {
  .div-8 {
    max-width: 100%;
    margin: 40px 10px 0 0;
  }
}
.div-9 {
  font-variant-numeric: lining-nums proportional-nums;
  margin: 24px 71px 0;
  font: 500 18px/150% PT Root UI, sans-serif;
}
@media (max-width: 991px) {
  .div-9 {
    max-width: 100%;
    margin-right: 10px;
  }
}
</style>