import "../styles/usage/page/app.scss";

import index from "./components/index.vue";
import main from "./components/main.vue";
import search from "./components/search.vue";
import detail from "./components/detail.vue";
import cart from "./components/cart.vue";
import info from "./components/info.vue";
import my from "./components/my.vue";
import login from "./components/login.vue";
import login1 from "./components/login1.vue";



// import Vue from "./libs/vue.js";
// import VueRouter from "./libs/vue-router.js"
// Vue.use(VueRouter);

let router = new VueRouter();

//vuex
import store from "./vuex/store.js"
let App = Vue.extend({
    store:store
});
//开启debug
Vue.config.debug = true;

router.map({
  '/':{
    component:login,
  },
  '/index':{
    name:'index',
    component:index,
    subRoutes:{
      '/main':{
        name:'main',
        component:main
      },
      '/search':{
        name:'search',
        component:search
      },
      '/cart':{
        name:'cart',
        component:cart
      },
      '/info':{
        name:'cart',
        component:info
      },
      '/my':{
        name:'my',
        component:my
      }
    }
  },
  '/login1':{
    name:'login1',
    component:login1
  },
  '/search/detail/:id':{
    name:'detail',
    component:detail
  }
});

router.start(App,'body');

// //容器
// require('./views/container.js');
// //index
// require('./views/index.js');
