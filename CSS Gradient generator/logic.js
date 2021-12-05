let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let gradient_value = document.getElementById('gradient-color');


const Gradient_Directions = (direction) => {

    let linear_gradient = document.body.style.background = "linear-gradient(to " + direction + "," + color1.value + ", " + color2.value + ")";
    document.body.style.backgroundAttachment = "fixed";
    gradient_value.innerHTML = linear_gradient; 

};

// to right ==> left to right
// to left ==> right to left
// to top ==> bottom to top
// to bottom ==> top to bottom
// to top right ==> bottom-left to top-right
// to top left ==> bottom-right to top-left
// to bottom left ==> top-right to bottom-left
// to bottom right ==> top-left to bottom-right

function copyElementText(copy) {
    var hex_copy = document.getElementById(copy); // without quotes in .getElementById() , it finds id="copy" in html file 
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = hex_copy.innerText;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    // style.border
}

function change_text(copy) {
    var copy = document.getElementById(copy);
    copy.innerHTML = "copied";   
    copy.style.backgroundColor = "#f5ff2c"
    copy.style.borderColor = "#f5ff2c";
    copy.style.color = "#3f0707"
    copy.style.fontWeight = "bold";
}