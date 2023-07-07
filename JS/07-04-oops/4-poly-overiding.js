class ParentClass{
    // dummy constructor
    constructor() {}
    f1() {
        console.log("Parent f1 function is invoked");
    };
}

//? U can overide parentClass's method inside ur childClass 
class ChildClass extends ParentClass{
    constructor(){
        super(); //! Call ur parent constructor
    }
    f1() {
        console.log("Child f1 function is invoked");
    };
    
}

let childObject = new ChildClass();
childObject.f1(); // Output: Parent f1 function is invoked -> without childClass f1()
childObject.f1(); // Output: Child f1 function is invoked -> with childClass f1()