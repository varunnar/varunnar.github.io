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
            <div v-for="object in objects" class="project-object-set" :key="object.getProjectName()">
              <div :class="'project-obj ' + object.getProjectName()" :key="object.getProjectName()" :objectinfo="object.getProjectName()" @click="navigateToPage(object.getProjectName())"></div>
              <div class="text_info" v-text="object.getProjectTitle()" @click="navigateToPage(object.getProjectName())"></div>
              <div class="tags_object">
              <div class="tags" :class="{active: isSelected(tag)}" v-for="tag in object.getTags()" @click="addTag(tag)" :key="object + ': ' + tag" v-text="tag"></div>
            </div>
          </div>
         </div>
        </div>
        <!-- <div class="header_title">
          <div>Experience</div> -->
          <!--<div>see more</div>-->
        <!-- </div>
        <div class="projects">
            <div class="projects-obj">
                <div v-for="object in experience" class="project-object-set" :key="object" @click="navigateToPage(object)">
                  <div :class="'project-obj ' + object" :key="object" :objectinfo="object" v-text="object"></div>
                  <div v-if="object == 'mhcid'" class="text_info" v-text="'MHCI+D'"></div>
                  <div v-else-if="object == 'seagate'" class="text_info" v-text="'Seagate Technology'"></div>
                  <div v-else class="text_info" v-text="object"></div>
                </div>
            </div>
        </div> -->
          </div>
        </transition>
      </div>
  </div>
</template>

<script>
  import storyglowText from 'raw-loader!./projects/storyglow.txt'
  import {storyglow, munchmaps, heartbeat_checker, map_visualization, alpaca, fractal, project_tightrope, capstone_mhcid, data_visualization} from './projectClass.js'
  export default {
    name: 'projectView',
    data() {
      return {
        storyglowText: storyglowText,
        filter_array: []
      }
    },
    computed: {
        objects() {
            let all_proj = [capstone_mhcid, project_tightrope, data_visualization, storyglow, munchmaps, heartbeat_checker, 
            map_visualization, alpaca, fractal];
            if (this.filter_array.length == 0) {
              return all_proj;
            } else {
              return all_proj.filter(x => x.tags.some(tag => this.filter_array.includes(tag)));
            }
            // return [project_tightrope, data_visualization, storyglow, munchmaps, heartbeat_checker, 
            // map_visualization, alpaca, fractal, capstone_mhcid]
        },
        // objectName(object){
        //   return object.getProjectName()
        // },
        // objectTitle(object){
        //   return object.getProjectTitle()
        // },

        experience() {
          //return ["seagate", "mhcid", "ATLAS"];
          return ["seagate", "mhcid"];
        },
        // selected(tag) {
        //   if (this.filter_array.includes(tag)) {
        //     return true;
        //   }
        //   return false;
        // }
    },
    methods: {
        navigateToPage: function(object) {
          let individual_project = 'individual-project/' + object
          this.$router.push({name: individual_project}); 
        },

        addTag: function(tag) {
          let tag_index = this.filter_array.indexOf(tag);
          if (tag_index != -1) {
            this.filter_array.splice(tag_index, 1);
          } else {
            this.filter_array.push(tag);
          }
        },
        isSelected(tag) {
          console.log("hello")
          console.log(tag)
          return this.filter_array.includes(tag);
        }
    }
  }
</script>

<style scoped lang="scss">
    .fade-enter-from {
      opacity: 0;
    }
    .fade-enter-to {
      opacity: 1;
    }
    .fade-enter-active {
      transition: all 2s ease;
    }
    .project-obj, .text_info {
      filter: brightness(20%);
      margin-bottom: 10px;
    }
    .project-obj:hover, .text_info:hover {
      filter: brightness(100%);
    }
    .project-obj:hover, .text_info:hover {
      filter: brightness(100%);
    }
    .project-object-set {
      margin-bottom: 20px;
      text-align: center;
      display: flex;
      flex-direction: column;
      //justify-content: center;
      align-items: center;
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
      height: auto;
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
    .tags_object {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 5px;
      flex-wrap: wrap;
    }
    .tags {
      padding-top: 3px;
      padding-bottom: 3px;
      padding-left: 10px;
      padding-right: 10px;
      width: auto;
      height: auto;
      //background-color: white;
      border-radius: 50px;
      //border-width: thin;
      color: #014a39;
      font-weight: bold;
      font-size: 12px;
      border: solid;
    }
    .tags:hover {
      color: black;
    }
    .tags.active {
      background-color:#014a39;
      color: white;
      border-color: #014a39;
    }
    .projects {
        margin-top: 1%;
        display: flex;
        --s: 300px;
        --m: 4%;
        width: 100%;
    }
    .projects-obj {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      width: 100%;
      margin-left: 5%;
      margin-right: 5%;
      justify-items: center;
      align-items: start;
    }

    @media (max-width: 960px) {
      .projects-obj {
        grid-template-columns: 1fr;
      }
      .project-obj {
        width: 60vw !important;
        height: 60vw !important; 
        margin: auto;
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
      border-radius: 20px;
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

    .projectTightrope {
      background-image: url("../../public/assets/tv_screen.png");
      background-size: contain;

    }

    .DataViz {
      background-image: url("../assets/data_viz_portal/pink_background.png");
      background-size: contain;
      background-size: 80%;
      background-color: rgb(255, 235, 235);
    }

    .socialGrocer {
      background-image: url("../assets/social_grocer/project_image.png");
      background-size: cover;
      background-position: center;
      border-color: #014a39;
      border-width: 10px;
      background-color: #FCFBF9;
    }
</style>