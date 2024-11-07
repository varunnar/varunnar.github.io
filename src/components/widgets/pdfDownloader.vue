<template>
    <a :style="`color: ${textColor}`" @click="downloadPDF" href="#" class="pdf-link"><p>{{ pdfString }}</p></a>
</template>

<script>

export default {
    name: 'pdfDownloader',
    props: {
        pdfUrl: {
            type: String,
            required: true
        },
        fileName: {
            type: String,
            required: true
        },
        pdfString: {
            type: String,
            required: true
        },
        textColor: {
            type: String,
            required: false
        }
    },
    methods: {
        downloadPDF() {
            const pdfUrl = this.pdfUrl; // Path to your PDF file in the public folder
            const fileName = this.fileName; // Desired name for the downloaded file

            // Create an anchor element to trigger the download
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = fileName;
            link.target = '_blank'; // Optional: opens in a new tab

            // Append the link to the document body and trigger a click event
            document.body.appendChild(link);
            link.click();

            // Clean up by removing the link from the document
            document.body.removeChild(link);
        }
    }
}
</script>
