<template>
    <div class="artboard-container" :style="{...backgroundCol, minHeight: artboardHeight}">
      <!-- Header and Tagline -->
      <div class="header" :style="`color: ${objectColor}`">
        <h3>{{ header }} <em> {{ focusedHeader }}</em></h3>
        <img :src="secondaryImage" class="secondaryImage">
      </div>


      <div class="bottom_content">
        <!-- Bullet Points -->
        <div v-if="bulletPoints" class="bullet-points">
            <ul>
            <li v-for="(item, index) in bulletPoints" :key="index"><b>{{ item }}</b></li>
            </ul>
        </div>
        <div v-else-if="paragraph" class="paragraph">
            <p :style="`color: ${objectColor}; font-size: 30px;`">{{ paragraph }}</p>
        </div>
        <!-- Images -->
        <div class="images" :style="`max-width: ${imageSize}`">
          <div class="image-wrapper" v-for="(image, index) in images" :key="index">
            <CustomImage
              :src="image"
              :alt="header ? header : 'artboard image'"
              :fullscreenEnabled="true"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      header: {
        type: String,
        required: true
      },
      focusedHeader: {
        type: String,
        required: false
      },
      secondaryImage: {
        type: String,
        required: false
      },
      images: {
        type: Array,
        required: true
      },
      bulletPoints: {
        type: Array,
        required: false
      },
      paragraph: {
        type: String,
        required: false
      },
      objectColor: {
        type: String,
        default: "#27422C"
      },
      backgroundColor: {
        type: String,
        default: "#FCFBF9"
      },
      backgroundColor2: {
        type: String,
        required: false
      },
      artboardHeight: {
        type: String,
        default: "300px"
      },
      imageSize: {
        type: String,
        default: "800px"
      },
      backgroundSize: {
        type: String,
        default: "Contain"
      },
      aspectRatio: {
        type: String,
        default: "1/1"
      }
    },
    computed: {
      backgroundCol() {
        if (this.backgroundColor2) {
          return {
            background: `linear-gradient(to left, ${this.backgroundColor} 50%, ${this.backgroundColor2} 50%)`
          };
        } else {
          return {
            backgroundColor: `${this.backgroundColor}`
          }
        }
      }
    }
    // data() {
    //   return {
    //     isStacked: false
    //   };
    // },
    // mounted() {
    //   this.checkStacked();
    //   window.addEventListener("resize", this.checkStacked);
    // },
    // beforeUnmount() {
    //   window.removeEventListener("resize", this.checkStacked);
    // },
    // methods: {
    //   checkStacked() {
    //     this.isStacked = window.innerWidth < 600;
    //   }
    // }
  };
  </script>
  
  <style scoped>
  .artboard-container {
    position: relative;
    width: 100%;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: black;
  }
  .artboard-container.stacked {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  
  /* .header {
    position: absolute;
    top: 10px;
    left: 10px;
  } */
  .header h3 {
    margin: 0;
    margin-bottom: 20px;
  }

  /* .tagline {
    font-size: 0.9rem;
    color: gray;
  } */

  .secondaryImage {
    max-width: 500px;
    width: 100%;
  }


  li {
    color: black;
    font-size: 20px;
  }
  
  .images {
    display: flex;
    gap: 5px;
    flex: 2;
    width: 100%;
    /* max-width: 50%; */
    /* max-height: 300px; */
  }
  .image-wrapper {
    flex: 1;
    width: 100%;
    /* min-width: 200px; */
    margin-left: auto; 
    margin-right: 0;
    background-repeat: no-repeat;
    background-position: center;
  }
  .images img {
    /* width: 100%;
    height: auto;
    min-width: 200px;
    float: right; */
  }

  .paragraph {
    max-width: 500px;
    padding: 10px;
    flex: 2;
  }

  .artboard-container .paragraph p {
    font-size: 20px;
    line-height: 2;
    font-weight: 500;
  }

  .bullet-points {
    flex: 1;
  }
  
  .bullet-points ul {
    margin: 0;
    padding-left: 20px;
  }
  
  /* .artboard-container.stacked .header,
  .artboard-container.stacked .images,
  .artboard-container.stacked .bullet-points {
    position: relative;
    text-align: center;
    margin-bottom: 10px;
  } */

  .bottom_content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
    gap: 20px;
    align-items: top;
  }

  @media (max-width: 850px) {
    .bottom_content {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
  }
  </style>
  