let obj5 = {
    name: "virat",
    country: "india"
};

let obj6 = {
 name: "smith",
 country: "australia"
};

let obj7 = {
 name: "root",
 country: "england"
};

function printNameAndCountry1(greet , x){
    console.log(`Name = ${this.name}, Country = ${this.country} and Greet = ${greet} ${x}`);
};

// apply():
// 100% same as call() only difference is syntax how u pass string values in ["str1", "str2"]
printNameAndCountry1.apply(obj5, ["Hi", "Welcome"]); // Name = virat, Country = india and Greet = Hi Welcome
printNameAndCountry1.apply(obj6, ["Hello", "GoodBye"]); // {name:'smith', country = 'australia' and Greet = 'Hello' 'GoodBye'}