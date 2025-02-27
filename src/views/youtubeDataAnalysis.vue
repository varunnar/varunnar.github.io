<template>
    <fadeInComponent>
        <sectionContainer class="introduction">
            <h1>Youtube Stats Analyzer</h1>
            <p>A passion project that providers users with visualizations of their youtube usage data</p>
            <p>Youtube Stats Analyzer is a project that aims to provide users with a visual representation of their youtube usage data.
                 The project will analyze the user's youtube data and provide them with insights on their usage patterns. 
                 The project also providers users with an A.I. generated list of recommendations based on the youtubers they watch.</p>
        </sectionContainer>
    </fadeInComponent>

    <fadeInComponent>
        <sectionContainer class="purpose">
            <h2>Purpose</h2>
            <p>I approached this project to learn more about the following technologies and framworks</p>
            <div class="grid_3fr_1fr">
                <div>
                    <h3>Youtube Data API</h3>
                    <p>Learn how to use the Youtube Data API to access user data</p>
                </div>
                <div>
                    <h3>D3.js</h3>
                    <p>Learn how to use D3.js to create visualizations</p>
                </div>
                <div>
                    <h3>React.js</h3>
                    <p>Learn how to use React.js to create a web application</p>
                </div>
            </div>
        </sectionContainer>
    </fadeInComponent>

    <fadeInComponent>
        <sectionContainer class="youtubeData">
            <h2>Investigating Google Youtube Data API</h2>
            <p>My first step in building out my webpage was finding the core of any visualization - <b>Data!</b> 
                Finding interesting and usable data to build off of was key to my visualizations. 
                I wanted data that was <b>personal</b> to each person, so as to make a more engaging experience. 
                After some time I chose to collect data from Google's Youtube API - building in code to allow the 
                user to login themselves and recieve custom visualizations based on their data</p>
            <div class="img"></div>
        </sectionContainer>
    </fadeInComponent>


    <fadeInComponent>
        <sectionContainer class="D3">

        </sectionContainer>
    </fadeInComponent>

    <fadeInComponent>
        <sectionContainer class="react">

        </sectionContainer>
    </fadeInComponent>


    <fadeInComponent>
        <sectionContainer class="AI_implementation">

        </sectionContainer>
    </fadeInComponent>

    <fadeInComponent>
        <sectionContainer class="visualizations">

        </sectionContainer>
    </fadeInComponent>

    <fadeInComponent>
        <sectionContainer class="next_steps">

        </sectionContainer>
    </fadeInComponent>
    
</template>

<script>

//import slideshow from '../components/widgets/slideshow.vue';
import sectionContainer from '../components/widgets/section.vue';
import fadeInComponent from '@/components/fadeInComponent.vue';

export default {
   name: 'YoutubeDataAnalysis',
   components: {
   sectionContainer, fadeInComponent
   },
   data() {
     return {
     }
   },
   methods: {
   }
}
</script>

<style scoped lang="scss">
</style>
