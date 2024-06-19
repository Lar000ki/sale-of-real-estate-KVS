<template>
  <div class="div">
    <div class="div-2">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/895bd12dcec3ae3c717b297c0d7d30d53137f5dcbd078d57afdfe1477ec54180?"
        class="img"
      />
      <div class="div-3">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/50ef0a1eb2692e5b7fa45d211ba0c0ac8ed3e9c629ae708c46dd0d24a8da7828?"
          class="img-2"
        />
        <div class="div-4">Войти / Зарегистрироваться</div>
      </div>
    </div>
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
              Зарегистрируйтесь или войдите в свою учетную запись, чтобы начать
              пользоваться функционалом портала
            </div>
            <div class="div-10">
              <div class="div-11">Войти</div>
              <div class="div-12">Зарегистрироваться</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'startMenu'
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
  font-size: 18px;
  font-weight: 700;
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
  margin-top: 251px;
  font: 42px PT Root UI, sans-serif;
}
@media (max-width: 991px) {
  .div-8 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-9 {
  color: var(--GreyDarkMain, #292f36);
  font-family: PT Root UI, sans-serif;
  font-weight: 400;
  margin-top: 24px;
  width: 470px;
}
@media (max-width: 991px) {
  .div-9 {
    max-width: 100%;
  }
}
.div-10 {
  display: flex;
  margin-top: 60px;
  width: 494px;
  max-width: 100%;
  gap: 20px;
  white-space: nowrap;
  text-align: center;
  letter-spacing: 0.36px;
  line-height: 133%;
}
@media (max-width: 991px) {
  .div-10 {
    flex-wrap: wrap;
    margin-top: 40px;
    white-space: initial;
  }
}
.div-11 {
  font-feature-settings: "clig" off, "liga" off;
  font-family: PT Root UI, sans-serif;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: var(--Accent, #008ad7);
  color: #fff;
  flex: 1;
  padding: 13px 28px;
}
@media (max-width: 991px) {
  .div-11 {
    white-space: initial;
    padding: 0 20px;
  }
}
.div-12 {
  color: var(--Accent, #008ad7);
  font-feature-settings: "clig" off, "liga" off;
  font-family: PT Root UI, sans-serif;
  margin: auto 0;
}
</style>
