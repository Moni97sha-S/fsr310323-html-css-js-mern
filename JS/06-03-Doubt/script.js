console.log("Events");


// first segment is to change Background color of p on clicking btn which is an event
// How to register an Event?
// Step1: Get an element from html
// Step2: Create a function which will called while click of a button
// Step3: Register an event like 1st way or 2nd way [Recommended is 2nd way]

//Ways to register an Event
//1st way using Event Handler

/*
Step 1: Get an element from html

var btn = document.getElementById("btn-toggle");
var myDiv = document.getElementById("article");
console.log(btn);
*/

/*
Step 2: Create a function which will called while click of a button

function onbtnClick() {
    //alert("working"); -> Testing my function working i.e registered or not
    //myDiv.style.backgroundColor = 'red';
    if (myDiv.style.backgroundColor === "blue") {
        myDiv.style.backgroundColor = 'white';
    } else {
        myDiv.style.backgroundColor = 'blue';
    }
}

Step 3: Register an event like 1st way

//SYNTAX: element.name.<event-name> = function-name
btn.onclick = onbtnClick; // -> Event Handler
 */

// Second segment is to dark-light Mode toggle
// Dark Mode toggles on 1 btn click
/*
let btn = document.getElementById("btn-toggle");
function onbtnClick() {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';

    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
}
// 2nd way to register an event using Event Listener
btn.addEventListener("click", onbtnClick);
*/

// Third segment A+ and A-
// Get element from html
/*
var zoomIn = document.getElementById("zoomInBtn");
var zoomOut = document.getElementById("zoomOutBtn");
var para = document.getElementById("p1");

var fontSize = 16;
// Create function
function onZoomIn() {
    //alert("onZoom");
    fontSize += 2; // fontSize = fontSize+2 = 18px | for Next time call
    para.style.fontSize = fontSize + "px"; // 16px
}
function onZoomOut() {
    fontSize -= 2; // fontSize = fontSize-2 = 14px
    para.style.fontSize = fontSize + "px"; // 16px
}

// Register an event
zoomIn.addEventListener("click", onZoomIn);
zoomOut.addEventListener("click", onZoomOut);
*/

// Fourth segment
// Form related events
// Sign-up, Registration forms
// Q - Write a form validation on form submission, where u validate 2 things
//1. email-> it should only allow gmail
//2. password -> password and confirm password should be same


// Get Elements from html

var emailfield = document.getElementById("email");
var passwrd = document.getElementById("pwd");
var confirmPwd = document.getElementById("confirmpwd");
var form = document.getElementById("regForm");
var eMail, pWd, confrmpwd;

// Create function which calls when we click a button to register in a form
// e means event
console.log("Hi");
function onEmailKeyUp(e) {
    // console.log(e.target.value);
    eMail = e.target.value;
}

function onPwdKeyUp(e) {
    // console.log(e.target.value);
    pWd = e.target.value;
}

function onConfirmPwdKeyUp(e) {
    // console.log(e.target.value);
    confrmpwd = e.target.value;
}
function onFormSubmission(e) {
    // prevent to reload a page
    e.preventDefault();
    // console.log(eMail, pWd, confrmpwd);
    // perform validations
    if (!eMail.endsWith('@gmail.com')) {
        emailfield.style.border = "1px solid red";
        alert('Only Gmail IDs are allowed!');
    } else if (pWd === confrmpwd) {
        passwrd.style.border = "1px solid red";
        confirmPwd.style.border = "1px solid red";
        alert('Password and confirm password does not match!');
    } else {
        alert('Form submitted successfully!');
    }
}

// Register an event
emailfield.addEventListener("keyup", onEmailKeyUp);
passwrd.addEventListener("keyup", onPwdKeyUp);
confirmPwd.addEventListener("keyup", onConfirmPwdKeyUp);
form.addEventListener("submit", onFormSubmission);











