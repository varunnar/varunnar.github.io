<template>
    <fadeInComponent>
        <sectionContainer class="red_off_section introduction">
            <h1>Youtube Stats Analyzer</h1>
            <p>A passion project that providers users with visualizations of their youtube usage data</p>
            <div class="youtube_analysis_hero_img"></div>
            <p>Youtube Stats Analyzer is a project that aims to provide users with a visual representation of their youtube usage data.
                 The project will analyze the user's youtube data and provide them with insights on their usage patterns. 
                 The project also providers users with an A.I. generated list of recommendations based on the youtubers they watch.</p>
        </sectionContainer>
    </fadeInComponent>

    <fadeInComponent>
        <sectionContainer class="red_section purpose">
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
        <sectionContainer class="red_off_section youtubeData">
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
        <sectionContainer class="red_section D3">
            <h2>Utilizing D3.js</h2>
            <p>D3.js was my choice of visualization language. I have previously
                explored languages such as Vegalite.js heavily but wanted to work with a more robust language</p>
                <div class="img"></div>
            <p>My approach was to initially build the visualizations in Observable, 
                an online coding notebook that includes large amounts of the D3 documentation. 
                After completing the visualizations I would move them to my personal code and shift the code to React.js code.</p>
        </sectionContainer>
    </fadeInComponent>

    <fadeInComponent>
        <sectionContainer class="red_off_section react">
            <h2>React.js integration</h2>
            <p>A large portion of the development was moving both the api connection code, and visualization code to React.js. I have 
                made each visualization as a seperate component, which is not the standard way of using React, however, I wanted practice with components.</p>
            <div class="img"></div>
        </sectionContainer>
    </fadeInComponent>

    <fadeInComponent>
        <sectionContainer class="red_section visualizations">
            <h2>Visualizations</h2>
            <p>The visualizations were split around 2 types - subscribers and liked videos. While I wished to do visualization on historical data</p>
        </sectionContainer>
    </fadeInComponent>

    <fadeInComponent>
        <sectionContainer class="red_off_section AI_implementation">
            <h2>Implementing in A.I. summaries</h2>
            <p>While visualizations are powerful and can help summarize confusing masses of data, 
                they themselves can still be confusing, especially with large visualizations and interactions.
                In order to give a quick summary, I connected to the Gemini A.I. API, and allowed users to get summaries and
                 recommendations on their visualizations and each step.</p>
        </sectionContainer>
    </fadeInComponent>


    <fadeInComponent>
        <sectionContainer class="red_section next_steps">
            <h2>Next Steps</h2>
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
.section {
    text-align: left;
}
.introduction {
    text-align: center;
}
.youtube_analysis_hero_img {
    background-image: url('../assets/youtube_data_analysis/data_viz_hero_img.png');
    background-size: cover;
    background-position: center;
    width: 90%;
    aspect-ratio: 16/10;
    margin: 0 auto;
    // border-radius: 50%;
}
</style>
