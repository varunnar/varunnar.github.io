<template>
    <div class="container">

      <h1>Analysing Longitudinal Human Behavior</h1>
    <sectionContainer class="dark" style="text-align: left;">
      <h2 style="text-align: center;">
      Visualizing Wellness: Understanding student mental health through Longitudinal data analysis
    </h2>
    <p>
        In today's world where college students have to juggle multiple responsibilities, mental health and wellness is something that is often overlooked.  For this project, we have used the <a href="https://physionet.org/content/globem/1.1/INS-W_1/#files-panel">GLOBEM dataset</a>, which is a mult-year dataset for logitudinal human behavior, 
        collected from the daily activities of around 705 diverse UW students. The data collection spans three years (~14 weeks each year, March to June, from 2019 to 2021) and it contains a variety of different sensor, phone usage, and sleep
        data for analysing student behavior. Each of the attributes are collected during different phases of the day: morning, afternoon, evening, and night. It also provides an insight into the mental health of the students through quantitative depression and anxiety scores.
        The dataset is huge, being split into multiple files for different years and type of data, with some files having more than 1100 attributes to analyze. It also has many missing values, either because the students did not respond to the questionnaire or they did not wear the device to collect the sensor data.
        Here, we aim to use multiple interactive visualizations to achieve two goals:</p>
        <ul>
          <li>Provide some structure to the massive amount of unstructured data collected from UW students</li>
          <li>Enable researchers to find interesting attributes that affect the mental health of students</li>
        </ul>
        To measure mental health, we use two different metrics: 
        <ul>
          <li>PHQ-4 (Patient Health Questionnaire 4), which is a 4-item scale assessing both anxiety and depression, with higher values indicating higher risk. The PHQ-4 scores range from 0 to 6.</li>
          <li>PANAS (Positive and Negative Affect Schedule), which is a 10-item scale measuring the level of positive and negative affects separately. Higher values indicateds larger extent for each of them.
            The PANAS scores range from 0 to 20.
          </li>
        </ul>
    </sectionContainer> 

    <sectionContainer class="light">
    <h3>Changes in mental health over weeks</h3>
    <br />
    <p> First, we observe how student mental health changes over the weeks. Hovering over a line reveals the trend for that student for a given year and a given mental health metric.
      There are many interesting patterns observable, with some students' mental health deterioriating over the quarter, possibly due to increased workload, while improving for other students.</p>
      <div ref="viewofYear_range"></div>
      <div ref="viewofEmotion_score"></div>
      <div id="first" ref="first_plot"></div>
    </sectionContainer>

    <sectionContainer class="dark">
      <h3>Analysing global trends</h3>
      <img src="../assets/data_viz_portal/initial_correlation.png" style="width:100%; margin: auto; height: auto;">
    </sectionContainer>

    <sectionContainer class="light">
      <h3>Expanding selections</h3>
      <div ref="viewofYear_steps"></div>
      <div ref="viewofParticipant_dropdown"></div>
      <div ref="final_chart"></div>
    </sectionContainer>

    <sectionContainer class="dark">
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
    background-color: rgb(255, 255, 255);
    width:auto;
    padding-top: 2%;    
  }
  .dark {
    background-color: rgba(115, 158, 243, .4);
    border-width: 2px;
    border-color: rgb(240, 240, 240);
  }

  .light {
    background-color: rgba(255, 124, 124, .4);
    border-width: 2px;
    border-color: rgb(240, 240, 240);
  }
/* Adds dark mode */
@media (prefers-color-scheme: dark) {
  body {
      background-color: #f0ebde;
      color: rgb(3, 3, 3);
  }
}

#first {
    /* border: 2px solid black;
    width: 770px; */
   margin-left: 100px;

}

#second {
    /* border: 2px solid black;
    width: 770px; */
   margin-left: 170px;

}

#third {
    /* border: 2px solid black;
    width: 770px; */
   margin-left: 280px;

}

#fourth {
    /* border: 2px solid black;
    width: 770px; */
   margin-left: 250px;

}
  </style>
  