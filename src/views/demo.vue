<template>
  <div class="pie-doughnut-container">
    <t-chart-pie-doughnut-data
      :data="chartData"
      :alias="{ value: 'num', customText: 'percent' }"
      :unit="unit"
      :options="chartOptions"
      :c-style="{
        wrapper: {
          default: {
            width: '600px',
            height: '300px',
            background: '#000050'
          }
        },
        // 图例名称样式
        legendName: {
          default: {
            color: '#FFF',
            marginRight: '10px'
          }
        },
        // 图例值样式
        legendValue: {
          default: {
            color: 'rgb(3, 247, 255)'
          }
        }
      }"
    >
      <!-- 中心旋转部分 -->
      <div class="chart-center">
        <div class="chart-center-rotate"></div>
        <div class="chart-center-icon"></div>
      </div>
    </t-chart-pie-doughnut-data>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const unit = 'mg/L';
    // 饼图数据
    const chartData = ref([
      {
        num: 50, percent: '50%', name: '臭氧',
      },
      {
        num: 20, percent: '50%', unit: 'g/L', name: 'PM10',
      },
      {
        num: 10, percent: '10%', unit: 'g/L', name: 'PM25',
      },
      {
        num: 5, percent: '5%', unit: 'g/L', name: 'SO2',
      },
      {
        num: 5, percent: '5%', unit: 'g/L', name: 'CO',
      },
      {
        num: 10, percent: '10%', unit: 'g/L', name: 'NO2',
      },
    ]);
    // 原生配置
    const chartOptions = {
      tooltip: {
        show: true,
        formatter: (params: any) => {
          // 由于甜甜圈饼图需要实现分割间隙，一般情况不推荐使用tooltip
          // 若需求需要tooltip，则需单独判断dataIndex；dataIndex为偶数则显示tooltip，dataIndex为奇数是分割间隙，无需显示tooltip
          if (!(params.dataIndex % 2)) {
            return `${params.marker}${params.name}&nbsp;&nbsp;&nbsp;${params.value}${params?.data?.unit || unit}`;
          }
          return '';
        },
      },
      // 外层阴影
      outerSeries: {
        itemStyle: {
          color: '#11125E',
        },
      },
      // 内层阴影
      innerSeries: {
        itemStyle: {
          color: '#09102b',
          opacity: 0.6,
        },
      },
    };

    return {
      unit,
      chartData,
      chartOptions,
    };
  },
});
</script>
<style lang="scss">
  /* 动画 */
  @keyframes turn {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(90deg);
    }

    50% {
      transform: rotate(180deg);
    }

    75% {
      transform: rotate(270deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .pie-doughnut-container {
    width: 100%;
    background: #000050;
  }

  /* 中心容器 */
  .chart-center {
    position: relative;
    width: 120px;
    height: 120px;

    .chart-center-rotate {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 666;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: url('@/assets/images/dark-rotate.png') center / 100% 100% no-repeat;
      animation: turn 2s linear infinite;
    }
  }
</style>
