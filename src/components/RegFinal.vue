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
.div-6 {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100vh; 
}


.column {
  width: 50%;
}


.img-3 {
  width: 100%;
  height: 100%; 
  object-fit: cover; 
}


.column-2 {
  width: 50%; 
  display: flex; 
  justify-content: flex-start; 
  align-items: flex-start; 
}

.div-7 {
  justify-content: left;
  align-items: left;
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  color: var(--GreyDarkMain, #292f36);
  margin-left: 10vw;
  margin-top:-5vw;
}

.div-8 {
  color: var(--GreyDarkMain, #292f36);
  margin-top: 1vw;
  font: 700 42px PT Root UI, sans-serif;
}

.div-9 {
  color: var(--GreyDarkMain, #292f36);
  margin-top: 1vw;
  width: 470px;
  font: 400 18px PT Root UI, sans-serif;
}

</style>