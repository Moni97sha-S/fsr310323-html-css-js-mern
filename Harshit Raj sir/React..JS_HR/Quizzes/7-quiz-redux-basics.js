// Q-1 
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

// A) 
// B) 
// C) 
// D) 

// Res: 
// Reason:

// Q-2 
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
// A)
// B) 
// C) 
// D) 

// Res: 
// Reason:

// Q-3 
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

// A) 
// B) 
// C) 
// D) 

// Res: 
// Reason:

// Q-4 
    
// A) 
// B) 
// C) 
// D) 

// Res:  
// Reason:

// Q-5 
    
// A) 
// B) 
// C) 
// D) 

// Res: 
// Reason:

// Q-6 

// A) 
// B) 
// C) 
// D) 

// Res: 
// Reason:

// Q-7 
// A) 
// B) 
// C)  
// D) 

// Res:  
// Reason:

// Q-8 
// A) 
// B) 
// C) 
// D) 

// Res: 
// Reason:

// Q-9 
    
// A) 
// B) 
// C)  
// D) 

// Res:
// Reason:

// Q-10: 
    
// A)
// B) 
// C) 
// D) 

// Res: 
// Reason: