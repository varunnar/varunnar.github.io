<template>
  <div v-if="showIndicator" class="scroll-indicator" @click="scrollToBottom">
    <div class="arrow-container">
      <div class="arrow"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showIndicator = ref(false);

const checkScrollable = () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  showIndicator.value = scrollHeight > clientHeight;
};

const scrollToBottom = () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;
  const newScrollPosition = currentScroll + clientHeight;
  
  window.scrollTo({
    top: newScrollPosition,
    behavior: 'smooth'
  });
};

onMounted(() => {
  checkScrollable();
  window.addEventListener('resize', checkScrollable);
  // Check again after a short delay to ensure content is loaded
  setTimeout(checkScrollable, 100);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScrollable);
});
</script>

<style scoped>
.scroll-indicator {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.scroll-indicator:hover {
  opacity: 0.8;
}

.arrow-container {
  width: 50px;
  height: 50px;
  background: #014A39;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.scroll-indicator:hover .arrow-container {
  transform: scale(1.1);
}

.arrow {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 12px solid white;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(-4px);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .scroll-indicator {
    bottom: 15px;
    right: 15px;
  }
  
  .arrow-container {
    width: 40px;
    height: 40px;
  }
  
  .arrow {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 10px solid white;
  }
}
</style> 