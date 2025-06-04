<template>
    <div :class="`reflection_items ${addAnimation}`" :style="{ backgroundColor: backgroundColor}">
        <div v-if="icon && !noCircle" class="circle" :style="{'background-image': computedBackgroundImage, 'border-color': textColor, marginBottom: '5px'}"></div>
        <div v-if="icon && noCircle && borderAdded" class="icon_no_circle" :style="{'background-image': computedBackgroundImage, marginBottom: '5px'}"></div>
        <div v-else-if="number > 0" class="circle number-circle && borderAdded" :style="{'background-color': textColor, color: backgroundColor, 'border-color': textColor, marginBottom: '5px'}">{{ number }}</div>
        <h3 :style="{ fontSize: headerSize, color: textColor, textAlign: alignText, marginTop: '5px', marginBottom: '5px' }">{{ title }}</h3>
        <p :style="{ color: textColor, textAlign: alignText, marginTop:'5px', marginBottom:'5px' }" v-html="formattedDescription"></p>
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
            required: false,
            default: null
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
        textColor: {
            type: String,
            default: "#000000"
        },
        borderBool: {
            type: Boolean,
            default: false
        },
        number: {
            type: Number,
            default: 0
        },
        headerSize: {
            type: String,
            default: "25px"
        },
        animationBool: {
            type: Boolean,
            default: false
        },
        noCircle: {
            type: Boolean,
            default: false
        },
        leftAlignText: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        computedBackgroundImage() {
            return this.icon ? `url(${this.icon})` : null;
        },
        formattedDescription() {
            if (this.description == null) return null;
            const words = this.description.split(' ');
            if (words.length < 2) return this.description;
            
            const lastTwoWords = words.slice(-2).join('&nbsp;');
            const remainingWords = words.slice(0, -2).join(' ');
            
            return remainingWords + ' ' + lastTwoWords;
        },
        addAnimation(){
            return this.animationBool ? 'addAnimation' : '';
        },
        borderAdded() {
            return this.borderBool ? 'borderAdded' : '';
        },
        alignText() {
            return this.leftAlignText ? 'left' : 'center';
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

    .icon_no_circle {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 80px;
        height: 80px;
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

    .borderAdded {
        border: 1px;
    }

    .reflection_items {
        display: flex;
        align-items: space-between;
        flex-direction: column;
        justify-content: flex-start;
        max-width: 600px;
        flex-basis: 100%;
        padding: 15px 30px 15px 30px;
        border-radius: 20px;
        text-align: center;
        transition: transform 0.3s ease;
    }

    .addAnimation:hover {
        transform: translateY(-10px);
    }
</style>