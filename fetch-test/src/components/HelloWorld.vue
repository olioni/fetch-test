<template>
  <div>
    <h3 v-for="player in players" :key="player.id"> {{player.fullName}}</h3>
  </div>
</template>

<script>
import firebase from "./firebase";
import {db} from './firebase'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,

  },
  data() {
    return {
      players: []
    }
  },
  firestore: {
    players: db.collection('players').get().then(querySnapshot => { querySnapshot.docs.map(doc => doc.data())})
  },
  created() {
  // Simple GET request using fetch
    fetch("https://swapi.dev/api/people/")
      .then(response => response.json())
      .then(data => this.people = data);
  },
  mounted() {
    console.log(this.players)
  },
  methods: {
    showMaleCharacters() {
      console.log(this.people.results)
      this.people.results.forEach(object => {
        object.filter()
      });
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
