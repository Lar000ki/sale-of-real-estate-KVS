<template>
  <main class="main-wrapper">
    <section class="content">
      <div class="content-header">
        <h3 class="content-title">Объекты</h3>
        <div class="content-add">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/90b9f78737b8e3e19d1c02da23ea9c81258b062234303b5b068b97984dbf2abe?"
            alt=""
            class="add-icon"
          />
          <span class="add-text">Добавить объект</span>
        </div>
      </div>
      <div class="table-wrapper">
        <!-- Отображение таблицы с объектами -->
        <section class="table-column">
          <div class="table-header">ID</div>
          <div v-for="object in objects" :key="object.id" class="table-cell" @click="editObject(object.id)">
            {{ object.id }}
          </div>
        </section>
        <section class="table-column">
          <div class="table-header">Артикул</div>
          <div v-for="object in objects" :key="object.id" class="table-cell" @click="editObject(object.id)">
            {{ object.art }}
          </div>
        </section>
        <section class="table-column">
          <div class="table-header">Тип недвижимости</div>
          <div v-for="object in objects" :key="object.id" class="table-cell" @click="editObject(object.id)">
            {{ object.type }}
          </div>
        </section>
        <section class="table-column">
          <div class="table-header">Заголовок</div>
          <div v-for="object in objects" :key="object.id" class="table-cell" @click="editObject(object.id)">
            {{ object.title }}
          </div>
        </section>
        <section class="table-column">
          <div class="table-header">Категория</div>
          <div v-for="object in objects" :key="object.id" class="table-cell" @click="editObject(object.id)">
            {{ object.category }}
          </div>
        </section>
        <section class="table-column">
          <div class="table-header">Активность</div>
          <div v-for="object in objects" :key="object.id" class="table-cell" @click="editObject(object.id)">
            {{ object.active ? 'Да' : 'Нет' }}
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ObjectsMenu',
  data() {
    return {
      objects: []
    };
  },
  mounted() {
    this.fetchObjects();
  },
  methods: {
    async fetchObjects() {
      try {
        const response = await fetch('http://localhost:3000/objects');
        if (!response.ok) {
          throw new Error('Ошибка получения объектов');
        }
        const data = await response.json();
        this.objects = data.objects;
      } catch (error) {
        console.error('Ошибка получения объектов:', error);
      }
    },
    editObject(objectId) {
      this.$router.push(`/objects/edit/${objectId}`);
    }
  }
};
</script>

<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background-color: #292f36;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
  padding: 0 24px;
}

.header-logo {
  display: flex;
  align-items: center;
  gap: 20px;
}

.header-titles {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.header-title {
  font-size: 42px;
  font-family: 'PT Root UI', sans-serif;
  margin: 0;
}

.header-subtitle {
  font-family: "PT Root UI", sans-serif;
  margin: 0;
}

.logo-img {
  width: 200px;
  max-width: 100%;
  object-fit: auto;
  object-position: center;
  aspect-ratio: 3.7;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 16px;
  white-space: nowrap;
  padding: 23px 0;
  color: #fff;
}

.nav-icon {
  width: 24px;
  object-fit: auto;
  object-position: center;
  aspect-ratio: 1;
}

.nav-text {
  font-family: "PT Root UI", sans-serif;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 69px 80px;
}

.content-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1620px;
  gap: 20px;
  font-weight: 700;
}

.content-title {
  font-size: 42px;
  font-family: "PT Root UI", sans-serif;
  color: #292f36;
}

.content-add {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #008ad7;
  font-family: "PT Root UI", sans-serif;
  font-size: 18px;
}

.add-icon {
  width: 24px;
  object-fit: auto;
  object-position: center;
  aspect-ratio: 1;
}

.table-wrapper {
  display: flex;
  margin-top: 40px;
  width: 100%;
  max-width: 1620px;
  font-size: 18px;
  color: #000;
  font-weight: 500;
}

.table-column {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.table-header,
.table-cell {
  font-family: "PT Root UI", sans-serif;
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  white-space: nowrap;
}

.table-header {
  background-color: #68717b;
  color: #fff;
  font-weight: 700;
}

.table-cell:nth-child(odd) {
  background-color: #f4f5f6;
}

.table-cell:nth-child(even) {
  background-color: #fff;
}

@media (max-width: 991px) {
  .header {
    flex-wrap: wrap;
    padding: 0 20px;
  }

  .header-logo,
  .nav-item,
  .table-wrapper {
    flex-wrap: wrap;
    max-width: 100%;
  }

  .header-title,
  .header-subtitle,
  .table-header,
  .table-cell {
    padding: 0 20px;
  }

  .content {
    padding: 0 20px;
  }
}
</style>