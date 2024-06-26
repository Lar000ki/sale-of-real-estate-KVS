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
          <label for="photos" class="field-label">Фотографии</label>
          <input type="file" @change="handleFileUpload" accept="image/*" multiple class="field-value" :disabled="photos.length >= 5"/>
        </div>
      </div>
      <div class="photos">
        <div v-for="photo in photos" :key="photo.filename" class="photo">
          <button @click="deletePhoto(photo.filename)">Удалить</button>
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
        this.photos = this.photos.filter(photo => photo.filename !== filename); // Удаление фотографии из списка
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
}

.edit-form {
  border: 1px solid rgba(220, 223, 225, 1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 20px;
  width: 100%;
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
  margin-top: 24px;
}

.form-field {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.field-label {
  text-align: center;
  font: 700 16px PT Root UI, sans-serif;
  letter-spacing: 0.32px;
}

.field-value {
  align-items: start;
  background-color: var(--GreyLight_L, #f4f5f6);
  border-radius: 4px;
  font: 500 18px PT Root UI, sans-serif;
  justify-content: center;
  margin-top: 8px;
  padding: 12px;
}

.field-value-with-icon {
  background-color: var(--GreyLight_L, #f4f5f6);
  border-radius: 4px;
  display: flex;
  font-size: 18px;
  font-weight: 500;
  justify-content: space-between;
  margin-top: 8px;
  padding: 12px;
}

.icon {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
}

.description-value {
  padding: 12px 12px 66px;
}

.image-upload-section {
  border: 1px dashed rgba(104, 113, 123, 1);
  border-radius: 4px;
  margin-top: 24px;
  padding: 20px;
}

.image-gallery {
  display: flex;
  gap: 20px;
}

.gallery-image {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 150px;
}

.upload-button {
  align-items: center;
  color: #b0b2b6;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 700;
  justify-content: center;
  margin: auto 0;
  text-transform: uppercase;
}

.upload-icon {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 48px;
}

.upload-text {
  font-family: PT Root UI, sans-serif;
  margin-top: 10px;
}

.form-actions {
  align-self: start;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-top: 24px;
}

.save-button {
  background-color: var(--Accent, #008ad7);
  border-radius: 4px;
  color: #fff;
  font: 700 18px PT Root UI, sans-serif;
  letter-spacing: 0.36px;
  padding: 13px 28px;
  text-align: center;
}

.cancel-button {
  background-color: #f4f5f6;
  border-radius: 4px;
  color: var(--GreyDarkMain, #292f36);
  font: 700 18px PT Root UI, sans-serif;
  letter-spacing: 0.36px;
  padding: 13px 28px;
  text-align: center;
}
</style>