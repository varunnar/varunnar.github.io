<template>
  <div class="home">
    <transition name="fade" appear>
    <div class="pic_paragraph">
      <div>
        <h1>Welcome</h1>
        <p>Hello, my name is Varun Narayanswamy. I am a <em>Software Developer</em> and a <em>Designer</em></p>
        <div class="img_div">
          <img src="../assets/linkedin_photo-removebg.png" alt="Varun profile photo">
        </div>
      </div>
    </div>
        <!--- <div class="profile_picture"> </div> -->
        <!---<img src="../assets/linkedin_photo.jpg" alt="Varun profile photo">-->
        <!-- <h2>Who is Varun Narayanswamy?</h2>
        <p class="general_info"> Hi there! My name is Varun Narayanswamy. I am an alumnus of the University of Colorado where I got my bachelors in Creative Technology and Design. I am born and raised in Boulder, Colorado and love spending time in the mountains, hanging with friends, playing video games and making bad jokes. </p>  -->
        <!-- <div class="social_media_icons">
          <button class="sm github" id="github" @click="social_media_click"></button>
          <button class="sm linkedin" id="linkedin" @click="social_media_click"></button>
          <button class="sm instagram" id="instagram" @click="social_media_click"></button>
        </div>  -->
    <!---<div class="pic_paragraph">
      <h1>Welcome</h1>
      <div class="paragraph">
        <div class="profile_picture"> </div>
        <img src="../assets/linkedin_photo.jpg" alt="Varun profile photo">
        <img src="../assets/linkedin_photo-removebg.png" alt="Varun profile photo">
        <h2>Who is Varun Narayanswamy?</h2>
        <p class="general_info"> Hi there! My name is Varun Narayanswamy. I am an alumnus of the University of Colorado where I got my bachelors in Creative Technology and Design. I am born and raised in Boulder, Colorado and love spending time in the mountains, hanging with friends, playing video games and making bad jokes. </p> 
        <div class="social_media_icons">
          <button class="sm github" id="github" @click="social_media_click"></button>
          <button class="sm linkedin" id="linkedin" @click="social_media_click"></button>
          <button class="sm instagram" id="instagram" @click="social_media_click"></button>
        </div> 
      </div>
    </div> -->
    </transition>
  </div>
</template>

<script>
  export default {
  name: 'HomeView',
  methods: {
    data() {
      return {
        show: false
      }
    },
    mounted() {
      this.show = true;
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
}
</script>
<style scoped>
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
