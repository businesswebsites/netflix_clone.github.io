document.getElementById("category").addEventListener("mouseover", mouseOver);
document.getElementById("category").addEventListener("mouseout", mouseOut);


function mouseOver(){
    document.getElementById("overlay").style.visibility = "visible";
}
function mouseOut(){
    document.getElementById("overlay").style.visibility = "hidden";
}

let myVideo = document.getElementById("video");
document.getElementById("video").addEventListener("mouseover", hoverVideo);
document.getElementById("video").addEventListener("mouseout", hideVideo);

let myVideo_2 = document.getElementById("video2");
document.getElementById("video2").addEventListener("mouseover", hoverVideo_2);
document.getElementById("video2").addEventListener("mouseout", hideVideo_2);

let myVideo_3 = document.getElementById("video3");
document.getElementById("video3").addEventListener("mouseover", hoverVideo_3);
document.getElementById("video3").addEventListener("mouseout", hideVideo_3);

let myVideo_4 = document.getElementById("video4");
document.getElementById("video4").addEventListener("mouseover", hoverVideo_4);
document.getElementById("video4").addEventListener("mouseout", hideVideo_4);

let myVideo_5 = document.getElementById("video5");
document.getElementById("video5").addEventListener("mouseover", hoverVideo_5);
document.getElementById("video5").addEventListener("mouseout", hideVideo_5);

let myVideo_6 = document.getElementById("video6");
document.getElementById("video6").addEventListener("mouseover", hoverVideo_6);
document.getElementById("video6").addEventListener("mouseout", hideVideo_6);

let myVideo_7 = document.getElementById("video7");
document.getElementById("video7").addEventListener("mouseover", hoverVideo_7);
document.getElementById("video7").addEventListener("mouseout", hideVideo_7);

let myVideo_8 = document.getElementById("video8");
document.getElementById("video8").addEventListener("mouseover", hoverVideo_8);
document.getElementById("video8").addEventListener("mouseout", hideVideo_8);


function hoverVideo() {  
    myVideo.play();
}

function hideVideo() {
    myVideo.pause();
    myVideo.load();
}

function hoverVideo_2() {  
    myVideo_2.play();
    
}

function hideVideo_2() {
    myVideo_2.pause();
    myVideo_2.load();
}
function hoverVideo_3() {  
    myVideo_3.play();
}

function hideVideo_3() {
    myVideo_3.pause();
    myVideo_3.load();
}

function hoverVideo_4() {  
    myVideo_4.play();
}

function hideVideo_4() {
    myVideo_4.pause();
    myVideo_4.load();
}
function hoverVideo_5() {  
    myVideo_5.play();
}

function hideVideo_5() {
    myVideo_5.pause();
    myVideo_5.load();
}

function hoverVideo_6() {  
    myVideo_6.play();
}

function hideVideo_6() {
    myVideo_6.pause();
    myVideo_6.load();
}

function hoverVideo_7() {  
    myVideo_7.play();
}

function hideVideo_7() {
    myVideo_7.pause();
    myVideo_7.load();
}

function hoverVideo_8() {  
    myVideo_8.play();
}

function hideVideo_8() {
    myVideo_8.pause();
    myVideo_8.load();
}