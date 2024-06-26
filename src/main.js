import { createApp, reactive } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

const userState = reactive({
  user: JSON.parse(localStorage.getItem('user')) || null,
  loginUser(user) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  },
  logoutUser() {
    this.user = null;
    localStorage.removeItem('user');
  },
});

app.config.globalProperties.$userState = userState;

app.use(router);
app.mount('#app');
