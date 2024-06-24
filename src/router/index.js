import { createRouter, createWebHistory } from 'vue-router';
import StartMenu from '@/components/StartMenu.vue';
import LoginMenu from '@/components/LoginMenu.vue';
import ObjectsMenu from '@/components/ObjectsMenu.vue';
import ProfileMenu from '@/components/ProfileMenu.vue';
import RegPass from '@/components/RegPass.vue';
import RegPhone from '@/components/RegPhone.vue';
import RegPhone2 from '@/components/RegPhone2.vue';
import RegFinal from '@/components/RegFinal.vue';

const routes = [
  { path: '/', name: 'StartMenu', component: StartMenu },
  { path: '/login', name: 'LoginMenu', component: LoginMenu },
  { path: '/objects', name: 'ObjectsMenu', component: ObjectsMenu },
  { path: '/profile', name: 'ProfileMenu', component: ProfileMenu },
  { path: '/regpass', name: 'RegPass', component: RegPass },
  { path: '/regphone', name: 'RegPhone', component: RegPhone },
  { path: '/regphone2', name: 'RegPhone2', component: RegPhone2 },
  { path: '/regfinal', name: 'RegFinal', component: RegFinal }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
