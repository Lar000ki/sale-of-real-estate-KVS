<template>
  <div class="div-12">
    <div class="div-13">Личные данные</div>
    <div class="div-14">
      <div class="div-15">
        <div class="column">
          <div class="div-16">
            <div class="div-17">
              <div class="div-18">Фамилия</div>
              <input v-model="profile.lastname" type="text" class="input-field" />
            </div>
            <div class="div-20">
              <div class="div-21">Имя</div>
              <input v-model="profile.firstname" type="text" class="input-field" />
            </div>
            <div class="div-23">
              <div class="div-24">Телефон</div>
              <input v-model="profile.phone" type="text" class="input-field" />
            </div>
          </div>
        </div>
        <div class="column-2">
          <div class="div-26">
            <div class="div-27">
              <div class="div-28">Старый пароль</div>
              <input v-model="oldPassword" type="password" class="input-field" />
            </div>
            <div class="div-30">
              <div class="div-31">Новый пароль</div>
              <input v-model="newPassword" type="password" class="input-field" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="div-33">
      <button @click="updateProfile" class="div-34">Сохранить</button>
      <button @click="cancel" class="div-35">Отменить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileMenu',
  data() {
    return {
      profile: {
        id: '',
        firstname: '',
        lastname: '',
        phone: ''
      },
      oldPassword: '',
      newPassword: ''
    };
  },
  created() {
    this.loadProfile();
  },
  methods: {
    loadProfile() {
      const user = this.$userState.user;
      if (user) {
        //console.log(user);
        this.profile.id = user.id;
        this.profile.firstname = user.firstname;
        this.profile.lastname = user.lastname;
        this.profile.phone = user.phone;
      }
    },
    async updateProfile() {
      const payload = {
        id: this.profile.id,
        firstname: this.profile.firstname,
        lastname: this.profile.lastname,
        phone: this.profile.phone,
        oldPassword: this.oldPassword,
        newPassword: this.newPassword
      };
    //console.log(this.$userState.user);
      try {
        const response = await fetch('http://localhost:3000/profile', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error('Failed to update profile');
        }

        const updatedUser = await response.json();
        this.$userState.loginUser(updatedUser); // обновление данных в реактивном состоянии
        alert('Профиль успешно обновлен');
      } catch (error) {
        console.error('Error updating profile:', error);
        alert('Ошибка при обновлении профиля');
      }
    },
    cancel() {
      this.loadProfile();
      this.oldPassword = '';
      this.newPassword = '';
    }
  }
};
</script>

<style scoped>
.div-12 {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10vh;
  margin-left: 5vw;
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
  display: flex;
  gap: 20px;
}

.column {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.div-16, .div-20, .div-23 {
  display: flex;
  flex-direction: column;
  margin-top: 1vw;
}

.div-17, .div-27, .div-30 {
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.div-18, .div-21, .div-24, .div-28, .div-31 {
  font: 700 16px PT Root UI, sans-serif;
  letter-spacing: 0.32px;
  text-align: left;
}

.input-field {
  border-radius: 4px;
  background-color: var(--GreyLight_L, #f4f5f6);
  margin-top: 1vw;
  padding: 12px;
  font: 500 18px PT Root UI, sans-serif;
}

.column-2 {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 20px;
}

.div-33 {
  display: flex;
  gap: 20px;
  font-size: 18px;
  font-weight: 700;
  padding-top: 40px;
}

.div-34, .div-35 {
  font-feature-settings: "clig" off, "liga" off;
  font-family: PT Root UI, sans-serif;
  padding: 13px 28px;
  border-radius: 4px;
}

.div-34 {
  background-color: var(--Accent, #008ad7);
  color: #fff;
}

.div-35 {
  color: var(--Red, #a41010);
}
</style>
