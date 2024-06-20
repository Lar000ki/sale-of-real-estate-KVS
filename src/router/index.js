import Vue from 'vue';
import Router from 'vue-router';
import StartMenu from '@/components/StartMenu.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'StartMenu',
      component: StartMenu
    },
  ]
});
