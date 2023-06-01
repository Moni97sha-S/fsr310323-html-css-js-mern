
/* Practice Ques:
    - Add img tag using createElement method
    - Perform delete of 2nd para element <p> tag that is inside this div
    - for a div set class, set some new attribute
    - add input tag into body
    - in html div has yellow background - change to green backgroung using JS */
//1
let image = document.createElement('img');
image.src = "arrow-up-right-from-square.svg";
// console.log(image);
document.body.appendChild(image);
//2
/* let delSecondPara = document.getElementsByClassName('newAtt');
delSecondPara.removeChild(delSecondPara.Children[2]); */
let position = document.getElementsByClassName('moni');
// position[0].replaceChild(position[0].firstElementChild);
position[0].removeChild(position[0].Children[1]); // Children no 1 in array means 2nd para

//3
let dcls = document.getElementsByClassName('newAtt');
dcls[0].setAttribute('item', 'abcd');

//4
let inp = document.createElement('input');
document.body.appendChild(inp);

//5
/* let bgclr = getElementByTagName('html');
bgclr.style.background-color = 'rgb(0,255,0)'; */

//Task - create/add a button to the body
let newBtn = document.createElement('button');
newbtn.innerHTML = "Button";
document.body.appendChild(newBtn); 
