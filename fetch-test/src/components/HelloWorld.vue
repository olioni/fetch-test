<template>
  <div>
    <!-- <h3 v-for="player in playerObj" :key="player.id"> {{player.fullName}} TOTAL GOALS: {{ calcTotalGoals() }}</h3> -->
    <!-- <playerObject v-for="player in players" :player="player" :key="player.id"/> -->
    <playerObject/>
    <dataChart/>
  </div>
</template>

<script>
import firebase from "./firebase";
import {db} from './firebase';
import playerObject from '@/components/playerObject.vue'
import dataChart from '@/components/dataChart.vue'

export default {
  name: 'HelloWorld',
  components: {
    playerObject,
    dataChart
  },
  props: {

  },
  data() {
    return {
      players: ""
    }
  },
  firestore: {
    players: db.collection('players'),
    
  },
  created() {
  // Simple GET request using fetch
    // fetch("https://swapi.dev/api/people/")
    //   .then(response => response.json())
    //   .then(data => this.people = data);
  },
  mounted() {

  },
  methods: {
    calcTotalGoals() {
      console.log(this.matches)
      // return this.playerObj.matches.map(match => match.goals).reduce((prev, next) => prev + next);
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
