/*
    1. Prepare a Transaction
    2. Apply Transaction to Object Store
    3. Instead of Add video, we get video from VideoStore
*/
setTimeout( () => {
    if(database){
        let transaction = database.transaction('video', 'readonly');
        let videoStore = transaction.objectStore('video');

        let videoRequest = videoStore.getAll();
        console.log(videoRequest);

        videoRequest.addEventListener('success', () => {
            let videoResult = videoRequest.result;
        });
    }
}, 1000)