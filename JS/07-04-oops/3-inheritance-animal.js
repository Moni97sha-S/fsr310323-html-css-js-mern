class Animal{
    constructor(color, name, breed, isVeg){
        this.color = color;
        this.name = name;
        this.breed = breed;
        this.isVeg = isVeg;
    }

    // Methods
    printBasicInfo(){
        console.log(`Name = ${this.name} -- Age = ${this.age} -- Breed = ${this.breed} -- IsVeg = ${this.isVeg}`)
    }
}

// Always create objects with small first letter
let tiger = new Arrival("brown", "Tiger", "cat", false);
let cow = new Arrival("White", "Cow", "Breed1", true);

console.log(tiger);
console.log(cow);

//2. create a class for cat❌ & dog✅
//❌
class Cat{
    constructor(color, name, breed, isVeg){
        this.color = color;
        this.name = name;
        this.breed = breed;
        this.isVeg = isVeg;
    }
}

//✅
class Dog extends Animal {
    //❌ Wrong use of super & constructor
    // constructor(noOfLegs, size) { 
    //     super();
    //     this.noOfLegs = noOfLegs;
    //     this.size = size;
    // }
    //✅ Correct use of super & constructor
    constructor(color, name, breed, isVeg, noOfLegs, size) { 
        super(color, name, breed, isVeg); // super class is used to call parent constructor.
        this.noOfLegs = noOfLegs;
        this.size = size;
    }
    // Methods
    printDetailInfo(){
        console.log(`Color=${this.color} -- Name = ${this.name} -- Breed = ${this.breed} -- IsVeg = ${this.isVeg} -- noOfLegs = ${this.noOfLegs} -- size = ${this.size}`);
    }
}
// When we use extends, we need to call parent constructor.
// Without super constructor, it shows Reference Error: Must call super constructor in derived class before accessing 'this' or returning from derived constructor.
// Without passing parent constructor's parameters, it shows undefined even u give value for it.
let doggy = new Dog("black", "doggy", "dog", false, "4", "small");
// When we create an object 'doggy', it creates a constructor automatically.
console.log(doggy);

doggy.printBasicInfo();
doggy.printDetailInfo();

let p1 = new Animal("grey","mouse","rat");
p1.printBasicInfo(); 
p1.printDetailInfo(); // Ref Err: Only childClass can access parent's properties. Parent's can't access childClass's properties

// Child can access it's parent properties but parent can't access it's child properties
