<template>
    <!-- <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" onload="this.width=screen.width-100;this.height=screen.height;" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYMt6LSZGrnwEE9iW6f0V4D%2FWebpage%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D0-1%26viewport%3D-567%252C-2041%252C0.18%26t%3D6LigpQb20GFEuMoP-1%26scaling%3Dmin-zoom%26mode%3Ddesign" allowfullscreen="true"></iframe> -->
    <div class="section hero_section">
      <h1>Project Tightrope</h1>
      <div class="hero_image"></div>
      <div class = "header_text"> A walk-up-and-play style multiplayer videogame, that teaches players about the physical/mental experience of anxiety and display the importance of community support. </div>
      <div class="cards_obj">
        <div class="card white_container" style="width:300px">
          <h2>Organization</h2>
          <p>Master's for Human Computer Interaction and Design</p>
        </div>
        <div class="card white_container" style="width:300px">
          <h2>The Project Duration</h2>
          <p>The project began was January 3rd, 2024 and concluded on March 10th, 2024.</p>
        </div>
        <div class ="card white_container" style="width:300px">
          <h2>The Team</h2>
          <p><b>Varun Narayanswamy,</b> Samantha Ting, Annie Song, Husna Tabbassun</p>
        </div>
        <div class ="card white_container" style="width:300px">
          <h2>My Roles</h2>
          <p><b>Lead Developer</b>, designer, user researcher</p>
        </div>
      </div>
    </div>

    <div class="section situation"> 
      <h1>The Situation</h1>
      <p>This project was assigned in prototyping studio course. We were asked to make a game that fit the following criteria: </p>
      <div class="cards_obj">
        <div class="card white_container">
          <h2>Multiplayer</h2>
          <p>The game needed to include some form of multiplayer element. This game should be an experience to share.</p>
        </div>
        <div class="card white_container">
          <h2>Walk Up and Play</h2>
          <p>The game shouldn’t require previous exposure and should friendly to a different players independent. </p>
        </div>
        <div class ="card white_container">
          <h2>Custom Controller</h2>
          <p>The game should include at least 1 custom made controller. The controller should be large and fun, compelling in of itself.</p>
        </div>
        <div class ="card white_container">
          <h2>Social Issue</h2>
          <p>The game should make a statement on a social issue. Players should leave feeling informed and motivated to make changes going forward.</p>
        </div>
      </div>
    </div>

    <div class="green_container section research_ideation"> 
      <h1>Research and Ideation</h1>
      <h2>Initial Research</h2>
      <div>
        <p>From our initial research, we focused on anxiety and mental health. 
          We designed a controller where the main player uses a balancing board and rod to dodge obstacles, 
          simulating the physical and mental experience of anxiety.</p>
        <div class = "initial_research_circles">
          <div class="research_circles">
            <img src="../assets/project_tightrope/game1.png">
          </div>
          <div class="research_circles">
            <img src="../assets/project_tightrope/game2.png">
          </div>
          <div class="research_circles">
            <img src="../assets/project_tightrope/game3.png">
          </div>
        </div>
      </div>
      <h2>Ideation</h2>
      <p>From our initial research, we focused on anxiety and mental health. We designed a controller where the main player 
        uses a balancing board and rod to dodge obstacles, simulating the physical and mental experience of anxiety.</p>
        <img style="width: 100%" src="../assets//project_tightrope/big_img.png">
    </div>

    <!-- <div id="observablehq-viewof-year_steps-0270568d"></div>
    <div id="observablehq-viewof-participant_dropdown-0270568d"></div>
    <div id="third">
    <div id="observablehq-final_chart-0270568d"></div>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
    <script type="module">
    import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
    import define from "https://api.observablehq.com/d/b3a6af228a9f2c7d@1476.js?v=4";
    new Runtime().module(define, name => {
      if (name === "viewof year_steps") return new Inspector(document.querySelector("#observablehq-viewof-year_steps-0270568d"));
      if (name === "viewof participant_dropdown") return new Inspector(document.querySelector("#observablehq-viewof-participant_dropdown-0270568d"));
      if (name === "final_chart") return new Inspector(document.querySelector("#observablehq-final_chart-0270568d"));
      return ["year_data_steps","participant_num"].includes(name);
    });
    </script>
    </div> -->
<!-- 
    <iframe width="100%" height="1121" frameborder="0" backgroundColor="white"
  src="https://observablehq.com/embed/4158df67e625f9c8@536?cells=larger_object"></iframe>  -->

    <div class="white_container section WOZ_testing"> 
      <h1>WOZ Testing</h1>
      <p>After refining and validating our idea, we conducted three Wizard of Oz (WOZ) testing sessions. We developed the on-screen game elements while simulating the controllers, which allowed us to progress on the game code, test controllers for players 2 and 3, and assess our message's effectiveness.</p>
      <div class="woz_test">
        <h2>Prototype 1 - Tilt Mechanism</h2>
        <p>The first prototype tested player 1's tilting mechanism. During gameplay, bat obstacles representing stress and responsibilities flew down from the top of the screen, and the player character could move left and right to dodge them.</p>
        <div class="woz_obj">
          <div class="code_obj">
            <pre v-html="woz_text_1"></pre>
          </div>
          <img src="../assets/project_tightrope/woz_1.gif">
        </div>
      </div>
      <div class="woz_test">
        <h2>Prototype 2 - Swatting Mechanism</h2>
        <p>The second prototype tested a swatting mechanism for the second and third players. During gameplay, bat obstacles from the first prototype moved in from the left and right.</p>
        <div class="woz_obj">
          <img src="../assets/project_tightrope/woz_2.gif">
          <div class="code_obj">
            <pre v-html="woz_text_2"></pre>
          </div>
        </div>
      </div>
      <div class="woz_test">
        <h2>Prototype 3 - Flapping Mechanism</h2>
        <p>The final prototype tested a flapping motion for the second and third players. During gameplay, the players flapped in unison to move the character closer to the cliff face. </p>
        <div class="woz_obj">
          <div class="code_obj">
            <pre v-html="woz_text_3"></pre>
          </div>
          <img src="../assets/project_tightrope/woz_3.gif">
      </div>
      <div class="finding_object">
        <h2>Findings</h2>
        <div class="findings">
          <div class="finding">
            <h3>Narration Changes</h3>
            <p>No more bats! We switched the bats to  orbs.
              Light Orbs represented positivity and was something to collect. 
              Dark orbs represented negativity and were something to avoid. </p>
          </div>
          <div class="finding">
            <h3>Player 2/3 Controller</h3>
            <p>Player 1 will continue to use the balancing rod and board. 
            Their task now will be to collect light orbs and avoid dark orbs.  </p>
          </div>
          <div class="finding">
            <h3>Player 1 controller</h3>
            <p>Player 2 and player 3 will use wing controllers and continue to use the swatting mechanism, 
            and moving light orbs towards player 1, and dark orbs away from them.  </p>
          </div>
        </div>
      </div>
    </div> 
  </div>
  <div class="green_container section idea_refinement"></div>
</template>
<script>
import woz_text_1 from 'raw-loader!../assets/project_tightrope/code_files/woz_1.txt';
import woz_text_2 from 'raw-loader!../assets/project_tightrope/code_files/woz_2.txt';
import woz_text_3 from 'raw-loader!../assets/project_tightrope/code_files/woz_3.txt';
export default {
  name: 'projectTightRope',
  data() {
      return {
        width_val: window.innerWidth,
        height_val: window.innerHeight,
        woz_text_1: woz_text_1,
        woz_text_2: woz_text_2,
        woz_text_3: woz_text_3
      };
    },
  computed: {
    woz1Code() {
      console.log("hello");
      console.log(this.woz_text_1);
      return this.woz_text_1;
    }
  }
}
</script>

<style lang="scss">
  p {
    font-size: 20px;
    //color: black;
  }
  .header_text {
    font-size: 35px;
    font-weight: bold;
  }
  .hero_image {
    background-image: url("../assets/project_tightrope/main_image.png");
    width: 700px;
    height: 700px;
    background-size: contain;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2%;
  }
  .section {
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 2%;
    padding-bottom: 2%;
  }
  .hero_section {
    background-color: #014A39;
    color: white;
    h1 {
      color: white;
      font-size: 50px;
    }
  }

  .WOZ_testing, .research_ideation, .idea_refinement{
    text-align: left;
  }
  .woz_test {
    color: white;
    margin-top: 50px;
  }

  .woz_obj {
    //display: grid;
    display: flex;
    //@at-rootgrid-template-columns: 1fr 1fr;
    flex-direction: row;
    gap: 50px;
    justify-content: space-around;
    // margin-left: 5%;
    // margin-right: 5%;
    align-items: flex-start;
    p {
      //width: 50%;
      margin: 0px;
    }
    img {
      border-radius: 20%;
      height: 400px;
     // width: 70%;
    }
  }

  .code_obj {
    width: 50%;
    height: 400px;
    background-color: black;
    overflow: scroll;
    pre {
      color: white;
    }
  }

  .white_container {
    background-color: rgb(255, 255, 255);
    color: #014A39;
    p {
      color: black;
    }
    h2 {
      color: #014A39;
    }
    h3 {
      color: #014A39;
    }
  }

  .green_container {
    background-color: #014A39;
    color: white;
  }

  .two_column_view {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .card {
    width: 350px;
    aspect-ratio: 1 / 1;
    border-radius: 2000px;
    border-style: solid;
    border-color: #014A39;
    margin: 2px;
    p {
      margin-left: 10%;
      margin-right: 10%;
    }
    h2 {
      margin-top: 25%;
      margin-left: 5%;
      margin-right: 5%;
    }
  }

  .situation {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .cards_obj {
    margin-top: 2%;
    //display: grid;
   // grid-template-columns: 1fr 1fr 1fr 1fr;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: auto;
  }

  .initial_research_circles {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .research_circles {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .findings {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .change_1 {
    background-image: url("../assets/project_tightrope/change_1.png");
  }
  .change_2 {
    background-image: url("../assets/project_tightrope/change_2.png");
  }
  .change_3 {
    background-image: url("../assets/project_tightrope/change_3.png");
    width: 350px !important;
  }

  .change_obj {
    background-size: cover;
    aspect-ratio: 1 / 1;
    width: 350px;

    .p {
      border-radius: 2000px;
    }
  }






</style>
