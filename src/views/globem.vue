<template>
    <div class="container">
    <sectionContainer class="dark">
      <h1 style="text-align: center;">
      Visualizing Wellness: Understanding student mental health through Longitudinal data analysis
    </h1>
    <br /><br />
    <p>
      In today's world where college students juggle multiple responsibilities, mental health and wellness is often overlooked. For this project, we have used the 
      <a href="https://physionet.org/content/globem/1.1/INS-W_1/#files-panel">GLOBEM dataset</a>, a multi-year dataset for longitudinal human behavior...
    </p>
    </sectionContainer> 

    <sectionContainer>
      <h3>Analysing global trends</h3>
     <div id="second">
      <img src="../assets/data_viz_portal/initial_correlation.png" style="width:100%; height: auto;">
    </div>
    </sectionContainer>

    <sectionContainer class="dark">
      <h1 style="text-align: center;">
      Visualizing Wellness: Understanding student mental health through Longitudinal data analysis
    </h1>
    <br /><br />
    <p>
      In today's world where college students juggle multiple responsibilities, mental health and wellness is often overlooked. For this project, we have used the 
      <a href="https://physionet.org/content/globem/1.1/INS-W_1/#files-panel">GLOBEM dataset</a>, a multi-year dataset for longitudinal human behavior...
    </p>

    <h3>Changes in mental health over weeks</h3>
    <br />
    <p>First, we observe how student mental health changes over the weeks...</p>
      <div ref="viewofYear_range"></div>
      <div ref="viewofEmotion_score"></div>
      <div id="first" ref="first_plot"></div>
    </sectionContainer>

    <sectionContainer>
      <h3>Expanding selections</h3>
      <div ref="viewofYear_steps"></div>
      <div ref="viewofParticipant_dropdown"></div>
      <div id="fourth" ref="final_chart"></div>
      <p>
        Credit: 
        <a href="https://observablehq.com/d/b02a387aa7a1c933" target="_blank">
          Data Visualization 2024 Final Project by Varun Narayanswamy
        </a>
      </p>
    </sectionContainer>

    </div> 
  </template>
  
  <script>
  import { onMounted, ref, onBeforeUnmount } from 'vue';
  import { Runtime, Inspector } from '@observablehq/runtime';
  //import sectionContainer from '../components/widgets/section.vue';
  // Statistically import the notebook like a local module
  import notebook from 'b02a387aa7a1c933'; // Adjust the name if the package exports it differently
  
  export default {
    name: 'Note-book',
   // components: {sectionContainer},
    setup() {
      const viewofYear_range = ref(null);
      const viewofEmotion_score = ref(null);
      const first_plot = ref(null);
      const viewofYear_steps = ref(null);
      const viewofParticipant_dropdown = ref(null);
      const final_chart = ref(null);
  
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

        first_plot.value.addEventListener('click', (event) => {
          console.log("Clicked on the first plot:", event);
        });
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
      };
    },
  };
  </script>
  
  <style scoped>

  .container {
    background-color: white;
    width:auto;
    padding-top: 2%;    
  }
  .dark {
    border-color: black;
    border-width: 2px;
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
  