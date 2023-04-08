/*
 * @Author: yushuang
 * @Date: 2023-04-07 16:54:55
 * @LastEditors: yushuang
 * @LastEditTime: 2023-04-08 10:24:46
 * @Description:
 */
import { createApp } from 'vue';

import 'normalize.css'; // CSS reset的替代方案
import '@/assets/styles/style.scss'; // 引入全局样式

import TChartPieDoughnutData from '@p-base/chart-pie-doughnut-data';
import '@p-base/chart-pie-doughnut-data/lib/index.css';
import TTable from '@p-base/table';
import '@p-base/table/lib/index.css';

import App from './app.vue';
import router from './router';
// import store from './store';

const app = createApp(App);
// app.use(store); // 按需使用状态管理
app
  .use(router)
  .use(TChartPieDoughnutData)
  .use(TTable)
  .mount('#app');
