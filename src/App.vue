<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Banner />
  <Prompt />
</template>

<script>
import Banner from './components/Banner.vue'
import Prompt from './components/Prompt.vue'

export default {
  name: 'App',
  components: {
    Prompt,
    Banner,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

body {
  background-color: #FFFDEC;
}

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  color: #1b2d4b;
}
</style>
