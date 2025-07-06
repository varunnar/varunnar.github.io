<template>
  <h1>Who is Varun Narayanswamy?</h1>
  <div class="paragraph">
    <div class="grid_2fr_1fr">
      <slideshow 
        style="width: 100%; margin: auto; max-height: 800px;"
        :imageUrls="mainImages"
        fileType="png"
        :autoPlay="true"
        :numberOfImages="3">
      </slideshow>
      <div style="margin: auto; height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
        <div class="social_media_icons">
          <button class="sm github" id="github" @click="social_media_click"></button>
          <button class="sm linkedin" id="linkedin" @click="social_media_click"></button>
          <button class="sm instagram" id="instagram" @click="social_media_click"></button>
        </div>
        <p class="general_info"> Hi there! My name is Varun Narayanswamy. I am a software engineer with 3+ years of fullstack engineering and a recent graduate of the University of Washington's Master's for Human Computer Interaction and Design. I am born and raised in Boulder, Colorado and love spending time in the mountains, hanging with friends, playing video games, and making bad jokes. </p>
        <div></div>
      </div>
  </div>
  </div>
  <div style="text-align: left; width: 90%; margin: auto;">
    <h2>What am I interested in right now?</h2>
    <div class="grid_3fr_1fr" style="margin-bottom: 40px; width: 100%;">
      <reflection-item
        v-for="(hobby,index) in enjoymentItems"
        :key="index"
        :style="`border: 2px solid var(--customgreen);`"
        :title="hobby.title"
        :description="hobby.description"
        :icon="hobby.icon"
        backgroundColor="#FFFFFF"
        textColor="#014a39"
      ></reflection-item> 
    </div>
</div>
</template>

<script>

import ReflectionItem from '@/components/widgets/reflectionItem.vue';
export default {

  name: 'AboutView',
  components: {ReflectionItem},
  data() {
    return {
      mainImages: ["/assets/seattle.png", "/assets/SiblingPhoto.png","/assets/kittens.jpeg"],
      enjoymentItems: [{
        title: 'Favorite Hike',
        description: 'Green Mountain',
        icon: '/assets/icons/landscape-fill.svg'
      }, {
        title: 'Favorite Book Series',
        description: 'Red Rising Series',
        icon: '/assets/icons/planet-fill.svg'
      }, {
        title: 'Favorite Movie',
        description: 'Dark Knight',
        icon: '/assets/icons/movie-2-fill.svg'
      }, {
        title: 'Favorite Activity',
        description: 'Dungeons and Dragons',
        icon: '/assets/icons/sword-fill.svg'
      }, {
        title: 'Favorite TV Show',
        description: 'One Piece',
        icon: '/assets/icons/tv-2-fill.svg'
      }, {
        title: 'Favorite Video Game',
        description: 'Ori and the Will of the Whisps',
        icon: '/assets/icons/gamepad-fill.svg'
      },]
    }
  }
}

</script>


<style scoped>
  .paragraph {
    margin: auto;
    width: 90%;
    gap: 20px;
    text-align: left;
  }

  .green-section {
    background-color: #014A39;
    color: white;
    margin: 10px;
    padding: 20px;
    border-radius: 15px;
    margin: auto;
    text-align: left;
  }

  img {
    max-width: 100%; 
  }

  .main_photo {
    max-width: 100%;
  }
  .sm {
    background-size: contain;
    background-repeat: no-repeat;
    background-color: transparent;
    border: transparent;
    width: 80px;
    height: 80px;
  }
  .social_media_icons{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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