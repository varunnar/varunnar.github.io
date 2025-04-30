import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import imageObject from './components/imageObject.vue';
import slideshow from '@/components/widgets/slideshow.vue';
import sectionContainer from '@/components/widgets/section.vue';
import fadeInComponent from '@/components/fadeInComponent.vue';


const app = createApp(App);
app
    .component('imageObject', imageObject)
    .component('slideshow', slideshow)
    .component('sectionContainer', sectionContainer)
    .component('fadeInComponent', fadeInComponent);
app.use(store).use(router).use(autoAnimatePlugin).mount('#app');
