<template>
  <div>
    <h3> {{player.fullName}} TOTAL GOALS: </h3>
  </div>
</template>

<script>
import firebase from "./firebase";
import {db} from './firebase'
      
export default {
  name: 'playerObject',
  props: [
    'player'
  ],
  data() {
    return {
      playerObj: "",
      playerMatches: "",
      person: ""
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

    this.$bind("playerMatches", db.collection('players').doc(this.player.fullName).collection('matches')).then(() => {
      console.log(this.playerMatches.id)
    })

  },
  methods: {
    calcTotalGoals(player) {
      this.playerObj.doc(player).collection('matches')
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
