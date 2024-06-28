<template>
  <div class="object-edit-container">
    <h1 class="page-title">Редактирование объекта</h1>
    <section class="edit-form">
      <div class="form-layout">
        <div class="form-column">
          <div class="form-group">
            <div class="form-row">
              <div class="form-field">
                <label for="article" class="field-label">Артикул</label>
                <div class="field-value">{{ object.art }}</div>
              </div>
              <div class="form-field">
                <label for="title" class="field-label">Заголовок</label>
                <input v-model="object.title" type="text" class="field-value"/>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label for="category" class="field-label">Категория</label>
                <select v-model="object.category" class="field-value-with-icon">
                  <option value="Квартира">Квартира</option>
                  <option value="Дом">Дом</option>
                </select>
              </div>
              <div class="form-field">
                <label for="property-type" class="field-label">Тип недвижимости</label>
                <input v-model="object.type" type="text" class="field-value-with-icon"/>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-field">
                <label for="build-year" class="field-label">Год постройки</label>
                <input v-model="object.year" type="number" class="field-value"/>
              </div>
              <div class="form-field">
                <label for="rooms" class="field-label">Количество комнат</label>
                <input v-model="object.rooms" type="number" class="field-value"/>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label for="floors" class="field-label">Этажность</label>
                <input v-model="object.floors" type="number" class="field-value"/>
              </div>
              <div class="form-field">
                <label for="floor" class="field-label">Этаж</label>
                <input v-model="object.floor" type="number" class="field-value"/>
              </div>
            </div>
          </div>
        </div>
        <div class="form-column">
          <div class="form-group">
            <div class="form-field">
              <label for="description" class="field-label">Описание</label>
              <textarea v-model="object.description" class="field-value"></textarea>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label for="price" class="field-label">Цена</label>
                <input v-model="object.price" type="number" class="field-value"/>
              </div>
              <div class="form-field">
                <label for="client" class="field-label">Клиент</label>
                <div class="field-value">{{ object.clientid }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="photo-upload-container">
        <div class="photo-upload">
          <label for="file-upload" class="photo-upload-label">
            <img src="@/assets/upload.png" alt="Upload" class="upload-icon"/>
            <span>Загрузите фото</span>
          </label>
          <input id="file-upload" type="file" @change="handleFileUpload" accept="image/png, image/jpeg, image/jpg" multiple style="display: none"/>
        </div>
        <div class="photos">
          <div v-for="(photo, index) in photos" :key="index" class="photo">
            <button @click="deletePhoto(index)" class="delete-button">×</button>
            <img :src="photo.path" :alt="photo.filename" class="photo-img"/>
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
        active: '',
        year: '',
        floors: '',
        floor: '',
        rooms: '',
        price: '',
        clientid: '',
        description: ''
      },
      photos: [] // Для хранения загруженных фотографий
    };
  },
  created() {
    // Загрузка объекта и фотографий при создании компонента
    this.loadObject();
    this.loadPhotos();
  },
  methods: {
    async loadObject() {
      // Метод для загрузки данных объекта с сервера
      const objectId = this.$route.params.id;
      try {
        const response = await fetch(`http://localhost:3000/objects/${objectId}`);
        if (!response.ok) {
          throw new Error('Ошибка загрузки объекта');
        }
        const data = await response.json();
        this.object = data;
      } catch (error) {
        console.error('Ошибка загрузки объекта:', error);
      }
    },
    async loadPhotos() {
      // Метод для загрузки фотографий объекта с сервера
      const objectId = this.$route.params.id;
      try {
        const response = await fetch(`http://localhost:3000/objects/${objectId}/photos`);
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
    async saveObject() {
      // Метод для сохранения изменений объекта на сервере
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
    },
    cancelEdit() {
      // Метод для отмены редактирования объекта и возврата на предыдущую страницу
      this.$router.push('/objects');
    },
    async handleFileUpload(event) {
      // Метод для обработки загрузки фотографий на сервер
      const formData = new FormData();
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        formData.append('photos', files[i]);
      }

      const objectId = this.$route.params.id;
      try {
        const response = await fetch(`http://localhost:3000/objects/${objectId}/photos`, {
          method: 'POST',
          body: formData
        });
        if (!response.ok) {
          throw new Error('Ошибка загрузки фотографий');
        }
        const data = await response.json();
        // Обновляем список фотографий после загрузки
        this.photos = this.photos.concat(data.photoPaths.map(path => ({ path })));
      } catch (error) {
        console.error('Ошибка загрузки фотографий:', error);
        alert('Ошибка загрузки фотографий');
      }
    },
    async deletePhoto(index) {
      // Метод для удаления фотографии с сервера
      const objectId = this.$route.params.id;
      const photoToDelete = this.photos[index];

      try {
        const response = await fetch(`http://localhost:3000/objectsdel/${objectId}/photos/${photoToDelete.filename}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ delete: true })
        });
        if (!response.ok) {
          throw new Error('Ошибка удаления фотографии');
        }
        alert('Фотография удалена');
        this.photos.splice(index, 1);
      } catch (error) {
        console.error('Ошибка удаления фотографии:', error);
        alert('Ошибка удаления фотографии');
      }
    }
  }
};
</script>



<style scoped>
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
  font-size: 16px;
  line-height: 20px;
  padding: 0;
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
  font: 700 18px 'PT Root UI', sans-serif;
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
