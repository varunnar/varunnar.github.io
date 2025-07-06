<template>
  <div class="blog-post-list">
    <!-- Remaining blog posts in 3-column grid -->

    <div class="newest-blog-section">
      <BlogPostCard
        :title="posts[posts.length - 1].title"
        :content="posts[posts.length - 1].content"
        :subtitle="posts[posts.length - 1].subtitle"
        :id="0"
        :mainPhoto="posts[posts.length - 1].mainPhoto"
        :newest_blog="true"
        @click="openModal(posts[posts.length - 1])"
        style="width: 90%; margin: auto; margin-top: 20px;"
      />
    </div>

    <div class="older-blogs-grid">
      <BlogPostCard
        v-for="(post,index) in olderPosts"
        :key="index"
        :title="post.title"
        :content="post.content"
        :subtitle="post.subtitle"
        :id="index"
        :mainPhoto="post.mainPhoto"
        :newest_blog="false"
        @click="openModal(post)"
        style="margin-bottom: 20px;"
      />
    </div>
    
    <!-- Modal -->
    <BlogTemplate
      v-if="selectedPost"
      :title="selectedPost.title"
      :content="selectedPost.content"
      :mainPhoto="selectedPost.mainPhoto"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import BlogPostCard from '@/components/widgets/blogPostCard.vue';
import BlogTemplate from '@/views/blogTemplate.vue';
import blogPosts from '@/data/blogPosts.js';
import { ref, computed } from 'vue';

const selectedPost = ref(null);

// Use the imported blog posts data
const posts = ref(blogPosts);

// Computed property to get older posts (all except the last)
const olderPosts = computed(() => {
  return posts.value.slice(0, -1);
});

const openModal = (post) => {
  selectedPost.value = post;
};

const closeModal = () => {
  selectedPost.value = null;
};
</script>

<style scoped>
.blog-post-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.newest-blog-section {
  width: 100%;
}

.older-blogs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  width: 90%;
  margin: auto;
  height: auto;
}

/* Responsive design */
@media (max-width: 1024px) {
  .older-blogs-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .older-blogs-grid {
    grid-template-columns: 1fr;
  }
}
</style>