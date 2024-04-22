<template>
  <div class="projects_page">
      <div>
        <h1>PORTFOLIO</h1>
        <transition name="fade" appear>
        <div>
        <div class="header_title">
          <div>Projects</div>
          <!--<div>see more</div>-->
        </div>
        <div class="projects">
            <div class="projects-obj">
                <div v-for="object in objects" class="project-object-set" :key="object" @click="navigateToPage(object)">
                  <div :class="'project-obj ' + object" :key="object" :objectinfo="object"></div>
                  <div v-if="object == 'alpaca'" class="text_info" v-text="'AplacaML'"></div>
                  <div v-else-if="object == 'D3'" class="text_info" v-text="'D3 Visualization'"></div>
                  <div v-else-if="object == 'heartbeatChecker'" class="text_info" v-text="'HeartbeatChecker Mobile App'"></div>
                  <div v-else class="text_info" v-text="object"></div>
                </div>
            </div>
        </div>
        <div class="header_title">
          <div>Experience</div>
          <!--<div>see more</div>-->
        </div>
        <div class="projects">
            <div class="projects-obj">
                <div v-for="object in experience" class="project-object-set" :key="object" @click="navigateToPage(object)">
                  <div :class="'project-obj ' + object" :key="object" :objectinfo="object"></div>
                  <div v-if="object == 'mhcid'" class="text_info" v-text="'MHCI+D'"></div>
                  <div v-else-if="object == 'seagate'" class="text_info" v-text="'Seagate Technology'"></div>
                  <div v-else class="text_info" v-text="object"></div>
                </div>
            </div>
        </div>
          </div>
        </transition>
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
            return ["storyglow", "munchmaps", "D3", "heartbeatChecker", 
            "alpaca","fractal"]
        },
        experience() {
          return ["seagate", "mhcid", "ATLAS"];
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
    .fade-enter-from {
      opacity: 0;
    }
    .fade-enter-to {
      opacity: 1;
    }
    .fade-enter-active {
      transition: all 2s ease;
    }
    .project-object-set {
      margin-bottom: 20px;
      filter: brightness(20%);
      align-items: center;
    }
    .project-object-set:hover {
      margin-bottom: 20px;
      filter: brightness(100%);
    }
    .header_title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-left: 7%;
      padding-right: 7%;
      font-size: 25px;
      margin-top: 2%;
    }
    .text_info {
      height: 2%;
      color: #014a39;
      font-size: 20px;
      text-transform: capitalize;
      font-weight: bold;
    }
    .projects_page {
      margin-left: 2%;
      margin-right: 2%;
      margin-top: 2%;
      margin-bottom: 2%;
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
    h2 {
      font-weight: bold;
      font-size: 25px;
    }
    .projects {
        margin-top: 1%;
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

    @media (max-width: 960px) {
      .projects-obj {
        grid-template-columns: 1fr;
      }
      .project-obj {
        width: 60vw !important;
        height: 60vw !important; 
      }
    }
    // .project-obj {
    //   width: var(--s);
    //   margin-top: 6%;
    //   margin-bottom: 10%;
    //   height: calc(var(--s) * 1.1547);
    //   font-size: initial;
    //   display: inline-block;
    //   clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    //   background-color: black;
    //   background-size: 75%;
    //   background-repeat: no-repeat;
    //   background-position: center;
    // }

    .project-obj {
      width: 25vw;
      height: 25vw;
      background-color: black;
      background-size: 75%;
      background-repeat: no-repeat;
      background-position: center;
      margin-bottom: 5px;
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
      border-width: 2px;
      border-color: #014a39;
      border-style: solid;
    }
    .heartbeatChecker {
      background-image: url("../assets/project-imgs/heartbeatChecker.png");
      background-size: 65%;
      background-color: white;
      border-width: 2px;
      border-color: #014a39;
      border-style: solid;
    }
    .alpaca {
      background-image: url("../assets/project-imgs/alpaca.png");
      background-size: 100%;
      background-color: rgb(121, 50, 50); 
    }
    .mhcid {
      background-image:url("../assets/project-imgs/mhcid.png");
    }
</style>