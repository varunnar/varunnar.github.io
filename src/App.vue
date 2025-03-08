<template class="App">
  <navigation></navigation>
  <!-- <transition>
  <router-view></router-view>
  </transition> -->
  <router-view v-slot="{ Component }">
  <transition>
    <component :is="Component" />
  </transition>
</router-view>
</template>

<script>
import navigation from './components/navigation.vue';

export default{
  name: 'App',
  components: { navigation }
}
</script>


<style>
@import url('@/globalStyles/colors.css');
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

h1 {
  font-size: 50px;
}

h2 {
    font-size: 40px;
}

h3 {
  font-size: 25px;
  text-transform: uppercase;
}

p {
  font-size: 20px;
}

@media(max-width: 900px) {
  h1 {
    font-size: 40px;
  }

  h2 {
      font-size: 30px;
  }

  h3 {
    font-size: 20px;
    text-transform: uppercase;
  }
}

nav a {
  font-weight: bold;
  /* font-style: italic; */
  /* color: #ffffff; */
  color: #036b53;
  text-decoration: none;
}

@media (max-width: 500px) {
    nav a {
      font-size: 4vw;
    }
  }

nav a.router-link-exact-active {
  color: #19945d;
}
nav a:hover {
  /* color: #fceab7; */
  color: #000101;
}
</style>
