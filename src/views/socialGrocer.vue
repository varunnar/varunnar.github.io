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
                <p>After completing our desk research, we conducted qualitative research, using the findings to refine our target population. </p>
            <h2>Research Question</h2>    
                <p>Our Research Question: How do young working professionals living and dining alone make decisions
                    when ordering groceries online?</p>
            <h2>Participant Requirements</h2>
            <h2>Methodology</h2>
                <p>We used a number of different methodologies we can be seen below</p>
                <div class="display_grid">
                    <div class="method">
                        <img src="../assets/social_grocer/semi_structure_int.png"/>
                        <p style="color: yellow">1</p>
                        <h3>Semi-Structed Interview + Concept Map</h3>
                        <p>Focused on online grocery shopping</p>
                    </div>
                    <div class="method">
                        <img src="../assets/social_grocer/cong_walkthrough.png"/>
                        <p style="color: yellow">2</p>
                        <h3>Cognitive Walkthrough</h3>
                        <p>Focused on online grocery shopping</p>
                    </div>
                    <div class="method">
                        <img src="../assets/social_grocer/contextual_inquiry.png"/>
                        <p style="color: yellow">3</p>
                        <h3>Contextual Inquiry</h3>
                        <p>In-Store Grocery Shopping</p>
                    </div>
                </div> 
            <h2>Findings</h2>
            <!-- <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108.95 122.88"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>digital-online-media</title><path class="cls-1" d="M35.48,0H79.61A13.28,13.28,0,0,1,92.88,13.28V39.85H88.29V13.15H26.78v4.5H22.2V13.26A13.25,13.25,0,0,1,35.48,0ZM20.6,40.08l9.12,6.36a1.42,1.42,0,0,1,.42.39,1.36,1.36,0,0,1-.35,1.9L20.69,55a1.39,1.39,0,0,1-.87.3A1.37,1.37,0,0,1,18.45,54V41.19a1.43,1.43,0,0,1,.26-.78,1.36,1.36,0,0,1,1.89-.33ZM5,25.67H43.89a5,5,0,0,1,3.5,1.45l.09.1a4.92,4.92,0,0,1,1.37,3.41V58.84a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V30.63a5,5,0,0,1,5-5Zm41.22,8.41H2.66V58.84A2.32,2.32,0,0,0,5,61.15H43.89a2.29,2.29,0,0,0,2.3-2.31V34.08Zm37,53-9.59,9.19a1.48,1.48,0,0,1-1.13.51A1.52,1.52,0,0,1,71,95.25V87.07H65.92A3.93,3.93,0,0,1,62,83.18V53.34a3.93,3.93,0,0,1,3.89-3.89h39.14A3.91,3.91,0,0,1,109,53.34V83.18a3.91,3.91,0,0,1-3.89,3.89Zm-10.12-12a2,2,0,1,1,0-4h21a2,2,0,1,1,0,4Zm0-10.63a2,2,0,0,1,0-4H98.83a2,2,0,0,1,0,4Zm19.77,31V109.6a13.28,13.28,0,0,1-13.27,13.28H35.48A13.28,13.28,0,0,1,22.2,109.6V71.83h4.58v32.61H88.29v-9ZM57.52,108.6a5.46,5.46,0,1,1-5.46,5.45,5.44,5.44,0,0,1,5.46-5.45Z"/></svg> -->
            <rowImageText
                :images="qual_findings_i"
                :text-files="qual_findings">
            </rowImageText>
            <div class="display_grid"></div>
        </sectionContainer>
        <sectionContainer class="green">
            <h1>Quantitative Research</h1>
            <p>After completing our qualitative research we wanted to verify that these results persisted for a larger demographic and on a larger scale</p>
            <h2>Methodology</h2>
            <p>In order to do this we put out a survey for young adults who online grocery shop regularly.</p>
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
            c_zone_c:['/htmlWidgets/social_grocer/lit_rev_1.html', '/htmlWidgets/social_grocer/lit_rev_2.html', '/htmlWidgets/social_grocer/lit_rev_3.html'],
            qual_findings_i:['/assets/social_grocer/grocery_list_icon.png', '/assets/social_grocer/price_tag_icon.png', '/assets/social_grocer/social_media_icon.png'],
            qual_findings:['/htmlWidgets/social_grocer/finding_1.html', '/htmlWidgets/social_grocer/finding_2.html', '/htmlWidgets/social_grocer/finding_3.html'],
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
    .hero_img {
        background-image: url('../assets/social_grocer/hero.png');
        background-size: cover;
        width: 100%;
        aspect-ratio: 2250/1520;
        border-radius: 10px;
    }

    .introduction h1 {
        font-size: 50px;
    }
        
    .introduction, .situation{
        text-align: left;
    }

    .display_grid {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
    }

    .method {
        max-width: 300px;
        min-width: 200px;
        margin: 0px auto 0px 0px;
    }

    .method img {
        width: 100%;
        height: auto;
        max-width: 300px;
        object-fit: contain;
    }


</style>