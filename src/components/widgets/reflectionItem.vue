<template>
    <div class="reflection_items" :style="{gap: '10px', backgroundColor: backgroundColor}">
        <div class="circle" :style="{'background-image': computedBackgroundImage}"></div>
        <h3>{{ title }}</h3>
        <p> {{description}} </p>
    </div>
</template>

<script>
export default {
    name: 'ReflectionItem',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        backgroundColor: {
            type: String,
            default: "#27422C"
        },
    },
    computed: {
        computedBackgroundImage() {
            return `url(${this.icon})`;
        }
    }
}
</script>

<style scoped>
     .circle {
        width: 80px;
        height: 80px;
        color: black;
        border-radius: 1000px;
        font-size: 40px;
        background-size: cover;
        margin-left: auto;
        margin-right: auto;
    }

    .reflection_items {
        display: flex;
        align-items: space;
        flex-direction: column;
        max-width: 600px;
        flex-basis: 100%;
        padding: 30px 10px 30px 10px;
        border-radius: 30px;
        text-align: center;
    }
</style>