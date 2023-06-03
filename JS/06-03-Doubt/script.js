console.log("Events");

var btn = document.getElementById("btn-toggle");
var myDiv = document.getElementById("article");
console.log(btn);

// how to register an Event
// Step1: get an element from html
// Step2: create a function which will called a click of a button
// Step3: Register an event like 1st way or 2nd way [Recommended is 2nd way]

//Ways to register an Event
//1st way using Event Handler

/* btn.onclick = onbtnClick; // -> Event Handler

//element.name.event=function name

function onbtnClick() {
    //alert("working");
    //myDiv.style.backgroundColor = 'red';
    if (myDiv.style.backgroundColor === "blue") {
        myDiv.style.backgroundColor = 'white';
    } else {
        myDiv.style.backgroundColor = 'blue';

    }
} */

// Dark Mode toggles on 1 btn click
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
btn.addEventListener("click", onbtnClick)

// A+ and A-
var zoomIn = document.getElementById("zoomInBtn");
var zoomOut = document.getElementById("zoomOutBtn");
var para = document.getElementById("p1");

var fontSize = 16;
// create function
function onZoomIn() {
    //alert("onZoom");
    fontSize += 2; // fontSize = fontSize+2 = 18px 
    para.style.fontSize = fontSize + "px"; // 16px
}
function onZoomOut() {
    fontSize -= 2; // fontSize = fontSize-2 = 14px 
    para.style.fontSize = fontSize + "px"; // 16px
}

// Register an event
btn.addEventListener("click", onZoomIn);
btn.addEventListener("click", onZoomOut);

// Form related events
// Sign-up, Registration forms
// Q - Write a form validation on form submission, where u validate 2 things
//1. email-> it should only allow gmail
//2. password -> password and confirm password should be same


// Get Elements
var emailfield = document.getElementById("email");
var passwrd = document.getElementById("pwd");
var confirmPwd = document.getElementById("confirmpwd");
var form = document.getElementById("regForm");
var eMail;
var pWd;
var confrmpwd;

// e means event
function onEmailKeyUp(e) {
    //console.log(e.target.value);
    eMail = e.target.value;
}

function onPwdKeyUp(e) {
    pWd = e.target.value;
}

function onConfirmPwdKeyUp(e) {
    confrmpwd = e.target.value;
}
function onFormSubmission(e) {
    e.preventDefault // prevent to reload a page
    //console.log(eMail, pWd, confrmpwd);
    // perform validations
    if (!eMail.endsWith('@gmail.com')) {
        alert('Only Gmail IDs are allowed!');
        emailfield.style.border = "1px solid red";
    } else if (pWd === confrmpwd) {
        alert('Password and confirm password does not match!');
        passwrd.style.border = "1px solid red";
        confirmPwd.style.border = "1px solid red";
    } else {
        alert('Form submitted successfully!');
    }
}


// Register an event
emailfield.addEventListener("keyUp", onEmailKeyUp);
passwrd.addEventListener("keyUp", onPwdKeyUp);
confirmPwd.addEventListener("keyUp", onConfirmPwdKeyUp);
form.addEventListener("submit", onFormSubmission);












