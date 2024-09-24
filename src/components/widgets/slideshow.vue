<template>
    <div class="slideshow">
      <div v-if="imagePaths.length > 0" class="image-container">
        <transition :name="transitionName" mode="out-in">
          <div class="container">
            <img :src="imagePaths[currentIndex]" alt="Slideshow Image" class="slideshow-image" :key="imagePaths[currentIndex]"/>
            <div v-if="textUrls" v-text="textUrls[currentIndex]"></div>
          </div>
      </transition>
      </div>
      <div v-else class="no-images">
        No images available.
      </div>
      
      <div class="controls" v-if="showControls">
        <button @click="clickPrev">Previous</button>
        <button @click="handlePauseClick">{{ isPaused ? 'Resume' : 'Pause' }}</button>
        <button @click="clickNext">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'slide-show',
    props: {
      imageUrls: {
        type: Array,
        required: true,
      },
      textUrls: {
        type: Array,
        required: false
      },
      autoPlay: {
        type: Boolean,
        default: false,
      },
      autoPlayInterval: {
        type: Number,
        default: 5000, // Default 3 seconds between transitions
      },
      numberOfImages: {
        type: Number,
        required: true,
      },
      showControls: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        currentIndex: 0,
        imagePaths: [],
        disableTransition: false,
        autoPlayTimer: null,
        isPaused: false
      };
    },
    mounted() {
      this.imagePaths = this.imageUrls.map((image) => {
        // console.log("in here")
        // console.log(image)
        // console.log(require(`@/assets/${image}`))
       // return "../../assets/" + image;
       return image;
        //return require(`@/assets/${image}`);
      });
      
       // Start autoplay if autoPlay is true
    if (this.autoPlay) {
      this.startAutoPlay();
    }
    },
    computed: {
      images() {
        return this.imageUrls.slice(0, this.numberOfImages);
      },
      transitionName() {
        // Return 'fade' if transition is not disabled, otherwise empty (no transition)
        console.log(this.disableTransition)
        return this.disableTransition ? '' : 'fade';
      }
    },
    methods: {
      clickPrev() {
        this.disableTransition = true;
        this.prevImage()
        this.stopAutoPlay();
        this.startAutoPlay();
      },
      clickNext() {
        this.disableTransition = true;
        this.nextImage();
        this.stopAutoPlay();
        this.startAutoPlay();
      },
      handlePauseClick() {
        // Toggle pause/resume state
        this.isPaused = !this.isPaused;

        if (this.isPaused) {
          this.stopAutoPlay(); // Stop autoplay when paused
        } else {
          this.startAutoPlay(); // Resume autoplay when unpaused
        }
      },
      prevImage() {
        this.disableTransition = true;
        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex = this.imagePaths.length-1;
        }
        this.resetTransition();
      },
      nextImage() {
        if (this.currentIndex < this.imagePaths.length - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
        this.resetTransition();
      },

      startAutoPlay() {
        // Automatically switch images at set intervals
        if (!this.isPaused) {
          this.autoPlayTimer = setInterval(() => {
            this.nextImage();
          }, this.autoPlayInterval);
        }
      },
      stopAutoPlay() {
        // Clear the autoplay timer
        if (this.autoPlayTimer) {
          clearInterval(this.autoPlayTimer);
          this.autoPlayTimer = null;
        }
      },
      resetTransition() {
      // Re-enable the fade transition after a delay
        setTimeout(() => {
          this.disableTransition = false;
        }, 100); // Small delay to ensure the image has changed before re-enabling fade
      }
    },
    watch: {
      // Watch for changes to the autoPlay prop and update autoplay behavior
      autoPlay(newValue) {
        if (newValue) {
          this.startAutoPlay();
        } else {
          this.stopAutoPlay();
        }
      }
    }
  };
  </script>
  
  <style lang="scss">
  .slideshow {
    text-align: center;
  }
  
  .image-container {
    width: 100%;
    //max-width: 600px;
    margin: 0 auto;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s ease;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in versions <2.1.8 */ {
    opacity: 0;
  }
  
  .slideshow-image {
    width: 100%;
    height: auto;
  }
  
  .controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}
  
  button {
    margin: 0 5px;
  }
  </style>
  