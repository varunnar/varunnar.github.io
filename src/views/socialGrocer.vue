<template>
    <div class="container">
        <fadeInComponent>
        <sectionContainer class="green introduction">
            <div class="title_page">
            <div class="logo_image"></div>
            </div>
            <div class="hero_img"></div>
            <p><b>Transform grocery shopping from an ordinary task to a channel for social connection with Social Grocer. 
                Connect with friends in real-time, make mindful food choices, and turn online shopping into an engaging, health-focused social adventure. </b></p>
            <h2>Members</h2>
            <ul>
                <li><p><b>Varun Narayanswamy (Designer, Lead Developer)</b></p></li>
                <li><p>Ivy Tseng (Lead Designer)</p></li>
                <li><p>Louise Lu (Lead Designer)</p></li>
                <li><p>Stevie Lemons (Lead Researcher)</p></li>
            </ul>
            <h2>Timeline</h2>
            <p>This project was my capstone project in the Human-Computer Interaction and Design.<b>(MHCI+D)</b>. It ran from April 2024 to August 2024 <b>(22 weeks)</b></p>
        </sectionContainer>
        </fadeInComponent>
        <fadeInComponent>
        <sectionContainer class="off">
            <h1>What is Social Grocer?</h1>
            <div class="feature_container">
                    <div class="feature flex_sa" v-for="(items, index) in feature_artboard_content" :key="index">
                        <div style="max-width: 500px;">
                            <h3 v-html="items['header']"></h3>
                            <p v-html="items['paragraph']"></p>
                        </div>
                        <div class="feature_img" :style="`background-image: url(${items['images']});`"></div>
                    </div>
            </div> 
        </sectionContainer>
        </fadeInComponent>

        <fadeInComponent>
        <sectionContainer class="green situation">
            <div class="grid_4fr_2fr_1fr">
                <div style="max-width: 500px">
                    <h1>Who is Our Sponsor: Building H?</h1>
                    <p>For our capstone project we were sponsored by Building H. Building H is a nonprofit organization that looks 
                        to improve the world and environment by rating companies and informing them of areas of improvement with health, accessibility and more.
                        You can learn more about them <a href="https://www.buildingh.org/"> here.</a> </p>
                </div>
                <div class="build_h_logo"></div>
                </div>
        </sectionContainer>
        </fadeInComponent>

        <fadeInComponent>
        <sectionContainer>
            <h1>Proposed Project</h1>
            <p style="font-size: 30px;">Building H came to us with the following proposal: <em>"In the evolving <b>online grocery delivery marketplace</b>, how can we transform the space to make <b>healthier
                 food choices</b> not only easier but second nature?"</em></p>
        </sectionContainer>
        </fadeInComponent>

        <fadeInComponent>
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
            <rowImageText
            :images="c_zone_i"
            :text-files="c_zone_c"
            imageSize="200px">
            </rowImageText>
                <div>
                    <h2>Competitive Analysis</h2>
                    <p>We conducted a competitive analysis of food and grocery delivery companies to understand how the current market promotes or discourages healthy habits.</p>
                    <h3>Key Takeways</h3>
                    <p>Conducting our competitive analysis culminated in the following takeaways:</p>
                </div>
                    <ul>
                        <li style="fontSize: 20px">Lack of digestible nutrition information and food ratings</li>
                        <li style="fontSize: 20px">Lack of information visibility and way-finding</li>
                        <li style="fontSize: 20px">Transparency regarding seasonality and quality of ingredients</li>
                        <li style="fontSize: 20px">Pursuit of pure profit over consumer’s health and wellbeing</li>
                    </ul>
                <div class="competitive_analysis"></div>
        </sectionContainer>
        </fadeInComponent>

        <fadeInComponent>
        <sectionContainer class="off">
                <h1>Qualitative Research</h1>
                <p>After completing our desk research, we conducted qualitative research, using the findings to refine our target population. </p>
                <div>
                    <h2>Research Question</h2>    
                    <p><b>Our Research Question:</b> <em>How do young working professionals living and dining alone make decisions
                            when ordering groceries online?</em></p>
                </div>
                <div class="grid_4fr_2fr_1fr">
                    <div style="max-width: 450px;">
                        <h2>Participant Requirements</h2>
                        <p>We Interviewed <b>8 participants</b> with the following criteria:</p>
                        <div class="flex_height_fit_items">
                            <img class="carbon_people" src="@/assets/social_grocer/carbon_people.png"/>
                            <ol class="target_population">
                                <li>young adults (ages 18-35)</li>
                                <li>Make individual food choices</li>
                                <li>grocery shop once at least twice a month</li>
                                <li>shop both online and in person</li>
                            </ol>
                        </div>
                    </div>
                    <div>
                        <h2>SME interviewes</h2>
                        <p> We conducted quantitative studies and consulted regularly with experts from <b>DoorDash</b>, <b>Uber Eats</b>, 
                            Tufts researchers who design the <b>Food Compass</b> Nutrition Rating System, and <b>UW Research</b>.</p>

                        <img src="@/assets/social_grocer/SME.png" style="max-width: 400px; width: 100%; height: auto;">
                    </div>
                </div>
            <h2>Methodology</h2>
                <p>For our interview with the <b>8 participants mentioned above</b> we conducted a 2 hour continuous study using the  methodologies below:</p>
                <div class="grid_3fr_1fr">
                    <div class="method">
                        <img src="../assets/social_grocer/semi_structure_int.png"/>
                        <p style="color: yellow">1</p>
                        <h3>Semi-Structured Interview + Concept Map</h3>
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
            <br/>
            <div class="line-with-text"><h2>Findings</h2></div>
            <!-- <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108.95 122.88"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>digital-online-media</title><path class="cls-1" d="M35.48,0H79.61A13.28,13.28,0,0,1,92.88,13.28V39.85H88.29V13.15H26.78v4.5H22.2V13.26A13.25,13.25,0,0,1,35.48,0ZM20.6,40.08l9.12,6.36a1.42,1.42,0,0,1,.42.39,1.36,1.36,0,0,1-.35,1.9L20.69,55a1.39,1.39,0,0,1-.87.3A1.37,1.37,0,0,1,18.45,54V41.19a1.43,1.43,0,0,1,.26-.78,1.36,1.36,0,0,1,1.89-.33ZM5,25.67H43.89a5,5,0,0,1,3.5,1.45l.09.1a4.92,4.92,0,0,1,1.37,3.41V58.84a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V30.63a5,5,0,0,1,5-5Zm41.22,8.41H2.66V58.84A2.32,2.32,0,0,0,5,61.15H43.89a2.29,2.29,0,0,0,2.3-2.31V34.08Zm37,53-9.59,9.19a1.48,1.48,0,0,1-1.13.51A1.52,1.52,0,0,1,71,95.25V87.07H65.92A3.93,3.93,0,0,1,62,83.18V53.34a3.93,3.93,0,0,1,3.89-3.89h39.14A3.91,3.91,0,0,1,109,53.34V83.18a3.91,3.91,0,0,1-3.89,3.89Zm-10.12-12a2,2,0,1,1,0-4h21a2,2,0,1,1,0,4Zm0-10.63a2,2,0,0,1,0-4H98.83a2,2,0,0,1,0,4Zm19.77,31V109.6a13.28,13.28,0,0,1-13.27,13.28H35.48A13.28,13.28,0,0,1,22.2,109.6V71.83h4.58v32.61H88.29v-9ZM57.52,108.6a5.46,5.46,0,1,1-5.46,5.45,5.44,5.44,0,0,1,5.46-5.45Z"/></svg> -->
            <rowImageText
                :images="qual_findings_i"
                :text-files="qual_findings"
                imageSize="150px">
            </rowImageText>
            <div class="flex_spacing_start spacing_medium"></div>
        </sectionContainer>
        </fadeInComponent>

        <fadeInComponent>
        <sectionContainer class="green">
            <h1>Quantitative Research</h1>
            <p>After completing our qualitative research we wanted to verify that these results persisted for a larger demographic and on a larger scale.</p>
            <h2>Methodology</h2>
            <p>We surveyed young adults who shop for groceries online, designing questions based on our research goals. From nearly 1,000 responses, we filtered 108 participants matching our target demographics.</p>
            <h2>Visualizations</h2>
            <p>After completing our quantitative data collection, I then was tasked in making sense of the wide arrange of data I had. I developed a number of visualizations, using the Javascript framework, <b>Vegalite</b>.</p>
            <h3>Static Visualizations</h3>
            <p>Below are included the key visualizations which helped to validate our project as we continued.</p>
            <slideshow
                class="visualization_slideshow"
                folderPath="/assets/social_grocer/data_viz/viz"
                :headerArray="data_viz_header"
                :bodyArray="data_viz_body"
                fileType="png"
                :autoPlay="false"
                :numberOfImages="3"
                buttonColor='#000000'
                backgroundColor='#FFFFFF'
                textPosition="left_text">
            </slideshow>

            <h3>Interactive Visualizations</h3>
            <p>Along with the main visualizations above I developed a number of others that can be seen below:</p>
            <div class="grid_3fr_1fr">
                <img src="../assets/social_grocer/data_viz/interactive_viz_0.gif" style="width: 100%; height: auto; object-fit: contain">
                <img src="../assets/social_grocer/data_viz/interactive_viz_1.gif" style="width: 100%; height: auto; object-fit: contain">
                <img src="../assets/social_grocer/data_viz/interactive_viz_2.gif" style="width: 100%; height: auto; object-fit: contain">
            </div>
            <p>You can interact with these visualizations <a href="https://observablehq.com/d/ee25442c71999d1b"> here</a> on ObservableHQ.</p>
        </sectionContainer>
        </fadeInComponent>

        <fadeInComponent>
        <sectionContainer class="off">
            <h1>Ideation Process</h1>
            <p>With our research completed and validated, we now needed to consider how we wanted to attempt to change the space.</p>
            <h2>Initial Ideation</h2>
            <p>Each member of the team designed 40 initial ideas. Our process included the following steps.</p>
            <div class="flex_height_fit_items" style="margin-top: 50px; min-height: 500px; gap: 50px">
                <div class="ideation_content">
                    <div>
                        <h3 style="margin: 0px">1. Placing Ideas Down</h3>
                        <p style="margin: 0px">We placed our initial 40 ideas on the board, grouped by person.</p>
                    </div>
                    <div>
                        <h3>2. Grouping</h3>
                        <p>We moved items to make larger sub-groups.</p>
                    </div>
                    <div>
                        <h3>3. Discussion</h3>
                        <p>We discussed the merits and potential of each sub-group and specific ideas.</p>
                    </div>
                    <div>
                        <h3>4. Dot Voting</h3>
                        <p>We Dot Votted - Each member selected their top 5 ideas.</p>
                    </div>
                </div>
                <div class="ideation_gif"></div>
            </div>
            <div class="line-with-text"><h3> Design Principles</h3></div>
            <div class="grid_4fr_2fr_1fr">
                <div class="design_p">
                    <div class="flex_string_icon spacing_small">
                        <img src="@/assets/social_grocer/connects.png" style="max-width: 50px; aspect-ratio: 1/1"/>
                        <p><b>Respect the User</b></p>
                    </div>
                    <p>Ensuring users have agency in what they purchase.</p>
                </div>
                <div class="design_p">
                    <div class="flex_string_icon spacing_small">
                        <img src="@/assets/social_grocer/nutrition.png" style="max-width: 50px; aspect-ratio: 1/1"/>
                        <p><b>Nutrition Education</b></p>
                    </div>
                    <p>Presenting nutritional information in a manageable way.</p>
                </div>
                <div class="design_p">
                    <div class="flex_string_icon spacing_small">
                        <img src="@/assets/social_grocer/habits.png" style="max-width: 50px; aspect-ratio: 1/1"/>
                        <p><b>Support Users Toward Healthier Habits.</b></p>
                    </div>
                    <p>Building an environment where shoppers are encouraged to engage in healthy behavioral change.</p>
                </div>
                <div class="design_p">
                    <div class="flex_string_icon spacing_small">
                        <img src="@/assets/social_grocer/respect.png" style="max-width: 50px; aspect-ratio: 1/1"/>
                        <p><b>Foster Social Connection</b></p>
                    </div>
                    <p>Creating a platform that celebrates and shares the joy of food within a community.</p>
                </div>
            </div>
            <div class="line-with-text"><h2>Initial Idea</h2></div>
            <div class="emphasize_section">
            <p>Our project, <b>Social Grocer</b>, was born from the idea of making grocery shopping more social.
                 Research showed that while shopping is often solitary, people value friend recommendations. 
                 Social Grocer enables users to shop online with friends and family in real-time, promoting 
                 mindfulness and accountability through healthy food suggestions and a cart health score. 
                 This score can be shared online to celebrat e nutrition-focused progress.</p>
                </div>
            <div class="line-with-text"><h2> Refinement</h2></div>
            <p>We now looked to iterate on our designs, refining them, and improve
                 them over time. Look below to checkout the <b>Guiding Questions</b> we used to help reconsider our design.</p>
            <h2>Guiding Questions</h2>
            <!-- <div class="flex_sa artboard_container" v-for="items in ideation_artboard_content" :key="items" style="align-items: flex-start; margin-bottom: 200px;"> -->
                      <!-- style="flex: 1 1 0; width: 0;" -->
                <div class="grid_4fr_2fr_1fr">
            <div class="artboard_container" v-for="items in ideation_artboard_content" :key="items">
                <fadeInComponent>   
                        <artboardObj
                            :header="items['header']"
                            :focused-header="items['f_header']"
                            :bulletPoints="items['bulletPoints']"
                            :secondaryImage="items['secondaryImage']"
                            :images="items['images']"
                        ></artboardObj>
                </fadeInComponent>
            </div>
        </div>
            <div class="line-with-text"><h2>Storyboards</h2></div>
            <div class="grid_3fr_1fr" v-if="!smallSize">
                <h3>Initial Storyboard</h3>
                <h3>Refined Concept</h3>
                <h3>Pre Video</h3>
            </div>
                <div class="grid_3fr_1fr">
                    <div class="slideShow_storyboards">
                    <h3 v-if="smallSize">Initial Storyboard</h3>
                    <slideshow
                        folderPath="/assets/social_grocer/storyboard/Storyboard_1"
                        fileType="png"
                        :autoPlay="false"
                        :bodyArray="storyboard_1_body"
                        :numberOfImages="11"
                        buttonColor='#4A6846'
                        backgroundColor='#D3D3D3'>
                    </slideshow>
                </div>
                <div class="slideShow_storyboards">
                    <h3 v-if="smallSize">Refined Concept</h3>
                    <slideshow
                        folderPath="/assets/social_grocer/storyboard1/sg_storyboard"
                        fileType="png"
                        :autoPlay="false"
                        :bodyArray="storyboard_2_body"
                        :numberOfImages="13"
                        buttonColor='#4A6846'
                        backgroundColor='#D3D3D3'>
                    </slideshow>
                </div>
                <div class="slideShow_storyboards">
                    <h3 v-if="smallSize">Pre Video</h3>
                    <slideshow
                        folderPath="/assets/social_grocer/storyboard2/Storyboard"
                        fileType="png"
                        :autoPlay="false"
                        :bodyArray="storyboard_3_body"
                        :numberOfImages="15"
                        buttonColor='#4A6846'
                        backgroundColor='#D3D3D3'>
                    </slideshow>
                </div>
            </div>
        </sectionContainer>
        </fadeInComponent>

        <fadeInComponent>
        <sectionContainer class="green">
            <h1>Usability Testing</h1> 
            <p>In order validate our design we wanted to test in front of others.</p>
            <h2>Methodology</h2>
            <p>We tested with <b>6 new participants</b>, completing <b>3 rounds of rapid iterative
                testing</b> after each 2 tests. We tested a number of different features throughout.</p>
                <div class="line-with-text"><h2>Feature Updates</h2></div>
            <div class="usability_test">
                <h2>Product Page</h2>
                <slideshow
                    :bottomControls="true"
                    :htmlUrls="['/htmlWidgets/social_grocer/product_page_1.html', '/htmlWidgets/social_grocer/product_page_2.html', '/htmlWidgets/social_grocer/product_page_3.html']"
                    :numberOfImages="3"
                ></slideshow>
            </div>
            <div class="usability_test">
                <h2>Cart Health Score</h2>
                <slideshow
                    :bottomControls="true"
                    :htmlUrls="['/htmlWidgets/social_grocer/c_health_s_1.html', '/htmlWidgets/social_grocer/c_health_s_2.html']"
                    :numberOfImages="2"
                ></slideshow>
            </div>
            <div class="usability_test">
                <h2>End Screens</h2>
                <slideshow
                    :bottomControls="true"
                    :htmlUrls="['/htmlWidgets/social_grocer/ending_1.html', '/htmlWidgets/social_grocer/ending_2.html']"
                    :numberOfImages="2"
                ></slideshow>
            </div>
        </sectionContainer>
        </fadeInComponent>

        <fadeInComponent>
        <sectionContainer class="off">
            <h1>Final Version</h1>
                <p>After 9 iterations of design we landed on the final design of Social Grocer.</p>
                <div class="line-with-text"><h2>Final Video</h2></div>
            <iframe src="https://www.youtube.com/embed/fQMMDkPF3mk?si=1NNYUXY-e2iT4zjo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div class="line-with-text"><h2>Design Mappings</h2></div>
            <p>I was responsible for developing, designing and refining our variety of design maps. This includes the apps information architecture, screen flows, and specific task flows.</p>
            <div class="grid_3fr_1fr" v-if="!smallSize">
                <h3>Information Architecture</h3>
                <h3>Screen Flows</h3>
                <h3>Task Flow</h3>
            </div>
            <div class="grid_3fr_1fr">
                <div>
                    <h3 v-if="smallSize">Information Architecture</h3>
                    <slideshow
                        folderPath="/assets/social_grocer/flows/IA"
                        fileType="png"
                        :numberOfImages="3"
                        buttonColor="#27422C"
                    ></slideshow>
                </div>
                <div>
                    <h3 v-if="smallSize">Screen Flows</h3> 
                    <slideshow
                        folderPath="/assets/social_grocer/flows/screen_flow"
                        fileType="png"
                        :numberOfImages="6"
                    ></slideshow>
                </div>
                <div>
                    <h3 v-if=" smallSize">Task Flow</h3>
                    <slideshow
                        folderPath="/assets/social_grocer/flows/task_flow"
                        fileType="png"
                        :numberOfImages="4"
                        buttonColor="#27422C"
                    ></slideshow>
                </div>
            </div>
            <h3>Tech Stack Document</h3>
            <p>After finalizing the design, I planned the application's functionality, including the frontend, backend, external APIs, and databases. 
                I opted for a <b>microservice model</b> to better organize the code and ensure the application remains functional even if individual microservices fail.
                Below includes the full technology stack breakdown, and descriptions of each component.</p>

            <img src="/assets/social_grocer/flows/Tech_flow_0.png" style="width: 100%; height: auto"/>
        </sectionContainer>
        </fadeInComponent>

        <fadeInComponent>
        <sectionContainer class="off">
            <h1>Reflections</h1>
            <div class="grid_3fr_1fr">
            <div class="reflection_items" style="gap: 10px">
                <div class="circle reflection_1"></div>
                <h3>Further Research</h3>
                <p>Our groups constantly discussed many areas such as the impacts of social 
                    media in a sensitive space such as food health, or how to approach privacy with groceries. 
                    I would like to conduct further development </p>
            </div>
            <div class="reflection_items" style="gap: 10px">
                <div class="circle reflection_2"> </div>
                <h3>Coded Prototype</h3>
                <p> After further testing, I would like to refine the idea with a coded prototype.
                     This could also us to test with existing APIs and refine interactions that are impossible with Figma.</p>
            </div>
            <div class="reflection_items" style="gap: 10px">
                <div class="circle reflection_3"></div>
                <h3>Nutrition Research</h3>
                <p>During our project, we aimed to define a Cart Health Score Nutrition system. However, lacking nutrition expertise,
                     we identified the need for further research and consultation with experts, like creators of existing nutrition rating systems.</p>
            </div>
        </div>
        </sectionContainer>
        </fadeInComponent>
    </div>
</template>

<script>
//import slideshow from '@/components/widgets/slideshow.vue';
// import { onMounted, ref, onBeforeUnmount } from 'vue';
// import { Runtime, Inspector } from '@observablehq/runtime';
// import notebook from '4158df67e625f9c8';
import sectionContainer from '../components/widgets/section.vue';
import rowImageText from '../components/widgets/rowImageText.vue';
import Slideshow from '@/components/widgets/slideshow.vue';
import artboardObj from '@/components/widgets/artboardObj.vue';
import artboardArr from '../components/artboardArrays/artboardQuestionsSG.js';
import artboardFeatureArr from '../components/artboardArrays/artboardfeaturesSG.js';
import fadeInComponent from '@/components/fadeInComponent.vue';
//import pdfDownloader from '@/components/widgets/pdfDownloader.vue';


export default {
    name: 'socialGrocer',
    components: {sectionContainer, rowImageText, Slideshow, artboardObj, fadeInComponent},
    data() {
        return {
            c_zone_i:['/assets/social_grocer/sol.png', '/assets/social_grocer/thinking.png', '/assets/social_grocer/basket.png'],
            c_zone_c:['/htmlWidgets/social_grocer/lit_rev_1.html', '/htmlWidgets/social_grocer/lit_rev_2.html', '/htmlWidgets/social_grocer/lit_rev_3.html'],
            qual_findings_i:['/assets/social_grocer/grocery_list_icon.png', '/assets/social_grocer/price_tag_icon.png', '/assets/social_grocer/social_media_icon.png'],
            qual_findings:['/htmlWidgets/social_grocer/finding_1.html', '/htmlWidgets/social_grocer/finding_2.html', '/htmlWidgets/social_grocer/finding_3.html'],
            storyboard_1_body: ['Grace is running low on groceries and needs to restock.',
                'She decides to online grocery shop on Social Grocer and sees that her friend Kiran is currently shopping. She hasn’t talked to Kiran for a few weeks and wants to catch up.',
                'She requests to join his grocery shopping trip. Kiran accepts her request.',
                'She connects to the audio and video within the app and enters the shared online grocery shopping space.',
                'She sees that Kiran is in the milk aisle and is looking at oat milk. Grace also needs oat milk but hasn’t tried the brand that Kiran is selecting. She discusses with Kiran.',
                'Grace can easily see the health rating of each milk product, making it easier to decide which one she wants to add to her cart.',
                'She’s still missing eggs and can see in Kiran’s cart, he has eggs. Trusting his choice, she adds the same eggs to her own cart. ',
                'After shopping around a bit, they both decide to check out the healthy snack aisle together. They end up choosing the same healthy fruit snack that looks delicious and also will boost their cart health scores.',
                'When they’re ready to check out, they can see each other’s cart health scores. Noticing Grace’s healthier score motivates Kiran to remove his bag of chips, aligning his score with hers.',
                'They both share their carts on Social Grocer with friends and family, feeling grateful for the chance to connect while grocery shopping.',
            ],
            storyboard_2_body: ['Grace is running low on groceries and needs to restock.',
                'She decides to online grocery shop on Social Grocer and sees that her friend Kiran is currently shopping online.',
                'Kiran and Grace are childhood friends but they haven’t been able to catch up recently. She requests to join his grocery shopping trip. Kiran accepts her request.',
                'She sees a pop-up of her grocery match percentage with Kiran and is surprised that they both buy this niche brand of granola.',
                'Grace connects her audio and video within the app. She knows she’s connected as soon as she hears the noise of a busy grocery store and Social Grocer’s classic grocery shopping music. They start catching up.',
                'Grace navigates around the shared grocery space called, “The Market.” She spotlights Kiran, which takes her to the Milk Market. Here, she discusses with Kiran the brand of milk he’s viewing.',
                'Grace can easily see the health rating of each milk product by hovering over it. She clicks into the product page and sees other healthy pairings, helping her decide to add it to cart.',
                'She needs to go buy yogurt and ventures to the Yogurt Market. There, she sees which yogurt Kiran’s hearted. She asks him about it and decides to add it to her cart. ',
                'She continues chatting with Kiran as she ventures off to other food markets while Kiran stays in the Milk Market. The two fill up their grocery carts.',
                'As a final stop, they decide to check out the Granola Market together. They end up choosing the same granola snack that looks delicious and also will boost their cart health scores.',
                'When they’re ready to check out, both are shown their health scores. The app celebrates with Grace that her cart health score has been rising for the past 4 shopping trips.',
                'They both share their carts on Social Grocer with friends and family, feeling grateful for the chance to connect while grocery shopping.'
            ],
            storyboard_3_body: ["Grace has just arrived home, tired from a long day at her new job in Seattle. She's been eating out more often due to a lack of groceries, which has only made her feel worse.",
            "She jumps on Social Grocer to feel more connected and find groceries that align with her lactose-intolerant diet. She sees that her childhood friend Kiran, in San Francisco, is currently shopping online.",
            "Kiran and Grace go way back, but they haven't had a chance to catch up since she moved. She requests to join his grocery run. Kiran, pleasantly surprised by Grace’s request, gladly accepts.",
            "She sees a pop-up of her grocery match percentage with Kiran and feels nostalgic that they both still purchase baked green pea snacks",
            "Grace connects through audio and starts exploring “The Market.” Kiran asks how she's been, and Grace confesses that she’s been feeling very homesick.",
            "Kiran cheers her up by joking about how they were so obsessed with baked green peas that they once dressed up as green peas for Halloween. She laughs and spotlights him to discover he’s in the “Milk Market.”",
            "Grace chats with Kiran while feeding her cat. She considers an oat milk brand she's seen on social media but is surprised to find that its nutrition score and information are worse than expected.",
            "She can easily see suggestions for healthier oat milks below. When mentioning the options, Kiran shares that Califia is his current favorite brand. Knowing that he has good taste and seeing the better health rating convinces her to add it to her cart, boosting her cart health score.",
            "Grace gets curious about Kiran's picks and asks for more food recommendations. He encourages her to peek at his cart - it's full of their childhood favorites. Spotting their old go-to almond butter, Grace adds it to her cart without hesitation.",
            "They spend time catching up and laughing about old times. Grace realizes distance hasn't changed their friendship much. Before ending their call, they make a plan to shop together again next week, making Grace feel less lonely.",
            "After checking out, Grace is feeling more supported as she adjusts to life in Seattle, and satisfied from seeing that her cart health score has improved with the help of Kiran’s recommendations.",
            "Meanwhile, Kiran is happy he got to hang out with Grace, spending 30 minutes shopping and enjoying the app’s way of bringing them closer through online grocery runs.",
            "Grace posts her cart, highlighting her virtual shopping trip with Kiran and their nostalgic grocery picks. Sharing this experience leaves Grace feeling refreshed and closer to her childhood friend.",
            "After receiving her grocery delivery the next day, Grace makes a healthy meal and shares a selfie. Kiran hearts it and playfully hints at scoring an invite to Seattle to taste her cooking.  Grace replies, “The kitchen’s open—just say when!”"
            ],
            data_viz_header: ['Visualization 1', 'Visualization 2', 'Visualization 3'],
            data_viz_body: ['This visualization shows that most participants are aged 18-25 and shop 1-2 times a month, supporting our theory that shoppers combine in-person and online grocery shopping.', 
            'This visualizations showcases that the most important grocery aspects for participants is price, but also customer ratings and reviews, highlighting the subtly social nature of grocery shopping', 
            "This visualization showcases the majority of grocery shoppers have at least a high trust in social media, showcases it's potential value in swaying them away and towards healthy habits"],
            ideation_artboard_content: artboardArr,
            feature_artboard_content: artboardFeatureArr
        }
    },
    computed: {
        smallSize() {
            const viewportWidth = window.innerWidth;
            if (viewportWidth < 900) {
                return true;
            } else {
                return false;
            }
        }
    }
}
</script>

<style scoped>

@import url('@/globalStyles/spacing.css');
    a {
        color: #4A90E2;
    }
    .build_h_logo {
        background-image: url('@/assets/social_grocer/building_h.png');
        width: 100%;
        aspect-ratio: 145/100;
        background-size: contain;   
        background-repeat: no-repeat;  
        font-family: 'Fraunces';   
    }

    .competitive_analysis {
        background-image: url('../assets/social_grocer/competitive_analysis.png');
        width: 100%;
        aspect-ratio: 1920/1080;
        /* margin-left: 10%;
        margin-right: 10%; */
        background-size: contain;
        background-repeat: no-repeat;
        background-color: black;
        border-radius: 10px;
    }

    .competitive_item {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }

    .container {
        background-color: #fbf8f0;
    }
    .green {
        background-color: #27422C;
        color: white;
        text-align: left;
    }
    /* .white {
        background: white;
        border: solid black;
        color: black;
        text-align: left;
    } */
    .off {
        background-color: #1E1E1E;
        color: white;
        text-align: left;
    }
    .hero_img {
        background-image: url('../assets/social_grocer/hero.png');
        background-size: cover;
        width: 100%;
        /* aspect-ratio: 2250/1520; */
        aspect-ratio: 1032/647;
        border-radius: 10px;
    }
    iframe {
        width: 100%;
        aspect-ratio: 560/315;
    }
        
    .introduction, .situation{
        text-align: left;
    }

    h3 {
        color: white;
    }

    .visualization_slideshow {
        width: 100%; 
        margin: auto;
    }

    slideshow {
        background-color: white
    }

    .center_column {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .ideation_methods img {
        width: 100%;
        min-width: 250px;
        margin: auto;
    }

    .idea_bullets li {
        font-size: 20px;
    }

    .artboard_container {
        display: flex;
    }

    artboardObj {
        flex: 1; 
    }

    .artboard_p {
        flex: 1;
    }
    .circle {
        width: 80px;
        height: 80px;
        color: black;
        border-radius: 1000px;
        font-size: 40px;
        background-size: cover;
        margin-left: auto;
        margin-right: auto;
    }
    .circle.reflection_1 {
        background-image: url('@/assets/social_grocer/user_testing.png');
    }

    .circle.reflection_2 {
        background-image: url('@/assets/social_grocer/prototype.png');
    }

    .circle.reflection_3 {
        background-image: url('@/assets/social_grocer/rating.png');
    }

    .emphasize_section {
        padding: 10px;
        background-color: white;
        color: black;
        border-radius: 10px;
    }

    .emphasize_section p {
        font-size: 20px;
    }
    .interactive_viz {
        padding: 10px;
        background-color: white;
        width: 100%;
        border-radius: 10px;
    }

    .ideation_gif {
        background-image: url(../assets/social_grocer/ideation.gif);
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        aspect-ratio: 16/9;
    }
    .ideation_content {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
    }
/* 
    .ideas:nth-child(even) .idea_bullets {
        grid-column: 2;
    }

    .ideas:nth-child(even) .artboard_container {
        grid-column: 1;
    }

    .ideas:nth-child(odd) .idea_bullets {
        grid-column: 1;
    }

    .ideas:nth-child(even) .artboard_container {
        grid-column: 2;
    } */

    .flex_sa {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
    }

    .flex_sa:nth-child(even) {
        flex-direction: row-reverse;
    }

    .feature {
        width: 90%;
        margin: 200px 5% 0px 5%;
    }

    .feature p {
        font-size: 30px;
    }

    .feature h3 {
        font-size: 30px;
    }
    .feature_img {
        flex: 1;
        width: 100%;
        min-width: 200px;
        background-repeat: no-repeat;
        background-position: center;
        max-width: 400px;
        aspect-ratio: 1/2; 
        background-size: contain;
    }

    .method {
        max-width: 300px;
        min-width: 200px;
        /*margin: 0px auto 0px 0px;*/
    }

    .method img {
        width: 100%;
        height: auto;
        max-width: 300px;
        object-fit: contain;
    }

    .line-with-text {
        display: flex;
        align-items: center;
        text-align: center;
        margin-top: 50px;
        margin-bottom: 20px;
    }

    .line-with-text::before,
    .line-with-text::after {
        content: "";
        flex: 1;
        border-bottom: 2px solid #f9f9f9; /* Line style */
    }

    .line-with-text::before {
    margin-right: 10px; /* Spacing between line and text */
    } 

    .line-with-text::after {
        margin-left: 10px; /* Spacing between line and text */
    }
    .reflection_items {
        display: flex;
        align-items: space;
        flex-direction: column;
        max-width: 300px;
        flex-basis: 100%;
        background-color: #27422C;
        padding: 30px 10px 30px 10px;
        border-radius: 30px;
        text-align: center;
    }

    .target_population {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .carbon_people {
        max-width: 400px;
        width: 50%;
        height: auto;
    }

    .title_page {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
    }

    .logo_image {
        width: 500px;
        height: 100px;
        background-image: url('@/assets/social_grocer/logo.png');
        background-size: contain;
        background-repeat: no-repeat;
    }
    
    .usability_test {
        margin-bottom: 60px;
    }

    @media(max-width: 900px) {
        .flex_sa {
            flex-direction: column;
            align-items: center
        }
        .flex_sa:nth-child(even) {
            flex-direction: column;
            align-items: center
        }
        .feature p {
            font-size: 20px;
        }
        .target_population {
            width: 100%;
        }
        .visualization_slideshow {
            width: 100%;
        }
        .carbon_people { 
            width: 100%;
        }
    }
</style>