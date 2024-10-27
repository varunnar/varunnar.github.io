<template>
    <div class="parent">
     <div class="button_t_b">
      <div class="text_container">
        <Transition name="fade">
          <div class="text_visibility_container" v-if="textVisible">
            <slot name="button-text"><em><b>See for more information</b></em></slot>
          </div>
      </Transition>
    </div>
      <button class="overlap-button" @click="toggleSection()">
        <slot name="button-content">ℹ️</slot> <!-- Slot for custom button content -->
      </button>
    </div>
      <div class="content">
        <slot name="custom-content"></slot> <!-- Slot for custom content -->
      </div>
      <div v-if="isSectionVisible" class="extra_section">
      <slot name="extra-section" class="extra_section_obj">This is the extra section content!</slot>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OverlappingButton',
    data() {
        return {
            isSectionVisible: false,
            textVisible: true,
        }
    }, 
    mounted() {
    // Toggle visibility every 2 seconds (2000ms)
      this.interval = setInterval(() => {
        this.textVisible = !this.textVisible;
      }, 2000);
    },
    beforeUnmount() {
      // Clear interval when component is destroyed
      clearInterval(this.interval);
    },
    methods: {
        toggleSection() {
        this.isSectionVisible = !this.isSectionVisible;  // Toggle section visibility
        }
    }
  };
  </script>
  
  <style scoped>
  .parent {
    position: relative;
  }

  .text_container {
    width: 100%;
  }

  .button_t_b {
    position: absolute;
    right: 20px;
    top: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px
  }


  /* .fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter, .fade-leave-to  {
  opacity: 0;
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

  @media (max-width: 1050px) {
    .button_t_b {
        position: relative;
        right: 0px;
        top: 0px;
        margin-bottom: 20px;
        flex-direction: row;
    }
  }

  .extra_section {
    position: absolute;
    right: 20px;
    top: 60px;
    border-radius: 20px;
    border: dashed black;
    padding: 10px;
    background-color: rgb(240, 240, 240);
    width: 40%;
  }

  @media (max-width: 500px) {
    .extra_section {
        position: absolute;
        left: 0px;
        top: 40px;
        width: 100%;
    }
  }

  /* .overlap-button {
    position: absolute;
    top: 20px;
    right: 20px;
  } */
  </style>
  