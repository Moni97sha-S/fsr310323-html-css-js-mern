class Stack {
    constructor(){
        this.items = []; // Building empty container

    }
    // Add an element to the stack
    push(element) {
        this.items.push(element);
    }

    //Remove the top element from the stack
    pop() {
        if(this.isEmpty()){
            console.log("Pop can't be performs as Your Stack is Empty ")
        } else {
            this.items.pop();
        }
    }

    // Top means getting last index from kind of array in stack
    // arr[arr.length - 1]
    top() {
        if(this.isEmpty()){
            console.log("Top can't be calculated as Your Stack is Empty")
        } else {
            let lastIndex = this.items.length - 1
            let top = this.items[lastIndex];
            console.log("Top element on the stack is ==>", top)
        }
    }

    isEmpty() {
        let len = this.items.length;

        if(len == 0) {
            return true;
        } else {
            return false;
        }
    }

    sizeOfStack() {
        let length = this.items.length;
        console.log("Your Stack Size ==>", length);
    }
    clearStack() {
        this.items = [];
        // this.items.clear();
    }
    printStack() {
        console.log(this.items);
    }
}
const stackObject = new Stack();

/*
stackObject.sizeOfStack(); // 0

stackObject.push("A");
//stackObject.pop(); // As pop removes last element --> A
stackObject.sizeOfStack(); // 1

stackObject.push("B");
//stackObject.pop(); // As pop removes last element --> B
stackObject.sizeOfStack(); // 2

stackObject.push("C");
stackObject.sizeOfStack(); // 3
stackObject.push("D");
stackObject.sizeOfStack(); // 4


stackObject.pop(); // As pop removes last element --> D
stackObject.sizeOfStack(); // 4 - 1 ==> 3

stackObject.pop(); // Stack is empty
stackObject.sizeOfStack(); // 3 - 1 ==> 2

stackObject.pop(); // Here is also empty only so no error
stackObject.sizeOfStack(); // 2 - 1 ==> 1

stackObject.pop(); // --> empty
stackObject.sizeOfStack(); // 1 - 1 ==> 0
stackObject.top(); // --> C
*/
let x = stackObject.isEmpty();
console.log(x);

stackObject.push("A");
stackObject.push("B");

stackObject.top(); // TOP --> B 

// stackObject.clearStack();

stackObject.push("C");

stackObject.top(); // TOP --> C

