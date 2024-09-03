<template>
  <div class="profile-container">
    <div class="profile-header">Личные данные</div>
    <div class="profile-form">
      <div class="form-columns">
        <div class="form-column">
          <div class="form-group">
            <div class="form-label">Фамилия</div>
            <input v-model="profile.lastname" type="text" class="input-field" />
            <div v-if="errors.lastname" class="error-message">{{ errors.lastname }}</div>
          </div>
          <div class="form-group">
            <div class="form-label">Имя</div>
            <input v-model="profile.firstname" type="text" class="input-field" />
            <div v-if="errors.firstname" class="error-message">{{ errors.firstname }}</div>
          </div>
          <div class="form-group">
            <div class="form-label">Телефон</div>
            <input
              v-model="profile.phone"
              type="text"
              class="input-field"
              @input="formatPhone"
            />
            <div v-if="errors.phone" class="error-message">{{ errors.phone }}</div>
          </div>
        </div>
        <div class="form-column">
          <div class="form-group">
            <div class="form-label">Старый пароль</div>
            <input v-model="oldPassword" type="password" class="input-field" />
            <div v-if="errors.oldPassword" class="error-message">{{ errors.oldPassword }}</div>
          </div>
          <div class="form-group">
            <div class="form-label">Новый пароль</div>
            <input v-model="newPassword" type="password" class="input-field" />
            <div v-if="errors.newPassword" class="error-message">{{ errors.newPassword }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="button-group">
      <button @click="updateProfile" class="save-button">Сохранить</button>
      <button @click="cancel" class="cancel-button">Отменить</button>
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
      newPassword: '',
      errors: {
        firstname: '',
        lastname: '',
        phone: '',
        oldPassword: '',
        newPassword: ''
      }
    };
  },
  created() {
    this.loadProfile();
  },
  methods: {
    loadProfile() {
      const user = this.$userState.user;
      if (user) {
        this.profile.id = user.id;
        this.profile.firstname = user.firstname;
        this.profile.lastname = user.lastname;
        this.profile.phone = user.phone;
      }
    },
    formatPhone(event) {
      let input = event.target.value.replace(/\D/g, ''); 
      if (input.length > 11) input = input.slice(0, 11); 

      let formatted = '+7 ';
      if (input.length > 1) formatted += `(${input.slice(1, 4)}`;
      if (input.length >= 4) formatted += `) ${input.slice(4, 7)}`;
      if (input.length >= 7) formatted += `-${input.slice(7, 9)}`;
      if (input.length >= 9) formatted += `-${input.slice(9, 11)}`;

      this.profile.phone = formatted;
    },
    validateFirstname() {
      if (!this.profile.firstname) {
        this.errors.firstname = 'Имя не может быть пустым.';
        return false;
      }
      this.errors.firstname = '';
      return true;
    },
    validateLastname() {
      if (!this.profile.lastname) {
        this.errors.lastname = 'Фамилия не может быть пустой.';
        return false;
      }
      this.errors.lastname = '';
      return true;
    },
    validatePhone() {
      const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
      if (!phonePattern.test(this.profile.phone)) {
        this.errors.phone = 'Введите корректный номер телефона.';
        return false;
      }
      this.errors.phone = '';
      return true;
    },
    validatePasswords() {
      if (this.oldPassword && this.newPassword && this.oldPassword === this.newPassword) {
        this.errors.newPassword = 'Новый пароль не должен совпадать со старым.';
        return false;
      }
      if (this.newPassword && this.newPassword.length < 6) {
        this.errors.newPassword = 'Пароль должен содержать минимум 6 символов.';
        return false;
      }
      this.errors.oldPassword = '';
      this.errors.newPassword = '';
      return true;
    },
    async updateProfile() {
      // Валидация перед отправкой формы
      const isValid =
        this.validateFirstname() &&
        this.validateLastname() &&
        this.validatePhone() &&
        this.validatePasswords();

      if (!isValid) {
        return;
      }

      // Удаляем маску перед отправкой
      const phone = this.profile.phone.replace(/\D/g, '');
      const payload = {
        id: this.profile.id,
        firstname: this.profile.firstname,
        lastname: this.profile.lastname,
        phone: phone,
        oldPassword: this.oldPassword,
        newPassword: this.newPassword
      };

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
        this.$userState.loginUser(updatedUser);
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
.profile-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10vh;
  margin-left: 5vw;
}

.profile-header {
  color: var(--GreyDarkMain, #292f36);
  font: 700 42px PT Root UI, sans-serif;
}

.profile-form {
  margin-top: 1vw;
  width: 100%;
}

.form-columns {
  display: flex;
  gap: 20px;
}

.form-column {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.form-group {
  font: 700 16px PT Root UI, sans-serif;
  letter-spacing: 0.32px;
  display: flex;
  flex-direction: column;
}

.form-label {
  font: 700 16px PT Root UI, sans-serif;
  letter-spacing: 0.32px;
  display: flex;
  text-align: left;
  margin-top: 1vw;
}

.input-field {
  border-radius: 4px;
  background-color: var(--GreyLight_L, #f4f5f6);
  margin-top: 1vw;
  padding: 12px;
  font: 500 18px PT Root UI, sans-serif;
  border: none;
}

.button-group {
  display: flex;
  gap: 20px;
  font-size: 16px;
  font-weight: 700;
  padding-top: 40px;
}

.save-button, .cancel-button {
  font-feature-settings: "clig" off, "liga" off;
  font-family: PT Root UI, sans-serif;
  padding: 13px 28px;
  border-radius: 4px;
  border: none;
}

.save-button {
  background-color: var(--Accent, #008ad7);
  color: #fff;
  font: 700 18px PT Root UI, sans-serif;
}

.cancel-button {
  background: none;
  color: var(--Red, #a41010);
  border: none;
  padding: 0;
  cursor: pointer;
  font: 700 18px PT Root UI, sans-serif;
}
</style>
