<template>
  <div class="container my-5">
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
    <div id="observablehq-viewof-year_range_def-0270568d"></div>
    <div id="observablehq-viewof-emotion_score-0270568d"></div>
    <div id="first">
      <div id="observablehq-first_plot-0270568d"></div>
    </div>

    <!-- Other visualization sections -->
    <h3>Analysing global trends</h3>
    <div id="second">
      <div id="observablehq-correlation_plot-f7fb3cb0"></div>
    </div>
    
    <h3>Diving deeper into individual student behavior</h3>
    <iframe width="100%" height="917" frameborder="0"
  src="https://odebservablehq.com/embed/b02a387aa7a1c933?cells=viewof+year_steps%2Cviewof+participant_dropdown%2Cfinal_chart"></iframe>

    <h3>Expanding selections</h3>
    <div id="fourth">
      <div id="observablehq-final_chart-e27d83fc"></div>
    </div>
  </div>
</template>

<script>
// import {Runtime, Inspector} from "@observablehq/runtime";
// // Observable Notebooks for the visualizations
// import firstViz from "https://api.observablehq.com/d/b3a6af228a9f2c7d@1476.js?v=4";
// import secondViz from "https://api.observablehq.com/d/c733be2b9dfc1e50@945.js?v=4";
// import thirdViz from "https://api.observablehq.com/d/b3a6af228a9f2c7d@1476.js?v=4";
// import fourthViz from "https://api.observablehq.com/d/c7ba1e93ce605c6a@703.js?v=4";

export default {
  name: "HumanBehaviorPage",
  // mounted() {
  //   import("https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js")
  //     .then(({ Runtime, Inspector }) => {
  //       import("https://api.observablehq.com/d/b3a6af228a9f2c7d@1476.js?v=4").then((define) => {
  //         const runtime = new Runtime();
  //         runtime.module(define.default, name => {
  //           if (name === "viewof year_range_def") return new Inspector(document.querySelector("#observablehq-viewof-year_range_def"));
  //           if (name === "viewof emotion_score") return new Inspector(document.querySelector("#observablehq-viewof-emotion_score"));
  //           if (name === "first_plot") return new Inspector(document.querySelector("#observablehq-first_plot"));
  //           return null;
  //         });
  //       });
  //     });
  // }
  // mounted() {
  //   const runtime = new Runtime();
    
  //   // Load Observable notebooks for first visualization
  //   runtime.module(firstViz, name => {
  //     if (name === "viewof year_range_def") return new Inspector(document.querySelector("#observablehq-viewof-year_range_def"));
  //     if (name === "viewof emotion_score") return new Inspector(document.querySelector("#observablehq-viewof-emotion_score"));
  //     if (name === "first_plot") return new Inspector(document.querySelector("#observablehq-first_plot"));
  //   });

  //   // Load Observable notebooks for second visualization
  //   runtime.module(secondViz, name => {
  //     if (name === "correlation_plot") return new Inspector(document.querySelector("#observablehq-correlation_plot"));
  //   });

  //   // Load Observable notebooks for third visualization
  //   runtime.module(thirdViz, name => {
  //     if (name === "viewof year_steps") return new Inspector(document.querySelector("#observablehq-viewof-year_steps"));
  //     if (name === "viewof participant_dropdown") return new Inspector(document.querySelector("#observablehq-viewof-participant_dropdown"));
  //     if (name === "final_chart") return new Inspector(document.querySelector("#observablehq-final_chart"));
  //   });

  //   // Load Observable notebooks for fourth visualization
  //   runtime.module(fourthViz, name => {
  //     if (name === "viewof year_drop_down") return new Inspector(document.querySelector("#observablehq-viewof-year_drop_down"));
  //     if (name === "final_chart") return new Inspector(document.querySelector("#observablehq-final_chart_extended"));
  //   });
  // }
};
</script>

<style scoped>
/* CSS from your HTML */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #f0ebde;
    color: rgb(3, 3, 3);
  }
}

#first {
  margin-left: 100px;
}

#second {
  margin-left: 170px;
}

#third {
  margin-left: 280px;
}

#fourth {
  margin-left: 250px;
}
</style>