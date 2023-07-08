//! Event handling when recording is stopped
let recorder;
recorder.addEventListener("stop", () => {
    let videoData = new Blob(videoInChunk, {type: "video.mp4"})

    /*
            1. Prepare a Transaction
            2. Apply Transaction to Object Store
            3. Add video to VideoStore
    */

    //! To store videos on indexedDB
    if (database){
        // To create unique id's
        // let id = uuid.v4();
        // console.log(id);

        let transaction = database.transaction('video', 'readwrite');
        let videoStore = transaction.objectStore('video');

        // Add/insert the video to the VideoStore
        // We need to change it for every video unique id: gdusgdu
        let entry = { 
            id: id, 
            videoData: videoData
        };

        videoStore.add(entry); //! Problem found for Error
    }
});