<template>
  <div class="object-edit-container">
    <h1 class="page-title">Добавление объекта</h1>
    <section class="edit-form">
      <div class="form-layout">
        <div class="form-column">
          <div class="form-group">
            <div class="form-row">
              <div class="form-field">
                <label for="article" class="field-label">Артикул</label>
                <input v-model="object.art" type="text" class="field-value" />
                <div v-if="errors.art" class="error-message">{{ errors.art }}</div>
              </div>
              <div class="form-field">
                <label for="title" class="field-label">Заголовок</label>
                <input v-model="object.title" type="text" class="field-value" />
                <div v-if="errors.title" class="error-message">{{ errors.title }}</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label for="category" class="field-label">Категория</label>
                <input v-model="object.category" type="text" class="field-value-with-icon" />
                <div v-if="errors.category" class="error-message">{{ errors.category }}</div>
              </div>
              <div class="form-field">
                <label for="property-type" class="field-label">Тип недвижимости</label>
                <input v-model="object.type" type="text" class="field-value-with-icon" />
                <div v-if="errors.type" class="error-message">{{ errors.type }}</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label for="build-year" class="field-label">Год постройки</label>
                <input v-model="object.year" type="number" class="field-value" />
                <div v-if="errors.year" class="error-message">{{ errors.year }}</div>
              </div>
              <div class="form-field">
                <label for="rooms" class="field-label">Количество комнат</label>
                <input v-model="object.rooms" type="number" class="field-value" />
                <div v-if="errors.rooms" class="error-message">{{ errors.rooms }}</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label for="floors" class="field-label">Этажность</label>
                <input v-model="object.floors" type="number" class="field-value" />
                <div v-if="errors.floors" class="error-message">{{ errors.floors }}</div>
              </div>
              <div class="form-field">
                <label for="floor" class="field-label">Этаж</label>
                <input v-model="object.floor" type="number" class="field-value" />
                <div v-if="errors.floor" class="error-message">{{ errors.floor }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-column">
          <div class="form-group">
            <div class="form-field">
              <label for="description" class="field-label">Описание</label>
              <textarea v-model="object.description" class="field-value description-value"></textarea>
              <div v-if="errors.description" class="error-message">{{ errors.description }}</div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label for="price" class="field-label">Цена</label>
                <input v-model="object.price" type="number" class="field-value" />
                <div v-if="errors.price" class="error-message">{{ errors.price }}</div>
              </div>
              <div class="form-field">
                <label for="client" class="field-label">Клиент</label>
                <input v-model="object.clientid" type="text" class="field-value" />
                <div v-if="errors.clientid" class="error-message">{{ errors.clientid }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="photo-upload-container">
        <div class="photo-upload">
          <label for="file-upload" class="photo-upload-label">
            <img src="@/assets/upload.png" alt="Upload" class="upload-icon" />
            <span>Загрузите фото</span>
          </label>
          <input id="file-upload" type="file" @change="handleFileUpload" accept="image/png, image/jpeg, image/jpg" multiple style="display: none" />
        </div>
        <div class="photos">
          <div v-for="(photo, index) in photos" :key="index" class="photo">
            <button @click="deletePhoto(index)" class="delete-button">×</button>
            <img :src="photo.preview" :alt="photo.name" class="photo-img" />
          </div>
        </div>
      </div>
      <div class="form-actions-container">
        <div class="form-actions">
          <button @click="saveObject" class="save-button">Сохранить</button>
          <button @click="cancelEdit" class="cancel-button">Отменить</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ObjectsEdit',
  data() {
    return {
      object: {
        art: '',
        type: '',
        title: '',
        category: '',
        year: '',
        floors: '',
        floor: '',
        rooms: '',
        price: '',
        clientid: '',
        description: ''
      },
      photos: [], // Для хранения загруженных фотографий
      errors: {} // Хранит ошибки валидации
    };
  },
  created() {
    // Загрузка объекта и фотографий при создании компонента
    this.loadObject();
    this.loadPhotos();
  },
  methods: {
  async saveObject() {
    if (this.validateForm()) {
      const objectId = this.$route.params.id;
      try {
        const response = await fetch(`http://localhost:3000/objects/${objectId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.object)
        });
        if (!response.ok) {
          throw new Error('Ошибка сохранения объекта');
        }
        alert('Объект сохранен');
        this.$router.push('/objects');
      } catch (error) {
        console.error('Ошибка сохранения объекта:', error);
        alert('Ошибка сохранения объекта');
      }
    }
  },
  async loadPhotos() {
    // Метод для загрузки фотографий объекта с сервера
    const objectArt = this.object.art;
    try {
      const response = await fetch(`http://localhost:3000/objects/${objectArt}/photos`);
      if (!response.ok) {
        throw new Error('Ошибка загрузки фотографий');
      }
      const data = await response.json();
      this.photos = data.photos.map(photo => ({
        ...photo,
        path: `http://localhost:3000/${photo.path}`
      }));
    } catch (error) {
      console.error('Ошибка загрузки фотографий:', error);
    }
  },
  async savePhotos(objectId) {
    const formData = new FormData();
    for (let i = 0; i < this.photos.length; i++) {
      formData.append('photos', this.photos[i].file);
    }

    try {
      const response = await fetch(`http://localhost:3000/objects/${objectId}/photos`, {
        method: 'POST',
        body: formData
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Ошибка ответа сервера при сохранении фотографий:', errorText);
        throw new Error('Ошибка загрузки фотографий');
      }
    } catch (error) {
      console.error('Ошибка загрузки фотографий:', error);
      alert('Ошибка загрузки фотографий');
    }
  },
  handleFileUpload(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.photos.push({ preview: e.target.result, file: files[i], name: files[i].name });
      };
      reader.readAsDataURL(files[i]);
    }
  },
  cancelEdit() {
    this.$router.push('/objects');
  },
  deletePhoto(index) {
    this.photos.splice(index, 1);
  },
  validateForm() {
    this.errors = {};
    let isValid = true;

    const trimToString = (value) => (value ? String(value).trim() : '');

    const art = trimToString(this.object.art);
    const title = trimToString(this.object.title);
    const category = trimToString(this.object.category);
    const type = trimToString(this.object.type);
    const year = trimToString(this.object.year);
    const rooms = trimToString(this.object.rooms);
    const floors = trimToString(this.object.floors);
    const floor = trimToString(this.object.floor);
    const price = trimToString(this.object.price);
    const clientid = trimToString(this.object.clientid);
    const description = trimToString(this.object.description);

    if (!art) {
      this.errors.art = 'Введите артикул.';
      isValid = false;
    }
    if (!title) {
      this.errors.title = 'Введите заголовок.';
      isValid = false;
    }
    if (!category) {
      this.errors.category = 'Введите категорию.';
      isValid = false;
    }
    if (!type) {
      this.errors.type = 'Введите тип недвижимости.';
      isValid = false;
    } else if (/^\d+$/.test(type)) {
      this.errors.type = 'Тип недвижимости не может быть числом.';
      isValid = false;
    }
    if (!year) {
      this.errors.year = 'Введите год постройки.';
      isValid = false;
    } else if (!/^\d{4}$/.test(year)) {
      this.errors.year = 'Введите корректный год постройки (4 цифры).';
      isValid = false;
    }
    if (!rooms) {
      this.errors.rooms = 'Введите количество комнат.';
      isValid = false;
    } else if (!/^\d+$/.test(rooms)) {
      this.errors.rooms = 'Количество комнат должно быть числом.';
      isValid = false;
    }
    if (!floors) {
      this.errors.floors = 'Введите этажность.';
      isValid = false;
    } else if (!/^\d+$/.test(floors)) {
      this.errors.floors = 'Этажность должна быть числом.';
      isValid = false;
    }
    if (!floor) {
      this.errors.floor = 'Введите этаж.';
      isValid = false;
    } else if (!/^\d+$/.test(floor)) {
      this.errors.floor = 'Этаж должен быть числом.';
      isValid = false;
    }
    if (!price) {
      this.errors.price = 'Введите цену.';
      isValid = false;
    } else if (!/^\d+(\.\d{1,2})?$/.test(price)) {
      this.errors.price = 'Цена должна быть числом и может содержать до двух знаков после запятой.';
      isValid = false;
    }
    if (!clientid) {
      this.errors.clientid = 'Введите ID клиента.';
      isValid = false;
    }
    if (!description) {
      this.errors.description = 'Введите описание.';
      isValid = false;
    }

    return isValid;
  }
}
};
</script>
<style scoped>
.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

.field-value {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.field-value-with-icon {
  width: calc(100% - 40px);
  padding: 8px;
  box-sizing: border-box;
}

.save-button, .cancel-button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.save-button {
  background-color: #4CAF50;
  color: white;
}

.cancel-button {
  background-color: #f44336;
  color: white;
}

.photo-upload-label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.upload-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.photo-img {
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
}

.delete-button {
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(255, 0, 0, 0.7);
  color: white;
  border: none;
  cursor: pointer;
  padding: 5px;
}
.object-edit-container {
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  align-self: stretch;
}

.photos {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px; /* Отступ сверху для фотографий */
}
.photo {
  width: 150px;
  height: 150px;
  position: relative;
}
.photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.delete-button {
  position: absolute;
  top: 5px;
  right: 5px;
  background: red;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-title {
  color: var(--GreyDarkMain, #292f36);
  font: 700 42px PT Root UI, sans-serif;
  width: 100%;
  margin-left: 3vw; /* увеличенный отступ слева */
}

.edit-form {
  border: 1px solid rgba(220, 223, 225, 1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-top: 2vw;
  margin-left: 3vw; /* увеличенный отступ слева */
  margin-right: 3vw; /* увеличенный отступ справа */
  width: calc(100% - 6vw); /* уменьшаем ширину на обе стороны на 1.5vw */
}

.form-layout {
  display: flex;
  gap: 20px;
}

.form-column {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.form-group {
  display: flex;
  flex-direction: column;
  color: var(--GreyDarkMain, #292f36);
  flex-grow: 1;
}

.form-row {
  display: flex;
  gap: 20px;
  border-bottom: none; 
}

.form-field {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 1.5vw; /* увеличенный отступ сверху */
  margin-right: 3vw;
  margin-left: 3vw;
}

.field-label {
  text-align: left;
  font: 700 16px PT Root UI, sans-serif;
  letter-spacing: 0.32px;
}

.field-value,
.field-value-with-icon,
.description-value,
.field-value input,
.field-value-with-icon input,
.field-value textarea {
  align-items: start;
  background-color: var(--GreyLight_L, #f4f5f6);
  border-radius: 4px;
  font: 500 18px PT Root UI, sans-serif;
  padding: 12px;
  border: none;
  width: 100%;
  resize: none; /* Убираем возможность изменения размера */
}

.field-value,
.field-value-with-icon {
  justify-content: center;
  margin-top: 8px;
}

.description-value {
  padding: 12px;
  height: 148px; /* Устанавливаем фиксированную высоту */
}

.form-actions-container {
  display: flex;
  justify-content: flex-start;
  margin-left: 3vw;
  margin-right: 3vw;
  margin-top: 1.5vw;
  margin-bottom: 1.5vw;
}

.form-actions {
  display: flex;
  gap: 20px;
}

.save-button,
.cancel-button {
  border: none;
  border-radius: 4px;
  font: 700 18px PT Root UI, sans-serif;
  letter-spacing: 0.36px;
  padding: 13px 28px;
  text-align: center;
  cursor: pointer;
}

.save-button {
  background-color: var(--Accent, #008ad7);
  color: #fff;
}

.cancel-button {
  background-color: #f4f5f6;
  color: red;
  background: none;
}

.photo-upload-container {
  border: 1px solid rgba(220, 223, 225, 1);
  border-radius: 4px;
  margin: 20px 3vw 0 3vw;
  padding: 20px;
  width: calc(100% - 6vw);
  height: 40vh; /* Устанавливаем высоту контейнера для фотографий */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Центрируем содержимое по вертикали */
}

.photo-upload {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center; /* Центрируем содержимое по горизонтали */
  margin-bottom: 20px; /* Отступ снизу для фотографий */
}

.photo-upload-label {
  font: 700 18px'PT Root UI', sans-serif;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.upload-icon {
  width: 30px;
  height: 30px;
}

/* Новые стили для выравнивания всех form-field элементов */
.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px; /* Расстояние между элементами в form-field */
}

.field-label {
  font-weight: 700;
}

.field-value {
  padding: 8px;
  background-color: #f4f5f6;
  border-radius: 4px;
  font-weight: 500;
  flex: 1; /* Растягиваем элемент field-value на всю высоту form-field */
}
</style>
