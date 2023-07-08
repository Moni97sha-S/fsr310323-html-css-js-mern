function Car (name, price){
    this.name = name;
    this.price = price;
}
let alto = new Car("Audi5", "400000");
let bmw5 = new Car("BMW X1", "5000000");
console.log(alto);

console.log(Car.prototype); // Unnamed object (empty) -> {}

// Why unnamed object created?
// Defined class's method here
// Car.prototype refers to printInfo function inside unnamed object
Car.prototype.printInfo = function () {
    // printInfo(){
    //     console.log("Name ==", this.name);
    //     console.log("Price ==", this.price);
    // }
    console.log("Name == ", this.name);
    console.log("Price == ", this.price);
}
console.log(Car.prototype); //Res:- { printInfo: [Function (anonymous)] }

// Below code also refers to printInfo function inside unnamed object
alto.printInfo(); 
bmw5.printInfo(); 

// Car.prototype refers to unnamed object
Car.prototype.greetInfo = function () {
    console.log("Happy");
    console.log("Sad");
}
// Below code also refers to greetInfo function inside unnamed object
alto.greetInfo();
bmw5.greetInfo(); 

// alto.__proto__ & bmw5.__proto__ refers to unnamed object
alto.__proto__.f1 = function () {
    console.log("Inside f1 function");
}
bmw5.__proto__.f1 = function () {
    console.log("Inside f1 function");
} 
// Below code also refers to f1 function inside unnamed object
alto.f1();
bmw5.f1(); 

if(Car.prototype == alto.__proto__){
    console.log("Yes, they are same --> Unnamed object");
} // This condition is true so this line gets printed.

if(Car.prototype == bmw5.__proto__){
    console.log("Yes, they are same --> Unnamed object");
} // This condition is also true so this line gets printed.

