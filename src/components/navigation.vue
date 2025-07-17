<template>
          <!-- :imageUrl="navObjName.imageUrl ? navObjName.imageUrl : ''" -->
  <div class="top_bar">
    <nav class="navigation-widget">
      <!-- <img src="/assets/icon.png" alt="varun icons" height="30px"/> -->
      <div v-for="navObjName in navigationBarObjects" :key="navObjName">
        <bubble-button
        style="max-height: 20px;"
        :isButton="true"
        :navigationName="navObjName.title"
        :navigationUrl="navObjName.url">
        </bubble-button>
      </div>
    </nav>
    <!-- <img src="/assets/full_icon.png" alt="top icon" style="width: 150px;"/> -->
  </div>
</template>

<script>
import BubbleButton from './widgets/bubbleButton.vue'
export default {
  components: { BubbleButton },
  name: 'navigation-bar',
  computed: {
    navigationBarObjects() {
      return [{title: 'HOME', url: '/'}, {title:'PROJECTS', url:'/projects'}, {title:'ABOUT ME', url: '/aboutMe'}, {title:'RESUME', url:'/resume'}]
    },
    navigationObjectStyle() {
      return {
        'size': '100px'
      };
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .navigation-widget {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    margin: 1%;
    padding: 10px;
  }

  .top_bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: 960px) {
    .navigation-widget {
      font-size: 10vw;
    }
  }
</style>