import Vue from 'vue';
import VueRouter from 'vue-router';
import './css/index.css';
import Routers from './routers';
Vue.use(VueRouter);

const vm:Vue=new Vue({
  el:'#root',
  data:{},
  methods: {},
  computed: {},
  watch: {},
  router:Routers,

  template:`
  <div class="con">
    <router-view></router-view>
  </div>
  `
});

