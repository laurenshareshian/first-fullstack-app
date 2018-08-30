import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Houses from './components/houses/Houses.vue';
import HouseDetail from './components/houses/HouseDetail.vue';
import EditHouse from './components/houses/EditHouse.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/houses', component: Houses },
    { path: '/houses/:id', component: HouseDetail },
    { path: '/houses/:id/edit', component: EditHouse },
    { path: '*', redirect: '/' }
  ]
});