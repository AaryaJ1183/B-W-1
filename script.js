
const videoDuration = 9000;
const fps = 900;
const intDur = videoDuration/fps;


const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text1 = intro.querySelector("h1");

const section = document.querySelector("section");
const text2 = section.querySelector("h1");


const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration:videoDuration,
    triggerElement: intro,
    triggerHook: 0
})
// .addIndicators()
.setPin(intro)
.addTo(controller); 


//VIDEO
let accelAmount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e)=>{
    scrollpos = e.scrollPos/1000;
    // console.log(scrollpos);
    // console.log();
})



setInterval(()=>{
    delay += (scrollpos-delay)*accelAmount;
    console.log(scrollpos,delay);


    video.currentTime=scrollpos;
},intDur);