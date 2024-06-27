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
                <input v-model="object.art" type="text" class="field-value"/>
              </div>
              <div class="form-field">
                <label for="title" class="field-label">Заголовок</label>
                <input v-model="object.title" type="text" class="field-value"/>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label for="category" class="field-label">Категория</label>
                <input v-model="object.category" type="text" class="field-value-with-icon"/>
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
              <textarea v-model="object.description" class="field-value description-value"></textarea>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label for="price" class="field-label">Цена</label>
                <input v-model="object.price" type="number" class="field-value"/>
              </div>
              <div class="form-field">
                <label for="client" class="field-label">Клиент</label>
                <input v-model="object.clientid" type="text" class="field-value"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-actions">
        <button @click="saveObject" class="save-button">Сохранить</button>
        <button @click="cancelEdit" class="cancel-button">Отменить</button>
      </div>
      <div class="form-row">
        <div class="form-field">
          <input type="file" @change="handleFileUpload" accept="image/*" multiple class="field-value" :disabled="photos.length >= 5"/>
        </div>
      </div>
      <div class="photos">
        <div v-for="photo in photos" :key="photo.filename" class="photo">
          <button @click="deletePhoto(photo.filename)" class="delete-button">Удалить</button>
          <img :src="`http://localhost:3000/${photo.path}`" alt="Photo" class="photo-img"/>
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
      photos: []
    };
  },
  methods: {
    async saveObject() {
      try {
        const response = await fetch('http://localhost:3000/objectsadd', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.object)
        });
        if (!response.ok) {
          throw new Error('Ошибка сохранения объекта');
        }
        const data = await response.json();
        alert(data.message);
        this.$router.push('/objects');
      } catch (error) {
        console.error('Ошибка сохранения объекта:', error);
        alert('Ошибка сохранения объекта');
      }
    },
    cancelEdit() {
      this.$router.push('/objects');
    },
    async handleFileUpload(event) {
      const files = event.target.files;
      if (this.photos.length + files.length > 5) {
        alert('Можно загрузить максимум 5 фотографий');
        return;
      }

      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append('photos', files[i]);
      }

      try {
        const response = await fetch('http://localhost:3000/objects/photos', {
          method: 'POST',
          body: formData
        });
        if (!response.ok) {
          throw new Error('Ошибка загрузки фото');
        }
        const data = await response.json();
        this.photos = [...this.photos, ...data.photoPaths.map(path => ({ filename: path.split('/').pop(), path }))];
        alert('Фото успешно загружено');
      } catch (error) {
        console.error('Ошибка загрузки фото:', error);
        alert('Ошибка загрузки фото');
      }
    },
    async deletePhoto(filename) {
      const objectId = this.$route.params.id;

      try {
        const response = await fetch(`http://localhost:3000/objects/${objectId}/photos/${filename}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ delete: true })
        });
        if (!response.ok) {
          throw new Error('Ошибка удаления фото');
        }
        this.photos = this.photos.filter(photo => photo.filename !== filename);
        alert('Фото удалено');
      } catch (error) {
        console.error('Ошибка удаления фото:', error);
        alert('Ошибка удаления фото');
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
}
.photo {
  width: 250px;
  height: 250px;
  overflow: hidden;
}
.photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
}

.field-value,
.field-value-with-icon {
  justify-content: center;
  margin-top: 8px;
}

.description-value {
  padding: 12px;
}

.form-actions {
  align-self: start;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-top: 24px;
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
  width: 48%; /* Распределение кнопок по ширине */
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
