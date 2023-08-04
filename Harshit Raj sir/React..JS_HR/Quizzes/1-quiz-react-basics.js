// Q-1 What will be printed in the console?
/*
    var mNum = 10;
    const mProm1 = new Promise((resolve, reject) => {
        if(mNum >= 10) {
            resolve(mNum);
        } else {
            reject(new Error('Number not big enough'));
        }
    });

    const mProm2 = (data) => new Promise((resolve, reject) => {
        data = data + 20;
        if(data >= 30){
            resolve(data);
        } else {
            reject(new Error('Data not big enough'));
        }
    });

    mProm1
        .then(mProm2)
        .then((res) => {
            console.log(res);
        })
        .then(mProm2)
        .then(response => console.log(response))
        .catch((err) => {
            console.log(err);
        })
*/

// A) 30
// B) 50
// C) Error
// D) 30 and Error

// Res: D) 30 and Error
// Reason: mNum value 10 passed to data & then data=10+20=30 returns 30 to 2nd .then which consoles it. 2nd .then returns undefined to 3rd .then(mProm2) -> this calls mProm2 & passes data as undefined. data = undefined + 20 = NaN. Now mProm2 returns rejected value which passed to .catch() & prints Error as err.
// Eg for data = undefined + 20 = NaN:-
const a = undefined + 20;
console.log(a); // NaN
// Reason: Prints Not a Number because it is not valid value here.

// Q-2 What will be printed in the console?
/*
    class Person {
        constructor() {
            this.name = 'John';
            this.age = 30;
        }
        getName() {
            return this.name;
        }
    }
    class Athlete extends Person {
        constructor() {
            super();
            this.occupation = 'Shooter';
        }
        getDetails() {
            console.log(this.getName() + ' works as a ' + this.occupation);
        }
    }
*/
// A) "John works as a Shooter" and "John"
// B) Error
// C) "John works as a Shooter" and Error
// D) "John works as a Shooter"

// Res: A) "John works as a Shooter" and "John"
// Reason: When we create obj for Athlete(), we come to constructor & call this super() keyword will actually call this Athlete constructor's parent constructor which is Person's constructor here. For mObj, now name will be John & age is 30. Calling getDetails() will getName() returns 'John' + works as a + Shooter. Now again calling getName() with mObj.getName() inside console.log which returns John.
// Explanation: super(); calls your parent's constructor to get parent's propertirs and methods.

// Q-3 What will the following function do?
/*
    const mFunc = (arg) => {
        if(arg !== undefined && arg !== null) {
            return Object.keys(arg).map((objKey) => {
                return (
                    [...Array(arg[objKey])].map((orderItem, key) => {
                        return ({
                            id: arg[objKey].id,
                            name: arg[objKey].name
                        })
                    })
                )
            }).reduce((acc, item) => {
                return acc.concat(item)
            }, []);
        } else {
            return [];
        }
    }
*/

// A) Takes a JSON array as an input and returns another JSON array
// B) Take a JSON object as an input and returns a JSON array
// C) Takes a JSON object as an input and returns a JSON object
// D) Takes a JSON array as an input and return a JSON object

// Res: B) Takes a JSON object as an input and returns a JSON array
// Reason: 1st see if & else conditions finally this program return an array only. Then inside if's return statement Object.keys(arg) --> this tells arg is typeof Object. Rest all are traps. Finally JSON object returns JSON array. 

// Q-4 Which statement best describes Spread and Rest operator?
    
// A) Rest operator is used to manipulate arrays. Spread operator is used to create dynamic arguments.
// B) Spread operator is used to manipulate arrays. Rest operator is used to create dynamic arguments.
// C) Spread operator expands multiple arguments into an array. Rest operator merges arguments into array.
// D) None of the above.

// Res: B) Spread operator is used to manipulate arrays. Rest operator is used to create dynamic arguments.
// Reason: Spread operator used to manipulate arrays & expands multiple arguments into an array. Rest operator used to create dynamic arguments & merges argument into an array. But best describes is 3rd point. Actually 4th point also correct in terms of array

// Q-5 How do you write an inline style specifying the font-size:12px and color:red; in JSX
    
// A) style={{font-size:12,color:'red'}}
// B) style={{fontSize:'12px',color:'red'}}
// C) style={fontSize:'12px',color:'red'}
// D) style={{font-size:12px,color:'red'}}

// Res: B) style={{fontSize:'12px',color:'red'}}
// Reason:

// Q-6 How do you access a function fetch() from a h1 element in JSX?

// A) <h1>{fetch()}</h1>
// B) <h1>${fetch()}</h1>
// C) <h1>{fetch}</h1>
// D) <h1>${fetch}</h1>

// Res: A) <h1>{fetch()}</h1>
// Reason:

// Q-7 ReactJS uses _____ to increase performance.
// A) Virtual DOM
// B) Original DOM
// C) Both Virtual & Original DOM
// D) None of the above

// Res: A) Virtual DOM
// Reason:

// Q-8 How can you access the state of a component from inside of a member function?
// A) this.state
// B) this.values
// C) this.getState()
// D) this.propType.StateVal()

// Res: A) this.state
// Reason:

// Q-9 Everything in react is a ....................
    
// A) Class
// B) Module
// C) Package 
// D) Component

// Res: D) Component
// Reason:

// Q-10: How many elements does a react component return?
    
// A) 1
// B) 2
// C) Multiple Elements
// D) None of above

// Res: A) 1
// Reason: