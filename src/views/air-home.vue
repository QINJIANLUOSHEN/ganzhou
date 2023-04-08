<!--
 * @Author: yushuang
 * @Date: 2023-04-07 16:54:55
 * @LastEditors: zhengxd zhengxd@internal.ths.com.cn
 * @LastEditTime: 2023-04-08 10:25:21
 * @Description:
-->
<template>
  <!-- 空气质量指数盒子 -->
  <div class="air-quality-box">
    <!-- 动画云 -->
    <div class="animation-cloud"></div>
    <!-- 标题 -->
    <div class="air-title">
      赣州市空气质量指数/AQI
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    return {};
  },
});
</script>

<style>
/* 整体背景 */
.air-quality-box {
  position: relative;
  width: 1014px;
  height: 540px;
  background: url(@/assets/images/air-quality-bg.png) no-repeat center;
}

/* 动画云 */
.animation-cloud {
  position: fixed;
  top: 0;
  left: 0;
  width: 1014px;
  height: 540px;
  background: url(@/assets/images/air-quality-cloud.png) no-repeat center;
}
</style>
