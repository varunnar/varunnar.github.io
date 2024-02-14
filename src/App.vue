<template class="App">
  <navigation></navigation>
  <transition>
  <router-view></router-view>
  </transition>
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
  color: #014a39;
  background-color: #fbf8f0;
  overflow: auto;
  height: 100vh;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #42b983;
}
nav a:hover {
  color: #fceab7;
}
</style>
