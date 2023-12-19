<template>
  <div class="projects_page">
    <h1>PROJECTS</h1>
    <div class="projects">
        <div class="projects-obj">
            <div v-for="object in objects" :class="'project-obj ' + object" :key="object" :objectinfo="object" @click="navigateToPage(object)">
            </div>
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
            return ["storyglow", "munchmaps", "seagate", "D3", "heartbeatChecker", 
            "alpaca"]
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
    .projects_page {
      margin-left: 10%;
      margin-right: 10%;
      margin-top: 2%;
      margin-bottom: 2%;
      border-radius: 5%;
      padding: 2%;
      background-color: #014a39;
    }
    @media (max-width: 960px) {
      .projects_page {
        border-radius: 0%;
      }
    }
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
    // .projects-obj {
    //   font-size: 0;
    //   display: grid;
    //   grid-template-columns: 1fr 1fr 1fr;
    //   width: 100%;
    //   margin-left: 5%;
    //   margin-right: 5%;
    //   justify-items: center;
    // }

    @media (max-width: 960px) {
      .projects-obj {
        grid-template-columns: 1fr;
      }
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

    .projects-obj {
      width: 20vw;
      height: 20vw;
      background-color: black;
      background-size: 75%;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 50%;
    }

    @media (max-width: 960px) {
      .project-obj {
        width: 60vw;
        height: 60vw; 
      }
    }

    .project-obj:hover {
      filter: brightness(80%);
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
    .D3 {
      background-image: url("../assets/project-imgs/D3.png");
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