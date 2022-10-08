<template>
  <h1>PROJECTS</h1>
  <div class="projects">
      <div class="projects-obj">
          <div v-for="object in objects" :class="'project-obj ' + object" :key="object" :objectinfo="object" @click="navigateToPage(object)">
          </div>
      </div>
  </div>
</template>

<script>
  import storyglowText from 'raw-loader!./projects/storyglow.txt'
  export default {
    name: 'projectView',
    data() {
      return {
        storyglowText: storyglowText
      }
    },
    computed: {
        objects() {
            return ["storyglow", "munchmaps", "seagate", "H3", "heartbeatChecker", 
            "alpaca", "fractal"]
        }
    },
    methods: {
        navigateToPage: function(object) {
          let individual_project = 'individual-project/' + object
          this.$router.push({name: individual_project}); 
        },
    }
  }
</script>

<style lang="scss">
    h1 {
      margin-top: 4%;
      font-size: 50px;
    }
    .projects {
        margin-top: 4%;
        display: flex;
        --s: 300px;
        --m: 4%;
        width: 100%;
    }
    .projects-obj {
      font-size: 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      width: 100%;
      margin-left: 5%;
      margin-right: 5%;
      justify-items: center;
    }
    .project-obj {
      width: var(--s);
      margin-top: 6%;
      margin-bottom: 10%;
      height: calc(var(--s) * 1.1547);
      font-size: initial;
      display: inline-block;
      clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
      background-color: black;
      background-size: 75%;
      background-repeat: no-repeat;
      background-position: center;
    }
    .seagate {
      background-image: url("../assets/project-imgs/seagate.png");
    }
    .storyglow {
      background-image: url("../assets/project-imgs/storyglow.png");
    }
    .munchmaps {
      background-color: rgba(0, 95, 255, 255);
      background-image: url("../assets/project-imgs/munchmaps.png");
    }
    .fractal {
      background-size: 120%;
      background-image: url("../assets/project-imgs/fractal.png");
    }
    .H3 {
      background-image: url("../assets/project-imgs/H3.png");
      background-size: 100%;
      background-color: white;
    }
    .heartbeatChecker {
      background-image: url("../assets/project-imgs/heartbeatChecker.png");
      background-size: 65%;
      background-color: white;
    }
    .alpaca {
      background-image: url("../assets/project-imgs/alpaca.png");
      background-size: 100%;
      background-color: rgb(121, 50, 50); 
    }
</style>