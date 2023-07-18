function placeOrder(food){
    console.log("Your Order is Placed ==>", food);
    return new Promise(function(resolve,reject){
        console.log(`Your ${food} is Placed`);
        resolve(food);
    });
}

// Now chaining the function
function completePayment(food) {
    return new Promise(function(resolve,reject){
        console.log(`Payment is done for ${food}`);
        resolve(food);
        // console.log("Line no: 14 ==>", food);
    });
}
function deliveryFood(food) {
    return new Promise(function(resolve,reject){
        console.log(`Delivery is done for ${food}`);
        resolve(food);
    });
}
function enjoyUrFood(food) {
    console.log(`Enjoy ur ${food}`);
    return new Promise(function(resolve,reject){
        resolve(food); 
    });
}
function thanksComeAgain(food) {
    console.log(`Thanks for Ordering ${food}`);
    // resolve(food); will not resolve anything just prints a msg
}

// Above function returns a promise
// To accept that promise, we need to assign calling functin to a variable
let x = placeOrder("Burger");
//console.log("Line no: 32 ==>", x); // Promise { 'Burger' } by line no: 5

/* Output: Your Order is Placed ==> Burger
Your Burger is Placed
Promise { 'Burger' }
*/

// When we resolve a promise, we get a value. 
// But this is not correct way to get a value.
// Always use Promise.then()
x.then(function (value) {
    // console.log("Line no: 43 ==>", value); // Burger
    return value; //!Important if we don't return, it defines undefined
}).then(function (value) {
    //console.log("Line no: 47 ==>",value); // If we don't return at line no: 43, here value is undefined.
    let a = completePayment(value);
    //console.log("Line no: 49 ==>",a); // Promise{ 'Burger' }
    return a; // This dot then also returns a Promise so go to line no: 11
}).then(function (value) {
    let b = deliveryFood(value);
    //console.log("Line no: 53 ==>",b); // Promise{ 'Burger' }
    return b; // This dot then also returns a Promise so from line no: 18
}).then(function (value) {
    let d = enjoyUrFood(value);
    return d; 
}).then(function (value) {
    thanksComeAgain(value);
});


// When we call completePayment method, after 'x'?
// Once you got resolve value from place order like Burger, then only we will call it.
/*
    let y = x.then(function (value) {
        console.log(value); // Burger
        !If we don't return any value, then this gived undefined
        return value;
    }) ?This will also returns Promise as y is promise pending
*/

/* y.then(function(val) {
    console.log("Line no: 71 ==>", val); // Burger
    So instead of returning same thing we have to call completePayment function using shorthand in line no: 45 for chaining of dot then
});
*/

/*
    1. In PlaceOrder function, it is returning u a promise after passing burger value and returning it.

    2. How we get/grab that resolve value from promise object using .then(passing callbackFunction)
    Ans:- //? .then is used to get resolve value from the promise objects

    3. //* callback inside .then will be executed only when you promise is resolved or fullfilled

    4. //! callback inside .then will be not executed if promise is in pending or in reject status

    5. .then() will also return Promise Object when before promise is resolved means returns resolved value only if we .then() it again or rejected means if we return or console.log, it will returns Promise{ 'pending' } only. 
    
    TimeStamp: 33:29
*/