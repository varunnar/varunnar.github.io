<template>
    <div class="object">
      <!-- Display the row of images -->
      <div v-if="images" class="image-row">
        <img 
          v-for="(image, index) in images" 
          :key="index" 
          :src="image" 
          @click="handleContentFetch(index)" 
          class="image"
          :alt="'Image ' + index"
          :style="`max-width: ${imageSize}; width: 20%; flex: 1;`"
        />
      </div>

      <div v-if="header" class="image-row">
        <h2 
          v-for="(header, index) in header" 
          :key="header" 
          v-text="header" 
          @click="handleContentFetch(index)"></h2>
      </div>

      
      <!-- Display the fetched HTML content -->
      <Transition name="slide-fade">
        <div v-if="showContent" class="content-display" v-html="content" :style="{backgroundColor: b_c, color: f_c}"></div>
      </Transition>
    </div>
  </template>
  <script>

  export default {
    name: 'rowPicker',
    props: {
      images: {
        type: Array,
        required: false,
      },
      imageSize: {
        type: String,
        default: "75px"
      },
      header: {
        type: Array,
        required: false,
      },
      textFiles: {
        type: Array,
        required: true,
      },
      b_c: {
        type: String,
        default: '#000000'
      },
      f_c: {
        type: String,
        default: '#FFFFFF'
      }
    },
    data() {
      return {
        content: '', // Holds the HTML content to be displayed
        showContent: true
      };
    },
    mounted() {
      this.fetchContent(0);
    },
    methods: {
      async fetchContent(index) {
        if (this.textFiles[index]) {
          try {
            const response = await fetch(this.textFiles[index]);
            console.log(this.textFiles[index])
            if (!response.ok) throw new Error("Failed to load content");
            const text = await response.text();

            this.content = text;
          } catch (error) {
            console.error("Error loading content:", error);
            this.content = "<p>Error loading content</p>";
          }
        }
      },
      handleContentFetch(index) {
          this.fetchContent(index);
          this.showContent = false; // Hide content first to re-trigger v-if
          this.$nextTick(() => {
            this.showContent = true; // Show content after content is fetched
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .object {
    width: 100%;
  }
  .image-row {
    display: flex;
    gap: 2%;
    width: 100%;
    justify-content: flex-start;
    margin: auto;
    /* flex-direction: column; */
  }
  
  .image {
    cursor: pointer;
    /* width: 100%; */
    flex: 1 1 0;
    /* width: 0; */
    flex: 1;
    flex-basis: 100%;
    height: auto;
    object-fit: contain;
    padding: 10px;
    border-radius: 10px;
    /* border: 1px solid #ccc; */
  }

  .image:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .image:active {
    background-color: rgba(0, 0, 0, 1);
    box-shadow: white;
  }
  
  .content-display {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #999;
    position: relative;
    z-index: 1;
  }

  .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
  </style>
  