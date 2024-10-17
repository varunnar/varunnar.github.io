<template>
    <div class="container">
        <sectionContainer class="green introduction">
            <h1>Social Grocer</h1>
            <div class="hero_img"></div>
            <p><b>Transform grocery shopping from an ordinary task to a channel for social connection with Social Grocer. 
                Connect with friends in real-time, make mindful food choices, and turn online shopping into an engaging, health-focused social adventure. </b></p>
            <!-- <slideshow>
            
            </slideshow> -->
            <h2>Members</h2>
            <ul>
                <li><p><b>Varun Narayanswamy (Designer, Lead Developer)</b></p></li>
                <li><p>Ivy Tseng (Lead Designer)</p></li>
                <li><p>Louise Lu (Lead Designer)</p></li>
                <li><p>Stevie Lemons (Lead Researcher)</p></li>
                <li><p> <b>Sponsor:</b> Steve Downs with Building H</p></li>
            </ul>
            <h2>Timeline</h2>
            <p>This project was my capstone project in the Human-Computer Interaction and Design.<b>(MHCI+D)</b>. It ran from April 2024 to August 2024 <b>(22 weeks)</b></p>
        </sectionContainer>
        <sectionContainer class="off situation">
            <h1>Situation</h1>
            <p></p>
            <h2>Who is Our Sponsor: Building H?</h2>
            <p>For our capstone project we were sponsored by Building H. Building H is a nonprofit organization that looks 
                to improve the world and environment by rating companies and informing them of areas of improvement with health, accessibility and more.
                You can learn more about them <a href="https://www.buildingh.org/"> here.</a> </p>
            <h2>Proposed Project</h2>
            <p>Building H came to us with the following proposal: <em>"In a world where the online market is the new landscape for grocery delivery, how can we transform the space to make health
                 food choices not only easier but second nature"</em></p>

        </sectionContainer>
        <sectionContainer class="green">
            <h1>Desk Research</h1>
            <p>With this proposal, we aimed to better understand the online grocery shopping space, starting with initial desk research.</p>
            <!-- <h2>Research Process</h2>
            <p>With limited instructions, and a broad space to cover each of our members researched unique areas with a <b>literature review.</b> 
                We also each reseached existing food/grocery delivery companies in a <b>competitive analysis.</b></p> -->
            <h2>Literature Review Research Areas</h2>
            <p>We conducted a literature review with 23 sources, focused on three areas: the impacts of solitary eating, 
                the connections between mental health and grocery shopping, 
                and how the online grocery experience differs from in-person shopping in relation to health.</p>
            <h3>Solitary Eating</h3>
            <rowImageText
            :images="c_zone_i"
            :text-files="c_zone_c">

            </rowImageText>
            <!-- <p>The growing trend of solitary dining, accelerated by technological advances in food delivery and limited-service restaurants,
                 is linked to less healthy eating habits and diminished mental health. 
                This shift suggests potential in encouraging individuals to see food consumption and cooking as avenues for 
                self-improvement, drawing from the benefits of communal dining.</p> -->

            <h2>Competitive Analysis</h2>
            <p>We conducted a competitive analysis of food and grocery delivery companies to understand how the current market promotes or discourages healthy habits.</p>
            <h3></h3>
        </sectionContainer>
        <sectionContainer class="off">
            <h1>Qualitative Research</h1>
            <h2>Methodology</h2>
            <h2>Participants</h2>
            <h2>Findings</h2>
        </sectionContainer>
        <sectionContainer class="green">
            <h1>Qualatitve Research</h1>
            <h2>Methodology</h2>
            <h2>Visualizations</h2>
        </sectionContainer>
        <sectionContainer class="off">
            <h1>Ideation Process</h1>
            <h2>Initial Ideation</h2>
            <h2>Going Downtown</h2>
        </sectionContainer>
        <sectionContainer class="green">
            <h1>Usability Testing</h1>
            <h2>Process</h2>
        </sectionContainer>
        <sectionContainer class="off">
            <h1>Final Ideas</h1>
            <h2>Features</h2>
            <h2>Design Documentation</h2>
            <h2>Final Video</h2>
            <h2>Final Poster</h2>
            <h2>Final Documentation</h2>
        </sectionContainer>
        <sectionContainer class="green">
            <h1>Reflections</h1>
        </sectionContainer>


    </div>
</template>

<script>
//import slideshow from '@/components/widgets/slideshow.vue';
import sectionContainer from '../components/widgets/section.vue';
import rowImageText from '../components/widgets/rowImageText.vue';

export default {
    name: 'socialGrocer',
    components: {sectionContainer, rowImageText},
    data() {
        return {
            c_zone_i:['/assets/social_grocer/sol.png', '/assets/social_grocer/thinking.png', '/assets/social_grocer/basket.png'],
            c_zone_c:['../../assets/social_grocer/lit_rev_1.html', '../../assets/social_grocer/lit_rev_2.html', '../../assets/social_grocer/lit_rev_3.html']
        }
    }

}
</script>

<style scoped>
    .green {
        background-color: #4A6846;
        color: white;
        text-align: left;
    }
    .off {
        background-color: #1E1E1E;
        color: white;
        text-align: left;
    }
    h1 {
        font-size: 50px;
    }
    .hero_img {
        background-image: url('../assets/social_grocer/hero.png');
        background-size: cover;
        width: 100%;
        aspect-ratio: 2250/1520;
        border-radius: 10px;
    }
    .introduction, .situation{
        text-align: left;
    }

</style>