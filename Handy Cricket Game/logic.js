const playerRun = document.getElementById('playerRun');

const computerRuns = document.getElementById('computerRuns');

let message = document.querySelector('.msg .box .msg_box');

let UserRuns = document.querySelector('.UserRuns')

let total_score = 0;
let balls_faced = 0;
let fours = 0;
let sixes = 0;

Array.from(document.getElementsByClassName("runs")).forEach((element, index) => {



    element.addEventListener("click", () => {

        balls_faced += 1;

        let { playerScore, computerScore } = UpdateRuns(index);

        if (index == 4) {
            fours += 1;
        }

        if (index == 6) {
            sixes += 1;
        }

        if (playerScore == computerScore) {

            document.querySelector('.msg').style.display = "block";
            message.innerHTML = "You are OUT !!!"
            message.style.fontSize = "5rem";
            message.style.padding = "1rem";


            document.querySelector('.totalRuns').innerHTML = `${total_score - index}`;
            document.querySelector('.ballsfaced').innerHTML = `${balls_faced}`;

            let strike_rate = ((total_score - index) / balls_faced * 100).toFixed(2)
            document.querySelector('.strikeRate').innerHTML = `${strike_rate}`;

            UserRuns.style.display = "none";

            
            if (fours <= 0) {

                document.querySelector('.fours').innerHTML = `${fours}`;
            } else {

                document.querySelector('.fours').innerHTML = `${fours - 1}`;
            }

            if (sixes <= 0) {

                document.querySelector('.sixes').innerHTML = `${sixes}`;
            } else {

                document.querySelector('.sixes').innerHTML = `${sixes - 1}`;
            }

            ResetValues();
        }
    });
});

ResetValues();

function ResetValues() {
    let button = document.querySelector('.btn');

    button.addEventListener('click', () => {

        balls_faced = 0;
        total_score = 0;
        index = 0;
       
        playerRun.innerHTML = 0;
        computerRuns.innerHTML = 0;
        document.querySelector('.totalRuns').innerHTML = "0";
        document.querySelector('.ballsfaced').innerHTML = "0";
        document.querySelector('.strikeRate').innerHTML = "0.00";
        document.querySelector('.fours').innerHTML = "0";
        document.querySelector('.sixes').innerHTML = "0";
        UserRuns.style.display = "flex";
        document.querySelector('.msg').style.display = "none";

    });
}

function UpdateRuns(index) {
    let playerScore = document.getElementById('playerRun').innerHTML = index;

    let randomNumber = Math.floor(Math.random() * 7) + 0;

    let computerScore = document.getElementById('computerRuns').innerHTML = randomNumber;

    total_score += index;
    return { playerScore, computerScore };
}

