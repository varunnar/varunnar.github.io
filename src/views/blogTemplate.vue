<template>
  <div class="blog-post">
    <h1 class="title">{{ title }}</h1>
    <div class="content_obj" v-for="(htmlContent, index) in sanitizedContent" :key="index" v-html="htmlContent"></div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: Array,
    required: true,
  },
});

const sanitizedContent = computed(() => {
  console.log('props.content:', props.content); // Debugging line
  // Split the content by a delimiter if needed, or wrap it in an array
  return [props.content];
});
</script>

<style scoped>
.blog-post {
  /* margin-bottom: 2rem;
  margin-right: 10rem;
  margin-left: 10rem;
  margin-top: 5rem; */
  padding: 10px;
  background-color: #f0f0f0;
  /* padding-left: 20rem;
  padding-right: 20rem; */
  width: 70%;
  margin: auto;
  border-radius: 30px;
  font-family: Geneva sans-serif;
}
.content_obj {
  height: auto;
  text-align: left;
  /* min-height: 200px; */
}
.title {
  margin: 3rem;
}
</style>