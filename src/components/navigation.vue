<template>
  <nav class="navigation-widget">
    <div v-for="navObjName in navigationBarObjects" :key="navObjName">
      <bubble-button
      :isButton="true"
      :navigationName="navObjName.title"
      :navigationUrl="navObjName.url">
      </bubble-button>
    </div>
  </nav>
</template>

<script>
import BubbleButton from './widgets/bubbleButton.vue'
export default {
  components: { BubbleButton },
  name: 'navigation-bar',
  computed: {
    navigationBarObjects() {
      return [{title: 'Home', url: '/'}, {title:'Projects', url:'/projects'}, {title:'Resume', url:'/resume'}]
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
    justify-content: space-around;
    background-color: #369b8e;
    margin: 1%;
    padding: 30px;
  }
</style>