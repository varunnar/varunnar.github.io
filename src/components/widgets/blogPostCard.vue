<template>
  <div class="blog-post-card" @click="$emit('click')">
    <div class="image-container">
      <div class="photo" :style="{ backgroundImage: `url(${mainPhoto})` }"></div>
      <div :class="{ 'text-overlay': newest_blog }">
        <h2 v-if="newest_blog" class="title">{{ title }}</h2>
        <h4 v-if="!newest_blog" class="title">{{ title }}</h4>
        <p class="sub" :class="{'sub_small': !newest_blog}">{{ subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
      type: String,
      required: true
  },
  subtitle: {
      type: String,
      required: true
  },
  id: {
    type: Number,
    required: true,
  },
  mainPhoto: {
    type: String,
    required: true
  },
  newest_blog: {
    type: Boolean,
    default: false
  }
});

defineEmits(['click']);
</script>

<style scoped>
.blog-post-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 200px;
  background-color: #e7e7e7;
  border-radius: 8px;
  text-decoration: none;
  color: #000000;
  transition: background-color 0.3s ease;
  cursor: pointer;
  overflow: visible;
  text-align: left;
}

.blog-post-card:hover {
  background-color: rgba(39, 66, 44, 1);
  color: white;
}

.blog-post-card:hover .photo {
  filter: brightness(0.8);
}

.blog-post-card:hover .text-overlay {
  background-color: rgb(255, 255, 255);
  color: rgba(39, 66, 44, 1);
}

.image-container {
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 8px;
  overflow: visible;
}

.photo {
  width: 100%;
  aspect-ratio: 4/2;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 20px;
  width: 40%;
  height: 60%;
  background-color: rgba(39, 66, 44, .8);
  color: white;
  backdrop-filter: blur(5px);
  padding: 15px;
  transform: translateY(-50%);
  text-align: left;
}

.title {
  margin: 0;
  font-weight: 600;
  line-height: 1.4;
}

.sub {
  text-align: left;
  width: 100%;
  height: 90%;
  margin: 0;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  /* display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical; */
}

.sub_small {
  font-size: 16px;
}

/* Responsive design */
@media (max-width: 768px) {
  .photo {
    height: 150px;
  }
  
  .text-overlay {
    padding: 10px;
  }
  
  .title {
    font-size: 1rem;
  }
}
</style>