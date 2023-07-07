// STREAMING VIDEO AND AUDIO CONTROLS
// Using navigator.mediaDevices
//! Get video and audio access
let x = navigator.mediaDevices.getUserMedia({video: true, audio: true});
console.log("line no 3: ==>", x);

//value = stream
/*x.then((stream) =>{
    //console.log("line no 6: ==>", stream);
    video.srcObject = stream;
}); */

let video = document.querySelector('video');

// Record Our Video -> To start
// Using navigator.mediaRecorder
/*let recorder;
x.then((stream) =>{
    //console.log("line no 6: ==>", stream);
    video.srcObject = stream;
    recorder = new MediaRecorder(stream);
}); */

// On click of Red Btn -> Start recording
let recorder;
x.then((stream) =>{
    //console.log("line no 6: ==>", stream);
    //! Display the video streaming on videoTag (On screen)
    video.srcObject = stream;
    recorder = new MediaRecorder(stream);

    //! Start & Stop recording
    // 3 events
    //! Event to handle when recording is started
    recorder.addEventListener("start", () => {
        videoInChunks = [];
    });
    //! Event to handle when data Available
    recorder.addEventListener("dataavailable", (chunk) => {
        videoInChunks.push(chunk.data);
    });
    //! Event to handle when recording is stopped
    recorder.addEventListener("stop", () => {
        // Gather all chunks & Merge all video chunks n say this is ur video
        // Blob is videoData
        let videoData = new Blob(videoInChunks, { type: "video/mp4" });

        // Download once blob created -> To download we need a url
        // URL.createObjectURL()
        let videoURL = URL.createObjectURL(blob);
        // console.log("url ===>", videoURL);

        // Code to download the recorder video -> This piece of code always be same for all media things to download controls
        let a = document.createElement("a");
        a.href = videoURL;
        a.download = `live streaming_record_${new Date()}.mp4`;
        a.click();

        // Upload by passing video data into server


    });
});

//! Start & Stop recording (Toggle)
let recorderFlag = false;
let videoInChunks = [];
let recordBtn = document.querySelector('.record-btn');
recordBtn.addEventListener('click', () => {
    recorderFlag = !recorderFlag; // false = true

    if(recorderFlag){
        recorder.start();
        recorder.classList.add('record-anm');
    } else {
        recorder.stop();
        recorder.classList.remove('record-anm');
    }
});


//! Live Timer Code
let counter = 0;
let clear;
function startTimer(){

   clear = setInterval(() =>{
        let totalSeconds = counter;

        let hour = Number.parseInt(totalSeconds / 3600);
        totalSeconds = totalSeconds % 3600; // [60min X 60sec = 3600]

        //In a min, we have 60 seconds
        let min = Number.parseInt(totalSeconds / 60);
        totalSeconds = totalSeconds % 60;

        //In a second, we have balance of totalseconds
        let sec = totalSeconds;

        hour = (hour < 10) ? `0${hour}` : `${hour}`;
        min = (min < 10) ? `0${min}` : `${min}`;
        sec = (sec < 10) ? `0${sec}` : `${sec}`;

        timer.innerText = (`${hour}:${min}:${sec}`)

        counter++;
    }, 1000);
}

startTimer();

// We need to clear the timer when next time timer starts.
function stopTimer() {
    clearInterval(clear);
    timer.innerText = "00:00:00";
}
// 70secs -> 00hr:01min:10secs