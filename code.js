document.getElementById("category").addEventListener("mouseover", mouseOver);
document.getElementById("category").addEventListener("mouseout", mouseOut);


function mouseOver(){
    document.getElementById("overlay").style.visibility = "visible";
}
function mouseOut(){
    document.getElementById("overlay").style.visibility = "hidden";
}