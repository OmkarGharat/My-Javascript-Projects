let random_color = document.getElementById('random-color');
let output = document.getElementById('output');
let pink = document.getElementById('yellow'); // yellow color      
let yellow = document.getElementById('pink'); // pink color    
let green = document.getElementById('red'); // red color    
let red = document.getElementById('green'); // pink color    
let blue = document.getElementById('white'); // white color    


let arr = ['pink', 'yellow', 'green', 'red'];
let color_picker = arr[Math.floor(Math.random() * arr.length)];
random_color.innerHTML = color_picker;

let pink_color = document.body.style.color = "pink";
let yellow_color = document.body.style.color = "yellow";
let green_color = document.body.style.color = "green";
let red_color = document.body.style.color = "red";
let blue_color = document.body.style.color = "blue";


function PINK(pink) {
    if (color_picker == pink_color) {
        output.innerHTML = "Correct ✔️ !! You guessed it correctly";
    }
    else {
        output.innerHTML = "Wrong ❌ guess ! ";
    }
}

function YELLOW(yellow) {
    if (color_picker == yellow_color) {
        output.innerHTML = "Correct ✔️ !! You guessed it correctly";
    }
    else {
        output.innerHTML = "Wrong ❌ guess ! ";
    }
}

function GREEN(green) {
    if (color_picker == green_color) {
        output.innerHTML = "Correct ✔️ !! You guessed it correctly";
    }
    else {
        output.innerHTML = "Wrong ❌ guess ! ";
    }
}

function RED(red) {
    if (color_picker == red_color) {
        output.innerHTML = "Correct ✔️ !! You guessed it correctly";
    }
    else {
        output.innerHTML = "Wrong ❌ guess ! ";
    }
}

function BLUE(blue) {
    if (color_picker == blue_color) {
        output.innerHTML = "Correct ✔️ !! You guessed it correctly";
    }
    else {
        output.innerHTML = "Wrong ❌ guess ! ";
    }
}

