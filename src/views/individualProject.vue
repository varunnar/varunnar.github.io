<template>
  <div class="project-object">
    <h1 :name="title_current_name"> {{title_current_name}}</h1>
   <!--- <img class="project-icon" :src="main_img"/> -->

    <div class="description" id="description">
    </div>
  </div>
</template>

<script>
  import storyglowText from 'raw-loader!./projects/storyglow.txt';
  import munchmapsText from 'raw-loader!./projects/munchmaps.txt';
  import fractalText from 'raw-loader!./projects/fractal.txt';
  import D3Text from 'raw-loader!./projects/D3.txt';
  import heartbeatCheckerText from 'raw-loader!./projects/heartbeatChecker.txt';
  import alpacaText from 'raw-loader!./projects/alpaca.txt';
  import seagateText from 'raw-loader!./projects/seagate.txt';
  export default {
    name: 'project-object',
    data() {
      return {
        storyglowText: storyglowText,
        munchmapsText: munchmapsText,
        fractalText: fractalText,
        D3Text: D3Text,
        heartbeatCheckerText: heartbeatCheckerText,
        alpacaText: alpacaText,
        seagateText: seagateText,
        current_url: ''
      }
    },
    mounted() {
      this.build_project_page();
    },
    beforeUpdate() {
      this.build_project_page();
    },
    computed: {
      current_name() {
        let page_name = window.location.pathname.split( '/' )
        // let url =  window.location.href;
        // let page_name = url.split('window.location.origin');
        return page_name[1];
      },
      title_current_name() {
        var project_name = this.current_name;
        if (project_name == "fractal") {
          project_name = "Fractal Music Visualization";
        } 
        if (project_name == "D3") {
          project_name = "Internet Acessibility Map"
        }
        return project_name.charAt(0).toUpperCase() + project_name.slice(1);
      },
      main_img() {
        let base_url = '../assets/project-imgs/';
        let current_name = this.current_name;
        let url = base_url + current_name + ".png";
        console.log(url);
        var images = require.context('../assets/project-imgs/')
        return images('./' + current_name + ".png");
      }
    },
    methods: {
      build_project_page: function() {
        let project_name = this.current_name;
        let project_name_description = project_name + "Text";
        var temp = document.getElementById('description');
        temp.textContent = '';
        let project_description_string = this[project_name_description];
        let project_array = project_description_string.split("*");
        for (let i = 0; i < project_array.length; i++) {
          var media_objects = []
          if (project_array[i].includes('####')) {
            media_objects = project_array[i].split("####");
          }
          if (project_array[i].includes("LINK")) {
            this.create_link_object(temp, media_objects);
          } else if (project_array[i].includes("FRAME")) {
            this.create_frame_object(temp, media_objects);
          } else if (project_array[i].includes("LIST")) { 
            this.create_list_object(temp, media_objects);
          } else if (project_array[i].includes("IMAGE")) {
            this.create_image_object(temp, media_objects);
          } else {
            let p = document.createElement('p');
            p.innerHTML = project_array[i];
            temp.appendChild(p);
          }
        }
      },
      create_frame_object(temp, media_objects) {
        var frame_div = document.createElement('div');
        frame_div.className = "frame"
        frame_div.width = "100%";
        frame_div.style.textAlign = "center";
        var frame = document.createElement('iframe');
        frame.src = media_objects[1];
        var aspect_ratio = parseFloat(media_objects[2])/parseFloat(media_objects[3])
        console.log(aspect_ratio)
        var width = (parseFloat(media_objects[2]) < window.innerWidth) ? media_objects[2] : '90%';
        frame.width = width;
        frame.style.aspectRatio = aspect_ratio
        frame.setAttribute('allowFullScreen', '')
        frame_div.appendChild(frame);
        temp.appendChild(frame_div);
        temp.appendChild(document.createElement("p"));
      },
      create_link_object(temp, media_objects) {
        var a = document.createElement("a");
        var link_div = document.createElement('div');
        link_div.className = "link"
        link_div.width = "100%";
        link_div.style.textAlign = "center";
        var text = document.createTextNode(media_objects[1]);
        a.appendChild(text);
        a.title = media_objects[1];
        a.href = media_objects[2];
        link_div.appendChild(a);
        temp.append(link_div);
      },
      create_list_object(temp, media_objects) {
        var list_div = document.createElement('div');
        list_div.style.width = "100%";
        list_div.style.display = "flex";
        list_div.style.justifyContent = "space-evenly";
        var list_number = Math.round(media_objects.length/3);
        if (list_number > 4) {
          list_number = 4;
        }
        var ul_array = [] 
        for (var j = 0; j<list_number; j++) {
          ul_array.push(document.createElement("ul"))
        }
        for (var i = 1; i<media_objects.length; i++) {
          let correct_array = Math.floor(i/list_number);
          let selected_ul = i - correct_array * list_number;
          var li = document.createElement('li');
          li.innerHTML = media_objects[i];
          ul_array[selected_ul].appendChild(li)
        }
        for (var k = 0; k<list_number; k++) {
          list_div.append(ul_array[k])
        }
        temp.append(list_div);
      },
      create_image_object(temp, media_objects) {
        var image_div = document.createElement('div');
        image_div.className = "ImageSet"
        let grid_col = Math.floor(Math.sqrt(media_objects.length - 1));
        let auto_number = "";
        for (var i = 0; i<grid_col; i++) {
          auto_number += "auto ";
        }
        var image_div_style = "display: grid; grid-template-columns: " + auto_number + "; text-align: center !important; "
        image_div.setAttribute( 'style', image_div_style );
        for (var j = 1; j<media_objects.length; j++) {
          var grid_object = document.createElement("img");
          grid_object.setAttribute('style', 'width: 96%; margin: 2%; height: 96%');
          grid_object.src = require("@/assets/project-imgs/" + media_objects[j]);
          image_div.appendChild(grid_object);
        }
        temp.append(image_div)
      }
    }
  }
</script>

<style scoped>
  img {
    width: 30%;
  }
  .project-object {
    min-height: 100vh;
  }
  .project-icon {
    max-width: 20%;
    margin-bottom: 20px;
  }
  @media (max-width: 960px) {
    p {
      word-spacing: 5px;
    }
  }
  .general_info {
    margin-top: 1px;
    margin-left: 10%;
    margin-right: 10%;
    padding: 0.5%;
  }
  .home {
    height: 100%;
    background-color: rgba(0, 0, 650, 0.2);
    margin: 1%;
    min-height: 100%;
    padding: 2%;
  }
  .description {
    margin-bottom: 5%;
    max-width: 80%;
    margin-left: 20%;
    margin-right: 20%;
    color: black;
    font-weight: 450;
    text-align: justify;
  }
  h1 {
    color: black;
    font-size: 50px;
  }
</style>