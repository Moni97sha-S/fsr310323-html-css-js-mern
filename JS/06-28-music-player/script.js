//! Background Images Array for Each Song
let bgc = [
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1458560871784-56d23406c091?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://plus.unsplash.com/premium_photo-1681738777245-6fb34243e769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2ljfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
]

const playUList = document.getElementById("playlist");
let playlist = document.getElementsByTagName("li");
let audioPlayer = document.getElementById("audioPlayer");
let nextButton = document.getElementById("nextBtn");
let prevButton = document.getElementById("prevBtn");
let playButton = document.getElementById("playBtn");
let pauseButton = document.getElementById("pauseBtn");
let favButton = document.getElementById("popupBtn");


//! Loop for onClick of songName
//? Run a loop on every list and attach a click event
//* playlist - Collection of songs which is HTML Collection() here
//? On every click my currentSong should be updated 
//* playlist.indexOf(this -> currentSong) in this playlist is not pure array 
//? Every element/method like indexOf() of array is not in the HTML Collection() so we use Array.Prototype
//? Every element/method like length of array is in the HTML Collection()
let currentSong = 0;
for(let i=0; i<playlist.length; i++){
    playlist[i].addEventListener("click",function(){
        currentSong = Array.prototype.indexOf.call(playlist, this) //*playlist.indexOf(this)
        playSong(currentSong);
        document.body.style.backgroundImage = `url(${bgc[currentSong]})`;
        // console.log("On click of a song from list got clicked one's list tag -->", playlist[i]);
    });
}

//! Function to play Song()
function playSong(currentSong){
    let dataSrc = playlist[currentSong].getAttribute("data-src");
    audioPlayer.src = dataSrc;
    audioPlayer.play();
    setActiveSong(currentSong);
    // console.log("Audio Tag -->", audioPlayer);
}

nextButton.addEventListener("click", function(){
    currentSong = currentSong + 1;
    playSong(currentSong);
    document.body.style.backgroundImage = `url(${bgc[currentSong]})`;
})

prevButton.addEventListener("click", function(){
    currentSong = currentSong - 1;
    playSong(currentSong);
    document.body.style.backgroundImage = `url(${bgc[currentSong]})`;
})

function setActiveSong(currentSong){
    for(let i=0; i<playlist.length; i++){
        playlist[i].classList.add('active');
    }
}
