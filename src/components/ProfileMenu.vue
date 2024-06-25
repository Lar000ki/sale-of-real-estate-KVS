<template>
    <div class="div-12">
      <div class="div-13">Личные данные</div>
      <div class="div-14">
        <div class="div-15">
          <div class="column">
            <div class="div-16">
              <div class="div-17">
                <div class="div-18">Фамилия</div>
                <div class="div-19">Контент</div>
              </div>
              <div class="div-20">
                <div class="div-21">Имя</div>
                <div class="div-22">Контентов</div>
              </div>
              <div class="div-23">
                <div class="div-24">Телефон</div>
                <div class="div-25">+7 (900) 000 00 00</div>
              </div>
            </div>
          </div>
          <div class="column-2">
            <div class="div-26">
              <div class="div-27">
                <div class="div-28">Старый пароль</div>
                <div class="div-29">********</div>
              </div>
              <div class="div-30">
                <div class="div-31">Новый пароль</div>
                <div class="div-32">********</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="div-33">
        <div class="div-34">Сохранить</div>
        <div class="div-35">Отменить</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ProfileMenu'
}
</script>

<style scoped>

.img-3 {
  aspect-ratio: 0.95;
  object-fit: auto;
  object-position: center;
  width: 19px;
  margin: auto 0;
}
.div-12 {
  justify-content: left;
  align-items: left;
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top:10vh;
  margin-left:5vw;
}

.div-13 {
  color: var(--GreyDarkMain, #292f36);
  font: 700 42px PT Root UI, sans-serif;
}

.div-14 {
  margin-top: 1vw;
  width: 1620px;
  max-width: 100%;
}

.div-15 {
  gap: 20px;
  display: flex;
}

.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
}

.div-16 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  color: var(--GreyDarkMain, #292f36);
}

.div-17 {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
}

.div-18 {
  text-align: left;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: 0.32px;
  font: 700 16px PT Root UI, sans-serif;
}

.div-19 {
  align-items: start;
  border-radius: 4px;
  background-color: var(--GreyLight_L, #f4f5f6);
  margin-top: 1vw;
  justify-content: center;
  padding: 12px;
  font: 500 18px PT Root UI, sans-serif;
}

.div-20 {
  background-color: #fff;
  display: flex;
  margin-top: 1vw;
  flex-direction: column;
  white-space: nowrap;
}

.div-21 {
  text-align: left;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: 0.32px;
  font: 700 16px PT Root UI, sans-serif;
}

.div-22 {
  align-items: start;
  border-radius: 4px;
  background-color: var(--GreyLight_L, #f4f5f6);
  margin-top: 1vw;
  justify-content: center;
  padding: 12px;
  font: 500 18px PT Root UI, sans-serif;
}

.div-23 {
  background-color: #fff;
  display: flex;
  margin-top: 1vw;
  flex-direction: column;
}

.div-24 {
  text-align: left;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: 0.32px;
  font: 700 16px PT Root UI, sans-serif;
}

.div-25 {
  align-items: start;
  border-radius: 4px;
  background-color: var(--GreyLight_L, #f4f5f6);
  margin-top: 1vw;
  justify-content: center;
  padding: 12px;
  font: 500 18px PT Root UI, sans-serif;
}

.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
}

.div-26 {
  display: flex;
  flex-direction: column;
  color: var(--GreyDarkMain, #292f36);
}

.div-27 {
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.div-28 {
  text-align: left;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: 0.32px;
  font: 700 16px PT Root UI, sans-serif;
}

.div-29 {
  align-items: start;
  border-radius: 4px;
  background-color: var(--GreyLight_L, #f4f5f6);
  margin-top: 1vw;
  white-space: nowrap;
  justify-content: center;
  padding: 12px;
  font: 500 18px PT Root UI, sans-serif;
}

.div-30 {
  background-color: #fff;
  display: flex;
  margin-top: 1vw;
  flex-direction: column;
}

.div-31 {
  text-align: left;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: 0.32px;
  font: 700 16px PT Root UI, sans-serif;
}

.div-32 {
  align-items: left;
  border-radius: 4px;
  background-color: var(--GreyLight_L, #f4f5f6);
  margin-top: 1vw;
  white-space: nowrap;
  justify-content: left;
  padding: 12px;
  font: 500 18px PT Root UI, sans-serif;
}

.div-33 {
  align-self: start;
  display: flex;
  gap: 20px;
  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
  text-align: center;
  letter-spacing: 0.36px;
  line-height: 133%;
  justify-content: space-between;
  padding: 40px 0px 0px;
}

.div-34 {
  font-feature-settings: "clig" off, "liga" off;
  font-family: PT Root UI, sans-serif;
  justify-content: start;
  border-radius: 4px;
  background-color: var(--Accent, #008ad7);
  color: #fff;
  padding: 13px 28px;
}

.div-35 {
  color: var(--Red, #a41010);
  font-feature-settings: "clig" off, "liga" off;
  font-family: PT Root UI, sans-serif;
  margin: auto 0;
}
</style>