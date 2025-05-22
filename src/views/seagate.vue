<template>
    <div class="container">
        <!-- Header Section -->
        <fadeInComponent>
            <sectionContainer class="green-section">
                <div class="header-content">
                    <div class="header-image"></div>
                    <h1>Lyve Pilot at Seagate Technology</h1>
                    <p class="intro-text">
                        At Seagate Technology, I worked on Lyve Pilot, an innovative data mobility solution 
                        that helps enterprises manage and move massive amounts of data across their ecosystem.
                        As a full-stack developer, I contributed to both the frontend and backend development
                        while also ensuring robust testing practices.
                    </p>
                </div>
            </sectionContainer>
        </fadeInComponent>

        <!-- Project Overview Section -->
        <fadeInComponent>
            <sectionContainer class="white-section">
                <div class="project-overview">
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
                </div>
            </sectionContainer>
        </fadeInComponent>

        <!-- Frontend Development Section -->
        <fadeInComponent>
            <sectionContainer class="green-section">
                <div class="frontend-work">
                    <h2>Frontend Development</h2>
                    <p>
                        Led the development of critical frontend features using Vue.js and TypeScript, 
                        focusing on creating intuitive interfaces for complex data operations.
                    </p>
                    <slideshow
                        class="frontend-slides"
                        folderPath="/assets/seagate/frontend"
                        fileType="png"
                        :numberOfImages="3"
                        :autoPlay="false"
                        :headerArray="[
                            'Data Transfer Dashboard',
                            'Device Management Interface',
                            'Real-time Monitoring System'
                        ]"
                        :bodyArray="[
                            'Built responsive dashboard components for monitoring data transfers with real-time updates using Vue.js and TypeScript',
                            'Developed intuitive device management interface with drag-and-drop functionality for simplified data operations',
                            'Created real-time monitoring system with WebSocket integration for live transfer status updates'
                        ]"
                        buttonColor="#004D25"
                        backgroundColor="#FFFFFF"
                    ></slideshow>
                </div>
            </sectionContainer>
        </fadeInComponent>

        <!-- Backend Development Section -->
        <fadeInComponent>
            <sectionContainer class="white-section">
                <div class="backend-work">
                    <h2>Backend Development</h2>
                    <p>
                        Contributed to the microservices architecture using Node.js and Express, 
                        developing and maintaining five core services for the platform.
                    </p>
                    <slideshow
                        class="backend-slides"
                        folderPath="/assets/seagate/backend"
                        fileType="png"
                        :numberOfImages="3"
                        :autoPlay="false"
                        :headerArray="[
                            'Microservices Architecture',
                            'Data Transfer Service',
                            'Authentication Service'
                        ]"
                        :bodyArray="[
                            'Designed and implemented a scalable microservices architecture with five core services: Authentication, Device Management, Data Transfer, Monitoring, and Analytics',
                            'Built robust data transfer service handling petabyte-scale operations with progress tracking and error recovery',
                            'Developed secure authentication service with role-based access control and token management'
                        ]"
                        buttonColor="#004D25"
                        backgroundColor="#FFFFFF"
                    ></slideshow>
                </div>
            </sectionContainer>
        </fadeInComponent>

        <!-- Testing Section -->
        <fadeInComponent>
            <sectionContainer class="green-section">
                <div class="testing-work">
                    <h2>Testing and Quality Assurance</h2>
                    <p>
                        Established comprehensive testing practices using Selenium for automated testing,
                        ensuring reliability and performance of the Lyve Pilot platform.
                    </p>
                    <slideshow
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
                    ></slideshow>
                </div>
            </sectionContainer>
        </fadeInComponent>

        <!-- Reflection Section -->
        <fadeInComponent>
            <sectionContainer class="white-section">
                <div class="reflection-work">
                    <h2>Reflections & Key Learnings</h2>
                    <p>
                        Working on Lyve Pilot at Seagate was a transformative experience that helped me grow 
                        both technically and professionally. Here are my key takeaways from the project:
                    </p>
                    <div class="reflections-grid">
                        <ReflectionItem
                            title="Enterprise-Scale Development"
                            description="Building solutions for petabyte-scale data movement taught me the importance of performance optimization, error handling, and system reliability at enterprise scale."
                            backgroundColor="#004D25"
                            :number="1"
                        />
                        <ReflectionItem
                            title="Microservices Architecture"
                            description="Designing and maintaining microservices taught me the value of service isolation, clear API contracts, and the importance of robust inter-service communication patterns."
                            backgroundColor="#004D25"
                            :number="2"
                        />
                        <ReflectionItem
                            title="Test Automation"
                            description="Implementing Selenium testing frameworks showed me how crucial automated testing is for maintaining quality in large-scale applications and ensuring reliable deployments."
                            backgroundColor="#004D25"
                            :number="3"
                        />
                        <ReflectionItem
                            title="Cross-Team Collaboration"
                            description="Working with hardware teams, UX designers, and product managers helped me develop strong communication skills and appreciate the value of diverse perspectives in product development."
                            backgroundColor="#004D25"
                            :number="4"
                        />
                    </div>
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
    background-color: #000000;
}

.green-section {
    background-color: #004D25;
    color: white;
}

.white-section {
    background-color: white;
    color: black;
}

.header-content {
    text-align: center;
    padding: 40px 0;
}

.header-image {
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
    margin-bottom: 30px;
    border-radius: 10px;
}

.intro-text {
    font-size: 1.2em;
    line-height: 1.6;
    max-width: 800px;
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
    background-color: rgba(0, 77, 37, 0.1);
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

p {
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 20px;
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