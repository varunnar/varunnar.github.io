<template>
    <div class="reflection_items" :style="{gap: '10px', backgroundColor: backgroundColor}">
        <div v-if="icon" class="circle" :style="{'background-image': computedBackgroundImage}"></div>
        <div v-else-if="number > 0" class="circle number-circle">{{ number }}</div>
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
            required: false,
            default: null
        },
        backgroundColor: {
            type: String,
            default: "#27422C"
        },
        number: {
            type: Number,
            default: 0
        }
    },
    computed: {
        computedBackgroundImage() {
            return this.icon ? `url(${this.icon})` : null;
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

    .number-circle {
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
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
        transition: transform 0.3s ease;
    }

    .reflection_items:hover {
        transform: translateY(-10px);
    }
</style>