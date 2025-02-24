<template>
    <div class=" -post-list">
      <BlogPostCard
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :content="post.content"
        :id="post.id"
      />
    </div>
  </template>
  
  <script setup>
  import BlogPostCard from '@/components/widgets/blogPostCard.vue';
  import { ref } from 'vue';
  
//   const posts = ref([
//   { id: 1, title: 'first Blog Post', content: [{type: 'paragraph', value: 'This is the first paragraph of first blog post.'}, {type: 'paragraph', value: 'This is the second paragraph of first blog post.'}] },
//   { id: 2, title: 'Another Blog Post', content: [{type: 'paragraph', value: 'This is the first paragraph of another blog post.'}, {type: 'paragraph', value: 'This is the second paragraph of another blog post.'}] },
//   { id: 3, title: 'A Third Blog Post', content: [{type: 'paragraph', value: 'This is the first paragraph of a third blog post.'}, {type: 'paragraph', value: 'This is the second paragraph of a third blog post.'}] },
// ]);

const posts = ref([
  { id: 1, title: 'Why Am I Starting a Blog (also how did I do it)?', content: [
      `<div><p>Now you might be wondering why you are reading this. In response my answer is simple - I have no idea.</p></div>
      <p>Now don't leave! I just am not really sure what this is yet. I have felt that I was blogger. Nor am I such a master of engineering that I suspect that you feel like you really need to come here to learn - at least not yet. I'm just a 26 year old guy trying to understand a volatile and confusing tech world. Things are changing so fast. In fact I doubt I fully comprehend how fast things are changing. And as AI breaks through and changes every single field and job title, I am just trying to document my experience with it. Whether thousands of people read this, or it's just me looking back on myself, I want to try and capture my understanding of it. In all honestly this blog exists for 3 reasons.</p>
         <h3>1. I want to keep a documentation of my projects, thoughts and journeys</h3>
         <p>as not only an engineer and a designer,
             I know one of the most important part of having a good case study is documenting it. I am famously awful at this - so this blog serves as an excuse to constantly take pictures, screenshots and to explain my process</p>
          <h3>2. I want to make an impact on my community that is truly human</h3><p>In a world that is so tech oriented, with A.I. bots writing the essays of high schoolers around the globe, I want to contribute more than just skills - 
            I want to contribute my personality, my terrible jokes and more. Again nobody might read this - but if you are still reading I hope that what my blogs say reminds you that behind the tech mask our society wears we're all just a bunch
             of human nerds trying to figure it out (and if you aren't a nerd shame on you! Find something to nerd about it's fun!)</p>
          <h3>I don't have a job and this is kind of fun</h3>
          <p>Okay now I know you definitely jumped off! But it's true! I am currently in an incredibly rough job market,
             and doing projects like this provides structure to my day. Sue me for wanting to do something creative and fun after 250 apps.</p>
        <img src="example.jpg" alt="Example image">`,
    ], }]);
  </script>
  
  <style scoped>
  .blog-post-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  </style>