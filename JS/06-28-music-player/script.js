//! Background Images Array for Each Song
let bgc = [
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1458560871784-56d23406c091?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://plus.unsplash.com/premium_photo-1681738777245-6fb34243e769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2ljfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
]

const playUList = document.getElementById("playlist");
const playlist = document.getElementsByTagName("li");
const audioPlayer = document.getElementById("audioPlayer");
const nextButton = document.getElementById("nextBtn");
const prevButton = document.getElementById("prevBtn");
const playButton = document.getElementById("playBtn");
const pauseButton = document.getElementById("pauseBtn");
const popupButton = document.getElementById("popupBtn");
const favButton = document.querySelectorAll(".fav");
const btn = document.getElementsByClassName('btn');
//* HTMLCollection list of ctrl btns
// console.log("Audio Control Btns -->", btn);

for(let i=0; i < btn.length; i++){
    // btn[i].style.fontFamily = 'Times New Roman', 'Times', 'serif';
    btn[i].style.color = "White";
    fontsize = 15;
    btn[i].style.fontSize = fontsize +"px";
    btn[i].style.textTransform = "capitalize";
    btn[i].style.letterSpacing = "2px";
}
//let icon = document.getElementsByTagName("i"); // item(i) due to HTML Collection of this tag elements
const pauseIconClassName = 'fa-pause';
const playIconClassName = 'fa-play';

//! Loop for onClick of songName
let currentSong = 0;
for(let i=0; i < playlist.length; i++){
    playlist[i].addEventListener("click",function(){
        currentSong = Array.prototype.indexOf.call(playlist, this); //*playlist.indexOf(this)
        playSong(currentSong);
        document.body.style.backgroundImage = `url(${bgc[currentSong]})`;
    });
}

//! Function to play Current Song()
function playSong(currentSong){
    let dataSrc = playlist[currentSong].getAttribute("data-src");
    audioPlayer.src = dataSrc;
    setActiveSong(currentSong);
    let playPromise = audioPlayer.play();
    // ! -> not operator which prohibits from autoplay while clicking on song from list 
    if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          // Show playing UI.
          // We can now safely pause video...
          playPause();
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
        });
      }
    
    }
    
//! Function to play Next song
/*
* 1. Increase currentSong by 1
* 2. Call playSong function
* 3. Change different background images for each song dynamically
*/
nextButton.addEventListener("click", function(){
    currentSong = currentSong + 1;
    playSong(currentSong);
    document.body.style.backgroundImage = `url(${bgc[currentSong]})`;
})


//! Function to play Previous song
prevButton.addEventListener("click", function(){
    currentSong = currentSong - 1;
    playSong(currentSong);
    document.body.style.backgroundImage = `url(${bgc[currentSong]})`;
})

playButton.addEventListener("click", function(e){
    // const btnEl = e.currentTarget;
    // console.log(btnEl)
    playPause();
})


//! Function for handling playPause feature
function playPause(){
    // check if play button class is present on our button
    const isPlayIcon = playButton.classList.contains(playIconClassName);

    if(audioPlayer.paused){
        audioPlayer.play();
        if (isPlayIcon){
            console.log(pauseIconClassName)
            playButton.classList.remove(playIconClassName);            
            playButton.classList.add(pauseIconClassName);            
        } 
        playButton.innerText = " Pause";   
    }else{
        audioPlayer.pause();
        if (!isPlayIcon){
           console.log(playIconClassName)           
           playButton.classList.remove(pauseIconClassName); 
           playButton.classList.add(playIconClassName);   
        } 
        playButton.innerText = " Play";
    }
        // console.log(icon.item(1));
        // icon.item(1).classList.toggle('fa-pause');
    }
    
    //! Add active/current song with orange dot
    function setActiveSong(currentSong){
        for(let i = 0; i < playlist.length; i++){
        if(i == currentSong){
            playlist[i].classList.add('active');
        } else {
            playlist[i].classList.remove('active');
        }
    }
}

//! Add Songs to your fav list by storing at Local Storage
//? On click of favButton, store in LocalStorage
//! ON click of fav btn Show popups of list of favourite songs
//! Handling Popup for Fav Song & add to Local Storage
// querySelectorAll() contains nodeList
// console.log("Show Favt Song List Btns -->", favButton);
favButton.forEach(function (button) {
    button.addEventListener("click", function(){
        this.innerText = "❤️";
        // console.log(button);
        // try to store song ids & names of liked btn by fetching song via btn id
        let songIdName = document.getElementById(`s${button.id}`);
        // console.log(songIdName.innerText.trim()); 
        // window.onbeforeunload = function() {  
        localStorage.setItem(songIdName.id, songIdName.innerText.trim());
        
    });
});

//! GetItem Song from LocalStorage & add to popup-Content div tag
const popupContent = document.getElementById("popup-content");
const popupOverlay = document.getElementById("popup-overlay");

popupButton.addEventListener("click", function(){
    popupOverlay.style.display = "flex";  
    // console.log(Object.keys(localStorage))
    // Object.keys will not fetch in correct order will return in any sequence
    let keys = Object.keys(localStorage);
    // console.log(keys);
    //? Add to DOM on every click event
    keys.forEach((key) => {
        // console.log(typeof localStorage[key]);
        // console.log(`${key}: ${localStorage[key]}`);
        // AddToCart
        // https://stackoverflow.com/questions/59424119/how-to-remove-or-avoid-duplicate-values-in-localstorage
        // let arr = JSON.parse(window.localStorage.getItem("itemsLine")) || [];
        // let value = localStorage[key];
        // if(arr.indexOf(value) == -1){
            //     arr.push(value);
            // window.localStorage.setItem("itemsLine", JSON.stringify(arr));
            let p = document.createElement("p");
            console.log(p.innerText !== localStorage[key])
            if(localStorage.getItem(key) !== p.innerText){
                // for(let i=0; i<localStorage.length;i++){
                    let songName = '';
                    songName = localStorage.getItem(key);
                    // console.log(songName)
                    p.innerText = songName;
                    console.log(p.innerText)
                    // console.log(typeof p.innerText);
                    popupContent.insertBefore(p, popupClose);
            }  
    });
});

//! On click of Popup closeBtn show popup closes
popupClose = document.getElementById("popup-close");
popupClose.addEventListener("click", function(){
    popupOverlay.style.display = "none";   
});


