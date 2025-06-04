<template>
    <div class="container">
        <!-- Header Section -->
        <fadeInComponent>
            <sectionContainer class="green-section">
                <div class="header-content">
                    <h1>Lyve Pilot at Seagate Technology</h1>
                    <div class="header-image"></div>
                    <p class="intro-text"><i>
                        At Seagate Technology, I worked on Lyve Pilot, an innovative data mobility solution 
                        that helps enterprises manage and move massive amounts of data across their ecosystem.
                        As a full-stack developer, I contributed to both the frontend and backend development
                        while also ensuring robust testing practices.</i>
                    </p>
                </div>
            </sectionContainer>
        </fadeInComponent>

        <!-- Project Overview Section -->
        <fadeInComponent>
            <sectionContainer class="white-section" style="text-align: left;">
                <h2>Project Overview</h2>
                <p>
                    Lyve Pilot addresses the growing challenge of efficient data movement in enterprise environments. 
                    When network transfers become impractical for petabyte-scale data, Lyve Pilot offers a 
                    comprehensive solution combining specialized hardware with intelligent software for seamless data mobility.
                </p>
                <div class="key-points">
                    <div class="point">
                        <h3>The Challenge</h3>
                        <p>Moving petabytes of data efficiently while maintaining security and reliability across diverse enterprise environments</p>
                    </div>
                    <div class="point">
                        <h3>The Solution</h3>
                        <p>A comprehensive data mobility platform with hardware devices and intelligent software for secure, efficient data transport</p>
                    </div>
                    <div class="point">
                        <h3>My Role</h3>
                        <p>Full-stack developer working on Vue.js frontend, microservices backend, and automated testing infrastructure</p>
                    </div>
                </div>
                <h3>Target Audience</h3>
                <div class="grid_2fr_1fr">
                    <div>
                    <h4>B2B</h4>
                    <img src="@/assets/seagate/b2b.png" alt="Target Audience" class="target_audience_image" width="80%" height="auto">
                    <p>The team was focused on B2B companies as they tended to have more complex data environments, and more complex data needs.</p>
                    </div>
                    <div>
                        <h4>High Storage Companies</h4>
                        <img src="@/assets/seagate/multiple_harddrives.png" alt="Target Audience" class="target_audience_image" width="80%" height="auto">
                        <p>We especially focused on companies that had a large amount of data to move, and needed a way to do it efficiently, such as self driving car companies.</p>
                    </div>
                </div>
            </sectionContainer>
        </fadeInComponent>

        <fadeInComponent>
            <sectionContainer class="green-section" style="text-align: left;">
                <h2>My Role</h2>
                <div class="grid_2fr_1fr" style="align-items: center;">
                    <div class="text-content">
                        <p>
                            As a full-stack developer with <b style="font-weight: 800;">design experience</b>, I often bridged the gap between our 35-engineer team and a single core designer.
                        </p>
                        <p>
                            I implemented designs, clarified them to engineers, ensured accurate execution, and helped the designer understand the codebase to align on decisions and timelines.
                        </p>
                    </div>

                    <div class="designer_dev_eng">
                        <img src="@/assets/seagate/designer_developer.png" alt="Designer, Developer, Engineer" class="designer_dev_eng_image" width="100%" height="auto">
                    </div>
                </div>
                <h3>Main Software Roles</h3>
                <p>I of course contributed to the codebase as well - below where spaces I made impacts.</p>
                <div class="grid_3fr_1fr">
                    <reflection-item
                        title="Frontend Developer"
                        description="Led the development of critical frontend features using Vue.js and TypeScript, 
                        focusing on creating intuitive interfaces for complex data operations."
                        backgroundColor="#FFFFFF"
                        icon="/assets/seagate/frontend.png"
                        noCircle="true"
                        leftAlignText="true"
                    />
                    <reflection-item
                        title="Backend Developer"
                        description="Led the development of critical backend features using Node.js and Express, 
                        focusing on creating intuitive interfaces for complex data operations."
                        backgroundColor="#FFFFFF"
                        icon="/assets/seagate/backend.png"
                        noCircle="true"
                        leftAlignText="true"
                    />
                    <reflection-item
                        title="Automation Tester"
                        description="Led the development of critical backend features using Node.js and Express, 
                        focusing on creating intuitive interfaces for complex data operations."
                        backgroundColor="#FFFFFF"
                        icon="/assets/seagate/test_engineer.png"
                        noCircle="true"
                        leftAlignText="true"
                    />
                <h3></h3>
                        
                </div>
            </sectionContainer>
        </fadeInComponent>

        <fadeInComponent>
            <sectionContainer class="white-section" style="text-align: left;">
                <h2>Lyve Pilot Code Architecture</h2>
                <p>
                        The backend of Lyve Pilot is a microservices architecture. There are five core services: Portal-Device, Portal-API, Portal-Monitor, Portal-Registration, Portal-Telemetry.
                    </p>
                <div class="flex_height_fit_items" style="background-color: #000000; padding: 20px; border-radius: 10px;">
                    <slideshow
                        folderPath="/assets/seagate/microservices"
                        fileType="png"
                        :numberOfImages="6"
                        :autoPlay="false"
                        :headerArray="[
                            'Portal-Client',
                            'Portal-Device',
                            'Portal-API',
                            'Portal-Monitor',
                            'Portal-Registration',
                            'Portal-Telemetry',
                        ]"
                        :bodyArray="[
                            'The Portal-Client is the main frontend application that users interact with. It is built with Vue.js and TypeScript.',
                            'The Portal-Device is the service that manages the devices that are connected to the system. It is built with Node.js and Express.',
                            'The Portal-API is the service that provides the API for the frontend. It is built with Node.js and Express.',
                            'The Portal-Monitor is the service that monitors the other microservices. It is built with Node.js and Express.',
                            'The Portal-Registration is the service that registers the users that are connected to the system. It is built with Node.js and Express.',
                            'The Portal-Telemetry is the service that collects the telemetry data from the devices that are connected to the system. It is built with Node.js and Express.',
                        ]"
                        style="max-width: 400px; width: 100%; margin:auto;"
                        backgroundColor=""
                    ></slideshow>
                    <div class="image-container microservices_img"></div>
                </div>
            </sectionContainer>
        </fadeInComponent>

        <!-- Frontend Development Section -->
        <fadeInComponent>
            <sectionContainer class="green-section" style="text-align: left;">
                    <h2>Frontend Development</h2>
                    <p>
                        Led the development of critical frontend features using Vue.js and TypeScript, 
                        focusing on creating intuitive interfaces for complex data operations.
                    </p>
                    <slideshow
                        class="frontend-slides"
                        folderPath="/assets/seagate/frontend"
                        fileType="png"
                        :numberOfImages="4"
                        :autoPlay="false"
                        :headerArray="[
                            'The Login Page',
                            'The Dashboard',
                            'Operation Dialogs',
                            'Mapping Bundles Across Devices',
                        ]"
                        :bodyArray="[
                            'The login page is the starting point for all users. On initial login, they use a token emailed to them beforehand, and then setup their account.',
                            'The dashboard is the main page for all users. It shows the current status of the data transfer, past operations completed, and the devices and volumes involved.',
                            'The core of Lyve Pilot is the operation dialogs. They are used to map bundles across devices, and to perform the data transfer. The three main operations are import, copy, and export.',
                            'One of the most core components of Lyve Pilot is how we display the locations of bundles and history of operations on them, across the entire ecosystem. We used a tree view to display the locations of bundles, and a history of operations on them.',
                        ]"
                        buttonColor="#004D25"
                        textLeft="true"
                    ></slideshow>
            </sectionContainer>
        </fadeInComponent>

        <!-- Backend Development Section -->
        <fadeInComponent>
            <sectionContainer class="white-section" style="text-align: left;">
                <h2>Backend Development</h2>
                <p>
                    Contributed to the microservices architecture using Node.js and Express, 
                    developing and maintaining five core services for the platform.
                </p>
                <h3>Responsibilitites</h3>
                <div class="grid_3fr_1fr">
                    <reflection-item
                        title="Fixing Bugs"
                        description="I was regularly tasked with fixing bugs in the codebase, and ensuring that the code was working as expected."
                        backgroundColor="#091C00"
                        textColor="#FFFFFF"
                        headerSize="20px"
                        :number="1"
                    />  
                    <reflection-item
                        title="Building New API Routes"
                        description="I was regularly tasked with building new API routes, in order to properly access the data from the devices."
                        backgroundColor="#091C00"   
                        textColor="#FFFFFF"
                        headerSize="20px"
                        :number="2"
                    ></reflection-item>
                    <reflection-item
                        title="Database Management"
                        description="From time to time, I would make new database tables, check for data integrity, and even migrate the database to a new version."
                        backgroundColor="#091C00"   
                        textColor="#FFFFFF"
                        headerSize="20px"
                        :number="3"
                    ></reflection-item>
                </div>
                <h3> My Backend Impacts</h3>
                <p>These are the main microservices and databases I worked on.</p>
                <div class="grid_4fr_2fr_1fr">
                    <reflection-item
                        title="Portal-Device"
                        description="The Portal-Device is the service that manages the devices that are connected to the system. It is built with Node.js and Express."
                        icon="/assets/seagate/microservices_1.png"
                        headerSize="20px"
                        backgroundColor=""
                    ></reflection-item>
                    <reflection-item
                        title="Portal-API"
                        description="The Portal-API is the service that provides the API for the frontend. It is built with Node.js and Express."
                        icon="/assets/seagate/microservices_2.png"
                        headerSize="20px"
                        backgroundColor=""
                    ></reflection-item>
                    <reflection-item
                        title="Portal-Monitor"
                        description="The Portal-Monitor is the service that monitors the other microservices. It is built with Node.js and Express."
                        icon="/assets/seagate/microservices_3.png"
                        headerSize="20px"
                        backgroundColor=""
                    ></reflection-item>
                    <reflection-item
                        title="MongoDB Database"
                        description="The MongoDB Database is the database that stores the data for the microservices. It is built with MongoDB."
                        icon="/assets/seagate/microservices_6.png"
                        headerSize="20px"
                        backgroundColor=""
                    ></reflection-item>
                </div>

                <h3>The Pods Bug</h3>
                <p><i>A core misunderstanding that caused a major refactor that I led on the backend</i></p>
                <!-- <h4>What is a UDS Cloud Pod?</h4>
                <p>A c</p> -->
            </sectionContainer>
        </fadeInComponent>

        <!-- Testing Section -->
        <fadeInComponent>
            <sectionContainer class="green-section" style="text-align: left;">
                <h2>Testing and Quality Assurance</h2>
                <div class="flex_height_fit_items">
                    <div class="text-content">
                        <p>
                            Established comprehensive testing practices using Selenium for automated testing,
                            ensuring reliability and performance of the Lyve Pilot platform.
                        </p>
                        <p>
                            At Seagate, I set up a Selenium-based testing framework for the Lyve Pilot platform and integrated it with a CI pipeline
                                for automated test execution and reporting. The team built <b>250+</b> automated tests and caught <b>hundreds</b> of bugs.
                        </p>
                        <h3>Goals</h3>
                        <div class="grid_3fr_1fr">
                            <reflection-item
                                title="Increase Frontend Testing"
                                backgroundColor="#E7EDE8"
                                headerSize="20px"
                                :number="1"
                            ></reflection-item>
                            <reflection-item
                                title="Improving Scalability Testing"
                                backgroundColor="#E7EDE8"
                                headerSize="20px"
                                :number="2"
                            ></reflection-item>
                            <reflection-item
                                title="Catching any and all User Bugs"
                                backgroundColor="#E7EDE8"
                                headerSize="20px"
                                :number="3"
                            ></reflection-item>
                        </div>
                    </div>
                    <div class="image-container selenium_img" role="img" aria-label="Testing"></div>
                    <!-- <slideshow
                    class="testing-slides"
                    folderPath="/assets/seagate/testing"
                    fileType="png"
                    :numberOfImages="3"
                    :autoPlay="false"
                    :headerArray="[
                        'Selenium Test Framework',
                        'Continuous Integration',
                        'Performance Testing'
                    ]"
                    :bodyArray="[
                        'Implemented extensive Selenium test suites for automated end-to-end testing of critical user workflows',
                        'Set up continuous integration pipelines with automated test execution and reporting',
                        'Developed performance testing scripts to validate system behavior under various load conditions'
                    ]"
                    buttonColor="#004D25"
                    backgroundColor="#FFFFFF"
                ></slideshow> -->
                </div>
            </sectionContainer>
        </fadeInComponent>

        <!-- Reflection Section -->
        <fadeInComponent>
            <sectionContainer class="white-section">
                <h2>Reflections & Key Learnings</h2>
                <p>
                    Working on Lyve Pilot at Seagate was a transformative experience that helped me grow 
                    both technically and professionally. Here are my key takeaways from the project:
                </p>
                <div class="grid_4fr_2fr_1fr">
                    <ReflectionItem
                        title="Enterprise-Scale Development"
                        description="Building solutions for petabyte-scale data movement taught me the importance of performance optimization, error handling, and system reliability at enterprise scale."
                        backgroundColor="#E7EDE8"
                        :number="1"
                    />
                    <ReflectionItem
                        title="Microservices Architecture"
                        description="Designing and maintaining microservices taught me the value of service isolation, clear API contracts, and the importance of robust inter-service communication patterns."
                        backgroundColor="#E7EDE8"
                        :number="2"
                    />
                    <ReflectionItem
                        title="Test Automation"
                        description="Implementing Selenium testing frameworks showed me how crucial automated testing is for maintaining quality in large-scale applications and ensuring reliable deployments."
                        backgroundColor="#E7EDE8"
                        :number="3"
                    />
                    <ReflectionItem
                        title="Cross-Team Collaboration"
                        description="Working with hardware teams, UX designers, and product managers helped me develop strong communication skills and appreciate the value of diverse perspectives in product development."
                        backgroundColor="#E7EDE8"
                        :number="4"
                    />
                </div>
            </sectionContainer>
        </fadeInComponent>
    </div>
</template>

<script>
import ReflectionItem from '@/components/widgets/reflectionItem.vue';

export default {
    name: 'seagateWork',
    components: {
        ReflectionItem
    },
    data() {
        return {
            filter_array: []
        }
    },
}
</script>

<style scoped>
.container {
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    background-image: url('@/assets/seagate/background.png');
    background-size: contain;
    background-position: center;
    background-repeat: repeat;
}

.green-section {
    background-color: #091C00;
    color: white;
}

.white-section {
    background-color: white;
    color: black;
}

.black-section {
    background-color: #000000;
    color: white;
}

.header-content {
    text-align: left;
    padding: 40px 0;
}

.header-image {
    width: 100%;
    aspect-ratio: 1.5/1;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 30px;
    border-radius: 10px;
   /* // margin: auto; */
    margin-bottom: 20px;
    background-image: url('@/assets/seagate/computer_2.png');
}

.selenium_img {
    background-image: url('@/assets/seagate/selenium.png');
}

.microservices_img {
    background-image: url('@/assets/seagate/microservices.png');
    background-color: black;
    border-left: 1px solid #FFFFFF;
    background-size: contain;
}

@media (max-width: 1300px) {
    .microservices_img {
        border-left: none;
    }
}

.intro-text {
    font-size: 1.2em;
    line-height: 1.6;
    max-width: 100%;
    margin: 0 auto;
}

.key-points {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.point {
    padding: 20px;
    border-radius: 10px;
    background-color: rgba(164, 164, 164, 0.1);
}

.frontend-slides,
.backend-slides,
.testing-slides {
    margin-top: 30px;
    border-radius: 10px;
    overflow: hidden;
}

h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
}

h2 {
    font-size: 2em;
    margin-bottom: 30px;
}

h3 {
    font-size: 1.5em;
    margin-bottom: 15px;
}


@media (max-width: 768px) {
    .key-points {
        grid-template-columns: 1fr;
    }

    .header-image {
        height: 200px;
    }
}

.reflections-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

</style>