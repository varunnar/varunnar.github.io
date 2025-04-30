<template>
    <div class="container">
        <fadeInComponent>
            <sectionContainer class="dark">
                <h1>Chapters with Cheesecake</h1>
                <div class="order">
                    <div class="grid_view_obj">
                        <div class="chapter_button" @click="play_or_stop_audio(null, -4, `/assets/other/ml_audio/zoo_lights.mp3`)">
                            {{ isPlaying && currentChapter === -4 ? 'Pause' : 'Play' }} Zoo Lights
                        </div>
                        <slideshow class="cheesecake_chapters"
                        folderPath="/assets/other/c_w_c/zoo_light"
                        fileType="jpg"
                        :autoPlay="false"
                        :numberOfImages="3">
                        </slideshow>
                    </div>
                    <div class="grid_view_obj">
                        <div class="chapter_button" @click="play_or_stop_audio(null, -5, `/assets/other/ml_audio/costume_shopping.mp3`)">
                            {{ isPlaying && currentChapter === -5 ? 'Pause' : 'Play' }} Costume Shopping
                        </div>
                        <slideshow class="cheesecake_chapters"
                        folderPath="/assets/other/c_w_c/costume"
                        fileType="jpg"
                        :autoPlay="false"
                        :numberOfImages="3">
                        </slideshow>
                    </div>
                    <div class="grid_view_obj">
                        <div class="chapter_button" @click="play_or_stop_audio(null, -6, `/assets/other/ml_audio/harry_potter_books.mp3`)">
                            {{ isPlaying && currentChapter === -6 ? 'Pause' : 'Play' }} Buying HP
                        </div>
                        <slideshow class="cheesecake_chapters"
                        folderPath="/assets/other/c_w_c/hp_finding"
                        fileType="jpg"
                        :autoPlay="false"
                        :showControls="false"
                        :numberOfImages="1">
                        </slideshow>
                    </div>
                    <div class="grid_view_obj">
                        <div class="chapter_button" @click="play_or_stop_audio(null, -7, `/assets/other/ml_audio/soft_launch.mp3`)">
                            {{ isPlaying && currentChapter === -7 ? 'Pause' : 'Play' }} Soft Launch
                        </div>
                        <slideshow class="cheesecake_chapters"
                        folderPath="/assets/other/c_w_c/soft_launch"
                        fileType="jpg"
                        :autoPlay="false"
                        :showControls="false"
                        :numberOfImages="1">
                        </slideshow>
                    </div>
                    <div class="grid_view_obj">
                        <div class="chapter_button" @click="play_or_stop_audio(null, -8, `/assets/other/ml_audio/Roadtrip.mp3`)">
                            {{ isPlaying && currentChapter === -7 ? 'Pause' : 'Play' }} Our First Roadtrip
                        </div>
                        <slideshow class="cheesecake_chapters"
                        folderPath="/assets/other/c_w_c/roadtrip"
                        fileType="jpg"
                        :autoPlay="false"
                        :showControls="true"
                        :numberOfImages="2">
                        </slideshow>
                    </div>
                    <div class="grid_view_obj">
                        <div class="chapter_button" @click="play_or_stop_audio(null, -9, `/assets/other/ml_audio/Fondue.mp3`)">
                            {{ isPlaying && currentChapter === -7 ? 'Pause' : 'Play' }} Miss Ladies Birthday
                        </div>
                        <slideshow class="cheesecake_chapters"
                        folderPath="/assets/other/c_w_c/fondue"
                        fileType="jpg"
                        :autoPlay="false"
                        :showControls="false"
                        :numberOfImages="1">
                        </slideshow>
                    </div>
                    <div class="grid_view_obj">
                        <div class="chapter_button" @click="play_or_stop_audio(null, -10, `/assets/other/ml_audio/Routine.mp3`)">
                            {{ isPlaying && currentChapter === -7 ? 'Pause' : 'Play' }} Getting into Routine
                        </div>
                        <slideshow class="cheesecake_chapters"
                        folderPath="/assets/other/c_w_c/routine"
                        fileType="png"
                        :autoPlay="false"
                        :showControls="true"
                        :numberOfImages="4">
                        </slideshow>
                    </div>
                    <div class="grid_view_obj">
                        <div class="chapter_button" @click="play_or_stop_audio(null, -11, `/assets/other/ml_audio/my_first_birthday.mp3`)">
                            {{ isPlaying && currentChapter === -7 ? 'Pause' : 'Play' }} Varun's first birthday
                        </div>
                        <slideshow class="cheesecake_chapters"
                        folderPath="/assets/other/c_w_c/varun_bday"
                        fileType="png"
                        :autoPlay="false"
                        :showControls="true"
                        :numberOfImages="3">
                        </slideshow>
                    </div>
                </div>
            </sectionContainer>
        </fadeInComponent>

        <fadeInComponent>
        <sectionContainer class="dark">
            <h1>Miss Lady Support Recordings!</h1>
            <div class="order">
                <div class="chapter_button" @click="play_or_stop_audio(null, -1, `/assets/other/ml_audio/Feeling_overwhelmed.mp3`)">
                    {{ isPlaying && currentChapter === -1 ? 'Pause' : 'Play' }} Recording for feeling Overwhelmed!
                </div>
                <div class="chapter_button" @click="play_or_stop_audio(null, -2, `/assets/other/ml_audio/Feeling_insecure.mp3`)">
                    {{ isPlaying && currentChapter === -2 ? 'Pause' : 'Play' }} Recording for feeling insecure!
                </div>
                <div class="chapter_button" @click="play_or_stop_audio(null, -3, `/assets/other/ml_audio/Missing.mp3`)">
                    {{ isPlaying && currentChapter === -3 ? 'Pause' : 'Play' }} Recording for missing me!
                </div>
            </div>
        </sectionContainer>
        </fadeInComponent>

        <fadeInComponent>
            <sectionContainer class="dark slideContainer">
                <h1>Slideshows of US!</h1>
                <slideShow class="miss_lady_slides"
                    folderPath="/assets/other/album/img"
                    fileType="jpg"
                    :autoPlay="true"
                    :random="true"
                    :numberOfImages="15">
                </slideShow>
            </sectionContainer>
         </fadeInComponent>
        <!-- Iterating over the book(s) -->
         <fadeInComponent>
            <div class="book" v-for="(book, bookIndex) in chapter_info" :key="'book_' + bookIndex" :id="'book_' + bookIndex">
                <sectionContainer class="dark">
                <h1>Harry Potter and the Philosopher's Stone</h1>
                <h3>Read by Mr. Cheesecake</h3>
                <!-- Iterating over 17 chapters within the book -->

                <div class="grid_view_image">
                    <img :src="books_img[bookIndex]"/>
                    <div class="order">
                        <div v-for="(chapter, chapterIndex) in book" :key="'ch_' + chapterIndex">
                            <div class="chapter_button" @click="play_or_stop_audio(book_num=bookIndex, chapter_num=chapterIndex)">
                                <!-- Button text changes depending on if audio is playing -->
                                {{ isPlaying && currentChapter === chapterIndex ? 'Pause' : 'Play' }} Chapter {{ chapterIndex + 1 }}
                            </div>
                        </div>
                    </div>
                </div>
                </sectionContainer>
            </div>
        </fadeInComponent>
    </div>    
</template>

<script>
export default {
    name: 'MissLady',
    data() {
        return {
            // This array contains 17 chapters (1 book with 17 chapters)
            chapter_info: [
                Array.from({ length: 17 }, (_, i) => i + 1), Array.from({ length: 2 }, (_, i) => i + 1) // [1, 2, 3, ..., 17]
            ],
            currentAudio: null, // To keep track of the currently playing audio instance
            currentChapter: null, // To track which chapter's audio is currently playing
            isPlaying: false, // Boolean to track if audio is currently playing,
            books_img: ['/assets/other/hp_1.jpg', '/assets/other/hp_2.jpg']
        };
    },
    computed: {
        imageUrl(book_num) {
            if (book_num==1){
            return `/assets/other/hp_${book_num}.jpg`
            } 
            return null;
        }
    },
    methods: {
        play_or_stop_audio(book_num=null, chapter_num=null, other='') {
            let audioPath = '';
            if(other != '') {
                audioPath = other; // Adjust the path to your audio files
            } else if (book_num != null){
                audioPath = `/assets/other/ml_audio/HP_${book_num + 1}_${chapter_num + 1}.mp3`; // Adjust the path to your audio files
            }
            console.log(audioPath)

            // Check if the same chapter is being clicked
            if (this.currentAudio && this.currentChapter === chapter_num) {
                if (this.isPlaying) {
                    // Pause if audio is currently playing
                    this.currentAudio.pause();
                    this.isPlaying = false;
                } else {
                    // Resume playing if paused
                    this.currentAudio.play();
                    this.isPlaying = true;
                }
            } else {
                // If a different chapter is clicked, stop current audio if any
                if (this.currentAudio) {
                    this.currentAudio.pause();
                }

                // Create a new audio instance and play the audio for the selected chapter
                this.currentAudio = new Audio(audioPath);
                this.currentChapter = chapter_num;
                this.isPlaying = true;

                this.currentAudio.play()
                    .then(() => {
                        console.log(`Playing Chapter ${chapter_num + 1} from Book ${book_num + 1}`);
                    })
                    .catch(error => {
                        console.error('Audio playback failed:', error);
                    });
            }
        }
    }
}
</script>

<style>
    .container {
        background-image: url('../../public/assets/other/hp_background.png'); /* Ensure the correct path for the image */
        background-repeat: repeat;
        background-size: contain;
        padding-top: 10px;
        padding-bottom: 10px;
        color: white;
    }

    .dark {
        text-align: left;
        background-color: rgba(0, 0, 0, .8);
    }

    .order {
        display: flex;
        flex-direction: row;
        column-gap: 20px;
        row-gap: 20px;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .grid_view_obj {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .grid_view_image {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
    }
    .cheesecake_chapters {
        max-width: 200px;
    }
    .miss_lady_slides {
        max-width: 600px;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
    }
    .slideContainer {
        text-align: center;
    }

    img {
        height: 500px;
        width: auto;
    }

    @media (max-width: 960px) {
        .grid_view_image {
            grid-template-columns: 1fr;
        }
        img {
            width: 100%;
            height: auto;
            max-height: 100%;
            margin-bottom: 20px;
        }
    }

    .chapter_button {
        padding: 10px;
        border-radius: 20px;
        background-color: white;
        color: black;
        display: inline-block;
        height: auto;
        box-shadow: 0 0 20px yellow;
    }
    .chapter_button:hover {
        background-color: rgb(255,255,224);
    }



</style>
