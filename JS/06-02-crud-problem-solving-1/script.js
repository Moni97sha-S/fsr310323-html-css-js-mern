// function to get user input value
function getUserValue() {
    // 1. u got the user input
    let toDoValue = document.getElementById('user-task').value;
    console.log(toDoValue);
    //console.log(typeof toDoValue); -> string

    //.value -> to access input value

    //clear user input after storing current value
    // once I get input value after getting it I need to clear input box
    document.getElementById('user-task').value = '';

    // 2.createElement to display as list
    let listTag = document.createElement('li');
    console.log(listTag)

    // secton.innerHTML means removes all text & html inside them. To overcome that we use textNode.
    // innerText cannot be assigned | get only content-text 
    // createTextNode: -> Text with string -> typeof: object

    // 3. user-inputs change into object
    let textNode = document.createTextNode(toDoValue);
    console.log(textNode)

    // 4. appended the obj user inputs into list as list of items
    listTag.appendChild(textNode);

    // 5. now append/add those list of items into the target container
    let ulContainer = document.getElementById('task-container');
    // ulContainer.appendChild(listTag);

    // 6. How will I delete some toDo Task?
    // adding delete a task logic
    // span is my parent & an inline element created with image
    let delSpan = document.createElement('span');
    let deleteimage = document.createElement('img');
    // deleteimage.src = "https://icons8.com/icon/13903/close-window"
    deleteimage.src = "https://img.icons8.com/?size=512&id=OZuepOQd0omj&format=png"
    deleteimage.classList.add('delete-icon-style');
    delSpan.appendChild(deleteimage);

    // add ur delete option to list
    listTag.appendChild(delSpan);

    // 7. Onclick - Parent element shld be remove a task using icon we can target span
    //using eventHAndler to remove task dynamically
    delSpan.onclick = function () {
        // inside eventHandler/listener onclick function 'this' points to an element
        // Here only we don't have to write whole document.getElementById & all instead 'this' keyword can be use
        console.log(this);

        // 'this' is a keyword in JS which removes particular parent what we onclick do some event like remove
        // 'this' points to an particular element onclick among 1000s of clicks
        // 'this' is powerful tells which correct parent

        // parentElement means span
        let parentList = this.parentElement; //capturingParent
        parentList.style.display = "none"; // Pointing to none
    }
    // console.log(this); -> outside function global so entire browser window events happen

    /* 
    between 3. & 4. in line 25
    listTag.classList.add('list-item');
    
    under 7. 
    let list = document.getElementsByClassName('list-item');
    list[0].style.display='none';
    // Only first item gets deleted even when we try to delete 2ns one from list so instead we use above dynamic method line ni: 53 & 54 
    */

    // 8. check validation: if user input is empty, then it should not append in ulContainer & show some error
    // trim is to remove space know so user unwanted space given also not take input
    if (toDoValue.trim() === '') {
        alert('Please enter some task name');
    } else {
        ulContainer.appendChild(listTag);
    }
}

/***********innerHTML VS innerText VS textNode**********/

/* // Diff btwn innerHTML, innerText & textNode using <button>
function getData(){
    let todovalue = document.getElementById('user-btn');
console.log(todovalue.innerHTML); -> Res: Add todo
}

*/
/* // Diff btwn innerHTML, innerText & textNode using <div>
function getData(){let todovalue = document.getElementById('user-div');
console.log(todovalue.innerHTML); -> Res: this is div &<p>ssss</p>
todovalue.innerHTML=''; -> This will remove innertext & html tags

console.log(todovalue.innerText); -> Res: this is div & ssss
// innerText will extract only text from all tags like todovalue.innerHTML; & we cannot assign like todovalue.innerText='';

// to add a text via code use createTextNode()
let newNode=document.createTextNode('ssssqqqqq');
todovalue.appendChild(newNode);
}
*/

// HTML like string in JS using back tick (`)
/* function secondWay() {
let todovalue = document.getElementById('user-task').value;
console.log(todovalue);

let list ='<li class="list">${todovalue}</li>';
// let list = todovalue.innnerHTML + '<li class="list">${todovalue}</li>';
}

if (toDoValue.trim() === '') {
        alert('Please enter some task name');
    } else {
        let ulContainer = document.getElementById('task-container');
        ulContainer.innerHTML=list;
    }
*/