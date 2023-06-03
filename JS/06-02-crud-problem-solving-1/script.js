// function to get user input value
/* function getUserValue() {
    //u got the user input
    let toDoValue = document.getElementById('user-task').value;
    console.log(toDoValue);
    //.value -> to access input value

    //clear user input after storing current value
    // once I get input value after getting it I need to clear input box
    document.getElementById('user-task').value = '';

    //createElement to display as list
    let listTag = document.createElement('li');
    // secton.innerHTML means removes all text & html inside them. To overcome that we use textNode.
    // innerText cannot be assigned | get only content-text 
    // createTextNode: 
    let textNode = document.createTextNode(toDoValue);
    console.log(textNode)
    listTag.appendChild(textNode);
    console.log(listTag)

    //now add in the target container
    let ulContainer = document.getElementById('task-container');

    // adding delete a task logic
    let delSpan = document.createElement('span');
    let deleteimage = document.createElement('img');
    deleteimage.src = "https://icons8.com/icon/13903/close-window"
    deleteimage.classList.add('delete-icon-style');
    delSpan.appendChild(delImg);

    // add ur delete option to list
    listTag.appendChild(delSpan);

    //using eventHAndler to remove task
    //check if user input is empty show some error
    delSpan.onclick = function () {
        // this is a keyword in JS which removes particular parent what we onclick do some event like remove
        // this points to an element
        console.log(this);
        let parentList = this.parentElement;
        parentList.style.display = "none";
    }
    // console.log(this); -> global so entire browser window events happen

    // check validation: if user input is empty show some error
    // trim is to remove space know so user unwanted space given also not take input
    if (toDoValue.trim() == '') {
        alert('Please enter some task name')
    } else {
        // now add in container
        ulContainer.appendChild(listTag);

    }


} */

function secondWay() {
    let todovalue = document.getElementById('user-task').value;
    console.log(todovalue);

    let list = todovalue.innnerHTML + '<li class="list">${todovalue}</li>';

}