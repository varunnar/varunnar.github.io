<template>
  <div class="home">
    <div class="pic_paragraph">
      <div class="paragraph">
        <h1>Who is Varun Narayanswamy?</h1>
        <p class="general_info"> Hi there! My name is Varun Narayanswamy. I am an alumnus of the University of Colorado where I got my bachelors in Creative Technology and Design. I am born and raised in Boulder, Colorado and love spending time in the mountains, hanging with friends, playing video games and making bad jokes. </p>
        <div class="social_media_icons">
          <button class="sm github" id="github" @click="social_media_click"></button>
          <button class="sm linkedin" id="linkedin" @click="social_media_click"></button>
          <button class="sm instagram" id="instagram" @click="social_media_click"></button>
        </div>  
      </div>
      <div class="profile_picture"> </div>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'HomeView',
  methods: {
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
    }
  },
}
</script>

<style scoped>
  .pic_paragraph {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: auto;
    padding: 5%;
    background-color: #014a39;
    margin-bottom: 2%;
    border-radius: 5%;
    width: 60%;
  }
  .profile_picture {
    background-image: url("../assets/prof-pic.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 50%;
    background-position: center;
  }

  @media (max-width: 960px) {
    .pic_paragraph {
      flex-direction: column;
      border-radius: 0%;
    }
    .profile_picture {
      width: 80vw;
      height: 80vw;
      margin-left: auto;
      margin-right: auto;
    }
    .paragraph {
      min-width: 100%;
      padding: 0%;
    }
    h1 {
      min-width: 100%;
    }
    .general_info {
      min-width: 100%;
    }
  }
  
  .paragraph {
    padding: 5%;
    width: 50%;
  }
  h1 {
    margin-left: 10%;
    margin-right: 10%;
    align-content: center;
  }
  @media (max-width: 960px) {
    h1 {
      margin: 0%;
    }
  }
  .general_info {
    margin-top: 1px;
    padding: 1%;
    color: #ffffff;
    font-size: 22px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .home {
    margin: 1%; 
    padding: 2%;
  }
  .h1 {
    color: #1a1e22;
    font-size: 25px;
  }
  .sm {
    background-size: contain;
    background-repeat: no-repeat;
    background-color: transparent;
    border: transparent;
    width: 100px;
    height: 100px;
  }
  .social_media_icons{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .github {
    background-image: url("../assets/social_media/github.png");
  }
  .github:hover {
    background-image: url("../assets/social_media/github_white.png");
  }
  .linkedin {
    background-image: url("../assets/social_media/linkedin.png");
  }
  .linkedin:hover {
    background-image: url("../assets/social_media/linkedin_white.png");
  }
  .instagram {
    background-image: url("../assets/social_media/instagram.png");
  }
  .instagram:hover {
    background-image: url("../assets/social_media/instagram_white.png");
  }
</style>
