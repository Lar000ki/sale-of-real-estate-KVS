<template>
  <div>
    <HeaderComponent />
    <component :is="currentPageComponent" />
    <nav class="navigation">
      <button @click="changePage('StartMenu')">StartMenu</button>
      <button @click="changePage('LoginMenu')">LoginMenu</button>
      <button @click="changePage('ObjectsMenu')">ObjectsMenu</button>
      <button @click="changePage('ProfileMenu')">ProfileMenu</button>
      <button @click="changePage('RegPass')">RegPass</button>
      <button @click="changePage('RegPhone')">RegPhone</button>
      <button @click="changePage('RegPhone2')">RegPhone2</button>
      <button @click="changePage('RegFinal')">RegFinal</button>
    </nav>
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import StartMenu from './components/StartMenu.vue';
import LoginMenu from './components/LoginMenu.vue';
import ObjectsMenu from './components/ObjectsMenu.vue';
import ProfileMenu from './components/ProfileMenu.vue';
import RegPass from './components/RegPass.vue';
import RegPhone from './components/RegPhone.vue';
import RegPhone2 from './components/RegPhone2.vue';
import RegFinal from './components/RegFinal.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    StartMenu,
    LoginMenu,
    ObjectsMenu,
    ProfileMenu,
    RegPass,
    RegPhone,
    RegPhone2,
    RegFinal
  },
  data() {
    return {
      currentPage: 'StartMenu'
    };
  },
  computed: {
    currentPageComponent() {
      return this.currentPage;
    }
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    }
  }
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f8f9fa;
}
</style>
