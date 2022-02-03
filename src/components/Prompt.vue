<template>
  <div class="prompt">
    <h1>{{ this.randomEntry.word.toLowerCase() }}</h1>
    <button @click="this.getRandomEntry()">Generate new</button>
  </div>
</template>

<script>
import promptWords from '../../dataset/promptWords.js';

export default {
  name: 'Prompt',
  data() {
    return {
      promptWords: [],
      promptWordsLength: 0,
      randomEntry: {
        word: '',
      },
    }
  },
  mounted() {
    this.promptWords = promptWords;
    this.promptWordsLength = this.promptWords.length;
    this.getRandomEntry();
  },
  methods: {
    randomIntRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    getRandomEntry() {
      const randomNumber = this.randomIntRange(0, this.promptWordsLength);
      this.randomEntry = {
        word: this.promptWords[randomNumber],
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.prompt {
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 800px;
  transform: translate(-50%, -50%);
  /* margin: 40px auto; */
}
</style>
