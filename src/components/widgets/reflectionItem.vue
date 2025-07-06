<template>
    <div :class="`reflection_items ${addAnimation}`" :style="{ backgroundColor: backgroundColor}">
        <div v-if="icon && !noCircle" class="circle" :style="{'border-color': textColor, marginBottom: '5px'}">
            <div v-if="isSvgIcon" class="svg-icon" v-html="svgContent" :style="`color: ${textColor}`"></div>
            <img v-else-if="icon" :src="icon" :alt="title" class="svg-icon" />
            <div v-else :style="{'background-image': computedBackgroundImage}" class="background-icon"></div>
        </div>
        <div v-if="icon && noCircle" class="icon_no_circle" :style="{'marginBottom': '5px'}">
            <div v-if="isSvgIcon" class="svg-icon" v-html="svgContent" :style="`color: ${textColor}`"></div>
            <img v-else-if="icon" :src="icon" :alt="title" class="svg-icon" />
            <div v-else :style="{'background-image': computedBackgroundImage}" class="background-icon"></div>
        </div>
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
    data() {
        return {
            svgContentCache: {}
        };
    },
    computed: {
        computedBackgroundImage() {
            return this.icon ? `url(${this.icon})` : null;
        },
        isSvgIcon() {
            return this.icon && this.icon.toLowerCase().endsWith('.svg');
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
        alignText() {
            return this.leftAlignText ? 'left' : 'center';
        },
        svgIconStyle() {
            if (!this.textColor) return {};
            
            // Convert hex to RGB
            const hex = this.textColor.replace('#', '');
            console.log("hex", hex)
            const r = parseInt(hex.substring(0, 2), 16);
            console.log("r", r);
            const g = parseInt(hex.substring(2, 4), 16);
            console.log("g", g);
            const b = parseInt(hex.substring(4, 6), 16);
            console.log("b", b);
            
            // Create a filter that will make the SVG the desired color
            // First make it black, then apply the color
            const filter = `brightness(0) saturate(100%) invert(${r / 255}) sepia(${g / 255}) saturate(${b / 255})`;
            
            return {
                filter: filter,
                width: '50px',
                height: '50px',
                objectFit: 'contain'
            };
        },
        svgContent() {
            if (!this.isSvgIcon || !this.icon) return '';
            return this.svgContentCache[this.icon] || '';
        }
    },
    methods: {
        async fetchSvgContent(iconPath) {
            if (this.svgContentCache[iconPath]) {
                return this.svgContentCache[iconPath];
            }
            
            try {
                const response = await fetch(iconPath);
                const svgText = await response.text();
                
                // Replace fill attributes with currentColor
                const modifiedSvg = svgText.replace(/fill="[^"]*"/g, 'fill="currentColor"');
                
                this.svgContentCache[iconPath] = modifiedSvg;
                return modifiedSvg;
            } catch (error) {
                console.error('Error loading SVG:', error);
                return '';
            }
        }
    },
    watch: {
        icon: {
            immediate: true,
            async handler(newIcon) {
                if (this.isSvgIcon && newIcon) {
                    await this.fetchSvgContent(newIcon);
                }
            }
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
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon_no_circle {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 80px;
        height: 80px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .svg-icon {
        width: 50px;
        height: 50px;
        object-fit: contain;
    }

    .background-icon {
        width: 100%;
        height: 100%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
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