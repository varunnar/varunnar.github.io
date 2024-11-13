<template>
    <div class="section">
      <slot></slot>
    </div>   
  </template>
  
  <script>
  export default {
    name: 'SectionContainer'
  }
  </script>
  
  <style scoped>
  .section {
    max-width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 5%;
    padding-bottom: 5%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5%;
    margin-bottom: 5%;
    border-radius: 20px;
  }

  @media (max-width: 500px) {
    .section {
      margin: 0px;
      border-radius: 0px;
    }
  }
  </style>
  