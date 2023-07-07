class Car {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    //methods
    printInfo(){
        console.log("Name ==", this.name);
        console.log("Price ==", this.price);
    }
}
let alto = new Car("Audia5", "400000");
consolelog(alto);