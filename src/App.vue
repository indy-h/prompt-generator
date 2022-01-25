<template>
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
