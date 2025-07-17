<template>
  <div class="custom-image-wrapper" :style="wrapperStyle">
    <img
      :src="src"
      :alt="alt"
      class="custom-image"
      :style="imageStyle"
      @click="fullscreenEnabled ? openModal() : null"
    />
    <button
      v-if="fullscreenEnabled"
      class="fullscreen-btn"
      @click="openModal"
      aria-label="View fullscreen"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
      </svg>
    </button>
    <slot />
    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <img :src="src" :alt="alt" class="modal-image" :style="modalImageStyle"
          @mousedown="startDrag"
          @touchstart="startDrag"
          draggable="false"
        />
        <button class="close-btn" @click="closeModal" aria-label="Close fullscreen">&times;</button>
        <div class="zoom-controls">
          <button @click="zoomOut" aria-label="Zoom out" class="zoom-btn">-</button>
          <span class="zoom-level">{{ (zoom * 100).toFixed(0) }}%</span>
          <button @click="zoomIn" aria-label="Zoom in" class="zoom-btn">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomImage',
  props: {
    src: { type: String, required: true },
    alt: { type: String, default: '' },
    width: { type: [String, Number], default: undefined },
    height: { type: [String, Number], default: undefined },
    aspectRatio: { type: String, default: undefined },
    fullscreenEnabled: { type: Boolean, default: true },
  },
  data() {
    return {
      isModalOpen: false,
      zoom: 1,
      panX: 0,
      panY: 0,
      isDragging: false,
      dragStartX: 0,
      dragStartY: 0,
      lastPanX: 0,
      lastPanY: 0
    };
  },
  computed: {
    wrapperStyle() {
      let style = {};
      if (this.width) style.width = typeof this.width === 'number' ? this.width + 'px' : this.width;
      if (this.height) style.height = typeof this.height === 'number' ? this.height + 'px' : this.height;
      if (this.aspectRatio) style.aspectRatio = this.aspectRatio;
      return style;
    },
    imageStyle() {
      let style = { display: 'block', width: '100%', height: '100%', objectFit: 'contain' };
      if (this.aspectRatio && !this.height) style.height = 'auto';
      return style;
    },
    modalImageStyle() {
      return {
        maxWidth: '100%',
        maxHeight: '80vh',
        borderRadius: '8px',
        boxShadow: '0 4px 32px rgba(0,0,0,0.4)',
        transform: `scale(${this.zoom}) translate(${this.panX}px, ${this.panY}px)` ,
        transition: this.isDragging ? 'none' : 'transform 0.2s',
        cursor: this.zoom > 1 ? (this.isDragging ? 'grabbing' : 'grab') : 'default',
        display: 'block',
      };
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
      this.zoom = 1;
      this.panX = 0;
      this.panY = 0;
      this.lastPanX = 0;
      this.lastPanY = 0;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.isModalOpen = false;
      this.zoom = 1;
      this.panX = 0;
      this.panY = 0;
      this.lastPanX = 0;
      this.lastPanY = 0;
      document.body.style.overflow = '';
    },
    zoomIn() {
      if (this.zoom < 5) {
        this.zoom += 0.2;
        this.$nextTick(() => {
          if (this.zoom === 1) {
            this.panX = 0;
            this.panY = 0;
            this.lastPanX = 0;
            this.lastPanY = 0;
          }
        });
      }
    },
    zoomOut() {
      if (this.zoom > 0.4) {
        this.zoom -= 0.2;
        if (this.zoom <= 1) {
          this.panX = 0;
          this.panY = 0;
          this.lastPanX = 0;
          this.lastPanY = 0;
        }
      }
    },
    startDrag(e) {
      if (this.zoom <= 1) return;
      this.isDragging = true;
      this.dragStartX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
      this.dragStartY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('mouseup', this.endDrag);
      document.addEventListener('touchmove', this.onDrag);
      document.addEventListener('touchend', this.endDrag);
    },
    onDrag(e) {
      if (!this.isDragging) return;
      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;
      this.panX = this.lastPanX + (clientX - this.dragStartX);
      this.panY = this.lastPanY + (clientY - this.dragStartY);
    },
    endDrag() {
      this.isDragging = false;
      this.lastPanX = this.panX;
      this.lastPanY = this.panY;
      document.removeEventListener('mousemove', this.onDrag);
      document.removeEventListener('mouseup', this.endDrag);
      document.removeEventListener('touchmove', this.onDrag);
      document.removeEventListener('touchend', this.endDrag);
    }
  }
}
</script>

<style scoped>
.custom-image-wrapper {
  position: relative;
  display: inline-block;
  max-width: 100%;
}
.custom-image {
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: box-shadow 0.2s;
}
.custom-image:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.16);
}
.fullscreen-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0,0,0,0.5);
  border: none;
  border-radius: 50%;
  color: #fff;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
}
.fullscreen-btn:hover {
  background: rgba(0,0,0,0.7);
}
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 8px;
  padding: 32px 32px 24px 32px;
  box-sizing: border-box;
  overflow: hidden;
}
.modal-image {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 8px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.4);
  display: block;
}
.close-btn {
  position: absolute;
  top: 0px;
  right: 0px;
  background: none;
  border: none;
  color: #111;
  font-size: 2rem;
  cursor: pointer;
  z-index: 2;
  padding: 0 8px;
}
.zoom-controls {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  background: rgba(0,0,0,0.5);
  border-radius: 20px;
  padding: 4px 12px;
  z-index: 3;
}
.zoom-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin: 0 8px;
  border-radius: 50%;
  transition: background 0.2s;
}
.zoom-btn:hover {
  background: rgba(255,255,255,0.15);
}
.zoom-level {
  color: #fff;
  font-size: 1rem;
  min-width: 48px;
  text-align: center;
}
</style> 