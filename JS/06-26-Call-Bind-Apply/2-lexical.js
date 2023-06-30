let name = "Firdose";

function f1(){
    let name = "CV";

    function f2(){
        console.log(name); // CV - local scope of f2() is from line no 6 to 8
    }

    f2();

    console.log(name); // CV - parent scope of f2() and local scope of f1() is from line no 3 to 13
}

f1();

console.log(name); // Firdose - global scope of f2() is from line no 1 to 2 & 14 to 17

//
let name1 = "Firdose";

function f1(){
    var name1 = "CV";

    function f2(){
        name1 = "Moni";
        console.log(name1); // Moni
    }

    f2();

    console.log(name1); // Moni
}

f1();

console.log(name); // Firdose

//
var name2 = "Firdose";

function f2(){
    name2 = "CV";

    function f2(){
        name2 = "Moni";
        console.log(name2); // Moni
    }

    f2();

    console.log(name2); // Moni
}

f2();

console.log(name); // Moni