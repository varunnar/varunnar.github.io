"use strict";(self["webpackChunkvarun_website_updated"]=self["webpackChunkvarun_website_updated"]||[]).push([[987],{3796:function(e,t,a){a.d(t,{A:function(){return u}});var s=a(6768);const r={class:"section"};function i(e,t,a,i,o,n){return(0,s.uX)(),(0,s.CE)("div",r,[(0,s.RG)(e.$slots,"default",{},void 0,!0)])}var o={name:"SectionContainer"},n=a(1241);const l=(0,n.A)(o,[["render",i],["__scopeId","data-v-6f8215aa"]]);var u=l},2552:function(e,t,a){a.d(t,{A:function(){return P}});var s=a(6768),r=a(5130),i=a(4232);const o={class:"slideshow"},n={key:0,class:"image-container"},l=["src"],u=["textContent"],h=["textContent"],c={key:1,class:"no-images"},d={key:2,class:"controls"};function _(e,t,a,_,m,y){return(0,s.uX)(),(0,s.CE)("div",o,[m.imagePaths.length>0?((0,s.uX)(),(0,s.CE)("div",n,[(0,s.bF)(r.eB,{name:y.transitionName,mode:"out-in"},{default:(0,s.k6)((()=>[((0,s.uX)(),(0,s.CE)("div",{class:"slideshow_container",key:m.imagePaths[m.currentIndex]},[((0,s.uX)(),(0,s.CE)("img",{src:m.imagePaths[m.currentIndex],alt:"Slideshow Image",class:"slideshow-image",key:m.imagePaths[m.currentIndex]},null,8,l)),a.headerArray?((0,s.uX)(),(0,s.CE)("h3",{key:0,textContent:(0,i.v_)(a.headerArray[m.currentIndex])},null,8,u)):(0,s.Q3)("",!0),a.bodyArray?((0,s.uX)(),(0,s.CE)("div",{key:1,textContent:(0,i.v_)(a.bodyArray[m.currentIndex]),style:{margin:"10px"}},null,8,h)):(0,s.Q3)("",!0)]))])),_:1},8,["name"])])):((0,s.uX)(),(0,s.CE)("div",c," No images available. ")),a.showControls?((0,s.uX)(),(0,s.CE)("div",d,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>y.clickPrev&&y.clickPrev(...e))},"Previous"),a.autoPlay?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:t[1]||(t[1]=(...e)=>y.handlePauseClick&&y.handlePauseClick(...e))},(0,i.v_)(m.isPaused?"Resume":"Pause"),1)):(0,s.Q3)("",!0),(0,s.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>y.clickNext&&y.clickNext(...e))},"Next")])):(0,s.Q3)("",!0)])}var m={name:"slide-show",props:{imageUrls:{type:Array},folderPath:{type:String},bodyArray:{type:Array,required:!1},headerArray:{type:Array,required:!1},autoPlay:{type:Boolean,default:!1},autoPlayInterval:{type:Number,default:5e3},numberOfImages:{type:Number,required:!0},showControls:{type:Boolean,default:!0},album:{type:String,required:!1},random:{type:Boolean,default:!1}},data(){return{currentIndex:0,imagePaths:[],disableTransition:!1,autoPlayTimer:null,isPaused:!1}},mounted(){this.imageUrls&&this.imageUrls.length>0?this.imagePaths=this.imageUrls:this.folderPath&&this.generateNumericImagePaths(this.folderPath,this.numberOfImages),this.autoPlay&&this.startAutoPlay()},computed:{images(){return this.imageUrls.slice(0,this.numberOfImages)},transitionName(){return this.disableTransition?"":"fade"}},methods:{generateNumericImagePaths(e,t){this.imagePaths=Array.from({length:t},((t,a)=>`${e}_${a}.jpg`))},clickPrev(){this.disableTransition=!0,this.prevImage(),this.autoPlay&&this.resetAutoPlay()},clickNext(){this.disableTransition=!0,this.nextImage(),this.autoPlay&&this.resetAutoPlay()},handlePauseClick(){this.isPaused=!this.isPaused,this.isPaused?this.stopAutoPlay():this.startAutoPlay()},prevImage(){this.disableTransition=!0,this.currentIndex>0?this.currentIndex--:this.currentIndex=this.imagePaths.length-1},nextImage(){if(this.random){let e=this.currentIndex;while(e==this.currentIndex)this.currentIndex=Math.round(14*Math.random())}else this.currentIndex<this.imagePaths.length-1?this.currentIndex++:this.currentIndex=0},startAutoPlay(){this.isPaused||(this.autoPlayTimer=setInterval((()=>{this.nextImage()}),this.autoPlayInterval))},stopAutoPlay(){this.autoPlayTimer&&(clearInterval(this.autoPlayTimer),this.autoPlayTimer=null)},resetAutoPlay(){this.stopAutoPlay(),this.startAutoPlay()}},watch:{autoPlay(e){e?this.startAutoPlay():this.stopAutoPlay()}}},y=a(1241);const p=(0,y.A)(m,[["render",_]]);var P=p},987:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var s=a(6768),r=a(4232);const i={class:"container"},o={class:"order"},n={class:"grid_view_obj"},l={class:"grid_view_obj"},u={class:"grid_view_obj"},h={class:"grid_view_obj"},c={class:"order"},d=["id"],_={class:"grid_view_image"},m=["src"],y={class:"order"},p=["onClick"];function P(e,t,a,P,g,k){const v=(0,s.g2)("slideShow"),C=(0,s.g2)("sectionContainer");return(0,s.uX)(),(0,s.CE)("div",i,[(0,s.bF)(C,{class:"dark"},{default:(0,s.k6)((()=>[t[7]||(t[7]=(0,s.Lk)("h1",null,"Chapters with Cheesecake",-1)),(0,s.Lk)("div",o,[(0,s.Lk)("div",n,[(0,s.Lk)("div",{class:"chapter_button",onClick:t[0]||(t[0]=e=>k.play_or_stop_audio(null,-4,"/assets/other/ml_audio/zoo_lights.mp3"))},(0,r.v_)(g.isPlaying&&-4===g.currentChapter?"Pause":"Play")+" Zoo Lights ",1),(0,s.bF)(v,{class:"cheesecake_chapters",folderPath:"/assets/other/c_w_c/zoo_light",autoPlay:!1,numberOfImages:3})]),(0,s.Lk)("div",l,[(0,s.Lk)("div",{class:"chapter_button",onClick:t[1]||(t[1]=e=>k.play_or_stop_audio(null,-5,"/assets/other/ml_audio/costume_shopping.mp3"))},(0,r.v_)(g.isPlaying&&-5===g.currentChapter?"Pause":"Play")+" Costume Shopping ",1),(0,s.bF)(v,{class:"cheesecake_chapters",folderPath:"/assets/other/c_w_c/costume",autoPlay:!1,numberOfImages:3})]),(0,s.Lk)("div",u,[(0,s.Lk)("div",{class:"chapter_button",onClick:t[2]||(t[2]=e=>k.play_or_stop_audio(null,-6,"/assets/other/ml_audio/harry_potter_books.mp3"))},(0,r.v_)(g.isPlaying&&-6===g.currentChapter?"Pause":"Play")+" Buying HP ",1),(0,s.bF)(v,{class:"cheesecake_chapters",folderPath:"/assets/other/c_w_c/hp_finding",autoPlay:!1,showControls:!1,numberOfImages:1})]),(0,s.Lk)("div",h,[(0,s.Lk)("div",{class:"chapter_button",onClick:t[3]||(t[3]=e=>k.play_or_stop_audio(null,-7,"/assets/other/ml_audio/soft_launch.mp3"))},(0,r.v_)(g.isPlaying&&-7===g.currentChapter?"Pause":"Play")+" Soft Launch ",1),(0,s.bF)(v,{class:"cheesecake_chapters",folderPath:"/assets/other/c_w_c/soft_launch",autoPlay:!1,showControls:!1,numberOfImages:1})])])])),_:1}),(0,s.bF)(C,{class:"dark"},{default:(0,s.k6)((()=>[t[8]||(t[8]=(0,s.Lk)("h1",null,"Miss Lady Support Recordings!",-1)),(0,s.Lk)("div",c,[(0,s.Lk)("div",{class:"chapter_button",onClick:t[4]||(t[4]=e=>k.play_or_stop_audio(null,-1,"/assets/other/ml_audio/Feeling_overwhelmed.mp3"))},(0,r.v_)(g.isPlaying&&-1===g.currentChapter?"Pause":"Play")+" Recording for feeling Overwhelmed! ",1),(0,s.Lk)("div",{class:"chapter_button",onClick:t[5]||(t[5]=e=>k.play_or_stop_audio(null,-2,"/assets/other/ml_audio/Feeling_insecure.mp3"))},(0,r.v_)(g.isPlaying&&-2===g.currentChapter?"Pause":"Play")+" Recording for feeling insecure! ",1),(0,s.Lk)("div",{class:"chapter_button",onClick:t[6]||(t[6]=e=>k.play_or_stop_audio(null,-3,"/assets/other/ml_audio/Missing.mp3"))},(0,r.v_)(g.isPlaying&&-3===g.currentChapter?"Pause":"Play")+" Recording for missing me! ",1)])])),_:1}),(0,s.bF)(C,{class:"dark slideContainer"},{default:(0,s.k6)((()=>[t[9]||(t[9]=(0,s.Lk)("h1",null,"Slideshows of US!",-1)),(0,s.bF)(v,{class:"miss_lady_slides",folderPath:"/assets/other/album/img",autoPlay:!0,random:!0,numberOfImages:14})])),_:1}),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(g.chapter_info,((a,i)=>((0,s.uX)(),(0,s.CE)("div",{class:"book",key:"book_"+i,id:"book_"+i},[(0,s.bF)(C,{class:"dark"},{default:(0,s.k6)((()=>[t[10]||(t[10]=(0,s.Lk)("h1",null,"Harry Potter and the Philosopher's Stone",-1)),t[11]||(t[11]=(0,s.Lk)("h3",null,"Read by Mr. Cheesecake",-1)),(0,s.Lk)("div",_,[(0,s.Lk)("img",{src:g.books_img[i]},null,8,m),(0,s.Lk)("div",y,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a,((t,a)=>((0,s.uX)(),(0,s.CE)("div",{key:"ch_"+a},[(0,s.Lk)("div",{class:"chapter_button",onClick:t=>k.play_or_stop_audio(e.book_num=i,e.chapter_num=a)},(0,r.v_)(g.isPlaying&&g.currentChapter===a?"Pause":"Play")+" Chapter "+(0,r.v_)(a+1),9,p)])))),128))])])])),_:2},1024)],8,d)))),128))])}var g=a(2552),k=a(3796),v={name:"MissLady",components:{sectionContainer:k.A,slideShow:g.A},data(){return{chapter_info:[Array.from({length:7},((e,t)=>t+1))],currentAudio:null,currentChapter:null,isPlaying:!1,books_img:["/assets/other/hp_1.jpg"]}},computed:{imageUrl(e){return 1==e?`/assets/other/hp_${e}.jpg`:null}},methods:{play_or_stop_audio(e=null,t=null,a=""){let s="";""!=a?s=a:null!=e&&(s=`/assets/other/ml_audio/HP_${e+1}_${t+1}.mp3`),console.log(s),this.currentAudio&&this.currentChapter===t?this.isPlaying?(this.currentAudio.pause(),this.isPlaying=!1):(this.currentAudio.play(),this.isPlaying=!0):(this.currentAudio&&this.currentAudio.pause(),this.currentAudio=new Audio(s),this.currentChapter=t,this.isPlaying=!0,this.currentAudio.play().then((()=>{console.log(`Playing Chapter ${t+1} from Book ${e+1}`)})).catch((e=>{console.error("Audio playback failed:",e)})))}}},C=a(1241);const b=(0,C.A)(v,[["render",P]]);var f=b}}]);
//# sourceMappingURL=987.9633cfff.js.map