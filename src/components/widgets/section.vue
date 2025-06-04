<template>
    <div class="sectionContainer">
      <slot></slot>
    </div>  
  </template>
  
  <script>
  export default {
    name: 'SectionContainer',
    // props: {
    //   backgroundColor: {
    //     type: String,
    //     Required: true
    //   },
    //   textColor: {
    //     type: String,
    //     required: true
    //   }
    // }
  }
  </script>
  
  <style lang="scss">
  .sectionContainer {
    max-width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 5%;
    padding-bottom: 5%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5%;
    margin-bottom: 5%;
    border-radius: 20px;
  }

  .sectionContainer > p {
    width: 80%;
}

@media (max-width: 768px) {
    .sectionContainer > p {
        width: 100%;
    }
}

  @media (max-width: 500px) {
    .section {
      margin: 0px;
      border-radius: 0px;
    }
  }
  </style>
  