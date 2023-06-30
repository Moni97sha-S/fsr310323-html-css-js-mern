//! Why call() & apply() - Usecase
//! Function borrowing 

let obj1 = {
    name: 'virat',
    country: "India",
    test: function (){
        console.log('test');
    },

};
obj1.test(); // test

let obj2 = {
    name: 'Virat',
    country: "India",
    test: function (){
        console.log('test');
    },
    print() {
        console.log(`Name = ${this.name} and Country = ${this.country}`); // 'this' means obj2
    }
};
obj2.test(); // test
obj2.print(); // Name = Virat and Country = India

let obj3 = {
    name: 'Smith',
    country: "Australia"
}
// Reusability of another object's function
obj3.print(); // ❌ syntax method 
obj2.print.call(obj3); // Name = Smith and Country = Australia  ✅ syntax call method
// obj2.print() --> invoke print() function from another 'obj2' object
// obj2.print.call(obj3) --> passing context of 'obj3' current object (this)

//TODO: obj3 is borrowing print() function which is inside of obj2 