function RotateArrow(arrowClass, navClass){
    const arrow = document.getElementsByClassName(arrowClass)[0];
    const navText = document.getElementsByClassName(navClass)[0];
    arrow.style.transform = "rotate(-223.5deg)";
    arrow.style.transformOrigin = "38% 76%";
    arrow.style.borderLeft = "1px solid #6FCF97";
    arrow.style.borderBottom = "1px solid #6FCF97";
    navText.style.color = "#6FCF97"
} 

function RotateBackArrow(arrowClass, navClass){
    const arrow = document.getElementsByClassName(arrowClass)[0];
    const navText = document.getElementsByClassName(navClass)[0];
    arrow.style.transform = "rotate(-45deg)";
    arrow.style.borderLeft = "1px solid #000";
    arrow.style.borderBottom = "1px solid #000";
    navText.style.color = "#000"
}

function MouseOverTextDiv(Img, TextDiv){
    const leftAdImg = document.getElementById(Img);
    leftAdImg.style.filter = "brightness(70%)";
    leftAdImg.style.cursor = "pointer";

    document.getElementsByClassName(TextDiv)[0].style.cursor = "pointer";
}

function MouseOutTextDiv(Img){
    const leftAdImg = document.getElementById(Img);
    leftAdImg.style.filter = "brightness(50%)";
}


