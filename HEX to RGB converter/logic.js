const hex2rgb = () => {

    var rgb = document.getElementById('rgb-color');
    var hex = document.getElementById('hex');
    var hex_code = hex.value;

    let red = hex_code[1] + hex_code[2];
    let green = hex_code[3] + hex_code[4];
    let blue = hex_code[5] + hex_code[6];

    let R = parseInt(red, 16);
    let G = parseInt(green, 16);
    let B = parseInt(blue, 16);

    let rgb_code = "rgb(" + R + "," + G + "," + B + ");";
    rgb.innerHTML = rgb_code ;  




}