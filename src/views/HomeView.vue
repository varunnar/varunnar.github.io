<template>
  <div class="home">
    <h1>Who is Varun Narayanswamy?</h1>
    <img src="../assets/prof-pic.png">
    <p class="general_info"> Hi There! My name is Varun Narayanswamy. I am an alumni of University of Colorado where I got my bachelors in Creative Technology and Design. I am born and raised in Boulder Colorado and love hanging out in the mountains, hanging with friends, play video games and making bad jokes. </p>
    <div class="social_media_icons">
      <button class="sm github" id="github" @click="social_media_click"></button>
      <button class="sm linkedin" id="linkedin" @click="social_media_click"></button>
      <button class="sm instagram" id="instagram" @click="social_media_click"></button>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'HomeView',
  methods: {
    social_media_click: function(event) {
      if (event.target.id == "github") {
        window.location.assign("https://github.com/varunknarayanswamy");
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
  img {
    width: 30%;
  }
  .general_info {
    margin-top: 1px;
    margin-left: 20%;
    margin-right: 20%;
    background-color: #369b8e;
    padding: 1%;
    color: #000000;
    font-size: 22px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .home {
    height: 100%;
    margin: 1%;
    min-height: 100%;
    padding: 2%;
  }
  .h1 {
    color: #1a1e22;
    font-size: 25px;
  }
  .sm {
    background-size: contain;
    background-color: transparent;
    border: transparent;
    width: 100px;
    height: 100px;
  }
  .social_media_icons{
    display: flex;
    flex-direction: row;
    margin-left: 20%;
    margin-right: 20%;
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
