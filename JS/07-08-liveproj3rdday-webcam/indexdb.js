//! When we store recording in system

/* 
            1. Open my indexDB
            2. Initialize my database
            3. Since we are using indexDB -> We will create Object Store
*/

let database;
// openRequest is object
let openRequest = indexedDB.open("liveRecordProject");

// IndexedDB Database Opened
openRequest.addEventListener('success', () => {
    console.log("database opened");

    database = openRequest.result; // Saving in ur database
});

openRequest.addEventListener('upgradeneeded', () => {
    console.log("database upgraded");
    
    // Every videos have unique id inside video store inside database
    // keypath is video's id in database
    // video created under indexedDB which is Object Store has Key-Value pairs.
    database = openRequest.result;
    database.createObjectDatabase('video', { keyPath: "id" });
});

openRequest.addEventListener('error', () => {
    console.log("database opening error");
});

// IndexedDB Database to Object Store