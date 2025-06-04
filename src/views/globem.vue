<template>
    <div class="container">
      <b style="color: white">*This project is best viewed on desktop views</b>
    
    <fadeInComponent>
      <sectionContainer class="light">
        <h1>Analysing Longitudinal Human Behavior</h1>
        <div style="text-align: center; margin-bottom: 20px;">
          <p style="margin-bottom: 5px">Visualizing Wellness: Understanding student mental health through Longitudinal data analysis</p>
        </div>
  
        <div class="main_img"></div>
        <projectDetails
          :members="['Mars Gao', 'Soham Gadgil', 'Varun Narayanswamy']"
          role="Lead Visualization Developer"
          :timelineNumber="4"
          timelineUnit="months"
          style="margin-top: 20px;"
          backgroundColor="#FFFFFF"
        />
        <!-- <h2> Team</h2>
        <p>Mars Gao, Soham Gadgil, <b>Varun Narayanswamy</b></p>
        <h2>Timeline</h2>
        <p>March 2024 - June 2024</p> -->
      </sectionContainer>
    </fadeInComponent>

    <fadeInComponent>
    <sectionContainer class="dark situation">
      <h1>The Situation</h1>
      <p> In today's world where college students have to juggle multiple responsibilities, mental health and wellness is something that is often overlooked.</p>
      <h2>Our Goal</h2>
      <p>Our goal was to create a portal to help <b>researchers, educators, and policymakers</b> explore links between college student <b>behavior and mental health</b>, to improve the system for a more <b>mindful environment.</b></p>
      <div class="grid">
        <div id="content">
          <h2>The GLOBEM Dataset</h2>
          <p>  
            For this project, we have used the <a href="https://physionet.org/content/globem/1.1/INS-W_1/#files-panel">GLOBEM dataset</a>. The GLOBEM dataset is a mult-year dataset for logitudinal human behavior, collected from the daily activities of around 705 diverse UW students.</p>
          <ul>
            <li><p>The data collection spans three years (~14 weeks each year, March to June, from 2019 to 2021)</p></li> 
            <li><p>It contains a variety of different sensor, phone usage, and sleep data for analysing student behavior. </p></li> 
            <li><p>Each of the attributes are collected during different phases of the day: morning, afternoon, evening, and night.</p></li>
          </ul>
          <h3>Mental Health Data</h3>
          <p>The GLOBEM dataset provides an insight into the mental health of the students through quantitative depression and anxiety scores. This data is collected from students using weekly short surveys they take, and use a number of different parameters.</p>
        
          <p>To measure mental health, we use two different metrics:</p>
          <ul>
            <li>
              <p>PHQ-4 (Patient Health Questionnaire 4)</p>
            </li>
            <li>
              <p>PANAS (Positive and Negative Affect Schedule)</p>
            </li>
              <!-- <p>A 10-item scale measuring positive and negative affects separately.
                 Higher values indicate greater intensity. PANAS scores range from 0 to 20. </p> -->
          </ul>
        </div>
        <img src="../assets/data_viz_portal/tim-gouw-stressed_student.jpg"/>
      </div>
    </sectionContainer>
  </fadeInComponent>

    <fadeInComponent>
      <sectionContainer class="light">
        <h1>Our Process</h1>
        <p>After gaining access to the dataset the team began analysis. We quickly realized that we had a number of issues to deal with. </p>
        <div class="issue_1">
          <h3>Messy Data</h3>
          <p>We struggled with data metrics that made no sense, potentially collected incorrectly with poor device collection or more</p>
          <h3>Missing Data</h3>
          <p>Many of the student data entries were empty, with students missing entries of devices failing to collect. Due to this, we were forced to look at data trends, and when possible fill in the empty data based on existing trends</p>
          <h3>Students Variation</h3>
          <p>Even with more data, each and every student is highly different. Looking at averages, and approaches was many times unhelpful, forcing us to consider the individuals.</p>
        </div>
        <p>Our approach to identifying these issues and evaluating our solutions was to create many visualizations and continually assess them.</p>
        <div class="small_image_set">
          <img src="../assets/data_viz_portal/old_graph_1.png">
          <img src="../assets/data_viz_portal/old_graph_2.png">
          <img src="../assets/data_viz_portal/old_graph_3.png">
          <img src="../assets/data_viz_portal/old_graph_4.png">
          <img src="../assets/data_viz_portal/old_graph_5.png">
          <img src="../assets/data_viz_portal/old_graph_6.png">
        </div>
        <br/>
        <p>Below are the <b>finalized visualizations</b> we chose to showcase. </p>
      </sectionContainer>
    </fadeInComponent>

  <fadeInComponent>
    <sectionContainer class="dark" style="padding-left: 5%; padding-right: 5%;">
    <h1>Changes in mental health over weeks</h1>
    <p> We first examine weekly changes in student mental health. Hovering over a line shows trends for each student by year and metric. 
      Patterns reveal varied trajectories, with some students' 
      mental health declining, potentially from increased workload, while others improve.</p>
    <div class="graph_content">
      <overLappingButton>
        <template #extra-section>
          <div class="graph_explanation">
            <h2>Fields</h2>
            <h3><a href="https://www.oregonpainguidance.org/app/content/uploads/2016/05/PHQ-4.pdf">PHQ-4</a></h3>
            <li>Based on 4 "how often" questions (0-3). Two form an <b>Anxiety Score</b>, and the other two a <b>Depression Score</b>.</li>
            <li>Higher scores indicate a greater likelihood of anxiety or depression.</li>
            
            <h3><a href="https://positivepsychology.com/positive-and-negative-affect-schedule-panas/">PANAS</a></h3>
            <li>A 10-item scale measuring positive and negative emotions. Scores range from 0 to 20, with higher values indicating greater intensity.</li>
            
            <h3>Week</h3>
            <li>Students completed weekly surveys, allowing us to track changes in their PANAS and PHQ-4 scores over the quarter.</li>
            
            <h3>How to use this graph</h3>
            <ul>
              <li>Select a year and the mental health score to view.</li>
              <li>Hover over the graph—each line shows a student's mental health journey throughout the quarter.</li>
              <li>Unique student identifiers ensure anonymity. View identifiers on the left as you hover.</li>
              <li>Observe how scores change and align over time.</li>
            </ul>
          </div>
        </template>
      </overLappingButton>
      <div class="observable_content">
          <div ref="viewofYear_range"></div>
          <div ref="viewofEmotion_score"></div>
          <div class="graph_container">
            <div style="min-width: 400px;" id="first" ref="first_plot"></div>
        </div>
      </div>
    </div>
    </sectionContainer>
  </fadeInComponent>

    <fadeInComponent>
      <sectionContainer class="light">
        <h3>Analysing global trends</h3>
        <p>We aggregate yearly data to analyze global patterns, creating a heatmap to show correlations between attributes. 
          Each attribute is subdivided by time of day using the format {attribute_name}.{time_of_day}: "Sleep" denotes total minutes slept, 
          <b>"Screen"</b> the phone screen time, <b>"Episodes"</b> the number of unlocks, <b>"Steps"</b> the step count, and <b>"Loc"</b> the distance covered in meters. 
          <br><br></p>

          <!-- Focusing on the the mental health metrics, anxiety and depression seem to be highly correlated with each other, which is perhaps unsurprising but it is still intersting since they track two different aspects of mental health. 
          None of anxiety, depression, or PANAS negative score seem to be correlated with the daily activities that were measured which is a bit surprising. They are slightly correlated with morning sleep, albeit it is pretty weak. PANAS positive score on the other hand seems to have a correlation with the number of steps. </p> -->
        <img src="../assets/data_viz_portal/initial_correlation.png" style="width:100%; margin: auto; height: auto;">
      </sectionContainer>
    </fadeInComponent>

    <fadeInComponent>
      <sectionContainer class="dark">
        <h3>Diving deeper into individual student behavior</h3>
        <p>Analyzing global trends suggests a possible correlation between the PANAS positive score and step count. 
          The visualization below explores this per student, showing weekly changes in average steps and their relation to PANAS positive scores. 
          Selecting weeks or "All" highlights trends across students, with a linear trendline for clarity. 
          The tooltip enables selecting specific students to observe their weekly patterns.</p>
        <div class="graph_content">
        <overLappingButton>
        <!-- <template #custom-content>
        </template> -->
        <!-- <template #button-content>
          <span>Click Me</span>
        </template> -->
        <template #extra-section>
          <div class="graph_explanation">
          <h2>How This Graph Works</h2>
          <h3><a href="https://positivepsychology.com/positive-and-negative-affect-schedule-panas/">PANAS</a></h3>
          <li>PANAS is a 10-item scale measuring positive and negative emotions a person feels separately.</li>
            <li>A higher values indicate greater intensity. PANAS scores range from 0 to 20.</li>
            <li>Each student filled out a survey weekly informing, so we can therefore understand how their PANAS and PHQ-4 scores changes over the quarter.</li>
          <h3>Steps</h3>
          <li>Each students steps are recorded thanks to a wearable device they are wearing. Each weeks steps are averaged after this.</li>
          <h3>How to use this graph</h3>
          <ul>
            <li>Select a year and chose a student</li>
            <li>Use the top graph to understand their inspect their change in weekly steps and select a week to investigate</li>
            <li>Use the bottom graph to understand how their steps correlate with their PANAS Positive Score (how positive they are feeling) and how they compare to their peers. The selected student is highlighted in red</li>
          </ul>
          </div>
        </template>
        </overLappingButton>
        <div class="observable_content">
        <div class="graph_object">
          <div ref="viewofYear_steps"></div>
          <div ref="viewofParticipant_dropdown"></div>
          <div id="third" ref="final_chart"></div>
        </div>
        </div>
      </div>
      </sectionContainer>
    </fadeInComponent>

    <fadeInComponent>
      <sectionContainer class="light">
        <h2>Expanding Selections</h2>
        <p>
          The visualization below enables combining multiple weeks and students. 
          By selecting a subset of students and time periods in the dot plot, step counts are divided by times of day, showing their relationship to PANAS positive scores. 
          Both x and y values are averaged over the selected period, allowing insights like,
          "For students who walk a lot, how does their step count at different times of day relate to their PANAS positive score over time?"</p>
        <div class="graph_content">
          <overLappingButton>
            <!-- <template #custom-content>
            </template> -->
            <!-- <template #button-content>
              <span>Click Me</span>
            </template> -->
            <template #extra-section>
              <div class="graph_explanation">
              <h2>How to Read This Graph</h2>
              <h3>Week Period</h3>
              <li>The Week Periods represent sets of days for each week</li>
              <h3>Time Periods</h3>
              <p>Each day is split into 4 time Periods</p>
              <ul>
                <li><b>Night: </b>12:00 AM From midnight to 6:00 AM</li>
                <li><b>Morning: </b>6:00 AM From midnight to 12:00 PM</li>
                <li><b>Afternoon: </b>12:00 PM From midnight to 6:00 PM</li>
                <li><b>Evening: </b>6:00 AM From midnight to 12:00 AM</li>
              </ul>
              <h3>Steps</h3>
              <p>Each students steps is averaged over different time periods and displayed as a dot</p>
              <h3>PANAS Positive Score</h3>
              <p>An average is taken of each students PANAS Score throughout the year and displayed.
              <b>(This is not averaged over time periods, as students take the survey at the end of each week)</b></p>
              <h2>How to Use This Graph</h2><ul>
              <li>Select a Year</li>
              <li><b>Drag over</b> the top graph to select a subset of the students based on time period, number of steps or both</li>
              <li>The bottom graphs based around daily quadrants will filter to only include their data</li>
              <li>How does the trend line differ during different years? Different weeks? Different amount of step counts?</li></ul>
              </div>
            </template>
          </overLappingButton>
            
          <div class="observable_content">
            <div ref="viewofStep_breakdown"></div>
            <div ref="steps_time_breakdown"></div>
          </div>
          <!-- <h2>Our Interpretation</h2>
          <p>This visualization provides a number of different potential conclusions.</p>
            <li>First the week breakdown makes minimal difference to the trends, implying walking during different
              parts of the quarter doesn't effect the PANAS score differently</li>
            <li>Throughout students who walk different amount, </li>
          <p></p> -->
        </div>
      </sectionContainer>
  </fadeInComponent>

    <div class="grid_3fr_1fr">
        <ReflectionItem
            title="Further Research"
            description="I would like to conduct further research into how to best visualize the data. While the current visualization is effective, I believe there could be better ways to show the relationships between different metrics."
            backgroundColor="#27422C"
            :number="1"
        />
        <ReflectionItem
            title="Update Visualization Model"
            description="While vegalite provided us with a quick and easy way to test correlations and build graphics, using D3.js would allow us to have more control over the final product, and allow for more complex interactions."
            backgroundColor="#27422C"
            :number="2"
        />
        <ReflectionItem
            title="Further Data Transformations"
            description="Much of the data still felt messy, and we were forced to make a number of assumptions. I would like to explore more transformations to the data to see if we can get a better understanding of the data."
            backgroundColor="#27422C"
            :number="3"
        />
    </div>

    </div> 
  </template>
  
  <script>
  import { onMounted, ref, onBeforeUnmount } from 'vue';
  import { Runtime, Inspector } from '@observablehq/runtime';
  import overLappingButton from '../components/widgets/overLappingButton.vue';
  // Statistically import the notebook like a local module
  import notebook from 'b02a387aa7a1c933'; // Adjust the name if the package exports it differently
  // import notebook2 from '8ec2a3db467cf4aa';

  //VERSION THAT WORKS
  /*  "8ec2a3db467cf4aa": "https://api.observablehq.com/d/8ec2a3db467cf4aa.tgz?v=3",
    "b02a387aa7a1c933": "https://api.observablehq.com/d/b02a387aa7a1c933@1704.tgz?v=3", */


    ///MARS WEBPAGE - https://observablehq.com/d/329b9ec10c9f546f
    
  
  export default {
    name: 'Note-book',
    components: { overLappingButton },
    data() {
      return {
        clicked: false,
      }
    },
    setup() {
      const viewofYear_range = ref(null);
      const viewofEmotion_score = ref(null);
      const first_plot = ref(null);
      const viewofYear_steps = ref(null);
      const viewofParticipant_dropdown = ref(null);
      const final_chart = ref(null);
      const viewofStep_breakdown = ref(null);
      const steps_time_breakdown = ref(null);
      
      let runtime;
  
      onMounted(() => {
        runtime = new Runtime();
        runtime.module(notebook, (name) => {
          if (name === 'viewof emotion_score') return new Inspector(viewofEmotion_score.value);
          if (name === 'first_plot') return new Inspector(first_plot.value);
          if (name === 'viewof year_range_def') return new Inspector(viewofYear_range.value);
          if (name === 'viewof year_steps') return new Inspector(viewofYear_steps.value);
          if (name === 'viewof participant_dropdown') return new Inspector(viewofParticipant_dropdown.value);
          if (name === 'final_chart') return new Inspector(final_chart.value);
          if (name === 'viewof steps_breakdown') return new Inspector(viewofStep_breakdown.value);
          if (name === 'steps_time_breakdown') return new Inspector(steps_time_breakdown.value);
          return ['year_data','year_data_steps', 'participant_num'].includes(name);
        });

        // runtime.module(notebook2, (name) => {
        //   if (name === 'viewof year_drop_down') return new Inspector(viewofYear_drop_down.value);
        //   if (name === 'student_phone') return new Inspector(student_phone.value);
        //   return ['filtered_students_year'].includes(name);
        // });

        const firstPlotElement = first_plot.value;
        if (firstPlotElement) {
          firstPlotElement.addEventListener('mouseover', (event) => {
            console.log("Hover event on the first plot:", event);
          });

          firstPlotElement.addEventListener('click', (event) => {
            console.log("Click event on the first plot:", event);
          });
        }

        //let canvas_object = document.getElementsByClassName('canvas.marks');
        console.log("here")
        window.dispatchEvent(new Event('resize'));
        window.addEventListener('resize', function() { 
          console.log("Resize found")
        })
      });
  
      onBeforeUnmount(() => {
        if (runtime) runtime.dispose();
      });
  
      return {
        viewofYear_range,
        viewofEmotion_score,
        first_plot,
        viewofYear_steps,
        viewofParticipant_dropdown,
        final_chart,
        viewofStep_breakdown,
        steps_time_breakdown
      };
    },
  };
  </script>
  
  <style scoped>

  .container {
    /* background-color: rgb(255, 209, 209); */
    background-color: rgb(34, 34, 34);
    width:auto;
    padding-top: 2%; 
    height: auto; 
    padding-bottom: 2%;  
    color: black;
  }
  .dark {
    /* background-color: rgb(243, 247, 255); */
    /*background-color: rgb(234, 235, 255);*/
    background-color: rgb(252, 249, 249);
    border-width: 2px;
    border-color: rgb(240, 240, 240);
    text-align: left;
  }

  .light {
    background-color: rgb(252, 240, 240);
    background-color: rgb(255, 235, 235);
    border-width: 2px;
    border-color: rgb(240, 240, 240);
    text-align: left;
  }
  .graph_content {
    /* display: grid;
    grid-template-columns: 1fr 3fr; */
    position: relative;
    padding: 10px;
    border: solid black;
    background-color: white;
    border-radius: 20px;
    /* gap: 50px; */
  }
  .observable_content {
    width: 100%;
    overflow: hidden;
  }

  .graph_container {
    width: 100%;
    overflow: scroll;
  }

  .explanation_button {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .info_dropdown {
    position: absolute;
    right: 20px;
    top: 40px;
    border-radius: 20px;
    border: dashed black;
    padding: 10px;
    background-color: rgb(240, 240, 240);
  }

  .graph_explanation li, .graph_explanation p, .graph_explanation h3 {
    font-size: 12px;
  }

  .graph_explanation h2 {
    font-size: 16px;
  }
  
  .main_img {
    background-image: url('../assets/data_viz_portal/pink_background.png');
    width: 100%;
    aspect-ratio: 2202/1334;
    background-size: contain;
  }
  .small_image_set {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 40px;
  }

  .situation {
    /* background-image: url("../assets/data_viz_portal/tim-gouw-stressed_student.jpg");
    background-image: linear-gradient(to bottom right, red, yellow); */
    text-align: left;
    padding-left: 5%;
    padding-right: 5%;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }

  .grid img {
    padding: 20px;
    height: 95%;
    width: 100%; 
    object-fit: cover;
    object-position: 40% 0%;
    border-radius: 30px;
  }

  .small_image_set img {
    width: 30%;
    min-width: 300px;
    height: auto;
    border-radius: 5px;
    box-shadow: 5px 5px 30px rgb(158, 158, 158);
    object-fit: contain;
    background-color: white;
  }

  @media (max-width: 1200px) {
    .small_image_set img{
      width: 100%;
      min-width: 0px;
    }
    .grid {
      grid-template-columns: 1fr;
    }
    .graph_content {
      grid-template-columns: 1fr;
    }
  }

  h1 {
    text-align: center;
  }
  .marks {
    /* padding: 20px;
    width: 100%;
    height: auto; */
    background-color: red;
  }
  #third {
    /* background-color: white; */
    width: 100%;
    margin-top: 10%;
    text-align: center;
  }

/* Adds dark mode */
@media (prefers-color-scheme: dark) {
  body {
      background-color: #f0ebde;
      color: rgb(3, 3, 3);
  }
}

@media (max-width: 850px) {
  .graph_object {
    overflow: hidden;
  }
}

  </style>
  