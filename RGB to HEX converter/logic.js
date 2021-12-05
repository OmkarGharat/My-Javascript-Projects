
const change_bg_color = () => {
    
    const red = document.querySelector('#red').value;   
    const green = document.querySelector('#green').value;
    const blue = document.querySelector('#blue').value;
    const hex = document.querySelector('#hex-color');

   
    // * RGB TO hex converter

    let hex1 = Number(red).toString(16);
    let hex2 = Number(green).toString(16);
    let hex3 = Number(blue).toString(16);

    if (red <= 16 || red == '0') {
        hex1 = '0' + hex1;
        console.log(`RED between 10 to 15 = ${hex1}`);
    }

    if (green <= 16 || green == '0') {
        hex2 = '0' + hex2;
        console.log(`GREEN between 10 to 15 = ${hex2}`);
    }

    if (blue <= 16 || blue == '0') {
        hex3 = '0' + hex3;
        console.log(`BLUE between 10 to 15 = ${hex3}`);
    }

    let hexCode = '#' + hex1 + hex2 + hex3;
    console.log(hexCode);
    hex.innerHTML = `${hexCode}`;
    hex.style.borderColor = hexCode;   
}; 

function copyElementText(copy) {
    var hex_copy = document.getElementById(copy); // without quotes in .getElementById() , it finds id="copy" in html file 
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = hex_copy.innerText;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);    
}

function change_text(copy){
    var copy = document.getElementById(copy);
    copy.innerHTML = "copied";   
    copy.style.backgroundColor = "#f5ff2c"
    copy.style.borderColor = "#f5ff2c";
    copy.style.color = "#3f0707"
    copy.style.fontWeight = "bold";  
}



var Range = (input) => {

    if (input.value < 0) input.value = "";
    if (input.value > 255) input.value = "";

}

function ResetText(copy){
    var copy = document.getElementById(copy);
    copy.innerHTML = "copy";   
    copy.style.backgroundColor = "#3f0707";
    copy.style.borderColor = "#3f0707";
    copy.style.color = "#f5ff2c"
    copy.style.fontWeight = "normal";  
}

const ResetValues = () => {

    document.querySelector('#red').value = '';
    document.querySelector('#green').value = '';
    document.querySelector('#blue').value = '';

};

