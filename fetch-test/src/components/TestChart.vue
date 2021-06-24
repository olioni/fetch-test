<template>
  <div>
    <canvas id="test-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import chartData from './chartData.js'


export default {
  name: 'chart',
  data() {
    return {
      chartData: chartData
    }
  },
  mounted() {
    const ctx = document.getElementById('test-chart');
    new Chart(ctx, this.chartData);
  }
}
</script>