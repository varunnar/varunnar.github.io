<template>
    <div id="webviewer" ref="viewer"></div>
    <vue-pdf-embed :source="pdfUrl"/>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed'

export default {
    name: 'resumeView',
    components: {
        VuePdfEmbed
    },
    data() {
        return {
            pdfUrl: 'resume.pdf'
        }
    }
}
</script>
