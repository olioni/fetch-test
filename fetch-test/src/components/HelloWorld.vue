<template>
  <div>
    <button @click="showMaleCharacters()">MALE</button>
    <button @click="showFemaleCharacters()">FEMALE</button>
    <test-chart/>
  </div>
</template>

<script>
import TestChart from './TestChart.vue';
import {db} from './firebase'
import firebase from './firebase'

export default {
  components: { TestChart },
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      players: "",
      playerMatches: "",
      people: [],
      size: 0
    }
  },
  // firestore: {
  //   players: db.collection('players')
  // },
  created() {

  },
  methods: {
    showMaleCharacters() {
    },
    showFemaleCharacters() {
      alert("I dont do anything yet")
    }
  },
  mounted() {
    // console.log(this.playerMatches)
    // console.log(this.players)

    // this.$bind("playerMatches", db.collection('players').doc(this.player.fullName).collection('matches')).then(() => {
    //   // console.log('player name:', this.player.fullName, 'goals scored:', this.playerMatches[0].goals + this.playerMatches[1].goals)
    //   this.goalTotal = this.playerMatches[0].goals + this.playerMatches[1].goals
    // })
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
