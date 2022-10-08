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
  color: #1a1e22;
  background-color: rgba(65,	179, 163, 1);
  overflow: auto;
}

nav a {
  font-weight: bold;
  color: #348f82;
}

nav a.router-link-exact-active {
  color: #42b983;
}
nav a:hover {
  color: pink;
}
</style>
