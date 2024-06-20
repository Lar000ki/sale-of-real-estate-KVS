import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// Используем роутер
app.use(router);

// Монтируем приложение в DOM
app.mount('#app');
