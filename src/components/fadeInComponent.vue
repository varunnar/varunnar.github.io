<template>
    <!-- Use Vue transition for handling fade-in effect -->
    <transition name="fade" @after-leave="onTransitionEnd">
      <div
        ref="fadeSection"
        :style="{ opacity: isVisible ? '1' : '0', pointerEvents: isVisible ? 'auto' : 'none' }"
        class="fade-in-section"
      >
        <slot></slot> <!-- Content goes here -->
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    name: "FadeInComponent",
    data() {
      return {
        isVisible: false,
      };
    },
    mounted() {
      // Use $nextTick to ensure the DOM is updated before observing
      this.$nextTick(() => {
        this.observeVisibility();
      });
    },
    methods: {
      observeVisibility() {
        // Use the ref instead of this.$el to ensure we're observing the actual DOM node
        const fadeSection = this.$refs.fadeSection;
  
        if (fadeSection instanceof Element) {
          console.log("Ref is a valid Element, observing now."); // Debugging log
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  console.log("Element is intersecting."); // Debugging log
                  this.isVisible = true; // Section is in view
                  observer.unobserve(fadeSection); // Stop observing after the element is visible
                }
              });
            },
            { threshold: 0 } // Trigger as soon as any part is visible
          );
  
          observer.observe(fadeSection); // Start observing the element
        } else {
          console.error("Error: Ref is not a valid Element.", fadeSection); // Debugging log
        }
      },
      onTransitionEnd() {
        console.log("Fade-in transition completed."); // Optional log for debugging
      },
    },
  };
  </script>
  
  <style scoped>
  /* Define the fade transition */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s ease-out;
  }
  
  .fade-enter,
  .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  
  .fade-in-section {
    width: 100%;
    height: auto;
    min-height: 100px;
    /* Ensure it's part of the layout even if initially hidden */
    transition: opacity 1s ease-out;
  }
  </style>
  