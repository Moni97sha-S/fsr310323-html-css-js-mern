//! Start & Stop Recording
captureBtn.addEventListener("click", function (){
    captureBtn.classList.remove("capture-anm");
    console.log("Capture BUtton CLicked");

    //* Capture Animation
    captureBtn.classList.add("capture-anm");
    //? Using Canvas API
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Apply filter on Canvas only while capturing photos
    ctx.fillStyle = filterColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Context & Capture it
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    //! Download the Image
    console.log("canvas"); //<canvas width="640" height="480"></canvas>
    console.log(canvas.toDataurl); // f

    let screenShotURL = canvas.toDataURL();

    // Code to download the captured photo -> This piece of code always be same for all media things to download controls
    let a = document.createElement("a");
    a.href = screenShotURL;
    a.download = `screenShot_capture_${new Date()}.png`;
    a.click();

    setTimeout( () => {
        captureBtn.classList.remove("capture-anm");
    },2000);
});

//! Change backgroung color of filter-layer onClick of filter classes
let filterLayer = document.querySelector('.filter-layer');
let filters = document.querySelectorAll('.filter');
console.log(filters);

filters.forEach((filter) => {
    filter.addEventListener('click', () => {
            //! Very important method
            let bgc = getComputedStyle(filter), getPropertyValue("background-color");
            console.log(bgc);

            filterLayer.style.backgroundColor = bgc;

    });
});

// We tried to download the video & photo with filter, but it didn't works
// As we have applied the filter before the full screen.
// 