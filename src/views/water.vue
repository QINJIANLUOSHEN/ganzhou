<!--
 * @Author: yushuang
 * @Date: 2023-04-07 16:54:55
 * @LastEditors: yushuang
 * @LastEditTime: 2023-04-08 00:48:52
 * @Description:
-->
<template>
  <div class="water-wrapper">
    <div class="water-wrapper__lf">
      <!-- 水质概况 -->
      <div class="water-wrapper__lf__overview"></div>
      <div class="water-wrapper__lf__standard">
        <!-- 地表水 -->
        <div class="surface-water"></div>
        <!-- 饮用水 -->
        <div class="drinking-water"></div>
      </div>
    </div>

    <div class="water-wrapper__rt">
      <!-- 实时监控数据 -->
      <div class="monitoring-data"></div>
      <!-- 综合排名 -->
      <div class="overall-ranking"></div>
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

<style lang="scss" scoped>
.water-wrapper {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  width: 1920px;
  height: 939px;
  padding: 0 76px 0 85px;
  background: url('@/assets/images/body-bg.jpg') no-repeat center;
  background-size: 100% auto;

  &__lf {
    flex: 1;
    height: 100%;
    margin-right: 20px;

    &__overview {
      width: 1249px;
      height: 626px;
      background: url('@/assets/images/bg-1.png') no-repeat center;
      background-size: 100% auto;
    }

    &__standard {
      display: flex;
      justify-content: space-between;

      .surface-water,
      .drinking-water {
        width: 627px;
        height: 278px;
        background: url('@/assets/images/bg-2.png') no-repeat center;
        background-size: 100% auto;
      }
    }
  }

  &__rt {
    width: 466px;
    height: 100%;

    .monitoring-data {
      width: 466px;
      height: 490px;
      background: url('@/assets/images/bg-3.png') no-repeat center;
      background-size: 100% auto;
    }

    .overall-ranking {
      width: 466px;
      height: 409px;
      margin-top: 6px;
      background: url('@/assets/images/bg-4.png') no-repeat center;
      background-size: 100% auto;
    }
  }
}
</style>
