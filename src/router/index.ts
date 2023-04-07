/*
 * @Author: yushuang
 * @Date: 2023-04-07 16:54:55
 * @LastEditors: yushuang
 * @LastEditTime: 2023-04-07 22:52:05
 * @Description:
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Water from '../views/water.vue';
import Demo from '../views/demo.vue';
import FixedSource from '../views/fixed-source.vue';
import AirHome from '../views/air-home.vue';

// 首次必然要加载的路由
const constRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Demo',
    component: Demo,
  },
  // 碧水
  {
    path: '/water',
    name: 'Water',
    component: Water,
  },
  // 固定源
  {
    path: '/fixed-source',
    name: 'FixedSource',
    component: FixedSource,
  },
  // 空气质量指数
  {
    path: '/air-home',
    name: 'AirHome',
    component: AirHome,
  },
];

// 所有路由
let routes: Array<RouteRecordRaw> = constRoutes;

// 自动添加router目录下的所有ts路由模块
const files = require.context('./', false, /\.ts$/);
files.keys().forEach((route) => {
  // 如果是根目录的 index.js、 不做任何处理
  if (route.startsWith('./index')) {
    return;
  }
  const routerModule = files(route);
  // 兼容 import export 和 require module.export 两种规范 ES modules commonjs
  routes = [
    ...routes,
    ...constRoutes,
    ...(routerModule.default || routerModule),
  ];
});

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
