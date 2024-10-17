<template>
    <div class="slideshow">
      <div v-if="imagePaths.length > 0" class="image-container">
        <transition :name="transitionName" mode="out-in">
          <div class="slideshow_container" :key="imagePaths[currentIndex]">
            <img :src="imagePaths[currentIndex]" alt="Slideshow Image" class="slideshow-image" :key="imagePaths[currentIndex]"/>
            <h3 v-if="headerArray" v-text="headerArray[currentIndex]"></h3>
            <div v-if="bodyArray" v-text="bodyArray[currentIndex]" style="margin: 10px;"></div>
          </div>
      </transition>
      </div>
      <div v-else class="no-images">
        No images available.
      </div>
      
      <div class="controls" v-if="showControls">
        <button @click="clickPrev">Previous</button>
        <button v-if="autoPlay" @click="handlePauseClick">{{ isPaused ? 'Resume' : 'Pause' }}</button>
        <button @click="clickNext">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'slide-show',
    props: {
      imageUrls: {
        type: Array
      },
      folderPath: {
        type: String
      },
      bodyArray: {
        type: Array,
        required: false
      },
      headerArray: {
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
      }, 
      album: {
        type: String,
        required: false
      },
      random: {
        type: Boolean,
        default: false
      },
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
      if (this.imageUrls && this.imageUrls.length > 0) {
      this.imagePaths = this.imageUrls; // Use provided URLs if available
    } else if (this.folderPath) {
      this.generateNumericImagePaths(this.folderPath, this.numberOfImages); // Generate URLs based on a numeric pattern
    }
      
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
        return this.disableTransition ? '' : 'fade';
      }
    },
    methods: {
      generateNumericImagePaths(folderPath, numImages) {
        // Generate URLs assuming a naming pattern like image1.jpg, image2.jpg, etc.
        this.imagePaths = Array.from({ length: numImages }, (_, i) => `${folderPath}_${i}.jpg`);
      },
      clickPrev() {
        this.disableTransition = true;
        this.prevImage()
        if (this.autoPlay) {
          this.resetAutoPlay();
        }
      },
      clickNext() {
        this.disableTransition = true;
        this.nextImage();
        if (this.autoPlay) {
          this.resetAutoPlay();
        }
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
      },
      nextImage() {
        if (this.random) {
          let currentI = this.currentIndex;
          while (currentI == this.currentIndex) {
            this.currentIndex = Math.round(Math.random()*14);
          }
        }
        else if (this.currentIndex < this.imagePaths.length - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
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

      resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
      },
      // resetTransition() {
      // // Re-enable the fade transition after a delay
      //   setTimeout(() => {
      //     this.disableTransition = false;
      //   }, 100); // Small delay to ensure the image has changed before re-enabling fade
      // }
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
  .slideshow_container{
    background-color: rgb(32, 32, 32);
    padding: 5%;
    border-radius: 2%;
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
    max-height: 100%;
    // position: absolute;
    // top: 0;
    // left: 0;
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
  