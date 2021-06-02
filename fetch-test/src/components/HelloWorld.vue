<template>
  <div>
    <button @click="showMaleCharacters()">MALE</button>
    <button @click="showFemaleCharacters()">FEMALE</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,

  },
  data() {
    return {
      people: [],
      size: 0
    }
  },
  created() {
  // Simple GET request using fetch
    fetch("https://swapi.dev/api/people/")
      .then(response => response.json())
      .then(data => this.people = data);
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
