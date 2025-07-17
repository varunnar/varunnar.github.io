<template>
  <div class="object">
    <!-- Display the row of image+header tabs -->
    <div v-if="images && header" class="tab-row">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="tab-item"
        :class="{ 'selected-tab': !unclickedState[index] }"
        @click="handleContentFetch(index)"
      >
        <img
          :src="image"
          :alt="'Image ' + index"
          :style="`max-width: ${imageSize}; width: 20%; flex: 1;`"
          class="image"
        />
        <h2 v-text="header[index]" class="tab-header"></h2>
      </div>
    </div>
    <!-- Fallback: Only images or only headers -->
    <div v-else-if="images" class="tab-row">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="tab-item"
        :class="{ 'selected-tab': !unclickedState[index] }"
        @click="handleContentFetch(index)"
      >
        <img
          :src="image"
          :alt="'Image ' + index"
          :style="`max-width: ${imageSize}; flex: 1;`"
          class="image"
        />
      </div>
    </div>
    <div v-else-if="header" class="tab-row">
      <div
        v-for="(headerText, index) in header"
        :key="headerText"
        class="tab-item"
        :class="{ 'selected-tab': !unclickedState[index] }"
        @click="handleContentFetch(index)"
      >
        <h2 v-text="headerText" class="tab-header"></h2>
      </div>
    </div>
    <!-- Display the fetched HTML content -->
    <Transition name="slide-fade">
      <div v-if="showContent" class="content-display" v-html="content" :style="{backgroundColor: b_c, color: f_c}"></div>
    </Transition>
  </div>
</template>
<script>
export default {
  name: 'rowPicker',
  props: {
    images: {
      type: Array,
      required: false,
    },
    imageSize: {
      type: String,
      default: "75px"
    },
    header: {
      type: Array,
      required: false,
    },
    textFiles: {
      type: Array,
      required: true,
    },
    b_c: {
      type: String,
      default: '#000000'
    },
    f_c: {
      type: String,
      default: '#FFFFFF'
    }
  },
  data() {
    return {
      content: '', // Holds the HTML content to be displayed
      showContent: true,
      unclickedState: this.images ? this.images.map(() => true) : (this.header ? this.header.map(() => true) : []),
    };
  },
  mounted() {
    this.fetchContent(0);
    this.unclickedState[0] = false;
  },
  methods: {
    async fetchContent(index) {
      if (this.textFiles[index]) {
        try {
          const response = await fetch(this.textFiles[index]);
          if (!response.ok) throw new Error("Failed to load content");
          const text = await response.text();
          this.content = text;
        } catch (error) {
          console.error("Error loading content:", error);
          this.content = "<p>Error loading content</p>";
        }
      }
    },
    handleContentFetch(index) {
      this.toggleInvert(index);
      this.fetchContent(index);
      this.showContent = false; // Hide content first to re-trigger v-if
      this.$nextTick(() => {
        this.showContent = true; // Show content after content is fetched
      });
    },
    toggleInvert(index) {
      this.unclickedState = this.unclickedState.map(() => true);
      this.unclickedState[index] = false;
    },
  },
};
</script>

<style scoped>
.object {
  width: 100%;
}
.tab-row {
  display: flex;
  gap: 40px;
  width: 100%;
  justify-content: flex-start;
  margin: auto;
}
.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 24px 8px 24px;
  border-radius: 16px 16px 0 0;
  background: #1a1a1a;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  position: relative;
  min-width: 120px;
}
.tab-item .image {
  cursor: pointer;
  flex: 1 1 0;
  height: auto;
  object-fit: contain;
  padding: 10px;
  border-radius: 10px;
  transition: filter 0.2s;
}
.tab-header {
  margin-top: 8px;
  font-size: 1.1em;
  text-align: center;
}
.tab-item:not(.selected-tab) .image {
  filter: brightness(0.4);
}
.selected-tab {
  background: #000000;
  box-shadow: 0 -2px 12px 0 rgba(0,0,0,0.08), 0 2px 8px 0 rgba(0,0,0,0.04);
  border: 2px solid #bbb;
  border-bottom: 2px solid #000000;
  z-index: 2;
}
.selected-tab .image {
  filter: brightness(1);
}
.selected-tab .tab-header {
  font-weight: bold;
}
.content-display {
  padding: 20px;
  border: 1px solid #999;
  position: relative;
  z-index: 1;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  /* transform: translateX(-20px); */
  opacity: 0;
}
</style>
  