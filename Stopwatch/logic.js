let startBTN = document.getElementById('start-btn');
let stopwatch = document.getElementById('Stimer');

let min = 0;
let sec = 0;
let milliseconds = 0;
let pause = true;
startBTN.disabled = false;

const start = () => {

    if (pause == true) { // true
        pause = false; // false
        Timing(); // false
        startBTN.disabled = true;
    }

};

const stop = () => {

    if (pause == false) { // false
        pause = true; // true
        startBTN.disabled = false;
    }
};

let Timing = () => {

    if (pause == false) {

        min = parseInt(min);
        sec = parseInt(sec);
        milliseconds = parseInt(milliseconds);

        milliseconds = (milliseconds + 1);

        if (milliseconds == 100) {
            milliseconds = 0;
            sec = sec + 1;
        }

        if (sec == 60) {
            min = min + 1;
            sec = 0
        }

        if (min < 10 || min == 0) {
            min = "0" + min;
        }

        if (sec < 10 || sec == 0) {
            sec = "0" + sec;
        }

        if (milliseconds < 10 || milliseconds == 0) {
            milliseconds = "0" + milliseconds;
        }

        stopwatch.innerHTML = min + ":" + sec + ":" + milliseconds;

        setTimeout("Timing()", 10);
    }
};

const reset = () => {

    startBTN.disabled = false;
    stopwatch.innerHTML = "00:00:00";
    hour = 0;
    min = 0;
    sec = 0;
    milliseconds = 0;

};