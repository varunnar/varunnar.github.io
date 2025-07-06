<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <div class="modal-header">
        <button class="close-button" @click="closeModal">&times;</button>
      </div>
      <div class="blog-post">
        <h1 class="title">{{ title }}</h1>
        <img :src="mainPhoto" :alt="title" class="photo">
        <div class="content_obj" v-for="(htmlContent, index) in sanitizedContent" :key="index">
          <fadeInComponent>
              <div class="content" v-html="htmlContent"></div>
          </fadeInComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed, getCurrentInstance } from 'vue';


const { emit } = getCurrentInstance();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: Array,
    required: true,
  },
  mainPhoto: {
    type: String,
    required: true
  }
});

const sanitizedContent = computed(() => {
  console.log('props.content:', props.content); // Debugging line
  // Return the content array directly, don't wrap it in another array
  return props.content;
});

const closeModal = () => {
  emit('close');
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.modal-content {
  background-color: #000000;
  border-radius: 30px;
  max-width: 90%;
  max-height: 90%;
  position: relative;
  overflow: hidden;
}

.modal-header {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1001;
  padding: 20px;
}

.close-button {
  background: none;
  border: none;
  color: rgb(0, 0, 0);
  font-size: 2rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.blog-post {
  padding: 10px;
  background-color: #ffffff;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 30px;
  padding-left: 10%;
  padding-right: 10%;
}

.photo {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 20px;
  margin: 20px 0;
}

.content_obj {
  height: auto;
  text-align: left;
  color: black;
}

.green-section {
  background-color: #091C00;
  color: white;
  margin: 10px;
  padding: 20px;
  border-radius: 15px;
}

.white-section {
  background-color: white;
  color: black;
  margin: 10px;
  padding: 20px;
  border-radius: 15px;
}

.title {
  margin: 3rem;
  text-align: left;
}

/* Custom scrollbar for the modal */
.blog-post::-webkit-scrollbar {
  width: 8px;
}

.blog-post::-webkit-scrollbar-track {
  background: #333;
  border-radius: 4px;
}

.blog-post::-webkit-scrollbar-thumb {
  background: #666;
  border-radius: 4px;
}

.blog-post::-webkit-scrollbar-thumb:hover {
  background: #999;
}

/* Responsive design */
@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    max-height: 95%;
  }
  
  .blog-post {
    padding: 5px;
  }
  
  .title {
    margin: 2rem 1rem;
    font-size: 1.5rem;
  }
  
  .green-section,
  .white-section {
    margin: 5px;
    padding: 15px;
  }
}
</style>