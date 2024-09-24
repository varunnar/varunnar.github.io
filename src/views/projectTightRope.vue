<template>
  <div class="container">
    <!-- <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" onload="this.width=screen.width-100;this.height=screen.height;" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYMt6LSZGrnwEE9iW6f0V4D%2FWebpage%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D0-1%26viewport%3D-567%252C-2041%252C0.18%26t%3D6LigpQb20GFEuMoP-1%26scaling%3Dmin-zoom%26mode%3Ddesign" allowfullscreen="true"></iframe> -->
  <div class="section hero_section">
    <h1>Project Tightrope</h1>
    <!-- <div class="hero_img_set">
      <div class="hero_image"></div>
    </div> -->
    <slideshow 
      :imageUrls="main_images"
      :numberOfImages="2"
      :autoPlay="true">
    </slideshow>
    <div class="header_text"> A walk-up-and-play style multiplayer videogame, that teaches players about the physical/mental experience of anxiety and display the importance of community support. </div>
    <div style="text-align: left; align-self: left;">
    <h2>Members</h2>
    <ul>
      <li><b>Varun Narayanswamy</b></li>
      <li>Samantha Ting</li>
      <li>Annie Song</li>
      <li>Husna Tabbassun</li>
    </ul>
    <h2>Timeline</h2>
    <p>This project originated from the Prototyping Studio course in the Master's program for Human-Computer Interaction and Design.<b>(MHCI+D)</b>. It ran from January 2024 to March 2024 <b>(11 weeks)</b></p>
  </div>
    </div>

    <div class="section situation"> 
      <div class="header" style="margin: auto">
        <h1>The Situation</h1>
        <p>This project was assigned in prototyping studio course. We were asked to make a game that fit the following criteria: </p>
      </div>
      <div class="cards_obj">
        <div class="card green_container">
          <h2>Multiplayer</h2>
          <p>The game needed to include some form of multiplayer element. This game should be an experience to share.</p>
        </div>
        <div class="card green_container">
          <h2>Walk Up and Play</h2>
          <p>The game shouldn’t require previous exposure and should friendly to a different players independent. </p>
        </div>
        <div class ="card green_container">
          <h2>Custom Controller</h2>
          <p>The game should include at least 1 custom made controller. The controller should be large and fun, compelling in of itself.</p>
        </div>
        <div class ="card green_container">
          <h2>Social Issue</h2>
          <p>The game should make a statement on a social issue. Players should leave feeling informed and motivated to make changes going forward.</p>
        </div>
      </div>
    </div>

    <div class="green_container section research_ideation"> 
      <div class="header">
        <h1>Research and Ideation</h1>
      </div>
      <div>
        <h2>INITIAL RESEARCH</h2>
        <p>From our initial research, we focused on anxiety and mental health. 
          We designed a controller where the main player uses a balancing board and rod to dodge obstacles, 
          simulating the physical and mental experience of anxiety. The following are the key tenants we utilized in our design</p>
          <!-- <div class="flex_spacing_MD">
            <div style="width: 47%; max-width: 505px;">
              <img style="width: 100%; object-fit: cover;" src="../assets//project_tightrope/research_1.png">
              <h3>The Importance of Physicality</h3>
              <div>The Feeling Pressured activity at Exploratorium SF simulates pressure from anxiety and health challenges using a vacuum-sealed bag.This inspired us to consider using physical simulation to convey our message when designing our game. </div>
            </div>
            <div style="width: 47%; max-width: 505px;">
              <img style="width: 100%; object-fit: cover;" src="../assets/project_tightrope/research_2.png">
              <h3>The use of metaphors and abstraction</h3>
              <p>We then shared our ideas out, asking our classmates for feedback and opinions on our varying ideas</p>
            </div>
            <div style="width: 100%; max-width: 505px;">
              <img style="width: 100%; object-fit: cover;" src="../assets/project_tightrope/research_3.png">
              <h3>The role of haptic feedback</h3>
              <p>Our team took our classmates feedback and after many rounds of discussing, dot voting, and refining we generated our idea - <b>Project Tightrope.</b></p>
            </div> -->
          <!-- <img style="width: 47%; object-fit: cover;" src="../assets/project_tightrope/planning_2.png">
          <img style="width: 30%; object-fit: cover;" src="../assets/project_tightrope/board_1.jpg"> -->
          <!-- </div> -->
        <div class = "initial_research_circles">
          <div class="research_circles">
            <img src="../assets/project_tightrope/game1.png">
            <p>The value of a physically embodied experience</p>
          </div>
          <div class="research_circles">
            <img src="../assets/project_tightrope/game2.png">
            <p>A low learning curve is essential to the walk up and play style model</p>
          </div>
          <div class="research_circles">
            <img src="../assets/project_tightrope/game3.png">
            <p>When covering serious topics, metaphors and abstraction can be valuable to conveying important sentiments</p>
          </div>
        </div>
      </div>
      <div>
        <h2>IDEATION</h2>
        <p>After completing our desk research we built out a number of projects, all that focused either on social issues, interesting controllers, multiplayer interactions, or emmersive feelings. </p>
          <div class="flex_spacing_MD">
            <div style="width: 47%;">
              <img style="width: 100%; object-fit: cover;" src="../assets//project_tightrope/big_img.png">
              <p>We designed several ideas, using the opportunity to explore AI image generation and explain them to our classmates.</p>
            </div>
            <div style="width: 47%;">
              <img style="width: 100%; object-fit: cover;" src="../assets/project_tightrope/board.jpg">
              <p>We then shared our ideas out, asking our classmates for feedback and opinions on our varying ideas</p>
            </div>
            <div style="width: 100%">
              <img style="width: 100%; object-fit: cover;" src="../assets/project_tightrope/planning_1.png">
              <p>Our team took our classmates feedback and after many rounds of discussing, dot voting, and refining we generated our idea - <b>Project Tightrope.</b></p>
            </div>
          <!-- <img style="width: 47%; object-fit: cover;" src="../assets/project_tightrope/planning_2.png">
          <img style="width: 30%; object-fit: cover;" src="../assets/project_tightrope/board_1.jpg"> -->
          </div>

      </div>
    </div>
    <div class="white_container section WOZ_testing"> 
      <div class="header_section">
      <h1>WOZ Testing</h1>
      <p>After refining and validating our idea, we conducted three Wizard of Oz (WOZ) testing sessions. We developed the on-screen game elements while simulating the controllers, which allowed us to progress on the game code, test controllers for players 2 and 3, and assess our message's effectiveness.</p>
      </div>

      <div class="woz_test">
        <h2>PROTOTYPE 1 - TILT MECHANISM</h2>
        <p>The first prototype tested player 1's tilting mechanism. During gameplay, bat obstacles representing stress and responsibilities flew down from the top of the screen, and the player character could move left and right to dodge them.</p>
        <div class="woz_obj">
          <div class="code_obj">
            <pre v-html="woz_text_1"></pre>
          </div>
          <img src="../assets/project_tightrope/woz_1.gif">
        </div>
      </div>
      <div class="woz_test">
        <h2>PROTOTYPE 2 - SWATTING MECHANISM</h2>
        <p>The second prototype tested a swatting mechanism for the second and third players. During gameplay, bat obstacles from the first prototype moved in from the left and right.</p>
        <div class="woz_obj">
          <img src="../assets/project_tightrope/woz_2.gif">
          <div class="code_obj">
            <pre v-html="woz_text_2"></pre>
          </div>
        </div>
      </div>
      <div class="woz_test">
        <h2>PROTOTYPE 3 - FLAPPING MECHANISM</h2>
        <p>The final prototype tested a flapping motion for the second and third players. During gameplay, the players flapped in unison to move the character closer to the cliff face. </p>
        <div class="woz_obj">
          <div class="code_obj">
            <pre v-html="woz_text_3"></pre>
          </div>
          <img src="../assets/project_tightrope/woz_3.gif">
        </div>
      </div>
      <div class="finding_object">
        <h2>FINDINGS</h2>
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
            <h3>Player 3 Controller</h3>
            <p>Player 2 and player 3 will use wing controllers and continue to use the swatting mechanism, 
            and moving light orbs towards player 1, and dark orbs away from them.  </p>
          </div>
        </div>
      </div>
  </div>
  <div class="green_container section idea_refinement">
    <div class="header">
      <h1>Design Iterations</h1>
      <p>After completing the WOZ testing the next steps was to build out the game.
        This included refining the fidelity of hardware and software</p>
    </div>
    <div class="hardware">
      <h2>HARDWARE ITERATIONS</h2>
      <div class="grid_template_2r">
        <div id="wings_iterations">
          <h3>Wing Iterations</h3>
          <slideshow style="width: 95%" :autoPlay="false" :imageUrls="wing_images" :textUrls="wing_text" :numberOfImages="3"></slideshow>
        </div>
        <div id="rod_iterations">
          <h3>Rod Iterations</h3>
          <slideshow style="width: 95%" :autoPlay="false" :imageUrls="rod_images" :textUrls="rod_text" :numberOfImages="3"></slideshow>
        </div>
      </div>
    </div>
    <div class="software">
      <h2>SOFTWARE FEATURES</h2>
      <div class="grid_template">
        <div class="software_update" id="initial_story">
          <h3>Inital Story</h3>
          <img src="../assets/project_tightrope/storytelling_quick.gif" style="border-radius: 20px; width: 90%">
          <p>I created story segments before gameplay to explain our messaging and metaphor in a hope of bridging the abstraction.</p>
        </div>
        <div class="software_update" id="wings_iterations">
          <h3>Tutorial Content</h3>
          <img src="../assets/project_tightrope/tutorial_quick.gif" style="border-radius: 20px; width: 90%">
          <p>I added game states for the tutorial to let players test their controllers before gameplay.</p>
        </div>
        <div class="software_update" id="audio_input">
          <h3>Custom Audio Input</h3>
          <iframe src="https://www.youtube.com/embed/OXjUl4lk9WI?si=CncVk3WJ-tt5TAjz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <p>Using P5's built-in mic, player 1 recorded sound effects for positive and negative orb hits,
             making the gameplay more personal.</p>
          <!-- <video  width= "400" style="border-radius: 20px">
            <source src="../assets/project_tightrope/audio_recording.mp4" type="video/mp4">
          </video> -->
        </div>
        <div class="software_update" id="player_1_control">
          <h3>Player 1 Controls</h3>
          <img src="../assets/project_tightrope/p1.gif" style="border-radius: 20px; width: 90%">
          <p>I synced the controller with player 1's CPX. The board's tilt triggered key presses to move the in-game character. </p>
        </div>
        <div class="software_update" id="player_2_control">
          <h3>Player 2 Controls</h3>
          <img src="../assets/project_tightrope/p2.gif" style="border-radius: 20px; width: 90%">
          <p>Shaking player 2 and 3 wings (with CPX boards) triggers one of four keys, moving the wing in-game and transferring nearby emotion orbs. </p>
        </div>
        <div class="software_update" id="ending_sequence">
          <h3>Ending Sequence</h3>
          <img src="../assets/project_tightrope/ending_sequence.gif" style="border-radius: 20px; width: 90%">
          <p>After collecting more positive than negative orbs, the player sees a celebratory screen with a conclusion and support link.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="white_container section showcase">
      <h1>Showcase</h1>
      <iframe src="https://www.youtube.com/embed/DoGYisWcmu8?si=PPjT6fK4Aat2n2zx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <!-- <div class="grid_template">
        <img src="../assets/project_tightrope/p2.gif" style="border-radius: 20px; width: 90%">
        <img src="../assets/project_tightrope/p2.gif" style="border-radius: 20px; width: 90%">
        <img src="../assets/project_tightrope/p2.gif" style="border-radius: 20px; width: 90%">
        <img src="../assets/project_tightrope/p2.gif" style="border-radius: 20px; width: 90%">
        <img src="../assets/project_tightrope/p2.gif" style="border-radius: 20px; width: 90%">
        <img src="../assets/project_tightrope/p2.gif" style="border-radius: 20px; width: 90%">
        <img src="../assets/project_tightrope/p2.gif" style="border-radius: 20px; width: 90%">
        <img src="../assets/project_tightrope/p2.gif" style="border-radius: 20px; width: 90%">

      </div> -->
  </div>
  <div>
    
  </div>
  </div>
</template>
<script>
import woz_text_1 from 'raw-loader!../assets/project_tightrope/code_files/woz_1.txt';
import woz_text_2 from 'raw-loader!../assets/project_tightrope/code_files/woz_2.txt';
import woz_text_3 from 'raw-loader!../assets/project_tightrope/code_files/woz_3.txt';
import slideshow from '../components/widgets/slideshow.vue';
export default {
  name: 'projectTightRope',
  components: { slideshow },
  data() {
      return {
        width_val: window.innerWidth,
        height_val: window.innerHeight,
        woz_text_1: woz_text_1,
        woz_text_2: woz_text_2,
        woz_text_3: woz_text_3,
        main_images: ["/assets/tv_screen.png", "/assets/playing.png"],
        wing_images: ["/assets/wings1.png", "/assets/wings2.png", "/assets/wings3.png"],
        wing_text: ["Our first test version made of cardboard, used to test the swiping motion", 
        "The refined the design for WOZ testing using foam core, color coded for each of the players", 
        "For the final design, we paper-mached the wings, centered the CPX inside, and glued the wings to hide cords and electronics"],
        rod_images: ["/assets/rod_1.png", "/assets/rod_2.png", "/assets/rod_3.png"],
        rod_text: ["Our first test version made of a random rod taped with the CPX, used to test the tilting motion", 
        "The WOZ design used a larger rod that was better balanced, including cardboard holder for the CPX", 
        "The final design uses the same rod, but instead included a 3D printed CPX holder with cloth that covers the CPX fdrom view"],
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

.container {
    width: 100%;
    background-color: black;
    padding-top: 2%;
    padding-bottom: 2%;
  }

  .situation {
    background-color: white;
    color: #131315;
  }
  p {
    font-size: 20px;
    //color: black;
  }
  li {
    font-size: 20px;
  }
  .header_text {
    font-size: 30px;
    font-weight: bold;
  }

  .hero_img_set{
    display: relative;
    width: 100%;
    height: auto;
  }

  .hero_image {
    display: inline-block;
    position: relative;
    background-image: url("../assets/project_tightrope/main_image.png");
    width: 100%;
    aspect-ratio: 1/1;
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2%;
  }
  .corner_img {
    //position: absolute;
    width: 30%;
    aspect-ratio: 2/3;
    transform: translate(185%, -50%);
    background-size: cover;
    background-image: url("../assets/project_tightrope/corner_img_square.png");
  }
  .section {
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 5%;
    padding-bottom: 5%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    margin-bottom: 5%;
    border-radius: 20px;
  }
  .hero_section {
    background-color: #131315;
    color: #ffebe8;
    h1 {
      color: #ffebe8;
      font-size: 50px;
    }
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  .WOZ_testing, .research_ideation, .idea_refinement, .showcase{
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .woz_test {
    color: #ffebe8;
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
      border-radius: 5px;
      height: 400px;
      width: 100%;
     // width: 70%;
    }
  }

  .code_obj {
    width: 100%; 
    height: 400px;
    background-color: black;
    overflow: scroll;
    pre {
      color: white;
    }
  }

  .white_container {
    background-color: #fff1ee;
    color: #2B2D34;
    p {
      color: #2B2D34;
    }
    h2 {
      color: #2B2D34;
    }
    h3 {
      color: #2B2D34;
    }
  }

  .green_container {
    background-color: #131315;
    //8E6A70
    //old color = 014A39
    //2B2D34
    color: #ffebe8;
    h1 {
      color: ffebe8;
    }
  }

  .two_column_view {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .card {
    width: 350px;
    aspect-ratio: 1/1;
    border-radius: 2000px;
    border-style: solid;
    border-color: #2B2D34;
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
    gap: 50px; 
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 80%;
    // display: flex;
    // flex-direction: row;
    // justify-content: space-around;
    // flex-wrap: wrap;
    margin: auto;
  }

  .flex_spacing_

  .flex_spacing_FS {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 200px;
    width: 100%;
  }

  .grid_template_2r {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .grid_template {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1570px) {
    .grid_template {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 1025px) {
    .grid_template {
      grid-template-columns: 1fr;
    }
  }

  .flex_spacing_SB {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%
  }

  .flex_spacing_MD {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 50px;
    width: 100%
  }

  .software, .hardware {
    margin-top: 50px;
    margin-bottom: 50px;

    iframe {
      width: 90%;
      aspect-ratio: 40/27;
    }

  }

  iframe {
      width: 90%;
      aspect-ratio: 40/27;
    }

  .software_update {
    width: 100%;
    p {
      width: 90%; 
      text-align: center;
    }
  }

  .initial_research_circles {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
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
  .finding {
    width: 90%;
  }

  // .change_1 {
  //   background-image: url("../assets/project_tightrope/change_1.png");
  // }
  // .change_2 {
  //   background-image: url("../assets/project_tightrope/change_2.png");
  // }
  // .change_3 {
  //   background-image: url("../assets/project_tightrope/change_3.png");
  //   width: 350px !important;
  // }

  .change_obj {
    background-size: cover;
    aspect-ratio: 1 / 1;
    width: 350px;

    .p {
      border-radius: 2000px;
    }
  }
</style>