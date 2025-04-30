<template>
    <div role="image" class="imgObjectCustom" :style="{backgroundImage: `url(${src})`, width: w, aspectRatio: ar}" :alt="alt"></div>
</template>

<script>

export default {
    name: 'imageObject',
    props: {
        src: {
            type: String,
            required: true
        },
        w: {
            type: String,
            default: '100%'
        },
        ar: {
            type: String,
            default: '1/1'
        },
        h: {
            type: String,
            default: 'auto'
        },
        alt: {
            type: String,
            default: 'custom made image'
        }
        
    }
}
</script>

<style scoped>
    .imgObjectCustom {
        background-size: contain;
        background-repeat: no-repeat;
    }
</style>

