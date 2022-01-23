<template>
  <div class="prompt">
    <h1>{{ this.randomEntry.word.toLowerCase() }}</h1>
    <h3>{{ this.randomEntry.definition }}</h3>
    <button @click="this.getRandomEntry()">Generate new</button>
  </div>
</template>

<script>
import dictionary from '../dictionary.json';

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

</style>
