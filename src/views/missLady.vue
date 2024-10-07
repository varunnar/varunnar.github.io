<template>
    <div class="container">
        <!-- Iterating over the book(s) -->
            <div class="book" v-for="(book, bookIndex) in chapter_info" :key="'book_' + bookIndex" :id="'book_' + bookIndex">
                <sectionContainer class="dark">
                <h1>Harry Potter and the Philospher's Stone</h1>
                <h3>Read by Mr. Cheesecake</h3>
                <!-- Iterating over 17 chapters within the book -->

                <div class="grid_view_image">
                    <img :src="books_img[bookIndex]"/>
                    <div class="order">
                        <div v-for="(chapter, chapterIndex) in book" :key="'ch_' + chapterIndex">
                            <div class="chapter_button" @click="play_or_stop_audio(bookIndex, chapterIndex)">
                                <!-- Button text changes depending on if audio is playing -->
                                {{ isPlaying && currentChapter === chapterIndex ? 'Pause' : 'Play' }} Chapter {{ chapterIndex + 1 }}
                            </div>
                        </div>
                    </div>
                </div>
                </sectionContainer>
            </div>
    </div>    
</template>

<script>
import sectionContainer from '../components/widgets/section.vue'; 
export default {
    name: 'MissLady',
    components: {sectionContainer},
    data() {
        return {
            // This array contains 17 chapters (1 book with 17 chapters)
            chapter_info: [
                Array.from({ length: 4 }, (_, i) => i + 1) // [1, 2, 3, ..., 17]
            ],
            currentAudio: null, // To keep track of the currently playing audio instance
            currentChapter: null, // To track which chapter's audio is currently playing
            isPlaying: false, // Boolean to track if audio is currently playing,
            books_img: ['/assets/other/hp_1.jpg']
        };
    },
    computed: {
        imageUrl(book_num) {
            console.log("index " + book_num)
            if (book_num==1){
            return `/assets/other/hp_${book_num}.jpg`
            } 
            return null;
        }
    },
    methods: {
        play_or_stop_audio(book_num, chapter_num) {
            const audioPath = `/assets/other/ml_audio/HP_${book_num + 1}_${chapter_num + 1}.mp3`; // Adjust the path to your audio files

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
        background-size: contain;
        height: 100%;
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
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .grid_view_image {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
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
            margin-bottom: 20px;
        }
    }

    .chapter_button {
        padding: 10px;
        border-radius: 20px;
        background-color: white;
        color: black;
        display: inline-block;
    }



</style>
