// Event handlers
/* let btn = document.getElementsByClassName('btn');
btn[0].onclick = sayhi; 
                    [OR]
let btn = document.getElementsByClassName('btn');
btn[0].onclick = function () {
    sayhi(4)
}*/

// event listeners
/* let btn = document.getElementsByClassName('btn');
 btn[0].addEventListener('click', function () {
     // console.log('1');
     alert("hi");
 })


 // // btn[0].onclick = function () {
 // //     console.log('2')
 // // }
 // // btn[0].onclick = function () {
 // //     console.log('4')               // it OVERLAPS 2 by 4 to overcome this issue we go for addEventListner()
 // // }
 // btn[0].addEventListener('click',function(){
 //     console.log('1')
 // })
 // btn[0].addEventListener('click',function(){
 //     console.log('2')
 // })


 // btn[0].addEventListener('click',function(){
 //     console.log('3')
 // })



// btn[0].addEventListener('click',function(){
//    alert('ssss')
// })

 function sayhi(num) {
     for (let i = 0; i <= num; i++) {
         // console.log('Hi');
         let newBtn = document.createElement('button');
         newbtn.innerHTML = "Button";
         document.body.appendChild(newBtn);
     }
 } */

//bubble
window.onload = function () {
    document.getElementById("myP1").addEventListener("click", function () {
        alert("You clicked the white element!");
    });

    document.getElementById("myDiv1").addEventListener("click", function () {
        alert("You clicked the orange element!");
    });

    document.getElementById("myDiv11").addEventListener("click", function () {
        alert("You clicked the yellow element!");
    });
    // document.getElementById("myDiv0").addEventListener("click", function () {
    //     alert("bodyyyy!");
    // });

    document.getElementById("myP2").addEventListener("click", function () {
        alert("You clicked the white element!");
    }, true);

    document.getElementById("myDiv2").addEventListener("click", function () {
        alert("You clicked the orange element!");
    }, true);

    document.getElementById("myDiv0").addEventListener("click", function () {
        alert("bodyyyy!");
    }, true);
}