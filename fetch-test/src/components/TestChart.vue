<template>
  <div>
    <p v-for="player in playerMatches" :key="player.id"> {{player}} </p>
    <canvas id="test-chart"></canvas>
    
  </div>
</template>

<script>
  import Chart from 'chart.js'
  import chartData from './chartData.js'
  import {db} from './firebase'
  import firebase from './firebase'

  export default {
    name: 'chart',
    data() {
      return {
        players: null,
        chartData: chartData,
        playerMatches: {}
      }
    },
    firestore: {
      players: db.collection('players')
    },
    watch: {
    players: {
        handler: "test"
      }
    },
    mounted() {
      console.log(this.players)
      const ctx = document.getElementById('test-chart');
      new Chart(ctx, this.chartData);
    },
    methods: {
      test() {
        console.log("test function")
        this.players.forEach(player => {
          console.log("getting matches data for " , player.fullName)
          db.collection('players').doc(player.fullName).collection('matches').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log("doc",doc.data())
              this.playerMatches[player.fullName].matches[doc.id] = doc.data()
            });
          });
        })
        console.log("this.playMatches data", this.playerMatches)
      }
    }
  }
</script>