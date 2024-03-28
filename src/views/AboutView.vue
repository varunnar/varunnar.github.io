<template>
  <h1>Who is Varun Narayanswamy?</h1>
  <div class="paragraph">
    <img src="../assets/pic-2.jpg" alt="Varun profile photo">
    <p class="general_info"> Hi there! My name is Varun Narayanswamy. I am an alumnus of the University of Colorado where I got my bachelors in Creative Technology and Design. I am born and raised in Boulder, Colorado and love spending time in the mountains, hanging with friends, playing video games and making bad jokes. </p>
    <div class="social_media_icons">
      <button class="sm github" id="github" @click="social_media_click"></button>
      <button class="sm linkedin" id="linkedin" @click="social_media_click"></button>
      <button class="sm instagram" id="instagram" @click="social_media_click"></button>
    </div>
  </div>
</template>

<script>

</script>


<style scoped>
.paragraph {
  margin: auto;
  width: 40%;
}
img {
 max-width: 100%; 
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
    justify-content: space-between;
    height: 50%;
  }
  .github {
    background-image: url("../assets/social_media/github.png");
  }
  .github:hover {
    background-image: url("../assets/social_media/github_green.png");
  }
  .linkedin {
    background-image: url("../assets/social_media/linkedin.png");
  }
  .linkedin:hover {
    background-image: url("../assets/social_media/linkedin_green.png");
  }
  .instagram {
    background-image: url("../assets/social_media/instagram.png");
  }
  .instagram:hover {
    background-image: url("../assets/social_media/instagram_green.png");
  }
</style>