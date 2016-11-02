// 引入样式表
import "../styles/usage/page/app.scss";
// 自定义scroll指令
import commonUtil from "./utils/common.util.js";
commonUtil.dirScroll();
// 引入首页的vue
import index from "./components/index.vue";
import main from "./components/main.vue";
// 引入初始界面的画面
import guide from "./components/guide.vue";
//引入分类页面
import search from "./components/search.vue";
import shangyi from './components/shangyi.vue';
import kz from "./components/kz.vue";
import xx from "./components/xx.vue";
import bl from "./components/bl.vue";
import fs from "./components/fs.vue";
import ny from "./components/ny.vue";
import mz from "./components/mz.vue";
import guang from "./components/guang.vue"
//设置路由
import Vue from "./libs/vue.js";
import VueRouter from "./libs/vue-router.js";
import store from "./vuex/store.js";
Vue.use(VueRouter);
let router = new VueRouter();
let App = Vue.extend({
  store:store
});
router.map({
  '/': {
    component: guide
  },
  '/index': {
    component: index,
    subRoutes: {
      '/': {
        component: main
      },
      '/search':{
        component:search,
        subRoutes:{
          '/':{
            component:shangyi
          },
          '/user':{
            component:shangyi
          },
          '/kz':{
            component:kz
          },
          '/xx':{
            component:xx
          },
          '/bl':{
            component:bl
          },
          '/fs':{
            component:fs
          },
          '/ny':{
            component:ny
          },
          '/mz':{
            component:mz
          }
        }
      },
    '/photo':{
        component: guang
      }
    }
  }
});
router.start(App,'body');
