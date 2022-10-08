<template>
  <div class="bubble-icon" :style="styleObj">
    <div v-if="isButton" class="button-text">
      <router-link v-if="!isResume" :to="navigationUrl"> {{navigationName}} </router-link>
      <a v-else href="resume.pdf">Resume</a>
    </div>
  </div>
</template>


<script>

export default {
  name: 'bubble-button',
  props: {
    bubbleStyle: {
      type: Object
    },
    isButton: {
      type: Boolean,
      default: false
    },
    navigationName: {
      type: String,
      default: ''
    },
    navigationUrl: {
      type: String,
      default: ''
    },
  },
  computed: {
    styleObj() {
      if (this.bubbleStyle) {
        return {
          "width": this.bubbleStyle.size,
          "height": this.bubbleStyle.size,
          "left": this.bubbleStyle.xValue,
          "top": this.bubbleStyle.yValue,
          "position": "absolute"
        }
      } else {
        return {
          "width": "100px",
          "height": "100px"
        }
      }
    },
    navLocation() {
      return "/" + this.navigationName
    },
    isResume() {
      console.log(this.navigationName)
      if (this.navigationName == 'Resume') {
        return true;
      }
      return false;
    }
  },
}
</script>

<style lang="scss">
  .bubble-icon {
    background-image: url("../../assets/Ellipse.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    .button-text {
      font-size: 15px;
      color: antiquewhite;
      text-align: center;
      vertical-align: center;
    }
    a {
      color: white;
    }
  }
</style>