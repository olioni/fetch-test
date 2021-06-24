<script>
import firebase from "./firebase";
import {db} from './firebase';
// import Chart from "chart.js";
import { Bar } from 'vue-chartjs'
      
export default {
  extends: Bar,
  name: 'dataChart',
  props: [],
  data() {
    return {
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
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
      chart: null,
      // chartId: null
    }
  },
  firestore: {
    matches: db.collection('players')
  },
  extends: Bar,
  mounted() {
    this.renderChart(this.chartData, this.options)
    // this.loadChart()
  },
  methods: {
    loadChart() {
      // this.chartId = document.getElementById('mychart')
      this.chart = new Chart(this.chartId, this.config)
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
