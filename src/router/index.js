import { createRouter, createWebHistory } from 'vue-router';
import StartMenu from '@/components/StartMenu.vue';
import LoginMenu from '@/components/LoginMenu.vue';
import ObjectsMenu from '@/components/ObjectsMenu.vue';
import RegPhone from '@/components/RegPhone.vue';
import RegPass from '@/components/RegPass.vue';
import RegFinal from '@/components/RegFinal.vue';


const routes = [
  {
    path: '/',
    name: 'StartMenu',
    component: StartMenu
  },
  {
    path: '/login',
    name: 'LoginMenu',
    component: LoginMenu
  },
  {
    path: '/objects',
    name: 'ObjectsMenu',
    component: ObjectsMenu
  },
  {
    path: '/regphone',
    name: 'RegPhone',
    component: RegPhone
  },
  {
    path: '/regpass',
    name: 'RegPass',
    component: RegPass
  },
  {
    path: '/regfinal', 
    name: 'RegFinal',
    component: RegFinal
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
