<template>
    <div class="slideshow"       
    @mouseenter="mouseInDiv = true" 
    @mouseleave="mouseInDiv = false">
      <div v-if="(imagePaths && imagePaths.length > 0) || (htmlUrls && htmlUrls.length > 0)" class="image-container">
        <transition :name="transitionName" mode="out-in">
          <div v-if="updateImage" class="slideshow_container" :key="imagePaths[currentIndex]" :style="`background-color: ${backgroundColor};`">
            <div :class="textLocation">
              <div>
                <CustomImage v-if="imagePaths && imagePaths.length > 0"
                  :src="imagePaths[currentIndex]"
                  :alt="headerArray ? headerArray[currentIndex] : 'Slideshow Image'"
                  width="100%"
                  :fullscreenEnabled="true"
                />
                <div v-if="htmlUrls && htmlUrls.length > 0" v-html="htmlContent" :key="htmlUrls[currentIndex]"></div>
              </div>
              <div class="slideshow_text">
                <h3 v-if="headerArray" v-text="headerArray[currentIndex]" :style="`color: ${textColor}`"></h3>
                <div class="bodyArray" v-if="bodyArray" v-text="bodyArray[currentIndex]" :style="`margin: 10px; color: ${textColor}`"></div>
            </div>
            </div>
          </div>
        </transition>
      </div>
      <div v-else class="no-images">
        No images available.
      </div>
 
      <transition :name="transitionName" mode="out-in">
        <div :class="'controls ' + controlLocation" v-if="displayControlObject()">
          <div class="button_custom" @click="clickPrev" :style="`background-color: ${buttonColor}; color: ${buttonAccentColor}; box-shadow: 0px 1px 1px ${buttonAccentColor}`">
            <div class="arrow-left"></div>
          </div>   
          <div class="button_custom" v-if="autoPlay" @click="handlePauseClick" :style="`background-color: ${buttonColor}; color: ${buttonAccentColor}; box-shadow: 0px 1px 1px ${buttonAccentColor}`"><b>{{ playPauseIcon }}</b></div>
          <div class="button_custom" @click="clickNext" :style="`background-color: ${buttonColor}; color: ${buttonAccentColor}; box-shadow: 0px 1px 1px ${buttonAccentColor}`">
            <div class="arrow-right"></div>
          </div>
        </div>
    </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'slide-show',
    props: {
      imageUrls: {
        type: Array,
        required: false
      },
      folderPath: {
        type: String,
        required: false
      },
      fileType: {
        type: String,
        required: false
      },
      htmlUrls: {
        type: Array,
        required: false
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
      showControlsAlways: {
        type: Boolean,
        default: false
      },
      bottomControls: {
        type: Boolean,
        default: true
      },
      textBottom: {
        type: Boolean,
        default: true
      },
      textLeft: {
        type: Boolean,
        default: false
      },
      album: {
        type: String,
        required: false
      },
      random: {
        type: Boolean,
        default: false
      },
      buttonColor: {
        type: String,
        default: "#FFFFFF"
      },
      backgroundColor: {
        type: String,
        default: '#202020'
      },  
    },
    data() {
      return {
        currentIndex: 0,
        imagePaths: [],
        disableTransition: false,
        autoPlayTimer: null,
        isPaused: false,
        updateImage: true,
        isModalOpen: false,
        htmlContent: '',
        arrayType: [],
        mouseInDiv: false
      };
    },

    mounted() {
      if (this.imageUrls) {
        this.arrayType = this.imageUrls;
        if (this.imageUrls.length > 0) {
          this.imagePaths = this.imageUrls; // Use provided URLs if available
        }
      } else if (this.folderPath) {
        this.generateNumericImagePaths(this.folderPath, this.numberOfImages, this.fileType); // Generate URLs based on a numeric pattern
      } else {
        this.fetchContent(0);
        this.arrayType = this.htmlUrls;
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
        return this.disableTransition ? 'fade-faster' : 'fade';
      },
      textColor() {
        var hex_core = this.backgroundColor.substring(1);
        return this.colorBalance(hex_core);      // strip #
      },
      buttonAccentColor() {
        //0.2126R+0.7152G+0.0722B
        var hex_core = this.buttonColor.substring(1);
        return this.colorBalance(hex_core);      // strip #
      },
      playPauseIcon() {
        if (!this.isPaused) {
          return '\u{23F8}';
        } else {
          return '\u{23F5}';
        }
      },
      controlLocation() {
        let addition_class = this.bottomControls ?  'bottom_control'  : 'top_control';
        return addition_class;
      },
      textLocation() {
        if (this.textLeft) {
          return 'left_text';
        }
        return this.textBottom ? 'bottom_text' : 'top_text';
      }
    },
    methods: {
      generateNumericImagePaths(folderPath, numImages, fileType) {
        // Generate URLs assuming a naming pattern like image1.jpg, image2.jpg, etc.
        this.imagePaths = Array.from({ length: numImages }, (_, i) => `${folderPath}_${i}.${fileType}`);
        this.arrayType = this.imagePaths;
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

    async fetchContent(index) {
      if (this.htmlUrls[index]) {
        try {
          const response = await fetch(this.htmlUrls[index]);
          if (!response.ok) throw new Error("Failed to load content");
          const text = await response.text();

          this.htmlContent = text; 
        } catch (error) {
          console.error("Error loading content:", error);
          this.htmlContent = "<p>Error loading content</p>";
        }
      }
    },
    displayControlObject() {
      if (this.mouseInDiv && this.showControls || this.showControlsAlways) {
        return true;
      } else {
        return false;
      }
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    colorBalance(hex_core) {
      var rgb = parseInt(hex_core, 16);   // convert rrggbb to decimal
      var r = (rgb >> 16) & 0xff;  // extract red
      var g = (rgb >>  8) & 0xff;  // extract green
      var b = (rgb >>  0) & 0xff;  // extract blue

      var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
      //luma 2
      //var luma = .299 * r + 0.587 * g + 0.114 * b; 
      if (luma < 128) {
          return "#FFFFFF"
      } else {
        return "#000000"
      }
    },
    prevImage() {
      this.disableTransition = true;
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.arrayType.length-1;
      }
      if (this.htmlUrls) {
        this.fetchContent(this.currentIndex);
      }
      // this.updateImage = false;
      // this.$nextTick(() => {
      //   this.updateImage = true; // Show content after content is fetched
      // });
    },
    nextImage() {
      if (this.random) {
        let currentI = this.currentIndex;
        while (currentI == this.currentIndex) {
          this.currentIndex = Math.round(Math.random()*14);
        }
      }
      else if (this.currentIndex < this.arrayType.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      if (this.htmlUrls) {
        this.fetchContent(this.currentIndex);
      }
      // this.updateImage = false;
      // this.$nextTick(() => {
      //   this.updateImage = true; // Show content after content is fetched
      // });
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

  * {
    box-sizing: border-box;
  }
  .slideshow {
    position: relative;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
  }

  img {
    object-fit: contain;
  }
  .slideshow_container{
    padding: 2%;
    border-radius: 2%;
    height: auto;
  }
  
  .image-container {
    width: 100%;
    margin: 0 auto;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.6s ease-in-out;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in versions <2.1.8 */ {
    opacity: 0;
  }

  .fade-faster-enter-active, .fade-faster-leave-active {
    transition: opacity 0.3s ease-in-out;
  }
  .fade-faster-enter, .fade-faster-leave-to /* .fade-leave-active in versions <2.1.8 */ {
    opacity: 0;
  }

  .button_custom {
    width: 30px;
    height: 30px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .arrow-left {
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 8px solid currentColor;
  }

  .arrow-right {
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 8px solid currentColor;
  }
  
  .slideshow-image {
    width: 100%;
    height: auto;
    max-height: 100%;
  }
  
  .controls {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 10px;
    max-width: 100%;
    padding: 2%;
}

.top_control {
  position: absolute;
  top: 0px;
  left: 0px;
} 

.bottom_control {
  position: absolute;
  bottom: 0px;
}

.left_text {
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
  text-align: left;
  justify-content: space-around;
  align-items: center;
}

.left_text .slideshow_text {
  min-width: 30%;
  max-width: 400px;
  flex-shrink: 0;
  text-align: left;
}

.left_text .bodyArray {
  font-size: 20px;
}

.bottom_text {
  display: flex;
  flex-direction: column;
}

.top_text {
  display: flex;
  flex-direction: column-reverse;
}

@media (max-width: 900px) {
  .left_text {
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;
    text-align: left;
    justify-content: space-around;
  }

  .left_text .slideshow_text {
    max-width: 100%;
    min-width: 100%;
  }

  .left_text .bodyArray {
    font-size: 20px;
  }
}
  
  button {
    margin: 0 5px;
  }

  .fullscreen-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
}

.fullscreen-button:hover {
  background: rgba(0, 0, 0, 0.7);
  transform: scale(1.1);
}

.fullscreen-button svg {
  width: 20px;
  height: 20px;
}

// .modal-content {
//   // background-color: #fff;
//   padding: 20px;
//   border-radius: 8px;
//   height: 90vh;
//   max-height: 100%;
//   width: auto;
//   text-align: center;
// }

// .modal_relative_obj {
//   position: relative;
//   width: 100%;
//   height: 100%;
// }

// .flex_container_for_sizing {
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   box-sizing: border-box;
//   overflow: hidden;
// }

// .modal_image_container {
//   flex: 1;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   box-sizing: border-box;
// }

// .modal-image {
//   width: 100%;
//   height: 100%;
//   object-fit: contain;
//   margin-bottom: 10px;
//   box-sizing: border-box;
// }

// .modal_text {
//   flex-shrink: 0;
//   height: auto;
//   margin-top: 10px;
//   box-sizing: border-box;
//}
  </style>
  