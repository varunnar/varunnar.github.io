<template>
  <div class="home">
    <transition name="fade" appear>
      <div class="content">
        <div class="pic_paragraph">
          <div>
            <h1>Welcome</h1>
            <p>Hello, my name is Varun Narayanswamy. I am a <em>Software Developer</em> and a <em>Designer</em></p>
            <div class="img_div">
              <img src="../assets/linkedin_photo-removebg.png" alt="Varun profile photo">
            </div>
          </div>
        </div>
        <div class="grid_3fr_1fr project_set">
          <div v-for="object in projectArray" class="project-object-set" :key="object.getProjectName()">
            <div :class="'home-project-obj ' + object.getProjectName()" :key="object.getProjectName()" @click="navigateToPage(object.getProjectName())"></div>
          </div>  
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

import {project_tightrope, capstone_mhcid, data_visualization} from './projectClass.js'

export default {
  name: 'HomeView',
  data() {
    return {
      show: false,
      project: []
    }
  },
  mounted() {
    console.log(project_tightrope)
    this.show = true;
  },
  methods: {
    navigateToPage: function(object) {
      let individual_project = 'individual-project/' + object;
      this.$router.push({name: individual_project}); 
    },
    social_media_click: function(event) {
      if (event.target.id == "github") {
        window.location.assign("https://github.com/varunnar");
      } else if (event.target.id == "linkedin") {
        window.location.assign("https://www.linkedin.com/in/varun-narayanswamy");
      } else if (event.target.id == "instagram"){ 
        window.location.assign("https://www.instagram.com/varun.narayanswamy/?hl=en");
      } else {
        console.log("invalid url");
      }
    },
  },
  computed: {
    projectArray() {
      let array = [project_tightrope, capstone_mhcid, data_visualization]
      return array;
    }
  },
}
</script>
<style scoped>
  @import url('@/globalStyles/spacing.css');
  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-to {
    opacity: 1;
  }
  .fade-enter-active {
    transition: all 2s ease;
  }
  .img_div {
    mask-image: linear-gradient(rgb(0 0 0 / 100%), 50%, transparent);
  }
  .pic_paragraph {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    border-radius: 5%;
    align-items: center;
  }
  .pic_paragraph_grid {
      display: grid;
      grid-template-columns: 3fr 1fr;
    }
  .profile_picture {
    background-image: url("../assets/linkedin_photo.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    min-width: 200px;
    background-position: center;
  }

  p {
    color: black;
    font-size: 18px;
  }
  p em {
    font-style: normal;
    font-weight: bold;
    color: #014a39;
  }
  
  .paragraph {
    width: 70%
  }
  img {
    max-width: 50%;
  }
  .project_set {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
  .home-project-obj {
    aspect-ratio: 3/2;
    margin-left: 10%;
    margin-right: 10%;
    background-size: cover;
    background-position: center;
    opacity: 30%;
    mask-image: linear-gradient(rgb(0 0 0 / 100%), 50%, transparent);
    border-radius: 10px;
  }

  .home-project-obj:hover {
    opacity: 100%;
    mask-image: none;
  }
  .projectTightrope {
    background-image: url("../../public/assets/tv_screen.png");
    background-size: cover;
  }

  .projectTightrope:hover {
    border: solid 1px rgba(70, 121, 105, 20);
  }

  .DataViz {
    background-image: url("../assets/data_viz_portal/pink_background.png");
    background-size: 80%;
    background-repeat: no-repeat;
    background-color: rgb(255, 235, 235);
  }

  .socialGrocer {
    background-image: url("../assets/social_grocer/project_image.png");
    /* border-color: #014a39; */
    border-width: 10px;
    background-color: #FCFBF9;
  }

  .socialGrocer:hover {
    border: solid 1px rgba(70, 121, 105, 50%);
  }

  h1 {
    font-size: 5em;
    margin: 0;
  }
  h2 {
    margin-left: 10%;
    margin-right: 10%;
    align-content: center;
    font-size: 2em;
  }
  @media (max-width: 960px) {
    h2 {
      margin: 0%;
    }
  }
  .general_info {
    margin-top: 1px;
    padding: 1%;
    color: #014a39;
    font-size: 22px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .home {
    margin: 1%; 
  }
  .h1 {
    color: #1a1e22;
    font-size: 25px;
  }

  @media (max-width: 960px) {
    .pic_paragraph {
      flex-direction: column;
      border-radius: 0%;
    }
    .profile_picture {
      width: 50vw;
      height: 50vw;
      margin-left: auto;
      margin-right: auto;
    }
    .paragraph {
      min-width: 100%;
      padding: 0% !important;
      margin: auto;
    }
    h1 {
      min-width: 100%;
      font-size: 1.5em;
    }
    .general_info {
      min-width: 100%;
    }
  }
</style>
