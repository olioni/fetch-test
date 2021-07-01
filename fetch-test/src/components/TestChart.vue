<template>
  <div>
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
    mounted() {
      console.log(this.players)
      const ctx = document.getElementById('test-chart');
      new Chart(ctx, this.chartData);

      for (var i = 0; i < this.players.length; i++) {

        console.log(this.players[i].fullName)
        
        db.collection('players').doc(this.players[i].fullName).collection('matches').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc)
            this.playerMatches[this.players[i].fullName].matches[doc.id] = doc.data()
          });
        });

      }

      console.log(this.playerMatches)
    }
  }
</script>