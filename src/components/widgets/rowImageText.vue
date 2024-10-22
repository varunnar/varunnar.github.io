<template>
    <div class="object">
      <!-- Display the row of images -->
      <div v-if="images" class="image-row">
        <img 
          v-for="(image, index) in images" 
          :key="index" 
          :src="image" 
          @click="fetchContent(index)" 
          class="image"
          :alt="'Image ' + index"
        />
      </div>

      <div v-if="header" class="image-row">
        <h2 
          v-for="(header, index) in header" 
          :key="header" 
          v-text="header" 
          @click="fetchContent(index)"></h2>
      </div>

      
      <!-- Display the fetched HTML content -->
       <Transition name="slide-fade">
      <div class="content-display" v-html="content" :style="{backgroundColor: b_c, color: f_c}"></div>
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
      };
    },
    mounted() {
      this.content = this.fetchContent(0);
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
    },
  };
  </script>
  
  <style scoped>
  .image-row {
    display: flex;
    gap: 20px;
    max-width: 100%;
    justify-content: space-around;
    margin: auto;
  }
  
  .image {
    cursor: pointer;
    /* width: 100%; */
    flex: 1 1 0;
    width: 0;
    flex-basis: 100%;
    height: auto;
    max-width: 200px;
    object-fit: contain;
    padding: 10px;
    border-radius: 30px;
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
  }

  .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
  </style>
  