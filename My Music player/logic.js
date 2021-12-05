
let track_art = document.querySelector("#track_art");

let Audio = document.createElement("audio");

let songs = document.getElementsByClassName("songs");

// ** My songs list or you can also called it as PlayList

let PlayList = [
    {
        Name: "Rivals at Firefight",
        Singer: "Canicon",
        album_pic: "/Images/cover1.jpg",
        song_path: "/Songs/Cancion(Song)-Rivals at War _ Joker ( 256kbps cbr ).mp3",
    },

    {
        Name: "Dil Yeh Dancer",
        Singer: "Atif Aslam",
        album_pic: "/Images/Atif aslam.jpg",
        song_path: "/Songs/DIL YEH DANCER - ATIF ASLAM ( 256kbps cbr ).mp3",
    },

    {
        Name: "Taang Uthake",
        Singer: "Mika Singh , Mamata Sharma",
        album_pic: "/Images/cover3.jpg",
        song_path: "/Songs/02 Taang Uthake (SongsMp3.Com).mp3",
    },

    {
        Name: "KGF : Sultan",
        Singer: "Ananya Bhat, Mohan Krishna",
        album_pic: "/Images/cover1.jpg",
        song_path:
            "/Songs/Full Video Song  Sultan  KGF  Yash  Srinidhi Shetty  Ravi Basrur  T-Se 128 kbps.mp3",
    },

    {
        Name: "Sau Tarah ke",
        Singer: "Amit Mishra , Jonita Gandhi",
        album_pic: "/Images/cover2.jpg",
        song_path: "/Songs/01 Sau Tarah Ke - Dishoom (Pritam) 190Kbps.mp3",
    },

    {
        Name: "Tere Liye",
        Singer: "Atif Aslam",
        album_pic: "/Images/Atif aslam.jpg",
        song_path: "/Songs/Tere Liye (JugniFM.CoM).mp3",
    },

    {
        Name: "Tera Chehra",
        Singer: "Arjit Singh",
        album_pic: "/Images/cover3.jpg",
        song_path: "/Songs/Tera Chehra (Full Audio Song)Sanam Teri KasamHarshvardhan, MawraHimesh, Arijit.mp3",
    },
];

let isPlaying = false;

// ** function to choose whether song should be played or paused

const Play_or_pause = () => {

    if (!isPlaying) playTrack();
    else pauseTrack();

    function playTrack() {
        Audio.play();
        isPlaying = true;
    }

    function pauseTrack() {
        Audio.pause();
        isPlaying = false;
    }

    if (document.querySelector("#play").classList[1] == "fa-pause-circle") {

        document.getElementById("play").classList.replace("fa-pause-circle", "fa-play-circle");
        Audio.pause();

    } else if (document.querySelector("#play").classList[1] == "fa-play-circle") {

        document.getElementById("play").classList.replace("fa-play-circle", "fa-pause-circle");
        Audio.play();

    }

};

// ** Calling PreviousSong(); function

PreviousSong();

// ** go to previous song by clicking on previous button

function PreviousSong() {
    Array.from(document.getElementsByClassName("change")).forEach((element, index) => {

        element.addEventListener("click", (e) => {

            document.getElementById('previous_track').onclick = function () {
                console.log(index);

                index--;

                if (index < 0) {

                    index = PlayList.length - 1;
                    Audio.src = PlayList[index].song_path;
                    Audio.load();

                } else {

                    index = index;
                    Audio.src = PlayList[index].song_path;
                    Audio.load();

                }
                Audio.play();

                // = replace play btn to pause btn when previous song btn is clicked
                document.getElementById("play").classList.replace("fa-play-circle", "fa-pause-circle");

                // = Updating Data for previous song
                document.getElementsByClassName("album_details")[0].children[0].innerText =
                    PlayList[index].Name;

                document.getElementsByClassName("album_details")[0].children[1].innerText =
                    PlayList[index].Singer;

                document.querySelector("#track_art").src = `${PlayList[index].album_pic}`;

            };
        });
    });
}

// ** Updating progress bar or seekbar [whatever you want to call it]

const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');

Audio.addEventListener('timeupdate', updateProgress);

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    if (progressPercent == 100.00) {
        
        document.getElementById("play").classList.replace("fa-pause-circle", "fa-play-circle");
        Audio.pause();
        
    }

}

progressContainer.addEventListener('click', setProgress);

function setProgress(e) {

    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = Audio.duration;

    Audio.currentTime = (clickX / width) * duration;
}

Audio.addEventListener('ended', NextSong);

// * // ** Calling NextSong(); function

NextSong();

// ** go to next song by clicking on next button

function NextSong() {
    Array.from(document.getElementsByClassName("change")).forEach((element, index) => {

        element.addEventListener("click", () => {

            document.getElementById('next_track').onclick = function () {

                index++;

                if (index > PlayList.length - 1) {

                    index = 0;

                } else {

                    index = index;

                }

                Audio.src = PlayList[index].song_path;
                Audio.load();
                Audio.play();

                // = replace play btn to pause btn when next song btn is clicked
                document.getElementById("play").classList.replace("fa-play-circle", "fa-pause-circle");

                // = Updating Data for previous song
                document.getElementsByClassName("album_details")[0].children[0].innerText =
                    PlayList[index].Name;

                document.getElementsByClassName("album_details")[0].children[1].innerText =
                    PlayList[index].Singer;

                document.querySelector("#track_art").src = `${PlayList[index].album_pic}`;

            };
        });
    });
}

// * Updating details of the song like album art , song name and singer name

Array.from(document.getElementsByClassName("change")).forEach((element) => {
    element.addEventListener("click", (e) => {

        songIndex = parseInt(e.target.id);
        Audio.src = PlayList[songIndex].song_path;
        Audio.load();      
      
        // * Updating Song Name and Singer Name

        document.getElementsByClassName("album_details")[0].children[0].innerText =
            PlayList[songIndex].Name;

        document.getElementsByClassName("album_details")[0].children[1].innerText =
            PlayList[songIndex].Singer;

        // * replacing old cover image with cover image of current song

        document.querySelector("#track_art").src = `${PlayList[songIndex].album_pic}`

    });
});


