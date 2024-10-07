<template>
    <div class="container">

    <sectionContainer class="light">
      <h1>Analysing Longitudinal Human Behavior</h1>
      <h3 style="text-align: center;">
      Visualizing Wellness: Understanding student mental health through Longitudinal data analysis
    </h3>
    <div class="main_img"></div>
    <h2> Team</h2>
    <p>Mars Gao, Soham Gadgil, <b>Varun Narayanswamy</b></p>
    <h2>Timeline</h2>
    <p>March 2024 - June 2024</p>
    </sectionContainer>
    <sectionContainer class="dark" style="text-align: left;">
      <h1>The Situation</h1>
      <p> In today's world where college students have to juggle multiple responsibilities, mental health and wellness is something that is often overlooked.  For this project, we have used the <a href="https://physionet.org/content/globem/1.1/INS-W_1/#files-panel">GLOBEM dataset</a>.</p>
      
      <h2>The GLOBEM Dataset</h2>
      <p>  
      The GLOBEM dataset is a mult-year dataset for logitudinal human behavior, collected from the daily activities of around 705 diverse UW students.</p>
      <ul>
        <li><p>The data collection spans three years (~14 weeks each year, March to June, from 2019 to 2021)</p></li> 
        <li><p>It contains a variety of different sensor, phone usage, and sleep data for analysing student behavior. </p></li> 
        <li><p>Each of the attributes are collected during different phases of the day: morning, afternoon, evening, and night.</p></li>
      </ul>
    </sectionContainer>
    <sectionContainer class="light">
      <h2>Mental Health Data</h2>
      <p>The GLOBEM dataset provides an insight into the mental health of the students through quantitative depression and anxiety scores.</p>
       
      <p>To measure mental health, we use two different metrics:</p>
      <ul>
        <li><p>PHQ-4 (Patient Health Questionnaire 4), which is a 4-item scale assessing both anxiety and depression, with higher values indicating higher risk. The PHQ-4 scores range from 0 to 6.</p></li>
        <li><p>PANAS (Positive and Negative Affect Schedule), which is a 10-item scale measuring the level of positive and negative affects separately. Higher values indicateds larger extent for each of them.
          The PANAS scores range from 0 to 20.
        </p></li>
      </ul>
    </sectionContainer> 
    <sectionContainer class="dark">
      <h1>Data Filling</h1>
      <p>After gaining access to the dataset the team began analysing we had a number of issues to determine </p>
      <div class="issue_1">
        <h3>Messy Data</h3>
        <p>We struggled with data metrics that made no sense, potentially collected incorrectly with poor device collection or more</p>
        <h3>Missing Data</h3>
        <p>Many of the student data entries were empty, with students missing entries of devices failing to collect. Due to this, we were forced to look at data trends, and when possible fill in the empty data based on existing trends</p>
        <h3>Students Variation</h3>
        <p>Even with more data, each and every student is highly different. Looking at averages, and approaches was many times unhelpful, forcing us to consider the individuals.</p>
      </div>
      <p>Our approach to making design was to build many different visualizations, constantly using them to analyze for potential patterns and answers</p>
    </sectionContainer>

    <sectionContainer class="light">
    <h2>Changes in mental health over weeks</h2>
    <br />
    <p> First, we observe how student mental health changes over the weeks. Hovering over a line reveals the trend for that student for a given year and a given mental health metric.
      There are many interesting patterns observable, with some students' mental health deterioriating over the quarter, possibly due to increased workload, while improving for other students.</p>
      <div ref="viewofYear_range"></div>
      <div ref="viewofEmotion_score"></div>
      <div id="first" ref="first_plot"></div>
    </sectionContainer>

    <sectionContainer class="dark">
      <h3>Analysing global trends</h3>
      <p>Next, to understand global behavior, we combine the data for all the years and create a heatmap to show the correlation between any two attributes. Each attribute is further subdivided into the time of day and the naming
        convention followed is {attribute_name}.{time_of_day}. <strong>Sleep</strong> refers to the total minutes of sleep, <strong>Screen</strong> refers to the total time the phone screen was turned on, <strong>Episodes</strong> refers to the number of unlock episodes of the phone, <strong>Steps</strong>
        refers to the number of steps taken, and <strong>Loc</strong> refers to the locational area covered by the student in meters. The matrix is re-orderable, and any attribute can be selected and dragged to make it easier to analyse. 
        This allowed us to identify any potential attributes which could be correlated with mental health. 
        <br><br>
        Focusing on the the mental health metrics, anxiety and depression seem to be highly correlated with each other, which is perhaps unsurprising but it is still intersting since they track two different aspects of mental health. 
        None of anxiety, depression, or PANAS negative score seem to be correlated with the daily activities that were measured which is a bit surprising. They are slightly correlated with morning sleep, albeit it is pretty weak. PANAS positive score on the other hand seems to have a correlation with the number of steps. </p>
      <img src="../assets/data_viz_portal/initial_correlation.png" style="width:100%; margin: auto; height: auto;">
    </sectionContainer>

    <sectionContainer class="light">
      <h3>Diving deeper into individual student behavior</h3>
      <p> After analysing the global trends, we found that there might be a correlation between the PANAS positive score and the number of steps. The visualization below explores into this relationship on a per-student basis. Given a year and a student id, we can  
    observe how the number of average steps has changed over the different weeks. Selecting over the different weeks reveals how the steps and PANAS positive score are related for that student compared to the other students. 'All' can be selected to highlight all the students. 
    An additional linear trendline allows for observing a more interpretable pattern from the scatter plot. The tooltip allows us to select interesting students and observe their trends over weeks. </p>
      <div class="graph_object">
        <div ref="viewofYear_steps"></div>
        <div ref="viewofParticipant_dropdown"></div>
        <div id="third" ref="final_chart"></div>
      </div>
    </sectionContainer>

    <sectionContainer class="dark">
      <h2>Expanding Selections</h2>
      <p>Instead of looking at individual weeks, the visualization below allows for combining arbitrary number of weeks and students. On brushing over the dot plot to select a subset of students based on the period of time and steps, the step counts are sub-divided into different times of the day and their relationship to the PANAS positive score can be observed. In this case, both the x and y values are averaged 
        over the selected period for each student. This allows for probing into questions like "For students who walk a lot, how does their step count at different times of the day relate to their PANAS positive score over time?"</p>
      <div ref="viewofYear_drop_down"></div>
      <div ref="student_phone"></div>
    </sectionContainer>

    </div> 
  </template>
  
  <script>
  import { onMounted, ref, onBeforeUnmount } from 'vue';
  import { Runtime, Inspector } from '@observablehq/runtime';
  import sectionContainer from '../components/widgets/section.vue';
  // Statistically import the notebook like a local module
  import notebook from 'b02a387aa7a1c933'; // Adjust the name if the package exports it differently
  import notebook2 from '8ec2a3db467cf4aa';
  
  export default {
    name: 'Note-book',
    components: {sectionContainer},
    setup() {
      const viewofYear_range = ref(null);
      const viewofEmotion_score = ref(null);
      const first_plot = ref(null);
      const viewofYear_steps = ref(null);
      const viewofParticipant_dropdown = ref(null);
      const final_chart = ref(null);
      const viewofYear_drop_down = ref(null);
      const student_phone = ref(null);
  
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
          return ['year_data','year_data_steps', 'participant_num'].includes(name);
        });

        runtime.module(notebook2, (name) => {
          if (name === 'viewof year_drop_down') return new Inspector(viewofYear_drop_down.value);
          if (name === 'student_phone') return new Inspector(student_phone.value);
          return ['filtered_students_year'].includes(name);
        });

        const firstPlotElement = first_plot.value;
        if (firstPlotElement) {
          firstPlotElement.addEventListener('mouseover', (event) => {
            console.log("Hover event on the first plot:", event);
          });

          firstPlotElement.addEventListener('click', (event) => {
            console.log("Click event on the first plot:", event);
          });
        }

        let canvas_object = document.getElementsByClassName('canvas.marks');
        console.log(canvas_object)
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
        viewofYear_drop_down,
        student_phone
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
    background-color: rgb(234, 235, 255);
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
  .main_img {
    background-image: url('../assets/data_viz_portal/pink_background.png');
    width: 100%;
    aspect-ratio: 2202/1334;
    background-size: contain;
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

  #first {
    /* border: 2px solid black;
    width: 770px; */
   max-width: 100%;
  }

/* Adds dark mode */
@media (prefers-color-scheme: dark) {
  body {
      background-color: #f0ebde;
      color: rgb(3, 3, 3);
  }
}

  </style>
  