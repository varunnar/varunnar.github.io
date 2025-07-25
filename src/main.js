import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import imageObject from './components/imageObject.vue';
import slideshow from '@/components/widgets/slideshow.vue';
import sectionContainer from '@/components/widgets/section.vue';
import projectDetails from '@/components/widgets/projectDetails.vue';
import fadeInComponent from '@/components/fadeInComponent.vue';
import CustomImage from './components/widgets/CustomImage.vue';


const app = createApp(App);
app
    .component('imageObject', imageObject)
    .component('slideshow', slideshow)
    .component('sectionContainer', sectionContainer)
    .component('projectDetails', projectDetails)
    .component('fadeInComponent', fadeInComponent)
    .component('CustomImage', CustomImage);
app.use(store).use(router).use(autoAnimatePlugin).mount('#app');
