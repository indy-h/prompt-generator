<template>
  <div class="prompt">
    <h1>{{ this.randomEntry.word.toLowerCase() }}</h1>
    <h3>{{ this.randomEntry.definition }}</h3>
    <button @click="this.getRandomEntry()">Generate new</button>
  </div>
</template>

<script>
import dictionary from '../commonDictionary.json';

export default {
  name: 'Prompt',
  data() {
    return {
      dictionary: {},
      dictionaryLength: 0,
      randomEntry: {
        word: '',
        definition: '',
      },
    }
  },
  mounted() {
    this.dictionary = dictionary;
    this.dictionaryLength = Object.keys(this.dictionary).length;
    this.getRandomEntry();
  },
  methods: {
    randomIntRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    getRandomEntry() {
      const randomNumber = this.randomIntRange(0, this.dictionaryLength);
      this.randomEntry = {
        word: Object.keys(this.dictionary)[randomNumber],
        definition: Object.values(this.dictionary)[randomNumber],
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.prompt {
  max-width: 800px;
  margin: 40px auto;
}

h3 {
  white-space: pre-line;
}

button {
  display: inline-block;
  width: 250px;
  margin: 5px 0;
  padding: 1em;
  border: solid 0.15em transparent;
  border-radius: 2em;
  background: #ffa9bb;
  color: #1b2d4b;
  font-family: "Lato", sans-serif;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}
</style>
