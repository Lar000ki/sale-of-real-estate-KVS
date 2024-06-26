import { createRouter, createWebHistory } from 'vue-router';
import StartMenu from '@/components/StartMenu.vue';
import LoginMenu from '@/components/LoginMenu.vue';
import ObjectsMenu from '@/components/ObjectsMenu.vue';
import ObjectsEdit from '@/components/ObjectsEdit.vue';
import ObjectsCreate from '@/components/ObjectsCreate.vue';
import ProfileMenu from '@/components/ProfileMenu.vue';
import RegPass from '@/components/RegPass.vue';
import RegPhone from '@/components/RegPhone.vue';
import RegPhone2 from '@/components/RegPhone2.vue';
import RegFinal from '@/components/RegFinal.vue';

const routes = [
  { path: '/', name: 'StartMenu', component: StartMenu },
  { path: '/login', name: 'LoginMenu', component: LoginMenu },
  { path: '/objects', name: 'ObjectsMenu', component: ObjectsMenu },
  { path: '/objects/edit/:id', name: 'ObjectsEdit', component: ObjectsEdit },
  { path: '/objects/create', name: 'ObjectsCreate', component: ObjectsCreate },
  { path: '/profile', name: 'ProfileMenu', component: ProfileMenu },
  { path: '/regphone', name: 'RegPhone', component: RegPhone },
  { path: '/regphone2/:phone', name: 'RegPhone2', component: RegPhone2, props: true },
  { path: '/regpass/:phone', name: 'RegPass', component: RegPass, props: true },
  { path: '/regfinal', name: 'RegFinal', component: RegFinal }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
