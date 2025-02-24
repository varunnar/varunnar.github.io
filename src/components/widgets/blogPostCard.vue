<template>
    <router-link :to="{ name: 'blog-post', params: {id: id }, query: {title: title, content: content} }" class="blog-post-card">
      <h2>{{ title }}</h2>
    </router-link>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  //const emits = defineEmits(['postSelected']);

  defineProps({
    title: {
      type: String,
      required: true,
    },
    content: {
        type: String,
        required: true
    },
    id: {
      type: Number,
      required: true,
    },
  });

  </script>
  
  <style scoped>
  .blog-post-card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 200px;
    background-color: #f0f0f0;
    border-radius: 8px;
    text-decoration: none;
    color: #333;
    transition: background-color 0.3s ease;
  }
  
  .blog-post-card:hover {
    background-color: #e0e0e0;
  }
  </style>