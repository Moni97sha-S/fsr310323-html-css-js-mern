/* var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
        1,
        1,
        0,
        1,
        0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
}
function updatePrewImage1sttime() {
    document.getElementById("main-image").src = productData.preview;
}

function showOthrImages() {
    productData.photos.forEach(function (val, index) {
        // div
        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add('subImg-holder')

        // add event to other-imgs
        // every event-handler is a function so we can't assign
        imgWrapper.onclick = function () {
            //ind==index
            // document.getElementById("main-image").src = productData.photos[ind];
            updateMainImg(index);
        }

        // this adding class of border only for 1st sub-img
        if (index === 0) {
            imgWrapper.classList.add("border");
        }

        const imageTag = document.createElement("img");
        imageTag.src = val;
        imageTag.classList.add('image-wrapper')
        imgWrapper.appendChild(imageTag);
        document.getElementById('image-container').appendChild(imgWrapper);
    })
}
updatePrewImage1sttime();
showOthrImages();

function updateMainImg(index) {
    document.getElementById("main-image").src = productData.photos[index];
    // get the other preview images 
    const otherImgs = document.getElementsByClassName("subImg-holder");
    for (let i = 0; i < otherImgs.length; i++) {
        otherImgs[i].classList.remove('border');
    }
    // add for actually selected image
    otherImgs[i].classList.add('border');
}
*/

/*
// this keyword
// 1. Global context it refers to window object
console.log(this);

// 2. normal function.context
// a. simple normal function call - it refers to window object
function sum() {
    console.log("simple function", this);
    console.log("simple function", this);
}
sum(); // Res: Both simple function points to window object

// 3. On strict mode points to both are undefined
function sum1() {
    // strict
    console.log("simple function", this);
    console.log("simple function", this);
}
sum1(); // Res: undefined unidefined

// b. Method invocation - It refers a simple from whom function gets called | Points to object
const student = {
    name: "raju",
    age: 23,
    showAge: function (a, d) {
        console.log(this.age);
    },
    showName: function () {
        console.log(this.name); // this refers student object
    }
}
student.showName(); // Res: 'raju'
student.showAge(12, 12);
// we can't call showName() as it is outside of scope

// In (=>) arrow Function how above code changes: 'this' keyword always points to window object
// This function does not create own 
// It will not create a own (Automatic) binding line other function declaration
let sumOf2 = () => {
    console.log("sumOf2", this); // points to window
}
sumOf2();

const student1 = {
    name1: "raju",
    age1: 23,
    showAges: function (a, d) {
        console.log(this.age);
    },
    showNames: () => {
        console.log('Here in arrow', this.name); // this refers window object only
        // in arrow function we can use 'this' keyword in different way
    }
}
student1.showNames(); // Res: points to window 

// 4. In arrow function correct
const student2 = {
    name2: "raju",
    age2: 23,
    showAges1: function (a, d) {
        console.log(this.age);
    },
    showNames1: function () {
        // this refers student object
        const innerFun = () => {
            console.log('Here in arrow', this.name);
        }
        innerFun()
    }
}
student2.showNames1(); // Res: 'raju'
// Here we have to create arrow function inside a normal function to access key in an object.
*/

// CALL, BIND, APPLY : 
// Call - Keep on passing functions using call method & reusability
const student = {
    fname: 'Raj',
    lname: 'Kumar',
    showName: function (a, b) {
        console.log(this);
        console.log(this.fname, a, b);
    }
}
// const callLater = student.showName;
// callLater(); // Res: points to window

const stud2 = {
    fname: 'Moni',
    lname: 'Kumar'
}
// stud2.showName(); // undefined
student.showName(1, 2); // Raj

const stud3 = {
    fname: 'Mythili',
    lname: 'Kumar'
}
student.showName(1, 2);

// CALL METHOD:- arguments passed by ,
student.showName.call(stud2, 1, 2); // Moni

// APPLY METHOD:- arguments passed inside array []
// Difference from CALL mtd is Parameters are passes within an array
student.showName.call(stud2, [1, 2]); // Moni

// BIND METHOD:- assign it (bind method for later use) & then later use it
// bind will not be called immediately
// storing value inside temporary for future
const laterUse = student.showName.bind(stud2);
// we have to call binded varaible
laterUse(1, 2); // Res: Moni 1 2
laterUse(3, 4); // Res: Moni 3 4
laterUse(5, 6); // Res: Moni 5 6

var useLaptop = student.showName.bind(stud2);
var useLaptop = student.showName.bind(stud3);
useLaptop();
