function Car (name, price){
    this.name = name;
    this.price = price;
}
let alto = new Car("Audia5", "600000");
console.log(alto);

console.log(Car.prototype); // Unnamed object (empty) -> {}

// Why unnamed object created?
// Defined class's method here
Car.prototype.printInfo = function () {
    // printInfo(){
    //     console.log("Name ==", this.name);
    //     console.log("Price ==", this.price);
    // }
 }
console.log(Car.prototype); //Res:- printInfo: [Function (anonymous)]
alto.printInfo(); 

if(Car.prototype == alto.__proto__){

}

