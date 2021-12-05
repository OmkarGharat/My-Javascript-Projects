let currentTime = () => {

    let timer = document.getElementById('timer');

    let time = new Date();
    let hour = time.getHours(); // 0 - 23
    let minute = time.getMinutes(); // 0 - 59
    let seconds = time.getSeconds(); // 0 - 59
    let time_slap = "AM";

    if (hour == 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour - 12;
        time_slap = "PM";
    }

    if (hour < 10) {
        hour = "0" + hour;
    }

    if (minute < 10) {
        minute = "0" + minute;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let UpdateTime = `${hour} : ${minute} : ${seconds} ${time_slap}`;
    timer.innerHTML = UpdateTime;

};

setInterval(currentTime, 1000);