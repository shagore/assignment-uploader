function scroller() {
    window.onscroll = function() {

    if(document.documentElement.scrollTop > 50) {
        document.getElementById("myTopnav").style.height = "30px";
        document.getElementById("myTopnav").style.fontSize = "15px";
        document.getElementById("navImg").style.height = "20px";
        document.getElementById("navImg").style.width = "20px";
    } 
    
    else {scroll.js
        document.getElementById("myTopnav").style.height = "70px";
        document.getElementById("myTopnav").style.fontSize = "30px";
        document.getElementById("navImg").style.height = "40px";
        document.getElementById("navImg").style.width = "40px";
    }
}
}
window.onload = scroller;