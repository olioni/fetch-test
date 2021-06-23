<template>
  <div>
    <canvas id="myChart"></canvas>
    <!-- <h3> {{player.fullName}} TOTAL GOALS: {{ this.goalTotal}} </h3> -->
  </div>
</template>

<script>
import firebase from "./firebase";
import {db} from './firebase'
import Chart from 'chart.js';
      
export default {
  name: 'dataChart',
  props: [],
  data() {
    return {
      chart: null,
      chartLabels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June'
      ],
      chartData: {
        labels: this.chartLabels,
        datasets: [{
          label: 'My First Dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45]
        }]
      },
      config: {
        type: 'line',
        data: this.chartData,
        options: {}
      },
    }
  },
  firestore: {
    matches: db.collection('players')
  },
  mounted() {
    this.loadChart()
  },
  methods: {
    loadChart() {
      this.chart = new Chart(document.getElementById('myChart'), this.config)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
