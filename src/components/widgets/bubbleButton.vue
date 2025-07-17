<template>
  <!--<div class="bubble-icon" :style="styleObj">-->
    <div v-if="isButton" class="button-text">
      <router-link tabindex="0" v-if="!isResume" :to="navigationUrl" role="button">
        <img v-if="imageUrl" :src="currentImageSrc" :alt="navigationName" class="button-image" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" />
        <span v-else>{{navigationName}}</span>
      </router-link>
      <a v-else href="resume.pdf">
        <img v-if="imageUrl" :src="currentImageSrc" :alt="navigationName" class="button-image" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" />
        <span v-else>Resume</span>
      </a>
    </div>
    <div v-else class="button-text">
      <img v-if="imageUrl" :src="currentImageSrc" :alt="navigationName" class="button-image" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" />
      <p v-else>{{ navigationName }}</p>
    </div>
  <!--</div>-->
  <!-- <div v-if="isButton" class="button-text">
      <router-link v-if="!isResume" :to="navigationUrl"> 
        <div class="bubble-icon" :style="styleObj"> {{navigationName}} </div> 
      </router-link>
      <div v-else class="bubble-icon" :style="styleObj">
        <a href="resume.pdf">Resume</a> 
      </div>
    </div>
    <div v-else> 
      <div class="bubble-icon" :style="styleObj"> </div> 
    </div> -->
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
    imageUrl: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      isHovered: false
    }
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
      if (this.navigationName == 'Resume') {
        return true;
      }
      return false;
    },
    currentImageSrc() {
      if (!this.imageUrl) return '';
      
      if (this.isHovered) {
        // Add "hover" to the image URL
        const lastDotIndex = this.imageUrl.lastIndexOf('.');
        if (lastDotIndex !== -1) {
          return this.imageUrl.substring(0, lastDotIndex) + '_hover' + this.imageUrl.substring(lastDotIndex);
        } else {
          return this.imageUrl + 'hover';
        }
      }
      return this.imageUrl;
    }
  },
  methods: {
    onMouseEnter() {
      this.isHovered = true;
    },
    onMouseLeave() {
      this.isHovered = false;
    }
  }
}
</script>

<style lang="scss">
  // .bubble-icon {
  //   //background-image: url("../../assets/Ellipse.png");
  //   //background-repeat: no-repeat;
  //   //background-position: center;
  //   //background-size: contain;
  //   background-color: #014a39;
  //   border-radius: 50%;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
    .button-text {
      font-size: 18px;
      //color: #ffffff;
      color: #014a39;
      text-align: center;
      vertical-align: center;
      
      .button-image {
        max-width: 100%;
        max-height: 30px;
        object-fit: contain;
        display: block;
        margin: 0 auto;
      }
    }
  //}
</style>