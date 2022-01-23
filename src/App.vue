<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Prompt />
</template>

<script>
import Prompt from './components/Prompt.vue'

export default {
  name: 'App',
  components: {
    Prompt
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
