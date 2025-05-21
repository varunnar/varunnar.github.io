<template>
    <fadeInComponent>
        <sectionContainer class="red_off_section introduction">
            <h1>Youtube Stats Analyzer</h1>
            <p>A passion project that providers users with visualizations of their youtube usage data</p>
            <div class="youtube_analysis_hero_img"></div>
            <p>YouTube Stats Analyzer is a project that provides users with a visual representation of their YouTube usage data. 
   It analyzes this data to deliver insights into viewing patterns and offers an AI-generated list of recommendations based on the channels they watch.</p>

        </sectionContainer>
    </fadeInComponent>

    <fadeInComponent>
        <sectionContainer class="red_section purpose">
            <h2>Purposes and Technologies Used</h2>
            <p>I approached this project to learn more about the following technologies and frameworks</p>
            <div class="grid_3fr_1fr">
                <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                    <h3>Youtube Data API</h3> 
                    <!-- <imageObject src="/src/assets/youtube_data_analysis/google_cloud.png" w="200px" alt="logo for Google Cloud API - a rainbow cloud logo"></imageObject> -->
                    <div role="image" class="language_img youtube_img" alt="logo for Google Cloud API - a rainbow cloud logo"></div>
                    <p>Learn how to use the a google Cloud API to access user data</p>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                    <h3>D3.js</h3>
                    <div role="image" class="language_img d3_img" alt="logo for D3 visualization - an orange D and 3"></div>
                    <p>Learn how to use D3.js to create visualizations</p>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                    <h3>React.js</h3>
                    <div role="image" class="language_img react_img" alt="logo for react native - a baby blue neutron shape"></div>
                    <p>Learn how to use React.js to create a web application</p>
                </div>
            </div>
        </sectionContainer>
    </fadeInComponent>

    <fadeInComponent>
        <sectionContainer class="red_off_section youtubeData">
            <h2>Investigating Google Youtube Data API</h2>
            <div class="grid_4fr_2fr_1fr" style="margin-bottom: 50px;">
            <p>The first step in building my webpage was finding the core of any visualization — <b>Data!</b> 
                I wanted something <b>personal</b> to each user for a more engaging experience. 
                I chose to use Google’s YouTube API, allowing users to log in and receive custom visualizations. 
                As a regular YouTube user, I believed my own data would reflect patterns others could relate to.</p>
            <img src="../assets/youtube_data_analysis/youtubeGoogleCloud.png" style="width: 100%; height: auto; border-radius: 5px;"/>
            </div>
\                <p>After familiarizing myself with the platform, I needed to understand <b>how to collect my data.</b> The data I had access to would determine the types of 
                visualizations I could create. I used the following API routes to collect two different data samples to build the visualizations - the users <b>most recent subscriptions</b> (people they had subscribed to), and their <b>liked recent videos.</b></p>
                <img src="../assets/youtube_data_analysis/youtubeAPIRoutes.png" style="width: 100%; height: auto; border-radius: 5px;"/>
        </sectionContainer>
    </fadeInComponent>


    <fadeInComponent>
        <sectionContainer class="red_section D3">
            <div class="grid_4fr_2fr_1fr">
                <div style="margin-top: auto; margin-bottom: auto;">
                <h2>Utilizing D3.js</h2>
                <p>D3.js was my choice of visualization language. I have previously
                    explored languages such as Vegalite.js heavily but wanted to work with a more something more robust that provided new form factors for visualizations and more control.</p>
                <p>My approach was to initially build the visualizations in <b>ObservableHQ</b>, 
                    an online coding notebook that includes large amounts of the D3 documentation. 
                    After completing the visualizations I would move them to my personal code and shift the code to React.js code.</p>
                <a href="https://observablehq.com/d/0c68fa0ca8d0ba94" style="color: pink;"><p>Link to Observable</p></a>
                </div>
                <img src="../assets/youtube_data_analysis/observableHQ.png" width="100%" height="100%">
                <!-- <div role="image" class="observableHQ" alt="Image of observableHQ world map visualization and code alongside it."></div> -->
            </div>
        </sectionContainer>
    </fadeInComponent>

    <fadeInComponent>
        <sectionContainer class="red_off_section react">
            <h2>React.js D3 integration</h2>
            <p>After completing the visualizations within observable, I needed to make sure they worked with a react webpage. The following were steps that were needed to take.</p>
            <slideshow
                folderPath="/assets/youtubeDataViz/code"
                fileType="png"
                :numberOfImages="3"
                :autoPlay="false"
                :headerArray="['Code to Initialize Google Sign In', 'Functions for Fetching Youtube Information', 'Components for each Visualization']"
                :bottomControls="false"
                :textBottom="false"
            ></slideshow>
        </sectionContainer>
    </fadeInComponent>

    <fadeInComponent>
        <sectionContainer class="red_section visualizations">
            <div class="flex_spacing_SB">
                <div style="margin-top: auto; margin-bottom: auto;">
                    <h1>Visualizations</h1>
                </div>
                <slideshow style="max-width: 50%;"
                    folderPath="/assets/youtubeDataViz/viz"
                    fileType="png"
                    :numberOfImages="5"
                    buttonColor="#5B0000"
                    :headerArray="['Subscribed Channel Tag Bubble Chart', 'Subscribed Channel Tag Chord Graph', 'Subscribed Channel World Map', 'Liked Video Categories over Time', 'Most liked channels']"
                    :bodyArray="[
                        'A bubble chart shows the most common tags across the top 50 subscribed channels, with color indicating frequency.',
                        'This graph links top channels by shared tags to highlight connections between your subscriptions.',
                        'A world map displays where your most subscribed channels are located, with zoomable clusters for clarity.',
                        'This timeline groups your liked videos by category to show how your interests have changed over time.',
                        'A block chart highlights your most liked channels, using size and color to represent preference.'
                        ]"
                    >
                </slideshow> 
            </div>
            <!-- <div class="flex_spacing_SA" style="gap: 20">
                <img class="visualization_image" src="../../public/assets/youtubeDataViz/viz_0.png"/>
                <img class="visualization_image" src="../../public/assets/youtubeDataViz/viz_1.png"/>
                <img class="visualization_image" src="../../public/assets/youtubeDataViz/viz_2.png"/>
                <img class="visualization_image" src="../../public/assets/youtubeDataViz/viz_3.png"/>
                <img class="visualization_image" src="../../public/assets/youtubeDataViz/viz_4.png"/>
            </div> -->
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
            <div class="grid_3fr_1fr">
                <ReflectionItem
                    title="Youtube History Inclusion"
                    description="Using liked videos and subscriptions is valuable, but for more casual youtube users, historical video visualizations is more interesting and relevent. The Google Cloud API does not provide an endpoint for this, but I hope to investigate it more"
                    icon="/assets/youtubeDataViz/ref_1.png"
                    backgroundColor="#000000"
                ></ReflectionItem>

                <ReflectionItem
                    title="Backend Microservices"
                    description="The current frontend collects both the YouTube and AI data directly. However, in traditional use cases, this task would instead be completed by a backend. I hope to create two microservices, one for AI and one for Google Cloud."
                    icon="/assets/youtubeDataViz/ref_2.png"
                    backgroundColor="#000000"
                ></ReflectionItem>

                <ReflectionItem
                    title="Publish Webpage Officially"
                    description="After collecting the necessary data, and further building out the architecture, I hope to publish this webpage. This would include defining a domain for the frontend and backend, allowing all emails on Google Cloud API, and considering more robust token usage."
                    icon="/assets/youtubeDataViz/ref_3.png"
                    backgroundColor="#000000"
                ></ReflectionItem>
            </div>
        </sectionContainer>
    </fadeInComponent>
    
</template>

<script>
import slideshow from '@/components/widgets/slideshow.vue'
import ReflectionItem from '@/components/widgets/reflectionItem.vue';

export default {
  components: { slideshow, ReflectionItem },
   name: 'YoutubeDataAnalysis',
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

.language_img {
    background-size: contain;
    background-repeat: no-repeat;
    width: 200px;
    aspect-ratio: 1/1;
}

.visualization_image {
    width: 30%;
    aspect-ratio: 1/1 auto;
}

.youtube_img {
    background-image: url('/src/assets/youtube_data_analysis/google_cloud.png');
}

.react_img {
    background-image: url('/src/assets/youtube_data_analysis/react_logo.png');
}

.d3_img {
    background-image: url('/src/assets/youtube_data_analysis/d3.png');
}

.observableHQ {
    background-image: url('/src/assets/youtube_data_analysis/observableHQ.png');
    width: 100%;
    aspect-ratio: 1/1;
    background-size: contain;
    background-repeat: no-repeat;
    margin: auto;
    border-radius: 10px;
}

p b {
    font-weight: 900;
}
</style>
