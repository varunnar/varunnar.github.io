<template class="App">
  <navigation></navigation>
  <router-view/>
</template>

<script>
import navigation from './components/navigation.vue'

export default{
  name: 'App',
  components: { navigation }
}
</script>


<style>
body {
  margin: 0px;
  margin-top: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #fff9e8;
  overflow: auto;
  height: 100vh;
}

nav a {
  font-weight: bold;
  color: #014a39;
}

nav a.router-link-exact-active {
  color: #42b983;
}
nav a:hover {
  color: #604C32;
}
</style>
