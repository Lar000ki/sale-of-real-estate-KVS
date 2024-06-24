<template>
  <div class="div">
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
  </div>
</template>

<script>
export default {
  name: 'ProfileMenu'
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
.div-3 {
  display: flex;
  gap: 20px;
  color: #fff;
  justify-content: space-between;
  margin: auto 0;
}
@media (max-width: 991px) {
  .div-3 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.img {
  aspect-ratio: 3.7;
  object-fit: auto;
  object-position: center;
  width: 200px;
  max-width: 100%;
}
.div-4 {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin: auto 0;
}
.div-5 {
  font-family: PT Root UI, sans-serif;
}
.div-6 {
  font-family: PT Root UI, sans-serif;
}
.div-7 {
  justify-content: end;
  display: flex;
  gap: 20px;
  color: var(--White, #fff);
}
.div-8 {
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
.div-9 {
  font-family: PT Root UI, sans-serif;
}
.div-10 {
  display: flex;
  gap: 16px;
  white-space: nowrap;
  justify-content: space-between;
  padding: 23px 3px;
}
@media (max-width: 991px) {
  .div-10 {
    white-space: initial;
  }
}
.img-3 {
  aspect-ratio: 0.95;
  object-fit: auto;
  object-position: center;
  width: 19px;
  margin: auto 0;
}
.div-11 {
  font-family: PT Root UI, sans-serif;
}
.div-12 {
  justify-content: left;
  align-items: left;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 130px 100px 70px;
}
@media (max-width: 991px) {
  .div-12 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.div-13 {
  color: var(--GreyDarkMain, #292f36);
  font: 700 42px PT Root UI, sans-serif;
}
@media (max-width: 991px) {
  .div-13 {
    max-width: 100%;
  }
}
.div-14 {
  margin-top: 40px;
  width: 1620px;
  max-width: 100%;
}
@media (max-width: 991px) {
  .div-14 {
    padding-right: 20px;
  }
}
.div-15 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-15 {
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
.div-16 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  color: var(--GreyDarkMain, #292f36);
}
@media (max-width: 991px) {
  .div-16 {
    max-width: 100%;
    margin-top: 20px;
  }
}
.div-17 {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
}
@media (max-width: 991px) {
  .div-17 {
    max-width: 100%;
    white-space: initial;
  }
}
.div-18 {
  text-align: left;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: 0.32px;
  font: 700 16px PT Root UI, sans-serif;
}
@media (max-width: 991px) {
  .div-18 {
    max-width: 100%;
  }
}
.div-19 {
  align-items: start;
  border-radius: 4px;
  background-color: var(--GreyLight_L, #f4f5f6);
  margin-top: 8px;
  justify-content: center;
  padding: 12px;
  font: 500 18px PT Root UI, sans-serif;
}
@media (max-width: 991px) {
  .div-19 {
    max-width: 100%;
    padding-right: 20px;
    white-space: initial;
  }
}
.div-20 {
  background-color: #fff;
  display: flex;
  margin-top: 24px;
  flex-direction: column;
  white-space: nowrap;
}
@media (max-width: 991px) {
  .div-20 {
    max-width: 100%;
    white-space: initial;
  }
}
.div-21 {
  text-align: left;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: 0.32px;
  font: 700 16px PT Root UI, sans-serif;
}
@media (max-width: 991px) {
  .div-21 {
    max-width: 100%;
  }
}
.div-22 {
  align-items: start;
  border-radius: 4px;
  background-color: var(--GreyLight_L, #f4f5f6);
  margin-top: 8px;
  justify-content: center;
  padding: 12px;
  font: 500 18px PT Root UI, sans-serif;
}
@media (max-width: 991px) {
  .div-22 {
    max-width: 100%;
    padding-right: 20px;
    white-space: initial;
  }
}
.div-23 {
  background-color: #fff;
  display: flex;
  margin-top: 24px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-23 {
    max-width: 100%;
  }
}
.div-24 {
  text-align: left;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: 0.32px;
  font: 700 16px PT Root UI, sans-serif;
}
@media (max-width: 991px) {
  .div-24 {
    max-width: 100%;
  }
}
.div-25 {
  align-items: start;
  border-radius: 4px;
  background-color: var(--GreyLight_L, #f4f5f6);
  margin-top: 8px;
  justify-content: center;
  padding: 12px;
  font: 500 18px PT Root UI, sans-serif;
}
@media (max-width: 991px) {
  .div-25 {
    max-width: 100%;
    padding-right: 20px;
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
.div-26 {
  display: flex;
  flex-direction: column;
  color: var(--GreyDarkMain, #292f36);
}
@media (max-width: 991px) {
  .div-26 {
    max-width: 100%;
    margin-top: 20px;
  }
}
.div-27 {
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-27 {
    max-width: 100%;
  }
}
.div-28 {
  text-align: left;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: 0.32px;
  font: 700 16px PT Root UI, sans-serif;
}
@media (max-width: 991px) {
  .div-28 {
    max-width: 100%;
  }
}
.div-29 {
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
  .div-29 {
    max-width: 100%;
    padding-right: 20px;
    white-space: initial;
  }
}
.div-30 {
  background-color: #fff;
  display: flex;
  margin-top: 24px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-30 {
    max-width: 100%;
  }
}
.div-31 {
  text-align: left;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: 0.32px;
  font: 700 16px PT Root UI, sans-serif;
}
@media (max-width: 991px) {
  .div-31 {
    max-width: 100%;
  }
}
.div-32 {
  align-items: left;
  border-radius: 4px;
  background-color: var(--GreyLight_L, #f4f5f6);
  margin-top: 8px;
  white-space: nowrap;
  justify-content: left;
  padding: 12px;
  font: 500 18px PT Root UI, sans-serif;
}
@media (max-width: 991px) {
  .div-32 {
    max-width: 100%;
    padding-right: 20px;
    white-space: initial;
  }
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
  margin-left: 24px 0 332px 70px;
  padding: 40px 000px 0px;
}
@media (max-width: 991px) {
  .div-33 {
    white-space: initial;
    margin: 0 0 40px 10px;
  }
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
@media (max-width: 991px) {
  .div-34 {
    white-space: initial;
    padding: 0 20px;
  }
}
.div-35 {
  color: var(--Red, #a41010);
  font-feature-settings: "clig" off, "liga" off;
  font-family: PT Root UI, sans-serif;
  margin: auto 0;
}
</style>