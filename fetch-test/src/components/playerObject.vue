<template>
  <div>
    <canvas id="myChart"></canvas>
    <!-- <h3> {{player.fullName}} TOTAL GOALS: {{ this.goalTotal}} </h3> -->
  </div>
</template>

<script>
import firebase from "./firebase";
import {db} from './firebase'
import Chart from 'chart.js/auto';
      
export default {
  name: 'playerObject',
  props: [
    'player'
  ],
  data() {
    return {
      playerObj: "",
      playerMatches: "",
      person: "",
      goalTotal: "",
    }
  },
  firestore: {
    matches: db.collection('players')
  },
  created() {
  // Simple GET request using fetch
    // fetch("https://swapi.dev/api/people/")
    //   .then(response => response.json())
    //   .then(data => this.people = data);
  },
  mounted() {
    // console.log(this.player.fullName)

    // this.$bind("playerMatches", db.collection('players').doc(this.player.fullName).collection('matches')).then(() => {
      // console.log('player name:', this.player.fullName, 'goals scored:', this.playerMatches[0].goals + this.playerMatches[1].goals)
      // this.goalTotal = this.playerMatches[0].goals + this.playerMatches[1].goals
    // })
    this.myChart = new Chart(document.getElementById('myChart'), this.config)
  },
  methods: {
    calcTotalGoals(player) {
      this.playerObj.doc(player).collection('matches')
      // return this.playerObj.matches.map(match => match.goals).reduce((prev, next) => prev + next);
    },
    loadChart() {
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
